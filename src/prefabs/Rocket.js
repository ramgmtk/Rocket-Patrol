// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this); // add object to existing scene
        this.isFiring = false; //track rockets firing status
    }
    update() {
        //left/right movement
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= 47) { //cannot go beyond border
                this.x -= 2; //2 represent rocket speed
            } else if (keyRIGHT.isDown && this.x <= 578) { //598 is too big
                this.x += 2;
            }
         }
        //fire button
        if (Phaser.Input.Keyboard.JustDown(keyF)) { //just down waits till player takes finger off button
            this.isFiring = true;
        }
        //if fire, vmoed up
        if (this.isFiring && this.y >= 108) {
            this.y -= 2;
        }
        //reset on miss
        if (this.y <= 108) {
            this.isFiring = false;
            this.y = 431;
        }
    }
}