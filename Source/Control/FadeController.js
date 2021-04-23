//
class FadeController {
    // fadeTime {number} milliseconds to fade in
    constructor(startOpacity, endOpacity, fadeTime, styleObject, doneCallback)
    {
	this.startOpacity = startOpacity;
	this.endOpacity = endOpacity;
	this.fadeTime = fadeTime;
	this.styleObject = styleObject;
	this.doneCallback = doneCallback;
	this.intervalHandler = null;
	this.startTime = 0;
    }

    start()
    {
	this.styleObject.opacity = this.startOpacity;
	this.startTime = Date.now();
	if (this.fadeTime > 0)
	{
	    this.intervalHandler = setInterval(this.changeOpacity.bind(this), MainController.MILLISECONDS_PER_FRAME);
	}
	else
	{
	    this.styleObject.opacity = endOpacity;
	    this.doneCallback();
	}
    }

    changeOpacity()
    {
	var elapsedTime = Date.now() - this.startTime;
	this.styleObject.opacity = this.startOpacity + (this.endOpacity - this.startOpacity) * (elapsedTime / this.fadeTime);
	if (elapsedTime > this.fadeTime)
	{
	    this.stop();
	}
    }

    stop()
    {
	clearInterval(this.intervalHandler);
	this.doneCallback();
    }
}
