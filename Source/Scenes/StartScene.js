// A scene with a "start" button
class StartScene extends Scene {
    constructor(adjacentScenes, buttonText, fadeTime)
    {
	super(adjacentScenes);
	this.buttonText = buttonText;
	this.fadeTime = fadeTime;
    }

    stop()
    {
	MainController.hideButtons();
    }

    start()
    {
	MainController.setCenterButton(new ButtonContent(this.buttonText, this.adjacentScenes[0]), this.fadeTime);
    }
}
