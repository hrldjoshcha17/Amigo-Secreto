let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === '') {
        alert('Nombre añadido exitosamente');
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido añadido.');
        return;
    }

    
    amigos.push(nombreAmigo);

    
    inputAmigo.value = '';

    
    actualizarListaAmigos();
}


function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


function amigoAleatorio() {
    if (amigos.length < 2) {
        alert('Debes añadir al menos dos nombres para realizar el amigo secreto');
        return;
    }

    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}


document.querySelector('.button-add').addEventListener('click', agregarAmigo);


document.querySelector('.button-draw').addEventListener('click', amigoAleatorio);