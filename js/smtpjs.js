console.log("test");
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "druonantony@gmail.com",
        Password : "31443CD69896B1816F194C9AFED02256FA5E",
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