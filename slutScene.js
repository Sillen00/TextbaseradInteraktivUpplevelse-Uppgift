/**Slut scene med ny background image */
function slutScene(){
    document.body.style.backgroundImage = "url('./images/Grotta-under-vatten.jpg')";

    textElement.textContent = "Efter att tagit dig förbi hajen hittar du din bästa kompis i en undervattens grotta. Ni delar på det sista luften som är kvar i din dykartub och tar er snabbaste vägen ut och upp till ytan och lever lyckliga i alla era dagar. Bra vänner är oftast mer värt än pengar!";


    optionButtonElement1.textContent = "Grattis! Spela igen!";
    optionButtonElement1.onclick = loadStartScene;

    optionButtonElement2.style.display = "none";
    optionButtonElement3.style.display = "none";
};