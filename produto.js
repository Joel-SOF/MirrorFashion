var slider = document.getElementById("tamanho");
var output = document.getElementById("valortamanho");
output.innerHTML = slider.value;

slider.oninput = function()
{
    output.innerHTML = this.value
}
