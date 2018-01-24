jQuery(document).ready(function($){
	//-----------------------------------------------------------------
	// heartLove
	//-----------------------------------------------------------------
	$('.heart-love').on('click', function() {
			var $loveLink = $(this);
			var $id = $(this).attr('id');
			if($loveLink.hasClass('loved')) return false;
			var $dataToPass = {
				action: 'heart-love',
				loves_id: $id
			}
			$.post(heartLove.ajaxurl, $dataToPass, function(data){
				$loveLink.html(data).addClass('loved').attr('title','You already love this!');
				$loveLink.find('.fa').removeClass('fa-heart-o').addClass('fa-heart');
			});
			return false;
	});
});