// A wrapper for a HTML button element. Provides methods for
// showing/hiding and handles scene progression on click
class Button {
    constructor(buttonElement)
    {
	this.buttonElement = buttonElement;
	this.nextSceneName = '';
    }

    // set button from ButtonContent object
    // content {ButtonContent}
    setContent(content)
    {
	this.buttonElement.onclick = this.progressScene.bind(this);
	this.nextSceneName = content.getNextSceneName();
	this.buttonElement.textContent = content.getText();
    }

    progressScene()
    {
	if (this.nextScenename != '')
	{
	    MainController.startScene(this.nextSceneName);
	}
    }

    enable()
    {
	this.buttonElement.disabled = false;
	this.buttonElement.style.opacity = 1.0;
    }

    // fade in over fadeTime milliseconds
    enableFade(fadeTime)
    {
	var fadeController = new FadeController(fadeTime, this.buttonElement.style);
	fadeController.start();
	this.buttonElement.disabled = false;
    }

    disable()
    {
	this.buttonElement.style.opacity = 0.0;
	this.buttonElement.disabled = true;
    }
}
