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

function menuMobileInit() {
    const toggle = document.querySelector('.toggle');
    const menuList = document.querySelector('.js-list .menu-link');

    console.log(toggle)
    console.log(menuList)

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

const form = document.querySelector('.form')
const dados = {}

function pegarValorForm(event){
    dados[event.target.name] = event.target.value
    console.log(dados)
}



form.addEventListener('change', pegarValorForm)
form.addEventListener('submit', (event) => {
    event.preventDefault()
    localStorage.setItem(dados.email, JSON.stringify(dados))
    alert("Dados salvos com sucesso")
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export function menuMobileInit() {
//     const menu = document.querySelector('.menu');
//     const menuList = document.querySelector('.js-list');

//     if (menu && menuList) {
//         function toggleMenu() {
//             menuList.classList.toggle('active');
//             const menuIcon = menu.querySelector('span');
//             menuIcon.classList.toggle('active');
//             menuIcon.innerText = menuIcon.innerText === 'menu' ? 'close' : 'menu';
//         }

//         menu.addEventListener('click', toggleMenu);
//     }
// }

// import accordionInit from "./modules/accordion.js";
// import tabMenuInit from "./modules/tabmenu.js";
// import menuMobileInit from "./modules/menuMobile.js";

// tabMenuInit('.js-menu li', '.js-conteudo section')
// accordionInit()
// menuMobileInit()
