window.onload = function() {
  document.getElementById('toggleDIV').style.display = 'none';
  document.getElementById('toggleDIV2').style.display = 'none';
  document.getElementById('toggleDIV3').style.display = 'none';
};

var cust_DB=[
    {
     "Name": "PSRK",
     "Code": 9176655120,
     "Area": "TVR"
    },
    {
     "Name": "UMA",
     "Code": 8500315929,
     "Area": "BNG"
    },
    {
     "Name": "NAGENDRAN",
     "Code": 6281144622,
     "Area": "SPL"
    },
 ]


var agent_DB=[
 {
   "FIELD1": "KSRK",
   "FIELD2": 1234
 },
 {
   "FIELD1": "PSRK",
   "FIELD2": 2045
 },
 {
   "FIELD1": "NANI",
   "FIELD2": 5715
 },
 {
   "FIELD1": "UMA",
   "FIELD2": 4444
 }
]

var cust_name, cust_code, area;


function customerSearch(){

  var cust_id=document.getElementById('coll_id').value;
//      cust_area=document.getElementById('area').value;
  var coll_type=document.getElementById('type').value;


for (var x in cust_DB){
  if (cust_DB[x]["Code"]==cust_id){
  cust_name = cust_DB[x]["Name"];
  area = cust_DB[x]["Area"];
  }
}
    if (cust_name==null){
        alert("Collection ID not found!");
        return false;
      }
    else if (coll_type=="coll"){
      document.getElementById("c_id").innerHTML = cust_id;
      document.getElementById("c_name").innerHTML = cust_name;
//      document.getElementById("c_phone").innerHTML = cust_phone;
      document.getElementById("c_area").innerHTML = area;



      var y = document.getElementById("toggleDIV");
  		if (y.style.display === "none") {
    		y.style.display = "block";
  	}
      return [cust_name, area];
    }
    else if (coll_type=="exp"){
      document.getElementById("e_id").innerHTML = cust_id;
      document.getElementById("e_name").innerHTML = cust_name;
//      document.getElementById("e_phone").innerHTML = cust_phone;
      document.getElementById("e_area").innerHTML = area;



      var y = document.getElementById("toggleDIV3");
  		if (y.style.display === "none") {
    		y.style.display = "block";
  	}
      return [cust_name, area];
    }
    }


    function collAgentAuth() {
      var start_bill = document.getElementById('start_bill').value;
      var end_bill = document.getElementById('end_bill').value;
      var amt = document.getElementById('amt').value;
      var agent=document.getElementById('coll_pwd').value;
      var pay_method=document.getElementById('pay_method').value;

          for (var x in agent_DB){
            if (agent_DB[x]["FIELD2"]==agent) {
              var agent_found=agent_DB[x]["FIELD1"];
            }
          }

          {
            if (start_bill==null || start_bill==''){
              alert("Enter Starting Bill Number!");
              return false;
            }
            else if (end_bill==null || end_bill==''){
              alert("Enter Last Bill Number!");
              return false;
            }
            else if (amt==null || amt==''){
              alert("Enter Amount Received!");
              return false;
            }
            else if (pay_method==null || pay_method==''){
              alert("Select Payment Method!");
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

function expAgentAuth() {
      var exp_code = document.getElementById('exp_code').value;
      var voucher = document.getElementById('voucher').value;
      var exp_des = document.getElementById('exp_des').value;
      var exp_paid = document.getElementById('exp_paid').value;
      var agent=document.getElementById('exp_pwd').value;

          for (var x in agent_DB){
            if (agent_DB[x]["FIELD2"]==agent) {
              var agent_found=agent_DB[x]["FIELD1"];
            }
          }

          {
            if (exp_code==null || exp_code==''){
              alert("Enter Expense Code!");
              return false;
            }
            else if (exp_paid==null || exp_paid==''){
              alert("Enter Amount Paid!");
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

var coll_id = document.getElementById('coll_id').value;
//var cust_area = document.getElementById('area').value;
var type = document.getElementById('type').value;

if (type=="coll"){
    var agent = collAgentAuth();
}
else if (type=="exp"){
    var agent = expAgentAuth();
}

var start_bill = document.getElementById('start_bill').value;
var end_bill = document.getElementById('end_bill').value;
var quant_bill = document.getElementById('quant_bill').value;
var amt = document.getElementById('amt').value;
var pay_method=document.getElementById('pay_method').value;
var coll_rem=document.getElementById('coll_rem').value;
var coll_pwd=document.getElementById('coll_pwd').value;
var exp_code=document.getElementById('exp_code').value;
var voucher = document.getElementById('voucher').value;
var exp_des=document.getElementById('exp_des').value;
var exp_paid=document.getElementById('exp_paid').value;
var exp_rem=document.getElementById('exp_rem').value;
var exp_pwd=document.getElementById('exp_pwd').value;

var $form = $('#data-entry'),
    url = 'https://script.google.com/macros/s/AKfycbx41sJid8NfbWwhCT1JHOJxePLFTKeQWwiG5YRcezJhQwNxuO4I/exec'

var array = {'Collection ID':coll_id, 'Collection ID Name':cust_name, 'Area':area, 'Type':type, 'Start Bill':start_bill, 'End Bill':end_bill, 'Bill Quantity':quant_bill, 'Amount':amt, 'Payment Method':pay_method, 'Collection Remarks':coll_rem, 'Expense Code':exp_code, 'Voucher Number':voucher, 'Expense Description':exp_des, 'Amount paid':exp_paid, 'Expense Remarks':exp_rem, 'Agent':agent};

console.log(array);

    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: array
       })
       alert('Submitted Successfully!');
       location.reload();
}
