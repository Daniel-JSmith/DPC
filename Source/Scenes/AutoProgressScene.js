// A scene that plays a video and progresses to next scene when
// playback ends
class AutoProgressScene extends VideoScene {
    constructor(adjacentScenes, videoURL)
    {
	super(adjacentScenes, videoURL);
	this.onEnd = this.progress.bind(this);
    }

    progress()
    {
	MainController.startScene(this.adjacentScenes[0]);
    }
}
