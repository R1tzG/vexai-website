var body = document.getElementsByTagName('body')[0];
var html = document.getElementsByTagName('html')[0];
var popup  = document.getElementById('popup');
var popup2 = document.getElementById('popup2');
var popup3 = document.getElementById('popup3');
var button = document.getElementById('nav-element1');
var button2 = document.getElementById('nav-element2');
var button3 = document.getElementById('nav-element3');
var span = document.getElementById('close');
var span2 = document.getElementById('close2');
var span3 = document.getElementById('close3');
var element1 = document.getElementById('nav-element1');
var element2 = document.getElementById('nav-element2');
var element3 = document.getElementById('nav-element3');
var scroll = document.getElementById('scroll');
var div2 = document.getElementById('about-div');

button.onclick = function() {
    popup.style.visibility = 'visible';
    body.style.overflow = 'hidden';
    element1.style.visibility = 'hidden';
    element2.style.visibility = 'hidden';
    element3.style.visibility = 'hidden';
    element4.style.visibility = 'hidden';
}

span.onclick = function() {
    popup.style.visibility = 'hidden';
    body.style.overflow = 'auto';
    element1.style.visibility = 'visible';
    element2.style.visibility = 'visible';
    element3.style.visibility = 'visible';
    element4.style.visibility = 'visible';
}

button2.onclick = function() {
    popup2.style.visibility = 'visible';
    body.style.overflow = 'hidden';
    element1.style.visibility = 'hidden';
    element2.style.visibility = 'hidden';
    element3.style.visibility = 'hidden';
    element4.style.visibility = 'hidden';
}

span2.onclick = function() {
    popup2.style.visibility = 'hidden';
    body.style.overflow = 'auto';
    element1.style.visibility = 'visible';
    element2.style.visibility = 'visible';
    element3.style.visibility = 'visible';
    element4.style.visibility = 'visible';
}

button3.onclick = function() {
    popup3.style.visibility = 'visible';
    body.style.overflow = 'hidden';
    element1.style.visibility = 'hidden';
    element2.style.visibility = 'hidden';
    element3.style.visibility = 'hidden';
    element4.style.visibility = 'hidden';
}

span3.onclick = function() {
    popup3.style.visibility = 'hidden';
    body.style.overflow = 'auto';
    element1.style.visibility = 'visible';
    element2.style.visibility = 'visible';
    element3.style.visibility = 'visible';
    element4.style.visibility = 'visible';
}

scroll.onclick = function() {
    div2.scrollIntoView(alignToTop = false);
}