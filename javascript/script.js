const nome = window.prompt('Digite um nome de usuário:');
const user = document.querySelector('.nome');
user.innerHTML = nome;

const bodye = document.querySelector('body');
const olho = document.querySelector('.olho');
const header = document.querySelector('header')
olho.addEventListener('click',() => {
    bodye.classList.toggle('black');
    header.classList.toggle('cor');
})

const data = new Date();
const mostrar = document.querySelector('.hora');
const hora = data.getHours();
setInterval(() => {
    mostrar.innerHTML = `${hora < 10 ? '0' + hora : hora}:${data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()}`;                 
},1000);

const textArea = document.querySelector('.textArea');
const input = document.querySelector('#input');
const submit = document.querySelector('.enviar');
const heart = document.querySelector('.figurinha');
const div = document.createElement('div');

submit.addEventListener('click', () => {
    div.innerHTML += `
    <h5 class="nome01">${nome}</h5>
    <p>${input.value}</p> 
    <i class="fa-solid fa-check check"></i>`;
    textArea.appendChild(div);
})
heart.addEventListener('click', () => {
    div.innerHTML += `
    <h5 class="nome01">${nome}</h5>
    <i style="color: rgb(255, 0, 64);" class="fa-solid fa-heart"></i> 
    <i class="fa-solid fa-check check"></i>`;
    textArea.appendChild(div);
})

const menu = document.querySelector('.menui');
menu.addEventListener('click', () => {
    const janela = document.querySelector('.click');
    janela.classList.toggle('open');
})