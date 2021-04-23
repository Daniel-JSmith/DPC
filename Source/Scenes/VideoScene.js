// A scene that plays a video and ends when the video ends
class VideoScene extends Scene {
    // videoURL {string} URL of video to play
    constructor(adjacentScenes, videoURL)
    {
	super(adjacentScenes);
	this.videoURL = videoURL;
	this.onEnd = this.finish.bind(this);
    }

    prepare()
    {
	super.prepare();
	MainController.prepareVideo(this.videoURL);
    }

    start()
    {
	MainController.startVideo(this.videoURL, this.onEnd.bind(this));
    }

    stop()
    {
	
    }

    getVideoURL()
    {
	return this.videoURL;
    }

    finish()
    {
	MainController.stopScene(this);
    }
}
