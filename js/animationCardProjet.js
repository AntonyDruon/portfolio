
const target = document.querySelector(".tailleCardProjet2");

    target.addEventListener("mouseover", function(){
        document.querySelector("h4").style.color ="rgba(144,228,168,1)";
        document.querySelector(".tailleCardProjet2").style.border="solid 1px grey";
        document.querySelector(".titreProjet span img").style.height="15px";
        document.querySelector(".titreProjet span img").style.width="15px";
        document.querySelector(".titreProjet span img").style.marginBottom="3px";
        document.querySelector(".titreProjet span img").style.marginLeft="3px";
        document.querySelector(".tailleCardProjet2").style.cursor="pointer";
    })
    target.addEventListener("mouseout", function(){
        document.querySelector("h4").style.color ="";
        document.querySelector(".tailleCardProjet2").style.border="";
        document.querySelector(".titreProjet span img").style.height="10px";
        document.querySelector(".titreProjet span img").style.width="10px";
        document.querySelector(".titreProjet span img").style.marginBottom="";
        document.querySelector(".titreProjet span img").style.marginLeft="";
        document.querySelector(".tailleCardProjet2").style.cursor="";
    })
    target.addEventListener("click", () => {
        document.location.href = 'https://github.com/AntonyDruon/Vulgarigeek';
    });

    //*************************************************************************************************************** */
    const target2 = document.querySelector(".tailleCardProjet");

    target2.addEventListener("mouseover", function(){
        document.querySelector(".tailleCardProjet h4").style.color ="rgba(144,228,168,1)";
        document.querySelector(".tailleCardProjet").style.border="solid 1px grey";
        document.querySelector(".tailleCardProjet .titreProjet span img").style.height="15px";
        document.querySelector(".tailleCardProjet .titreProjet span img").style.width="15px";
        document.querySelector(".tailleCardProjet .titreProjet span img").style.marginBottom="3px";
        document.querySelector(".tailleCardProjet .titreProjet span img").style.marginLeft="3px";
        document.querySelector(".tailleCardProjet").style.cursor="pointer";
    })
    target2.addEventListener("mouseout", function(){
        document.querySelector(".tailleCardProjet h4").style.color ="";
        document.querySelector(".tailleCardProjet").style.border="";
        document.querySelector(".tailleCardProjet .titreProjet span img").style.height="10px";
        document.querySelector(".tailleCardProjet .titreProjet span img").style.width="10px";
        document.querySelector(".tailleCardProjet .titreProjet span img").style.marginBottom="";
        document.querySelector(".tailleCardProjet .titreProjet span img").style.marginLeft="3px";
        document.querySelector(".tailleCardProjet").style.cursor="";
    })
    target2.addEventListener("click", () => {
        document.location.href = 'https://github.com/AntonyDruon/Calculatrice.JS';
    });
    //*************************************************************************************************************** */
    const target3 = document.querySelector(".tailleCardProjet3");

    target3.addEventListener("mouseover", function(){
        document.querySelector(".tailleCardProjet3 h4").style.color ="rgba(144,228,168,1)";
        document.querySelector(".tailleCardProjet3").style.border="solid 1px grey";
        document.querySelector(".tailleCardProjet3 .titreProjet span img").style.height="15px";
        document.querySelector(".tailleCardProjet3 .titreProjet span img").style.width="15px";
        document.querySelector(".tailleCardProjet3 .titreProjet span img").style.marginBottom="3px";
        document.querySelector(".tailleCardProjet3 .titreProjet span img").style.marginLeft="3px";
        document.querySelector(".tailleCardProjet3").style.cursor="pointer";
    })
    target3.addEventListener("mouseout", function(){
        document.querySelector(".tailleCardProjet3 h4").style.color ="";
        document.querySelector(".tailleCardProjet3").style.border="";
        document.querySelector(".tailleCardProjet3 .titreProjet span img").style.height="10px";
        document.querySelector(".tailleCardProjet3 .titreProjet span img").style.width="10px";
        document.querySelector(".tailleCardProjet3 .titreProjet span img").style.marginBottom="";
        document.querySelector(".tailleCardProjet3 .titreProjet span img").style.marginLeft="3px";
        document.querySelector(".tailleCardProjet3").style.cursor="";
    })
    target3.addEventListener("click", () => {
        document.location.href = 'https://github.com/AntonyDruon/MuseeApp/tree/main';
    });
    //*************************************************************************************************************** */
    const target4 = document.querySelector(".tailleCardProjet4");

    target4.addEventListener("mouseover", function(){
        document.querySelector(".tailleCardProjet4 h4").style.display ="none";
        document.querySelector(".tailleCardProjet4 .imgSite").style.display ="none";
        document.querySelector(".tailleCardProjet4 .langage").style.display ="none";
        document.querySelector(".tailleCardProjet4 .descriptionTexte p").style.display ="none";
       
        document.querySelector(".tailleCardProjet4").style.backgroundColor ="#80808088";
        document.querySelector(".tailleCardProjet4 .enCoursDeDev").innerHTML ="En cours de développement...";
        

       
       
        document.querySelector(".tailleCardProjet4").style.cursor="pointer";
    })
    target4.addEventListener("mouseout", function(){
        document.querySelector(".tailleCardProjet4 h4").style.color ="";
        document.querySelector(".tailleCardProjet4").style.border="";
        document.querySelector(".tailleCardProjet4 .titreProjet span img").style.height="10px";
        document.querySelector(".tailleCardProjet4 .titreProjet span img").style.width="10px";
        document.querySelector(".tailleCardProjet4 .titreProjet span img").style.marginBottom="";
        document.querySelector(".tailleCardProjet4 .titreProjet span img").style.marginLeft="3px";
        document.querySelector(".tailleCardProjet4 h4").style.display ="";
        document.querySelector(".tailleCardProjet4 .imgSite").style.display ="";
        document.querySelector(".tailleCardProjet4 .langage").style.display ="";
        document.querySelector(".tailleCardProjet4 .descriptionTexte p").style.display ="";
        document.querySelector(".tailleCardProjet4 .enCoursDeDev").innerHTML ="";

       
        document.querySelector(".tailleCardProjet4").style.backgroundColor ="";
        document.querySelector(".tailleCardProjet4").style.cursor="";
    })
    // target4.addEventListener("click", () => {
    //     document.location.href = 'https://github.com/AntonyDruon/MuseeApp/tree/main';
    // });