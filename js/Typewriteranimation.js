const txtAnim = document.querySelector(".container h4");

new Typewriter(txtAnim, {
    deletespeed: 50,
    loop: true
})
.changeDelay(20)
.typeString('Je suis un développeur')
.pauseFor(500)
.typeString(' <span style="color : #67D5F3"> <strong>REACT</strong></span>')
.pauseFor(1300)
.deleteChars(5)
.typeString(' <span style="color : #659A60"> NODE.JS</span>')
.pauseFor(1300)
.deleteChars(8)
.typeString(' <span style="color : #EED81D"> JAVASCRIPT</span>')
.pauseFor(1300)

.start()

