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
   "Name": "Nagachari",
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
   "Area": "TVR"
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
   "FIELD1": "Mrs.Padma",
   "FIELD2": 2512
 },
 {
   "FIELD1": "M THIRUPATHRAO",
   "FIELD2": 7777
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
   "Bill Date": "02-Aug-20",
   "Recd Amt": 0,
   "Location": "TVR"
 },
 {
   "Coll Point": "venkatakrishna 32723",
   "Rec No": 0,
   "Bill Date": "02-Aug-20",
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
   "Coll Point": "anjali",
   "Rec No": 22,
   "Bill Date": "02-Aug-20",
   "Recd Amt": 300,
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
