const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hour = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();

  if (hour < 10) hr = '0' + hour;
  if (min < 10) hr = '0' + min;
  if (sec < 10) hr = '0' + sec ;

  horas.textContent = hour;
  minutos.textContent = min;
  segundos.textContent = sec;

})