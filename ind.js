const imagens = document.querySelectorAll('.js-listas li')
const textos = document.querySelectorAll('.js-conteudo section')

console.log(imagens)
console.log(textos)

function ativarConteudo(indice){
    textos.forEach((item) => {
        item.classList.remove('active')
    })
    textos[indice].classList.add('active')
}

imagens.forEach((item, indice) => {
    item.addEventListener ('click', () => {
        ativarConteudo(indice)
    })
})

// -----------------------------------------------------------------------------------------------------------

const pergunta = document.querySelectorAll('.js-informações .pergunta')
const resposta = document.querySelectorAll('.js-informações .resposta')

console.log(pergunta)
console.log(resposta)

function ativarRespostas(indice){
    resposta[indice].classList.add('active')
}

function removerRespostas(indice){
    pergunta[indice].addEventListener('click', () => {
        if (resposta[indice].classList.contains('active')){
            resposta[indice].classList.remove('active');
        }

        else{
            resposta[indice].classList.add('active');
        }
    });
}

pergunta.forEach((item, indice) => {
    item.addEventListener ('click', () => {
        ativarRespostas(indice)
        removerRespostas(indice)
    })
})

//---------------------------------------------------------------------------------------------------------

export default function menuMobileInit() {
    const toggle = document.querySelector('.toggle');
    const menuList = document.querySelector('.js-list');

    if (toggle && menuList) {
        function toggleMenu() {
            menuList.classList.toggle('active');
            const toggleIcon = toggle.querySelector('span');
            toggleIcon.classList.toggle('active');
            toggleIcon.innerText = toggleIcon.innerText === 'menu' ? 'close' : 'menu';
        }

        toggle.addEventListener('click', toggleMenu);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// import accordionInit from "./modules/accordion.js";
// import tabMenuInit from "./modules/tabmenu.js";
// import menuMobileInit from "./modules/menuMobile.js";

// tabMenuInit('.js-menu li', '.js-conteudo section')
// accordionInit()
// menuMobileInit()
