# LCARS Wrapper for ActionTiles

## Description:

This is a Star Trek LCARS themed HTML/CSS/JS wrapper for the ActionTiles home automation interface for Samsung SmartThings. LCARS stands for *Library Computer Access/Retrieval System*, and is the primary interface for all control and information systems in The Next Generation era of Star Trek television shows. 

The wrapper uses iframes to embed ActionTiles panels within the unified interface. This also allows additional applications such as web controlled media playback software (Kodi, Roon, etc) or web controlled devices within your home to be embedded in the LCARS interface. 

You can view a demo of this in action at http://www.lcarsatalaya.com. You won’t be able to view the ActionTiles Panels as you won’t be authorized, but you can see how the LCARS panel works.

## Requirements:

- Tablet, PC, or other web enabled device with a web browser with a resolution of 800x480 or higher
- ActionTiles Account
- Local Web Server Device such as a Raspberry Pi, LAMP or WAMP stack, etc, or host on a public facing website if you want to be able to access the site outside of your home environment. This can also be loaded directly from the device you plan to use as your control panel by opening the index.html file in the browser. The directory structure must remain intact.
**Note:** If you intend to directly embed your Google Calendar or other “shared link” type data that does not require authentication within the LCARS interface, we strongly recommend that you do not host externally

## Optional, but HIGHLY recommended:

- DAKboard Account (currently free), allows Google Calendar to be embedded behind an authorization barrier and has nice pictures, among other things
- Google Maps API key (free, can be found here https://developers.google.com/maps/documentation/javascript/get-api-key)

## Web Server Installation:

Download the repository by clicking the green *Clone or download* button on the top right of this GitHub page and select *Download ZIP*.

Extract the archive into the web server’s folder structure so that you can access the index.html by typing in the URL to the folder path. Example: *www.servernameorip.com/lcars/index.html*
Note: You do not need to include the index.html in the URL path on most web server software packages, so your path would actually be *www.servernameorip.com/lcars/* 

## Local installation:

Extract the archive into a folder on the device you plan to use as the control panel, and load the *index.html* file in the web browser.

## Adding Additional Menu Buttons/Categories:

In Progress

## Camera Setup:

The LCARS Wrapper includes the vxgplayer applet for viewing RTSP (Real-Time Streaming Protocol) video streams from various sources, including web and security cameras that support the protocol. You will need to edit the cameras.php in the root of the LCARS folder after you extract the files. Change the URLs for the camera(s) by replacing *rtsp://user:password@yourcamerasipaddress:port/directory of camera* with the correct URL, EG: *rtsp://192.168.1.43/img/media.sav* (for iCamera-1000 devices). There are currently two camera fields in this file, though you can add or remove additional fields as you see fit. 
You will also need to edit the index.html file and look in the `<!-- Cameras -->`  notated area, edit this section as needed to add additional cameras. Update the URL(s) in here as well.

## ActionTiles Setup:

The LCARS panel benefits from having multiple ActionTiles panels that are configured for specific categories or purposes. EG: HVAC, Lights, Room/Floor/Zone specific functions, and the like.
In the *index.html* file, scroll down to the notated areas for HVAC, Lights, Presence and Security, and replace the sample URLs with your ActionTiles Panel URL for each category.
**Before -** *src="http://insert your ActionTiles HVAC panel link here"* 
**After -** *src=”https://app.actiontiles.com/panel/UNIQUE_GUID_HERE”*
You can retrieve your ActionTiles Panel URL by viewing the panel in a web browser and copying the URL from the address bar. During first launch of the LCARS interface after configuration changes or on a new device, you’ll be required to sign into ActionTiles the first time. After that, it will load automatically on that device. This may be required on each individual button that has an AT Panel associated with it, though a refresh of the LCARS browser page may resolve this after the initial sign-in.

## DAKboard Setup:

Sign up for a DAKboard account at http://www.dakboard.com. Embed your calendars, shopping lists, etc into the DAKboard interface, and then view your DAKboard at https://www.dakboard.com/app. During first launch of the LCARS interface after configuration changes or on a new device, you’ll be required to sign into DAKboard the first time. After that, it will load automatically on that device.

## Traffic Setup:

The Traffic feature uses the Google Maps API to retrieve a map showing traffic data for the GPS location that you enter into the configuration. To create a free Google Maps API key, you’ll need to visit https://developers.google.com/maps/documentation/javascript/get-api-key and follow the directions to retrieve your key. Once you have done this, scroll to the notated Traffic area in the index.html file and replace the “ENTERYOURGOOGLEMAPSAPIKEY” line in the URL with your API key. 
**Before -** *src=”https://maps.googleapis.com/maps/api/js?key=ENTERYOURGOOGLEMAPSAPIKEY&callback=initMap"*
**After -** *src=”https://maps.googleapis.com/maps/api/js?key=UniqueAPIKeyFromGoogle&callback=initMap"*

## Setting GPS Coordinates:

To set the GPS coordinates for your map view, visit http://www.citylatitudelongitude.com and browse to your chosen location. Copy the coordinates for Latitude and Longitude into the notated Traffic area in the index.html file, replace the existing GPS coordinates. 
Before - center: {lat: 33.7197257, lng: -78.9488477}
After - center: {lat: yourlat, lng: yourlong}
Setting Map Zoom Level:
You can also adjust the Zoom level of your Maps view in this area. Above the Lat/Long settings, set the numerical value for zoom: 12, to a lower or higher number. We recommend between 10 and 14, depending on your preferences. The lower the number, the further out you are zoomed, showing less detail. The higher the number, the closer in you are zoomed, showing more detail but a smaller area of the map.  

## Weather Setup:

This will automatically pull your location via geolocation. Manual configuration can be set up. Documentation will be updated to provide details at a later date.

## Display Tweaks:

The LCARS Wrapper uses CSS to provide layout information for the browser to display the page. By default, the “.lcars-app-container #container {” field within the css\lcars.css file will automatically fill a display, with a slight margin to allow proper display.  

## Updates:
### February 6, 2018
• Updated display to percentage.  No longer requires user to adjust to their monitor size.  
Thanks @kembond from ST community.
• Updated sounds.  Now the menu uses several different sounds, as compared to one sound only.
