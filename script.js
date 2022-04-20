var body = document.getElementsByTagName('body')[0];

var popup  = document.getElementById('popup');

var button = document.getElementById('nav-element');

var span = document.getElementById('close');

button.onclick = function() {
    popup.style.visibility = 'visible';
    body.style.overflow = 'hidden';
}

span.onclick = function() {
    popup.style.visibility = 'hidden';
    body.style.overflow = 'auto';
}