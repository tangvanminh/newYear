import { Fireworks } from 'fireworks-js'

const date = new Date()
thisYear = date.getFullYear()

const year=document.querySelector(".y")

year.innerText = thisYear


const container = document.querySelector('body')
const fireworks = new Fireworks(container, { mouse:{move: true} })

fireworks.start()
fireworks.pause()
fireworks.clear()

// stop and clear fireworks
fireworks.stop()

// after initialization you can change the fireworks parameters
fireworks.setOptions({ delay: { min: 10, max: 15 }})
