// Referencias del html
const onLine     = document.querySelector('#onLine');
const offLine    = document.querySelector('#offLine');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');
const socket = io();

socket.on('connect', () => {
    //console.log("Conectado");
    offLine.style.display = 'none';
    onLine.style.display = '';

});

socket.on('disconnect', () => {
    //console.log("Desconectado del server");
    offLine.style.display = '';
    onLine.style.display = 'none';
});

// Cliente recibe evento emitido desde el servidor
socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
});

btnEnviar.addEventListener( 'click', () =>{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123456789',
        fecha: new Date().getTime()
    }

    socket.emit( 'enviar-mensaje', payload, ( id ) => {
        console.log('Desde el server', id);
    });
});