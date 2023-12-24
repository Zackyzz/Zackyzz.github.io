function showCode(codeType) {
    var racketCode = document.getElementById("racketCode");
    var juliaCode = document.getElementById("juliaCode");

    racketCode.style.display = 'none';
    juliaCode.style.display = 'none';

    if (codeType == 'racket') {
        racketCode.style.display = 'block';
    }
    else if (codeType == 'julia') {
        juliaCode.style.display = 'block';
    }
}

window.onload = function(){
    showCode('racket');
};