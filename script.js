const botaoMaior = document.getElementById('maiorIdade');
const botaoMenor = document.getElementById('menorIdade');
const conteudoSite = document.getElementById('main');

botaoMaior.addEventListener('click', () => {
    botaoMaior.style.display = 'none';
    botaoMenor.style.display = 'none';
    conteudoSite.style.display = 'block';
    document.querySelector('.idade-button-container').style.backgroundImage = 'none';
});

botaoMenor.addEventListener('click', () => {
    const idadeUsuario = 17;
    if (idadeUsuario < 18) {
        window.location.href = 'https://www.google.com';
    } else {
        botaoMenor.style.display = 'none';
        conteudoSite.style.display = 'block';
        document.querySelector('.idade-button-container').style.backgroundImage = 'none';
    }
});