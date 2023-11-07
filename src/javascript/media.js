let nota1;
let nota2;
let nota3;
let nota4;
let media;
let validacao;

function limpar() {
    document.querySelector('#nota1').value = '';
    document.querySelector('#nota2').value = '';
    document.querySelector('#nota3').value = '';
    document.querySelector('#nota4').value = '';
    document.querySelector('#media').innerHTML = '-';
    document.querySelector('#situacao').innerHTML = '-';
}

function validar() {
    if (nota1 < 0 || nota1 > 10) {
        alert('Digite somente valores entre 0 e 10');
        document.querySelector('#nota1').focus();
        return false;
    } else if (nota2 < 0 || nota2 > 10) {
        alert('Digite somente valores entre 0 e 10');
        document.querySelector('#nota2').focus();
        return false;
    }
}

function calcular() {
    nota1 = parseInt(document.querySelector('#nota1').value);
    nota2 = parseInt(document.querySelector('#nota2').value);
    nota3 = parseInt(document.querySelector('#nota3').value);
    nota4 = parseInt(document.querySelector('#nota4').value);

    validar();

    media = ((nota1 + nota2 + nota3 + nota4) / 4)
    document.querySelector('#media').innerHTML = media;

    if (media >= 7) {
        document.querySelector('#situacao').innerHTML = 'APROVADO';
    }
    else{
        document.querySelector('#situacao').innerHTML = 'REPROVADO';
    }

}