// A Scene with an idle animation and center button. Loops idle until
// user presses center button. Center button fades in
class VideoWaitScene extends VideoScene {
    constructor(adjacentScenes, buttonText, videoURL, idleURL, buttonFadeTime)
    {
	super(adjacentScenes, videoURL);
	this.buttonText = buttonText;
	this.idleURL = idleURL;
	this.buttonFadeTime = buttonFadeTime;
	this.onEnd = this.startIdle.bind(this);
    }

    prepare()
    {
	super.prepare();
	MainController.prepareVideo(this.idleURL);
    }

    stop()
    {
	MainController.hideButtons();
    }

    startIdle()
    {
	MainController.startVideo(this.idleURL, this.loop.bind(this));

	MainController.setCenterButton(new ButtonContent(this.buttonText, this.adjacentScenes[1]), this.buttonFadeTime);
    }

    loop()
    {
	MainController.startVideo(this.idleURL, this.loop.bind(this));
    }
}
