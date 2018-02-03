$(document).ready(function() {

	// The Clock and Date
    var interval = setInterval(function() {
        var momentNow = moment();
        $('#date-part').html(momentNow.format('M.DD.YY'));
        $('#time-part').html(momentNow.format('hh:mm:ss'));
    }, 100);

    $('#stop-interval').on('click', function() {
        clearInterval(interval);
    });

	
	// Frame Targeting
    $('[data-target]').click(function(){
		var $this = $(this),
		    target = $this.data('target'),
		    status = $this.data('status'),
		    $frame = $('[data-frame="'+target+'"]'),
		    $pageTitle = $('#title'),
		    menuBG = $this.data('bg');
		
		if(status === 'off' && target !== 'authorization') {
			$frame.attr('data-status', 'on').siblings('[data-frame]').attr('data-status', 'off');
			$this.attr('data-status', 'on').siblings('[data-target]').attr('data-status', 'off');
			$('[data-target="authorization"]').attr('data-status', 'off');
			
			$pageTitle.text(target);
			
			$('.lcars-elbow, .lcars-bar').attr('data-bg', menuBG);
			
		} else if(status === 'off' && target == 'authorization') {
			
			$frame.attr('data-status', 'on').siblings('[data-frame]').attr('data-status', 'off');
			$this.attr('data-status', 'on');
			$('#left-menu [data-target]').attr('data-status', 'off');
			$pageTitle.text('LCARS');
			
			$('.lcars-elbow, .lcars-bar').attr('data-bg', 'lcars-golden-tanoi-bg');

			
		}
		
		console.log($frame, target, status, $this, menuBG);
    });
    
    
    // Preload all audio files used in doc. 
    $('[data-audio]').each(function(){
	    var audio = $(this).data('audio'),
	    	audioBlock = $('.audio-block');
	    	
	    $('<audio controls="" preload data-play="'+audio+'"><source src="assets/audio/'+audio+'.m4a" type="audio/mpeg" /> Your browser is not invited for super fun audio time.</audio>').appendTo(audioBlock);
	    
    });
    
    // Execute audio files
    $('[data-audio]').click(function(){
	   	var audio = $(this).data('audio');
	   	$('.audio-block audio[data-play="'+audio+'"]')[0].play();
    });

});
