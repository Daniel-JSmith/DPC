// A controller for an html video element. Provides methods for controlling
// playback
class Player {
    constructor(videoElement, source)
    {
	this.videoElement = videoElement;
	this.source = source;
	this.prepared = false;
	this.endCallback = null;
	this.disable();
    }

    disable()
    {
	this.videoElement.style.opacity = 0.0;
	this.videoElement.muted = true;
	this.videoElement.onended = null;
	this.videoElement.loop = false;
    }

    enable()
    {
	this.videoElement.style.opacity = 1.0;
	this.videoElement.muted = false;
	this.videoElement.onended = this.endCallback;
	this.videoElement.loop = false;
    }

    loop()
    {
	this.videoElement.loop = true;
    }

    mute()
    {
	this.videoElement.muted = true;
    }
    
    // url {string} location of video to play
    setURL(url)
    {
	this.source.setAttribute('src', url);
	this.prepared = false;
    }

    getURL()
    {
	return this.source.getAttribute('src');
    }

    prepare()
    {
	this.videoElement.load();
	this.prepared = true;
    }

    play()
    {
	if (!this.prepared)
	{
	    this.prepare();
	}
	this.videoElement.currentTime = 0.0;
	this.enable();
	this.videoElement.play();
    }

    stop()
    {
	
	this.videoElement.currentTime = 0.0;
	this.videoElement.pause = true;
	this.disable();
	
    }

    // waits a frame before stoppong
    stopNextFrame()
    {
	setTimeout(function(){this.stop();}.bind(this), MainController.MILLISECONDS_PER_FRAME);
    }

    // register function to be called when playback ends
    registerEndCallback(func)
    {
	this.videoElement.onended = func;
	this.endCallback = func;
    }
}
