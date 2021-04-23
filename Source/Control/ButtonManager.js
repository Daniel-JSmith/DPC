//An object to manage the creation and deletion of buttons
class ButtonManager {


    
    constructor()
    {
	const BUTTON_ID_LEFT = 'buttonLeft';
	const BUTTON_ID_RIGHT = 'buttonRight';
	const BUTTON_ID_CENTER = 'buttonCenter';
	
	this.leftButton = new Button(document.getElementById(BUTTON_ID_LEFT));
	this.rightButton = new Button(document.getElementById(BUTTON_ID_RIGHT));
	this.centerButton = new Button(document.getElementById(BUTTON_ID_CENTER));
    }

    

    // set left and right buttons
    // leftContent {ButtonContent}
    // rightContent {ButtonContent}
    setOptions(leftContent, rightContent)
    {
	this.centerButton.disable();

	if (leftContent != null)
	{
	    this.leftButton.setContent(leftContent);
	    this.leftButton.enable();
	}
	if (rightContent != null)
	{
	    this.rightButton.setContent(rightContent);
	    this.rightButton.enable();
	}
    }

    // set center button
    // content {ButtonContent}
    setCenter(content)
    {
	this.hideAll();

	this.centerButton.setContent(content);
	this.centerButton.enable();
    }

    // fade in center button over fadeTime milliseconds
    setCenterFade(content, fadeTime)
    {
	this.hideAll();
	this.centerButton.setContent(content);
	this.centerButton.enableFade(fadeTime);
	
    }

    hideAll()
    {
	this.centerButton.disable();
	this.leftButton.disable();
	this.rightButton.disable();
    }
}
