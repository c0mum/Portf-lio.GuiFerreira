document.getElementById("contato").addEventListener("submit", function (event) {
    
    event.preventDefault(); 

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        mensagem: document.getElementById("mensagem").value
    }

    const serviceID = "service_2f037qj";
    const templeteID = "template_l6lf9ns";
    const enviar = document.getElementById("enviar")
    enviar.textContent = "Enviando..."
    enviar.disabled = true;
    

    emailjs.send (serviceID, templeteID, formData)
    .then(() => {
        alert("E-mail enviado com sucesso!");
        document.getElementById("contato").reset();
    })
    .catch((error) => {
        console.error("Erro no envio", error);
    })
    .finally(() => {
     enviar.textContent = "Enviar Mensagem";
     enviar.disabled = false;
    });

    
});