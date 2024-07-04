import state from "./state.js"

//Countdown é o contador
export function countdown() {
    clearTimeout(state.countdownID)

    if(state.isRunning){
        return
    }

    // Contador (subtrai os segundos até chegar a 0. Depois ele volta os segundos para 59 e subtrai 1 minuto)
    let minutes = Number(minutes.textContent)
    let seconds = Number(seconds.textContent)
    seconds--

    if (seconds < 0){
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        reset()
        kitchenTimer.play()
        return
    }

    //Update do display
    updateDisplay(minutes, seconds)


    state.countdownID = setTimeout(() => countdown(), 1000)
}

//nova função
export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, "0")
    el.seconds.textContent = String(seconds).padStart(2, "0")
}
