$( document ).ready(function() {
  
  $('.music-buttons').click(function() {

    var $this = $(this),
        audio = $('audio')[0];

    if (audio.paused === false) {
        audio.pause();
    }

    else {
      audio.play();
    $this.addClass('playing')
    }

    

  });


});