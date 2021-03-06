window.onload = function() {
  document.getElementById('toggleDIV').style.display = 'none';
  document.getElementById('toggleDIV2').style.display = 'none';
  document.getElementById('toggleDIV3').style.display = 'none';
  document.getElementById('toggleDIV4').style.display = 'none';
};

var cust_DB=[
 {
   "Name": "AKULA RAMU",
   "Code": 9866189456,
   "Area": "BCM"
 },
 {
   "Name": "ASLAM",
   "Code": 8667208715,
   "Area": "DGM"
 },
 {
   "Name": "CH RANJITH KUMAR",
   "Code": 9652635115,
   "Area": "BCM"
 },
 {
   "Name": "CH TRIVENI",
   "Code": 7013394179,
   "Area": "BCM"
 },
 {
   "Name": "Chanti Kiran",
   "Code": 9866628201,
   "Area": "MDR"
 },
 {
   "Name": "D Kishore",
   "Code": 7093967318,
   "Area": "MDR"
 },
 {
   "Name": "D Lakshman Rao MDPD",
   "Code": 9182127649,
   "Area": "BNG"
 },
 {
   "Name": "D R K Shope",
   "Code": 8978215041,
   "Area": "MDR"
 },
 {
   "Name": "DWARAKA",
   "Code": 9963066834,
   "Area": "SPL-TLD"
 },
 {
   "Name": "G Lakshman Rao RCBR",
   "Code": 9963959936,
   "Area": "BNG"
 },
 {
   "Name": "Gopi Kirana",
   "Code": 9100709228,
   "Area": "MDR"
 },
 {
   "Name": "Heritage Milk",
   "Code": 9494597915,
   "Area": "MDR"
 },
 {
   "Name": "HMN",
   "Code": 8500736236,
   "Area": "SPL-TLD"
 },
 {
   "Name": "KKP",
   "Code": 9885298187,
   "Area": "SPL-TLD"
 },
 {
   "Name": "KRISHNA REDDY",
   "Code": 9963111404,
   "Area": "DGM"
 },
 {
   "Name": "Krishnareddy",
   "Code": 9640268082,
   "Area": "MDR"
 },
 {
   "Name": "KUMAR",
   "Code": 9441422817,
   "Area": "DGM"
 },
 {
   "Name": "LATHA",
   "Code": 9989828481,
   "Area": "DGM"
 },
 {
   "Name": "LAXMANARAO",
   "Code": 8919298506,
   "Area": "DGM"
 },
 {
   "Name": "M SIVAJI",
   "Code": 9701445520,
   "Area": "BCM"
 },
 {
   "Name": "MEESAVA RAVINDRA",
   "Code": 9553885259,
   "Area": "BCM"
 },
 {
   "Name": "Mrs Padma",
   "Code": 9966183130,
   "Area": "MDR"
 },
 {
   "Name": "MTR",
   "Code": 9666440009,
   "Area": "MDR"
 },
 {
   "Name": "Nagahari",
   "Code": 9948818218,
   "Area": "MDR"
 },
 {
   "Name": "NAGENDRAN",
   "Code": 9705681858,
   "Area": "BCM-2"
 },
 {
   "Name": "NAGESWARAO",
   "Code": 7981287733,
   "Area": "BCM"
 },
 {
   "Name": "NANI",
   "Code": 6281144622,
   "Area": "SPL-TLD"
 },
 {
   "Name": "NARESH",
   "Code": 9949578128,
   "Area": "BCM"
 },
 {
   "Name": "NAVEEN",
   "Code": 9553123342,
   "Area": "BCM-2"
 },
 {
   "Name": "NR",
   "Code": 9989035147,
   "Area": "SPL-TLD"
 },
 {
   "Name": "NTR",
   "Code": 9989558567,
   "Area": "SPL-TLD"
 },
 {
   "Name": "P LAXMI NARAYANA",
   "Code": 9951102996,
   "Area": "BCM"
 },
 {
   "Name": "P VENKATESWARAO",
   "Code": 6303392225,
   "Area": "BCM"
 },
 {
   "Name": "Padma Medicals",
   "Code": 8639896207,
   "Area": "MDR"
 },
 {
   "Name": "Prabanjan Medical",
   "Code": 7981124088,
   "Area": "MDR"
 },
 {
   "Name": "Prasad",
   "Code": 9951967054,
   "Area": "MDR"
 },
 {
   "Name": "PSRK",
   "Code": 9176655120,
   "Area": "ALL"
 },
 {
   "Name": "Radhakrishna Kirana",
   "Code": 9666335522,
   "Area": "MDR"
 },
 {
   "Name": "RAMBABU",
   "Code": 9603493844,
   "Area": "DGM"
 },
 {
   "Name": "RAMESH",
   "Code": 9705383174,
   "Area": "DGM"
 },
 {
   "Name": "Ramesh Kirana",
   "Code": 9848616814,
   "Area": "MDR"
 },
 {
   "Name": "RANI",
   "Code": 9010640306,
   "Area": "BCM-2"
 },
 {
   "Name": "RD",
   "Code": 9182663076,
   "Area": "SPL-TLD"
 },
 {
   "Name": "Rohit Kirana",
   "Code": 9949426612,
   "Area": "MDR"
 },
 {
   "Name": "Roja Kirana",
   "Code": 9398513527,
   "Area": "MDR"
 },
 {
   "Name": "S RAMAKRISHNA",
   "Code": 9705458381,
   "Area": "BCM"
 },
 {
   "Name": "SAMPATH",
   "Code": 9505077625,
   "Area": "DGM"
 },
 {
   "Name": "SEETHAIAH",
   "Code": 9666738956,
   "Area": "SPL-TLD"
 },
 {
   "Name": "Shabber",
   "Code": 9848626478,
   "Area": "MDR"
 },
 {
   "Name": "SINDHU",
   "Code": 9912077640,
   "Area": "DGM"
 },
 {
   "Name": "SM",
   "Code": 9394345151,
   "Area": "SPL-TLD"
 },
 {
   "Name": "SPL Off",
   "Code": 9177717457,
   "Area": "SPL-TLD"
 },
 {
   "Name": "SRINU",
   "Code": 9666781242,
   "Area": "DGM"
 },
 {
   "Name": "Subhani",
   "Code": 7680837852,
   "Area": "BNG"
 },
 {
   "Name": "sunandini Milk",
   "Code": 9959490485,
   "Area": "MDR"
 },
 {
   "Name": "SUNIL",
   "Code": 9866633629,
   "Area": "DGM"
 },
 {
   "Name": "SURI",
   "Code": 9666491750,
   "Area": "SPL-TLD"
 },
 {
   "Name": "T PANI KUMAR",
   "Code": 9652712027,
   "Area": "BCM"
 },
 {
   "Name": "T RAJESH",
   "Code": 9949436750,
   "Area": "BCM"
 },
 {
   "Name": "Thallada",
   "Code": 9704136727,
   "Area": "SPL-TLD"
 },
 {
   "Name": "Thirupathi Rao TMPL",
   "Code": 9963385181,
   "Area": "BNG"
 },
 {
   "Name": "Ushasri BNGM",
   "Code": 7569022502,
   "Area": "BNG"
 },
 {
   "Name": "VAMSHI",
   "Code": 9959086753,
   "Area": "DGM"
 },
 {
   "Name": "Vasu on line",
   "Code": 9948484719,
   "Area": "MDR"
 },
 {
   "Name": "Venkat",
   "Code": 8897437434,
   "Area": "MDR"
 },
 {
   "Name": "Venkateswrao",
   "Code": 8520099096,
   "Area": "MDR"
 },
 {
   "Name": "Vijaya Dairy",
   "Code": 9948592578,
   "Area": "MDR"
 },
 {
   "Name": "VV",
   "Code": 9059636668,
   "Area": "SPL-TLD"
 }
]

var agent_DB=[
  {
     "FIELD1": "Bandi Thulasi Rao",
     "FIELD2": 1522
  },
 {
   "FIELD1": "SATHISH",
   "FIELD2": 2802
 },
 {
   "FIELD1": "SARVESWARAO KANNAM",
   "FIELD2": 5943
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

var transaction_DB=[
 {
   "Coll Point": "NTR",
   "Rec No": 2611,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3222,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3905,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2612,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 340,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3906,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4265,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 600,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4954,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5492,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4628,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42765,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2613,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2614,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8458,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4914,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4915,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "RAMESH",
   "Rec No": 2344,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8459,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4629,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3021,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5493,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 564,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "S RAMAKRISHNA",
   "Rec No": 8551,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "S RAMAKRISHNA",
   "Rec No": 8552,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "S RAMAKRISHNA",
   "Rec No": 8553,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "CH RANJITH KUMAR",
   "Rec No": 5908,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4235,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19980,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4957,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19981,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4630,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2615,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4955,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19982,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4956,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3223,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 878,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3224,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1497,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1498,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4143,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 879,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RAMESH",
   "Rec No": 2345,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5494,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RAMBABU",
   "Rec No": 2941,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19983,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2616,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 1998,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5495,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 1999,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19984,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4536,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3814,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3813,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19985,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 331,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 332,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 333,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 334,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19986,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "LATHA",
   "Rec No": 3165,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4537,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3554,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "Heritage Milk",
   "Rec No": 9882,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1499,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19546,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19987,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 335,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 336,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 337,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4631,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19988,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4861,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5139,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5206,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5207,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 264,
   "Location": "MDR"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 4795,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4144,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 4796,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 4797,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 4798,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3521,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM"
 },
 {
   "Coll Point": "S RAMAKRISHNA",
   "Rec No": 8554,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4632,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1500,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 880,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 176,
   "Location": "BCM"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19547,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3962,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19989,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3963,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 226,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19990,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5496,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4145,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3457,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4958,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4370,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4146,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 205,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4538,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4539,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1934,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19548,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 900,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6777,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 420,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 421,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 206,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19549,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 422,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3964,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 338,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 339,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 190,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 340,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4147,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "MEESAVA RAVINDRA",
   "Rec No": 427,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6778,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6779,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Heritage Milk",
   "Rec No": 9883,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Heritage Milk",
   "Rec No": 9884,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 423,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4371,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 228,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6781,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 600,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6780,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4540,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6782,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4541,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 2000,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 228,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5507,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3022,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3023,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5508,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 0,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5509,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 0,
   "Location": "MDR"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3522,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 341,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4959,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 342,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1501,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4542,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5510,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 343,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 177,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3336,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6783,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5511,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5512,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5513,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19550,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 101,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6784,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5004,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 93,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 94,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 95,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 290,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 424,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 425,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1502,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 262,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Subhani",
   "Rec No": 45794,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 145,
   "Location": "BNG"
 },
 {
   "Coll Point": "Heritage Milk",
   "Rec No": 9885,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1760,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1761,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6785,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1762,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19551,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4372,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3225,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1503,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 565,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4148,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4373,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagachari",
   "Rec No": 5419,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 260,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5514,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4149,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5515,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 0,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagachari",
   "Rec No": 5420,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6018,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3458,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3459,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1935,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5308,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 566,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6786,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4266,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6737,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 881,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Nagachari",
   "Rec No": 5421,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4808,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6767,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4374,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6019,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6788,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 344,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 96,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1936,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5497,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 2300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 97,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4543,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 567,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "D Lakshman Rao MDPD",
   "Rec No": 43135,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Subhani",
   "Rec No": 46254,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Subhani",
   "Rec No": 45795,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 900,
   "Location": "BNG"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 46392,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 46393,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 0,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 568,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 290,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4544,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 4799,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5498,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3024,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 345,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6789,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19552,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 9439,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3523,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1763,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3907,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "RAMESH",
   "Rec No": 2346,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 882,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2617,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19991,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 98,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SM",
   "Rec No": 924,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 353,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 102,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44977,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4268,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1764,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4633,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3815,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 340,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3460,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 290,
   "Location": "MDR"
 },
 {
   "Coll Point": "LATHA",
   "Rec No": 3166,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4917,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1937,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ravindhra Reddy",
   "Rec No": 177,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5516,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 337,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4545,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1765,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4918,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42766,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 210,
   "Location": "BNG"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44978,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 240,
   "Location": "BNG"
 },
 {
   "Coll Point": "LATHA",
   "Rec No": 3167,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42767,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5003,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SM",
   "Rec No": 920,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3337,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 921,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 177,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagachari",
   "Rec No": 5422,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 922,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3816,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 923,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 263,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkateswrao",
   "Rec No": 445,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3025,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3026,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3256,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1938,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "S RAMAKRISHNA",
   "Rec No": 8555,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6790,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3817,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1240,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 210,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 5033,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 426,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Nagachari",
   "Rec No": 5423,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6791,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Radhakrishna Kirana",
   "Rec No": 5005,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3818,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Subhani",
   "Rec No": 45797,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "BNG"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 427,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1766,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3819,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3555,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44976,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 2000,
   "Location": "BNG"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1939,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 428,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1940,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6792,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4862,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4375,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3227,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3226,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Radhakrishna Kirana",
   "Rec No": 5006,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 227,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6793,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ravindhra Reddy",
   "Rec No": 178,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6794,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 883,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 884,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19553,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 430,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 431,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 432,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3228,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19554,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3820,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 600,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3821,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 410,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ravindhra Reddy",
   "Rec No": 179,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 925,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4960,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 429,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4546,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5517,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1941,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "LATHA",
   "Rec No": 3168,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19555,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SM",
   "Rec No": 926,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4547,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 228,
   "Location": "MDR"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4236,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 260,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3556,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5601,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4237,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5140,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5141,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1506,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4548,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2620,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3255,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19556,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44979,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "SM",
   "Rec No": 929,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44980,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "BNG"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44981,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5518,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6795,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4376,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4150,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 1980,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 433,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 434,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 435,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 263,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 436,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5309,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19557,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 20,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5310,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4961,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6796,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 265,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 1981,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1507,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2621,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagachari",
   "Rec No": 5424,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 346,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 347,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 885,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2622,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 190,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3822,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6797,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1767,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 18488,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1942,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 348,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "MEESAVA RAVINDRA",
   "Rec No": 428,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 437,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 438,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6798,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 439,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4962,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 440,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 441,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 442,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19992,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 886,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19993,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 260,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 349,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2623,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4863,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19994,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5499,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3823,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19995,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19996,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 887,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "PSRK",
   "Rec No": 419,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 0,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 350,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4963,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PSRK",
   "Rec No": 6760,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 0,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3824,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 240,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 18057,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 0,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1768,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19997,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 205,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4634,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1769,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5142,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1770,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 443,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 315,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5500,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5602,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19558,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5603,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3825,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3257,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19998,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SM",
   "Rec No": 927,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 335,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5005,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5006,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4549,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Subhani",
   "Rec No": 45798,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "BNG"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3966,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4482,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4483,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4484,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4485,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3229,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5311,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3230,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3231,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5501,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 900,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4635,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4636,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1771,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagachari",
   "Rec No": 5425,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44982,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 570,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3338,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 569,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42768,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 210,
   "Location": "BNG"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 888,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5604,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 889,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5502,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8460,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3232,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 900,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4864,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4377,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3826,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6799,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5503,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3028,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19559,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4551,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2624,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3524,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3233,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 500,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6800,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 227,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6020,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1772,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3234,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 444,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 445,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 446,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3339,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4486,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 326,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4487,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4488,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 260,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1773,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 447,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3908,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3909,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2618,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagachari",
   "Rec No": 5426,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 928,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 1920,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 134,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6801,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ravindhra Reddy",
   "Rec No": 180,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3029,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5504,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4865,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5007,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4378,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 351,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4637,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 352,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5208,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 353,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 354,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 355,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3965,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4238,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 931,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4151,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 890,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SM",
   "Rec No": 932,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 252,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19560,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4239,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 891,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4866,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 150,
   "Location": "DMG"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4489,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2625,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4152,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3910,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3461,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5209,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42769,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4916,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3030,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 892,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3031,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42770,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42771,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4552,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2627,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4553,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 356,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1943,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 900,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3525,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1944,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42772,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3526,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3032,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 290,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3967,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 390,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19999,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3968,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 290,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4554,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3969,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 501,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 502,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3258,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 103,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5427,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 4800,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4638,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkateswrao",
   "Rec No": 446,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1945,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44984,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 230,
   "Location": "BNG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 503,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5428,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 200,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5429,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5143,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 205,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5144,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 330,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 504,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2628,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44983,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 230,
   "Location": "BNG"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44985,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4550,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 505,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 280,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4965,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 506,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3970,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5430,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 182,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "Office",
   "Rec No": 20000,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5605,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1946,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5505,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 507,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5431,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 500,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 508,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4867,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SM",
   "Rec No": 933,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42773,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3971,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 509,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5506,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6804,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4153,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3235,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 2300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6803,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3462,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 893,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "LAXMANARAO",
   "Rec No": 4676,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 510,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 357,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19555,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 358,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5432,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 359,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 240,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 360,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 361,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 362,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1947,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3911,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 511,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4966,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 900,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4964,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3033,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6802,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3973,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 512,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4154,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3827,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 448,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19556,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5507,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 513,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6805,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4919,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6806,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1774,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1508,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 182,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1509,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3828,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3912,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 46394,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3340,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 244,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1776,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 514,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1775,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5508,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 205,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3972,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "LAXMANARAO",
   "Rec No": 4677,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 350,
   "Location": "DMG"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4809,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4269,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3341,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 228,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5433,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4868,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4869,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4555,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4556,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 934,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1949,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 515,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 363,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2629,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3342,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3974,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5511,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 229,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3557,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5145,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6021,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5434,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Ravindhra Reddy",
   "Rec No": 181,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 580,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3034,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3829,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5435,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1510,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1505,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4967,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5519,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 0,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3236,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4025,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5437,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5438,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 245,
   "Location": "MDR"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4379,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 290,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1950,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1512,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5510,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1951,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 458,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 230,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5008,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3237,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "S RAMAKRISHNA",
   "Rec No": 8556,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Ravindhra Reddy",
   "Rec No": 182,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8557,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6807,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1952,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6808,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3202,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4968,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6809,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4270,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19557,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2630,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4969,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5436,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5312,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 364,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 440,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 365,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5439,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2626,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1777,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 210,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4870,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2631,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4155,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4557,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4970,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2632,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 449,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 450,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 183,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 451,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 452,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 453,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 454,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 456,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 280,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 457,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 459,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4240,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 46395,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5440,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1953,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4241,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 200,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1954,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1948,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2633,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 330,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3240,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3529,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 99,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5441,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5313,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5520,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 500,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3558,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 900,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5444,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5442,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5443,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1513,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1514,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3913,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5509,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5512,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1515,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4381,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5445,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3241,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5146,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3914,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 0,
   "Location": "DMG"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 366,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 367,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 205,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 368,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1955,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3915,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5446,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19558,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4871,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 460,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 571,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 290,
   "Location": "BCM"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4382,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 572,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 290,
   "Location": "BCM"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19559,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2634,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19560,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 0,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 462,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 600,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 516,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4639,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 225,
   "Location": "MDR"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 573,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6811,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 517,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4156,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 260,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5147,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 518,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6814,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19562,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6815,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1778,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3035,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6812,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4558,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6813,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6810,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42774,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4640,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2635,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 519,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4559,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19563,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5009,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4380,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6816,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 240,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6817,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4560,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3343,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 894,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3527,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 160,
   "Location": "BCM"
 },
 {
   "Coll Point": "LAXMANARAO",
   "Rec No": 4678,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SM",
   "Rec No": 930,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3529,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 180,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 18489,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5606,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4561,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4562,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 18490,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 895,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4383,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 520,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3201,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3242,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1516,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1517,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1518,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 1982,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 461,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 463,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 521,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 207,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 896,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 897,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3530,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4563,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19564,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5513,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 898,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5514,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 899,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3463,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 177,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4641,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4642,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 134,
   "Location": "DMG"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3243,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3701,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5515,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2636,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2637,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5314,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 9386,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4973,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5210,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkateswrao",
   "Rec No": 447,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7978,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7979,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3244,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7980,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7981,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7982,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4157,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 232,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 420,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7983,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 522,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7984,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7985,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4974,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 523,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 524,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2638,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3464,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "LATHA",
   "Rec No": 3169,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3246,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "MEESAVA RAVINDRA",
   "Rec No": 429,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 525,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3975,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5315,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 465,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3344,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42775,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4271,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 369,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3702,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 201,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3345,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44975,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 90,
   "Location": "DMG"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 370,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 467,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3531,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4564,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3036,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 466,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3037,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2639,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42776,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4242,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4565,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 371,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4566,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1519,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1521,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1520,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1522,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8461,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1523,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1524,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4243,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 1984,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 372,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 178,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4384,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1956,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4567,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 182,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3703,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4385,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3704,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 373,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 468,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3038,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 574,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4027,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4028,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 575,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4386,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3976,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3039,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 310,
   "Location": "BCM"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3830,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 374,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 230,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SM",
   "Rec No": 935,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4568,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3203,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4920,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5211,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 390,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2640,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "MEESAVA RAVINDRA",
   "Rec No": 430,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1265,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 245,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5447,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 155,
   "Location": "MDR"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3916,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6822,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 310,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6823,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6824,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5448,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3917,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6825,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5449,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2642,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2641,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 936,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 225,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "MEESAVA RAVINDRA",
   "Rec No": 431,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SM",
   "Rec No": 937,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 526,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SM",
   "Rec No": 938,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 939,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3831,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3832,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D Lakshman Rao MDPD",
   "Rec No": 46136,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44987,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 230,
   "Location": "BNG"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1779,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5450,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 185,
   "Location": "MDR"
 },
 {
   "Coll Point": "Chanti Kiran",
   "Rec No": 751,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 940,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 340,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkateswrao",
   "Rec No": 448,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 469,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "MEESAVA RAVINDRA",
   "Rec No": 432,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 470,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1526,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3705,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 252,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 471,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 472,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3238,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1527,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4643,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "MEESAVA RAVINDRA",
   "Rec No": 433,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3706,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6828,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4387,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 330,
   "Location": "MDR"
 },
 {
   "Coll Point": "S RAMAKRISHNA",
   "Rec No": 8558,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 527,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5316,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7983,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5452,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5453,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 528,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Ravindhra Reddy",
   "Rec No": 183,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5454,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1780,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5455,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6818,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1781,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6819,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6820,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6821,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 473,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 280,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 474,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 475,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3559,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5457,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3918,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4570,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 182,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6826,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4572,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4573,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19565,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RAMBABU",
   "Rec No": 2942,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6829,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 375,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 376,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4644,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5458,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 335,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 377,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 378,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5010,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5459,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5460,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3533,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4272,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6830,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6831,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6832,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 205,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6833,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 180,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4273,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1528,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 280,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1530,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42777,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5461,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5462,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 476,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 477,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 478,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19566,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6834,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 340,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 1985,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3465,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 228,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6835,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 235,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4574,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6836,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4575,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4645,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 182,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4576,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42778,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5317,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 379,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5318,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 264,
   "Location": "MDR"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5319,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3977,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4976,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8462,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3534,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4244,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 1983,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 479,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1957,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 90,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5463,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5464,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6837,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5465,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 225,
   "Location": "MDR"
 },
 {
   "Coll Point": "Heritage Milk",
   "Rec No": 9886,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6838,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 941,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4646,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6839,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3239,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4975,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19567,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6840,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4977,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6841,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6842,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4577,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3247,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2643,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44986,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3248,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 1992,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44988,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3919,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SM",
   "Rec No": 942,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44989,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4647,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1511,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5011,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3346,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3259,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4245,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3260,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5521,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 0,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5456,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 560,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4571,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Bandi Thulasi Rao",
   "Rec No": 45753,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4578,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4579,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 470,
   "Location": "MDR"
 },
 {
   "Coll Point": "VAMSHI",
   "Rec No": 2274,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "VAMSHI",
   "Rec No": 2275,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4388,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4389,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4648,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3707,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3409,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3262,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3347,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 205,
   "Location": "MDR"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3263,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3978,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 576,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SM",
   "Rec No": 943,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5466,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5467,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5468,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 245,
   "Location": "MDR"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5012,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5320,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 270,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5469,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5470,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3561,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3535,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19568,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3560,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 455,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2644,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4277,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8463,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4158,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5471,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3348,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6843,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 150,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5522,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 0,
   "Location": "MDR"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 577,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1782,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 578,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5013,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "VAMSHI",
   "Rec No": 2276,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3708,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5472,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1783,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5473,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 529,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1784,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1785,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6845,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19569,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6846,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 134,
   "Location": "DMG"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 900,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3920,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "S RAMAKRISHNA",
   "Rec No": 8559,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3249,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "S RAMAKRISHNA",
   "Rec No": 8560,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6844,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1958,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5474,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4159,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 380,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5475,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 205,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 381,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 530,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7986,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4979,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 382,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6022,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6847,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5321,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5322,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6848,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 944,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4390,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5476,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3709,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 18491,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 227,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3562,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 290,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3563,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2645,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6849,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6850,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3921,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 531,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SM",
   "Rec No": 945,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1786,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3070,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 532,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 18492,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4275,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 0,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 0,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6023,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4391,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5478,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6851,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4392,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1531,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 187,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3710,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19570,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RAMBABU",
   "Rec No": 2943,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4980,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 579,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 104,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5014,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5523,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3833,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6853,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 18493,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6854,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 355,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkateswrao",
   "Rec No": 449,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6855,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 242,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 383,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 533,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5477,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5524,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 384,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 385,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 387,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 388,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44990,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44991,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3711,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "SM",
   "Rec No": 946,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 153,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1787,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1532,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19571,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6856,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 386,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "CH RANJITH KUMAR",
   "Rec No": 5910,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3532,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6857,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 46396,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 46397,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1788,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 46398,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6858,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 581,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6859,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6860,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 580,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 290,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6861,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Heritage Milk",
   "Rec No": 9887,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 105,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 18493,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SM",
   "Rec No": 947,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4393,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 560,
   "Location": "MDR"
 },
 {
   "Coll Point": "SINDHU",
   "Rec No": 2166,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1534,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3536,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1535,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4981,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 948,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4246,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 949,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 950,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 18494,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 527,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4649,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3712,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 2823,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42779,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2646,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2647,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8464,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6024,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2648,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1789,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4029,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1790,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 951,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3349,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5212,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2649,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 370,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6025,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 18496,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 180,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3251,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3834,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4978,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4650,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8465,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4651,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19572,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4247,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 233,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 234,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4160,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4652,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1959,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 235,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 236,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 900,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1960,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42779,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42780,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 230,
   "Location": "BNG"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 18497,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4921,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42781,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 534,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5607,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3041,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SINDHU",
   "Rec No": 2167,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3922,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 535,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 536,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3713,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SINDHU",
   "Rec No": 2168,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4161,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 537,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3714,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 18498,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4982,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2650,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4655,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 1993,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2651,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3715,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4580,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3042,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "VAMSHI",
   "Rec No": 2277,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1536,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 1994,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "VAMSHI",
   "Rec No": 2278,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3043,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "BCM"
 },
 {
   "Coll Point": "RAMBABU",
   "Rec No": 2945,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 538,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2652,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4581,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 18499,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4922,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4983,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 539,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4923,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4924,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4925,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 540,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 210,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4984,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3253,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 18500,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 541,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3252,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4248,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3027,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 542,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 225,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4656,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4582,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 953,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4569,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5526,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkateswrao",
   "Rec No": 450,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 953,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5527,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5528,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 240,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1961,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 601,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 543,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1537,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4249,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 389,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8466,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1538,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 500,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 544,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 228,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SINDHU",
   "Rec No": 2169,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 481,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4658,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 482,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4653,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4654,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 390,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4657,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6862,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1792,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1793,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1794,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6863,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 545,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 546,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 100,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1539,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3466,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 483,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 230,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 547,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8468,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 392,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6864,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 393,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6865,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6866,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3537,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6867,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42782,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 394,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6868,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1540,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 395,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 484,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 485,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 548,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 396,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2653,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6869,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 397,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4163,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 205,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6870,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4164,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 202,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6871,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6872,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 210,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4396,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "MDR"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4397,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6873,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6874,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6875,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3046,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3047,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3048,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3979,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 228,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 398,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3045,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4926,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4394,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 205,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3040,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SM",
   "Rec No": 955,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1541,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6877,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3835,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1529,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1962,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 210,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 583,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6878,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 205,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 584,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1963,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6879,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Heritage Milk",
   "Rec No": 9888,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 228,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1542,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4395,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 585,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 17954,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4030,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1796,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5529,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1797,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5530,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 0,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5531,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 0,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5532,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 304,
   "Location": "DMG"
 },
 {
   "Coll Point": "SM",
   "Rec No": 956,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 240,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 134,
   "Location": "DMG"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 486,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 487,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5534,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 488,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 154,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 489,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 490,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5535,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5536,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 600,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5537,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "S RAMAKRISHNA",
   "Rec No": 8561,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 106,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5538,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6880,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4398,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4026,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6881,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 46399,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "RAMBABU",
   "Rec No": 2944,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 46400,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 237,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 228,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Chanti Kiran",
   "Rec No": 752,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5214,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5539,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5213,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6876,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5540,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3716,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5541,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 0,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19573,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4399,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 290,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1798,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4583,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 399,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3980,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2654,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 491,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 280,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 492,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3049,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 493,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 180,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 494,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5608,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 495,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4584,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "S RAMAKRISHNA",
   "Rec No": 8563,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SM",
   "Rec No": 957,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3981,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 958,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 238,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 239,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 240,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 352,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 241,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4810,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4659,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4250,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RAMESH",
   "Rec No": 2347,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3982,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 582,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 290,
   "Location": "BCM"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3050,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4165,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1543,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 390,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3983,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 496,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44981,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3265,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 4400,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1799,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3266,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3264,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3255,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3836,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44993,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3267,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44994,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5533,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3564,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 182,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5542,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 188,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 400,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44995,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 220,
   "Location": "BNG"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5543,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 500,
   "Location": "MDR"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44996,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 600,
   "Location": "BNG"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5544,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 228,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3565,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4927,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Subhani",
   "Rec No": 45800,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 600,
   "Location": "BNG"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1791,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6882,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3204,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6883,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5545,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1544,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1964,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 586,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3268,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4585,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "MDR"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4162,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 182,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3051,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1545,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3984,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5546,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5701,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6885,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3269,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3350,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4660,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6886,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4251,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RAMBABU",
   "Rec No": 2946,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 160,
   "Location": "DMG"
 },
 {
   "Coll Point": "RAMBABU",
   "Rec No": 2947,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 1995,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8469,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4811,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8470,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 587,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4166,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4872,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 150,
   "Location": "DMG"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3256,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42783,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 210,
   "Location": "BNG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 3837,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5547,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5548,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3351,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5549,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 650,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6887,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5556,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5702,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5551,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5552,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5553,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3923,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1800,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3838,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 549,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2655,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42784,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 500,
   "Location": "BNG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 550,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 551,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6884,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6888,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 370,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6889,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 552,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Rakesh",
   "Rec No": 5007,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3924,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6890,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Rakesh",
   "Rec No": 5008,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 553,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3985,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 391,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 497,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19574,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 230,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 498,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 554,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5554,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 220,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5555,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5556,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 801,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 802,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6891,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1801,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 1996,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2656,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 803,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 325,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5557,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5558,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6859,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 804,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 225,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6892,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1802,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 275,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3257,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 805,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4267,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4586,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 555,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 806,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5703,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3258,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 807,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 150,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 500,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4587,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 701,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 702,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44997,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19575,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44998,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6893,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1803,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4661,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3052,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 499,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1804,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1805,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5525,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4985,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 900,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1806,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 225,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3986,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5559,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1807,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 43001,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1808,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1809,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6026,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 703,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 252,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 704,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5560,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 650,
   "Location": "MDR"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5323,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4986,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5609,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 228,
   "Location": "MDR"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6027,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 420,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1810,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3840,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3259,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4987,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1811,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3254,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3839,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42785,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 588,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 808,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 809,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 556,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 810,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6894,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 420,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6895,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1812,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6896,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RAMESH",
   "Rec No": 2348,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5561,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3270,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1813,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 210,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3352,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44992,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5516,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 706,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 811,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 705,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "SM",
   "Rec No": 959,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4928,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5704,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4588,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4662,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3987,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "S RAMAKRISHNA",
   "Rec No": 8762,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 8564,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 480,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3717,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 602,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 600,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5562,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3044,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3053,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5563,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5517,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2657,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1546,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2658,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 812,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8467,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 203,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 813,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3566,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2659,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3539,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 180,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 19576,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3988,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5563,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3925,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5215,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6897,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 960,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4988,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 44999,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 230,
   "Location": "BNG"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6028,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5015,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 1997,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SM",
   "Rec No": 961,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4929,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 217,
   "Location": "MDR"
 },
 {
   "Coll Point": "RAMESH",
   "Rec No": 2349,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5518,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4930,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 287,
   "Location": "MDR"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 589,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3718,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4167,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3719,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RAMESH",
   "Rec No": 2350,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 242,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 243,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4252,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 244,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4663,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4989,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2660,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4664,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3720,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3721,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8471,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8472,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8473,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8474,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5705,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3722,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4665,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1547,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 557,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Heritage Milk",
   "Rec No": 9889,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RAMBABU",
   "Rec No": 2948,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5610,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 558,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4931,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 559,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1966,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4589,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19576,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42786,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5564,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 0,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42787,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BNG"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5479,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 0,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6898,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2661,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 560,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3539,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1548,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1549,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19577,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 220,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 590,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SM",
   "Rec No": 962,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3723,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 202,
   "Location": "BCM"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19578,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19579,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SM",
   "Rec No": 963,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5706,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3260,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5707,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5148,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 814,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3261,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 561,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4667,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6899,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 815,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4666,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5708,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2662,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6900,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1550,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3540,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5480,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 816,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 817,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 818,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3044,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 819,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 562,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3054,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3055,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 707,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8475,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4590,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 708,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 228,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 709,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 223,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5149,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 220,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5016,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 150,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6901,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 710,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 263,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8476,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 150,
   "Location": "BCM"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3467,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 820,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5150,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 964,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3262,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6902,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4591,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6029,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 420,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 563,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5017,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SM",
   "Rec No": 965,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 297,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5018,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6903,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1551,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4169,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8477,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6904,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5151,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6905,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 205,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 204,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 564,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6906,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 600,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 565,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 245,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4490,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4592,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4593,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 251,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 966,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 185,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 967,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 821,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 220,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 822,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3724,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4990,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 823,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 824,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 825,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 826,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5519,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4812,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 827,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 711,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 374,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 712,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4491,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4492,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4493,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5520,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6907,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4494,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3056,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 713,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 335,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SM",
   "Rec No": 969,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5216,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6908,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3989,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5521,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5217,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5218,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkateswrao",
   "Rec No": 451,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6909,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3725,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3353,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4031,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 566,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3250,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1815,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1816,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1817,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 210,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4032,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6910,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Heritage Milk",
   "Rec No": 9890,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4594,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4168,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1818,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 0,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4033,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 567,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 714,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 715,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1819,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 0,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 716,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 717,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 150,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4971,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1820,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3726,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SM",
   "Rec No": 970,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D Lakshman Rao MDPD",
   "Rec No": 43138,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "D Lakshman Rao MDPD",
   "Rec No": 43137,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19580,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 43002,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 43003,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 568,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1967,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 971,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 569,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2663,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkateswrao",
   "Rec No": 432,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 1998,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6030,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6911,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 3200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3207,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6912,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 3200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1821,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4873,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3841,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3208,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4874,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4875,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Office",
   "Rec No": 4427,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3209,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4876,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 718,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 350,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4595,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 423,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2664,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1814,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1552,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4279,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 1999,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1822,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4496,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3842,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3727,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 570,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 240,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Bandi Thulasi Rao",
   "Rec No": 45796,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 200,
   "Location": "BNG"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3263,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 225,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3335,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3245,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 900,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5152,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3354,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 972,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3990,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4596,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6913,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 0,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4597,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4034,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 290,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19581,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4497,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6914,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4932,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6915,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 0,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4991,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4933,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5153,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3567,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3991,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 603,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 828,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6916,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 420,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1823,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 270,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 924,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 0,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5020,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5154,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1553,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 252,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5155,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 719,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 720,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 721,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5156,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 722,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3264,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4170,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 4694,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 723,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 246,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 247,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 248,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4992,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4993,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42788,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "SM",
   "Rec No": 973,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3210,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3057,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 724,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4598,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 206,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3992,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2665,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4253,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4254,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Ravindhra Reddy",
   "Rec No": 184,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 287,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5709,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 2000,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4495,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3265,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 974,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4498,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5481,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 264,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5482,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 153,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3058,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 290,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6917,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3205,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3206,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4668,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Subhani",
   "Rec No": 45401,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 400,
   "Location": "BNG"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1824,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 571,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4499,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 4500,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1825,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4035,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3059,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1826,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 572,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3468,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 573,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5021,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5022,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 0,
   "Location": "DMG"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4877,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 574,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1827,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5710,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 228,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 575,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 829,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 830,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 576,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6852,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5711,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5019,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 831,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4669,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "S RAMAKRISHNA",
   "Rec No": 8565,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "CH RANJITH KUMAR",
   "Rec No": 5711,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 577,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3060,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Chanti Kiran",
   "Rec No": 753,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4972,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 4301,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6919,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 578,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19582,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 340,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 4302,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 832,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 650,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5712,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3926,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 310,
   "Location": "DMG"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5713,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 579,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4995,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 976,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 153,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6920,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3728,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 580,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 230,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3569,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 265,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6921,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 19583,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1965,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5576,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3266,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6922,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4599,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 833,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 725,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5483,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 726,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 262,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SM",
   "Rec No": 977,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 900,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3541,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 834,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 4303,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 591,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4813,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5522,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6923,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5159,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 500,
   "Location": "MDR"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4278,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4276,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19583,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4274,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3843,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 270,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4670,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4671,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2666,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4277,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6924,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 975,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1823,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 978,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 205,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5714,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 205,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1829,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 727,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 260,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 728,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 729,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4672,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5484,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Subhani",
   "Rec No": 45402,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5485,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5486,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 979,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "LAXMANARAO",
   "Rec No": 4679,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6918,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6925,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 375,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3355,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1830,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3729,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 107,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 134,
   "Location": "DMG"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6031,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4878,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Venkateswrao",
   "Rec No": 453,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2667,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 249,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4814,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 206,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5488,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 954,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3730,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6926,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "LATHA",
   "Rec No": 3170,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1554,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3731,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4673,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4815,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4255,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5324,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Ravindhra Reddy",
   "Rec No": 185,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3268,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3267,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 835,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8478,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5158,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5160,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5161,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Ravindhra Reddy",
   "Rec No": 186,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 500,
   "Location": "MDR"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5023,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1968,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1831,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkateswrao",
   "Rec No": 454,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4879,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5325,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5611,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5487,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 200,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42789,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "Heritage Milk",
   "Rec No": 9891,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6032,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1969,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 303,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5157,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 500,
   "Location": "MDR"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3542,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 180,
   "Location": "BCM"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5162,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6927,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3269,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 43004,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "BNG"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6928,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 3300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 43005,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "D Lakshman Rao MDPD",
   "Rec No": 43139,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 265,
   "Location": "BNG"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1970,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 837,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6033,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 183,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3271,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1555,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1556,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 206,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4256,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 4304,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 5061,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 4305,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3927,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3732,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42790,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 200,
   "Location": "BNG"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3928,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2668,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 836,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3929,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 360,
   "Location": "DMG"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4674,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4675,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RAMESH",
   "Rec No": 2351,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3543,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 108,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4994,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 207,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4996,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Rakesh",
   "Rec No": 5009,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 838,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 221,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 839,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 214,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 840,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 581,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5801,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 841,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 582,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 583,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RAMBABU",
   "Rec No": 2949,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 584,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 235,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3270,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3733,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 360,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 585,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 225,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3544,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RAMESH",
   "Rec No": 2352,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3062,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 586,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Heritage Milk",
   "Rec No": 9892,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Heritage Milk",
   "Rec No": 9893,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 587,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4678,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5523,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5715,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Chanti Kiran",
   "Rec No": 754,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 264,
   "Location": "MDR"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5717,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4171,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 228,
   "Location": "MDR"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4172,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6929,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3356,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3357,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3211,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 842,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3212,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 843,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 844,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 845,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3213,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 846,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4934,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6930,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 847,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6931,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 730,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3993,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 731,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 732,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 206,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 733,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6034,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 592,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 593,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 594,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 290,
   "Location": "BCM"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4676,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4677,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5565,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 200,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5566,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5567,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5526,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 900,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1557,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4679,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4997,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 240,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 968,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1832,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3064,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "VAMSHI",
   "Rec No": 2279,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "VAMSHI",
   "Rec No": 2280,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1834,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1833,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3734,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1835,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 980,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3570,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 228,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6933,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 981,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1971,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 520,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6934,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4816,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 235,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6935,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2669,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 210,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 848,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5612,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 849,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3545,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5326,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 500,
   "Location": "MDR"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5524,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6936,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5024,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6937,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6538,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19584,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "LAXMANARAO",
   "Rec No": 4680,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2670,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19585,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 0,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5568,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1836,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5569,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5570,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5571,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1837,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5572,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5573,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 208,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "D Lakshman Rao MDPD",
   "Rec No": 34140,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 595,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 596,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5574,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5575,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3994,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1558,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 335,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3065,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 290,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6939,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6940,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5577,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5578,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 4036,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5718,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 4306,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5579,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1838,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1839,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 850,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 851,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5580,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5581,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 734,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 735,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 736,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 180,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 737,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 223,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 738,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 243,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 739,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 740,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3271,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 741,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 4600,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3568,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 742,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 743,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5802,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 258,
   "Location": "DMG"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2671,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3995,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3996,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 200,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 250,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 251,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 252,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 45000,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3272,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3546,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 42601,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 42602,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7987,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7988,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1840,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6941,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 2365,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6942,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 150,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3040,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5163,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6035,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6943,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 600,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6944,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1972,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4935,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4998,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 4999,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5000,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 253,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6945,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Chanti Kiran",
   "Rec No": 755,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6946,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 360,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1973,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 340,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7989,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 154,
   "Location": "BCM"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7990,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5716,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6947,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4280,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8479,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3571,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 265,
   "Location": "MDR"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5219,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3997,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4680,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5327,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3063,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6948,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3549,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5328,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3735,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2672,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3358,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4681,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2673,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SINDHU",
   "Rec No": 2170,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19586,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 240,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5329,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3547,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3067,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5001,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5002,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19587,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 852,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1841,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6949,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6950,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 420,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4880,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6951,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19588,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1842,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 982,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 588,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 589,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5901,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5902,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 900,
   "Location": "MDR"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5719,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 290,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5003,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 4540,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19589,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4817,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6952,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6953,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3930,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 590,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2674,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5720,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 591,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6954,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 167,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 43006,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 230,
   "Location": "BNG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6955,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 592,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3068,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 599,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 593,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 225,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3572,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5220,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5525,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 175,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2675,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5582,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 0,
   "Location": "MDR"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 4307,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SINDHU",
   "Rec No": 2171,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 856,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 744,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 594,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6956,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5221,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3998,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 745,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 260,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 746,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 266,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5903,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3066,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 597,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6957,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3931,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5004,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4881,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5803,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5804,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 224,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 595,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3736,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SM",
   "Rec No": 983,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3214,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 134,
   "Location": "DMG"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 43007,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 210,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3737,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1974,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 747,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 209,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 853,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 854,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 855,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 857,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 858,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 3999,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 276,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 4000,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5582,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4936,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3549,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3550,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 598,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5005,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 859,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 150,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 860,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3738,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19590,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4257,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5006,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6958,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3844,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6959,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 6002,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5904,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 400,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5905,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5906,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3845,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5907,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5805,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5908,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 450,
   "Location": "MDR"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6036,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "MEESAVA RAVINDRA",
   "Rec No": 424,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2676,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 984,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6932,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5613,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4818,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 985,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3272,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2677,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4173,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 205,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 6003,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5222,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1559,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4819,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1560,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1561,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2678,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 986,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3739,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4937,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4683,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3071,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "LATHA",
   "Rec No": 3171,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19591,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7991,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8480,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3740,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3275,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8481,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 6004,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4684,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4686,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4687,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2679,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 211,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5806,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "RAMBABU",
   "Rec No": 2950,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3276,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5489,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5528,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5614,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 42604,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 230,
   "Location": "BNG"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3741,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5615,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4682,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4685,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2680,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 987,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 240,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 988,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 989,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 42605,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5490,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Heritage Milk",
   "Rec No": 9894,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Heritage Milk",
   "Rec No": 9895,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4258,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5491,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SINDHU",
   "Rec No": 2172,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4259,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5008,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5721,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19592,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 260,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5722,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5164,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 596,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5165,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 597,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 253,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 254,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 255,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 42606,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 598,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4037,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 109,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 580,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5808,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6960,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 599,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5809,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 318,
   "Location": "MDR"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3846,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5492,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 256,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4938,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 604,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4174,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 600,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1975,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "MEESAVA RAVINDRA",
   "Rec No": 434,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1976,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5009,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 42607,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5493,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 257,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5723,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5584,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 0,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5007,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1844,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 185,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1845,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1846,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 990,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1977,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6961,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SINDHU",
   "Rec No": 2173,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6962,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3847,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5330,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Ravindhra Reddy",
   "Rec No": 187,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5331,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5494,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 748,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 749,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 240,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SM",
   "Rec No": 991,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 750,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 751,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 180,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 752,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 753,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5495,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6963,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4688,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3932,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3933,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3934,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 754,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3935,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3469,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6964,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 43009,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5496,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4882,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4883,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5025,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6965,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6966,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6967,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 42603,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 230,
   "Location": "BNG"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 258,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1563,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5497,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3277,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "S RAMAKRISHNA",
   "Rec No": 8566,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "S RAMAKRISHNA",
   "Rec No": 8567,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7992,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5810,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6037,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 321,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 755,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6038,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 756,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 259,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 260,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 757,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 345,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1564,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6968,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3278,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6969,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4939,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4689,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6970,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 6001,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19593,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6971,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 268,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 992,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4690,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 993,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4691,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1978,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5498,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 758,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 759,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 246,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 760,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 261,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Subhani",
   "Rec No": 46255,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1565,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4941,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Rakesh",
   "Rec No": 5010,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 228,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1847,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5500,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3573,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4942,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6039,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4940,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 5499,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 153,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5166,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1979,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1848,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3574,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5724,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 290,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5167,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8482,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4692,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3072,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6972,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3073,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6973,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6974,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 360,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6201,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5010,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4687,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 150,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2681,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3359,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3470,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3742,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4693,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Rakesh",
   "Rec No": 5011,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3215,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3216,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4038,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6976,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6202,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19594,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1566,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6977,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1562,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 240,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5909,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5910,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6975,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5911,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 450,
   "Location": "MDR"
 },
 {
   "Coll Point": "Subhani",
   "Rec No": 45405,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3075,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2682,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2683,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5527,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 761,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 223,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 762,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 763,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 260,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 764,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 765,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 766,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 767,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 4308,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5725,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 768,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "MEESAVA RAVINDRA",
   "Rec No": 435,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3074,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3076,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3279,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3280,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3281,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3282,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 901,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 220,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6978,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 902,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 6005,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4820,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 903,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3077,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3078,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 19595,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RANI",
   "Rec No": 19596,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5912,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5913,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5914,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 43008,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 6006,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5332,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "ASLAM",
   "Rec No": 3273,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4175,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3079,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5168,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5169,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 235,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3743,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3936,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 262,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5585,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 0,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 904,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5170,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3080,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5812,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 205,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 263,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6979,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3744,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NANI",
   "Rec No": 6980,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 264,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5811,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5026,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5813,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4943,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5027,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1980,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 905,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 4309,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 42608,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "BNG"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 769,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 770,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 316,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 771,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 772,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 773,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3081,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 290,
   "Location": "BCM"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 600,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3082,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5011,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 265,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 6007,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 110,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5171,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5172,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3283,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1849,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 310,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3217,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4884,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Subhani",
   "Rec No": 45404,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Subhani",
   "Rec No": 45406,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3937,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1850,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 266,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2685,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5028,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Office",
   "Rec No": 0,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 0,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5915,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PSRK",
   "Rec No": 51349,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 0,
   "Location": "BNG"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19596,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19595,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5333,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1567,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1568,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42791,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3745,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42792,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "LATHA",
   "Rec No": 3172,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19597,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19598,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19599,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4260,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2684,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4261,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4262,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5529,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 220,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 258,
   "Location": "DMG"
 },
 {
   "Coll Point": "KUMAR",
   "Rec No": 4310,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 360,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6981,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8483,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Rakesh",
   "Rec No": 5012,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2686,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4694,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3284,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Gopi Kirana",
   "Rec No": 5223,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5530,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 42609,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3471,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 205,
   "Location": "MDR"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3472,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1569,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19599,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2687,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "MEESAVA RAVINDRA",
   "Rec No": 437,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1570,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3746,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5531,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5012,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4696,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1981,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5013,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3747,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3360,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5334,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3085,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2688,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1982,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5814,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5815,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1983,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 995,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 640,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 996,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 240,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3938,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "PSRK",
   "Rec No": 0,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5729,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 0,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM"
 },
 {
   "Coll Point": "Office",
   "Rec No": 19600,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3939,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SUNIL",
   "Rec No": 3940,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3086,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3218,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5816,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6203,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3083,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3084,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5817,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4176,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5818,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 774,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 336,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 775,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6982,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 233,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6041,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 640,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 776,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4821,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 777,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 778,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SM",
   "Rec No": 997,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Heritage Milk",
   "Rec No": 9896,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "M SIVAJI",
   "Rec No": 0,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "RAMBABU",
   "Rec No": 2951,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SM",
   "Rec No": 998,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6983,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 471,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 779,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SM",
   "Rec No": 999,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 267,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6204,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 335,
   "Location": "MDR"
 },
 {
   "Coll Point": "RAMESH",
   "Rec No": 2353,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5916,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6984,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 472,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3551,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 150,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6985,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6986,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1571,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 268,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4281,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5532,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4282,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4283,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1984,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4944,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NR",
   "Rec No": 1572,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5586,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 0,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 6008,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6205,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 6009,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3285,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3847,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3848,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5014,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 1000,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6987,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 1001,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5533,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 269,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6988,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 1001,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 1002,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 340,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 780,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4039,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 290,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 781,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 782,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SM",
   "Rec No": 1005,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 900,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4040,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 180,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 783,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6206,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 784,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4041,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 225,
   "Location": "MDR"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4177,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2689,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 1002,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 160,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "VAMSHI",
   "Rec No": 2281,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5173,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 450,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3575,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4695,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3576,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 1003,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6989,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3087,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Vasu on line",
   "Rec No": 3577,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 270,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SM",
   "Rec No": 1004,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 1460,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SM",
   "Rec No": 1003,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 605,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4263,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6990,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4822,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4885,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4886,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SAMPATH",
   "Rec No": 4887,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6991,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 1004,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1851,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1852,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 271,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 272,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3552,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 206,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 273,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SM",
   "Rec No": 1006,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3553,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5335,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6207,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6208,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 228,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6209,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SM",
   "Rec No": 1007,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5174,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 1800,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6210,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 600,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6992,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6993,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6994,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3362,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3361,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 785,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 228,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 274,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 177,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 786,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 787,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 788,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1854,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGESWARAO",
   "Rec No": 3219,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 789,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 275,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Ravindhra Reddy",
   "Rec No": 188,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1854,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 276,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6995,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5727,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6996,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1985,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6040,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6997,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1855,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6211,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5175,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "AKULA RAMU",
   "Rec No": 3554,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "KKP",
   "Rec No": 6042,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RAMESH",
   "Rec No": 3173,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SM",
   "Rec No": 994,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RAMBABU",
   "Rec No": 2952,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1986,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 1005,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 200,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6212,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5819,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SINDHU",
   "Rec No": 2174,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6998,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 277,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 278,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 279,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4823,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3288,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6213,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1850,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6214,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4178,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 205,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6215,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 185,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6216,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3287,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6217,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 380,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5587,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Nagchari",
   "Rec No": 6218,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 260,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5588,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5589,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3850,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5820,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 280,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1857,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 281,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1858,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5015,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3748,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 252,
   "Location": "BCM"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5016,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 340,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 282,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 1006,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 906,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5730,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 290,
   "Location": "MDR"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5017,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 1007,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 283,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 350,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7993,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7994,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 360,
   "Location": "BCM"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7995,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7996,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7997,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 6999,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7998,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 7999,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Krishnareddy",
   "Rec No": 4945,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 606,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 1008,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 1009,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 7000,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 4695,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Subhani",
   "Rec No": 45407,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 570,
   "Location": "BNG"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5534,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 284,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 1010,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3473,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 6011,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "sunandini Milk",
   "Rec No": 5728,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3474,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3289,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 420,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3274,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3273,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5590,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 35,
   "Location": "MDR"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 6012,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5591,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 260,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5592,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3749,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5018,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Subhani",
   "Rec No": 45408,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 111,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2690,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 907,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3290,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3291,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 380,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 790,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 364,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 791,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 180,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 792,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5535,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 7001,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 7002,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4697,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Office",
   "Rec No": 1011,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4824,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "G Lakshman Rao RCBR",
   "Rec No": 43010,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 210,
   "Location": "BNG"
 },
 {
   "Coll Point": "D Lakshman Rao MDPD",
   "Rec No": 43141,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Shabber",
   "Rec No": 5616,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 176,
   "Location": "MDR"
 },
 {
   "Coll Point": "T RAJESH",
   "Rec No": 3088,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 290,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 908,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 7003,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1859,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 600,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 7004,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ramesh Kirana",
   "Rec No": 4042,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 180,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 909,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 280,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3292,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3293,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 7005,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3294,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5917,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3750,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 227,
   "Location": "BCM"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1860,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 1012,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 285,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 400,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 286,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 287,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 288,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 1013,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 289,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 290,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 7007,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 291,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Office",
   "Rec No": 1014,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 292,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 293,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 294,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 7006,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 295,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5918,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 793,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5919,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 7008,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 794,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 795,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 205,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 796,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 296,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 42610,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 150,
   "Location": "BNG"
 },
 {
   "Coll Point": "P VENKATESWARAO",
   "Rec No": 8000,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8485,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5920,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "SURI",
   "Rec No": 3286,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Ushasri BNGM",
   "Rec No": 42610,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 150,
   "Location": "BNG"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 129,
   "Location": "DMG"
 },
 {
   "Coll Point": "SINDHU",
   "Rec No": 2175,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 150,
   "Location": "DMG"
 },
 {
   "Coll Point": "PRADEEP",
   "Rec No": 797,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 910,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 7009,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "RD",
   "Rec No": 5536,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 450,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 911,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5031,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1861,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "DWARAKA",
   "Rec No": 5019,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 200,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NTR",
   "Rec No": 2691,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4825,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3751,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Padma Medicals",
   "Rec No": 4826,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 297,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Seetharamaya",
   "Rec No": 3363,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42793,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42794,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 220,
   "Location": "BNG"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 298,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 299,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42795,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "BNG"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5032,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "VV",
   "Rec No": 4284,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "T PANI KUMAR",
   "Rec No": 112,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Prabanjan Medical",
   "Rec No": 5821,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1862,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Office",
   "Rec No": 1015,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 618,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 300,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "Prasad",
   "Rec No": 6013,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 252,
   "Location": "MDR"
 },
 {
   "Coll Point": "Baburao",
   "Rec No": 5336,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4698,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5176,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 200,
   "Location": "MDR"
 },
 {
   "Coll Point": "Mrs Padma",
   "Rec No": 5593,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 500,
   "Location": "MDR"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3752,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3753,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Subhani",
   "Rec No": 45409,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "Thirupathi Rao TMPL",
   "Rec No": 42796,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BNG"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3851,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 1101,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1987,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Thallada",
   "Rec No": 1863,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3754,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "BCM"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 912,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 240,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5033,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4179,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "Vijaya Dairy",
   "Rec No": 4699,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5029,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAGENDRAN",
   "Rec No": 913,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5177,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "MDR"
 },
 {
   "Coll Point": "SRINU",
   "Rec No": 5030,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "DMG"
 },
 {
   "Coll Point": "P LAXMI NARAYANA",
   "Rec No": 8486,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM"
 },
 {
   "Coll Point": "Rohit Kirana",
   "Rec No": 3475,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 280,
   "Location": "MDR"
 },
 {
   "Coll Point": "SPL Off",
   "Rec No": 7011,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "SEETHAIAH",
   "Rec No": 3852,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "D Kishore",
   "Rec No": 5921,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1988,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 320,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "NARESH",
   "Rec No": 3755,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 330,
   "Location": "BCM"
 },
 {
   "Coll Point": "D R K Shope",
   "Rec No": 4264,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 152,
   "Location": "DMG"
 },
 {
   "Coll Point": "KRISHNA REDDY",
   "Rec No": 1404,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 258,
   "Location": "DMG"
 },
 {
   "Coll Point": "NAVEEN",
   "Rec No": 1102,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "BCM-2"
 },
 {
   "Coll Point": "HMN",
   "Rec No": 1989,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 260,
   "Location": "SPL-TLD"
 },
 {
   "Coll Point": "Venkat",
   "Rec No": 5178,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Roja Kirana",
   "Rec No": 4180,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "MDR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53222,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3568,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49836,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3710,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32755,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49837,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49838,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31269,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33885,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31270,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31271,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3346,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1277,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31272,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3711,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41152,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-lakshmi",
   "Rec No": 3010,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31563,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31564,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31565,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32756,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Rakesh anpl",
   "Rec No": 33065,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31566,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 51410,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4094,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4096,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41153,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51351,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-kola tirupathirao",
   "Rec No": 49466,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41154,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1278,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51411,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 520,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51412,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41155,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41156,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31567,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3570,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41157,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41158,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50241,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50242,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51413,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 1380,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3712,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32757,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50243,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50244,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32758,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-Seeman",
   "Rec No": 34838,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51414,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-VINAY-VMB",
   "Rec No": 35398,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53223,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 160,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3571,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-kola tirupathirao",
   "Rec No": 49467,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53224,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53225,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53226,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3572,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-sudakar",
   "Rec No": 31395,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3569,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32759,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51352,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33886,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51354,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3573,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41159,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49839,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3574,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32883,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32885,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3347,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49738,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3348,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32971,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3349,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3350,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3351,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3352,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 50,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vani",
   "Rec No": 26508,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3761,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3762,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50245,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50246,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51350,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51355,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31568,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49736,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31569,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32884,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 220,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Rakesh anpl",
   "Rec No": 33064,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3353,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-VINAY-VMB",
   "Rec No": 35399,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33887,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 225,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4097,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3763,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3764,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 220,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-challa srinu",
   "Rec No": 2297,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51356,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33284,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51357,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33285,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3155,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41160,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41161,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rayala venkateswarlu",
   "Rec No": 3802,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41162,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50247,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50248,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50249,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "G Koteswara Rao",
   "Rec No": 7281,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3156,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41163,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4058,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41164,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-VINAY-VMB",
   "Rec No": 35400,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50250,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4098,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3354,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 1300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3713,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3355,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51358,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 240,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3575,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3356,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3357,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3765,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50251,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50252,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vani",
   "Rec No": 26509,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49841,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1279,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3157,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50253,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49842,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vasavi",
   "Rec No": 1191,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32972,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4098,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50254,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50255,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-Seeman",
   "Rec No": 34839,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 240,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32973,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50256,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 1400,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3355,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49843,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3158,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33286,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33888,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33889,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1280,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-talluri satyanarayana",
   "Rec No": 1609,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49737,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32974,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vasavi",
   "Rec No": 1190,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50257,
   "Bill Date": "01-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rayala venkateswarlu",
   "Rec No": 3803,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-sudakar",
   "Rec No": 31396,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33890,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33891,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3714,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3159,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3715,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53227,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 480,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51353,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3576,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-miriyala venkateswarao",
   "Rec No": 31418,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Rakesh anpl",
   "Rec No": 33066,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41166,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-lakshmi",
   "Rec No": 3011,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-sudakar",
   "Rec No": 31397,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41167,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31570,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31572,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41168,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53228,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53229,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41169,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51415,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51416,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31573,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vasavi",
   "Rec No": 1192,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31571,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 750,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41171,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51360,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 205,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-sudakar",
   "Rec No": 31393,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41172,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31572,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32886,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3358,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 600,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32975,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32887,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33892,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3360,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 600,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49651,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49652,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41173,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33286,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rayala venkateswarlu",
   "Rec No": 3804,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "G Koteswara Rao",
   "Rec No": 7283,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "G Koteswara Rao",
   "Rec No": 7282,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1281,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3577,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 330,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3578,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-Seeman",
   "Rec No": 34840,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3716,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3359,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 0,
   "Bill Date": "",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 0,
   "Bill Date": "",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32642,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3362,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3717,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31577,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41175,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31574,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 310,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31575,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31576,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41176,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-talluri satyanarayana",
   "Rec No": 1610,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41174,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3718,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vani",
   "Rec No": 26510,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49740,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49741,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32761,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32762,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41177,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 1400,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51414,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49742,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53230,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49743,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 409,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3719,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3160,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51361,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3766,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49744,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51418,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 600,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3579,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32976,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49739,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31578,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 47975,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33287,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-kola tirupathirao",
   "Rec No": 49468,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vani",
   "Rec No": 26511,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49745,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3161,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31273,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32811,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vani",
   "Rec No": 26512,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41165,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49844,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32889,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3767,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3363,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 1700,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3364,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP rajabali 58064",
   "Rec No": 2596,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 400,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3768,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 400,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4023,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3365,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32977,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3162,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3580,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "G Koteswara Rao",
   "Rec No": 7284,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 180,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-suribabu",
   "Rec No": 3777,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31274,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3581,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 180,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41179,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3366,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 1700,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31275,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41180,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41181,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3367,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 400,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3368,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "G Koteswara Rao",
   "Rec No": 7285,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51362,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33893,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41182,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 1700,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51364,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31579,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31276,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31530,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3582,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31581,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51356,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3901,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41183,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3163,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3902,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 100,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49746,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41184,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 350,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3720,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-sudakar",
   "Rec No": 31399,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33894,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3583,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31582,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31583,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50258,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50259,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31277,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 190,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50261,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3164,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50262,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50263,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31278,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51420,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 190,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subani",
   "Rec No": 49226,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41185,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32763,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3584,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 3300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50260,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32978,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3370,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subani",
   "Rec No": 49227,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32979,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50264,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41186,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49654,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32764,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 180,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 31820,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41170,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49653,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31584,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53231,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41187,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3585,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49655,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49656,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50265,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "VRath 58103",
   "Rec No": 33447,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3903,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "VRath 58103",
   "Rec No": 33448,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3721,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50266,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3586,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3904,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31585,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32905,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 1300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31279,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3372,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50267,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3905,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51366,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50268,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vani",
   "Rec No": 26513,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3722,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3906,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50269,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3907,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32760,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32765,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3361,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32890,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51414,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 406,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3373,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3908,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3909,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31586,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50270,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3910,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32980,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50271,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51367,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3911,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51368,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51369,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51370,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51359,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32981,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3769,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 850,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31587,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49845,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31588,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-talluri satyanarayana",
   "Rec No": 1611,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31589,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33288,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3723,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31280,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33895,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 240,
   "Location": "TVR"
 },
 {
   "Coll Point": "VRath 58103",
   "Rec No": 33449,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 600,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49846,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 350,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32891,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49657,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 350,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50272,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49658,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 350,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49645,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1282,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49847,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3587,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41188,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-miriyala venkateswarao",
   "Rec No": 31419,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-geetha",
   "Rec No": 3343,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50273,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 600,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50274,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50275,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50276,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41189,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3274,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31590,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50277,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-miriyala venkateswarao",
   "Rec No": 31420,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3588,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41190,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49143,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 0,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51371,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31591,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41191,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 1700,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33289,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50278,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3725,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31281,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50279,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50280,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33896,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51421,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31592,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50281,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4101,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50282,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53232,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49848,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32982,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49849,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51363,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 180,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3912,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31282,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53233,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31283,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3165,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31593,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4099,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32983,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-krishna",
   "Rec No": 48258,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rayala venkateswarlu",
   "Rec No": 3805,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3589,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 330,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-surendra",
   "Rec No": 2506,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49850,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3166,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3167,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32985,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49851,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3913,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3168,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-geetha",
   "Rec No": 3344,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3914,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3371,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 1500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-suribabu",
   "Rec No": 3778,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Penugonda Jamalaiah",
   "Rec No": 49011,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vutukuru ramarao",
   "Rec No": 3743,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-krishna",
   "Rec No": 48259,
   "Bill Date": "03-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53234,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53235,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53236,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53237,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 975,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-miriyala venkateswarao",
   "Rec No": 31421,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3726,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-Seeman",
   "Rec No": 34841,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 900,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3727,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-VINAY-VMB",
   "Rec No": 31601,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-VINAY-VMB",
   "Rec No": 31602,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-sudakar",
   "Rec No": 31400,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-VINAY-VMB",
   "Rec No": 31603,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31284,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-miriyala venkateswarao",
   "Rec No": 31422,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51423,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31594,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51422,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31595,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "G Koteswara Rao",
   "Rec No": 7287,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-lakshmi",
   "Rec No": 3012,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51424,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rayala venkateswarlu",
   "Rec No": 3806,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51425,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31596,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51426,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31597,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-VINAY-VMB",
   "Rec No": 31604,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1283,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32984,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49659,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32986,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3728,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51372,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33897,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3729,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1285,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32990,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32989,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32987,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32988,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rayala venkateswarlu",
   "Rec No": 3807,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3730,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1284,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 220,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3590,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rayala venkateswarlu",
   "Rec No": 3808,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Rakesh anpl",
   "Rec No": 33068,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41192,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31598,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32766,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32767,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50283,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32768,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32769,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51373,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41193,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50284,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32770,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41194,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41195,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31599,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3169,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3916,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49660,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1286,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3915,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50285,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50286,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41196,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 400,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1287,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3170,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41178,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50287,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vani",
   "Rec No": 26514,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3919,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50288,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3917,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50289,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-miriyala venkateswarao",
   "Rec No": 31423,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-miriyala venkateswarao",
   "Rec No": 31424,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33898,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51374,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3918,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 350,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33290,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41197,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1288,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3920,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41198,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3921,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33899,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31600,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 49577,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vasavi",
   "Rec No": 1193,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3591,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 203,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41199,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 41200,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3922,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32771,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 180,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51375,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 210,
   "Location": "TVR"
 },
 {
   "Coll Point": "Google Pay",
   "Rec No": 21714971195,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49747,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3731,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38101,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4102,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38102,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 48038,
   "Bill Date": "",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4103,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51427,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33701,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38103,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38104,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38105,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Rakesh anpl",
   "Rec No": 33067,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Rakesh anpl",
   "Rec No": 33069,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32991,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 220,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Rakesh anpl",
   "Rec No": 33070,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38106,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "TVR Off",
   "Rec No": 21748902157,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-lakshmi",
   "Rec No": 3013,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-lakshmi",
   "Rec No": 3014,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32992,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38107,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3732,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 48038,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32772,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1289,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-lakshmi",
   "Rec No": 3015,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vasavi",
   "Rec No": 1194,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-krishna",
   "Rec No": 48260,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51428,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-krishnamurthy",
   "Rec No": 1492,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51376,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3592,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3369,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-kola tirupathirao",
   "Rec No": 49469,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51377,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vasavi",
   "Rec No": 1195,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 2520450730,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 400,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-VINAY-VMB",
   "Rec No": 31605,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-Seeman",
   "Rec No": 34842,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3733,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31285,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33292,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3924,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-kola tirupathirao",
   "Rec No": 49470,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50290,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49748,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50291,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50292,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38108,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51429,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31286,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51130,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50293,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32773,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50294,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49852,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-kola tirupathirao",
   "Rec No": 49471,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 180,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49853,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51378,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50295,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 350,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31287,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51379,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33291,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-kola tirupathirao",
   "Rec No": 49472,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49854,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51431,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31288,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-kola tirupathirao",
   "Rec No": 49473,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31289,
   "Bill Date": "04-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-kola tirupathirao",
   "Rec No": 49474,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3734,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3735,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31290,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vasavi",
   "Rec No": 1196,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51380,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4105,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "G Koteswara Rao",
   "Rec No": 7288,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 400,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33900,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 240,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4104,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "G Koteswara Rao",
   "Rec No": 7286,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 160,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32774,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32993,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 919941,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1290,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-Seeman",
   "Rec No": 34843,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-Seeman",
   "Rec No": 34844,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3593,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33702,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38109,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32775,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-krishnamurthy",
   "Rec No": 1493,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38110,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Rakesh anpl",
   "Rec No": 33073,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38111,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3594,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51432,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-VINAY-VMB",
   "Rec No": 31606,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Rakesh anpl",
   "Rec No": 33071,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51433,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Rakesh anpl",
   "Rec No": 33072,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53238,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49662,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38112,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49855,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51434,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33501,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49661,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33502,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50296,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51435,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50297,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38113,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50298,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3171,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50299,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38114,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3925,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 1700,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32891,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33503,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33703,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3172,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38115,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38116,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3173,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1291,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3770,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3771,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4106,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3772,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50300,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3736,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3174,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4107,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33504,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32892,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3175,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38117,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3737,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50301,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 180,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50302,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50303,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-kola tirupathirao",
   "Rec No": 49475,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4108,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32776,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3738,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3773,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32893,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38118,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31291,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 340,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51381,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33704,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38119,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32777,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 180,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32994,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 400,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31292,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32894,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3926,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51382,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3176,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32895,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33505,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32995,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31293,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33294,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33293,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51383,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38120,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-Seeman",
   "Rec No": 34845,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-surendra",
   "Rec No": 2507,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38121,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38122,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 400,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38123,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51436,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 110,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32897,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32672,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Rakesh anpl",
   "Rec No": 33074,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33506,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50304,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50305,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32899,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32900,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38125,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50306,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-kola tirupathirao",
   "Rec No": 49476,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32996,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3177,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32898,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3178,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32997,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38127,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3739,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32998,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33705,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33706,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51384,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50307,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50308,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "VRath 58103",
   "Rec No": 33450,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 400,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 2334,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3927,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38128,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-kola tirupathirao",
   "Rec No": 49477,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49749,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 400,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1292,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vasavi",
   "Rec No": 1197,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51437,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1293,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "VRath 58103",
   "Rec No": 33451,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 700,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31294,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53239,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53240,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53241,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 600,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38129,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3414,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38126,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50309,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49856,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38130,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51385,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49857,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49858,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Rakesh anpl",
   "Rec No": 33075,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32999,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 32999,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51438,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3774,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "VRath 58103",
   "Rec No": 33452,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51386,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-miriyala venkateswarao",
   "Rec No": 31425,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3179,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38124,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51387,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3180,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4109,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3928,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-krishnamurthy",
   "Rec No": 1494,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 30,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vutukuru ramarao",
   "Rec No": 3744,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3740,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49663,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33401,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33000,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3181,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3741,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3928,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 1700,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50310,
   "Bill Date": "05-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53242,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53243,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49859,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-Seeman",
   "Rec No": 34846,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31295,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 190,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4110,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-kola tirupathirao",
   "Rec No": 49478,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31296,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31297,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53244,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32778,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 600,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33402,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3742,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49860,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33707,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33293,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3595,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vutukuru ramarao",
   "Rec No": 3745,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Rakesh anpl",
   "Rec No": 33077,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Rakesh anpl",
   "Rec No": 33076,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3374,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38131,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3375,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38132,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33708,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3596,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3597,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49664,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3743,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49665,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49666,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33501,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31298,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-kola tirupathirao",
   "Rec No": 49479,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38133,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-sudakar",
   "Rec No": 50401,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38134,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51440,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 150,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3598,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-challa srinu",
   "Rec No": 3599,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38135,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31299,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 220,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38136,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50311,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38137,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50312,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-challa srinu",
   "Rec No": 2298,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38138,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vasavi",
   "Rec No": 1198,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32779,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51388,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33502,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 48990,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38140,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32780,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50313,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4111,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33710,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51389,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3775,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-krishnamurthy",
   "Rec No": 1496,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-krishnamurthy",
   "Rec No": 1495,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3933,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38141,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1294,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38142,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-talluri satyanarayana",
   "Rec No": 1612,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ushasri",
   "Rec No": 3744,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP rajabali 58064",
   "Rec No": 2597,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3776,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-talluri satyanarayana",
   "Rec No": 1613,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38143,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3777,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3778,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33403,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38144,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33502,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33507,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38145,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38146,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51390,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 205,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49667,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49668,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51440,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 150,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38147,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51439,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3376,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 340,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50314,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33503,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3779,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33709,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4112,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33405,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1295,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50315,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3182,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "G Koteswara Rao",
   "Rec No": 7289,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rayala venkateswarlu",
   "Rec No": 3809,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3377,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50316,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33406,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 1638,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-krishna",
   "Rec No": 48261,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Krishna sir",
   "Rec No": 11684,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38148,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33711,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51441,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 1380,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33407,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1296,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3745,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49861,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 350,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49750,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3780,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 150,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50317,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 5319,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50318,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33404,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 600,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4113,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33408,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3183,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49862,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3781,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33505,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33506,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-talluri satyanarayana",
   "Rec No": 1614,
   "Bill Date": "06-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53245,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53246,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53247,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-miriyala venkateswarao",
   "Rec No": 31426,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33500,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3746,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-sudakar",
   "Rec No": 50402,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49863,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3600,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3401,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32781,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3934,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 1650,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3747,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3402,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3748,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32782,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3378,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-lakshmi",
   "Rec No": 3016,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38149,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33409,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38150,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33410,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33713,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32783,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3403,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38151,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33507,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33508,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49751,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3929,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3379,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51442,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33509,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51443,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51444,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51445,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 205,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38139,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 400,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51446,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38152,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49752,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33294,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 31715,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP-VINAY-VMB",
   "Rec No": 31607,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 260,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32784,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51395,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38153,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38154,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49753,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38155,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "VRath 58103",
   "Rec No": 33453,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3930,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51394,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3931,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3380,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33510,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1297,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33509,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51447,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "G Koteswara Rao",
   "Rec No": 7290,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38156,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP rajabali 58064",
   "Rec No": 2598,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33510,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33504,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33411,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 210,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-challa srinu",
   "Rec No": 2299,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1298,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3185,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51393,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 100,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1299,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3932,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "CP rajabali 58064",
   "Rec No": 4608,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38157,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33716,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51394,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 920,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38158,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33511,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 53982,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51349,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3749,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49754,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 450,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3381,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "VRath 58103",
   "Rec No": 33454,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 310,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3782,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33712,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33511,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3783,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3784,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3785,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38159,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "G Koteswara Rao",
   "Rec No": 7291,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33512,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rayala venkateswarlu",
   "Rec No": 3810,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 400,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51396,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51397,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51398,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3186,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3786,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3184,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3404,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38128,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3187,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38160,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3750,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 1300,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49864,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3787,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 400,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3188,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3189,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3935,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 1500,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33513,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-krishna",
   "Rec No": 48262,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38161,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3936,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 600,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49865,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33412,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33413,
   "Bill Date": "07-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vasavi",
   "Rec No": 1199,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-miriyala venkateswarao",
   "Rec No": 31427,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-ansar",
   "Rec No": 49669,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33414,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51399,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 205,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 38801,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 38802,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3405,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3406,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3190,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 38803,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "G Koteswara Rao",
   "Rec No": 7293,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 215,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51448,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 600,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51449,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51450,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51451,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38162,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3407,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3382,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3383,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-kola tirupathirao",
   "Rec No": 49481,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3937,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 150,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3938,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 38804,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38163,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3751,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38164,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51391,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3752,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 234,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38165,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 1500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 4501,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4114,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 4502,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49755,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4115,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53248,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Muthireddy 32723",
   "Rec No": 53249,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33717,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3408,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38166,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 51400,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33416,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 180,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38167,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rayala venkateswarlu",
   "Rec No": 3811,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33417,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33512,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33418,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 180,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38158,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3409,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 420,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38169,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50320,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 210,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50321,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 180,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 32515,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-sudakar",
   "Rec No": 50403,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50322,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-lakshmi",
   "Rec No": 3017,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-lakshmi",
   "Rec No": 3018,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3939,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 2100,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 38805,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "VRath 58103",
   "Rec No": 33456,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 400,
   "Location": "TVR"
 },
 {
   "Coll Point": "VRath 58103",
   "Rec No": 33455,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 150,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3941,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 38806,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Rakesh anpl",
   "Rec No": 33078,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 38807,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-mareswarao",
   "Rec No": 31300,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50323,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 500,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50324,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 350,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33295,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33296,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3191,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33298,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33299,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Google Pay",
   "Rec No": 1727,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 33300,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 3942,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3384,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 150,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-challa srinu",
   "Rec No": 2300,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33718,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 53301,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Prasad B Staff",
   "Rec No": 0,
   "Bill Date": "",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "VRath 58103",
   "Rec No": 33457,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 53302,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-challa srinu",
   "Rec No": 2701,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 53303,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33514,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33719,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38170,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38171,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38172,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Google Pay",
   "Rec No": 1728,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 20,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-suribabu",
   "Rec No": 3779,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3192,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 210,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3788,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3789,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 210,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vanamagopalrao",
   "Rec No": 3410,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49866,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3385,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38173,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 4503,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anjaneya",
   "Rec No": 3801,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 51452,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32785,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "G Koteswara Rao",
   "Rec No": 7293,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38174,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50325,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38175,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38176,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rayala venkateswarlu",
   "Rec No": 3812,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-nagesh",
   "Rec No": 32786,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3753,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-Ramprasad",
   "Rec No": 3193,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 4504,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "MSrinu 58072",
   "Rec No": 3386,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 4505,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 4506,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50326,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 350,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38177,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Hussen 58073",
   "Rec No": 33516,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38178,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 4088,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-rohith 58064",
   "Rec No": 4507,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-siva",
   "Rec No": 49867,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-geetha",
   "Rec No": 3345,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 53250,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3754,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-lakshmi",
   "Rec No": 3019,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "Raju 58885",
   "Rec No": 38179,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3755,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 53305,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3791,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-golla satyanarayana",
   "Rec No": 33721,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-anuradha",
   "Rec No": 3756,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-suribabu",
   "Rec No": 3780,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "anjali",
   "Rec No": 50327,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3793,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vutukuru ramarao",
   "Rec No": 3746,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-vemula srinivasarao",
   "Rec No": 33513,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 340,
   "Location": "TVR"
 },
 {
   "Coll Point": "MVR 58064",
   "Rec No": 3792,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33419,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 300,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-stalinreddy",
   "Rec No": 53304,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 250,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-narendra",
   "Rec No": 33420,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 200,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49757,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 550,
   "Location": "TVR"
 },
 {
   "Coll Point": "satish 58104",
   "Rec No": 49756,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 350,
   "Location": "TVR"
 },
 {
   "Coll Point": "cp-subbarao",
   "Rec No": 4116,
   "Bill Date": "08-Aug-20",
   "Recd Amt": 230,
   "Location": "TVR"
 }
]

var cust_name, area;

var quant_bill = document.getElementById('quant_bill').value;

function customerSearch(){

    var cust_id=document.getElementById('coll_id').value;
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
      document.getElementById("c_area").innerHTML = area;

      var y = document.getElementById("toggleDIV");
  		if (y.style.display === "none") {
    		y.style.display = "block";
  	}
    }

    else if (coll_type=="exp"){
      document.getElementById("e_id").innerHTML = cust_id;
      document.getElementById("e_name").innerHTML = cust_name;
      document.getElementById("e_area").innerHTML = area;

      var y = document.getElementById("toggleDIV3");
  		if (y.style.display === "none") {
    		y.style.display = "block";
  	}
    }

    return [cust_name, area, cust_id, coll_type];
    }


function billSearch() {

    var start_bill = document.getElementById('start_bill').value;
    var end_bill = document.getElementById('end_bill').value;
    var loc = customerSearch();
    loc=loc[1];
    var sum_array = 0;
    var bill_count = 0;
    var i = start_bill;

    i = parseInt(i);
    end_bill = parseInt(end_bill);

    if (i > end_bill){
              alert("Invalid Bill Number Range!");
              return false;
            }

    while (i <= end_bill){
        for (var y in transaction_DB){
            if ((transaction_DB[y]["Location"]==loc) && (transaction_DB[y]["Rec No"]==i)){
                sum_array = transaction_DB[y]["Recd Amt"] + sum_array;
                bill_count = bill_count +1;
            }
        }
        i = i + 1;
    }

    if (bill_count > 0){
        document.getElementById("due").innerHTML = sum_array;
        document.getElementById("bills").innerHTML = bill_count;

        var z = document.getElementById("toggleDIV4");

        if (z.style.display === "none") {
            z.style.display = "block";
  	         }
    return [start_bill, end_bill, bill_count, sum_array];
    }
    else {
        alert("No bills found in this range!");
        return false;
    }
}


function agentAuth(){

    var agent_found;
    var coll_agent=document.getElementById('coll_pwd').value;
    var exp_agent=document.getElementById('exp_pwd').value;


    for (var x in agent_DB){
        if (agent_DB[x]["FIELD2"]==coll_agent || agent_DB[x]["FIELD2"]==exp_agent) {
            agent_found=agent_DB[x]["FIELD1"];
        }
    }

    if (agent_found==null){
        alert("Invalid PIN!");
        return false;
    }
    else {
        var z = document.getElementById("toggleDIV2");
        if (z.style.display === "none") {
            z.style.display = "block";
      	}
        return agent_found;
    }
}


function onclickFunction(){

    var amt = document.getElementById('amt').value;
    var pay_method=document.getElementById('pay_method').value;
    var coll_rem=document.getElementById('coll_rem').value;
    var exp_code = document.getElementById('exp_code').value;
    var voucher = document.getElementById('voucher').value;
    var exp_des = document.getElementById('exp_des').value;
    var exp_paid = document.getElementById('exp_paid').value;
    var exp_rem=document.getElementById('exp_rem').value;

    if (amt == '' && exp_paid == ''){
        alert("Enter Amount!");
        return false;
    }

    var cust_data = customerSearch();
    var bill_data;

    if (cust_data[3]=="coll"){
        bill_data = billSearch();
    }
    else if(exp_code != ''){
        bill_data = [null];
    }
    else{
        alert("Enter Expense Code!")
        return false;
    }

    var agent_data = agentAuth();

    var $form = $('#data-entry'),
    url = 'https://script.google.com/macros/s/AKfycbx41sJid8NfbWwhCT1JHOJxePLFTKeQWwiG5YRcezJhQwNxuO4I/exec'

    var array = {'Collection ID':cust_data[2], 'Collection ID Name':cust_data[0], 'Area':cust_data[1], 'Type':cust_data[3], 'Start Bill':bill_data[0], 'End Bill':bill_data[1], 'Bill Quantity':bill_data[2], 'Due Amount Shown':bill_data[3], 'Due Amount Collected':amt, 'Payment Method':pay_method, 'Collection Remarks':coll_rem, 'Expense Code':exp_code, 'Voucher Number':voucher, 'Expense Description':exp_des, 'Amount paid':exp_paid, 'Expense Remarks':exp_rem, 'Agent':agent_data};

    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: array
       })
       alert('Submitted Successfully!');
       location.reload();
}
