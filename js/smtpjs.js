console.log("test");
function sendEmail(){
    Email.send({
        SecureToken : "766cf387-e0af-4158-972f-2f7e4cc08eb6",
        To : 'druonantony@gmail.com',
        From : document.querySelector("#email").value,
        Subject : "Contact portfolio",
        Body : "Nom : " + document.querySelector("#name").value 
        + "<br> Email : " + document.querySelector("#email").value
        + "<br> Message : " + document.querySelector("#message").value
    }).then(
      message => alert(message)
    );
}