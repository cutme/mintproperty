(function(window, document, $, mint, undefined) {
	'use strict';
	
	var Form = mint.Form = function () { };
	
	Form.prototype.init = function() {
		this.enable();
	};

	Form.prototype.ajax = function() {

		var $form = $(document.getElementById('form')),
			formAction = $form.attr('action'),
			formType = $form.attr('method'),
			fields = $('.c-form__fields'),
			thanks = $('.c-form__thanks');

		$.ajax({
			cache: false,
			url: formAction,
			type: formType,
			data: $form.serialize(),
			success: function(data, statusText, jqXHR) {
				if (data == 'ok') {
					thanks.removeClass('is-hidden');
					fields.addClass('is-hidden');
				}
			}, error: function(result) {
				console.log('error: ' + result.status + ' ' + result.statusText);
			}
		});
	};

	Form.prototype.enable = function() {
		var form = document.getElementById('form');

		var options = {
			trigger:		'change',
			successClass:	'has-success',
			errorClass:		'has-error',
			classHandler:	function (el) {
				return el.$element.closest('.o-form__row');
			}
		};

		$(form).parsley(options);
		form.reset();
		
		window.Parsley.on('form:submit', function() {			
			// Form.prototype.ajax();
			//return false;
		});
	};
	
	Form.prototype.destroy = function() {
		var form = document.getElementById('form'),
			fields = $('.c-form__fields'),
			thanks = $('.c-form__thanks');

		form.reset();

		$(form).parsley().destroy();	
		$(fields).removeClass('is-hidden');
		$(thanks).addClass('is-hidden');
	};
	
	mint.Form = new Form();
	

}(window, document, jQuery, window.mint = window.mint || {}));


