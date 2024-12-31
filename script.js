const timep = document.getElementById('time');
const hny = document.getElementById('hny');
const timereal = document.getElementById('time-real')

document.addEventListener('DOMContentLoaded',()=>{
    setInterval(()=>{
    let date = new Date()
    let time = new Date()
    date.toString()
    time.toString()
    const hours = time.getHours();
    const minutes = time.getMinutes(); 
    const seconds = time.getSeconds(); 
const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    if(formattedTime == '00:00:00' && date.toLocaleDateString('pt-BR') == '01/01/2025'){
      hny.innerHTML = 'FELIZ'+'<br>'+' ANO'+ '<br>'+' NOVO'
    }
    date = date.toLocaleDateString('pt-BR')
    timep.innerHTML = date
    timereal.innerHTML = formattedTime
    },1000)
})