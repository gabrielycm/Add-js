
function addLi () {

    var produto = document.getElementById ('item').value,
        lista = document.getElementById ('lista'),
        liItem = document.createElement ("li"),
        produtoNo = document.createTextNode(produto);

    liItem.appendChild(produtoNo);
    lista.appendChild(liItem);
}