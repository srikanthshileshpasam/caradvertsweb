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
    {
     "Name": "lmn",
     "Code": 456,
     "Phone": 123456789,
     "Area": "zzz"
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

var cust_name, cust_code, cust_phone, cust_area, area;


function customerSearch(){

  var cust_id=document.getElementById('coll_id').value;
      cust_area=document.getElementById('area').value;
  var coll_type=document.getElementById('type').value;


for (var x in cust_DB){
  if (cust_DB[x]["Code"]==cust_id){
  cust_name = cust_DB[x]["Name"];
  cust_phone = cust_DB[x]["Phone"];
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
      document.getElementById("c_phone").innerHTML = cust_phone;
      document.getElementById("c_area").innerHTML = area;
        
        

      var y = document.getElementById("toggleDIV");
  		if (y.style.display === "none") {
    		y.style.display = "block";
  	}
      return [cust_name, cust_phone, area];
    }
    else if (coll_type=="exp"){
      document.getElementById("e_id").innerHTML = cust_id;
      document.getElementById("e_name").innerHTML = cust_name;
      document.getElementById("e_phone").innerHTML = cust_phone;
      document.getElementById("e_area").innerHTML = area;
        
        

      var y = document.getElementById("toggleDIV3");
  		if (y.style.display === "none") {
    		y.style.display = "block";
  	}
      return [cust_name, cust_phone, area];  
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
            else if (exp_des==null || exp_des==''){
              alert("Enter Expense Description!");
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
var cust_area = document.getElementById('area').value;
var type = document.getElementById('type').value;

if (type=="coll"){
    var agent = collAgentAuth();
}
else if (type=="exp"){
    var agent = expAgentAuth();
}
    
var start_bill = document.getElementById('start_bill').value;
var end_bill = document.getElementById('end_bill').value;
var amt = document.getElementById('amt').value;
var pay_method=document.getElementById('pay_method').value;
var coll_rem=document.getElementById('coll_rem').value;
var coll_pwd=document.getElementById('coll_pwd').value;
var exp_code=document.getElementById('exp_code').value;
var exp_des=document.getElementById('exp_des').value;
var exp_paid=document.getElementById('exp_paid').value;
var exp_rem=document.getElementById('exp_rem').value;
var exp_pwd=document.getElementById('exp_pwd').value;

var $form = $('#data-entry'),
    url = 'https://script.google.com/macros/s/AKfycbx41sJid8NfbWwhCT1JHOJxePLFTKeQWwiG5YRcezJhQwNxuO4I/exec'
    
var array = {'Collection ID':coll_id, 'Area':cust_area, 'Type':type, 'Start Bill':start_bill, 'End Bill':end_bill, 'Bill Quantity':quantity, 'Amount':amt, 'Payment Method':pay_method, 'Collection Remarks':coll_rem, 'Pin':exp_code, 'Agent':agent, 'Expense Code':exp_code, 'Expense Description':exp_des, 'Expense Remarks':exp_rem, 'Pin':exp_pwd, 'Agent':agent};
   
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
