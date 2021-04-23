//
class FadeController {
    // fadeTime {number} milliseconds to fade in
    constructor(fadeTime, styleObject)
    {
	this.fadeTime = fadeTime;
	this.styleObject = styleObject;
	this.intervalHandler = null;
	this.startTime = 0;
    }

    start()
    {
	this.startTime = Date.now();
	if (this.fadeTime > 0)
	{
	    this.intervalHandler = setInterval(this.changeOpacity.bind(this), MainController.MILLISECONDS_PER_FRAME);
	}
	else
	{
	    this.styleObject.opacity = 1.0;
	}
    }

    changeOpacity()
    {
	var elapsedTime = Date.now() - this.startTime;
	this.styleObject.opacity = elapsedTime / this.fadeTime;
	if (elapsedTime > this.fadeTime)
	{
	    this.stop();
	}
    }

    stop()
    {
	clearInterval(this.intervalHandler);
    }
}
