function calcular(){
    let nome = document.getElementById('nome').value
    let altura = (document.getElementById('altura').value)/100;
    let peso = document.getElementById('peso').value; 
    
    let imc = (peso / altura ** 2).toFixed(2);
    let areaText = '';
   
    if(imc < 18.5){
      areaText = (nome + ' está magro seu IMC é: ' + imc);
    } else if(imc < 24.9){
        areaText = (nome + ' está normal seu IMC é: ' + imc);
    } else if(imc < 29.9){
        areaText = (nome + ' está com sobrepeso seu IMC é: ' + imc);
    } else if(imc < 39.9){
        areaText = (nome + ' está com obesidade seu IMC é: ' + imc);
    } else if(imc > 39.9){
        areaText = (nome + ' está com obesidade mórbida seu IMC é: ' + imc);
    }

    document.getElementById('textarea').innerText=areaText
}
