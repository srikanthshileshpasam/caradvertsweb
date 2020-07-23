window.onload = function() {
  document.getElementById('toggleDIV').style.display = 'none';
  document.getElementById('toggleDIV2').style.display = 'none';
  document.getElementById('toggleDIV3').style.display = 'none';
};

var cust_DB=[
    {
     "Name": "abc",
     "Code": 123,
     "Phone": 123456789,
     "Area": "xyz"
    },
 ]


var agent_DB=[
 {
   "FIELD1": "Agent1",
   "FIELD2": 1001
 },
 {
   "FIELD1": "Agent2",
   "FIELD2": 1002
 },
 {
   "FIELD1": "Agent3",
   "FIELD2": 1003
 },
 {
   "FIELD1": "Agent4",
   "FIELD2": 1004
 },
 {
   "FIELD1": "Agent5",
   "FIELD2": 1005
 },
 {
   "FIELD1": "Agent6",
   "FIELD2": 1006
 },
 {
   "FIELD1": "Agent7",
   "FIELD2": 1007
 },
 {
   "FIELD1": "Agent8",
   "FIELD2": 1008
 },
 {
   "FIELD1": "Agent9",
   "FIELD2": 1009
 },
 {
   "FIELD1": "Agent10",
   "FIELD2": 1010
 },
 {
   "FIELD1": "Agent11",
   "FIELD2": 1011
 },
 {
   "FIELD1": "Agent12",
   "FIELD2": 1012
 },
 {
   "FIELD1": "Agent13",
   "FIELD2": 1013
 },
 {
   "FIELD1": "Agent14",
   "FIELD2": 1014
 },
 {
   "FIELD1": "Agent15",
   "FIELD2": 1015
 },
 {
   "FIELD1": "Agent16",
   "FIELD2": 1016
 },
 {
   "FIELD1": "Agent17",
   "FIELD2": 1017
 },
 {
   "FIELD1": "Agent18",
   "FIELD2": 1018
 },
 {
   "FIELD1": "Agent19",
   "FIELD2": 1019
 },
 {
   "FIELD1": "Agent20",
   "FIELD2": 1020
 },
 {
   "FIELD1": "Agent21",
   "FIELD2": 1021
 },
 {
   "FIELD1": "Agent22",
   "FIELD2": 1022
 },
 {
   "FIELD1": "Agent23",
   "FIELD2": 1023
 },
 {
   "FIELD1": "Agent24",
   "FIELD2": 1024
 },
 {
   "FIELD1": "Agent25",
   "FIELD2": 1025
 },
 {
   "FIELD1": "Agent26",
   "FIELD2": 1026
 },
 {
   "FIELD1": "Agent27",
   "FIELD2": 1027
 },
 {
   "FIELD1": "Agent28",
   "FIELD2": 1028
 },
 {
   "FIELD1": "Agent29",
   "FIELD2": 1029
 },
 {
   "FIELD1": "Agent30",
   "FIELD2": 1030
 }
]

var cust_name, cust_code, cust_phone, cust_area;


function customerSearch(){

  var cust_id=document.getElementById('coll_id').value;
      cust_area=document.getElementById('area').value;
  var coll_type=document.getElementById('type').value;


for (var x in cust_DB){
  if (cust_DB[x]["Code"]==cust_id){
  cust_name = cust_DB[x]["Name"];
  cust_phone = cust_DB[x]["Phone"];
  }
}
    if (cust_name==null){
        alert("Collection ID not found!");
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
