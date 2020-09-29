const socket = io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageinput = document.getElementById('messageinp');

const messagecontainer = document.querySelector('.container');

const audio = new Audio('/home/mamta/Desktop/Realtime_chat_application/ring.mp3');

const append = (message,position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);

    if (position =='left') {
        audio.play();
    }
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageinput.value;
    append(`You: ${message}`, 'right')
    socket.emit('send', message)
    messageinput.value = ''
})

const name = prompt("Enter Your Name To Join")
socket.emit('new-user-joined',name);

socket.on('user-joined',name=>{
    append(`${name},Has Joined The Chat `,'left')
})

socket.on('receive', data =>{
    append(`${data.name} :- ${data.message}`, 'left')
})

socket.on('left', name=>{
    append(`${name},Has Left The Chat`, 'left')
})



