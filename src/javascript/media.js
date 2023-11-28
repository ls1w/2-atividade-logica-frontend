let nota1;
let nota2;
let nota3;
let nota4;
let media;
let validacao;
const imgAprRep = document.querySelector('#imgAprovadoReprovado');

function limpar() {
    document.querySelector('#nota1').value = '';
    document.querySelector('#nota2').value = '';
    document.querySelector('#nota3').value = '';
    document.querySelector('#nota4').value = '';
    document.querySelector('#media').innerHTML = '-';
    document.querySelector('#situacao').innerHTML = '-';
    imgAprRep.setAttribute('src' , '');
    document.querySelector('#situacao').removeAttribute('class' , 'bg-danger');
    document.querySelector('#situacao').removeAttribute('class' , 'bg-success');
}

function validar() {
    if (nota1 < 0 || nota1 > 10 || nota1 == '') {
        alert('Digite somente valores entre 0 e 10');
        document.querySelector('#nota1').focus();
        return false;

    } else if (nota2 < 0 || nota2 > 10 || nota2 === '') {
        alert('Digite somente valores entre 0 e 10');
        document.querySelector('#nota2').focus();
        return false;

    } else if (nota3 < 0 || nota3 > 10 || nota3 === '') {
        alert('Digite somente valores entre 0 e 10');
        document.querySelector('#nota3').focus();
        return false;

    } else if (nota4 < 0 || nota4 > 10 || nota4 === '') {
        alert('Digite somente valores entre 0 e 10');
        document.querySelector('#nota4').focus();
        return false;
    }
    return true
}

function calcular() {
    nota1 = document.querySelector('#nota1').value;
    nota2 = document.querySelector('#nota2').value;
    nota3 = document.querySelector('#nota3').value;
    nota4 = document.querySelector('#nota4').value;

    validacao = validar();

    if (validacao) {
        nota1 = parseInt(nota1);
        nota2 = parseInt(nota2);
        nota3 = parseInt(nota3);
        nota4 = parseInt(nota4);

        media = ((nota1 + nota2 + nota3 + nota4) / 4);
        document.querySelector('#media').innerHTML = media;

        if (media >= 7) {
            document.querySelector('#situacao').innerHTML = 'APROVADO';
            document.querySelector('#situacao').setAttribute('class' , 'bg-success');
            imgAprRep.setAttribute('src' , './img/aprovado.jpg')

        } else {
            document.querySelector('#situacao').innerHTML = 'REPROVADO';
            document.querySelector('#situacao').setAttribute('class' , 'bg-danger');
            imgAprRep.setAttribute('src' , './img/reprovado.jpg')

        }
        return true;

    } else {
        return false;
    }
}