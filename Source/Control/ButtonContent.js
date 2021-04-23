// contains information for presenting a button, including text and destination scene
class ButtonContent {
    constructor(text, nextSceneName)
    {
	this.text = text;
	this.nextSceneName = nextSceneName;
    }

    getText()
    {
	return this.text;
    }

    getNextSceneName()
    {
	return this.nextSceneName;
    }
}
