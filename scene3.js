/**Du hittar Guldet! Vill du rädd din kompis eller ta guldet. */
function loadScene3(){
    optionButtonElement3.style.display = "none";

    textElement.textContent = "Du fortsätter simma och ser ett glänsande sken. DU HAR HITTAT GULD KISTAN!";

    optionButtonElement1.textContent = "Fortsätt leta efter din bästa kompis";
    optionButtonElement1.onclick = loadScene4;

    optionButtonElement2.textContent = "Ta med guldet upp";
    optionButtonElement2.onclick = pengar;
}



/**Du tog pengar istället för att rädda din bästa kompis.*/ 
function pengar(){
    textElement.textContent = "Du tog guldet men nu har du ingen att spendera pengarna tillsammans med... :(";

    optionButtonElement1.textContent = "Restart";
    optionButtonElement1.onclick = loadStartScene;

    optionButtonElement2.style.display = "none";
    optionButtonElement3.style.display = "none";
};