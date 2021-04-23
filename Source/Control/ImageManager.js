//
class ImageManager {
    constructor()
    {
	this.image = new Image(document.getElementById('image0'));
    }

    // Shows image immediately
    // imagePath {string}
    showImage(imagePath)
    {
	this.image.setImage(imagePath);
	this.image.enable();
    }

    // Fades in image over fadeTime milliseconds
    // imagePath {string}
    // fadeTime {number} milliseconds to go from to 100 opacity
    showImageFade(imagePath, fadeTime)
    {
	this.image.setImage(imagePath);
	this.image.fadeIn(fadeTime);
    }

    hideImage()
    {
	// wait a frame before hiding
	setTimeout(function() {this.image.disable();}.bind(this), MainController.MILLISECONDS_PER_FRAME);
    }

    hideImageFade(fadeTime, endCallback)
    {
	this.image.fadeOut(fadeTime, endCallback);
    }

    prepare(imagePath)
    {
	this.image.setImage(imagePath);
	this.image.disable();
    }
}
