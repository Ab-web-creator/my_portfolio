
const pageOnePlaceHolder = document.querySelector('.pageOnePlaceHolder')
  pageOnePlaceHolder.style.zIndex = -1

const pageOnePlaceHolderV = document.querySelector('.pageOnePlaceHolderV')

const info1_1 = document.querySelector('.info1_1')
const info1_2 = document.querySelector('.info1_2')
const info1_3 = document.querySelector('.info1_3')




const logoteam = document.querySelector('.logoteam')
    logoteam.classList.add("logoteam")

const button1_1 = document.querySelector ('button1_1')
    button1_1.classList.add("button1_1")

const button1_2 = document.createElement("div")
 button1_2.classList.add("button1_2")

const button1_3 = document.createElement("div")
 button1_3.classList.add("button1_3")



pageOnePlaceHolderV.style.display = ''


button1_1.display = 'initial'
button1_2.display = 'initial'
button1_3.display = 'initial'

button2_1.style.display = 'none'
button2_2.style.display = 'none'
button2_3.style.display = 'none'

button3_1.style.display = 'none'
button3_2.style.display = 'none'
button3_3.style.display = 'none'

button4_1.style.display = 'none'
button4_2.style.display = 'none'
button4_3.style.display = 'none'

info1_1.style.display = 'none'
info1_2.style.display = 'none'
info1_3.style.display = 'none'

info2_1.style.display = 'none'
info2_2.style.display = 'none'
info2_3.style.display = 'none'

info3_1.style.display = 'none'
info3_2.style.display = 'none'
info3_3.style.display = 'none'

info4_1.style.display = 'none'
info4_2.style.display = 'none'




const Vinbutton1_1 = document.querySelector('.Vinbutton1_1')
 Vinbutton1_1.classList.add("Vinbutton1_1")
 Vinbutton1_1.innerText = ""

 Vinbutton1_1.addEventListener('click', function() {
	 
	 if ( Vinbutton1_1.className == "Vinbutton1_1" )
		 
	 {	 Vinbutton1_1.className = "Vinbutton1_1wide"
		 Vinbutton1_2.className = "Vinbutton1_2"
		 Vinbutton1_3.className = "Vinbutton1_3"
		 
		 textInButton1_1.className = "textInButton1_1Expand"
		 textInButton1_2.className = "textInButton1_2"
		 textInButton1_3.className = "textInButton1_3"
	  
	     
	     info1_1.style.display = ''
	     info1_2.style.display = 'none'
	     info1_3.style.display = 'none'
	 }
		 
   else if (Vinbutton1_1.className == "Vinbutton1_1wide" )
		{
         Vinbutton1_1.className = "Vinbutton1_1"
		 Vinbutton1_2.className = "Vinbutton1_2"
		 Vinbutton1_3.className = "Vinbutton1_3"
		 
		 textInButton1_1.className = "textInButton1_1"
		 textInButton1_2.className = "textInButton1_2"
		 textInButton1_3.className = "textInButton1_3"
			
		 info1_1.style.display = 'none'
		 info1_2.style.display = 'none'
	     info1_3.style.display = 'none'
	 }
	 
 else if ( Vinbutton1_1.className == "Vinbutton1_1high1" )
		 
	 {	 Vinbutton1_1.className = "Vinbutton1_1wide"
		 Vinbutton1_2.className = "Vinbutton1_2"
		 Vinbutton1_3.className = "Vinbutton1_3"
		 
		 textInButton1_1.className = "textInButton1_1Expand"
		 textInButton1_2.className = "textInButton1_2"
		 textInButton1_3.className = "textInButton1_3" 
	  
	     info1_1.style.display = ''
		 info1_2.style.display = 'none'
	     info1_3.style.display = 'none'
	 }
	
 else if ( Vinbutton1_1.className == "Vinbutton1_1high2" )
		 
	 {	 Vinbutton1_1.className = "Vinbutton1_1wide"
		 Vinbutton1_2.className = "Vinbutton1_2"
		 Vinbutton1_3.className = "Vinbutton1_3"
		 
		 textInButton1_1.className = "textInButton1_1Expand"
		 textInButton1_2.className = "textInButton1_2"
		 textInButton1_3.className = "textInButton1_3"
	  
	     info1_1.style.display = ''
		 info1_2.style.display = 'none'
	     info1_3.style.display = 'none'
	 }
	
})








const textInButton1_1 = document.createElement("div")
 textInButton1_1.classList.add("textInButton1_1")

const textInButton1_2 = document.createElement("div")
 textInButton1_2.classList.add("textInButton1_2")

const textInButton1_3 = document.createElement("div")
 textInButton1_3.classList.add("textInButton1_3")



 pageOnePlaceHolder.appendChild(button1_1)
 pageOnePlaceHolder.appendChild(button1_2)
 pageOnePlaceHolder.appendChild(button1_3)
 
 pageOnePlaceHolder.appendChild(button2_1)
 pageOnePlaceHolder.appendChild(button2_2)
 pageOnePlaceHolder.appendChild(button2_3)

 pageOnePlaceHolder.appendChild(button3_1)
 pageOnePlaceHolder.appendChild(button3_2)
 pageOnePlaceHolder.appendChild(button3_3)

 pageOnePlaceHolder.appendChild(button4_1)
 pageOnePlaceHolder.appendChild(button4_2)
 pageOnePlaceHolder.appendChild(button4_3)



  
 button1_1.appendChild(textInButton1_1)
 button1_2.appendChild(textInButton1_2)
 button1_3.appendChild(textInButton1_3)


 pageOnePlaceHolderV.appendChild(info1_1)
 pageOnePlaceHolderV.appendChild(info1_2)
 pageOnePlaceHolderV.appendChild(info1_3)




textInButton1_1.innerText = '\n Een goede rijopleiding kent een duidelijke structuur. \n Elk onderdeel sluit aan bij het vorige, en op jou nivieau. Hiermee voldoen wij aan de R.I.S. en is beoordeeld door het CBR met een 9,6!\n\n Om jou op deze manier rijles te kunnen geven is het belangrijk dat jij niet eerst iemand weg moet brengen of moet op halen.  Dus doe ik dat voor je!\n\n\n\n'
textInButton1_2.innerText = '\n Elke leerling ontvangt gratis 2 leenboeken inclusief 10 examen training! \n\n Daarnaast krijg je demonstraties, video instructies, tekeningen en handouts (schematische weergave van de verkeerstaken). Deze kun je gratis downloaden zodat je precies weet hoe je het moet aanpakken en zodat jij je kan voorbereiden op je rijles.\n\n\n\n'
textInButton1_3.innerText = '\n AD(H)D, angstig of iets anders?\nDoor de opbouw van de opleiding is dat geen probleem!\n\nSnel als het kan en langzaam als dat moet.\n\n\n\n'


const arrowcha = document.querySelector('.arrow')

const mainDiv = document.querySelector('.section-container')
const dynamicContainer = document.querySelector('.dynamicContainer')




const page1 = document.getElementById('page-1')
const page2 = document.getElementById('page-2')
const page3 = document.getElementById('page-3')
const page4 = document.getElementById('page-4')

let sectionOneView = true
let sectionTwoView = false
let sectionThreeView = false
let sectionFourView = false



function linkImageSource(link1, link2, link3) {
  imageResult1.src = link1
  imageResult2.src = link2
  imageResult3.src = link3
}

let isDescOpen = false


const blur2 = document.querySelector('.blur2')

const link1 = document.querySelector('.link_1_1')
const link2 = document.querySelector('.link_1_2')
const link3 = document.querySelector('.link_1_3')

 


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

	
    info1_1.style.display = 'none'
	info1_2.style.display = 'none'
	info1_3.style.display = 'none'

  
  }
  
  if (scrolledHeight >= 0.1 && scrolledHeight <= page1.scrollHeight * 4) {
		
    textInButton1_1.classList.remove("textInButton1_1Expand")
	textInButton1_2.classList.remove("textInButton1_2Expand")
	textInButton1_3.classList.remove("textInButton1_3Expand")
	  
	}
													
  if (scrolledHeight >= 0.0 && scrolledHeight <= page1.scrollHeight * 0.5) { 
  button1_1.style.display = ''
  button1_2.style.display = ''
  button1_3.style.display = ''
  button2_1.style.display = 'none'
  button2_2.style.display = 'none'
  button2_3.style.display = 'none'
  button3_1.style.display = 'none'
  button3_2.style.display = 'none'
  button3_3.style.display = 'none'
  button4_1.style.display = 'none'
  button4_2.style.display = 'none'
  button4_3.style.display = 'none' 

  logoteam.className= "logoteam"
	
  Vinbutton1_1.style.display = ''
  Vinbutton1_2.style.display = ''
  Vinbutton1_3.style.display = ''

  Vinbutton2_1.style.display = 'none'
  Vinbutton2_2.style.display = 'none'
  Vinbutton2_3.style.display = 'none' 

  Vinbutton3_1.style.display = 'none'
  Vinbutton3_2.style.display = 'none'
  Vinbutton3_3.style.display = 'none' 
	 
  Vinbutton4_1.style.display = 'none'
  Vinbutton4_2.style.display = 'none'
  Vinbutton4_3.style.display = 'none' 
	  
  }

}  )




