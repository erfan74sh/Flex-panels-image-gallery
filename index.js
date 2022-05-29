let panels = document.querySelectorAll('.panel');

function f(){
    this.classList.toggle('open');
}

function openActive(event){
    if (event.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}
panels.forEach((panel)=>panel.addEventListener('click',f));
panels.forEach((panel)=>panel.addEventListener('transitionend',openActive))