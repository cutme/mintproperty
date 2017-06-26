(function(window, document, $, mint, undefined) {
	'use strict';
	
	var QuestionForm = mint.QuestionForm = function () { };
	
	QuestionForm.prototype.init = function() {
		this.enable();
	};

	QuestionForm.prototype.ajax = function() {
		
	};

	QuestionForm.prototype.enable = function() {
		var form = document.getElementById('questionForm'),
			show = $('.js-showForm'),
			close = $('.js-closeForm');
		
		show.on('click', function(e) {
			e.preventDefault();
			$(form).addClass('is-active');
			mint.Helper.goToTarget('#questionForm', -20);
		});
		
		close.on('click', function(e) {
			e.preventDefault();
			$(form).removeClass('is-active');
			$('form', form).parsley().reset();
		});
		
	};
	
	mint.QuestionForm = new QuestionForm();
	

}(window, document, jQuery, window.mint = window.mint || {}));


