
(function ($) {
    $.fn.serializeObject = function()
    {

    var o = {};
    var a = this.serializeArray();

    $.each(a, function() {
    if (o[this.name]) {
    if (!o[this.name].push) {
    o[this.name] = [o[this.name]];
    }
    o[this.name].push(this.value || '');
    } else {
    o[this.name] = this.value || '';
    }
    });
    console.log(o);
    return o;
    };
    var v = $("#data-entry").serializeObject();
    console.log(v);



    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
        $(thisAlert).find('.btn-hide-validate').remove();
    }
    var $form = $('form#data-entry'),
        url = 'https://script.google.com/macros/s/AKfycbzjLNgC5zBsZhVyxwI-O8C67Vr512bsZ5YeHMv449-HMQPJQ1s/exec'


    $('#submit-form').on('click', function(e) {
      // e.preventDefault();
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject()
})

    })



})(jQuery);
