(function(window, document, $, mint, undefined) {
	'use strict';
	
	var QuestionForm = mint.QuestionForm = function () { };
	
	QuestionForm.prototype.init = function() {
		this.enable();
		this.rwud();
		
		
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
	
	
	QuestionForm.prototype.rwud = function() {
	
		
	
		var el = document.getElementById('questionForm'),
			form = $('form', el),
			obj,
			submit = $('.o-form__submit'),
			summary = $('.o-form__row--summary'),
			w = $(window);

		function checkAndMove() {
			if (mint.Helper.isWindowSmallerThan(1180)) {
				obj = submit.detach();
				form.append(obj);
			} else {
				obj = submit.detach();
				summary.append(obj);
			}
		}

		checkAndMove();
		
		$(w).on('resize', function() {
			checkAndMove();
		});
	};

	
	mint.QuestionForm = new QuestionForm();
	

}(window, document, jQuery, window.mint = window.mint || {}));


