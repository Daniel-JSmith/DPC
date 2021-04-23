// A representation of a screen, includes methods to play videos and display
// buttons
class Scene {
    // adjacentScenes {string[]} array of string names that the user
    // may reach from this scene
    constructor(adjacentScenes)
    {
	this.adjacentScenes = adjacentScenes;
    }

    prepare()
    {
	
    }

    // returns array of scene names as strings
    getAdjacentScenes()
    {
	return this.adjacentScenes;
    }
    
    start()
    {
    }
    stop() {}
    
}
