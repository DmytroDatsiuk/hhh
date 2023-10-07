const ping = async () => {
  let start = Date.now();

  try {
    await fetch('http://172.24.22.1');
  } catch (err) {}

  return Date.now() - start;
};

const buttonErth = document.querySelector('.s');

buttonErth.addEventListener('click', onbuttonClick);

function onbuttonClick(e) {
  console.log(ping());
}
