
const arrowcha = document.querySelector('.arrow')

const mainDiv = document.querySelector('.section-container')

const dynamicContainer = document.querySelector('.dynamicContainer')
 
const pageOnePlaceHolderV = document.querySelector('.pageOnePlaceHolderV')

const pageOnePlaceHolder = document.querySelector('.pageOnePlaceHolder')

const logoteam = document.querySelector('.logoteam')
    logoteam.classList.add("logoteam")


const button1 = document.querySelector('.button1')
    button1.classList.add("button1")
const button2 = document.querySelector('.button2')
    button2.classList.add("button2")
const button3 = document.querySelector('.button3')
    button3.classList.add("button3")


const textInButton1_1 = document.createElement("div")
 textInButton1_1.classList.add("textInButton1_1")

const textInButton1_2 = document.createElement("div")
 textInButton1_2.classList.add("textInButton1_2")

const textInButton1_3 = document.createElement("div")
 textInButton1_3.classList.add("textInButton1_3")


const textInButton2_1 = document.createElement("div")
 textInButton2_1.classList.add("textInButton2_1")

const textInButton2_2 = document.createElement("div")
 textInButton2_2.classList.add("textInButton2_2")

const textInButton2_3 = document.createElement("div")
 textInButton2_3.classList.add("textInButton2_3")


const textInButton3_1 = document.createElement("div")
 textInButton3_1.classList.add("textInButton3_1")

const textInButton3_2 = document.createElement("div")
 textInButton3_2.classList.add("textInButton3_2")

const textInButton3_3 = document.createElement("div")
 textInButton3_3.classList.add("textInButton3_3")


const textInButton4_1 = document.createElement("div")
 textInButton4_1.classList.add("textInButton4_1")

const textInButton4_2 = document.createElement("div")
 textInButton4_2.classList.add("textInButton4_2")

const textInButton4_3 = document.createElement("div")
 textInButton4_3.classList.add("textInButton4_3")


 button1.appendChild(textInButton1_1)
 button2.appendChild(textInButton1_2)
 button3.appendChild(textInButton1_3)





const Vinbutton1_1 = document.querySelector('.Vinbutton1_1');
Vinbutton1_1.classList.add("Vinbutton1_1");
Vinbutton1_1.innerText = "";
Vinbutton1_1.addEventListener('click', function () {
    if (Vinbutton1_1.classList.contains("Vinbutton1_1")) {
        Vinbutton1_1.className = "Vinbutton1_1wide";
        Vinbutton1_2.className = "Vinbutton1_2";
        Vinbutton1_3.className = "Vinbutton1_3";

        textInButton1_1.className = "textInButton1_1Expand";
        textInButton1_2.className = "textInButton1_2";
        textInButton1_3.className = "textInButton1_3";
        }
else if (Vinbutton1_1.classList.contains("Vinbutton1_1wide")) {
        Vinbutton1_1.className = "Vinbutton1_1";
        Vinbutton1_2.className = "Vinbutton1_2";
        Vinbutton1_3.className = "Vinbutton1_3";

        textInButton1_1.className = "textInButton1_1";
        textInButton1_2.className = "textInButton1_2";
        textInButton1_3.className = "textInButton1_3";
        }
else if (Vinbutton1_1.classList.contains("Vinbutton1_1high1") || Vinbutton1_1.classList.contains("Vinbutton1_1high2")) {
        Vinbutton1_1.className = "Vinbutton1_1wide";
        Vinbutton1_2.className = "Vinbutton1_2";
        Vinbutton1_3.className = "Vinbutton1_3";

        textInButton1_1.className = "textInButton1_1Expand";
        textInButton1_2.className = "textInButton1_2";
        textInButton1_3.className = "textInButton1_3";
        }
else if (Vinbutton1_1.classList.contains("Vinbutton2_1")) {
        Vinbutton1_1.className = "Vinbutton2_1wide";
        Vinbutton1_2.className = "Vinbutton2_2";
        Vinbutton1_3.className = "Vinbutton2_3";

        textInButton2_1.className = "textInButton2_1Expand";
        textInButton2_2.className = "textInButton2_2";
        textInButton2_3.className = "textInButton2_3";
        }
else if (Vinbutton1_1.classList.contains("Vinbutton2_1wide")) {
        Vinbutton1_1.className = "Vinbutton2_1";
        Vinbutton1_2.className = "Vinbutton2_2";
        Vinbutton1_3.className = "Vinbutton2_3";

        textInButton2_1.className = "textInButton2_1";
        textInButton2_2.className = "textInButton2_2";
        textInButton2_3.className = "textInButton2_3";
        }
else if (Vinbutton1_1.classList.contains("Vinbutton2_1high1") || Vinbutton1_1.classList.contains("Vinbutton2_1high2")) {
        Vinbutton1_1.className = "Vinbutton2_1wide";
        Vinbutton1_2.className = "Vinbutton2_2";
        Vinbutton1_3.className = "Vinbutton2_3";

        textInButton2_1.className = "textInButton2_1Expand";
        textInButton2_2.className = "textInButton2_2";
        textInButton2_3.className = "textInButton2_3";
        }
else if (Vinbutton1_1.classList.contains("Vinbutton3_1")) {
        Vinbutton1_1.className = "Vinbutton3_1wide";
        Vinbutton1_2.className = "Vinbutton3_2";
        Vinbutton1_3.className = "Vinbutton3_3";

        textInButton3_1.className = "textInButton3_1Expand";
        textInButton3_2.className = "textInButton3_2";
        textInButton3_3.className = "textInButton3_3";
        }
else if (Vinbutton1_1.classList.contains("Vinbutton3_1wide")) {
        Vinbutton1_1.className = "Vinbutton3_1";
        Vinbutton1_2.className = "Vinbutton3_2";
        Vinbutton1_3.className = "Vinbutton3_3";

        textInButton3_1.className = "textInButton3_1";
        textInButton3_2.className = "textInButton3_2";
        textInButton3_3.className = "textInButton3_3";
        }
else if (Vinbutton1_1.classList.contains("Vinbutton3_1high1") || Vinbutton1_1.classList.contains("Vinbutton3_1high2")) {
        Vinbutton1_1.className = "Vinbutton3_1wide";
        Vinbutton1_2.className = "Vinbutton3_2";
        Vinbutton1_3.className = "Vinbutton3_3";

        textInButton3_1.className = "textInButton3_1Expand";
        textInButton3_2.className = "textInButton3_2";
        textInButton3_3.className = "textInButton3_3";
        }
else if (Vinbutton1_1.classList.contains("Vinbutton4_1")) {
        Vinbutton1_1.className = "Vinbutton4_1wide";
        Vinbutton1_2.className = "Vinbutton4_2";
        Vinbutton1_3.className = "Vinbutton4_3";

        textInButton4_1.className = "textInButton4_1Expand";
        textInButton4_2.className = "textInButton4_2";
        textInButton4_3.className = "textInButton4_3";
        }
else if (Vinbutton1_1.className == "Vinbutton4_1wide") {
        Vinbutton1_1.className = "Vinbutton4_1";
        Vinbutton1_2.className = "Vinbutton4_2";
        Vinbutton1_3.className = "Vinbutton4_3";

        textInButton4_1.className = "textInButton4_1";
        textInButton4_2.className = "textInButton4_2";
        textInButton4_3.className = "textInButton4_3";

   
    }
});


const Vinbutton1_2 = document.querySelector('.Vinbutton1_2');
Vinbutton1_2.classList.add("Vinbutton1_2");
Vinbutton1_2.innerText = "";

Vinbutton1_2.addEventListener('click', function() {
    if (Vinbutton1_2.classList.contains("Vinbutton1_2")) {
        Vinbutton1_1.className = "Vinbutton1_1high1";
        Vinbutton1_2.className = "Vinbutton1_2wide";
        Vinbutton1_3.className = "Vinbutton1_3";

        textInButton1_1.className = "textInButton1_1";
        textInButton1_2.className = "textInButton1_2Expand";
        textInButton1_3.className = "textInButton1_3";
        }
else if (Vinbutton1_2.classList.contains("Vinbutton1_2wide")) {
        Vinbutton1_1.className = "Vinbutton1_1";
        Vinbutton1_2.className = "Vinbutton1_2";
        Vinbutton1_3.className = "Vinbutton1_3";

        textInButton1_1.className = "textInButton1_1";
        textInButton1_2.className = "textInButton1_2";
        textInButton1_3.className = "textInButton1_3";
        }
else if (Vinbutton1_2.classList.contains("Vinbutton1_2high1")) {
        Vinbutton1_1.className = "Vinbutton1_1high1";
        Vinbutton1_2.className = "Vinbutton1_2wide";
        Vinbutton1_3.className = "Vinbutton1_3";

        textInButton1_1.className = "textInButton1_1";
        textInButton1_2.className = "textInButton1_2Expand";
        textInButton1_3.className = "textInButton1_3";
        }
else if (Vinbutton1_2.classList.contains("Vinbutton2_2")) {
        Vinbutton1_1.className = "Vinbutton2_1high1";
        Vinbutton1_2.className = "Vinbutton2_2wide";
        Vinbutton1_3.className = "Vinbutton2_3";

        textInButton2_1.className = "textInButton2_1";
        textInButton2_2.className = "textInButton2_2Expand";
        textInButton2_3.className = "textInButton2_3";
        }
else if (Vinbutton1_2.classList.contains("Vinbutton2_2wide")) {
        Vinbutton1_1.className = "Vinbutton2_1";
        Vinbutton1_2.className = "Vinbutton2_2";
        Vinbutton1_3.className = "Vinbutton2_3";

        textInButton2_1.className = "textInButton2_1";
        textInButton2_2.className = "textInButton2_2";
        textInButton2_3.className = "textInButton2_3";
        }
else if (Vinbutton1_2.classList.contains("Vinbutton2_2high1")) {
        Vinbutton1_1.className = "Vinbutton2_1high1";
        Vinbutton1_2.className = "Vinbutton2_2wide";
        Vinbutton1_3.className = "Vinbutton2_3";

        textInButton2_1.className = "textInButton2_1";
        textInButton2_2.className = "textInButton2_2Expand";
        textInButton2_3.className = "textInButton2_3";
        }
else if (Vinbutton1_2.classList.contains("Vinbutton3_2")) {
        Vinbutton1_1.className = "Vinbutton3_1high1";
        Vinbutton1_2.className = "Vinbutton3_2wide";
        Vinbutton1_3.className = "Vinbutton3_3";

        textInButton3_1.className = "textInButton3_1";
        textInButton3_2.className = "textInButton3_2Expand";
        textInButton3_3.className = "textInButton3_3";
        }
else if (Vinbutton1_2.classList.contains("Vinbutton3_2wide")) {
        Vinbutton1_1.className = "Vinbutton3_1";
        Vinbutton1_2.className = "Vinbutton3_2";
        Vinbutton1_3.className = "Vinbutton3_3";

        textInButton3_1.className = "textInButton3_1";
        textInButton3_2.className = "textInButton3_2";
        textInButton3_3.className = "textInButton3_3";
        }
else if (Vinbutton1_2.classList.contains("Vinbutton3_2high1")) {
        Vinbutton1_1.className = "Vinbutton3_1high1";
        Vinbutton1_2.className = "Vinbutton3_2wide";
        Vinbutton1_3.className = "Vinbutton3_3";

        textInButton3_1.className = "textInButton3_1";
        textInButton3_2.className = "textInButton3_2Expand";
        textInButton3_3.className = "textInButton3_3";
        }
else if (Vinbutton1_2.classList.contains("Vinbutton4_2")) {
        Vinbutton1_1.className = "Vinbutton4_1high1";
        Vinbutton1_2.className = "Vinbutton4_2wide";
        Vinbutton1_3.className = "Vinbutton4_3";

        textInButton4_1.className = "textInButton4_1";
        textInButton4_2.className = "textInButton4_2Expand";
        textInButton4_3.className = "textInButton4_3";
        }
else if (Vinbutton1_2.className == "Vinbutton4_2wide") {
        Vinbutton1_1.className = "Vinbutton4_1";
        Vinbutton1_2.className = "Vinbutton4_2";
        Vinbutton1_3.className = "Vinbutton4_3";

        textInButton4_1.className = "textInButton4_1";
        textInButton4_2.className = "textInButton4_2";
        textInButton4_3.className = "textInButton4_3";
        }
else if (Vinbutton1_2.className == "Vinbutton4_2high1") {
        Vinbutton1_1.className = "Vinbutton4_1high1";
        Vinbutton1_2.className = "Vinbutton4_2wide";
        Vinbutton1_3.className = "Vinbutton4_3";

        textInButton4_1.className = "textInButton4_1";
        textInButton4_2.className = "textInButton4_2Expand";
        textInButton4_3.className = "textInButton4_3";
        }
});



const Vinbutton1_3 = document.querySelector('.Vinbutton1_3');
Vinbutton1_3.classList.add("Vinbutton1_3");
Vinbutton1_3.innerText = "";

Vinbutton1_3.addEventListener('click', function() {
    if (Vinbutton1_3.classList.contains("Vinbutton1_3")) {
        Vinbutton1_1.className = "Vinbutton1_1high2";
        Vinbutton1_2.className = "Vinbutton1_2high1";
        Vinbutton1_3.className = "Vinbutton1_3wide";

        textInButton1_1.className = "textInButton1_1";
        textInButton1_2.className = "textInButton1_2";
        textInButton1_3.className = "textInButton1_3Expand";
        }
else if (Vinbutton1_3.classList.contains("Vinbutton1_3wide")) {
        Vinbutton1_1.className = "Vinbutton1_1";
        Vinbutton1_2.className = "Vinbutton1_2";
        Vinbutton1_3.className = "Vinbutton1_3";

        textInButton1_1.className = "textInButton1_1";
        textInButton1_2.className = "textInButton1_2";
        textInButton1_3.className = "textInButton1_3";
        }
else if (Vinbutton1_3.classList.contains("Vinbutton2_3")) {
        Vinbutton1_1.className = "Vinbutton2_1high2";
        Vinbutton1_2.className = "Vinbutton2_2high1";
        Vinbutton1_3.className = "Vinbutton2_3wide";

        textInButton2_1.className = "textInButton2_1";
        textInButton2_2.className = "textInButton2_2";
        textInButton2_3.className = "textInButton2_3Expand";
        }
else if (Vinbutton1_3.classList.contains("Vinbutton2_3wide")) {
        Vinbutton1_1.className = "Vinbutton2_1";
        Vinbutton1_2.className = "Vinbutton2_2";
        Vinbutton1_3.className = "Vinbutton2_3";

        textInButton2_1.className = "textInButton2_1";
        textInButton2_2.className = "textInButton2_2";
        textInButton2_3.className = "textInButton2_3";
        }
else if (Vinbutton1_3.classList.contains("Vinbutton3_3")) {
        Vinbutton1_1.className = "Vinbutton3_1high2";
        Vinbutton1_2.className = "Vinbutton3_2high1";
        Vinbutton1_3.className = "Vinbutton3_3wide";

        textInButton3_1.className = "textInButton3_1";
        textInButton3_2.className = "textInButton3_2";
        textInButton3_3.className = "textInButton3_3Expand";
        }
else if (Vinbutton1_3.classList.contains("Vinbutton3_3wide")) {
        Vinbutton1_1.className = "Vinbutton3_1";
        Vinbutton1_2.className = "Vinbutton3_2";
        Vinbutton1_3.className = "Vinbutton3_3";

        textInButton3_1.className = "textInButton3_1";
        textInButton3_2.className = "textInButton3_2";
        textInButton3_3.className = "textInButton3_3";
        }
else if (Vinbutton1_3.className == "Vinbutton4_3") {
        Vinbutton1_1.className = "Vinbutton4_1high2";
        Vinbutton1_2.className = "Vinbutton4_2high1";
        Vinbutton1_3.className = "Vinbutton4_3wide";

        textInButton4_1.className = "textInButton4_1";
        textInButton4_2.className = "textInButton4_2";
        textInButton4_3.className = "textInButton4_3Expand";
        }
else if (Vinbutton1_3.className == "Vinbutton4_3wide") {
        Vinbutton1_1.className = "Vinbutton4_1";
        Vinbutton1_2.className = "Vinbutton4_2";
        Vinbutton1_3.className = "Vinbutton4_3";

        textInButton4_1.className = "textInButton4_1";
        textInButton4_2.className = "textInButton4_2";
        textInButton4_3.className = "textInButton4_3";
        }

});




textInButton1_1.innerText = '\n Een goede rijopleiding kent een duidelijke structuur. \n Elk onderdeel sluit aan bij het vorige, en op jou nivieau. Hiermee voldoen wij aan de R.I.S. en is beoordeeld door het CBR met een 9,6!\n\n Om jou op deze manier rijles te kunnen geven is het belangrijk dat jij niet eerst iemand weg moet brengen of moet op halen.  Dus doe ik dat voor je!\n\n\n\n'
textInButton1_2.innerText = '\n Elke leerling ontvangt gratis 2 leenboeken inclusief 10 examen training! \n\n Daarnaast krijg je demonstraties, video instructies, tekeningen en handouts (schematische weergave van de verkeerstaken). Deze kun je gratis downloaden zodat je precies weet hoe je het moet aanpakken en zodat jij je kan voorbereiden op je rijles.\n\n\n\n'
textInButton1_3.innerText = '\n AD(H)D, angstig of iets anders?\nDoor de opbouw van de opleiding is dat geen probleem!\n\nSnel als het kan en langzaam als dat moet.\n\n\n\n'


textInButton2_1.innerText = '\n Er is veel onderzoek gedaan naar invloed van rijsimulatoren op het autorijden o.a. door TNO en de TU Delft. \n\n Dit resulteerde in de rijsimulator zoals bij team maar ook wordt deze ingezet op de universiteit voor onderzoek naar bv verkeersveiligheid. \n\n Zij concludeerde dat het jouw tot 2x sneller opleidt dan reguliere rijlessen.\n\n\n\n'
textInButton2_2.innerText = '\n2 uur simulator les voor de prijs van 1 uur rijles. 2 uur simulator les voor de prijs van 1 uur rijles\n\n\n\n'
textInButton2_3.innerText = '\nDe rijsimulator volgt hetzelde schema als de praktijk en is gebaseert op de R.I.S. methode, hierdoor sluit alles precies op elkaar aan.\n\n\n\n'



textInButton3_1.innerText = '\n Bij de start van je rijopleiding ontvang 2 gratisleenboeken, het R.I.S. boek en een theorie boek inclusief 10 examen training.\n\n Daarnaast zijn er 2 apps van LensMedia voor de perfecte voorbereiding.\n\n\n\n'
textInButton3_2.innerText = '\nHand-outs zijn schematische weergave van een verkeerstaak. \nDit stappenplan kun je gebruiken om nog even te herhalen of om je voor te bereiden op de rijles en examen. \n\n\n\n'
textInButton3_3.innerText = '\n10 uur gratis online examen training bij:\n www.theorieboek.nl\n\n\n\n'

textInButton4_1.innerText = '\n CO2 kan op vele manieren gecompenseert worden maar er is maar één die echt werkt:\n Groen maken waar deze niet was!\n\n Justdigit vergroent woestijden zodat niet alleen de CO2, NOX en fijnstoffen worden opgenomen maar zorgt ook voor een betere leefomgeving ter plaatse.\n\n\n\n'
textInButton4_2.innerText = '\n De aarde afkoelen met 1 simpele oplossing: natuur!\n JDG mobiliseert en verbind mensen wereldwijd om de natuur terug te brengen. Tot nu toe hebben zij 60.000 hectares vergroend, meer dan 9 miljoen bomen teruggebracht en bouwen ze een grassroots movement die elke dag groeit. \n\n Hun missie is om Afrika in de komende 10 jaar te vergroenen, samen met miljoenen boeren, en samen met jou.\n Dit is The Decade of Doing: Dig in!\n\n\n\n'
textInButton4_3.innerText = '\nOf je nu electrische of op diesel rijdt, iedereen stoot ongeveer evenveel uit.\n Opzich niet zon probleem maar wij zijn inmiddels wel met heel veel mensen en wij willen allemaal welvaart en een fijne leefomgeving.\n\n Door de uitstook van co2 te gebruiken als voedselbron voor de natuur, vergroen je niet alleen de woestijn maar zorg je ook voor een prettiger leefomgeving voor de toekomst.\n\n\n'






const page1 = document.getElementById('page-1')
const page2 = document.getElementById('page-2')
const page3 = document.getElementById('page-3')
const page4 = document.getElementById('page-4')

let sectionOneView = true
let sectionTwoView = false
let sectionThreeView = false
let sectionFourView = false



let isDescOpen = false


const blur2 = document.querySelector('.blur2')


mainDiv.addEventListener('scroll', () => {
  
	const scrolledHeight = mainDiv.scrollTop

    blur2.style.display = 'none'

		
  if (scrolledHeight >= 0.0 && scrolledHeight <= page1.scrollHeight * 4.0) 
  {
  
    Vinbutton1_1.className = "Vinbutton1_1"
	Vinbutton1_2.className = "Vinbutton1_2"
	Vinbutton1_3.className = "Vinbutton1_3"
	 
    textInButton1_1.className = "textInButton1_1"
	textInButton1_2.className = "textInButton1_2"
	textInButton1_3.className = "textInButton1_3"
	
	textInButton2_1.className = "textInButton2_1"
	textInButton2_2.className = "textInButton2_2"
	textInButton2_3.className = "textInButton2_3"
	  
	textInButton3_1.className = "textInButton3_1"
	textInButton3_2.className = "textInButton3_2"
	textInButton3_3.className = "textInButton3_3"
	  
	textInButton4_1.className = "textInButton4_1"
	textInButton4_2.className = "textInButton4_2"
	textInButton4_3.className = "textInButton4_3"
	  

	
	
   Vinbutton1_1.style.display = ''
   Vinbutton1_2.style.display = ''
   Vinbutton1_3.style.display = ''
	  
  
 
	
	  
  }
  
  if (scrolledHeight >= 0.1 && scrolledHeight <= page1.scrollHeight * 4) {
		
    textInButton1_1.classList.remove("textInButton1_1Expand")
	textInButton1_2.classList.remove("textInButton1_2Expand")
	textInButton1_3.classList.remove("textInButton1_3Expand")
	  
	}
													
  if (scrolledHeight >= 0.0 && scrolledHeight <= page1.scrollHeight * 0.5) { 
	   
  logoteam.className= "logoteam"
	
	  
    if (button1.contains(textInButton2_1)) {
        button1.removeChild(textInButton2_1);
        button1.appendChild(textInButton1_1);
    } 
    if (button2.contains(textInButton2_2)) {
        button2.removeChild(textInButton2_2);
        button2.appendChild(textInButton1_2);
    } 
	if (button3.contains(textInButton2_3)) {
        button3.removeChild(textInButton2_3);
        button3.appendChild(textInButton1_3);
    } 	  
  }
	
 if (scrolledHeight > page1.scrollHeight * 0.5 &&
    scrolledHeight <= page1.scrollHeight * 1.5) {
	 
   logoteam.className = "logosim" 
	 
    Vinbutton1_1.className = "Vinbutton2_1"
	Vinbutton1_2.className = "Vinbutton2_2"
	Vinbutton1_3.className = "Vinbutton2_3"


    if (button1.contains(textInButton1_1)) {
        button1.removeChild(textInButton1_1);
        button1.appendChild(textInButton2_1);
    } 
else if (button1.contains(textInButton3_1)) {
        button1.removeChild(textInButton3_1);
        button1.appendChild(textInButton2_1);
    }
    if (button2.contains(textInButton1_2)) {
        button2.removeChild(textInButton1_2);
        button2.appendChild(textInButton2_2);
    } 
else if (button2.contains(textInButton3_2)) {
        button2.removeChild(textInButton3_2);
        button2.appendChild(textInButton2_2);
    }
	if (button3.contains(textInButton1_3)) {
        button3.removeChild(textInButton1_3);
        button3.appendChild(textInButton2_3);
    } 
else if (button3.contains(textInButton3_3)) {
        button3.removeChild(textInButton3_3);
        button3.appendChild(textInButton2_3);
    }
  }

if (scrolledHeight > page1.scrollHeight * 1.5 &&
    scrolledHeight <= page1.scrollHeight * 2.5) { 

    logoteam.className = "logotheo" 
	
    Vinbutton1_1.className = "Vinbutton3_1"
	Vinbutton1_2.className = "Vinbutton3_2"
	Vinbutton1_3.className = "Vinbutton3_3"


    if (button1.contains(textInButton2_1)) {
        button1.removeChild(textInButton2_1);
        button1.appendChild(textInButton3_1);
    } 
else if (button1.contains(textInButton4_1)) {
        button1.removeChild(textInButton4_1);
        button1.appendChild(textInButton3_1);
    }

    if (button2.contains(textInButton2_2)) {
        button2.removeChild(textInButton2_2);
        button2.appendChild(textInButton3_2);
    } 
else if (button2.contains(textInButton4_2)) {
        button2.removeChild(textInButton4_2);
        button2.appendChild(textInButton3_2);
    }

	if (button3.contains(textInButton2_3)) {
        button3.removeChild(textInButton2_3);
        button3.appendChild(textInButton3_3);
    } 
else if (button3.contains(textInButton4_3)) {
        button3.removeChild(textInButton4_3);
        button3.appendChild(textInButton3_3);
    }	
	
	
  
  }
  
if (scrolledHeight > page1.scrollHeight * 2.5 &&
    scrolledHeight <= page1.scrollHeight * 3.5) { 
	
    logoteam.className = "logoimpact" 

    Vinbutton1_1.className = "Vinbutton4_1"
	Vinbutton1_2.className = "Vinbutton4_2"
	Vinbutton1_3.className = "Vinbutton4_3"

	
	 if (button1.contains(textInButton3_1)) {
        button1.removeChild(textInButton3_1);
        button1.appendChild(textInButton4_1);
    } 


    if (button2.contains(textInButton3_2)) {
        button2.removeChild(textInButton3_2);
        button2.appendChild(textInButton4_2);
    } 


	if (button3.contains(textInButton3_3)) {
        button3.removeChild(textInButton3_3);
        button3.appendChild(textInButton4_3);
    } 
  }
})




