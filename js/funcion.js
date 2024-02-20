function contarPalabras() {
    var texto = document.getElementById('textoLargo').value.toLowerCase();
    var palabra = document.getElementById('palabra').value.toLowerCase();
    var apariciones = texto.split(palabra).length - 1;
    document.getElementById('resultadoPalabra').innerText = 'La palabra "' + palabra + '" aparece ' + apariciones + ' veces en el texto.';
}

function contarCaracteres() {
    var texto = document.getElementById('texto').value;
    var caracteresSinEspacios = texto.replace(/\s/g, '').length;
    document.getElementById('resultado').innerText = 'El texto tiene ' + caracteresSinEspacios + ' caracteres sin espacios.';
}

function contarPalabrasTexto() {
    var texto = document.getElementById('texto').value;
    var palabras = texto.split(/\s+/).filter(function(word) {
        return word.length > 0;
    }).length;
    document.getElementById('resultado').innerText = 'El texto tiene ' + palabras + ' palabras.';
}

function convertirMayusculas() {
    var texto = document.getElementById('texto').value;
    document.getElementById('resultado').innerText = texto.toUpperCase();
}

function textoInverso() {
    var texto = document.getElementById('texto').value;
    var textoInvertido = texto.split('').reverse().join('');
    document.getElementById('resultado').innerText = textoInvertido;
}