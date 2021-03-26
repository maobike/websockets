// Referencias del html
const onLine  = document.querySelector('#onLine');
const offLine = document.querySelector('#offLine');

const socket = io();

socket.on('connect', () => {
    console.log("Conectado");
    console.log(onLine);
    console.log(offLine);
    offLine.style.display = 'display: none';
    offLine.style.display = '';

});

socket.on('disconnect', () => {
    console.log("Desconectado del server");
});