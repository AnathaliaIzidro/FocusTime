export function registerControls(){
    controls.addEventListener('click', (event) =>{
        const action = event.target.dataset.action
        if(typeof action[action] != "function"){
            return
        }

        action[action]()


    })
}

export function setMinutes(){
    el.minutes.addEventListener('focus', ()=>{
        el.minutes.textContent = ""
    })
    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur',(event) =>{
        let time = event.currentTarget.textContent

        time = time > 60 ? 60 : time

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('aqui vamos colo9car o atributo que devemos remover')
    })
}
