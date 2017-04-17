var switchButton = document.getElementById('switch')
var currentTheme = window.localStorage.getItem('currentTheme')
if (currentTheme !== null) {
  document.body.setAttribute('class', currentTheme)
}

switchButton.addEventListener('click', function () {
  if (document.body.getAttribute('class') === '.day') {
    document.body.setAttribute('class','.night')
  }
}
