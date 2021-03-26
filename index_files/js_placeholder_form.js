jQuery(document).ready(function ($) {
  $('.webform-home .label-hidden .js-form-item').each(function () {
    $(this).find('input').attr('placeholder', jQuery(this).find('label').text());
    $(this).find('label').hide();
  });
  $('.contact-form .label-hidden .js-form-item').each(function () {
    $(this).find('input').attr('placeholder', jQuery(this).find('label').text());
    $(this).find('label').hide();
  });
  $('.contact-form .js-form-type-textarea .form-textarea').each(function () {
    $(this).find('input').attr('placeholder', jQuery(this).find('label').text());
    $(this).find('label').hide();
  });

  $(".js-form-type-textarea .form-textarea").attr('placeholder', "mensaje");
  $("html:lang(en) .js-form-type-textarea .form-textarea").attr('placeholder', "Message");
});
