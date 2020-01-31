
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
        url = 'https://script.google.com/macros/s/AKfycbzxW8aStatR33fJD2F68typ7JcpUh7eSK1Bp8DLp63adwTulf1h/exec'


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
