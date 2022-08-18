const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})










function changeBackgroundColor(element){
    element.style.backgroundColor = "rgba(255, 97, 100, 0.8)";
}

function originalBackgroundColor(element){
    element.style.backgroundColor = "transparent";
}

function alertSubmit(){
    alert("The form has been submitted");
}


function changeBackground(element){
    element.style.backgroundColor = "#BCCC7B";
    element.style.width = "32%";
    element.style.height="32%";


}

function originalBackground(element){
    element.style.background = "rgba(255, 97, 100, 0.8)";
    element.style.width = "30%";
    element.style.height="30%";
}