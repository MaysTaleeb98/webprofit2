
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
} 





const fname = document.getElementById('firstname');
const lname = document.getElementById('lastname');
const companyname = document.getElementById('companyname');
const company_website = document.getElementById('company_website');
const jobtitle = document.getElementById('jobtitle');

[fname, lname, companyname, company_website, jobtitle]
.forEach(element =>
    element.onblur = function(event){
        const value = element.value;

        if (/^[a-zA-Z ]+$/.test(value)) {
            element.classList.add('done');


        } else {
            element.classList.remove('done');
            element.classList.add('error');
        }

    }
);

  

    








/*const fname = document.getElementById('firstname');
fname.onblur = function (event) {
    const value = fname.value;

    if (/^[a-zA-Z ]+$/.test(value)) {

        console.log("match");

    } else {
        console.log("does not match");

    }
};

const lname = document.getElementById('lastname');
lname.onblur = function (event) {
    const value = lname.value;

    if (/^[a-zA-Z ]+$/.test(value)) {
        lname.classList.add('hs-input'); 


    } else {
        lname.classList.remove('hs-input');
        lname.classList.add('hs-input invalid error');
    }
}


const companyName = document.getElementById('company'); 
companyName.onblur = function(event){
    const value = companyName.value;

    if (/^[a-zA-Z ]+$/.test(value)) {
        companyName.classList.add('hs-input');
    }
    else{
        companyName.classList.remove('hs-input');
        companyName.classList.add('hs-input invalid error');
    }
}

const companyWeb = document.getElementById('company_website');
companyWeb.onblur = function(event){
    const value = companyWeb.value;
    if (/^[a-zA-Z ]+$/.test(value)) {
        companyWeb.classList.add('hs-input');
    }
    else {
        companyWeb.classList.remove('hs-input');
        companyWeb.classList.add('hs-input invalid error');
    }
}






const jobTitle = document.getElementById('jobtitle');
jobTitle.onblur = function(event){
    const value = jobTitle.value;
    if (/^[a-zA-Z ]+$/.test(value)) {
        jobTitle.classList.add('hs-input');
    }
    else {
        jobTitle.classList.remove('hs-input');
        jobTitle.classList.add('hs-input invalid error');
    }

}


function valphone() {

    var phoneNumber = document.getElementById('phone').value;
    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

    if (phoneRGEX.test(phoneNumber)){
        document.getElementById('phone').classList.add('hs-input');
    }
    else{
        document.getElementById('phone').classList.remove('hs-input');
        document.getElementById('phone').classList.add('hs-input invalid error');   
 
    }
}


const email = document.getElementById("email");
email.onblur = function (event){
    const value = email.value;

    if (/^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i .test(value)){
        email.classList.add('hs-input');
    }
    else{
        email.classList.remove('hs-input');
        email.classList.add('hs-input invalid error'); 

    }
}
*/






/*function validatePhone() {

    var phoneNumber = document.getElementById('phone').value;
    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

    if (phoneRGEX.test(phoneNumber)) {
        document.getElementById('phone').classList.add('done');
    }
    else {
        document.getElementById('phone').classList.remove('done');
        document.getElementById('phone').classList.add('error');

    }
}*/


function testfn() {

    var fn = document.getElementById('firstname').value;
    var fnRGEX = /^[a-zA-Z ]+$/;
    

    if (fnRGEX.test(fn)) {
        document.getElementById('firstname').classList.add('done');
    }
    else {
        document.getElementById('firstname').classList.remove('done');
        document.getElementById('firstname').classList.add('error');

    }
}

function testCompanyName() {

    var cn = document.getElementById('companyname').value;
    var cnRGEX = /^[a-zA-Z ]+$/;


    if (cnRGEX.test(cn)) {
        document.getElementById('companyname').classList.add('done');
    }
    else {
        document.getElementById('companyname').classList.remove('done');
        document.getElementById('companyname').classList.add('error');

    }
}


function testCompanyWeb() {

    var cw= document.getElementById('company_website').value;
    var cwRGEX = /^[a-zA-Z ]+$/;


    if (cwRGEX.test(cw)) {
        document.getElementById('company_website').classList.add('done');
    }
    else {
        document.getElementById('company_website').classList.remove('done');
        document.getElementById('company_website').classList.add('error');

    }
}


function testJ0bTitle() {

    var jt= document.getElementById('jobtitle').value;
    var jtRGEX = /^[a-zA-Z ]+$/;


    if (jtRGEX.test(jt)) {
        document.getElementById('jobtitle').classList.add('done');
    }
    else {
        document.getElementById('jobtitle').classList.remove('done');
        document.getElementById('jobtitle').classList.add('error');

    }
}


