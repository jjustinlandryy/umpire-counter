input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        `)
    number += 1
    basic.showNumber(number)
    basic.showString("" + (number))
    if (number == 3) {
        number = 0
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    number_2 += 1
    basic.showNumber(number_2)
    basic.showString("" + (number_2))
    if (number_2 == 4) {
        number_2 = 0
    }
})
let number_2 = 0
let number = 0
basic.showLeds(`
    . # # # .
    # . . . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.forever(function () {
	
})
