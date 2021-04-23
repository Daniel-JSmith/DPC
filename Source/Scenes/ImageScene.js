// A scene with a "start" button and a background image
class ImageScene extends StartScene {
    // Path to the image file to display
    constructor(adjacentScenes, buttonText, imagePath, fadeTime)
    {
	super(adjacentScenes, buttonText);
	this.imagePath = imagePath;
	this.fadeTime = fadeTime;
    }

    stop()
    {
	super.stop();
	MainController.hideImage();
    }

    start()
    {
	super.start();
	MainController.showImage(this.imagePath, this.fadeTime);
    }

    prepare()
    {
	MainController.prepareImage(this.imagePath);
    }
}
