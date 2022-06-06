console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

console.group("Triangulos");

function perimetroTriangulo(lado1 , lado2 , base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base , altura) {
    return (base * altura) / 2;
}

console.groupEnd();

console.group("Circulos");

function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

//comunicacion con HTML
//cuadrado
const btnCuadradoPerimetro = document.getElementById('btnCuadradoPerimetro');
const btnCuadradoArea = document.getElementById('btnCuadradoArea');

let inputCuadrado = document.getElementById('inputCuadrado');

btnCuadradoPerimetro.addEventListener('click' , ()=> {
    let resultadoperimetroCuadrado = perimetroCuadrado(inputCuadrado.value);
    alert(resultadoperimetroCuadrado);
});

btnCuadradoArea.addEventListener('click' , () => {
    let resultadoareaCuadrado =  areaCuadrado(inputCuadrado.value);
    alert(`${resultadoareaCuadrado} m^2`);
});


//triangulo
const btnTrianguloPerimetro = document.getElementById('btnTrianguloPerimetro');
const btnTrianguloArea = document.getElementById('btnTrianguloArea');

const imputtriangulo1 = document.getElementById('imputtriangulo1');
const imputtriangulo2 = document.getElementById('imputtriangulo2');
const imputtriangulobase = document.getElementById('imputtriangulobase');
const imputtrianguloaltura = document.getElementById('imputtrianguloaltura');

btnTrianguloPerimetro.addEventListener('click' , () => {
    let trianguloPerimetro = perimetroTriangulo(imputtriangulo1.value , imputtriangulo2.value , imputtriangulobase.value);
    alert(trianguloPerimetro);
});

btnTrianguloArea.addEventListener('click' , () => {
    let areatriangulo = areaTriangulo(imputtriangulobase.value , imputtrianguloaltura.value);
    alert(areatriangulo);
});

//circulo
const imputdiametrocirculo = document.getElementById('imputdiametrocirculo');
const btncalcularadio = document.getElementById('btncalcularadio');
const btncalculaperimetro = document.getElementById('btncalculaperimetro');
const btncalcularea = document.getElementById('btncalcularea');

btncalcularadio.addEventListener('click' , () => {
    let diametrocirculo = diametroCirculo(imputdiametrocirculo.value);
    alert(diametrocirculo);
});
btncalculaperimetro.addEventListener('click' , () => {
    let eldiametro = diametroCirculo(imputdiametrocirculo.value);
    let perimetro = eldiametro * PI;
    alert(perimetro);
});
btncalcularea.addEventListener('click' , () => {
    let areacirculo = areaCirculo(imputdiametrocirculo.value);
    let elarea = (areacirculo * areacirculo) * PI;
    alert(elarea);
});