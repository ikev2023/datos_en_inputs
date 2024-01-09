
function enfocar() 
{
    document.getElementById("nombre").focus();
}
function capturarEnter(event) 
{
    if (event.key === "Enter") 
    {
      document.getElementById("edad").focus();
    }
}
function saludar() 
{
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    if (isNaN(nombre)&&!isNaN(edad))
    {
        document.getElementById("res").innerText = "HOLA! usted se llama: "+ nombre + " y tiene: " + edad + " años :D";
    }
    else
    {
        alert("TONTO, PON DATOS VALIDOS XD", borrar());
    }
}
function borrar()
{
    let i = 0;
    let campos = document.getElementsByClassName("dato");
    
    for (i; i < campos.length; i++) 
    {
        campos[i].value = "";
    }
    
    document.getElementById("res").innerText = "¿?";
    enfocar();
}