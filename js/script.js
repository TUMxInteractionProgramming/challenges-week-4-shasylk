/* #6 start the #external #action and say hello */
"use strict";
console.log("App is alive");
/* Global Variable current location */
var currentLocation = ["createdBy"," latitude"," longitude"]; 
console.log('Showing current Location', currentLocation);
/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>';

    /* #6 #liking channels on #click */
    $('#channel-star').attr('<i class="fas fa-star-o" style="font-size:24px;"></i>');

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName + ')').addClass('selected');
}

/* #6 #liking a channel on #click */
function star() {
    $('#channel-star').attr('<i class="fas fa-star-o" style="font-size:24px;"></i>');
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}


/* Constructor function message text*/
function Message(CreatedBy, latitude, longitude, CreatedOn, ExpiresOn, text, own) {

	this.CreatedBy = CreatedBy;
  	this.latitude = latitude;
  	this.longitude = longitude;
  	this.CreatedOn = CreatedOn;
	this.ExpiresOn = ExpiresOn;
  	this.text = text;
  	own = true;
	
	
	
	console.log('Sent Message', currentChannel);
	
createMessageElement();


}
var currentChannel = new Message("bootie.package.rums","20", "200","09/27/2018","09/28/2018", "HELLO CHATTER", "true");

console.log('Showing current Location', currentChannel);

function createMessageElement() {
	document.getElementById("demo8").innerHTML = currentChannel.CreatedBy +" "+currentChannel.latitude + " "+
		currentChannel.longitude + " "+currentChannel.CreatedOn +" "+currentChannel.ExpiresOn+" "+currentChannel.text+".";
}

function sendMessage() {
        document.getElementById('display').innerHTML = 
        document.getElementById('newMessage').value;
		
  // Log input

}
