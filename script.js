var body = document.getElementsByTagName('body')[0];

var popup  = document.getElementById('popup');

var popup2 = document.getElementById('popup2');

var popup3 = document.getElementById('popup3');

var popup4 = document.getElementById('popup4');

var button = document.getElementById('nav-element1');

var button2 = document.getElementById('nav-element2');

var button3 = document.getElementById('nav-element3');

var button4 = document.getElementById('nav-element4');

var span = document.getElementById('close');

var span2 = document.getElementById('close2');

var span3 = document.getElementById('close3');

var span4 = document.getElementById('close4');

button.onclick = function() {
    popup.style.visibility = 'visible';
    body.style.overflow = 'hidden';
}

span.onclick = function() {
    popup.style.visibility = 'hidden';
    body.style.overflow = 'auto';
}

button2.onclick = function() {
    popup2.style.visibility = 'visible';
    body.style.overflow = 'hidden';
}

span2.onclick = function() {
    popup2.style.visibility = 'hidden';
    body.style.overflow = 'auto';
}

button3.onclick = function() {
    popup3.style.visibility = 'visible';
    body.style.overflow = 'hidden';
}

span3.onclick = function() {
    popup3.style.visibility = 'hidden';
    body.style.overflow = 'auto';
}

button4.onclick = function() {
    popup4.style.visibility = 'visible';
    body.style.overflow = 'hidden';
}

span4.onclick = function() {
    popup4.style.visibility = 'hidden';
    body.style.overflow = 'auto';
}