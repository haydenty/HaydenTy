$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});

$('.readmore').click(function(){
		var $this = $(this);
		$this.toggleClass('readmore');
		if($this.hasClass('readmore')){
			$this.text('Read More');
		} else {
			$this.text('Read Less');
		}
	});
