let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

//Eventos
buttonToggle.addEventListener('click', (event) =>{
    document.documentElement.classList.toggle('light')
    const mode = darkMode ? 'light' : 'dark'
    
    //Declaração do evento
    event.currentTarget.querySelector('span').textContet = `${mode} mode ativado!`
    darkMode = !darkMode
})