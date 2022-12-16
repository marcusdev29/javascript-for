
var Celsius = 10
document.write("C°"  +  "------" + "F° " +  "-------" + "K° " + "</br>")
for (contador = 1; contador <= 10; contador++){
    var fare = (9 * Celsius + 160) / 5;
    var Celsius = Celsius + 10;
    var kelv = Celsius + 273.15;
    
    document.write(Celsius + " ° " + " = " + fare + " ° " + " = "+ kelv + " ° " + "</br>");
    
}