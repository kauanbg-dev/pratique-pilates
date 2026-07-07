const formulario = document.getElementById("form-whatsapp");

formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const horario = document.getElementById("horario").value;
    const mensagem = document.getElementById("mensagem").value;

    const numeroWhatsapp = "5521965221764";

    const texto = `
Olá, gostaria de agendar uma aula experimental de Pilates.

Nome: ${nome}
WhatsApp: ${telefone}
Melhor horário: ${horario}

Mensagem:
${mensagem}
    `;

    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});

const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu a");


menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");

});


links.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});