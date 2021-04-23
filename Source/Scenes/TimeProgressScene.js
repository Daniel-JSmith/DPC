// A scene that fades in an image and fades out an image after
// presentTime milliseconds
class TimeProgressScene extends Scene {
    constructor(adjacentScenes, imagePath, fadeInTime, presentTime, fadeOutTime)
    {
	super(adjacentScenes);
	this.imagePath = imagePath;
	this.fadeInTime = fadeInTime;
	this.presentTime = presentTime;
	this.fadeOutTime = fadeOutTime;
    }

    start()
    {
	MainController.showImage(this.imagePath, this.fadeInTime);
	setTimeout(this.progress.bind(this), this.presentTime);
    }

    progress()
    {
	MainController.hideImageFade(this.fadeOutTime, function() {MainController.startScene(this.adjacentScenes[0])}.bind(this));
    }

    prepare()
    {

    }

}
