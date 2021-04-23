// An object that manages video elements. Provides methods for loading
// and playing videos
class PlayerManager {
    static PLAYER_IDS = ['player0', 'player1', 'player2', 'player3'];
    static SOURCE_IDS = ['source0', 'source1', 'source2', 'source3'];
    
    
    constructor()
    {
	this.reservePlayers = new Map();
	this.activePlayer = null;
	for (var i = 0; i < PlayerManager.PLAYER_IDS.length; i++)
	{
	    var playerElement = document.getElementById(PlayerManager.PLAYER_IDS[i]);
	    var sourceElement = document.getElementById(PlayerManager.SOURCE_IDS[i]);
	    this.reservePlayers.set(i.toString(), new Player(playerElement, sourceElement));
	}
    }

    // adds player to reservePlayers
    releaseActiveVideo()
    {
	if (this.activePlayer != null)
	{
	    this.reservePlayers.set(this.activePlayer.getURL(), this.activePlayer);
	}
	this.activePlayer = null;
    }

    // remove player from reservePlayers
    reserveActiveVideo(URL)
    {
	this.activePlayer = this.reservePlayers.get(URL);
	this.reservePlayers.delete(URL);
    }

    // returns the URL of the Player that has been in in reservePlayers the longest.
    peekReserveVideo()
    {
	var keys = this.reservePlayers.keys();
	return keys.next().value;
    }

    // returns the Player that has been in reservePlayers the longest
    // and removes it from the queue
    dequeueReserveVideo()
    {
	var URL =  this.peekReserveVideo();
	var player = this.reservePlayers.get(URL);
	this.reservePlayers.delete(URL);
	return player;
    }



    prepareVideo(videoURL)
    {
	var player = this.reservePlayers.get(videoURL);
	// if the video is already prepared, move it to the back of the queue
	if (player != null)
	{
	    this.reservePlayers.delete(videoURL);
	}
	else
	{
	    player = this.dequeueReserveVideo();
	    player.setURL(videoURL);
	    player.prepare();
	}

	this.reservePlayers.set(videoURL, player);
    }

    playVideo(videoURL, endCallback)
    {
	if(this.activePlayer != null && this.activePlayer.getURL() !== videoURL)
	{
	    this.activePlayer.stopNextFrame();
	    this.releaseActiveVideo();
	}

	
	// videoURL is already prepared
	if (this.reservePlayers.has(videoURL))
	{
	    this.reserveActiveVideo(videoURL);
	}
	// videoURL must be prepared
	else
	{
	    this.reserveActiveVideo(this.peekReserveVideo());
	    this.activePlayer.setURL(videoURL);
	    this.activePlayer.prepare();
	}

	this.activePlayer.registerEndCallback(endCallback);
	this.activePlayer.play();
    }

    // sets the active video to loop
    setVideoLoop()
    {
	if (this.activePlayer != null)
	{
	    this.activePlayer.loop();
	}
    }

    setVideoMute()
    {
	if (this.activePlayer != null)
	{
	    this.activePlayer.mute();
	}
    }

    stopVideo(videoURL)
    {
	if (this.activePlayer != null && this.activePlayer.getURL() === videoURL)
	{
	    this.activePlayer.stop();
	}
    }
}
