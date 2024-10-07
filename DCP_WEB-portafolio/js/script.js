document.querySelector(".Home").style.setProperty("--height", window.innerHeight + "px");

const loadFontAwesome = () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(link);
};

const createFooterContent = () => {
    const footer = document.getElementById('social-footer');
    
    const socialLinks = [
        { href: 'https://facebook.com/Developciberpc', icon: 'fab fa-facebook-f', color: '#4267B2' },
        { href: 'https://instagram.com/developciberpc', icon: 'fab fa-instagram', color: '#C13584' },
        { href: 'https://x.com/Developenguin', icon: 'fab fa-x', color: '#1D9BF0' },
        { href: 'https://api.whatsapp.com/send/?phone=56956368004', icon: 'fab fa-whatsapp', color: '#25D366' },
        { href: 'https://linkedin.com/in/#', icon: 'fab fa-linkedin-in', color: '#0077B5' }
    ];
    
    const div = document.createElement('div');
    div.className = 'social-links';
    
    socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.className = 'social-link';
        a.target = '_blank';
        a.setAttribute('aria-label', link.icon.split(' ')[1]);
        a.innerHTML = `<i class="${link.icon}" style="color: ${link.color};"></i>`;
        
        div.appendChild(a);
    });
    
    footer.appendChild(div);
    const p = document.createElement('p');
    p.textContent = '© 2024 DCP|Jonatan Farias. Todos los derechos reservados.';
    footer.appendChild(p);
};

// Ejecutar las funciones al cargar el script
loadFontAwesome();
document.addEventListener('DOMContentLoaded', createFooterContent);

// log-In

//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}