<html>
	<head>
		<title>Cameras</title>
		<script type="text/javascript" src="assets/vxgplayer-1.8.31/vxgplayer-1.8.31.min.js"> </script> 

		<link href="assets/vxgplayer-1.8.31/vxgplayer-1.8.31.min.css" rel="stylesheet"/> 

	</head>
	<body>
		
		<?php  $feed = $_GET['feed']; ?>
		
		<h2>rtsp://user:password@yourcamerasipaddress:port/directory of camera<?php echo $feed; ?>/</h2>
		<div class="vxgplayer" id="vxg_media_player1" url="rtsp://user:password@yourcamerasipaddress:port/directory of camera<?php echo $feed; ?>/"  autostart controls avsync nmf-src="assets/vxgplayer-1.8.31/pnacl/Release/media_player.nmf" nmf-path="assets/vxgplayer-1.8.31/pnacl/Release/media_player.nmf"></div> 
		
		<h2>rtsp://user:password@yourcamerasipaddress:port/directory of camera<?php echo $feed; ?>/</h2>
		<div class="vxgplayer" id="vxg_media_player2" url="user:password@yourcamerasipaddress:port/directory of camera<?php echo $feed; ?>/"  autostart controls avsync nmf-src="assets/vxgplayer-1.8.31/pnacl/Release/media_player.nmf" nmf-path="assets/vxgplayer-1.8.31/pnacl/Release/media_player.nmf"></div> 		
		
</html>

