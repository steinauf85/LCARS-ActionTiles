# LCARS-ActionTiles

See this in action at...  Obviously, my ActionTiles panels won't load.  As I'm not signed in on your computer. http://www.lcarsatalaya.com

This is a web-based user interface for a StarTrek themed LCARS ActionTiles home automation system. It is adaptable to any resolution display, but best with an 800x480 display (Raspberry Pi 7" Touchscreen is my personal setup.

REQUIREMENTS -Tablet PC Raspberry Pi or other internet enabled device -ActionTiles account (it's free to try, cheap to buy) -DaKboard Account (free for now) -IP cameras (not required, but nice addition) -Google Maps coordinates for your area

To set this up, and have it working, it's best to have a device (Raspberry Pi, Tablet, or Computer) running a kiosk or full-screen browser.

This can be setup locally, or you can host it on a server or website that you own or buy. I have mine running as a website, so it can be viewed as LCARS from anywhere I go, any device I use.

To set this up locally, download the repository to the device you plan to use. Point the browser to the index.html file, and you should see a simple setup already.

Now that you've downloaded the repository, its time to configure the files to point to your cameras (if you have), ActionTiles, your DakBoard, and your local traffic...

• Cameras Open cameras.php, and point them to the rtsp address of your ip cameras. Follow the format that is located in the file. You can find your ip camera format online. I use Hikvision cameras, which is /Streaming/Cameras/101 etc

• ActionTiles Open index.html file, and scroll down to where you see my actiontiles web addresses... simply copy and paste your different actiontile panel website addresses into here. I have my ActionTiles panels setup as, Security, Lights, Presence, and HVAC.

• Traffic Open index.html file, and scroll down to where you see maps.google.com... enter your latitude and longitude, to get the proper traffic map displayed.  Also, obtain a Google Maps API and insert it As well.

Using http://citylatitudelongitude.com/ you can get your latitude and longitude

• Weather This should automatically pull your location, as it uses geolocation to find your location.

• Dakboard After signing up and configuring your dakboard, I integrated my Apple calendar and Google calendar, open index.html, and edit the Hub address... enter your dakboard web address.
