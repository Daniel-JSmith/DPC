// a wrapper for a html Image element
class Image {
    constructor(imageObject)
    {
	this.imageObject = imageObject;
    }

    enable()
    {
	this.imageObject.style.opacity = 1.0;
    }
    
    // fadeTime {number} milliseconds to fade in completely
    fadeIn(fadeTime)
    {
	var fadeController = new FadeController(0, 1, fadeTime, this.imageObject.style, function(){});
	fadeController.start();
    }

    fadeOut(fadeTime, doneCallback)
    {
	var fadeController = new FadeController(1, 0, fadeTime, this.imageObject.style, doneCallback)
	fadeController.start();
    }

    disable()
    {
	this.imageObject.style.opacity = 0.0;
    }

    // imagePath {string}
    setImage(imagePath)
    {
	if (imagePath !== this.imageObject.src)
	{
	    this.imageObject.src = imagePath;
	}
    }
    
}
