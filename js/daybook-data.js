window.onload = function() {
  document.getElementById('toggleDIV').style.display = 'none';
  document.getElementById('toggleDIV2').style.display = 'none';
  document.getElementById('toggleDIV3').style.display = 'none';
};

var cust_DB=


var agent_DB=

var customer, due_date, phone, sms, lco, status, area, card, cell, last_paid;


function customerSearch(){

  var vcid=document.getElementById('vc_no').value;


for (var x in cust_DB){
  if (cust_DB[x]["VC No"]==vcid){
  sms = cust_DB[x]["Sms ID"];
  lco = cust_DB[x]["LCO ID"];
  customer = cust_DB[x]["Subscriber Name"];
  status = cust_DB[x]["Status"];
  area = cust_DB[x]["Zone"];
  card = cust_DB[x]["Card No"];
  phone = cust_DB[x]["Cel"];
  cell = cust_DB[x]["Cel2"];
  due_date = cust_DB[x]["Due Date"];
  last_paid = cust_DB[x]["Last Paid Date"];

  }
}
    if (customer==null){
        alert("Customer not found!");
        return false;
      }
    else {
      document.getElementById("c_vc").innerHTML = vcid;
      document.getElementById("c_name").innerHTML = customer;
      document.getElementById("c_phone").innerHTML = phone;
      document.getElementById("d_d").innerHTML = due_date;

      var y = document.getElementById("toggleDIV");
  		if (y.style.display === "none") {
    		y.style.display = "block";
  	}
      return [sms, vcid, lco, customer, status, area, card, phone, cell, due_date, last_paid];
    }
    }


    function agentAuth() {
      var rec_no = document.getElementById('rec_no').value;
      var pkg = document.getElementById('pkg').value;
      var amt = document.getElementById('amt').value;
      var agent=document.getElementById('password-3').value;
      var months=document.getElementById('months').value;

          for (var x in agent_DB){
            if (agent_DB[x]["FIELD2"]==agent) {
              var agent_found=agent_DB[x]["FIELD1"];
            }
          }

          {
            if (rec_no==null || rec_no==''){
              alert("Enter Receipt Number!");
              return false;
            }
            else if (pkg==null || pkg==''){
              alert("Enter Customer Package!");
              return false;
            }
            else if (amt==null || amt==''){
              alert("Enter Amount Paid!");
              return false;
            }
            else if (months==null || months==''){
              alert("Enter Number of Months Paid!");
              return false;
            }

          else if (agent_found==null){
              alert("Invalid PIN!");
              return false;
            }
          else {
            var z = document.getElementById("toggleDIV2");
      			if (z.style.display === "none") {
        			z.style.display = "block";
      	}
              return agent_found;
            }}
    }


function onclickFunction(){

customerSearch();

var vc = document.getElementById('vc_no').value;
var rec_no = document.getElementById('rec_no').value;
var pkg = document.getElementById('pkg').value;
var amt = document.getElementById('amt').value;
var rem = document.getElementById('rem').value;
var pwd = document.getElementById('password-3').value;
var months=document.getElementById('months').value;

var agent = agentAuth();

var $form = $('#data-entry'),
    url = 'https://script.google.com/macros/s/AKfycbwFpUW5uoNhR1tuXOO5J8b8cYPPCtMrMUrV0gpsDaVrYF7uJWY/exec',
    mult_url = 'https://script.google.com/macros/s/AKfycbw_pxucjS1zkPhExh4FMdtPt1ZQOn-XmpNtJrhMpj7_q5lHif8/exec'
var array = {'SMS ID':sms, 'VC No':vc, 'LCO ID':lco, 'Subscriber Name':customer, 'Status':status, 'Area':area, 'Card No':card, 'Name':customer, 'Cel1':phone, 'Cel2':cell, 'Due Date':due_date, 'Last Paid':last_paid, 'Remarks':rem, 'Receipt No':rec_no, 'Package':pkg, 'Amount':amt, 'Agent':agent, 'PIN':pwd, 'Months':months};
var mult_array = {'City Code':'MDR', 'SMS ID':sms, 'VC No':vc, 'LCO ID':lco, 'Subscriber Name':customer, 'Status':status, 'Area':area, 'Card No':card, 'Name':customer, 'Cel1':phone, 'Cel2':cell, 'Due Date':due_date, 'Last Paid':last_paid, 'Remarks':rem, 'Receipt No':rec_no, 'Package':pkg, 'Amount':amt, 'Agent':agent, 'PIN':pwd, 'Months':months};
   
console.log(array);
console.log(mult_array);

    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: array
       })
    var mult_jqxhr = $.ajax({
      url: mult_url,
      method: "GET",
      dataType: "json",
      data: mult_array
       })
       alert('Submitted Successfully!');
       location.reload();

}
