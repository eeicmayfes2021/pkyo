
class SimpleButton {
    constructor(scene, x, y, width, height, buttonColor, text, textColor) {
        this.button = scene.add.rectangle(
            x+width/2, y+height/2,
            width, height,
            buttonColor);
        this.text = scene.add.text(x, y, text, {fontSize: height, color: textColor});
        this.button.setInteractive();
    }
}

export default SimpleButton;