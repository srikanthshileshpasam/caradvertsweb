
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
        url = 'https://script.google.com/macros/s/AKfycbwuKy3XaIgnTX4DoidAuP75V3Vs8QpDucbra5gjPCXEMe3HxIsJ/exec'
        console.log(form);




        $('#submit-form').on('click', function(e) {
            alert("in Ajax 1111");
            console.log("testttttttttttttttttt");
          // e.preventDefault();
          var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $("#data-entry").serialize(),
            success: function(data){
              alert("in Ajax");
                    console.log(data);

                },

                error: function(data){
                    console.log(data);
                }

          })

        })

})(jQuery);


function onclickFunction(){
console.log("js function");

var vc = document.getElementById('vc_no').value;
var rec_no = document.getElementById('rec_no').value;
var pkg = document.getElementById('pkg').value;
var amt = document.getElementById('amt').value;
var rem = document.getElementById('rem').value;
var pwd = document.getElementById('password-3').value;

 // var cust[]= customerSearch();

console.log(pwd);

var $form = $('#data-entry'),
    url = 'https://script.google.com/macros/s/AKfycbwuKy3XaIgnTX4DoidAuP75V3Vs8QpDucbra5gjPCXEMe3HxIsJ/exec'
    console.log($form);

}
