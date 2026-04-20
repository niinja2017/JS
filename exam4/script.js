const myButton = document.getElementById('myButton');
const messageArea = document.getElementById('messageArea');

myButton.addEventListener('click', function() {

  messageArea.textContent = 'عالی! کارت درسته! 🎉';

  myButton.style.backgroundColor = '#ff9800';
  myButton.textContent = 'ممنون!';
});
