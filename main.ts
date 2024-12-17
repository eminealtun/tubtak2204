let miktar = 0
let engel = 0
I2C_LCD1602.LcdInit(63)
let sayı = randint(0, 30)
I2C_LCD1602.ShowString("MERHABA", 5, 0)
I2C_LCD1602.ShowString("BEN DONUSTRATOR", 0, 1)
basic.pause(2000)
I2C_LCD1602.clear()
basic.forever(function () {
    engel = pins.digitalReadPin(DigitalPin.P1)
    if (engel == 0) {
        basic.pause(2000)
        robotbit.Servo(robotbit.Servos.S2, 0)
        basic.pause(2000)
        robotbit.Servo(robotbit.Servos.S2, 180)
        basic.pause(1000)
        miktar += 1
        basic.showNumber(miktar)
        basic.pause(2000)
        basic.clearScreen()
        I2C_LCD1602.ShowNumber(miktar, 5, 0)
        I2C_LCD1602.ShowString("sise", 2, 1)
        if (engel == 0 && sayı == miktar) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.LoopingInBackground)
            basic.pause(2000)
            robotbit.Servo(robotbit.Servos.S1, 0)
            basic.showIcon(IconNames.Happy)
            basic.pause(4000)
            robotbit.Servo(robotbit.Servos.S1, 180)
            basic.pause(2000)
            I2C_LCD1602.ShowString("TEBRİKLER", 4, 0)
            I2C_LCD1602.ShowString("KAZANDIN", 4, 1)
        }
    }
    music.stopAllSounds()
})
