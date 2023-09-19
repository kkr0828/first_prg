for (let index = 0; index < 4; index++) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(100)
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(100)
    if (input.buttonIsPressed(Button.AB)) {
        basic.showIcon(IconNames.Ghost)
    }
}
basic.forever(function () {
	
})
