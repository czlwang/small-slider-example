var slide = document.getElementById('slide'),
    sliderDiv = document.getElementById("sliderAmount");

slide.onchange = function() {
    sliderDiv.innerHTML = this.value;
    var redness = (this.value/100)*255
    slide.style.background = `rgb(${redness},0,0)`
}
