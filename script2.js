function valor() {
    var numero = parseInt(prompt("Digite um número: "));
    for (var contadora = 1; contadora <= 10; contadora++) {
        document.write(numero + " X " + contadora + " = " + contadora * numero + "</br>");
    }
}