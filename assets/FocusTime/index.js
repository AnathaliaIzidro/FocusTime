import state from "./state.js"

export function start(minutes, seconds){
    state.minutes = minutes
    state.seconds = seconds

    //Atualizar o display(Evento).
    timer.updateDisplay()

    //Alterar os controles e os minutos.
    events.registerControls()
    events.setMinutes()
}
