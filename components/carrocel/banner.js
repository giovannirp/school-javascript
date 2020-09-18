window.onload = function() {
    this.comeco();
    this.regular();
}

const imgId = document.getElementById("imgId");
const documentLeetter = document.form.texto;

const imgs = {
    img1: "assets/img/img1.jpg",
    img2: "assets/img/img2.jpg",
    img3: "assets/img/img3.jpg"
}

const img1 = imgs.img1;
const img2 = imgs.img2;
const img3 = imgs.img3;

const array1 = new Array (img1, img2, img3);

comeco = () => {
    imgId.src = array1[0];
    documentLeetter.value = "0";
}

mais = () => {
    documentLeetter.value = Math.floor (1+ 1 - 2 + (documentLeetter.value) * 1 + 1);
    if(documentLeetter.value > 2){
        documentLeetter.value = 0;
    }
}

menos = () => {
    documentLeetter.value = Math.floor (1+ 1 - 2 + (documentLeetter.value) * 1 - 1)
    if(documentLeetter.value < 0) {
        documentLeetter.value = 2;
    }
}

regular = () => {
    imgId.src = array1[documentLeetter.value];
    setTimeout("regular()", 1);
}   
