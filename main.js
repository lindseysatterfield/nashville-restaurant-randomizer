const randomPlaceToEat = () => {
  const placesToEat = [
    'King Market',
    'Butchertown Hall',
    'Cafe Roze',
    'Bella Napoli',
    'Sunda Nashville',
    'Hawkers Asian Street Food',
  ];

  let place = placesToEat[Math.floor(Math.random() * placesToEat.length)];

  document.querySelector('#restaurant-container').innerHTML = '';
  document.querySelector('#restaurant-container').innerHTML += `${place}`;
};

const buttonEvents = () => {
  document.querySelector('#btn').addEventListener('click', randomPlaceToEat);
};

const init = () => {
  buttonEvents();
};

init();
