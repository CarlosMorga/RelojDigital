const hora = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const horaActual = setInterval( ()=>{
    const conteiner= new Date()
    let horas = conteiner.getHours()
    let Minutos =  conteiner.getMinutes()
    let Segundos =conteiner.getSeconds()

    hora.innerHTML=horas
    minutos.innerHTML=Minutos
    segundos.innerHTML=Segundos

},1000)


// hora= 
