// A Scene with an idle animation and left/right buttons
class StandardScene extends VideoScene {
    constructor(adjacentScenes, buttonText0, buttonText1, videoURL, idleURL)
    {
	super(adjacentScenes, videoURL);


	if (adjacentScenes.length > 0)
	{
	    this.buttonContent0 = new ButtonContent(buttonText0, adjacentScenes[0]);
	}
	else
	{
	    this.buttonContent0 = null;
	}

	if (adjacentScenes.length > 1)
	{
	    this.buttonContent1 = new ButtonContent(buttonText1, adjacentScenes[1]);
	}
	else
	{
	    this.buttonContent1 = null;
	}

	
	this.idleURL = idleURL;
	this.onEnd = this.startIdle.bind(this);
    }

    prepare()
    {
	super.prepare();
	MainController.prepareVideo(this.idleURL);
    }

    stop()
    {
	super.stop();
	MainController.hideButtons();
    }

    startIdle()
    {
	MainController.startVideo(this.idleURL, null);
	MainController.setVideoLoop();
	//MainController.setVideoMute();
	
	MainController.setButtonOptions(this.buttonContent0, this.buttonContent1);
    }

    loop()
    {
	MainController.startVideo(this.idleURL, this.loop.bind(this));
    }
}
