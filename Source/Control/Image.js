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
	var fadeController = new FadeController(fadeTime, this.imageObject.style);
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
