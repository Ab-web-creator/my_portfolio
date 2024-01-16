
const pageOnePlaceHolder = document.querySelector('.pageOnePlaceHolder')
  pageOnePlaceHolder.style.zIndex = -1






const logoteam = document.querySelector('.logoteam')
    logoteam.classList.add("logoteam")
  

const button1_1 = document.querySelector('.button1_1')
    button1_1.classList.add("button1_1")

const button1_2 = document.querySelector('.button1_2')
    button1_2.classList.add("button1_2")

const button1_3 = document.querySelector('.button1_3')
    button1_3.classList.add("button1_3")

const button2_1 = document.querySelector('.button2_1')
    button2_1.classList.add("button2_1")

const button2_2 = document.querySelector('.button2_2')
    button1_2.classList.add("button2_2")

const button2_3 = document.querySelector('.button2_3')
    button2_3.classList.add("button2_3")


const button3_1 = document.querySelector('.button3_1')
    button3_1.classList.add("button3_1")

const button3_2 = document.querySelector('.button3_2')
    button3_2.classList.add("button3_2")

const button3_3 = document.querySelector('.button3_3')
    button3_3.classList.add("button3_3")


const button4_1 = document.querySelector('.button4_1')
    button4_1.classList.add("button4_1")

const button4_2 = document.querySelector('.button4_2')
    button4_2.classList.add("button4_2")

const button4_3 = document.querySelector('.button4_3')
    button4_3.classList.add("button4_3")



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






const textInButton1_1 = document.createElement("div")
 textInButton1_1.classList.add("textInButton1_1")
 

const textInButton1_2 = document.createElement("div")
 textInButton1_2.classList.add("textInButton1_2")

const textInButton1_3 = document.createElement("div")
 textInButton1_3.classList.add("textInButton1_3")


const textInButton2_1 = document.createElement("div")
 textInButton2_1.classList.add("textInButton1_1")

const textInButton2_2 = document.createElement("div")
 textInButton2_2.classList.add("textInButton1_2")

const textInButton2_3 = document.createElement("div")
 textInButton2_3.classList.add("textInButton1_3")


const textInButton3_1 = document.createElement("div")
 textInButton3_1.classList.add("textInButton1_1")

const textInButton3_2 = document.createElement("div")
 textInButton3_2.classList.add("textInButton1_2")

const textInButton3_3 = document.createElement("div")
 textInButton3_3.classList.add("textInButton1_3")


const textInButton4_1 = document.createElement("div")
 textInButton4_1.classList.add("textInButton1_1")

const textInButton4_2 = document.createElement("div")
 textInButton4_2.classList.add("textInButton1_2")

const textInButton4_3 = document.createElement("div")
 textInButton4_3.classList.add("textInButton1_3")



 button1_1.appendChild(textInButton1_1)
 button1_2.appendChild(textInButton1_2)
 button1_3.appendChild(textInButton1_3)

 button2_1.appendChild(textInButton2_1)
 button2_2.appendChild(textInButton2_2)
 button2_3.appendChild(textInButton2_3)

 button3_1.appendChild(textInButton3_1)
 button3_2.appendChild(textInButton3_2)
 button3_3.appendChild(textInButton3_3)

 button4_1.appendChild(textInButton4_1)
 button4_2.appendChild(textInButton4_2)
 button4_3.appendChild(textInButton4_3)




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
	
 
	  
  }
	
 if (scrolledHeight > page1.scrollHeight * 0.5 &&
    scrolledHeight <= page1.scrollHeight * 1.5) { 
  button1_1.style.display = 'none'
  button1_2.style.display = 'none'
  button1_3.style.display = 'none'
  button2_1.style.display = ''
  button2_2.style.display = ''
  button2_3.style.display = ''
  button3_1.style.display = 'none'
  button3_2.style.display = 'none'
  button3_3.style.display = 'none'
  button4_1.style.display = 'none'
  button4_2.style.display = 'none'
  button4_3.style.display = 'none'
	 
	 
	 
   logoteam.className = "logosim" 
	 
  	 
  }

if (scrolledHeight > page1.scrollHeight * 1.5 &&
    scrolledHeight <= page1.scrollHeight * 2.5) { 
  button1_1.style.display = 'none'
  button1_2.style.display = 'none'
  button1_3.style.display = 'none'
  button2_1.style.display = 'none'
  button2_2.style.display = 'none'
  button2_3.style.display = 'none'
  button3_1.style.display = ''
  button3_2.style.display = ''
  button3_3.style.display = ''
  button4_1.style.display = 'none'
  button4_2.style.display = 'none'
  button4_3.style.display = 'none'
	
  logoteam.className = "logotheo" 
	
 
  }
  
if (scrolledHeight > page1.scrollHeight * 2.5 &&
    scrolledHeight <= page1.scrollHeight * 3.5) { 
  button1_1.style.display = 'none'
  button1_2.style.display = 'none'
  button1_3.style.display = 'none'
  button2_1.style.display = 'none'
  button2_2.style.display = 'none'
  button2_3.style.display = 'none'
  button3_1.style.display = 'none'
  button3_2.style.display = 'none'
  button3_3.style.display = 'none'
  button4_1.style.display = ''
  button4_2.style.display = ''
  button4_3.style.display = ''
	
    logoteam.className = "logoimpact" 
	

	
	
  }


}  )




