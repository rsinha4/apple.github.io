const slideShowDivs=() => {    //function 
    for(let i=1; i<=5; i++) {   // 5 divs with 5 bg images
        const div=document.createElement('div')  //creating an div element

        div.style.backgroundImage=`url(images/slideshow/section-1-bg-${i}.jpg)` //styling the div element with a bg img.

        i===1 && div.classList.add('change')    //when i===1 i i.e first img, add change method.

        document.querySelector('.slideshow').appendChild(div)  //appending div in the slideshow class.
    } 
}   

slideShowDivs() //calling the funtion

const divs= document.querySelectorAll('.slideshow div') //select all the slideshw divs

let a=1 //variable for looping the background img

const slideshow= ()=> {   //function 

    setInterval(()=> {   //set interval function 
 
        a++    //incrementing a by 1

        const div= document.querySelector('.slideshow .change')  //selectig the first chng element 

        div.classList.remove('change')  //removing the first chng element 

        if (a<divs.length) { //condition
            
            div.nextElementSibling.classList.add('change')   //add the next chng element.
        }
        else {  //condition
            divs[0].classList.add ('change')
            a=1
        }
 
    },10000)  //bg img chng after an interval of 1000ms i.e 1 seconds/
}

slideshow()  //calling the function slideshow()


//Section-3

const section3Content = document.querySelector('.section-3-content')

window.addEventListener('scroll', ()=> {
    if (window.pageYOffset + window.innerHeight >= section3Content.offsetTop +
        section3Content.offsetHeight /2) {
            section3Content.classList.add('change')
        }
})



