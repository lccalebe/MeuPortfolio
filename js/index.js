const body = document.querySelector('.corpo');
const textoPerfil = document.querySelector('.hiTexto');
const ponto = document.querySelector('.ponto');
const ponto2 = document.querySelector('.ponto2');
const title = document.querySelector('.title');
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const rodape = document.querySelector('.rodape');
const sobreDescricao = document.querySelector('.sobreDescricao');


function darkMode() {    
    body.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    body.style.borderColor = 'white';
    textoPerfil.style.color='white';
    ponto.style.color='white';
    ponto2.style.color='white';
    title.style.color='rgba(0, 0, 0, 0.95)';
    title.style.backgroundColor = 'white';
    btn.style.backgroundColor = 'white';
    btn.style.color='rgba(0, 0, 0, 0.95)';
    btn2.style.backgroundColor = 'white';
    btn2.style.color='rgba(0, 0, 0, 0.95)';
    rodape.style.backgroundColor = 'white';
    rodape.style.color='rgba(0, 0, 0, 0.95)';
    sobreDescricao.style.color='white';
}

function whiteMode() {
    body.style.backgroundColor = 'white';
    body.style.borderColor = 'rgba(0, 0, 0, 0.95)';
    textoPerfil.style.color='rgba(0, 0, 0, 0.95)';
    ponto.style.color='rgba(0, 0, 0, 0.95)';
    ponto2.style.color='rgba(0, 0, 0, 0.95)';
    title.style.color='white';
    title.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    btn.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    btn.style.color='white';
    btn2.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    btn2.style.color='white';
    rodape.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    rodape.style.color='white';
    sobreDescricao.style.color='rgba(0, 0, 0, 0.95)';
}

function ingles() {
    textoPerfil.innerHTML = "Hi, i'm Lucas Web Dev Fulsstack";
    title.innerHTML = "Profile";  
    rodape.innerHTML = "Made by Lucas Calebe"; 
    sobreDescricao.innerHTML = `Lucas discover passion for technology since childhood.
    Graduate in Physic Education now studing Computer Science and searching to enter the market as a Dev to keeping improving in tech area.
    <br>
    Already built sites with HTML, CSS and JavaScript, used Node.js and Express to build API's and used MySQL to query databases.
    Currently, he is studying even more in the Front-end area to improve himself.
    `;   
}

function pt() {
    textoPerfil.innerHTML = "Oi, sou o Lucas Web Dev Fulsstack";
    title.innerHTML = "Sobre"; 
    rodape.innerHTML = "Feito por Lucas Calebe"; 
    sobreDescricao.innerHTML = `Lucas acabou encontrando uma paixão por tecnologia tão forte quanto por esportes.
    Formado em Educação física hoje cursa Ciências da Computação e busca entrar no mercado de trabalho como desenvolvedor para continuar sua carreira na área de tecnologia.
    <br>
    Já construiu sites com HTML, CSS e JavaScript, usou Node.js e Express para construir API's e fez consultas a bancos de dados usando mySQL.
    Atualmente está se aprofundando ainda mais na área de Front-end.`;    
}


