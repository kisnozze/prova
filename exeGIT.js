

document.addEventListener("DOMContentLoaded", function(event) { 
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    var frase = prompt("Introdueix una frase");
    var numLletres = 0;
    
    for (i=0; i < frase.length; i++)
    {
        //document.write(i + "-" + frase[i] +"<br>");
        
        if (alphabet.indexOf(frase[i]) != -1)   //Si  es troba la lletra a l'array alphabet
        {
            numLletres++
        }
    }
    
    //document.write("<p>S'han trobat " + numLletres +" lletres en la frase introduïda.</p>")
    document.getElementsByTagName("p")[0].innerHTML = "S'han trobat " + numLletres +" lletres en la frase introduïda."
});