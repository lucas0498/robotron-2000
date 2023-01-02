const robotron = document.querySelector("#robotron")
robotron.addEventListener('click', () => {
    console.log('Cliquei no Robo.')
});

function dizOi(nome){
    console.log(`Oi ${nome}`);
    console.log('Bem-vindo ao Robotron 2000');
}

dizOi('Lucas');