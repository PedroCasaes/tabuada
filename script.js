function calcular(){
    var numero = document.getElementById('txtnumero')
    var resultado = document.getElementById('resultado')
    var tab = document.getElementById('seltab')

    var num = Number(numero.value)
    var imprimir = ''

    document.getElementsByClassName("tabuada")[0].style.visibility = 'visible'
    
    if(num == 0){
        alert('O campo está vazio! ')
    }
    tab.innerHTML = ''
    for(var y = 0; y <= 10; y++){
        let item = document.createElement('option')
        item.text = ` ${num} x ${y} = ${num*y}`
        tab.appendChild(item)
    }

    //resultado.innerHTML = `${imprimir}`

    
}