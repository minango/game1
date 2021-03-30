input.onButtonPressed(Button.A, function () {
    _123.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    _123.change(LedSpriteProperty.X, 1)
})
let list: game.LedSprite = null
let _123: game.LedSprite = null
_123 = game.createSprite(2, 4)
game.setLife(3)
basic.forever(function () {
    list = game.createSprite(0, 0)
    while (true) {
        list.change(LedSpriteProperty.Y, 1)
        basic.pause(1000)
        if (list.get(LedSpriteProperty.Y) == 4) {
            if (list.get(LedSpriteProperty.X) == _123.get(LedSpriteProperty.X)) {
                game.removeLife(1)
            } else {
                game.addScore(1)
            }
            list.set(LedSpriteProperty.Y, 0)
            list.set(LedSpriteProperty.X, randint(0, 4))
        } else if (false) {
        	
        } else {
        	
        }
    }
})
