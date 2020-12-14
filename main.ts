input.onButtonPressed(Button.A, function () {
    speler.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    pauzetijd = 10000
})
input.onButtonPressed(Button.B, function () {
    speler.change(LedSpriteProperty.X, 1)
})
let fruit: game.LedSprite = null
let pauzetijd = 0
let speler: game.LedSprite = null
speler = game.createSprite(2, 4)
pauzetijd = 1000
basic.forever(function () {
    fruit = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(pauzetijd)
        fruit.change(LedSpriteProperty.Y, 1)
    }
    if (fruit.get(LedSpriteProperty.X) == speler.get(LedSpriteProperty.X)) {
        game.addScore(1)
        fruit.delete()
        pauzetijd += -100
    } else {
        game.gameOver()
    }
})
