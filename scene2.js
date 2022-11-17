
let bytteSkoldMotTub = false;
let bytteTreuddMotTub = false;
let bytteInget = false;

/**Laddar in scen 2. Ser olika ut beroende på vad du gjort innan.*/
function loadScene2() {
    
    textElement.textContent = "Du fortsätter simma in i den mörka grottan där du träffar på en sjöjungfru som vill byta sin sköld eller treudd spjut mot en dykartub.";
    
    if(hasFriendsDykartubBeenPickedUp === false){
        optionButtonElement1.textContent = "Byt din egna dykartub mot treudd";
        optionButtonElement1.onclick = cantBreathWithoutTube;
        
        optionButtonElement2.textContent = "Byt din egna dykartub mot sköld";
        optionButtonElement2.onclick = cantBreathWithoutTube;
        

        optionButtonElement3.style.display = "block";
        optionButtonElement3.textContent = "Byt inget";        
        optionButtonElement3.onclick = angryMermaid
    };
    
    if(hasFriendsDykartubBeenPickedUp === true){
        optionButtonElement1.textContent = "Behåll din bästa kompis dykartub";
        optionButtonElement1.onclick = behollDykartub;

        optionButtonElement2.textContent = "Byt mot treudd";
        optionButtonElement2.onclick = bytteMotTreudd;

        
        optionButtonElement3.style.display = "block";
        optionButtonElement3.textContent = "Byt mot sköld";
        optionButtonElement3.onclick = bytteMotSkold;
    };
};


//Först if satsen ovan

/**Lämnar du din egna tub till sjöljungfru är du död. */
function cantBreathWithoutTube() {
    document.getElementById("option-buttons").replaceWith("");
    textElement. textContent = "Tyvärr lever du inte länge till utan dykartuben. 'ctrl + r' för att börja om.";
};
/**Vill du inte byta något med sjöljungfrun så får du inte fortsätta ner i grottan. */
function angryMermaid(){
    document.getElementById("option-buttons").replaceWith("");
    textElement. textContent = "Sjöljungs frun blir sur och låter dig inte fortsätta ner i grottan... 'ctrl + r' för att börja om.";
};



//onclick från andra if satsen ovan.

function bytteMotTreudd(){
    bytteTreuddMotTub = true;
    loadScene3();
}
function bytteMotSkold(){
    bytteSkoldMotTub = true;
    loadScene3();
}

function behollDykartub(){
    bytteInget = true;
    loadScene3();
}

