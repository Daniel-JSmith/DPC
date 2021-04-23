//
class MainController {

    static scenes = null;



    static currentScene = null;

    // I didn't bother to get the actual frame-rate. Assume 24fps
    static FRAMES_PER_MILLISECOND = 24 / 1000.0;
    static MILLISECONDS_PER_FRAME = 1 / MainController.FRAMES_PER_MILLISECOND;



    
    static playerManager = new PlayerManager();
    static buttonManager = new ButtonManager();
    static imageManager = new ImageManager();
    
    // starts scene and loads adjacent scenes
    // sceneName {string}
    static startScene(sceneName)
    {
	if (MainController.currentScene != null)
	{
	    MainController.currentScene.stop();
	}
	
	MainController.currentScene = MainController.scenes[sceneName];

	MainController.currentScene.start();
	
	// prepare next scenes
	var adjacentScenes = MainController.currentScene.getAdjacentScenes();
	for (var i = 0; i < adjacentScenes.length; i++)
	{
	    MainController.scenes[adjacentScenes[i]].prepare();
	}
    }
 
    static prepareVideo(videoURL)
    {
	MainController.playerManager.prepareVideo(videoURL);
    }


    // videoScene {VideoScene}
    static startVideo(videoURL, endCallback)
    {
	MainController.playerManager.playVideo(videoURL, endCallback);
    }

    // sets the active video to loop. Resets when another video is
    // requested
    static setVideoLoop()
    {
	MainController.playerManager.setVideoLoop();
    }

    // mutes active video resets when another video is requested
    static setVideoMute()
    {
	MainController.playerManager.setVideoMute();
    }

    static stopVideo(videoURL)
    {
	MainController.playerManager.stopVideo(videoURL);
    }

    static setButtonOptions(buttonContent0, buttonContent1)
    {
	MainController.buttonManager.setOptions(buttonContent0, buttonContent1);
    }

    static setCenterButton(buttonContent, fadeTime)
    {
	MainController.buttonManager.setCenterFade(buttonContent, fadeTime);
    }

    static hideButtons()
    {
	MainController.buttonManager.hideAll();
    }

    static showImage(imagePath, fadeTime)
    {
	MainController.imageManager.showImageFade(imagePath, fadeTime);
    }

    static hideImage()
    {
	MainController.imageManager.hideImage();
    }

    static hideImageFade(fadeTime, endCallback)
    {
	MainController.imageManager.hideImageFade(fadeTime, endCallback);
    }


    static prepareImage(imagePath)
    {
	MainController.imageManager.prepare(imagePath);
    }

    // scene {Scene}
    static stopScene(scene)
    {
	scene.stop();
    }

}
