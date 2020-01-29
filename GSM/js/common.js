$(function(){
	$('.open-additional-fields label').click(function() {
		if($('.open-additional-fields input').is(':checked')){
			$('.additional-fields').removeClass('open');
		} else {
			$('.additional-fields').addClass('open');
		}
	})

	$('.select').selectize({});
});