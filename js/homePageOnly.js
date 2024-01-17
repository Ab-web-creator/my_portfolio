
const pageOnePlaceHolder = document.querySelector('.pageOnePlaceHolder')
  pageOnePlaceHolder.style.zIndex = -1
const pageOnePlaceHolderV = document.querySelector('.pageOnePlaceHolderV')

const info1_1 = document.querySelector('.info1_1')
const info1_2 = document.querySelector('.info1_2')
const info1_3 = document.querySelector('.info1_3')

const info2_1 = document.querySelector('.info2_1')
const info2_2 = document.querySelector('.info2_2')
const info2_3 = document.querySelector('.info2_3')

const info3_1 = document.querySelector('.info3_1')
const info3_2 = document.querySelector('.info3_2')
const info3_3 = document.querySelector('.info3_3')

const info4_1 = document.querySelector('.info4_1')
const info4_2 = document.querySelector('.info4_2')



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
    button2_2.classList.add("button2_2")

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

const Vinbutton1_2 = document.querySelector('.Vinbutton1_2')
 Vinbutton1_2.classList.add("Vinbutton1_2")
 Vinbutton1_2.innerText = ""
 Vinbutton1_2.addEventListener('click', function() {
	
	 
	 if ( Vinbutton1_2.className == "Vinbutton1_2" )
		 
	 {	 Vinbutton1_1.className = "Vinbutton1_1high1"
		 Vinbutton1_2.className = "Vinbutton1_2wide"
		 Vinbutton1_3.className = "Vinbutton1_3"
		 
		 textInButton1_1.className = "textInButton1_1"
		 textInButton1_2.className = "textInButton1_2Expand"
		 textInButton1_3.className = "textInButton1_3"
	  
	     info1_1.style.display = 'none'
	     info1_2.style.display = ''
	     info1_3.style.display = 'none'
	   
	 }
		 
   else if (Vinbutton1_2.className == "Vinbutton1_2wide" )
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
	 
 else if ( Vinbutton1_2.className == "Vinbutton1_2high1" )
		 
	 {	 Vinbutton1_1.className = "Vinbutton1_1high1"
		 Vinbutton1_2.className = "Vinbutton1_2wide"
		 Vinbutton1_3.className = "Vinbutton1_3"
		 
		 textInButton1_1.className = "textInButton1_1"
		 textInButton1_2.className = "textInButton1_2Expand"
		 textInButton1_3.className = "textInButton1_3"
	     
	     info1_1.style.display = 'none'
		 info1_2.style.display = ''
	     info1_3.style.display = 'none'
	 }
	
	

})

const Vinbutton1_3 = document.querySelector('.Vinbutton1_3')
 Vinbutton1_3.classList.add("Vinbutton1_3")
 Vinbutton1_3.innerText = ""
 Vinbutton1_3.addEventListener('click', function() {
	 

	 
    if ( Vinbutton1_3.className == "Vinbutton1_3" )
		 
	 {	 Vinbutton1_1.className = "Vinbutton1_1high2"
		 Vinbutton1_2.className = "Vinbutton1_2high1"
		 Vinbutton1_3.className = "Vinbutton1_3wide"
		 
		 textInButton1_1.className = "textInButton1_1"
		 textInButton1_2.className = "textInButton1_2"
		 textInButton1_3.className = "textInButton1_3Expand"
	     
         info1_1.style.display = 'none'
	     info1_2.style.display = 'none'
	     info1_3.style.display = ''
	 }
		 
   else if (Vinbutton1_3.className == "Vinbutton1_3wide" )
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
		 
})



const Vinbutton2_1 = document.querySelector('.Vinbutton2_1')
 Vinbutton2_1.classList.add("Vinbutton2_1")
 Vinbutton2_1.innerText = ""
 Vinbutton2_1.addEventListener('click', function() {


	 if ( Vinbutton2_1.className == "Vinbutton2_1" )
		 
	 {	 Vinbutton2_1.className = "Vinbutton2_1wide"
		 Vinbutton2_2.className = "Vinbutton2_2"
		 Vinbutton2_3.className = "Vinbutton2_3"
		 
		 textInButton2_1.className = "textInButton2_1Expand"
		 textInButton2_2.className = "textInButton2_2"
		 textInButton2_3.className = "textInButton2_3"
	  
	     
	     info2_1.style.display = ''
	     info2_2.style.display = 'none'
	     info2_3.style.display = 'none'
	 }
		 
   else if (Vinbutton2_1.className == "Vinbutton2_1wide" )
		{
         Vinbutton2_1.className = "Vinbutton2_1"
		 Vinbutton2_2.className = "Vinbutton2_2"
		 Vinbutton2_3.className = "Vinbutton2_3"
		 
		 textInButton2_1.className = "textInButton2_1"
		 textInButton2_2.className = "textInButton2_2"
		 textInButton2_3.className = "textInButton2_3"
			
		 info2_1.style.display = 'none'
		 info2_2.style.display = 'none'
	     info2_3.style.display = 'none'
	 }
	 
 else if ( Vinbutton2_1.className == "Vinbutton2_1high1" )
		 
	 {	 Vinbutton2_1.className = "Vinbutton2_1wide"
		 Vinbutton2_2.className = "Vinbutton2_2"
		 Vinbutton2_3.className = "Vinbutton2_3"
		 
		 textInButton2_1.className = "textInButton2_1Expand"
		 textInButton2_2.className = "textInButton2_2"
		 textInButton2_3.className = "textInButton2_3" 
	  
	     info2_1.style.display = ''
		 info2_2.style.display = 'none'
	     info2_3.style.display = 'none'
	 }
	
 else if ( Vinbutton2_1.className == "Vinbutton2_1high2" )
		 
	 {	 Vinbutton2_1.className = "Vinbutton2_1wide"
		 Vinbutton2_2.className = "Vinbutton2_2"
		 Vinbutton2_3.className = "Vinbutton2_3"
		 
		 textInButton2_1.className = "textInButton2_1Expand"
		 textInButton2_2.className = "textInButton2_2"
		 textInButton2_3.className = "textInButton2_3"
	  
	     info2_1.style.display = ''
		 info2_2.style.display = 'none'
	     info2_3.style.display = 'none'
	 }
	
})

const Vinbutton2_2 = document.querySelector('.Vinbutton2_2')
 Vinbutton2_2.classList.add("Vinbutton2_2")
 Vinbutton2_2.innerText = ""
 Vinbutton2_2.addEventListener('click', function() {
	
	 
	 if ( Vinbutton2_2.className == "Vinbutton2_2" )
		 
	 {	 Vinbutton2_1.className = "Vinbutton2_1high1"
		 Vinbutton2_2.className = "Vinbutton2_2wide"
		 Vinbutton2_3.className = "Vinbutton2_3"
		 
		 textInButton2_1.className = "textInButton2_1"
		 textInButton2_2.className = "textInButton2_2Expand"
		 textInButton2_3.className = "textInButton2_3"
	  
	     info2_1.style.display = 'none'
	     info2_2.style.display = ''
	     info2_3.style.display = 'none'
	   
	 }
		 
   else if (Vinbutton2_2.className == "Vinbutton2_2wide" )
		{
         Vinbutton2_1.className = "Vinbutton2_1"
		 Vinbutton2_2.className = "Vinbutton2_2"
		 Vinbutton2_3.className = "Vinbutton2_3"
		 
		 textInButton2_1.className = "textInButton2_1"
		 textInButton2_2.className = "textInButton2_2"
		 textInButton2_3.className = "textInButton2_3"
			
         info2_1.style.display = 'none'
	     info2_2.style.display = 'none'
	     info2_3.style.display = 'none'
			
		 
	 }
	 
 else if ( Vinbutton2_2.className == "Vinbutton2_2high1" )
		 
	 {	 Vinbutton2_1.className = "Vinbutton2_1high1"
		 Vinbutton2_2.className = "Vinbutton2_2wide"
		 Vinbutton2_3.className = "Vinbutton2_3"
		 
		 textInButton2_1.className = "textInButton2_1"
		 textInButton2_2.className = "textInButton2_2Expand"
		 textInButton2_3.className = "textInButton2_3"
	     
	     info2_1.style.display = 'none'
		 info2_2.style.display = ''
	     info2_3.style.display = 'none'
	 }
})

const Vinbutton2_3 = document.querySelector('.Vinbutton2_3')
 Vinbutton2_3.classList.add("Vinbutton2_3")
 Vinbutton2_3.innerText = ""
 Vinbutton2_3.addEventListener('click', function() {
	 

	 
    if ( Vinbutton2_3.className == "Vinbutton2_3" )
		 
	 {	 Vinbutton2_1.className = "Vinbutton2_1high2"
		 Vinbutton2_2.className = "Vinbutton2_2high1"
		 Vinbutton2_3.className = "Vinbutton2_3wide"
		 
		 textInButton2_1.className = "textInButton2_1"
		 textInButton2_2.className = "textInButton2_2"
		 textInButton2_3.className = "textInButton2_3Expand"
	     
         info2_1.style.display = 'none'
	     info2_2.style.display = 'none'
	     info2_3.style.display = ''
	 }
		 
   else if (Vinbutton2_3.className == "Vinbutton2_3wide" )
		{
         Vinbutton2_1.className = "Vinbutton2_1"
		 Vinbutton2_2.className = "Vinbutton2_2"
		 Vinbutton2_3.className = "Vinbutton2_3"
		 
		 textInButton2_1.className = "textInButton2_1"
		 textInButton2_2.className = "textInButton2_2"
		 textInButton2_3.className = "textInButton2_3"
			
		 info2_1.style.display = 'none'
	     info2_2.style.display = 'none'
	     info2_3.style.display = 'none'
	 }
		 
})
				   

const Vinbutton3_1 = document.querySelector('.Vinbutton3_1')
 Vinbutton3_1.classList.add("Vinbutton3_1")
 Vinbutton3_1.innerText = ""
 Vinbutton3_1.addEventListener('click', function() {


	 if ( Vinbutton3_1.className == "Vinbutton3_1" )
		 
	 {	 Vinbutton3_1.className = "Vinbutton3_1wide"
		 Vinbutton3_2.className = "Vinbutton3_2"
		 Vinbutton3_3.className = "Vinbutton3_3"
		 
		 textInButton3_1.className = "textInButton3_1Expand"
		 textInButton3_2.className = "textInButton3_2"
		 textInButton3_3.className = "textInButton3_3"
	  
	     
	     info3_1.style.display = ''
	     info3_2.style.display = 'none'
	     info3_3.style.display = 'none'
	 }
		 
   else if (Vinbutton3_1.className == "Vinbutton3_1wide" )
		{
         Vinbutton3_1.className = "Vinbutton3_1"
		 Vinbutton3_2.className = "Vinbutton3_2"
		 Vinbutton3_3.className = "Vinbutton3_3"
		 
		 textInButton3_1.className = "textInButton3_1"
		 textInButton3_2.className = "textInButton3_2"
		 textInButton3_3.className = "textInButton3_3"
			
		 info3_1.style.display = 'none'
		 info3_2.style.display = 'none'
	     info3_3.style.display = 'none'
	 }
	 
 else if ( Vinbutton3_1.className == "Vinbutton3_1high1" )
		 
	 {	 Vinbutton3_1.className = "Vinbutton3_1wide"
		 Vinbutton3_2.className = "Vinbutton3_2"
		 Vinbutton3_3.className = "Vinbutton3_3"
		 
		 textInButton3_1.className = "textInButton3_1Expand"
		 textInButton3_2.className = "textInButton3_2"
		 textInButton3_3.className = "textInButton3_3" 
	  
	     info3_1.style.display = ''
		 info3_2.style.display = 'none'
	     info3_3.style.display = 'none'
	 }
	
 else if ( Vinbutton3_1.className == "Vinbutton3_1high2" )
		 
	 {	 Vinbutton3_1.className = "Vinbutton3_1wide"
		 Vinbutton3_2.className = "Vinbutton3_2"
		 Vinbutton3_3.className = "Vinbutton3_3"
		 
		 textInButton3_1.className = "textInButton3_1Expand"
		 textInButton3_2.className = "textInButton3_2"
		 textInButton3_3.className = "textInButton3_3"
	  
	     info3_1.style.display = ''
		 info3_2.style.display = 'none'
	     info3_3.style.display = 'none'
	 }
	
})

const Vinbutton3_2 = document.querySelector('.Vinbutton3_2')
 Vinbutton3_2.classList.add("Vinbutton3_2")
 Vinbutton3_2.innerText = ""
 Vinbutton3_2.addEventListener('click', function() {
	
	 
	 if ( Vinbutton3_2.className == "Vinbutton3_2" )
		 
	 {	 Vinbutton3_1.className = "Vinbutton3_1high1"
		 Vinbutton3_2.className = "Vinbutton3_2wide"
		 Vinbutton3_3.className = "Vinbutton3_3"
		 
		 textInButton3_1.className = "textInButton3_1"
		 textInButton3_2.className = "textInButton3_2Expand"
		 textInButton3_3.className = "textInButton3_3"
	  
	     info3_1.style.display = 'none'
	     info3_2.style.display = ''
	     info3_3.style.display = 'none'
	   
	 }
		 
   else if (Vinbutton3_2.className == "Vinbutton3_2wide" )
		{
         Vinbutton3_1.className = "Vinbutton3_1"
		 Vinbutton3_2.className = "Vinbutton3_2"
		 Vinbutton3_3.className = "Vinbutton3_3"
		 
		 textInButton3_1.className = "textInButton3_1"
		 textInButton3_2.className = "textInButton3_2"
		 textInButton3_3.className = "textInButton3_3"
			
         info3_1.style.display = 'none'
	     info3_2.style.display = 'none'
	     info3_3.style.display = 'none'
			
		 
	 }
	 
 else if ( Vinbutton3_2.className == "Vinbutton3_2high1" )
		 
	 {	 Vinbutton3_1.className = "Vinbutton3_1high1"
		 Vinbutton3_2.className = "Vinbutton3_2wide"
		 Vinbutton3_3.className = "Vinbutton3_3"
		 
		 textInButton3_1.className = "textInButton3_1"
		 textInButton3_2.className = "textInButton3_2Expand"
		 textInButton3_3.className = "textInButton3_3"
	     
	     info3_1.style.display = 'none'
		 info3_2.style.display = ''
	     info3_3.style.display = 'none'
	 }
})

const Vinbutton3_3 = document.querySelector('.Vinbutton3_3')
 Vinbutton3_3.classList.add("Vinbutton3_3")
 Vinbutton3_3.innerText = ""
 Vinbutton3_3.addEventListener('click', function() {
	 

	 
    if ( Vinbutton3_3.className == "Vinbutton3_3" )
		 
	 {	 Vinbutton3_1.className = "Vinbutton3_1high2"
		 Vinbutton3_2.className = "Vinbutton3_2high1"
		 Vinbutton3_3.className = "Vinbutton3_3wide"
		 
		 textInButton3_1.className = "textInButton3_1"
		 textInButton3_2.className = "textInButton3_2"
		 textInButton3_3.className = "textInButton3_3Expand"
	     
         info3_1.style.display = 'none'
	     info3_2.style.display = 'none'
	     info3_3.style.display = ''
	 }
		 
   else if (Vinbutton3_3.className == "Vinbutton3_3wide" )
		{
         Vinbutton3_1.className = "Vinbutton3_1"
		 Vinbutton3_2.className = "Vinbutton3_2"
		 Vinbutton3_3.className = "Vinbutton3_3"
		 
		 textInButton3_1.className = "textInButton3_1"
		 textInButton3_2.className = "textInButton3_2"
		 textInButton3_3.className = "textInButton3_3"
			
		 info3_1.style.display = 'none'
	     info3_2.style.display = 'none'
	     info3_3.style.display = 'none'
	 }
		 
})

const Vinbutton4_1 = document.querySelector('.Vinbutton4_1')
 Vinbutton4_1.classList.add("Vinbutton4_1")
 Vinbutton4_1.innerText = ""
 Vinbutton4_1.addEventListener('click', function() {


	 if ( Vinbutton4_1.className == "Vinbutton4_1" )
		 
	 {	 Vinbutton4_1.className = "Vinbutton4_1wide"
		 Vinbutton4_2.className = "Vinbutton4_2"
		 Vinbutton4_3.className = "Vinbutton4_3"
		 
		 textInButton4_1.className = "textInButton4_1Expand"
		 textInButton4_2.className = "textInButton4_2"
		 textInButton4_3.className = "textInButton4_3"
	  
	     
	     info4_1.style.display = ''
	     info4_2.style.display = 'none'
	   
	 }
		 
   else if (Vinbutton4_1.className == "Vinbutton4_1wide" )
		{
         Vinbutton4_1.className = "Vinbutton4_1"
		 Vinbutton4_2.className = "Vinbutton4_2"
		 Vinbutton4_3.className = "Vinbutton4_3"
		 
		 textInButton4_1.className = "textInButton4_1"
		 textInButton4_2.className = "textInButton4_2"
		 textInButton4_3.className = "textInButton4_3"
			
		 info4_1.style.display = 'none'
		 info4_2.style.display = 'none'
	
	 }
	 
 else if ( Vinbutton4_1.className == "Vinbutton4_1high1" )
		 
	 {	 Vinbutton4_1.className = "Vinbutton4_1wide"
		 Vinbutton4_2.className = "Vinbutton4_2"
		 Vinbutton4_3.className = "Vinbutton4_3"
		 
		 textInButton4_1.className = "textInButton4_1Expand"
		 textInButton4_2.className = "textInButton4_2"
		 textInButton4_3.className = "textInButton4_3" 
	  
	     info4_1.style.display = ''
		 info4_2.style.display = 'none'
	   
	 }
	
 else if ( Vinbutton4_1.className == "Vinbutton4_1high2" )
		 
	 {	 Vinbutton4_1.className = "Vinbutton4_1wide"
		 Vinbutton4_2.className = "Vinbutton4_2"
		 Vinbutton4_3.className = "Vinbutton4_3"
		 
		 textInButton4_1.className = "textInButton4_1Expand"
		 textInButton4_2.className = "textInButton4_2"
		 textInButton4_3.className = "textInButton4_3"
	  
	     info4_1.style.display = ''
		 info4_2.style.display = 'none'
	
	 }
	
})

const Vinbutton4_2 = document.querySelector('.Vinbutton4_2')
 Vinbutton4_2.classList.add("Vinbutton4_2")
 Vinbutton4_2.innerText = ""
 Vinbutton4_2.addEventListener('click', function() {
	
	 
	 if ( Vinbutton4_2.className == "Vinbutton4_2" )
		 
	 {	 Vinbutton4_1.className = "Vinbutton4_1high1"
		 Vinbutton4_2.className = "Vinbutton4_2wide"
		 Vinbutton4_3.className = "Vinbutton4_3"
		 
		 textInButton4_1.className = "textInButton4_1"
		 textInButton4_2.className = "textInButton4_2Expand"
		 textInButton4_3.className = "textInButton4_3"
	  
	     info4_1.style.display = 'none'
	     info4_2.style.display = ''
	     
	   
	 }
		 
   else if (Vinbutton4_2.className == "Vinbutton4_2wide" )
		{
         Vinbutton4_1.className = "Vinbutton4_1"
		 Vinbutton4_2.className = "Vinbutton4_2"
		 Vinbutton4_3.className = "Vinbutton4_3"
		 
		 textInButton4_1.className = "textInButton4_1"
		 textInButton4_2.className = "textInButton4_2"
		 textInButton4_3.className = "textInButton4_3"
			
         info4_1.style.display = 'none'
	     info4_2.style.display = 'none'
	   
			
		 
	 }
	 
 else if ( Vinbutton4_2.className == "Vinbutton4_2high1" )
		 
	 {	 Vinbutton4_1.className = "Vinbutton4_1high1"
		 Vinbutton4_2.className = "Vinbutton4_2wide"
		 Vinbutton4_3.className = "Vinbutton4_3"
		 
		 textInButton4_1.className = "textInButton4_1"
		 textInButton4_2.className = "textInButton4_2Expand"
		 textInButton4_3.className = "textInButton4_3"
	     
	     info4_1.style.display = 'none'
		 info4_2.style.display = ''
	
	 }
	
	

})

const Vinbutton4_3 = document.querySelector('.Vinbutton4_3')
 Vinbutton4_3.classList.add("Vinbutton4_3")
 Vinbutton4_3.innerText = ""
 Vinbutton4_3.addEventListener('click', function() {
	 

	 
    if ( Vinbutton4_3.className == "Vinbutton4_3" )
		 
	 {	 Vinbutton4_1.className = "Vinbutton4_1high2"
		 Vinbutton4_2.className = "Vinbutton4_2high1"
		 Vinbutton4_3.className = "Vinbutton4_3wide"
		 
		 textInButton4_1.className = "textInButton4_1"
		 textInButton4_2.className = "textInButton4_2"
		 textInButton4_3.className = "textInButton4_3Expand"
	     
         info4_1.style.display = 'none'
	     info4_2.style.display = 'none'
	   
	 }
		 
   else if (Vinbutton4_3.className == "Vinbutton4_3wide" )
		{
         Vinbutton4_1.className = "Vinbutton4_1"
		 Vinbutton4_2.className = "Vinbutton4_2"
		 Vinbutton4_3.className = "Vinbutton4_3"
		 
		 textInButton4_1.className = "textInButton4_1"
		 textInButton4_2.className = "textInButton4_2"
		 textInButton4_3.className = "textInButton4_3"
			
		 info4_1.style.display = 'none'
	     info4_2.style.display = 'none'
	  
	 }
		 
})








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

 button2_1.appendChild(textInButton2_1)
 button2_2.appendChild(textInButton2_2)
 button2_3.appendChild(textInButton2_3)

 button3_1.appendChild(textInButton3_1)
 button3_2.appendChild(textInButton3_2)
 button3_3.appendChild(textInButton3_3)

 button4_1.appendChild(textInButton4_1)
 button4_2.appendChild(textInButton4_2)
 button4_3.appendChild(textInButton4_3)

 pageOnePlaceHolderV.appendChild(info1_1)
 pageOnePlaceHolderV.appendChild(info1_2)
 pageOnePlaceHolderV.appendChild(info1_3)

 pageOnePlaceHolderV.appendChild(info2_1)
 pageOnePlaceHolderV.appendChild(info2_2)
 pageOnePlaceHolderV.appendChild(info2_3)

 pageOnePlaceHolderV.appendChild(info3_1)
 pageOnePlaceHolderV.appendChild(info3_2)
 pageOnePlaceHolderV.appendChild(info3_3)

 pageOnePlaceHolderV.appendChild(info4_1)
 pageOnePlaceHolderV.appendChild(info4_2)



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




mainDiv.addEventListener('scroll', () => {
  
	const scrolledHeight = mainDiv.scrollTop

    blur2.style.display = 'none'

		
  if (scrolledHeight >= 0.0 && scrolledHeight <= page1.scrollHeight * 4.0) 
  {
  
    Vinbutton1_1.className = "Vinbutton1_1"
	Vinbutton1_2.className = "Vinbutton1_2"
	Vinbutton1_3.className = "Vinbutton1_3"
	
	Vinbutton2_1.className = "Vinbutton2_1"
	Vinbutton2_2.className = "Vinbutton2_2"
	Vinbutton2_3.className = "Vinbutton2_3"
	  
    Vinbutton3_1.className = "Vinbutton3_1"
	Vinbutton3_2.className = "Vinbutton3_2"
	Vinbutton3_3.className = "Vinbutton3_3"

	Vinbutton4_1.className = "Vinbutton4_1"
	Vinbutton4_2.className = "Vinbutton4_2"
	Vinbutton4_3.className = "Vinbutton4_3"
	  
	  
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
	 
   Vinbutton1_1.style.display = 'none'
   Vinbutton1_2.style.display = 'none'
   Vinbutton1_3.style.display = 'none'
	  
   Vinbutton2_1.style.display = ''
   Vinbutton2_2.style.display = ''
   Vinbutton2_3.style.display = ''  

   Vinbutton3_1.style.display = 'none'
   Vinbutton3_2.style.display = 'none'
   Vinbutton3_3.style.display = 'none' 
	
   Vinbutton4_1.style.display = 'none'
   Vinbutton4_2.style.display = 'none'
   Vinbutton4_3.style.display = 'none' 	 
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
	
  Vinbutton1_1.style.display = 'none'
  Vinbutton1_2.style.display = 'none'
  Vinbutton1_3.style.display = 'none'

  Vinbutton2_1.style.display = 'none'
  Vinbutton2_2.style.display = 'none'
  Vinbutton2_3.style.display = 'none' 

  Vinbutton3_1.style.display = ''
  Vinbutton3_2.style.display = ''
  Vinbutton3_3.style.display = '' 
	
  Vinbutton4_1.style.display = 'none'
  Vinbutton4_2.style.display = 'none'
  Vinbutton4_3.style.display = 'none' 
	
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
	
  Vinbutton1_1.style.display = 'none'
  Vinbutton1_2.style.display = 'none'
  Vinbutton1_3.style.display = 'none'

  Vinbutton2_1.style.display = 'none'
  Vinbutton2_2.style.display = 'none'
  Vinbutton2_3.style.display = 'none' 

  Vinbutton3_1.style.display = 'none'
  Vinbutton3_2.style.display = 'none'
  Vinbutton3_3.style.display = 'none' 
	
  Vinbutton4_1.style.display = ''
  Vinbutton4_2.style.display = ''
  Vinbutton4_3.style.display = '' 
	
	
  }


}  )




