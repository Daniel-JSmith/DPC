// A scene that, when started, refreshes the page
class RestartScene extends Scene {
    constructor(adjacentScenes)
    {
	super(adjacentScenes);
    }

    start()
    {
	window.location.reload(false);
    }
}
