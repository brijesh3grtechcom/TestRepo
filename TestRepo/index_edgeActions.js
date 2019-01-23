/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "mousedown", function(sym, e) {
         //sym.getComposition().getStage().funcDlgClick();
         
         
         //alert("hello");
         
         //sym.getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G_Talking_LIPS").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         yepnope({ nope : ["cordova.js","index.js","jquery-ui.min.js","ls.js"]}); 
         
                 document.addEventListener("backbutton", xyz33, false);
                 document.addEventListener("menubutton", xyz1, false);
                 document.addEventListener("pause", xyz2, false);
                 document.addEventListener("resume", xyz3, false);
           document.addEventListener("deviceready", onDeviceReady, false);
         
         var ChrNames =  [
         "Kate"//1
         ,"Zach"//2
         ,"Chief of Police"//3
         ,"Manager"//4
         ,"Ashton" //5
         ,"Jason clear water"//6
         
         ,"Assistant Police Officer"//7
         ,"Interogatting Officer"//8
         ,"Officer"//9
         ,"Kelly"//10
         ,"Shopkeeper"//11
         ,"Shopkeeper"//12
         ,"Stanger"//13
         ,"police officer"//14
         ,"Jackson"//15
         
         ]
         
         var StoryStructure =  [
         
         { //chp starts
         			  "ChpName" : "Episode1", 
         			  "ChpScenes" : [
         								 { 
         									"Dlgs" : [ "1", "51"], // Start to end dailogues in this Scene.
         									"Chrs" : [ {"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"8","BtmD":"0"},//kate
         									           {"Chr":"2","Fs":"1","Shoe":"15","Lip":"1","Hair":"1","TopD":"10","BtmD":"10"},//zach
         												  {"Chr":"2","Fs":"8","Shoe":"14","Lip":"8","Hair":"8","TopD":"12","BtmD":"9"}], // cp
         									"BkgImG" : "hotel_corridor.png"//1//
         								 },
         
         
         
         								 { 
         									"Dlgs" : [ "51", "112"],
         									"Chrs" : [
         									{"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"8","BtmD":"0"},//kate
         									{"Chr":"2","Fs":"1","Shoe":"15","Lip":"1","Hair":"1","TopD":"10","BtmD":"10"}  //zach
         
         									],
         									"BkgImG" : "hotel_corridor.png"//2//
         								 },
         
         						 { 
         									"Dlgs" : [ "113", "118"],
         									"Chrs" : [
                                    {"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"8","BtmD":"11"},//kate
                                    {"Chr":"2","Fs":"1","Shoe":"15","Lip":"1","Hair":"1","TopD":"10","BtmD":"10"},//zach
                                    {"Chr":"1","Fs":"3","Shoe":"4","Lip":"3","Hair":"3","TopD":"6","BtmD":"0"}  // manager
         								   ],
                               "BkgImG" : "hotel_corridor.png"//3//
         								 },		
         
                            { 
         									"Dlgs" : [ "119", "122"],
         									"Chrs" : [
                                    {"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"8","BtmD":"0"},//kate
                                    {"Chr":"2","Fs":"1","Shoe":"15","Lip":"1","Hair":"1","TopD":"10","BtmD":"10"}//zach
         
         								   ],
                               "BkgImG" : "hotel_corridor.png"//3//
         								 },
         
                            { 
         									"Dlgs" : [ "123", "125"],
         									"Chrs" : [
                                    {"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"8","BtmD":"0"},//kate
                                    {"Chr":"2","Fs":"1","Shoe":"15","Lip":"1","Hair":"1","TopD":"10","BtmD":"10"}//zach
         
         								   ],
                               "BkgImG" : "Jesse_room_suit.png"//3//
         								 },
         
         
          { 
         									"Dlgs" : [ "126", "131"],
         									"Chrs" : [
                                    {"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"8","BtmD":"0"},//kate
                                    {"Chr":"2","Fs":"1","Shoe":"15","Lip":"1","Hair":"1","TopD":"10","BtmD":"10"}//zach
         
         								   ],
                               "BkgImG" : "Jesse_room_suitand_other_room.png"//3//
         								 },
         
          { 
         									"Dlgs" : [ "132", "140"],
         									"Chrs" : [
                                    {"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"8","BtmD":"0"},//kate
                                    {"Chr":"2","Fs":"1","Shoe":"15","Lip":"1","Hair":"1","TopD":"10","BtmD":"10"}//zach
         
         								   ],
                               "BkgImG" : "Jesse_room_suit.png"//3//
         								 },
         
         
         
         
         
         
         
         
         								{
         								 	"Dlgs" : [ "142", "150"],
         									"Chrs" : [
                                    {"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"8","BtmD":"0"},//kate
                                    {"Chr":"2","Fs":"1","Shoe":"15","Lip":"1","Hair":"1","TopD":"10","BtmD":"10"}//zach
         
         
         								],
         								"BkgImG" : "Jesse_room_suit.png"//4//
         								 	 }	,		
         
         
         
                           {
         								 	"Dlgs" : [ "151", "153"],
         									"Chrs" : [
         
                                    {"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"8","BtmD":"0"}//kate
         
         								],
         								"BkgImG" : "katty_hotel_room1.png"//5//
         								 	 }	,	
         
         
         
         
         
         		{
         								 "Dlgs" : [ "154", "159"],
         									"Chrs" : [
         									{"Chr":"2","Fs":"6","Shoe":"2","Lip":"6","Hair":"6","TopD":"11","BtmD":"11"},//Ashton 
         									{"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"8","BtmD":"0"}//kate
         
                                     ],
         									"BkgImG" : "Kattyroom_lab.png"//6//
         								 	 }	,
         
         
                                    {
         
         								   "Dlgs" : [ "160", "163"],
         									"Chrs" : [
         									{"Chr":"2","Fs":"6","Shoe":"2","Lip":"6","Hair":"6","TopD":"11","BtmD":"11"},//Ashton 
         									{"Chr":"1","Fs":"1","Shoe":"2","Lip":"1","Hair":"1","TopD":"4","BtmD":"0"}//kate
                                    ],
         
                                     "BkgImG" : "lab_out_lab.png"//7//
         								 	 },
         
                            {
         								 	  "Dlgs" : [ "164", "174"],
         									"Chrs" : [
         									{"Chr":"2","Fs":"6","Shoe":"2","Lip":"6","Hair":"6","TopD":"11","BtmD":"11"},//Ashton 
         
         									{"Chr":"1","Fs":"1","Shoe":"2","Lip":"1","Hair":"1","TopD":"4","BtmD":"0"}//kate
                                     ],
         									"BkgImG" : "lab_out.png"//8//
         								 	 }	,
         
         				/*{
         
         								   "Dlgs" : [ "175"],
         									"Chrs" : [
         
         									{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"6","BtmD":"6"}
         
         
         									],
         									"BkgImG" : "lab.png"//7//
         								 	 },*/					
         
         
         							{
         								 	  "Dlgs" : [ "176", "183"],
         									"Chrs" : [
         									{"Chr":"1","Fs":"1","Shoe":"2","Lip":"1","Hair":"1","TopD":"4","BtmD":"0"},//kate
         									{"Chr":"2","Fs":"6","Shoe":"2","Lip":"6","Hair":"6","TopD":"11","BtmD":"11"}//Ashton
         
         
         									],
         									"BkgImG" : "lab.png"//8//
         								 	 }	,
         
         
                              {
         								 	  "Dlgs" : [ "184", "193"],
         									"Chrs" : [
         									{"Chr":"1","Fs":"1","Shoe":"2","Lip":"1","Hair":"1","TopD":"4","BtmD":"0"},//kate
         									{"Chr":"2","Fs":"1","Shoe":"5","Lip":"1","Hair":"1","TopD":"6","BtmD":"6"} //zach
         
         
         									],
         									"BkgImG" : "katt_zachPh_onmy-way.png"//8//
         								 	 }	,
         
         
                            {
         								 	  "Dlgs" : [ "194", "282"],
         									"Chrs" : [
         									{"Chr":"1","Fs":"1","Shoe":"2","Lip":"1","Hair":"1","TopD":"4","BtmD":"0"},//kate
         									{"Chr":"2","Fs":"1","Shoe":"5","Lip":"1","Hair":"1","TopD":"6","BtmD":"6"}  //zach
         
         
         									],
         									"BkgImG" : "cafe.png"//8//
         								 	 }	,
         
                             {
         								 	  "Dlgs" : [ "283", "350"],
         									"Chrs" : [
         									{"Chr":"1","Fs":"1","Shoe":"5","Lip":"1","Hair":"1","TopD":"2","BtmD":"0"},//kate
         									{"Chr":"2","Fs":"1","Shoe":"12","Lip":"1","Hair":"1","TopD":"4","BtmD":"10"}//zach
         
         
         									],
         									"BkgImG" : "zachhouse.png"//8//
         								 	 }	,				 	 
         
                              {
         								 	  "Dlgs" : [ "351", "401"],
         									"Chrs" : [
         
         									{"Chr":"2","Fs":"1","Shoe":"12","Lip":"1","Hair":"1","TopD":"4","BtmD":"10"},//zach
         									{"Chr":"1","Fs":"1","Shoe":"5","Lip":"1","Hair":"1","TopD":"2","BtmD":"0"},//kate
         									{"Chr":"2","Fs":"5","Shoe":"4","Lip":"5","Hair":"5","TopD":"2","BtmD":"6"},//jason
         									{"Chr":"2","Fs":"11","Shoe":"14","Lip":"11","Hair":"11","TopD":"12","BtmD":"9"}// assistant
         
         
         									],
         									"BkgImG" : "jasonhouse.png"//8//
         								 	 }	,
         
         	                {
         								 	  "Dlgs" : [ "402", "412"],
         									"Chrs" : [
         
         									{"Chr":"2","Fs":"4","Shoe":"14","Lip":"4","Hair":"4","TopD":"12","BtmD":"9"},//introg
                                    {"Chr":"2","Fs":"1","Shoe":"12","Lip":"1","Hair":"1","TopD":"4","BtmD":"10"},//zach
         									{"Chr":"1","Fs":"1","Shoe":"2","Lip":"1","Hair":"1","TopD":"2","BtmD":"0"}//kate
                                    ],
         									"BkgImG" : "introgatingroom.png"//8//
         								 	},			
         
         
                          {
         								 	"Dlgs" : [ "413", "415"],
         									"Chrs" : [
         									{"Chr":"1","Fs":"6","Shoe":"5","Lip":"6","Hair":"6","TopD":"2","BtmD":"6"},
         									{"Chr":"2","Fs":"6","Shoe":"6","Lip":"6","Hair":"6","TopD":"6","BtmD":"6"}
         
         
         
         									],
         									"BkgImG" : "car.png"//8//
         								 	 }	,
         
         						 {
         								 	  "Dlgs" : [ "416", "428"],
         									"Chrs" : [
         									{"Chr":"1","Fs":"6","Shoe":"5","Lip":"6","Hair":"6","TopD":"2","BtmD":"6"},
         									{"Chr":"2","Fs":"6","Shoe":"6","Lip":"6","Hair":"6","TopD":"6","BtmD":"6"}
         
         
         									],
         									"BkgImG" : "car_police.png"//8//
         								 	 }	,		 	 
         
         
         
         
         
         
                               {
         								 	  "Dlgs" : [ "429", "432"],
         									"Chrs" : [
         
         									{"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach
         
         									{"Chr":"2","Fs":"7","Shoe":"14","Lip":"7","Hair":"7","TopD":"13","BtmD":"9"}//officer bad wheather
                                    ],
         									"BkgImG" : "Road.png"//8//
         								 	 }	,					 	 
         
         
         
                                 {
         								 	  "Dlgs" : [ "433", "493"],
         									"Chrs" : [
         									{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"0"},
         									{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"6","BtmD":"6"}
         
         
         									],
         									"BkgImG" : "car.png"//8//
         								 	 }	,
         
         
         
                                 {
         								 	  "Dlgs" : [ "494", "504"],
         									"Chrs" : [
         									{"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach
         									{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"10","BtmD":"0"} //katte
         									],
                                 "BkgImG" : "motel.png"//8//
         								 	 }	,
         
         
         
                                   { 
         								 	 "Dlgs" : [ "505", "526"],
         									"Chrs" : [
         
         									{"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach
         									{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"10","BtmD":"0"},//katte
                                    {"Chr":"1","Fs":"2","Shoe":"5","Lip":"2","Hair":"2","TopD":"3","BtmD":"0"} //receptionist
                                     ],
         									"BkgImG" : "motel.png"//8//
         								 	 }	,
         
         
                              {
         								"Dlgs" : [ "527", "536"],
         									"Chrs" : [
         
         									{"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach
                                    {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"10","BtmD":"0"}//katte
                                     ],
         									"BkgImG" : "stairs.png"//8//
         								 	 },
         
         
                           /* {
         
         								 "Dlgs" : [ "537"],
         									"Chrs" : [
         
         									{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"6","BtmD":"6"}
         
                                    ],
         									"BkgImG" : "hotel_lobby.png"//8//
         								 	 },*/
         
         
                                  { 
         								  "Dlgs" : [ "538", "539"],
         									"Chrs" : [
         
         
                                    {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"10","BtmD":"0"}//kate
                                    ],
         									"BkgImG" : "ketty_motel.png"//8//
         								 	 },
         
         
                                 { 
         		 	              "Dlgs" : [ "540", "541"],
         									"Chrs" : [
         
         									 {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"10","BtmD":"0"}//katte
         
                                      ],
         									"BkgImG" : "hotel_lobby.png"
         								 	 },
         
         
         
         		 	                 {  "Dlgs" : [ "542", "552"],
         									"Chrs" : [
         
         									 {"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach
                                     {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"10","BtmD":"0"}//kate
                                      ],
         									"BkgImG" : "zach_motel.png"//8//
         								 	 },
         
         
         							      {  "Dlgs" : [ "553", "555"],
         									"Chrs" : [
         
         									 {"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach
                                     {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"10","BtmD":"0"}//kate
                                      ],
         									"BkgImG" : "motel.png"//8//
         								 	 },
         
         
                               {  "Dlgs" : [ "556", "564"],
         									"Chrs" : [
         
         									 {"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach
                                     {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"10","BtmD":"0"},//kate
                                     {"Chr":"1","Fs":"2","Shoe":"5","Lip":"2","Hair":"2","TopD":"3","BtmD":"0"}//recep
                                      ],
         									"BkgImG" : "motel.png"//8//
         								 	 },
         
                         {
         					   "Dlgs" : [ "565", "572"],
         									"Chrs" : [
         
         									 {"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach
                                     {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"10","BtmD":"0"}//kate
                                      ],
         									"BkgImG" : "hotel_lobby.png"//8//
         								 	 },			 	 
         
                              { 
         
                                "Dlgs" : [ "573", "580"],
         									"Chrs" : [
         
         									 {"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach
                                     {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"10","BtmD":"0"}//kate
                                      ],
         									"BkgImG" : "hotel_lobby.png"//8//
         								 	 },
                           {
         					      "Dlgs" : [ "581", "597"],
         									"Chrs" : [
         
         									 {"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach
                                     {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"10","BtmD":"0"}//kate
                                      ],
         									"BkgImG" : "zach_motel.png"//8//
         								 	 },			 	 
                           { 
                              "Dlgs" : [ "598", "600"],
         									"Chrs" : [
         
         									 {"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach
                                     {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"10","BtmD":"0"}//kate
                                      ],
         									"BkgImG" : "zach_motel.png"//8//
         								 	 },
                            { 
                                "Dlgs" : [ "601", "610"],
         									"Chrs" : [
         
         									 {"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach
                                     {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"10","BtmD":"0"},//kate
                                     {"Chr":"1","Fs":"2","Shoe":"5","Lip":"2","Hair":"2","TopD":"3","BtmD":"0"}//recep
                                      ],
         									"BkgImG" : "zach_motel.png"//8//
         								 	 },
         
                            {
                                "Dlgs" : [ "611", "649"],
         									"Chrs" : [
         
         									 {"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"0"},
                                     {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"0"}
         
                                      ],
         									"BkgImG" : "car.png"//8//
         								 	 },
         
         						{
                                "Dlgs" : [ "650", "653"],
         									"Chrs" : [
         
         									 {"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach
                                     {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"10","BtmD":"0"}//kate
         
                                      ],
         									"BkgImG" : "store.png"//8//
         								 	 },
         
         
         
         						{
                                "Dlgs" : [ "654", "660"],
         									"Chrs" : [
         
         									 {"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach
                                     {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"9","BtmD":"0"}//katte
         
         
                                      ],
         									"BkgImG" : "store.png"//8//
         								 	 },
         
         
                          {
                                "Dlgs" : [ "661", "670"],
         									"Chrs" : [
         
         									 {"Chr":"2","Fs":"12","Shoe":"14","Lip":"12","Hair":"12","TopD":"13","BtmD":"9"},//policeofficer_1
                                     {"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach
                                     {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"9","BtmD":"0"}//kate
                                      ],
         									"BkgImG" : "store.png"//8//
         								 	 },
         
         
                         {
                                "Dlgs" : [ "671", "675"],
         									"Chrs" : [
         
         									 {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"9","BtmD":"0"},//{Kat}
                                     {"Chr":"2","Fs":"3","Shoe":"3","Lip":"3","Hair":"3","TopD":"8","BtmD":"2"}  //shop
         
                                      ],
         									"BkgImG" : "market1.png"//8//
         								 	 },
         
                                {
                                "Dlgs" : [ "676", "682"],
         									"Chrs" : [
         
         									 {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"9","BtmD":"0"},//{Kat}
                                     {"Chr":"2","Fs":"10","Shoe":"1","Lip":"10","Hair":"10","TopD":"7","BtmD":"7"}  //shop1
         
                                      ],
         									"BkgImG" : "antique_shop1.png"//8//
         								 	 },
         
         					{
                                "Dlgs" : [ "683", "685"],
         									"Chrs" : [
         
         									 {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"9","BtmD":"0"},//{Kat}
                                     {"Chr":"2","Fs":"10","Shoe":"3","Lip":"10","Hair":"10","TopD":"7","BtmD":"7"},  //shop1
                                     {"Chr":"2","Fs":"2","Shoe":"5","Lip":"2","Hair":"2","TopD":"3","BtmD":"2"}  //stranger
                                      ],
         									"BkgImG" : "antique_shop1.png"//8//
         								 	 },
         
         
         
         							{
                                "Dlgs" : [ "686", "691"],
         									"Chrs" : [
         
         									 {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"9","BtmD":"0"},//{Kat}
                                     {"Chr":"2","Fs":"2","Shoe":"5","Lip":"2","Hair":"2","TopD":"3","BtmD":"2"}  //stranger
         
                                      ],
         									"BkgImG" : "dark_alley.png"//8//
         								 	 },
         
         
         
         
         									{
                                "Dlgs" : [ "692", "700"],
         									"Chrs" : [
         
         									 {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"9","BtmD":"0"},//{Kat}
                                     {"Chr":"2","Fs":"2","Shoe":"5","Lip":"2","Hair":"2","TopD":"3","BtmD":"2"}  //stranger
         
                                      ],
         									"BkgImG" : "antique_shop2.png"//8//
         								 	 },	 	 
         
         
         
         
         						{
                                "Dlgs" : [ "701", "720"],
         									"Chrs" : [
         
                                      {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"9","BtmD":"0"},//{Kat}
                                     {"Chr":"2","Fs":"2","Shoe":"5","Lip":"2","Hair":"2","TopD":"3","BtmD":"2"}, //stranger
                                     {"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach  
         
                                     {"Chr":"2","Fs":"12","Shoe":"14","Lip":"12","Hair":"12","TopD":"13","BtmD":"9"} //police
                                      ],
         									"BkgImG" : "antique_shop2.png"//8//
         								 	 },				 
         
         
         	               {
                                "Dlgs" : [ "721", "738"],
         									"Chrs" : [
         
                                     {"Chr":"2","Fs":"2","Shoe":"5","Lip":"2","Hair":"2","TopD":"3","BtmD":"2"}, //stranger
                                     {"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach  
         
                                      {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"9","BtmD":"0"},//{Kat}
                                     {"Chr":"2","Fs":"12","Shoe":"14","Lip":"12","Hair":"12","TopD":"13","BtmD":"9"} //police
                                      ],
         									"BkgImG" : "antique_shop2.png"//8//
         								 	 },	
         
         					{
                                "Dlgs" : [ "739", "738"],
         									"Chrs" : [
         
                                     {"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"9","BtmD":"3"},//zach  
         
                                      {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"9","BtmD":"0"},//{Kat}
                                     {"Chr":"2","Fs":"5","Shoe":"14","Lip":"5","Hair":"5","TopD":"1","BtmD":"8"} //jackson
                                      ],
         									"BkgImG" : "jackson_house.png"//8//
         								 	 },				 
         
         
         
         
         
         
          ]
         
         
         
         	}			 	 
         
         
          ]							 
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         var Dlg = [
         {
         "DID" : "1",
         "ChrID": "3",
         "DlgTxt" :"Chief of Police: How did you know Jesse?",
         "ExpID" :"0,206,203",
         "DType" :""
         },
         {
         "DID" : "2",
         "ChrID": "1",
         "DlgTxt" :"I did not know Jesse that well; I’m just a hired bridesmaid….",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         
         {
         "DID" : "3",
         "ChrID": "3",
         "DlgTxt" :"What do you mean that you are just a hired bridesmaid?",
         "ExpID" :"0,0,209",
         "DType" :""
         },
         {
         "DID" : "4",
         "ChrID": "1",
         "DlgTxt" :"I work for the company called, Always a Bridesmaid",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "5",
         "ChrID": "3",
         "DlgTxt" :"Okay, go on…",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "6",
         "ChrID": "1",
         "DlgTxt" :"So, when a bride does not have any friend to stand by as a bridesmaid, that’s where we come in… as a hired bridesmaid.",
         "ExpID" :"109,0,0",
         "DType" :""
         },
         {
         "DID" : "7",
         "ChrID": "3",
         "DlgTxt" :"Hmm….",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "8",
         "ChrID": "1",
         "DlgTxt" :"To make them feel special on their important day.",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "9",
         "ChrID": "3",
         "DlgTxt" :"That’s strange!",
         "ExpID" :"0,0,206",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Kate gives him a strange look)",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "10",
         "ChrID": "3",
         "DlgTxt" :"When did you last see Mrs…? ",
         "ExpID" :"0,0,207",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Zach gives Chief of Police a pained expression… Chief of Police repentantly corrects himself)",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "11",
         "ChrID": "3",
         "DlgTxt" :"I meant, Ms Jesse?",
         "ExpID" :"0,206,0",
         "DType" :""
         },
         {
         "DID" : "12",
         "ChrID": "1",
         "DlgTxt" :"Last I saw Jesse, she was on the bridal suite’s balcony, and she was smoking. ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "13",
         "ChrID": "3",
         "DlgTxt" :"Did you try talking to her?",
         "ExpID" :"0,0,205",
         "DType" :""
         },
         {
         "DID" : "14",
         "ChrID": "1",
         "DlgTxt" :"Yes, I did, she seemed stressed.",
         "ExpID" :"104,209,0",
         "DType" :""
         },
         {
         "DID" : "15",
         "ChrID": "3",
         "DlgTxt" :"What was she stressed about?",
         "ExpID" :"0,0,203",
         "DType" :""
         },
         {
         "DID" : "16",
         "ChrID": "1",
         "DlgTxt" :"She played it off, saying she just had wedding jitters.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "17",
         "ChrID": "3",
         "DlgTxt" :"Anything else she said or did that hinted at something fishy?",
         "ExpID" :"0,0,207",
         "DType" :""
         },
         {
         "DID" : "18",
         "ChrID": "1",
         "DlgTxt" :"No, I don’t think so.",
         "ExpID" :"109,0,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Chief of Police turns to Zach)",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "19",
         "ChrID": "3",
         "DlgTxt" :"Did something happen with you and Jesse in the recent past?",
         "ExpID" :"0,0,209",
         "DType" :""
         },
         {
         "DID" : "20",
         "ChrID": "2",
         "DlgTxt" :"How is that relevant to this situation?",
         "ExpID" :"0,206,0",
         "DType" :""
         },
         {
         "DID" : "21",
         "ChrID": "3",
         "DlgTxt" :"(condescending tone) I think it is very much relevant!",
         "ExpID" :"104,0,205",
         "DType" :""
         },
         {
         "DID" : "22",
         "ChrID": "2",
         "DlgTxt":"(raising his eyebrow) and how is that possible?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "23",
         "ChrID": "3",
         "DlgTxt" :"To help find your “beloved” to-be-wife, I guess. ",
         "ExpID" :"0,0,203",
         "DType" :""
         },
         {
         "DID" : "24",
         "ChrID": "1",
         "DlgTxt" :"Let’s put our egos aside and focus on the important issue at hand",
         "ExpID" :"109,0,0",
         "DType" :""
         },
         
         {
         "DID" : "25",
         "ChrID": "3",
         "DlgTxt" :"That leads me another question… Why are you here? You are just a hired bridesmaid, right?",
         "ExpID" :"0,0,207",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Kate looks at Zach sheepishly)",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "26",
         "ChrID": "2",
         "DlgTxt" :"(in a defensive tone) that’s none of your business. Focus on your work.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "27",
         "ChrID": "3",
         "DlgTxt" :"Okay then, let’s begin from the beginning. How did you and your bride-to-be meet?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "28",
         "ChrID": "2",
         "DlgTxt" :"(with longing in his voice and tears in his eyes) her eyes were deeper than the ocean and she had a charismatic smile on her face.",
         "ExpID" :"0,210,0",
         "DType" :""
         },
         {
         "DID" : "29",
         "ChrID": "2",
         "DlgTxt" :"I met Jesse in an art exhibition, ",
         "ExpID" :"0,208,0",
         "DType" :""
         },
         {
         "DID" : "30",
         "ChrID": "3",
         "DlgTxt" :"With due respect to your emotions, I don’t want to know about those details.?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "31",
         "ChrID": "2",
         "DlgTxt" :"Then what do you want to know?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "32",
         "ChrID": "1",
         "DlgTxt" :"He wants to know how did you meet Jesse, if I’m not mistaken?",
         "ExpID" :"105,0,0",
         "DType" :""
         },
         {
         "DID" : "33",
         "ChrID": "2",
         "DlgTxt" :"That’s what I was saying",
         "ExpID" :"0,205,0",
         "DType" :""
         },
         {
         "DID" : "34",
         "ChrID": "3",
         "DlgTxt" :"I meant, less romantic details and more important and relevant details.",
         "ExpID" :"0,0,206",
         "DType" :""
         },
         {
         "DID" : "35",
         "ChrID": "2",
         "DlgTxt" :"Fine, I’ll get on with it.",
         "ExpID" :"0,207,0",
         "DType" :""
         },
         {
         "DID" : "36",
         "ChrID": "3",
         "DlgTxt" :"Better…",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "37",
         "ChrID": "2",
         "DlgTxt" :"I met her at the Louvre Museum in Paris. She was also visiting the museum. ",
         "ExpID" :"0,209,0",
         "DType" :""
         },
         {
         "DID" : "38",
         "ChrID": "3",
         "DlgTxt" :"How long back are you talking about?",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "39",
         "ChrID": "2",
         "DlgTxt" :"I think, give or take four months.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "41",
         "ChrID": "2",
         "DlgTxt" :"Why is that surprising?",
         "ExpID" :"0,206,209",
         "DType" :""
         },
         {
         "DID" : "42",
         "ChrID": "2",
         "DlgTxt" :"Did I ask you about your standards?",
         "ExpID" :"0,206,0",
         "DType" :""
         },
         {
         "DID" : "43",
         "ChrID": "3",
         "DlgTxt" :"Continue arguing with each other later. Tell me further what happened between you and Jesse.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "44",
         "ChrID": "2",
         "DlgTxt" :"What else do you want to know?",
         "ExpID" :"0,207,0",
         "DType" :""
         },
         
         
         {
         "DID" : "45",
         "ChrID": "3",
         "DlgTxt" :"Did you feel she was uncomfortable with anyone’s presence at the wedding or before the event?",
         "ExpID" :"104,0,206",
         "DType" :""
         },
         {
         "DID" : "46",
         "ChrID": "2",
         "DlgTxt" :"Not that I know of.",
         "ExpID" :"0,205,0",
         "DType" :""
         },
         {
         "DID" : "47",
         "ChrID": "3",
         "DlgTxt" :"What about you Kate? Did you notice anything?",
         "ExpID" :"0,206,207",
         "DType" :""
         },
         {
         "DID" : "48",
         "ChrID": "3",
         "DlgTxt" :"Okay Zach, we will have a full-fledged investigation further into this and keep you updated.",
         "ExpID" :"0,0,201",
         "DType" :""
         },
         {
         "DID" : "49",
         "ChrID": "2",
         "DlgTxt" :"No I don’t want the police involved in my personal matters.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "50",
         "ChrID": "3",
         "DlgTxt" :"So you don’t want to register a complaint?",
         "ExpID" :"0,206,207",
         "DType" :""
         },
         {
         "DID" : "51",
         "ChrID": "2",
         "DlgTxt" :"I think I made that clear.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Chief of Police storms off from the room.)",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Zach receives a call from Conan, his Head of Security.)",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "52",
         "ChrID": "2",
         "DlgTxt" :"What!!!!",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Kate is startled)",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "53",
         "ChrID": "1",
         "DlgTxt" :"What happened?",
         "ExpID" :"112,0",
         "DType" :""
         },
         {
         "DID" : "54",
         "ChrID": "2",
         "DlgTxt" :"My wife is missing and now I’m bankrupt.",
         "ExpID" :"0,209",
         "DType" :""
         },
         {
         "DID" : "55",
         "ChrID": "1",
         "DlgTxt" :"Oh my God! How did this happen?",
         "ExpID" :"111,0",
         "DType" :""
         },
         {
         "DID" : "56",
         "ChrID": "2",
         "DlgTxt" :"I just got a call from my Head of Security informing me that all my antiques have been stolen.",
         "ExpID" :"104,205",
         "DType" :""
         },
         {
         "DID" : "57",
         "ChrID": "1",
         "DlgTxt" :"I’m so sorry, is there anything I can do to help you out?",
         "ExpID" :"109,0",
         "DType" :""
         },
         {
         "DID" : "58",
         "ChrID": "2",
         "DlgTxt" :"Save it…What the hell is happening?",
         "ExpID" :"105,202",
         "DType" :""
         },
         {
         "DID" : "59",
         "ChrID": "1",
         "DlgTxt" :"Umm…….",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "60",
         "ChrID": "2",
         "DlgTxt" :"All this started with you!!!",
         "ExpID" :"0,209",
         "DType" :""
         },
         {
         "DID" : "61",
         "ChrID": "1",
         "DlgTxt" :"How do you figure that?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "62",
         "ChrID": "2",
         "DlgTxt" :"You were the one who told me my wife went missing.",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "63",
         "ChrID": "1",
         "DlgTxt" :"You have gone bonkers.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "64",
         "ChrID": "2",
         "DlgTxt" :"Yeah, when your wife goes missing and you have been robbed, it would do that to you.",
         "ExpID" :"0,210",
         "DType" :""
         },
         {
         "DID" : "65",
         "ChrID": "1",
         "DlgTxt" :"Yes, but am I to blame?",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "66",
         "ChrID": "2",
         "DlgTxt" :"No, I know that, it’s just that I’m going crazy right now.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "67",
         "ChrID": "1",
         "DlgTxt" :"That’s alright! I understand, obviously.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "68",
         "ChrID": "2",
         "DlgTxt" :"…….",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "69",
         "ChrID": "1",
         "DlgTxt" :"You are in a tough place right now.",
         "ExpID" :"109,0",
         "DType" :""
         },
         {
         "DID" : "70",
         "ChrID": "2",
         "DlgTxt" :"That would be putting it mildly.",
         "ExpID" :"104,205",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Kate starts walking away.)",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "71",
         "ChrID": "2",
         "DlgTxt" :"You know she loved art as much as I did.",
         "ExpID" :"104,205",
         "DType" :""
         },
         {
         "DID" : "72",
         "ChrID": "1",
         "DlgTxt" :"Yeah",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "73",
         "ChrID": "2",
         "DlgTxt" :"Yeah, Vincent Van Gogh was her favourite painter and mine as well.",
         "ExpID" :"0,210",
         "DType" :""
         },
         {
         "DID" : "74",
         "ChrID": "1",
         "DlgTxt" :"Vincent Van Gogh?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "75",
         "ChrID": "2",
         "DlgTxt" :"You don’t know the famous painter?",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "76",
         "ChrID": "1",
         "DlgTxt" :"I think my questioning speaks for itself.",
         "ExpID" :"112,0",
         "DType" :""
         },
         {
         "DID" : "77",
         "ChrID": "2",
         "DlgTxt" :"Okay, He was a Dutch post-impressionist painter.",
         "ExpID" :"0,207",
         "DType" :""
         },
         {
         "DID" : "78",
         "ChrID": "1",
         "DlgTxt" :"Again, Greek to me.",
         "ExpID" :"105,0",
         "DType" :""
         },
         {
         "DID" : "79",
         "ChrID": "2",
         "DlgTxt" :"Didn’t you go to school?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "80",
         "ChrID": "1",
         "DlgTxt" :"Clearly not to the same hotshot school you went to!",
         "ExpID" :"110,0",
         "DType" :""
         },
         {
         "DID" : "81",
         "ChrID": "2",
         "DlgTxt" :"Anyways, we shared a great passion for art.",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "82",
         "ChrID": "1",
         "DlgTxt" :"And that’s why you love her?",
         "ExpID" :"108,0",
         "DType" :""
         },
         {
         "DID" : "83",
         "ChrID": "2",
         "DlgTxt" :"Obviously not… I don’t know",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "84",
         "ChrID": "1",
         "DlgTxt" :"You don’t know?",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "85",
         "ChrID": "2",
         "DlgTxt" :"Yes I don’t know……My wife is missing…..Nothing is clear.",
         "ExpID" :"104,202",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Kate goes near Zach and tries to soothe him.)",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "86",
         "ChrID": "1",
         "DlgTxt" :"I’m so sorry you are going through this.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "87",
         "ChrID": "2",
         "DlgTxt" :"You know I had such great plans for our honeymoon.",
         "ExpID" :"110,207",
         "DType" :""
         },
         {
         "DID" : "88",
         "ChrID": "2",
         "DlgTxt" :"You know on our first date I took her to see Madama Butterfly, the opera.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "89",
         "ChrID": "1",
         "DlgTxt" :"Wow!",
         "ExpID" :"106,0",
         "DType" :""
         },
         {
         "DID" : "90",
         "ChrID": "2",
         "DlgTxt" :"She loved it so much, and I was so glad that she did…",
         "ExpID" :"0,209",
         "DType" :""
         },
         {
         "DID" : "91",
         "ChrID": "1",
         "DlgTxt" :"….",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "92",
         "ChrID": "2",
         "DlgTxt" :"I was planning the next opera on our honeymoon. And she was also a much trained horseback rider.",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "93",
         "ChrID": "1",
         "DlgTxt" :"You don’t say!",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "94",
         "ChrID": "2",
         "DlgTxt" :"And she had such passion for vintage cars! I mean, women can’t even tell the difference between two brands.",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "95",
         "ChrID": "1",
         "DlgTxt" :"Your sexism is showing, Mr Millionaire!",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "96",
         "ChrID": "2",
         "DlgTxt" :"But it is true!",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "97",
         "ChrID": "1",
         "DlgTxt" :"Don’t you think it is a little strange that you two have very similar interest?",
         "ExpID" :"105,0",
         "DType" :""
         },
         {
         "DID" : "98",
         "ChrID": "2",
         "DlgTxt" :"What do you mean?",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "99",
         "ChrID": "1",
         "DlgTxt" :"How is it possible that as a couple you have never had differences in opinion?",
         "ExpID" :"106,0",
         "DType" :""
         },
         {
         "DID" : "100",
         "ChrID": "2",
         "DlgTxt" :"Obviously, we had. We also had fights like a normal couple.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "101",
         "ChrID": "1",
         "DlgTxt" :"And what were those fights about?",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "102",
         "ChrID": "2",
         "DlgTxt" :"Like where we would go to eat, which car to buy, all of that stuff.",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "103",
         "ChrID": "1",
         "DlgTxt" :"You call that a fight?",
         "ExpID" :"106,0",
         "DType" :""
         },
         {
         "DID" : "104",
         "ChrID": "2",
         "DlgTxt" :"I think so, I was there and arguing with her.",
         "ExpID" :"",
         "DType" :"102,207"
         },
         {
         "DID" : "105",
         "ChrID": "1",
         "DlgTxt" :"Boy, you have first world problems.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "106",
         "ChrID": "2",
         "DlgTxt" :"Boy, someone has jealousy issues.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "107",
         "ChrID": "1",
         "DlgTxt" :": Me? And jealous? Huh!",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "108",
         "ChrID": "2",
         "DlgTxt" :"Obviously, you are! You are so lonely that you work as a bridesmaid just to be at a wedding if not your own. ",
         "ExpID" :"104,209",
         "DType" :""
         },
         {
         "DID" : "109",
         "ChrID": "1",
         "DlgTxt" :"How dare you! ",
         "ExpID" :"109,0",
         "DType" :""
         },
         {
         "DID" : "110",
         "ChrID": "2",
         "DlgTxt" :"Jesse was living every woman’s dream that you can only imagine about! ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "111",
         "ChrID": "1",
         "DlgTxt" :"You…...",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Zach forcibly pulls Kate towards him and kisses her…)",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate and Zach awkwardly push away from the kiss and look away from each other.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "112",
         "ChrID": "1",
         "DlgTxt" :"I think I should take a leave.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Before Zach could reply the manager of the hotel approaches Zach ",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "113",
         "ChrID": "4",
         "DlgTxt" :"It is so unfortunate that this incident happened in our hotel. I’m extremely sorry for what you are going through. ",
         "ExpID" :"0,0,109",
         "DType" :""
         },
         {
         "DID" : "114",
         "ChrID": "2",
         "DlgTxt" :"Thank you, I appreciate it.",
         "ExpID" :"0,206,0",
         "DType" :""
         },
         {
         "DID" : "115",
         "ChrID": "4",
         "DlgTxt" :"Would it be okay if we send housekeeping to your suite?",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :":(At that very moment it clicked to Zach that he has not yet checked Jesse’s room.)",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "116",
         "ChrID": "2",
         "DlgTxt" :"I think, it would be appropriate if I checked the suite for one last time, in case Jesse left something.",
         "ExpID" :"0,209,0",
         "DType" :""
         },
         {
         "DID" : "117",
         "ChrID": "4",
         "DlgTxt" :"Obviously, let me know if you need any assistance.",
         "ExpID" :"0,206,104",
         "DType" :""
         },
         {
         "DID" : "118",
         "ChrID": "2",
         "DlgTxt" :"Yes",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :":(Manager walks away and Zach turns towards Kate.)",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "119",
         "ChrID": "2",
         "DlgTxt" :"Kate, I’m afraid I can’t let you go just yet. I need your help searching the room.",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "120",
         "ChrID": "1",
         "DlgTxt" :" Oh?",
         "ExpID" :"105,0",
         "DType" :""
         },
         {
         "DID" : "121",
         "ChrID": "2",
         "DlgTxt" :"Two pairs of eyes will be quicker and thorough than one pair of eyes.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "122",
         "ChrID": "1",
         "DlgTxt" :"Since there isn’t any place I’ve to be at, sure I can help you.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :":(Zach and Kate both get down from their respective barstools and walk down the lobby towards the elevator to get up their suite.)",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :":(They enter the suite.)",
         "ExpID" :"",
         "DType" :""
         },
         
         
         
         {
         "DID" : "123",
         "ChrID": "1",
         "DlgTxt" :"So, what are we looking for?",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "124",
         "ChrID": "2",
         "DlgTxt" :"I don’t know… I have never done this before. Anything that might look odd to you, I guess.",
         "ExpID" :"112,209",
         "DType" :""
         },
         {
         "DID" : "125",
         "ChrID": "2",
         "DlgTxt" :"Okay, got it.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :":(Zach and Kate each walk off in the different direction of the room.)",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :":(As soon as Kate turns to walk away she abruptly ceases because something seems very wrong to her.)",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate thinks: This seems very weird, why is the room so neat?",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "126",
         "ChrID": "1",
         "DlgTxt" :"(Kate shouts): Zach, the housekeeping has not come, right?",
         "ExpID" :"111,0",
         "DType" :""
         },
         {
         "DID" : "127",
         "ChrID": "2",
         "DlgTxt" :"No! Why? Did you find something?",
         "ExpID" :"0,209",
         "DType" :""
         },
         {
         "DID" : "128",
         "ChrID": "1",
         "DlgTxt" :"No, nothing. Just wanted to make sure.",
         "ExpID" :"109,206",
         "DType" :""
         },
         {
         "DID" : "129",
         "ChrID": "2",
         "DlgTxt" :"Okay, holler if you find something.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "130",
         "ChrID": "1",
         "DlgTxt" :"Okay.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate talks to herself: If Jesse is kidnapped and missing why is there no sign of struggle? Why is the room so tidy?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :":(Zach is searching in Jesse’s room. He searches the balcony, he looks under the bed, and he opens the wardrobe and finds Jesse’s wedding dress.)",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "131",
         "ChrID": "2",
         "DlgTxt" :"KATE!!!",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Kate comes running in the room.)",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Zach lifts the wedding dress up which is slashed in the middle.)",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "132",
         "ChrID": "2",
         "DlgTxt" :"Fuck! This is real then, I was somewhere hoping that she had ran out on me and this was a big farce, because I can handle that possibility over her being in danger",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "133",
         "ChrID": "1",
         "DlgTxt" :"Oh my God, this is horrible. How can someone do something so gruesome? ",
         "ExpID" :"102,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Kate wonders aloud: But why would they take her out of her wedding dress.",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "134",
         "ChrID": "2",
         "DlgTxt" :"Because that would draw attention.",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "135",
         "ChrID": "1",
         "DlgTxt" :"Yes, you are probably right.",
         "ExpID" :"105,0",
         "DType" :""
         },
         {
         "DID" : "136",
         "ChrID": "1",
         "DlgTxt" :"Are you okay?",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Zach heaves a huge breath.)",
         "ExpID" :"",
         "DType" :""
         },
         
         
         
         {
         "DID" : "137",
         "ChrID": "2",
         "DlgTxt" :"Yes, I am alright we should probably keep searching, we might find more clues.",
         "ExpID" :"0,207",
         "DType" :""
         },
         {
         "DID" : "138",
         "ChrID": "1",
         "DlgTxt" :"Yes.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "139",
         "ChrID": "2",
         "DlgTxt" :"Can you check the bathroom, all of her makeup is spread on the counter, I don’t want to go in there, I can’t handle it.",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "140",
         "ChrID": "1",
         "DlgTxt" :"Yes yes sure I understand. I’ll do that.",
         "ExpID" :"109,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Kate goes inside the bathroom. She looks at the things on the counter and she opens the cabinet under the sink. On the second shelf she finds a makeup kit, she opens and looks into the makeup kit. She picks up a strawberry blonde wig then she finds a latex face mask, gloves, eyebrows, contact lenses, etc. )",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate thinks to herself: What the fuck is happening. First there is no sign of struggle but the wedding dress is slashed and the kidnapper forgets his own disguise makeup kit?!",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"This is very odd!",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"It suddenly strikes to Kate that maybe the kidnapper might have left some traces in his face mask.)",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Oh my! I found it! His hair! I’m sure this will lead us somewhere. Let me find some constructive evidence only then I’ll tell him. He has already been through a lot.",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Kate hides the makeup kit under the bathroom basin again and comes out of the bathroom.)",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "142",
         "ChrID": "1",
         "DlgTxt" :"Zach??",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "143",
         "ChrID": "1",
         "DlgTxt" :"???",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Zach comes out of the balcony, signalling Kate to be quiet for a second while he is on the phone.)",
         "ExpID" :"",
         "DType" :""
         },
         
         
         
         {
         "DID" : "144",
         "ChrID": "2",
         "DlgTxt" :"(On the phone) Thank you, I appreciate your help. I’ll be there as soon as possible. ",
         "ExpID" :"0,204",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Zach turns towards Kate.)",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "145",
         "ChrID": "2",
         "DlgTxt" :"Did you find something alarming?",
         "ExpID" :"104,207",
         "DType" :""
         },
         {
         "DID" : "146",
         "ChrID": "1",
         "DlgTxt" :"No, not really. Where are you going?",
         "ExpID" :"106,0",
         "DType" :""
         },
         {
         "DID" : "147",
         "ChrID": "2",
         "DlgTxt" :"I got a call from the police about the robbery. I need to go down to the station.",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "148",
         "ChrID": "2",
         "DlgTxt" :"Let’s move then.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "149",
         "ChrID": "1",
         "DlgTxt" :"You carry on. I got to pick up my things and checkout.",
         "ExpID" :"109,0",
         "DType" :""
         },
         {
         "DID" : "150",
         "ChrID": "2",
         "DlgTxt" :"Okay, keep in touch and take care.",
         "ExpID" :"0,201",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Zach leaves and Kate goes to the bathroom picks up the makeup kit and rushes to her room and heaves a sigh of relief.)",
         "ExpID" :"",
         "DType" :""
         },
         
         
         
         
         {
         "DID" : "151",
         "ChrID": "1",
         "DlgTxt" :"(talks to herself) Phew! Now I need to call Ashton. I hope he picks up the call.",
         "ExpID" :"104",
         "DType" :""
         },
         {
         "DID" : "152",
         "ChrID": "1",
         "DlgTxt" :"(over the phone) Ashton Please pick up the call. Please…",
         "ExpID" :"101",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(The phone call ends without Ashton picking up)",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "153",
         "ChrID": "1",
         "DlgTxt" :"(Tries again) Ashton Please…. pick up…. pick up…. pick up…. pick up!!!!!",
         "ExpID" :"101",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :":(Ashton picks up)",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         
         
         {
         "DID" : "154",
         "ChrID": "5",
         "DlgTxt" :"(Responds in whispers on the phone) Kate I’m busy at the moment. What is it?",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "155",
         "ChrID": "1",
         "DlgTxt" :"(Exclaims) Thank god you picked up. Please don’t hang up! Please don’t hang up! I need a favour of you and you’re the only one who can help me. ",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "156",
         "ChrID": "5",
         "DlgTxt" :"Seriously, not right now I am extremely busy. My boss is going to wring my neck for even talking to you right now.",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "157",
         "ChrID": "1",
         "DlgTxt" :": Ashton I need five minutes of your time and I am coming down to your lab.",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         {
         "DID" : "158",
         "ChrID": "5",
         "DlgTxt" :"NOOO!!! NOT THE LAB.",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "159",
         "ChrID": "1",
         "DlgTxt" :"Ashton, it’s important and I’m coming. Bye.",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Kate is standing in an alley with the makeup kit in one hand and she calls up Ashton.)",
         "ExpID" :"",
         "DType" :""
         },
         
         
         
         
         {
         "DID" : "160",
         "ChrID": "1",
         "DlgTxt" :"Ashton I am standing at the backdoor of the lab in the alley.",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "161",
         "ChrID": "5",
         "DlgTxt" :"You really came. I told you not to.",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "162",
         "ChrID": "1",
         "DlgTxt" :"Can you shut up and come outside, this is important, or I wouldn’t be giving you hell right now.",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "163",
         "ChrID": "5",
         "DlgTxt" :"Okay, I’ll be there in a minute.",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Kate hangs up and pockets her phone.)",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Ashton arrives a second later with his lab coat on.)Upon his arrival he starts yelling at her",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "164",
         "ChrID": "5",
         "DlgTxt" :"What is wrong with you? I could lose my job. I’m working on a very special case.",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "165",
         "ChrID": "5",
         "DlgTxt" :"You brought a makeup kit. What is up with you?",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "166",
         "ChrID": "1",
         "DlgTxt" :"Calm down for a second. Let me get a word in.",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "167",
         "ChrID": "5",
         "DlgTxt" :"Yes, tell me what is so important.",
         "ExpID" :"207,0",
         "DType" :""
         },
         {
         "DID" : "168",
         "ChrID": "1",
         "DlgTxt" :"I was on field today…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "169",
         "ChrID": "5",
         "DlgTxt" :"Please, stop glorifying your career",
         "ExpID" :"209,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Kate makes a face and continues: The bride went missing, she is kidnapped, and I have found evidence that may lead us to the kidnapper.)",
         "ExpID" :"",
         "DType" :""
         },
         
         
         
         
         
         {
         "DID" : "170",
         "ChrID": "5",
         "DlgTxt" :"So, who do you think I am? The police?! And doesn’t this sound convenient that the bride went missing on her wedding day? ",
         "ExpID" :"207,104",
         "DType" :""
         },
         {
         "DID" : "171",
         "ChrID": "1",
         "DlgTxt" :"What are you suggesting, that she ran away setting up her own kidnapping?",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "172",
         "ChrID": "5",
         "DlgTxt" :"I am not suggesting anything, what do you need my help for?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "173",
         "ChrID": "1",
         "DlgTxt" :"I need you to explore the DNA of this hair strand.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "174",
         "ChrID": "5",
         "DlgTxt" :"I’m done fighting with you; you are stubborn as a mule. You walk around the neighbourhood for a while and I will give you a call when the lab closes so that you can sneak in.",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Thank you (gives him a kiss on the cheek and leaves)",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Later that evening.)(Kate receives a call from Ashton.)",
         "ExpID" :"",
         "DType" :""
         },
         
         
         
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Over the phone) Kate you may come in and meet me inside.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Kate rushes in.)",
         "ExpID" :"",
         "DType" :""
         },
         
         
         
         {
         "DID" : "176",
         "ChrID": "1",
         "DlgTxt" :"So, what did we find out? ",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "177",
         "ChrID": "5",
         "DlgTxt" :"Nothing which I find important. The hair strand is of a woman age around 30-32..",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "178",
         "ChrID": "1",
         "DlgTxt" :"It’s a she???",
         "ExpID" :"102,206",
         "DType" :""
         },
         {
         "DID" : "179",
         "ChrID": "5",
         "DlgTxt" :"Umm… yes and she has coloured her hair red, but the root colour is blonde.",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "180",
         "ChrID": "1",
         "DlgTxt" :"And????",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "181",
         "ChrID": "5",
         "DlgTxt" :"And, you’re welcome.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "182",
         "ChrID": "1",
         "DlgTxt" :"Yes, thank you so much. Really, I’ll make it up to you.",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "183",
         "ChrID": "5",
         "DlgTxt" :"Yeah, yeah. Now leave.",
         "ExpID" :"104,206",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "0",
         "DlgTxt" :"(Kate leaves from the lab and calls Zach.)",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "0",
         "DlgTxt" :"(Kate calls Zach.)",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "184",
         "ChrID": "1",
         "DlgTxt" :"Do you any female with blonde hair but dyed red around early 30s?",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "185",
         "ChrID": "2",
         "DlgTxt" :"Umm… what?",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "186",
         "ChrID": "1",
         "DlgTxt" :"Just answer the question.",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "187",
         "ChrID": "2",
         "DlgTxt" :"Yes, that description fits Jesse. Why?",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "188",
         "ChrID": "1",
         "DlgTxt" :"What???!",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "189",
         "ChrID": "2",
         "DlgTxt" :"You are not making any sense.",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "190",
         "ChrID": "1",
         "DlgTxt" :"I second that. It doesn’t make any sense.",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "191",
         "ChrID": "2",
         "DlgTxt" :"Kate!!",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "192",
         "ChrID": "1",
         "DlgTxt" :"Okay, okay. Can you meet me as soon as possible?",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "193",
         "ChrID": "2",
         "DlgTxt" :"I’m on my way",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "0",
         "DlgTxt" :"(Kate and Zach meet at a nearby café.)",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "194",
         "ChrID": "2",
         "DlgTxt" :"Yes, tell me. Did you find anything about Jesse?",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "195",
         "ChrID": "1",
         "DlgTxt" :"On the contrary, I think I found something about the kidnapper.",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "196",
         "ChrID": "2",
         "DlgTxt" :"Really? What?",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "197",
         "ChrID": "1",
         "DlgTxt" :"Okay, So, let me start from the beginning.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "198",
         "ChrID": "2",
         "DlgTxt" :"Go on...",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "199",
         "ChrID": "1",
         "DlgTxt" :"I found a disguise make up kit under the basin in Jesse’s bathroom.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "200",
         "ChrID": "2",
         "DlgTxt" :"What is a disguise makeup kit?",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "201",
         "ChrID": "1",
         "DlgTxt" :"You know makeup material to change your appearance.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "202",
         "ChrID": "2",
         "DlgTxt" :"Oh! Oh My God! Why didn’t you tell me?",
         "ExpID" :"0,209",
         "DType" :""
         },
         {
         "DID" : "203",
         "ChrID": "1",
         "DlgTxt" :"I just wanted to be sure of what I’ve found and if it was useful.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "204",
         "ChrID": "2",
         "DlgTxt" :"But that’s not your place to decide.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "205",
         "ChrID": "1",
         "DlgTxt" :"I know, and I’m sorry for keeping this from you. Do you want to know what I found out?",
         "ExpID" :"102,0",
         "DType" :""
         },
         {
         "DID" : "206",
         "ChrID": "2",
         "DlgTxt" :"Obviously!",
         "ExpID" :"0,205",
         "DType" :""
         },
         
         {
         "DID" : "207",
         "ChrID": "1",
         "DlgTxt" :"I found a hair strand on the face mask, so my friend did a DNA test on it.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "208",
         "ChrID": "2",
         "DlgTxt" :"You know people who can randomly do DNA testing? Wow, you know people in the right places.",
         "ExpID" :"0,209",
         "DType" :""
         },
         {
         "DID" : "209",
         "ChrID": "1",
         "DlgTxt" :"Anyways, the DNA test revealed a woman in her early 30s, which bleached red hair, but roots are blonde.",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "210",
         "ChrID": "2",
         "DlgTxt" :"That’s why you asked. ",
         "ExpID" :"0,207",
         "DType" :""
         },
         {
         "DID" : "211",
         "ChrID": "1",
         "DlgTxt" :"Yeah, and you said this fits Jesse’s description which is very puzzling.",
         "ExpID" :"104,205",
         "DType" :""
         },
         {
         "DID" : "212",
         "ChrID": "2",
         "DlgTxt" :"Even I’m confused now.",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "213",
         "ChrID": "1",
         "DlgTxt" :"What did you find at the station?",
         "ExpID" :"109,0",
         "DType" :""
         },
         
         {
         "DID" : "214",
         "ChrID": "2",
         "DlgTxt" :"That is another baffling thing.",
         "ExpID" :"0,205",
         "DType" :""
         },
         
         {
         "DID" : "215",
         "ChrID": "1",
         "DlgTxt" :"Yeah?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "216",
         "ChrID": "2",
         "DlgTxt" :"My bank account and my storage weren’t robbed. Okay, technically they were robbed but there was no sign of break-in.",
         "ExpID" :"0,209",
         "DType" :""
         },
         
         {
         "DID" : "217",
         "ChrID": "1",
         "DlgTxt" :"That is weird.",
         "ExpID" :"104,209",
         "DType" :""
         },
         {
         "DID" : "218",
         "ChrID": "2",
         "DlgTxt" :"You tell me. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "219",
         "ChrID": "2",
         "DlgTxt" :"The police’s best theory is someone close to me who knew the passwords to both the places broke in.",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "220",
         "ChrID": "1",
         "DlgTxt" :"Oh, Shit! Do you believe that?",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "221",
         "ChrID": "2",
         "DlgTxt" :"I don’t want to.",
         "ExpID" :"0,209",
         "DType" :""
         },
         {
         "DID" : "222",
         "ChrID": "1",
         "DlgTxt" :"But?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "223",
         "ChrID": "2",
         "DlgTxt" :"But every evidence points to that.",
         "ExpID" :"0,207",
         "DType" :""
         },
         {
         "DID" : "224",
         "ChrID": "1",
         "DlgTxt" :"Who do you think did it?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach looks away from her, refusing to speak.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "225",
         "ChrID": "1",
         "DlgTxt" :"Zach?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "226",
         "ChrID": "2",
         "DlgTxt" :"whispers: Jesse",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "227",
         "ChrID": "1",
         "DlgTxt" :"What?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach louder this time: Jesse",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "228",
         "ChrID": "1",
         "DlgTxt" :"Why do you think that?",
         "ExpID" :"109,0",
         "DType" :""
         },
         {
         "DID" : "229",
         "ChrID": "2",
         "DlgTxt" :"Because apart from me, she was the only one who knew the passwords to both the places.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "230",
         "ChrID": "1",
         "DlgTxt" :"Fuck! Ooooh Shit! I’m so sorry.",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "231",
         "ChrID": "2",
         "DlgTxt" :"Yeah",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "232",
         "ChrID": "1",
         "DlgTxt" :" And Jesse’s hair was found on the face mask.",
         "ExpID" :"102,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach holding his head in his hands.231Zach: Yeah",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "233",
         "ChrID": "2",
         "DlgTxt" :"I know",
         "ExpID" :"0,207",
         "DType" :""
         },
         {
         "DID" : "234",
         "ChrID": "1",
         "DlgTxt" :"She ran away. She was not kidnapped.",
         "ExpID" :"109,0",
         "DType" :""
         },
         {
         "DID" : "235",
         "ChrID": "2",
         "DlgTxt" :"Yup, bitch, ran away. She humiliated me, robbed me and ran away.",
         "ExpID" :"104,209",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate still in shoc",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "236",
         "ChrID": "1",
         "DlgTxt" :"She conned you",
         "ExpID" :"109,0",
         "DType" :""
         },
         {
         "DID" : "237",
         "ChrID": "2",
         "DlgTxt" :"No need to be blunt here. I’m aware of the situation.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "238",
         "ChrID": "1",
         "DlgTxt" :"I’m sorry. Its just that I’m in shock",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "239",
         "ChrID": "2",
         "DlgTxt" :"Join the club.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "240",
         "ChrID": "1",
         "DlgTxt" :"But how did she manage to pilfer you? She was at the wedding. I saw her.",
         "ExpID" :"106,0",
         "DType" :""
         },
         {
         "DID" : "241",
         "ChrID": "2",
         "DlgTxt" :"I guess, she was working with a team.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "242",
         "ChrID": "1",
         "DlgTxt" :"But then why wait till the wedding day and run away at the last min? Why drag it out till the wedding?",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "243",
         "ChrID": "2",
         "DlgTxt" :"Because I gave her the passwords just a day before the wedding as a sign of trust. How that came to bite me in the ass!",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "244",
         "ChrID": "1",
         "DlgTxt" :"Oh, wow! She would have married you if you hadn’t given her the passwords.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "245",
         "ChrID": "2",
         "DlgTxt" :"I guess, that’s true.",
         "ExpID" :"0,209",
         "DType" :""
         },
         {
         "DID" : "246",
         "ChrID": "1",
         "DlgTxt" :"Now what?",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "247",
         "ChrID": "2",
         "DlgTxt" :"Now what? We find that bitch. That’s what.",
         "ExpID" :"102,0",
         "DType" :""
         },
         
         
         
         {
         "DID" : "248",
         "ChrID": "1",
         "DlgTxt" :"We?",
         "ExpID" :"0,207",
         "DType" :""
         },
         
         {
         "DID" : "249",
         "ChrID": "2",
         "DlgTxt" :"Oh yeah! You are helping me. You showed how useful you are when you did that DNA test.",
         "ExpID" :"102,0",
         "DType" :""
         },
         {
         "DID" : "250",
         "ChrID": "1",
         "DlgTxt" :"But I don’t want to be dragged into this.",
         "ExpID" :"104,206",
         "DType" :""
         },
         {
         "DID" : "251",
         "ChrID": "2",
         "DlgTxt" :"You are already in the middle of whatever this is.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "252",
         "ChrID": "2",
         "DlgTxt" :"What? But I genuinely wanted to help you before because I thought your bride was kidnapped.",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "253",
         "ChrID": "2",
         "DlgTxt" :"So, keep on assuming that. ",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "254",
         "ChrID": "1",
         "DlgTxt" :"That is nonsensical.",
         "ExpID" :"109,0",
         "DType" :""
         },
         {
         "DID" : "255",
         "ChrID": "2",
         "DlgTxt" :"My life is nonsensical right now.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "256",
         "ChrID": "1",
         "DlgTxt" :"Cut the drama.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "257",
         "ChrID": "1",
         "DlgTxt" :"Are you kidding me right now?! You think this is drama?",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "258",
         "ChrID": "1",
         "DlgTxt" :"If you want my help, yelling at me isn’t going to work.",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "259",
         "ChrID": "2",
         "DlgTxt" :"Seriously??",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "260",
         "ChrID": "1",
         "DlgTxt" :"Someone needs to teach you manners.",
         "ExpID" :"105,0",
         "DType" :""
         },
         {
         "DID" : "261",
         "ChrID": "2",
         "DlgTxt" :"Kate, now is not the right time to teach me manners. Are you going to help me or not?",
         "ExpID" :"102,0",
         "DType" :""
         },
         {
         "DID" : "262",
         "ChrID": "1",
         "DlgTxt" :"No",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "263",
         "ChrID": "2",
         "DlgTxt" :"I can’t believe this. What will it take to help me?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "264",
         "ChrID": "1",
         "DlgTxt" :"Nothing, I just don’t want to be a part of this revenge plan.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "265",
         "ChrID": "2",
         "DlgTxt" :"It isn’t a revenge plan. She needs to be brought to justice.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "266",
         "ChrID": "1",
         "DlgTxt" :"Take help of the police, I’m sure there is something they can do.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "267",
         "ChrID": "2",
         "DlgTxt" :"I’m sure they can. But I don’t trust anyone right now apart from you.",
         "ExpID" :"0,207",
         "DType" :""
         },
         {
         "DID" : "268",
         "ChrID": "1",
         "DlgTxt" :"Why me?",
         "ExpID" :"103,209",
         "DType" :""
         },
         {
         "DID" : "269",
         "ChrID": "2",
         "DlgTxt" :"Because you willingly helped me without any ulterior motive.",
         "ExpID" :"105,0",
         "DType" :""
         },
         {
         "DID" : "270",
         "ChrID": "1",
         "DlgTxt" :"Okay.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "271",
         "ChrID": "2",
         "DlgTxt" :"How would you feel if she conned innocent people like me again?",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "272",
         "ChrID": "1",
         "DlgTxt" :"You and innocent?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "273",
         "ChrID": "2",
         "DlgTxt" :"However, I might be, I’ve never cheated anyone. And every penny I’ve made is through hard work and honest intentions.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "274",
         "ChrID": "2",
         "DlgTxt" :"Kate, please!",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "275",
         "ChrID": "1",
         "DlgTxt" :"Zach, you really have don’t have to do this.",
         "ExpID" :"109,209",
         "DType" :""
         },
         {
         "DID" : "276",
         "ChrID": "2",
         "DlgTxt" :"That means you will come?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "277",
         "ChrID": "1",
         "DlgTxt" :"Oh My God! No.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "278",
         "ChrID": "2",
         "DlgTxt" :"I’m reiterating I have been robbed, left at the altar and there is a huge possibility---",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "279",
         "ChrID": "1",
         "DlgTxt" :"Huge possibility?",
         "ExpID" :"0,203",
         "DType" :""
         },
         
         {
         "DID" : "280",
         "ChrID": "2",
         "DlgTxt" :"Fine! Highly plausible that she conned me , I’m at my most vulnerable right now and the only person I trust is you. So, can you please accompany me to find that bitch?",
         "ExpID" :"0,206",
         "DType" :""
         },
         
         {
         "DID" : "281",
         "ChrID": "1",
         "DlgTxt" :"Fine,I’ll go. You did not have to twist my hand.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "282",
         "ChrID": "2",
         "DlgTxt" :"You would have come without that?",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Next morning Zach calls Kate to his place excited that he has discovered something.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate enters the house.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "283",
         "ChrID": "1",
         "DlgTxt" :"Wow, you have a beautiful house!",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "284",
         "ChrID": "2",
         "DlgTxt" :"Thanks.",
         "ExpID" :"106,0",
         "DType" :""
         },
         {
         "DID" : "285",
         "ChrID": "1",
         "DlgTxt" :"What did you find out? You sounded excited over the phone.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "286",
         "ChrID": "2",
         "DlgTxt" :"I found Jesse’s photo on my laptop.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "287",
         "ChrID": "1",
         "DlgTxt" :"How is that exciting?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "288",
         "ChrID": "2",
         "DlgTxt" :"You don’t understand",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "289",
         "ChrID": "1",
         "DlgTxt" :"Shouldn’t you be... umm",
         "ExpID" :"104,209",
         "DType" :""
         },
         {
         "DID" : "290",
         "ChrID": "2",
         "DlgTxt" :"Jealous?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "291",
         "ChrID": "1",
         "DlgTxt" :"Maybe",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "292",
         "ChrID": "2",
         "DlgTxt" :"No, she is a bitch and I don’t care for her anymore.",
         "ExpID" :"0,209",
         "DType" :""
         },
         {
         "DID" : "293",
         "ChrID": "1",
         "DlgTxt" :"Oh okay then. What do you want to tell me?",
         "ExpID" :"103,0",
         "DType" :""
         },
         
         {
         "DID" : "294",
         "ChrID": "2",
         "DlgTxt" :"Let me get my laptop and show the photo to you.",
         "ExpID" :"0,207",
         "DType" :""
         },
         {
         "DID" : "295",
         "ChrID": "1",
         "DlgTxt" :"Okay.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach logs into his computer and turns the laptop towards Kate.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "296",
         "ChrID": "2",
         "DlgTxt" :"You see that?",
         "ExpID" :"0,207",
         "DType" :""
         },
         {
         "DID" : "297",
         "ChrID": "1",
         "DlgTxt" :"Who’s that?",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "298",
         "ChrID": "2",
         "DlgTxt" :"That is Jesse and I don’t know who the guy is but look the photograph is named.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "299",
         "ChrID": "1",
         "DlgTxt" :"Didee and Dodo. What does that mean?",
         "ExpID" :"0,209",
         "DType" :""
         },
         {
         "DID" : "300",
         "ChrID": "2",
         "DlgTxt" :"Jesse’s nickname I guess, and Dodo must mean this guy’s nickname.",
         "ExpID" :"109,0",
         "DType" :""
         },
         {
         "DID" : "301",
         "ChrID": "1",
         "DlgTxt" :"So what do you what to do this with?.",
         "ExpID" :"105,0",
         "DType" :""
         },
         
         
         {
         "DID" : "302",
         "ChrID": "2",
         "DlgTxt" :"We can try to track them through social media?",
         "ExpID" :"109,205",
         "DType" :""
         },
         {
         "DID" : "303",
         "ChrID": "1",
         "DlgTxt" :"They won’t me that stupid.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "304",
         "ChrID": "2",
         "DlgTxt" :"Oh, trust me, they will be that stupid. She left her makeup kit.",
         "ExpID" :"0,207",
         "DType" :""
         },
         {
         "DID" : "305",
         "ChrID": "1",
         "DlgTxt" :"I guess, there is no harm in trying. So, what’s your plan of action?",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "306",
         "ChrID": "2",
         "DlgTxt" :"You can take Instagram, I’ll take Facebook. See, if we can find them through these names.",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "307",
         "ChrID": "1",
         "DlgTxt" :"Cool.",
         "ExpID" :"110,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate takes out her phone.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate and Zach sit down at the dining table.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "308",
         "ChrID": "1",
         "DlgTxt" :"Tell me again how their names are spelled.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "309",
         "ChrID": "2",
         "DlgTxt" :"D-I-D-E-E and D-O-D-O",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate while scrolling: Nothing except a bunch of 16-year olds on Instagram",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "310",
         "ChrID": "1",
         "DlgTxt" :"Anyways… how’s Paris? Are you acquainted with the city?",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "311",
         "ChrID": "2",
         "DlgTxt" :"Okay",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "312",
         "ChrID": "2",
         "DlgTxt" :"On it.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "313",
         "ChrID": "1",
         "DlgTxt" :"What is taking you so long?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "314",
         "ChrID": "2",
         "DlgTxt" :"I tried looking for Didee but didn’t get anything so now I’m looking for Dodo.",
         "ExpID" :"0,209",
         "DType" :""
         },
         {
         "DID" : "315",
         "ChrID": "1",
         "DlgTxt" :"Yeah, okay.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "316",
         "ChrID": "2",
         "DlgTxt" :"Finally got it!! Guy is called Jason and Dodo was his nickname 4 years ago.",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "317",
         "ChrID": "1",
         "DlgTxt" :"Four years… that explains why Jesse looked better in the picture you showed me.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "318",
         "ChrID": "2",
         "DlgTxt" :"Ouch!",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "319",
         "ChrID": "1",
         "DlgTxt" :"Obviously.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "320",
         "ChrID": "2",
         "DlgTxt" :"His name is Jason Clearwater, try searching for him on Instagram now.",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "321",
         "ChrID": "1",
         "DlgTxt" :"Go it… You can also search on Insta now",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "322",
         "ChrID": "2",
         "DlgTxt" :"Yes…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "323",
         "ChrID": "1",
         "DlgTxt" :"I found 4 searches with Jason Clearwater, hope they don’t have private accounts. We won’t be able to see shit.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "324",
         "ChrID": "2",
         "DlgTxt" :"True.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "325",
         "ChrID": "1",
         "DlgTxt" :"Shit, his account is private. Anyways, he didn’t look like your Jason.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "326",
         "ChrID": "2",
         "DlgTxt" :"Zach: He ain’t my Jason.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "327",
         "ChrID": "1",
         "DlgTxt" :"You get my point.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "328",
         "ChrID": "2",
         "DlgTxt" :"Anything?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "329",
         "ChrID": "1",
         "DlgTxt" :"This guy looks like the Jason we are trying to find. Have a look, here.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach peeping over Kate’s shoulder to look into her phone.",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "330",
         "ChrID": "2",
         "DlgTxt" :"Oh, yeah. He looks like Dodo.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "331",
         "ChrID": "2",
         "DlgTxt" :"Is his account private?",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "332",
         "ChrID": "1",
         "DlgTxt" :"Fingers crossed. Yes!! His account is public.",
         "ExpID" :"112,208",
         "DType" :""
         },
         {
         "DID" : "333",
         "ChrID": "2",
         "DlgTxt" :"Give me your phone.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "334",
         "ChrID": "1",
         "DlgTxt" :"But why? I’m scrolling through it.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "335",
         "ChrID": "2",
         "DlgTxt" :"You are not quick enough",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "336",
         "ChrID": "1",
         "DlgTxt" :"You are bloody impatient.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "337",
         "ChrID": "2",
         "DlgTxt" :"Fine, what can you see?",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "338",
         "ChrID": "1",
         "DlgTxt" :"If you stop chewing my ear off, I’ll tell you.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "339",
         "ChrID": "2",
         "DlgTxt" :"Kate, just look through his bloody account.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "340",
         "ChrID": "1",
         "DlgTxt" :"Okay, I can see his photos.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "341",
         "ChrID": "2",
         "DlgTxt" :"Woman, for fuck sake!! See if you can find his number or any personal information. What will I do with the photos?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "342",
         "ChrID": "2",
         "DlgTxt" :"I don’t have patience for your lousiness. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate angrily hands the phone to Zach.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "343",
         "ChrID": "2",
         "DlgTxt" :"Viola! I found his email address and his number.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "344",
         "ChrID": "1",
         "DlgTxt" :"Bloody great!",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "345",
         "ChrID": "2",
         "DlgTxt" :"Now, let’s see if we can find where he lives.",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "346",
         "ChrID": "1",
         "DlgTxt" :"How would you do that?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "347",
         "ChrID": "2",
         "DlgTxt" :"Watch me perform magic.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "348",
         "ChrID": "1",
         "DlgTxt" :"Kate: You can go drown yourself.",
         "ExpID" :"107,0",
         "DType" :""
         },
         {
         "DID" : "349",
         "ChrID": "2",
         "DlgTxt" :"This number belongs to the operator AirViv whose Managing Director is a close friend of mine.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" : "Zach calls up Mike Kent.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" : "Zach: Hi, Mike. How are you?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" : "Mike: I’m so sorry I heard about the robbery and about Jesse on the news.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" : "Zach: I appreciate it, I really need a favour.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" : "Mike: Anything.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach: I have this number that belongs to your network and I need every detail of the number.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Mike: Okay. Send me the number and I will send you all the details.",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach: Thanks a lot.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Mike: Let me know if I can help you out with anything else.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach: Sure Mikey, Thanks a lot.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach gives the phone to Kate and fires up his laptop again and impatiently waits for the email.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach receives the mail.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "350",
         "ChrID": "2",
         "DlgTxt" :"YES!! I got it.",
         "ExpID" :"0,208",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate and Zach and a police officer rings the bell.The door opens.",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "351",
         "ChrID": "2",
         "DlgTxt" :"Hi, Jason Clearwater…. Nice to meet you. ",
         "ExpID" :"201,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Jason upon seeing Zach tries to shut the door and runs but Zach jams his foot between the door refraining Jason from shutting the door completely and runs behind Jason.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach while running for Jason: You cover the backdoor.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach runs behind Jason and grabs hold of him and forcefully makes him sit on the sofa. The assistant police officer and Kate from the backdoor join Zach in the living room.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "352",
         "ChrID": "2",
         "DlgTxt" :"Having the time of your life, with the hard-earned money that you robbed me of? ",
         "ExpID" :"205,0,0,0",
         "DType" :""
         },
         {
         "DID" : "353",
         "ChrID": "2",
         "DlgTxt" :"Kate… calm the fuck down. Let me talk to him before you make him unfit.",
         "ExpID" :"0,109,0,0",
         "DType" :""
         },
         {
         "DID" : "354",
         "ChrID": "7",
         "DlgTxt" :"Please control ma’am. You can’t take the law into your own hands.",
         "ExpID" :"209,0,0,205",
         "DType" :""
         },
         {
         "DID" : "355",
         "ChrID": "2",
         "DlgTxt" :"Are you okay, can I let you go? Will you behave?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "356",
         "ChrID": "1",
         "DlgTxt" :"Yeah, I am calm, you can let me go now. I will behave.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach turns towards Jason: Where is Jesse?... Wait that’s not her real name, is it?",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "357",
         "ChrID": "7",
         "DlgTxt" :"Talk motherfucker!!",
         "ExpID" :"0,0,0,205",
         "DType" :""
         },
         {
         "DID" : "358",
         "ChrID": "1",
         "DlgTxt" :"Do you want another punch in the face?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "359",
         "ChrID": "2",
         "DlgTxt" :"Hold on, this time I want that privilege.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "360",
         "ChrID": "7",
         "DlgTxt" :"Can you two hold on for a sec, here. ",
         "ExpID" :"0,0,0,207",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Assistant Police Officer turns towards Jason.",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "361",
         "ChrID": "7",
         "DlgTxt" :"Do you want me to unleash these two on you or you will talk?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "362",
         "ChrID": "6",
         "DlgTxt" :"No, please don’t. This bitch caused hell of pain.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "363",
         "ChrID": "2",
         "DlgTxt" :"Don’t call her bitch.",
         "ExpID" :"207,0,0,0",
         "DType" :""
         },
         {
         "DID" : "364",
         "ChrID": "6",
         "DlgTxt" :"Then try to control your woman.",
         "ExpID" :"0,0,209,0",
         "DType" :""
         },
         {
         "DID" : "365",
         "ChrID": "2",
         "DlgTxt" :"I’m not anybody’s woman. Quit stalling. Tell us where Jesse is!",
         "ExpID" :"0,103,0,0",
         "DType" :""
         },
         {
         "DID" : "366",
         "ChrID": "6",
         "DlgTxt" :"I don’t know.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "367",
         "ChrID": "2",
         "DlgTxt" :"He really needs some encouragement.",
         "ExpID" :"203,0,0,0",
         "DType" :""
         },
         {
         "DID" : "368",
         "ChrID": "1",
         "DlgTxt" :"Where do you want me to aim this time?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "369",
         "ChrID": "6",
         "DlgTxt" :"No, I really don’t know.",
         "ExpID" :"0,0,205,0",
         "DType" :""
         },
         {
         "DID" : "370",
         "ChrID": "7",
         "DlgTxt" :"Now, I also think he needs some encouragement. Kate?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "371",
         "ChrID": "6",
         "DlgTxt" :"No, no, I really don’t know. That’s how Liza works.",
         "ExpID" :"0,0,205,0",
         "DType" :""
         },
         
         {
         "DID" : "372",
         "ChrID": "2",
         "DlgTxt" :"Her name is Liza?",
         "ExpID" :"206,0,0,0",
         "DType" :""
         },
         {
         "DID" : "373",
         "ChrID": "6",
         "DlgTxt" :"Yeah. After a heist is complete, she disappears. She only contacts us. We are not supposed to contact her.",
         "ExpID" :"0,0,209,0",
         "DType" :""
         },
         {
         "DID" : "374",
         "ChrID": "2",
         "DlgTxt" :"So, you are a sitting duck, right now? ",
         "ExpID" :"207,104,0,0",
         "DType" :""
         },
         {
         "DID" : "375",
         "ChrID": "1",
         "DlgTxt" :"How long does she take to contact you after a heist is complete?",
         "ExpID" :"209,0,0,0",
         "DType" :""
         },
         {
         "DID" : "376",
         "ChrID": "6",
         "DlgTxt" :"It depends. When the target is ripe and plum and ready to be exploited, she will contact us.",
         "ExpID" :"0,0,210,0",
         "DType" :""
         },
         {
         "DID" : "377",
         "ChrID": "2",
         "DlgTxt" :"Wow, describe us as vulnerable targets, why don’t know?",
         "ExpID" :"205,0,0,0",
         "DType" :""
         },
         {
         "DID" : "378",
         "ChrID": "7",
         "DlgTxt" :"What do you do in between your calls?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "379",
         "ChrID": "6",
         "DlgTxt" :"Chill and stuff.",
         "ExpID" :"0,0,208,0",
         "DType" :""
         },
         {
         "DID" : "380",
         "ChrID": "2",
         "DlgTxt" :"Obviously, why won’t you? After all, you have worked so hard to rob people. You will need a vacation.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "381",
         "ChrID": "1",
         "DlgTxt" :"Fuck! How can people be so greedy!",
         "ExpID" :"0,103,0,0",
         "DType" :""
         },
         {
         "DID" : "382",
         "ChrID": "2",
         "DlgTxt" :"I agree!",
         "ExpID" :"208,0,0,0",
         "DType" :""
         },
         {
         "DID" : "383",
         "ChrID": "1",
         "DlgTxt" :"I mean, if you can’t earn the conventional way then fucking curb you own fucking needs. Don’t rob people blind who work hard.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "384",
         "ChrID": "2",
         "DlgTxt" :"Thank you, Kate.",
         "ExpID" :"208,0,0,0",
         "DType" :""
         },
         {
         "DID" : "385",
         "ChrID": "6",
         "DlgTxt" :"Well, I can clearly say no one will try to rob you blind with the money you earn.",
         "ExpID" :"0,0,209,0",
         "DType" :""
         },
         {
         "DID" : "386",
         "ChrID": "7",
         "DlgTxt" :"You are really asking for it. And this time I won’t stop her.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "387",
         "ChrID": "2",
         "DlgTxt" :"Were you working alone with Liza or was there anyone else apart from you two?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Jason lows down at his feet to avoid answering the question.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "388",
         "ChrID": "7",
         "DlgTxt" :"Need I remind you, if you cooperate I will cut you a better deal. You will face less time in prison and you can get out early on good behaviour.",
         "ExpID" :"0,0,0,205",
         "DType" :""
         },
         {
         "DID" : "389",
         "ChrID": "1",
         "DlgTxt" :"No! Why would you do that? He fucking deserves to rot in jail his whole life.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "390",
         "ChrID": "2",
         "DlgTxt" :"Kate, I appreciate your sentiments, but it doesn’t work that way.",
         "ExpID" :"0,104,0,0",
         "DType" :""
         },
         {
         "DID" : "391",
         "ChrID": "7",
         "DlgTxt" :"So, Jason? What do you want to do? You know helping us is the right choice, here.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "392",
         "ChrID": "6",
         "DlgTxt" :"You have no evidence against me. You can’t do shit.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "393",
         "ChrID": "2",
         "DlgTxt" :"True. Even when I’m robbed blind I’m still a very influential man and many powerful people owe me big favours. Your Liza made a big mistake, she messed with the wrong person.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "394",
         "ChrID": "1",
         "DlgTxt" :"What will you do?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "395",
         "ChrID": "2",
         "DlgTxt" :"Oh, nothing. I will put Jason Clearwater’s name in all right places in all the wrong files. You will be charged with assault, battery, theft, murder, rape. We will remove the accused victim’s name and put Mr. Clearwater’s name.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "396",
         "ChrID": "6",
         "DlgTxt" :"You can’t do that. Officer tell him that!",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "397",
         "ChrID": "7",
         "DlgTxt" :"I didn’t hear anything. Did you Kate?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "398",
         "ChrID": "1",
         "DlgTxt" :"Nope, not a word.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "399",
         "ChrID": "6",
         "DlgTxt" :"This is outrageous!! This is blackmail, you are threatening me.",
         "ExpID" :"0,0,210,0",
         "DType" :""
         },
         {
         "DID" : "400",
         "ChrID": "1",
         "DlgTxt" :"Guess, what! What goes around comes around.",
         "ExpID" :"0,102,0,0",
         "DType" :""
         },
         {
         "DID" : "401",
         "ChrID": "2",
         "DlgTxt" :"So, Jason? Are you willing to talk?",
         "ExpID" :"205,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Jason(chuckles): What do you think?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Assistant Police Officer (over the phone): Need backup on Street 51.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"The cops arrive, and Jason is arrested. ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate and Zach stand on the other side of the interrogating room waiting for Jason to speak up.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"The interrogating officer comes out of the room and gives a brief informing Zach about what Jason speaks. ",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "402",
         "ChrID": "8",
         "DlgTxt" :"That guy in there took the name Sam… You know anybody named Sam?",
         "ExpID" :"203,0,0",
         "DType" :""
         },
         {
         "DID" : "403",
         "ChrID": "2",
         "DlgTxt" :"No, officer can’t you ask him for an address or any phone number, some photo???",
         "ExpID" :"0,206,0",
         "DType" :""
         },
         {
         "DID" : "404",
         "ChrID": "8",
         "DlgTxt" :"Already done that… here’s the address of Sam, lives in London.",
         "ExpID" :"208,0,104",
         "DType" :""
         },
         {
         "DID" : "405",
         "ChrID": "2",
         "DlgTxt" :"London, that’s a 9-hour drive from here",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "406",
         "ChrID": "1",
         "DlgTxt" :"Yes, so when do we leave?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "407",
         "ChrID": "2",
         "DlgTxt" :"Yes, I guess we leave today.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "408",
         "ChrID": "1",
         "DlgTxt" :"Right now?",
         "ExpID" :"0,0,103",
         "DType" :""
         },
         {
         "DID" : "409",
         "ChrID": "8",
         "DlgTxt" :" I doubt that, you might want to wait for a day as per the weather forecast or you might have to stop midway or worst you might even be stranded.",
         "ExpID" :"205,0,0",
         "DType" :""
         },
         {
         "DID" : "410",
         "ChrID": "2",
         "DlgTxt" :"Never mind the weather, I will take my chances.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "411",
         "ChrID": "8",
         "DlgTxt" :"I could arrange a search for this Sam in London by communicating with the local police out there.",
         "ExpID" :"0,0,106",
         "DType" :""
         },
         {
         "DID" : "412",
         "ChrID": "2",
         "DlgTxt" :"No, Thanks for all you have done,officer.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate and Zach leave for London.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate turns on the radio.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Over the radio: It has been confirmed by the Weather Department that tonight will be the highest recorded rainfall in England till date. ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "413",
         "ChrID": "2",
         "DlgTxt" :"No way I’m stopping. I want that bitch behind bars as soon as possible.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "414",
         "ChrID": "1",
         "DlgTxt" :"Okay tiger, whatever.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "415",
         "ChrID": "2",
         "DlgTxt" :"Yeah.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate (Switches to a romantic song): Humming alongZach joins her.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"While leaving, on the outskirts of the city Zach is asked to pull over by a police officer.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "416",
         "ChrID": "2",
         "DlgTxt" :"Zach: What’s the matter officer?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "417",
         "ChrID": "9",
         "DlgTxt" :"Officer: Don’t you watch the news or listen to the radio? ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "418",
         "ChrID": "2",
         "DlgTxt" :"Zach: I don’t understand what you are asking.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "419",
         "ChrID": "9",
         "DlgTxt" :"Officer: Do you have a death wish?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "420",
         "ChrID": "2",
         "DlgTxt" :"Zach: I’m wishing death on someone.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "421",
         "ChrID": "9",
         "DlgTxt" :"Officer: I beg your pardon?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "422",
         "ChrID": "2",
         "DlgTxt" :"Zach: Nothing, officer. Why did you ask me to pullover?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "423",
         "ChrID": "9",
         "DlgTxt" :"Officer: Because of the weather. There is a high alert, civilians are advised to stay inside. And your wife here, looks like she is freezing. ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "424",
         "ChrID": "2",
         "DlgTxt" :"Zach: She is---",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "425",
         "ChrID": "1",
         "DlgTxt" :"Kate: I’m not his wife.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "426",
         "ChrID": "9",
         "DlgTxt" :"Officer: You are, not? Anyways, where are you guys heading to?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "427",
         "ChrID": "2",
         "DlgTxt" :"Zach: London.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "428",
         "ChrID": "9",
         "DlgTxt" :"Officer: I’m sorry. I can’t allow you guys to drive ahead. This is for your own safety.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "0",
         "DlgTxt" :"Zach gets infuriated and gets out of the car..",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "429",
         "ChrID": "2",
         "DlgTxt" :"What do you mean you cannot allow us to go ahead? Do you know who I’m??",
         "ExpID" :"207,206",
         "DType" :""
         },
         {
         "DID" : "430",
         "ChrID": "9",
         "DlgTxt" :"Sir, please step back or you may be arrested for assaulting a police officer on duty.",
         "ExpID" :"0,210",
         "DType" :""
         },
         {
         "DID" : "431",
         "ChrID": "2",
         "DlgTxt" :" Are you threatening me right now? ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "432",
         "ChrID": "8",
         "DlgTxt" :"No, just informing you. Sir, please get back into the vehicle and drive back.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate talks from inside the car.",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "433",
         "ChrID": "1",
         "DlgTxt" :"Kate: Officer, please let us go. We need to be in London. This is crucial, it is very important. ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "434",
         "ChrID": "2",
         "DlgTxt" :"Zach: Kate, shut up. I’m handling this.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "435",
         "ChrID": "1",
         "DlgTxt" :"Kate: Do not talk to me like that. And I can see how well you are handling things. ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "436",
         "ChrID": "2",
         "DlgTxt" :"Zach: Like you can handle this any better.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "437",
         "ChrID": "9",
         "DlgTxt" :"Officer: Sir, Ma’am, I’ll have to stop you right there. You can do this on our own time. And are you sure you guys aren’t married?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "438",
         "ChrID": "2",
         "DlgTxt" :"Zach: What?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "439",
         "ChrID": "9",
         "DlgTxt" :"Officer: Never mind.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"While the conversation between Zach and the officer was going on, Kate had moved to the driver seat.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate shouts: Zach, get in.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach turns around and sees Kate in the driving seat, hurriedly he goes towards the back seat of the car.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "440",
         "ChrID": "9",
         "DlgTxt" :"Officer: Sir!!!",
         "ExpID" :"",
         "DType" :""
         }, 
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Hardly does he reach the backseat, Kate hits the gas pedal hard and speeds off on their way to London.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "441",
         "ChrID": "",
         "DlgTxt":" Kate, step on it harder, he is right on our tail. And just so you know, I’m going to pay for that.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "442",
         "ChrID": "1",
         "DlgTxt" :"Oh, admit it, you had fun.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "443",
         "ChrID": "2",
         "DlgTxt" :"I would never.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "444",
         "ChrID": "1",
         "DlgTxt" :"Would it be too much for your ego to admit? And please, shut the door.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach shuts the door with a loud bang.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "445",
         "ChrID": "2",
         "DlgTxt" :"Woman, you are behind my life. So, fine, it was a thrilling experience.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "446",
         "ChrID": "2",
         "DlgTxt" :"Something you have never experience in your life before?",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "447",
         "ChrID": "2",
         "DlgTxt" :"Now, you are pushing it.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "448",
         "ChrID": "1",
         "DlgTxt" :"This is what I get for risking my life? Not a thank you also?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "449",
         "ChrID": "2",
         "DlgTxt" :"Thanks for sticking by. And thank you, for being a major support throughout these tumultuous times. I wouldn’t be able to do it alone.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "450",
         "ChrID": "1",
         "DlgTxt" :"Obviously not. You are Zach, The Legend. You can do anything.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "451",
         "ChrID": "2",
         "DlgTxt" :"No, I can’t do everything. I obviously, can’t make anyone love me.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate is silent for a second.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "452",
         "ChrID": "2",
         "DlgTxt" :"You know, why I married Jesse after knowing her for such a short period of time?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "453",
         "ChrID": "1",
         "DlgTxt" :"No?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "454",
         "ChrID": "2",
         "DlgTxt" :" Because I was so tired of being alone. I hate it.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "455",
         "ChrID": "1",
         "DlgTxt" :" Oh, I never would have guessed.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "456",
         "ChrID": "2",
         "DlgTxt" :"Yeah, I’m good at hiding my emotions.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "457",
         "ChrID": "1",
         "DlgTxt" :"You are. You make it seem you don’t need people.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "458",
         "ChrID": "2",
         "DlgTxt" :"I can’t let anyone know how I feel. That’s how I’ve been brought up.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "459",
         "ChrID": "1",
         "DlgTxt" :"What do you mean?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "460",
         "ChrID": "2",
         "DlgTxt" :"My father ingrained it into from a very young age that emotions gets you into trouble.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "461",
         "ChrID": "1",
         "DlgTxt" :"Oh, how do you figure?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "462",
         "ChrID": "2",
         "DlgTxt": "It was determined from a very young age that I was going to handle the global empire. And don’t get me wrong, I enjoy what I do. I would have chosen this career path myself.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "463",
         "ChrID": "1",
         "DlgTxt" :"But?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "464",
         "ChrID": "2",
         "DlgTxt" :"But I would have liked a little bit more freedom.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate pullover on the side of the road and gets into the backseat of the car with Zach.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "465",
         "ChrID": "2",
         "DlgTxt" :"Why did you pullover? Is the officer still chasing?",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "466",
         "ChrID": "1",
         "DlgTxt" :"I lost him long time ago, now scoot a little bit.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "467",
         "ChrID": "2",
         "DlgTxt" :"Then why did you pullover?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "468",
         "ChrID": "1",
         "DlgTxt" :"Because it seemed like you needed a hug.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate hugs Zach very tight and comforts him.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach with a lump in his throat says: Thank you.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "469",
         "ChrID": "1",
         "DlgTxt" :"Anytime and thank you for sharing this with me. It means a lot.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"They stay in each other’s arms for a moment.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "470",
         "ChrID": "1",
         "DlgTxt" :"Do you have anything to eat in your car, because I am famished.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "471",
         "ChrID": "2",
         "DlgTxt" :"Its my car, not my house.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "472",
         "ChrID": "1",
         "DlgTxt" :"Any idea where would I get anything to satisfy my hunger?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "473",
         "ChrID": "2",
         "DlgTxt" :"Umm… at 3 in the morning, it might be difficult plus it’s raining cats and dogs.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "474",
         "ChrID": "1",
         "DlgTxt" :"Turns out the Weather Forecast Department isn’t always wrong.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "475",
         "ChrID": "2",
         "DlgTxt" :"We can do one thing.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "476",
         "ChrID": "1",
         "DlgTxt" :"What?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "477",
         "ChrID": "2",
         "DlgTxt" :" Lets find a hotel nearest to us.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "478",
         "ChrID": "1",
         "DlgTxt" :"Oh, now you’re planning to stay? Huh?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "479",
         "ChrID": "2",
         "DlgTxt" :"No idiot, so that we might get food.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "480",
         "ChrID": "1",
         "DlgTxt" :"Which hotel will provide food at 3 in the morning?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "481",
         "ChrID": "2",
         "DlgTxt" :"For a sensitive woman you’re annoying as hell, you ask too many questions.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "482",
         "ChrID": "1",
         "DlgTxt" :"What the fuck is that supposed to mean? I’m not supposed to question Zach, THE LEGEND?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "483",
         "ChrID": "2",
         "DlgTxt" :"Will you stop with that stupid name? And no, don’t question me because it always ends up into a fight.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "484",
         "ChrID": "1",
         "DlgTxt" :"So, answer the fucking question and it won’t end up into a fight.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "485",
         "ChrID": "2",
         "DlgTxt" :"Fuck, Kate! Use your common sense.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "486",
         "ChrID": "1",
         "DlgTxt" :"Clearly, I can’t. So, tell me already.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "487",
         "ChrID": "2",
         "DlgTxt" :"I’ll get you food.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "488",
         "ChrID": "1",
         "DlgTxt" :"Again, how? It is 3 in the morning.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "489",
         "ChrID": "2",
         "DlgTxt" :"Kate! Just trust me.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "490",
         "ChrID": "1",
         "DlgTxt" :"Fine. I’m trusting you. I want food.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "491",
         "ChrID": "2",
         "DlgTxt" :"Music to my ears.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "492",
         "ChrID": "1",
         "DlgTxt" :"Shut up. Now, move already.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "493",
         "ChrID": "2",
         "DlgTxt" :"Yes, woman, moving.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt":" Zach and Kate reach a nearby hotel. They enter the motel.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "494",
         "ChrID": "2",
         "DlgTxt" :"God, this is a such a shabby motel. Let’s go someplace else.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "495",
         "ChrID": "1",
         "DlgTxt" :" Don’t be crazy. Where will you find any other place in this god forsaken weather?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "496",
         "ChrID": "2",
         "DlgTxt" :"Are you sure?",
         "ExpID" :"207,104",
         "DType" :""
         },
         {
         "DID" : "497",
         "ChrID": "1",
         "DlgTxt" :" I’m, but I’m not sure we’ll get a room?",
         "ExpID" :"206,104",
         "DType" :""
         },
         {
         "DID" : "498",
         "ChrID": "2",
         "DlgTxt" :"Why?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "499",
         "ChrID": "1",
         "DlgTxt" :"The receptionist appears to be sleeping.",
         "ExpID" :"205,102",
         "DType" :""
         },
         {
         "DID" : "500",
         "ChrID": "2",
         "DlgTxt" :" Don’t worry.",
         "ExpID" :"209,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach walks up to the front desk and tries waking up the receptionist.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "501",
         "ChrID": "2",
         "DlgTxt" :"Excuse me, Miss?",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"The receptionist doesn’t wake up.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "502",
         "ChrID": "2",
         "DlgTxt" :"Miss?",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "503",
         "ChrID": "1",
         "DlgTxt" :"Maybe you should try talking to her little loudly.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt":"Zach raising his voice another octave: Miss?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt": "Kate frustrated bangs hard on the desk.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "504",
         "ChrID": "2",
         "DlgTxt" :"Kate!",
         "ExpID" :"202,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt":"(kelly):Receptionist wakes up startled.",
         "ExpID" :"",
         "DType" :""
         },
         
         
         
         {
         "DID" : "505",
         "ChrID": "10",
         "DlgTxt" :"Huh? Yes, what?",
         "ExpID" :"0,0,103",
         "DType" :""
         },
         {
         "DID" : "506",
         "ChrID": "2",
         "DlgTxt" :"Was that necessary? You scared the woman to death.",
         "ExpID" :"209,0,0",
         "DType" :""
         },
         {
         "DID" : "507",
         "ChrID": "1",
         "DlgTxt" :"You should thank me, or else we would be standing here with sun warming our backs.",
         "ExpID" :"202,109,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Receptionist just stares at Zach",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate in a mean tone: You get paid to sleep on the job?",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "508",
         "ChrID": "2",
         "DlgTxt" :"Kate! For the love of god, woman! Please, excuse my friend’s rudeness here.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "509",
         "ChrID": "10",
         "DlgTxt" :"Receptionist: What can I do for you?",
         "ExpID" :"0,111,104",
         "DType" :""
         },
         {
         "DID" : "510",
         "ChrID": "2",
         "DlgTxt" :"We would like to book two rooms, please.",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         {
         "DID" : "511",
         "ChrID": "1",
         "DlgTxt" :"Please, don’t tell me only one room is available, it would be a scene straight out of a romance novel.",
         "ExpID" :"0,110,103",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt":"Receptionist looking at Zach: No, we have two rooms available.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "512",
         "ChrID": "2",
         "DlgTxt" :"Lovely.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "513",
         "ChrID": "10",
         "DlgTxt" :" Under what name should I register the rooms?",
         "ExpID" :"0,0,105",
         "DType" :""
         },
         {
         "DID" : "514",
         "ChrID": "2",
         "DlgTxt" :"Zach Darby.",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         {
         "DID" : "515",
         "ChrID": "10",
         "DlgTxt" :"Wow, what a lovey name. My name is Kelly.",
         "ExpID" :"0,0,112",
         "DType" :""
         },
         
         
         {
         "DID" : "516",
         "ChrID": "2",
         "DlgTxt" :"Hi, Kelly. You have a lovely name too.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt":"Kelly blushes: Thank you. How are you out in such a weather?",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "517",
         "ChrID": "2",
         "DlgTxt" :"Work calls. ",
         "ExpID" :"208,0,0",
         "DType" :""
         },
         {
         "DID" : "518",
         "ChrID": "10",
         "DlgTxt" :"Such a fine man, you shouldn’t risk your life like this.",
         "ExpID" :"0,0,112",
         "DType" :""
         },
         {
         "DID" : "519",
         "ChrID": "2",
         "DlgTxt" :"Tell that to my manager.",
         "ExpID" :"203,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt":"Kate whispers: Manager?",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "520",
         "ChrID": "2",
         "DlgTxt" :"Shut up.",
         "ExpID" :"207,0,0",
         "DType" :""
         },
         {
         "DID" : "521",
         "ChrID": "1",
         "DlgTxt"  :"If this spectacular meet-up is done, can we please go? I’m damn hungry.",
         "ExpID" :"0,102,0",
         "DType" :""
         },
         {
         "DID" : "522",
         "ChrID": "2",
         "DlgTxt" :"Speaking of food, my friend here is very hungry. If she doesn’t eat anything soon, she will have restored to cannibalism. And I want to avoid it if possible.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "523",
         "ChrID": "10",
         "DlgTxt" :"Obviously, we wouldn’t want that. I’ll wake up Mark, our cook. Or I’ll bring something up ASAP.",
         "ExpID" :"206,104,111",
         "DType" :""
         },
         {
         "DID" : "524",
         "ChrID": "2",
         "DlgTxt" :" You are such a sweetheart.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "525",
         "ChrID": "10",
         "DlgTxt" :"Thank you. Here, are your keys. I can show you the rooms if you want.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "526",
         "ChrID": "2",
         "DlgTxt" :"Kate, what has gotten into you?!",
         "ExpID" :"207,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt":"While both are walking upstairs, Kate whispers.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "527",
         "ChrID": "1",
         "DlgTxt" :"God, unprofessional, much?",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "528",
         "ChrID": "2",
         "DlgTxt" :" What are you talking about?",
         "ExpID" :"205,104",
         "DType" :""
         },
         {
         "DID" : "529",
         "ChrID": "1",
         "DlgTxt" :"Obviously.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "530",
         "ChrID": "2",
         "DlgTxt" :"You are talking in circles.",
         "ExpID" :"203,104",
         "DType" :""
         },
         {
         "DID" : "531",
         "ChrID": "1",
         "DlgTxt" :"Forget it. Make sure your Kelly gets my food. I’m going to faint any minute now.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "532",
         "ChrID": "2",
         "DlgTxt" :"Cue drama. Here is your key. I’ll make sure she gets your food asap.",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt":"Kate bats her eyelashes and says: You are a sweetheart.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "533",
         "ChrID": "2",
         "DlgTxt" :" What?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "534",
         "ChrID": "1",
         "DlgTxt" :"What? I don’t get called sweetheart in return?",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "535",
         "ChrID": "2",
         "DlgTxt" :"You are sweetheart, Kate, there.",
         "ExpID" :"206,102",
         "DType" :""
         },
         {
         "DID" : "536",
         "ChrID": "1",
         "DlgTxt" :"Whatever.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt":"Kate goes inside her room and locks the door behind her.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt":"Zach shakes his head.Woman!",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt":"Kate freezing tries to find the switch for the heater.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt":"Kate muttering to herself: Where is the goddamn switch to the heater?",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "538",
         "ChrID": "1",
         "DlgTxt" :" HA! Found it! Why is the heater not blasting?",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "539",
         "ChrID": "1",
         "DlgTxt" :"God damn it!",
         "ExpID" :"106",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt":"Kate rushes out of her room and knocks frantically on the Zach’s door.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "540",
         "ChrID": "1",
         "DlgTxt" :"Zach! Zach! Where the hell did you go?",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "541",
         "ChrID": "1",
         "DlgTxt" :"Zach!",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach rushes to open the door",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "542",
         "ChrID": "2",
         "DlgTxt" :"Hold your horses! What the hell happened?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "543",
         "ChrID": "1",
         "DlgTxt" :"The heater is not working in my room. Is it working in your room?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "544",
         "ChrID": "2",
         "DlgTxt" :"Yeah, it’s warm and toasty!",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "545",
         "ChrID": "1",
         "DlgTxt" :"Are you kidding me? That bitch did it on purpose.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "546",
         "ChrID": "2",
         "DlgTxt" :"What?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "547",
         "ChrID": "1",
         "DlgTxt" :"She gave me a room with a non-working heater.",
         "ExpID" :"0,109",
         "DType" :""
         },
         {
         "DID" : "548",
         "ChrID": "2",
         "DlgTxt" :"Now, why would she do that? And remember, I gave you the key to the room, not her.",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "549",
         "ChrID": "1",
         "DlgTxt" :"Don’t take her side. It makes it worse. Let’s go down and ask her to fix it.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "550",
         "ChrID": "2",
         "DlgTxt" :"You sit in my room, I’ll go down and ask her.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "551",
         "ChrID": "1",
         "DlgTxt" :"No, I’ll come.",
         "ExpID" :"0,111",
         "DType" :""
         },
         {
         "DID" : "552",
         "ChrID": "2",
         "DlgTxt" :" Okay, suit yourself.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate and Zach walk down to the front desk.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "553",
         "ChrID": "1",
         "DlgTxt" :"She is not here, again. I’m fucking freezing.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "554",
         "ChrID": "2",
         "DlgTxt" :"Will you relax? Why are so annoyed since you entered this motel?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "555",
         "ChrID": "2",
         "DlgTxt" :"Kelly!",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "556",
         "ChrID": "10",
         "DlgTxt" :"Yeah?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "557",
         "ChrID": "2",
         "DlgTxt" :"Kelly,the heater in Kate’s room is not working,can you send anyone to repair it?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "558",
         "ChrID": "10",
         "DlgTxt" :"It stopped working again? ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "559",
         "ChrID": "1",
         "DlgTxt" :"What do you mean it stopped working again?",
         "ExpID" :"203,0,0",
         "DType" :""
         },
         {
         "DID" : "560",
         "ChrID": "10",
         "DlgTxt" :"We are having problem with that heater since ages. It keeps on malfunctioning.",
         "ExpID" :"207,0,109",
         "DType" :""
         },
         {
         "DID" : "561",
         "ChrID": "1",
         "DlgTxt" :"Awesome. Now, what are we supposed to do?",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "562",
         "ChrID": "2",
         "DlgTxt" :"Can you send someone to repair it temporarily?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "563",
         "ChrID": "10",
         "DlgTxt" :"Not at the moment. We have a house cook so meals can be provided but a handy man can deal with this. And that can only be dealt with in the morning.",
         "ExpID" :"206,0,104",
         "DType" :""
         },
         {
         "DID" : "564",
         "ChrID": "2",
         "DlgTxt" :"Okay, thanks, Kelly.",
         "ExpID" :"205,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate and Zach walk back to their rooms.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "565",
         "ChrID": "1",
         "DlgTxt" :"Shit, it is fucking freezing.",
         "ExpID" :"0,104",
         "DType" :""
         },
         
         {
         "DID" : "566",
         "ChrID": "2",
         "DlgTxt" :"I know.We’ll share a room,come.",
         "ExpID" :"206,0",
         "DType" :""
         },
         
         {
         "DID" : "567",
         "ChrID": "1",
         "DlgTxt" :"Are you crazy?!",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "568",
         "ChrID": "2",
         "DlgTxt" :"Do you want to freeze to death?",
         "ExpID" :"209,0",
         "DType" :""
         },
         {
         "DID" : "569",
         "ChrID": "1",
         "DlgTxt" :"You can take my room",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "570",
         "ChrID": "2",
         "DlgTxt" :"I’m a gentleman not stupid.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "571",
         "ChrID": "1",
         "DlgTxt" :"But----",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "572",
         "ChrID": "2",
         "DlgTxt" :"Listen, it is a very generous offer, but you are welcome to freeze to death, if you want.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach walks inside is room but leaves the door open.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate is still standing in the corridor contemplating.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "573",
         "ChrID": "2",
         "DlgTxt" :"You are really contemplating?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "574",
         "ChrID": "1",
         "DlgTxt" :"Fine, I’m coming.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "575",
         "ChrID": "2",
         "DlgTxt" :"Thank you, I don’t want your death on my conscious.",
         "ExpID" :"209,0",
         "DType" :""
         },
         {
         "DID" : "576",
         "ChrID": "1",
         "DlgTxt" :" Sometimes I can’t believe how rude you can be.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "577",
         "ChrID": "2",
         "DlgTxt" :" It’s okay, you can take your time.",
         "ExpID" :"210,0",
         "DType" :""
         },
         {
         "DID" : "578",
         "ChrID": "1",
         "DlgTxt" :"Jerk!",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "579",
         "ChrID": "2",
         "DlgTxt" :"You are welcome. You can use the restroom to freshen up, if you want.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         
         
         {
         "DID" : "580",
         "ChrID": "1",
         "DlgTxt" :"I’ll do that.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate comes out of the bathroom.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "581",
         "ChrID": "2",
         "DlgTxt" :"Your food is on the table. It was delivered while you were in the bathroom.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "582",
         "ChrID": "1",
         "DlgTxt" :"Oh,food! Thank god, my insides were shrivelling up and dying.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "583",
         "ChrID": "2",
         "DlgTxt" :"Cue drama!",
         "ExpID" :"207,0",
         "DType" :""
         },
         {
         "DID" : "584",
         "ChrID": "1",
         "DlgTxt" :"Shut up! Let me eat my food in peace.",
         "ExpID" :"0,109",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate eats a bite of her burger.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "585",
         "ChrID": "1",
         "DlgTxt" :"God, this is delicious.Your Kelly can cook.",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "586",
         "ChrID": "2",
         "DlgTxt" :"She is not my Kelly.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "587",
         "ChrID": "1",
         "DlgTxt" :"Seemed like that to me. By The Way, what are you doing on your phone?",
         "ExpID" :"0,109",
         "DType" :""
         },
         {
         "DID" : "588",
         "ChrID": "2",
         "DlgTxt" :"I’m checking the weather forecast.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "589",
         "ChrID": "1",
         "DlgTxt" :"What does it say? Will the weather clear up?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "589",
         "ChrID": "1",
         "DlgTxt" :"What does it say? Will the weather clear up?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "590",
         "ChrID": "2",
         "DlgTxt" :"It should by morning.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "591",
         "ChrID": "1",
         "DlgTxt" :"Awesome. Yum, this is so good. You should really take a bite?",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "592",
         "ChrID": "2",
         "DlgTxt" :"No,I’m good.You enjoy.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "593",
         "ChrID": "1",
         "DlgTxt" :"No, really. Here, take a bite.",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "594",
         "ChrID": "2",
         "DlgTxt" :"Kate,I don’t want to. I don’t feel like eating.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "595",
         "ChrID": "1",
         "DlgTxt" :"Zach,for heaven’s sake,just take a bite.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "596",
         "ChrID": "2",
         "DlgTxt" :"Kate, I don’t want to.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"In their struggle, the burger is tossed out of Kate’s hands and their faces come very close to each other abruptly.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "597",
         "ChrID": "1",
         "DlgTxt" :"Oh! I’m sorry.",
         "ExpID" :"0,110",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate tries to slowly back away, but Zach pulls her towards him and they kiss each other.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"They end up spending the night together.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Next morning",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate and Zach are sitting in a diner having breakfast together.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID": "598",
         "ChrID": "1",
         "DlgTxt" :"How is that bacon?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "599",
         "ChrID": "2",
         "DlgTxt" :"Good, you want a bite?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "600",
         "ChrID": "1",
         "DlgTxt" :" I can taste.",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "601",
         "ChrID": "10",
         "DlgTxt" :" How’s it going guys? Did you have a good night?",
         "ExpID" :"0,103,104",
         "DType" :""
         },
         {
         "DID" : "602",
         "ChrID": "2",
         "DlgTxt" :"Yeah… I did really have a good night",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "603",
         "ChrID": "10",
         "DlgTxt" :"And how is the breakfast?",
         "ExpID" :"0,0,112",
         "DType" :""
         },
         {
         "DID" : "604",
         "ChrID": "2",
         "DlgTxt" :"Oh it’s nice… the bacon especially.",
         "ExpID" :"208,0,0",
         "DType" :""
         },
         {
         "DID" : "605",
         "ChrID": "10",
         "DlgTxt" :"Did your sister like it?",
         "ExpID" :"0,104,0",
         "DType" :""
         },
         {
         "DID" : "606",
         "ChrID": "10",
         "DlgTxt" :"Oh,forgive me for misunderstanding.",
         "ExpID" :"0,0,105",
         "DType" :""
         },
         {
         "DID" : "607",
         "ChrID": "2",
         "DlgTxt" :"That’s alright.",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach (turns towards Kate): Here, taste the bacon.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "608",
         "ChrID": "1",
         "DlgTxt" :"No, “It’s alright”",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "609",
         "ChrID": "2",
         "DlgTxt" :"Get me the bill and we’ll checkout now.",
         "ExpID" :"205,0,0",
         "DType" :""
         },
         {
         "DID" : "610",
         "ChrID": "1",
         "DlgTxt" :"Okay,I hope you have a good day.",
         "ExpID" :"0,0,107",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate and Zach leave and get in the car, Kate sits in the back seat.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "611",
         "ChrID": "2",
         "DlgTxt" :"Sit beside me, why are you sitting in the back seat",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "612",
         "ChrID": "1",
         "DlgTxt" :"No,“It’s alright”",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "613",
         "ChrID": "1",
         "DlgTxt" :"Woman,what is your problem?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "614",
         "ChrID": "2",
         "DlgTxt" :"Nothing.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "615",
         "ChrID": "1",
         "DlgTxt" :"I’m not your driver, come, sit in the front.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate doesn’t move from her seat.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "616",
         "ChrID": "2",
         "DlgTxt" :"Kate, now. I don’t have time for this.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate gets out of the back seat and sits in the front.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "617",
         "ChrID": "1",
         "DlgTxt" :"Don’t talk to me like that. Don’t order me around.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "618",
         "ChrID": "2",
         "DlgTxt" :"Then, don’t behave like a child.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "619",
         "ChrID": "1",
         "DlgTxt" :"Then stop flirting with anything that moves.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "620",
         "ChrID": "2",
         "DlgTxt" :"What the fuck do you mean by that?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "621",
         "ChrID": "1",
         "DlgTxt" :"I’ll just say two words, Your precious, Kelly.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "622",
         "ChrID": "2",
         "DlgTxt" :"That’s three words.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "623",
         "ChrID": "1",
         "DlgTxt" :"Seriously, that’s what you want to concentrate on?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "624",
         "ChrID": "2",
         "DlgTxt" :"Kate, can we concentrate on the matter at hand? We can table it for later.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "625",
         "ChrID": "1",
         "DlgTxt" :"What do you want to discuss?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "626",
         "ChrID": "2",
         "DlgTxt" :"What do you think we should do about this Sam guy?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "627",
         "ChrID": "1",
         "DlgTxt" :"I suggest that I act as a potential buyer and frame that asshole and let the police do the rest of the job.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "628",
         "ChrID": "2",
         "DlgTxt" :"I don’t want the police to interfere in any of this.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "629",
         "ChrID": "1",
         "DlgTxt" :"This is London we’re talking about, let the police handle the stuff.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "630",
         "ChrID": "2",
         "DlgTxt" :"Okay,just because you say so,I would just take the help of the police but deciding his fate lies upon my hands.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "631",
         "ChrID": "1",
         "DlgTxt" :"Why?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "632",
         "ChrID": "2",
         "DlgTxt" :"Because my things were stolen, and I think nobody else has the right to decide their fate.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "633",
         "ChrID": "1",
         "DlgTxt" :"Fair enough.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "634",
         "ChrID": "1",
         "DlgTxt" :"Tell me what is it to be like the 1% population of the world?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "635",
         "ChrID": "2",
         "DlgTxt" :"What do you mean?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "636",
         "ChrID": "1",
         "DlgTxt" :"If I am going to act as a buyer, don’t you think I need to be a convincing one?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "637",
         "ChrID": "2",
         "DlgTxt" :"Zach:Yeah, but what do you exactly need to know?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "638",
         "ChrID": "1",
         "DlgTxt" :"How the uppity-tighty women of your world act?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "639",
         "ChrID": "2",
         "DlgTxt" :"Isn’t that being a little prejudiced?",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "640",
         "ChrID": "2",
         "DlgTxt" :"Anyways moving on, you need to know your antiques. For example, a pair of 18th century Louis XIV chairs were stolen. The oval backs have foliated carved crest, over scrolled arms, over bow fronted seat, fluted and ---",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "641",
         "ChrID": "1",
         "DlgTxt" :"Stop right there. That was Greek to me.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "642",
         "ChrID": "2",
         "DlgTxt" :" How else do I make you understand, how else will you be a convincing buyer if you don’t understand the common terms of how to describe an antique?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "643",
         "ChrID": "1",
         "DlgTxt" :"If you talk like a normal man I would understand you.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "644",
         "ChrID": "2",
         "DlgTxt" :"I am talking like a normal man.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "645",
         "ChrID": "1",
         "DlgTxt" :"The fuck, I understood from anything you said.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "646",
         "ChrID": "2",
         "DlgTxt" :"What do you want me to say, a pair of chairs in beige colour with a golden armrest and printed seats?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "647",
         "ChrID": "1",
         "DlgTxt" :"That would work.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "648",
         "ChrID": "2",
         "DlgTxt" :"You’re fucking impossible… but adorable.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "649",
         "ChrID": "1",
         "DlgTxt" :"Thank you.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(They reach Westminster Abbey, London)",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "650",
         "ChrID": "2",
         "DlgTxt" :"Now let’s get you some clothes.",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "651",
         "ChrID": "1",
         "DlgTxt" :"You mean I don’t wear good clothes?",
         "ExpID" :"0,110",
         "DType" :""
         },
         {
         "DID" : "652",
         "ChrID": "2",
         "DlgTxt" :"No, did I tell you that, I mean that a connoisseur of antiques would not wear the clothes that you’ve put on right now.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "653",
         "ChrID": "1",
         "DlgTxt" :"Okay.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Kate changes)",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "654",
         "ChrID": "1",
         "DlgTxt" :"I am ready now I guess we must start finding Sam.",
         "ExpID" :"208,110",
         "DType" :""
         },
         {
         "DID" : "655",
         "ChrID": "2",
         "DlgTxt" :"After one last rehearsal.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "656",
         "ChrID": "1",
         "DlgTxt" :"Ugh!",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "657",
         "ChrID": "2",
         "DlgTxt" :"The Cellarium Café is nearby, let’s go.",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "658",
         "ChrID": "1",
         "DlgTxt" :"Don’t bribe me with food, I’m all set and I won’t fuck up, trust me for once at least.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "659",
         "ChrID": "2",
         "DlgTxt" :"Okay, then let me talk to the cops.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "660",
         "ChrID": "1",
         "DlgTxt" :"Yes please!",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "661",
         "ChrID": "2",
         "DlgTxt" :"Okay so now we’re ready (grins).",
         "ExpID" :"203,0,0",
         "DType" :""
         },
         {
         "DID" : "662",
         "ChrID": "1",
         "DlgTxt" :"Yeah!",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         {
         "DID" : "663",
         "ChrID": "2",
         "DlgTxt" :"Are you sure you remember everything?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "664",
         "ChrID": "14",
         "DlgTxt" :"Here’s the street all the people you meet will be dealers. Take care ma’am and if anything happens you call us.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "665",
         "ChrID": "1",
         "DlgTxt" :"Okay, I got it.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         
         
         {
         "DID" : "666",
         "ChrID": "2",
         "DlgTxt" :"(hugs Kate) Thanks and take care.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "667",
         "ChrID": "1",
         "DlgTxt" :"Yes.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "668",
         "ChrID": "2",
         "DlgTxt" :"And don’t lose your temper, please.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "669",
         "ChrID": "1",
         "DlgTxt" :" Yeah, now can I go?",
         "ExpID" :"0,0,103",
         "DType" :""
         },
         {
         "DID" : "670",
         "ChrID": "2",
         "DlgTxt" :"Hmm.",
         "ExpID" :"0,206,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate is in the market. She asks a shopkeeper.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "671",
         "ChrID": "1",
         "DlgTxt" :"Hi, I have just settled over here and I want to decorate my house but my interior designer is absolutely useless and she bought me some stupid faux chairs. I am looking for authentic 18th century chairs.",
         "ExpID" :"107,0",
         "DType" :""
         },
         {
         "DID" : "672",
         "ChrID": "12",
         "DlgTxt" :"What? We don't sell anything of this kind here.",
         "ExpID" :"0,207",
         "DType" :""
         },
         
         {
         "DID" : "673",
         "ChrID": "1",
         "DlgTxt" :"Are you sure?",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "674",
         "ChrID": "12",
         "DlgTxt" :"Yes ma'am, I am sure you might want to try the shop down the block.",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "675",
         "ChrID": "1",
         "DlgTxt" :"Okay thanks.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate starts walking towards the shop down the block. Kate asks the other shopkeeper.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "676",
         "ChrID": "1",
         "DlgTxt" :" Hi,how are you?",
         "ExpID" :"107,0",
         "DType" :""
         },
         {
         "DID" : "677",
         "ChrID": "11",
         "DlgTxt" :"I am good, what are looking for?",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "678",
         "ChrID": "1",
         "DlgTxt" :"I am looking for 18th century Louis XVI chairs, actually I moved in recently and my interior designer bought me some shitty chairs.",
         "ExpID" :"112,206",
         "DType" :""
         },
         {
         "DID" : "679",
         "ChrID": "11",
         "DlgTxt" :" I have the first copy of the chairs if you wish to buy them?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "680",
         "ChrID": "1",
         "DlgTxt" :"No, I want the original Louis XVI chairs.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "681",
         "ChrID": "11",
         "DlgTxt" :"The only difference between the original and my chairs is that I am telling you it is a copy.",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "682",
         "ChrID": "1",
         "DlgTxt" :" No, the original chairs have oval backs have foliated carved crest, over scrolled arms, over bow fronted seat...",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate is interrupted by a stranger.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "683",
         "ChrID": "13",
         "DlgTxt" :"Ma'am you seem to be a connoisseur of antiques. Maybe I can help you with this?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "684",
         "ChrID": "1",
         "DlgTxt" :"Yes, all I seek for are the Louis XVI chairs. Can you help me get it? Price is not an issue.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "685",
         "ChrID": "13",
         "DlgTxt" :"Surely, I can more than help you.",
         "ExpID" :"0,0,202",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Stranger leads the way for Kate and they walk down towards a dark alley.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "686",
         "ChrID": "1",
         "DlgTxt" :"Excellent!",
         "ExpID" :"107,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :":(Kate removes a knife from her pocket and keeps it on ready)",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "687",
         "ChrID": "13",
         "DlgTxt" :"Not far away, just down the alley. I should not be telling you this.",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "688",
         "ChrID": "1",
         "DlgTxt" :"Now you please must.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "689",
         "ChrID": "13",
         "DlgTxt" :"Look at you being so eager.",
         "ExpID" :"104,207",
         "DType" :""
         },
         {
         "DID" : "690",
         "ChrID": "1",
         "DlgTxt" :"Oh I can't hold secrets. Anyways, you were telling me…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "691",
         "ChrID": "13",
         "DlgTxt" :"Yes, this is kind of a hush hush thing we have recently acquired the antique that you are so eager to find.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"The Stranger and Kate reach the shop and he leads Kate inside.",
         "ExpID" :"0",
         "DType" :""
         },
         
         {
         "DID" : "692",
         "ChrID": "13",
         "DlgTxt" :" Here are the two beautiful pieces of antiques that you were so enthusiastically looking for.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "693",
         "ChrID": "1",
         "DlgTxt" :"Oh, they look magnificent, look at the detailing and the work of art.",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "694",
         "ChrID": "13",
         "DlgTxt" :"I knew a connoisseur will appreciate this art and pay any price demanded.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "695",
         "ChrID": "1",
         "DlgTxt" :"Oh you have no idea how beautiful they would look at my place. I have all the place and lightings keeping these chairs in mind. Before i rudely interrupted you were telling me, how this an hush hush affair.",
         "ExpID" :"102,0",
         "DType" :""
         },
         {
         "DID" : "696",
         "ChrID": "13",
         "DlgTxt" :"Yeah, we recently acquired these chairs.",
         "ExpID" :"0,208",
         "DType" :""
         },
         {
         "DID" : "697",
         "ChrID": "1",
         "DlgTxt" :"How?",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "698",
         "ChrID": "13",
         "DlgTxt" :"That I can't tell you.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "699",
         "ChrID": "1",
         "DlgTxt" :"I heard through a grapevine that these chairs were in the market.",
         "ExpID" :"109,0",
         "DType" :""
         },
         {
         "DID"   : "700",
         "ChrID" : "13",
         "DlgTxt": "Really,how?",
         "ExpID" : "0,0",
         "DType" : ""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach enters:She heard it through me",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Police enters and there is chaos. One police offer is shouting. Kate is frightened and shouts. Zach shouts to calm her down.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "701",
         "ChrID": "14",
         "DlgTxt" :"Get down on your knees with your hands up in the air and nobody moves.",
         "ExpID" :"0,0,0,207",
         "DType" :""
         },
         {
         "DID" : "702",
         "ChrID": "1",
         "DlgTxt" :"Oh my God , What the fuck",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "703",
         "ChrID": "2",
         "DlgTxt" :"Calm down, you knew they were coming.",
         "ExpID" :"0,0,203,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Stranger looks at Kate.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "704",
         "ChrID": "13",
         "DlgTxt" :"You ambushed me! You tricked me!",
         "ExpID" :"103,202,0,0",
         "DType" :""
         },
         {
         "DID" : "705",
         "ChrID": "2",
         "DlgTxt" :"Why the fuck are you sounding so betrayed Sam? You sell stolen stuff, you have no integrity.",
         "ExpID" :"0,203,0,0",
         "DType" :""
         },
         {
         "DID" : "706",
         "ChrID": "13",
         "DlgTxt" :"What are you talking about?",
         "ExpID" :"0,0,203,0",
         "DType" :""
         },
         {
         "DID" : "707",
         "ChrID": "2",
         "DlgTxt" :"Are you going to play pretend?",
         "ExpID" :"0,206,0,0",
         "DType" :""
         },
         {
         "DID" : "708",
         "ChrID": "13",
         "DlgTxt" :" For me to play pretend, i would have to know something. I don't even know for what have I been ambushed and am down on my knees ?",
         "ExpID" :"0,205,0,0",
         "DType" :""
         },
         {
         "DID" : "709",
         "ChrID": "14",
         "DlgTxt" :"Let's cut to the chase, we can play 20 questions down at the station.",
         "ExpID" :"102,206,0,0",
         "DType" :""
         },
         {
         "DID" : "710",
         "ChrID": "2",
         "DlgTxt" :"Right.",
         "ExpID" :"104,206,0,0",
         "DType" :""
         },
         {
         "DID" : "711",
         "ChrID": "14",
         "DlgTxt" :"Let me know one thing right now. From where did you get these chairs and all the other antiques?",
         "ExpID" :"104,0,0,209",
         "DType" :""
         },
         {
         "DID" : "712",
         "ChrID": "13",
         "DlgTxt" :"I can't tell you that.",
         "ExpID" :"0,206,0,0",
         "DType" :""
         },
         {
         "DID" : "713",
         "ChrID": "14",
         "DlgTxt" :"I was afraid this would happen. (Over the microphone) Take him down to the station.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "714",
         "ChrID": "1",
         "DlgTxt": "Yes, he would speak up at the station definitely.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "715",
         "ChrID": "13",
         "DlgTxt" :"No, no wait I am sure we can work something out.",
         "ExpID" :"0,203,0,0",
         "DType" :""
         },
         {
         "DID" : "716",
         "ChrID": "2",
         "DlgTxt" :"What do you have to leverage?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "717",
         "ChrID": "13",
         "DlgTxt" :" Identity of the person who sold me these, Duh-uh?",
         "ExpID" :"103,0,0,0",
         "DType" :""
         },
         {
         "DID" : "718",
         "ChrID": "2",
         "DlgTxt" :"I can always get it out of you.",
         "ExpID" :"102,0,0,0",
         "DType" :""
         },
         {
         "DID" : "719",
         "ChrID": "13",
         "DlgTxt" :"But that will take you much longer, and something tells me desperate.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach goes to hit him Kate stops him.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate says to Zach: You can continue this pissing contest with him sometime later, right now finding out the name is much more important, Don't you think?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach (hugging Kate takes a deep breath and murmurs): You're right.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach pushes Kate behind him and faces Sam.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "720",
         "ChrID": "13",
         "DlgTxt" :"But that will take you much longer, and something tells me desperate.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach goes to hit him Kate stops him.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate says to Zach: You can continue this pissing contest with him sometime later, right now finding out the name is much more important, Don't you think?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach (hugging Kate takes a deep breath and murmurs): You're right.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach pushes Kate behind him and faces Sam.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "721",
         "ChrID": "2",
         "DlgTxt" :"So who sold you these items?",
         "ExpID" :"0,205,0,0",
         "DType" :""
         },
         {
         "DID" : "722",
         "ChrID": "13",
         "DlgTxt" :"Not this fast, first tell me i will be not put into jail for this.",
         "ExpID" :"0,202,104,0",
         "DType" :""
         },
         {
         "DID" : "723",
         "ChrID": "2",
         "DlgTxt" :" Not a chance.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "724",
         "ChrID": "13",
         "DlgTxt" :"You dumbfuck, I did not even know these were stolen items.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "725",
         "ChrID": "2",
         "DlgTxt" :" You motherfucker, you run a shop in a black market what do you expect?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "726",
         "ChrID": "1",
         "DlgTxt" :"Zach, can you please get to the point?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "727",
         "ChrID": "2",
         "DlgTxt" :"What do you have in mind?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "728",
         "ChrID": "13",
         "DlgTxt" :"In experience for name I will not be put into jail and I will not have any criminal record against my name.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach (turning to the Officer): Does this work for you Officer?",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "729",
         "ChrID": "14",
         "DlgTxt" :"Yes, works for me.",
         "ExpID" :"0,0,0,206",
         "DType" :""
         },
         {
         "DID" : "730",
         "ChrID": "13",
         "DlgTxt" :"Okay,his name is Jackson, he came, he sold me all these items.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "731",
         "ChrID": "1",
         "DlgTxt" :"I think we're looking for Jess... a woman",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "732",
         "ChrID": "2",
         "DlgTxt" :"Now even i am confused",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Zach pulls up a picture on his phone and shows Sam.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "733",
         "ChrID": "2",
         "DlgTxt" :"Isn't this the woman who sold you this?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "734",
         "ChrID": "1",
         "DlgTxt" :"He has a photo of her on his phone.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "735",
         "ChrID": "13",
         "DlgTxt" :"No, aren't you listening? Jackson, A guy sold me this stuff.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "736",
         "ChrID": "2",
         "DlgTxt" :"One of these days motherfucker,I am going to comeback and punch you in the face for your insolence.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "737",
         "ChrID": "1",
         "DlgTxt" :"Zach, for God's sake.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "738",
         "ChrID": "14",
         "DlgTxt" :"Cut this shit. Sam, the address?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Sam gives the address, Zach and Kate with the Senior Police Officer reach at the given address.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"They knock at the door. The door opens and a huge guy opens the door.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "739",
         "ChrID": "2",
         "DlgTxt" :" Are you Jackson?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "740",
         "ChrID": "15",
         "DlgTxt" :"Who's asking?",
         "ExpID" :"0,0,206",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"The officer stands behind Zach and Kate and says; I am!",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Jackson tries to run but he is tasered to the floor before he gets any further.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "741",
         "ChrID": "1",
         "DlgTxt" :"Oh my God!",
         "ExpID" :"0,102,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"15-20 minutes passes before Jackson can speak again. Zach, Kate and Officer make themselves at home.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Jackson gains proper consciousness.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "742",
         "ChrID": "15",
         "DlgTxt" :"What the fuck! Why did you taser me?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "743",
         "ChrID": "1",
         "DlgTxt" :"Why did you run?",
         "ExpID" :"0,109,0",
         "DType" :""
         },
         {
         "DID" : "744",
         "ChrID": "15",
         "DlgTxt" :"Who the fuck are you people?",
         "ExpID" :"0,0,205",
         "DType" :""
         },
         {
         "DID" : "745",
         "ChrID": "2",
         "DlgTxt" :"I am the one from whom you stole antiques worth millions of dollars.",
         "ExpID" :"205,0,0",
         "DType" :""
         },
         {
         "DID" : "746",
         "ChrID": "15",
         "DlgTxt" :"You are Zach?",
         "ExpID" :"0,0,203",
         "DType" :""
         },
         {
         "DID" : "747",
         "ChrID": "2",
         "DlgTxt" :"Oh, so you do know me?",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         {
         "DID" : "748",
         "ChrID": "15",
         "DlgTxt" :"Of course I do know you, I was strongly against this.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "749",
         "ChrID": "1",
         "DlgTxt" :"Against, what?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "750",
         "ChrID": "15",
         "DlgTxt" :"Who are you?",
         "ExpID" :"0,0,203",
         "DType" :""
         },
         {
         "DID" : "751",
         "ChrID": "2",
         "DlgTxt" :"None of your business, tell me what we're you strongly against?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "752",
         "ChrID": "15",
         "DlgTxt" :" I am not telling you a word.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "753",
         "ChrID": "2",
         "DlgTxt" :"You know Jesse.. I mean Liza? (Jackson pains a little)",
         "ExpID" :"207,0,0",
         "DType" :""
         },
         {
         "DID" : "754",
         "ChrID": "1",
         "DlgTxt" :"Aha, so you do know Liza! (turns towards Zach) We finally found her!",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "755",
         "ChrID": "2",
         "DlgTxt" :"Finally! So you and Liza planned this together?",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :" Jackson (protests vehemently): No, no i was never in this. I told Liza also to not con you.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "756",
         "ChrID": "1",
         "DlgTxt" :"Now you're going to play innocent?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "757",
         "ChrID": "2",
         "DlgTxt" :"I'm tired of this playing innocent game. They are always innocent in the start.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "758",
         "ChrID": "15",
         "DlgTxt" :"I am not playing innocent. I am innocent, I did not play any role in conning you.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "759",
         "ChrID": "2",
         "DlgTxt" :" Do not say that word.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "760",
         "ChrID": "1",
         "DlgTxt" :"He is touchy about that word.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "761",
         "ChrID": "15",
         "DlgTxt" :"I told Lisa that this would come to bite her in the ass sooner or later.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "762",
         "ChrID": "1",
         "DlgTxt" :"What do you mean by that?",
         "ExpID" :"0,106,0",
         "DType" :""
         },
         {
         "DID" : "763",
         "ChrID": "15",
         "DlgTxt" :" Lisa always loved the high profile lifestyle, she wanted designer clothing and fancy cars, she wanted to live in overpriced hotels and I on an humble living couldn't provide her with any of that.",
         "ExpID" :"0,0,210",
         "DType" :""
         },
         {
         "DID" : "764",
         "ChrID": "1",
         "DlgTxt" :"So?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "765",
         "ChrID": "15",
         "DlgTxt" :"So she started conning people to sustain her lifestyle. I tried steering her away but she always came back to it.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "766",
         "ChrID": "2",
         "DlgTxt" :"I am so sorry, you have a greedy girlfriend. I am assuming that she is your girlfriend?",
         "ExpID" :"210,0,0",
         "DType" :""
         },
         {
         "DID" : "767",
         "ChrID": "15",
         "DlgTxt" :"Yes, she is my girlfriend.",
         "ExpID" :"0,0,210",
         "DType" :""
         },
         {
         "DID" : "768",
         "ChrID": "2",
         "DlgTxt" :"So i am sorry for that, now tell me fast where Liza is?",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         {
         "DID" : "769",
         "ChrID": "15",
         "DlgTxt" :"I can't do that.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "770",
         "ChrID": "2",
         "DlgTxt" :"Oh, but you will have to by not helping you are hindering police's work so he will take you in.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "771",
         "ChrID": "15",
         "DlgTxt" :"Yes, you can do that but I am not betraying her.",
         "ExpID" :"0,0,210",
         "DType" :""
         },
         {
         "DID" : "772",
         "ChrID": "2",
         "DlgTxt" :"You piece of shit.",
         "ExpID" :"209,0,0",
         "DType" :""
         },
         {
         "DID" : "773",
         "ChrID": "1",
         "DlgTxt" :"Zach hold on.",
         "ExpID" :"0,109,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate goes to the eye level of Jackson.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "774",
         "ChrID": "2",
         "DlgTxt" :"Kate, what are you doing? Get back here.",
         "ExpID" :"209,0,0",
         "DType" :""
         },
         {
         "DID" : "775",
         "ChrID": "1",
         "DlgTxt" :"Will you give me a minute Zach?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "776",
         "ChrID": "1",
         "DlgTxt" :"Jackson,you want to help Liza get out of this life.",
         "ExpID" :"0,112,0",
         "DType" :""
         },
         {
         "DID" : "777",
         "ChrID": "15",
         "DlgTxt" :"Yes, I do.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "778",
         "ChrID": "1",
         "DlgTxt" :"I can help you with that.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "779",
         "ChrID": "15",
         "DlgTxt" :"I am not sending her to jail.",
         "ExpID" :"0,0,210",
         "DType" :""
         },
         {
         "DID" : "780",
         "ChrID": "1",
         "DlgTxt" :"I am not talking about that. I am sure she must have not told you about other locations also?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "781",
         "ChrID": "15",
         "DlgTxt" :"No, I don't know. I only know information on need to know basis.",
         "ExpID" :"0,0,209",
         "DType" :""
         },
         
         {
         "DID" : "782",
         "ChrID": "1",
         "DlgTxt" :"I guessed that much, and i can clearly see that you are in love with her. And you want to build a family with her, right?",
         "ExpID" :"0,109,0",
         "DType" :""
         },
         {
         "DID" : "783",
         "ChrID": "15",
         "DlgTxt" :"Yes, I do.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "784",
         "ChrID": "1",
         "DlgTxt" :"There is only one way to get her out of this life, we can strike a deal. You tell Zach Lisa's whereabouts.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "785",
         "ChrID": "15",
         "DlgTxt" :"NO",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "786",
         "ChrID": "1",
         "DlgTxt" :"Listen to me first, you tell her whereabouts, she goes to jail, the system will be very lenient on her.",
         "ExpID" :"0,104,0",
         "DType" :""
         },
         {
         "DID" : "787",
         "ChrID": "15",
         "DlgTxt" :"I am listening.",
         "ExpID" :"0,0,206",
         "DType" :""
         },
         {
         "DID" : "788",
         "ChrID": "1",
         "DlgTxt" :"After Liza gets out of jail, you both get a fresh start. And her getting reprimanded will make her realize how wrong she has been, that's what you want, right?",
         "ExpID" :"0,106,0",
         "DType" :""
         },
         {
         "DID" : "789",
         "ChrID": "15",
         "DlgTxt" :"Yes.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "790",
         "ChrID": "1",
         "DlgTxt" :"So this will make her realize her wrongdoings and would also give you the fresh start you seek.",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "791",
         "ChrID": "1",
         "DlgTxt" :"Does that sound right Jackson?",
         "ExpID" :"0,104,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Jackson is thinking.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Kate & Zach: Jackson..",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Jackson (looking towards Kate): Yes, I'll call her.",
         "ExpID" :"",
         "DType" :""
         }
         
         
         
         
         
         ]
         
         
         
         
         
         
         
         
         //var elementPos = Dlg.map(function(x) {return x.DID; }).indexOf("84");
         //StoryStructure[currChapter].ChpScenes
         //var elementScenePos = StoryStructure[currChapter].map(function(x) {return x.ChpSenes.Dlgs[0]; }).indexOf("73");
         //alert (elementScenePos);
         sym.funcUnloadScene = function()
         {
         try{sym.BSinstance.deleteSymbol();}catch(e){}
         try{for(var i=0; i < sym.instance.length; i++)
         
                      sym.instance[i].deleteSymbol();}catch(e){}
         try{
         if (BSShow == "true"){
         
         				BSShow = "false"
         				sym.BSinstance.deleteSymbol();
         
         		}
         
         }catch(e){}
         
         }
         sym.BSinstance ;
         sym.Chpinstance ;
         sym.FSinstance ;
         sym.instance = [];
         sym.DLGinstance;
         var currChapter = 0;
         var currScene = 0;
         var currDlg = 0;
         var fpic;
         var BSShow = "false";
         var ChpShow = "false";
         var changescene = "false";
         sym.funcDlgClick = function()
         {
         
         if (Dlg.length == currDlg){
         sym.funcUnloadScene();
         	localStorage.setItem("CHP" ,0);
         				localStorage.setItem("SCN" ,0);
         				localStorage.setItem("DLG" ,0);
         				sym.$("first_screen2").show(); return;}
         
         try{
         
         
         {
         sym.DLGinstance.getSymbolElement().show();
         
         if (Dlg[currDlg].DID =="BS"){
         
         if (BSShow == "false"){
         	sym.BSinstance = sym.createChildSymbol( "Blank_screen", "Stage" ); // Here, i duplicate the square from the library to the container.
         
         }
         if (Dlg[currDlg].DType == "img")
         {
         sym.BSinstance.$("ImgBSSymb").show();
         sym.BSinstance.getSymbol("ImgBSSymb").$("ImgBS").attr('src', "images/BS_img/" + Dlg[currDlg].DlgTxt + ".png");
         sym.BSinstance.$("BSTxt").hide();
         }
         else
         {
         sym.BSinstance.$("ImgBSSymb").hide();
         sym.BSinstance.$("BSTxt").show();
         sym.BSinstance.$("BSTxt").html(Dlg[currDlg].DlgTxt);
         }
         	sym.DLGinstance.getSymbolElement().hide();
         
         
         		BSShow = "true"
         		//alert("Blank Sscreen");
         		// show bank screen here
         		currDlg++;
         
         
         		localStorage.setItem("DLG" ,currDlg);
         		}
         
         	else
         {
         		if (BSShow == "true"){
         		sym.BSinstance.deleteSymbol();
         		BSShow = "false"
         		}
         		if (ChpShow == "true"){
         		sym.Chpinstance.deleteSymbol();
         		ChpShow = "false"
         		}
         
         		//		alert("hh + "  + parseInt(Dlg[currDlg].DID) > parseInt(StoryStructure[currChapter].ChpScenes[currScene].Dlgs[1]));
         
         	if(changescene == "true"){
         		changescene = "false";
         
         		currScene++;
         
         		localStorage.setItem("SCN" ,currScene);
         
         		if (currScene > StoryStructure[currChapter].ChpScenes.length -1){
         				sym.Chpinstance = sym.createChildSymbol( "Chapter_strt", "Stage" ); // Here, i duplicate the square from the library to the container.
         
         
         				sym.Chpinstance.$("ChpName").html(StoryStructure[currChapter + 1].ChpName);
         				sym.Chpinstance.$("ChpNo").html(parseInt(currChapter) + 2 );
         
         		currChapter++; currScene = 0;
         		localStorage.setItem("CHP" ,currChapter);
            	localStorage.setItem("SCN" ,currScene);
         console.log("Current Scene " + currScene);
         console.log("Current Chapter " + currChapter);
         console.log("Current Dailogue " + currDlg);
         
         		try
         
         		{
         		for(var i=0; i < sym.instance.length; i++)
         
                      sym.instance[i].deleteSymbol();
         
                      } catch(e) {}
         		if (BSShow == "true"){
         				sym.BSinstance.deleteSymbol();
         				BSShow = "false"
         		}
         
         				sym.DLGinstance.deleteSymbol();
         
         
         
         		return;
         		}
         
         	//	alert("Instance length --" + sym.instance.length);
         		try
         
         		{
         		for(var i=0; i < sym.instance.length; i++)
         
                      sym.instance[i].deleteSymbol();
         
                      } catch(e) {}
         
         				try{
         				sym.Chpinstance.deleteSymbol();
         					}catch(e){}			
         
         
         				LoadChr(StoryStructure[currChapter].ChpScenes[currScene].Chrs);
         
         				//currDlg = StoryStructure[currChapter].ChpScenes[currScene].Dlgs[0]
         				//sym.$('DlgText').html(Dlg[currDlg].DlgTxt);
         				sym.DLGinstance.$("DlgText").html(Dlg[currDlg].DlgTxt);
         				sym.DLGinstance.$("ChrName").html(ChrNames[parseInt(Dlg[currDlg].ChrID)-1]);
         			//	alert(Dlg[currDlg].ChrID);
         				currDlg++;
         				localStorage.setItem("DLG" ,currDlg);
         
          			//	alert("Next Scene " + currDlg + " - " + Dlg[currDlg].DID );
         		}
         
         	else {	
         
         			if (parseInt(Dlg[currDlg].DID) == parseInt(StoryStructure[currChapter].ChpScenes[currScene].Dlgs[1])){ 
         				changescene = "true";
         			}
         			if ( currDlg < Dlg.length)
         			//alert ("Last Else");
         			sym.DLGinstance.$("DlgText").html(Dlg[currDlg].DlgTxt);
         			sym.DLGinstance.$("ChrName").html(ChrNames[parseInt(Dlg[currDlg].ChrID)-1]);
         			//sym.$('DlgText').html(Dlg[currDlg].DlgTxt);
         			localStorage.setItem("DLG" ,currDlg);
         
         			//alert(JSON.stringify(StoryStructure[currChapter].ChpScenes[currScene].Chrs));
         		   sym.PlayExpression(Dlg[currDlg],StoryStructure[currChapter].ChpScenes[currScene].Chrs);
         
         			currDlg++;
         
         console.log("Current Scene " + currScene);
         console.log("Current Chapter " + currChapter);
         console.log("Current Dailogue " + currDlg);
         
         	}
         	}
         }
         }catch(e) {  alert(" This Alert 1 --" + e);
         console.log("Current Scene " + currScene);
         console.log("Current Chapter " + currChapter);
         console.log("Current Dailogue " + currDlg);
         
         }
         
         }
         
         /*
         8000       G_Hand_ON_CHEEKS                      102
         
         
         11000  		G_Hand_on_face2                       103
         
         
         14000      "G_folding_hand2"                       104
         
         
         19000          G_Hand_on_lips                      105
         
         
         21000           G_WOW_EXP                         106
         
         
         28000 G2_Mobile_hand                                101
         
         
         23000      G_BYE_HAND                              107
         
         
         25000      G_LOVE_HAND                             108
         
         
         
         
         7000  B_Hand_on_lips_2  202
         
         
         
         9000  B_HAND_WOW           203
         
         
         
         
         15000    B_RH_EXPLAINING_Exp   205
                     B_LH_Explaining_exp
         
         
         
         20000   B_Folding_hand           206
         
         
         000  normal                0
         
         
         4000  B_Bye_hand           201
          12000  B_Mobile_hand      204
         */
         
         sym.funcExpID = function (x){
         
         switch(parseInt(x)) {
             case 102:
                 return 8000;
                 break;
             case 103:
                  return 11000;
                 break;
             case 104:
                 return 14000;
                 break;
             case 105:
                 return 19000;
                 break;
             case 106:
                 return 21000;
                 break;
             case 107:
                 return 23000;
                 break;
             case 108:
                 return 2000;
                 break;
             case 101:
                 return 42000;
                 break;
              case 109:
                 return 27000;
                 break;
              case 110:
                 return 30000;
                 break;
               case 111:
                 return 36000;
                 break;
               case 112:
                 return 39000;
                 break; 
             case 202:
                 return 7000;
                 break;
             case 203:
                 return 9000;
                 break;
         
             case 205:
                 return 15000;
                 break;
             case 206:
                 return 20000;
                 break;
             case 201:
                 return 4000;
                 break;
             case 204:
                 return 39000;
                 break;  
              case 207:
                 return 27000;
                 break; 
         
              case 208:
                 return 30000;
                 break; 
             case 209:
                 return 33000;
                 break; 
             case 210:
                 return 36000;
                 break;   
         
         
             default:
                 return 0;
                 break;    
         }
         }
         sym.GirlFacetoId = function (x){
         
         switch(parseInt(x)) {
         
         
            case 1:
                 return 1;
                 break; 
            case 3:
                 return 4;
                 break;
            case 2:
                 return 10;
                 break; 
         
         
         }
         }
         
         
         sym.BoyFacetoId = function (x){
         
         switch(parseInt(x)) {
            case 1:
                 return 2;
                 break
          case 8:
                 return 3;
                 break
          case 6:
                 return 5;
                 break;
           case 5:
                 return 6;
                 break;
           case 12:
                 return 14;
                 break;
           case 4:
                 return 8;
                 break;
           case 11:
                 return 7;
                 break;
           case 7:
                 return 9;
                 break;    
             case 2:
                 return 13;
                 break;  
         
         case 15:
                 return 5;
                 break; 
         
         
           case 3:
                 return 11;
                 break; 
         
            case 10:
                 return 12;
                 break;        
         
         
             default:
                 return 0;
                 break;       
         }
         }
         sym.PlayExpression = function(Dlg,chrs)
         {
         var  x = "";
         x = Dlg.ExpID.split(',');
         //alert("X Lenth " + x.length);
         
         				for (i =0 ; i < x.length; i++){
         
         					if (chrs[i].Chr ==1){
         
         							if (sym.GirlFacetoId(chrs[i].Fs) == Dlg.ChrID){
         							 // Show an element 
         							 sym.instance[i].$("G_Talking_LIPS").show();
         							 sym.instance[i].getSymbol("G_Talking_LIPS").play(0);
         							}
         						 }
         					else{
         
         						if (sym.BoyFacetoId(chrs[i].Fs) == Dlg.ChrID){
         
         								sym.instance[i].getSymbol("Parent_B1").$("B_Talking_Lips").show();
         								sym.instance[i].getSymbol("Parent_B1").getSymbol("B_Talking_Lips").play(0);
         								}
         						}
         
         					if (parseInt(x[i])>199)
         						sym.instance[i].getSymbol("Parent_B1").getSymbol("B1_TOP_1").play(parseInt(sym.funcExpID(x[i])));
         					else if ( parseInt(x[i]) > 99)
         						sym.instance[i].getSymbol("G2_TOP_1").play(parseInt(sym.funcExpID(x[i])));
         		}
         
         			//	catch(e){"Alert 2" + e}
         }
         sym.PlayHand = function(x)
         {
         //sym.instance[0].play(14000);
         
         sym.instance[1].getSymbol("Parent_B1").getSymbol("B1_TOP_1").play(4000);
         
         //sym.getSymbol("Parent_G2").getSymbol("G2_TOP_1").play(14000);
         }
         // insert code to be run when the composition is fully loaded here
         
         function LoadChr(arrChrsID,ChrsDressup){
         //var symbname ;
         var imageSource;
         var chrID = "1";
         
         fpic = sym.$("bg");
         				//alert('images/bg/' + StoryStructure[currChapter].ChpScenes[currScene].BkgImG  + '.png');
         				imageSource = 'images/bg/' + StoryStructure[currChapter].ChpScenes[currScene].BkgImG;
         				//imageSource = 'images/3.png';
         				fpic.attr('src',imageSource);
         for (i = 0; i < arrChrsID.length ; i ++){
         
         chrID = StoryStructure[currChapter].ChpScenes[currScene].Chrs[i].Chr ;
         
         try{
         
         //alert(JSON.stringify(StoryStructure[currChapter].ChpScenes[currScene].Chrs[i]));
         if (chrID == "1")
         sym.instance[i] = sym.createChildSymbol( "Parent_G2", "Stage" ); // Here, i duplicate the square from the library to the container.
         else
         sym.instance[i] = sym.createChildSymbol( "B", "Stage" ); // Here, i duplicate the square from the library to the container.
         
         
         
         /*
         
         sym.instance[i].$("img").attr("src", sym.instance[0].getSymbol("G2_Face").$('img').attr('src').replace('images/1/Face/1',
         
         function xyz(e){
         var n = sym.instance[0].$('img').attr('src').indexOf('images/1/Face/1');
         if (n == -1)
         return sym.instance[0].$('img').attr('src');
         else
         return sym.instance[0].$('img').attr('src').replace('images/1/Face/1','images/1/Face/4');
         
          //if (sym.instance[0].$('img', this).attr('src').replace('images/1/Face/1','images/1/Face/4'))
         
         }));*/
         //alert(JSON.stringify(sym.instance[i].$("G2_Face").find("img")));
            //     sym.instance[i].$("G2_Face").find("img").attr('src', 'images/1/Face/4/Face.png');
         
          var curSrc;
         
           sym.instance[i].$("img").each(function () {
         
         			  curSrc = $(this).attr('src');
         
         			  if ( curSrc.indexOf('images/' + chrID + '/faces/0/') >= 0) {
         
         				$(this).attr('src', curSrc.replace('images/' + chrID + '/faces/0','images/' + chrID + '/faces/' + StoryStructure[currChapter].ChpScenes[currScene].Chrs[i].Fs ));
         
         			  }
         
         
         			  if ( curSrc.indexOf('images/' + chrID + '/hairstyle/0/') >= 0) {
         
         
         			  $(this).attr('src', curSrc.replace('images/' + chrID + '/hairstyle/0','images/' + chrID + '/hairstyle/' + StoryStructure[currChapter].ChpScenes[currScene].Chrs[i].Hair));
         
         			  }
         
         			  if ( curSrc.indexOf('images/' + chrID + '/sneakers/0/') >= 0) {
         
         			  $(this).attr('src', curSrc.replace('images/' + chrID + '/sneakers/0','images/' + chrID + '/sneakers/' + StoryStructure[currChapter].ChpScenes[currScene].Chrs[i].Shoe));
         
         			  }
         
         console.log("This ID -- " + chrID);
         			  if ( curSrc.indexOf('images/' + chrID + '/lip/0/') >= 0) {
         
         			  $(this).attr('src', curSrc.replace('images/' + chrID + '/lip/0','images/' + chrID + '/lip/' + StoryStructure[currChapter].ChpScenes[currScene].Chrs[i].Lip));
         
         			  }
         
         
         
         
         
         			  if ( curSrc.indexOf('images/' + chrID + '/Shirt/0/') >= 0) {
         
         			  $(this).attr('src', curSrc.replace('images/' + chrID + '/Shirt/0','images/' + chrID + '/Shirt/' + StoryStructure[currChapter].ChpScenes[currScene].Chrs[i].TopD));
         
         			  }
         			  if ( curSrc.indexOf('images/' + chrID + '/lip') >= 0) {
         
         			  $(this).attr('src', curSrc.replace('images/' + chrID + '/lip/0','images/' + chrID + '/lip/' + StoryStructure[currChapter].ChpScenes[currScene].Chrs[i].Lip));
         
                   }
         			   if ( curSrc.indexOf('images/' + chrID + '/pant/0/') >= 0) {
         			  $(this).attr('src', curSrc.replace('images/' + chrID + '/pant/0','images/' + chrID + '/pant/' + StoryStructure[currChapter].ChpScenes[currScene].Chrs[i].BtmD));
         			  }
         			  });
         
         	}catch(e) { alert(e);}
         
         var tpercent = (($(document).width() /  arrChrsID.length) *95/100) * (i);
         var twidth ;
         var theight ;
         var ttransform ;
         
         if (arrChrsID.length >5)
         {
         twidth = "20%";
         theight = "70%";
         trtansform = ""
         if (i > 2 ){
         sym.instance[i].getSymbolElement().css( {
          "top": "10%",
          "position":"absolute",
          //"left": "0",
          "left": tpercent,
          "width" : twidth,
          "height" : theight,
           "-webkit-transform ": "scaleX(-1)",
           "transform": "scaleX(-1)"
           });
           }
          else{
          sym.instance[i].getSymbolElement().css( {
          "top": "10%",
          "position":"absolute",
          //"left": "0",
          "left": tpercent,
          "width" : twidth,
          "height" : theight,
           });
         
         }
         }
         else if (arrChrsID.length > 3)
         {
         
         twidth = "25%";
         theight = "75%";
         trtansform = ""
         if (i > 1 ){
         sym.instance[i].getSymbolElement().css( {
          "top": "10%",
          "position":"absolute",
          //"left": "0",
          "left": tpercent,
          "width" : twidth,
          "height" : theight,
           "-webkit-transform ": "scaleX(-1)",
           "transform": "scaleX(-1)"
           });
           }
          else{
          sym.instance[i].getSymbolElement().css( {
          "top": "10%",
          "position":"absolute",
          //"left": "0",
          "left": tpercent,
          "width" : twidth,
          "height" : theight,
           });
         
         }
         
         }
         else if (arrChrsID.length >2)
         {
         twidth = "35%";
         theight = "85%";
         trtansform = ""
         
          if (i > 1){
         sym.instance[i].getSymbolElement().css( {
          "top": "10%",
          "position":"absolute",
          //"left": "0",
          "left": tpercent,
          "width" : twidth,
          "height" : theight,
           "-webkit-transform ": "scaleX(-1)",
           "transform": "scaleX(-1)"
           });
           }
          else{
          sym.instance[i].getSymbolElement().css( {
          "top": "10%",
          "position":"absolute",
          //"left": "0",
          "left": tpercent,
          "width" : twidth,
          "height" : theight,
           });
         
         }
         }
         else if (arrChrsID.length >1)
         {
         
         twidth = "40%";
         theight = "85%";
         trtansform = ""
         
         
         
         if (i > 0 ){
         sym.instance[i].getSymbolElement().css( {
          "top": "10%",
          "position":"absolute",
          //"left": "0",
          "left": tpercent,
          "width" : twidth,
          "height" : theight,
           "-webkit-transform ": "scaleX(-1)",
           "transform": "scaleX(-1)"
           });
           }
          else{
          sym.instance[i].getSymbolElement().css( {
          "top": "10%",
          "position":"absolute",
          //"left": "0",
          "left": tpercent,
          "width" : twidth,
          "height" : theight,
           });
         
         }
         }
         else
         {
         
         
         twidth = "40%";
         theight = "85%";
         trtansform = "";
         if (i > 0 ){
         sym.instance[i].getSymbolElement().css( {
          "top": "10%",
          "position":"absolute",
          //"left": "0",
          "left": tpercent,
          "width" : twidth,
          "height" : theight,
           "-webkit-transform ": "scaleX(-1)",
           "transform": "scaleX(-1)"
           });
           }
          else{
          sym.instance[i].getSymbolElement().css( {
          "top": "10%",
          "position":"absolute",
          //"left": "0",
          "left": tpercent,
          "width" : twidth,
          "height" : theight,
           });
         
         	}
         	}
         
         
         
         
         
         
         
         
         
         /*alert(trtansform);
         sym.instance[i].getSymbolElement().css( {
          "top": "10%",
          "position":"absolute",
          //"left": "0",
          "left": tpercent,
          "width" : twidth,
          "height" : theight,
           "-webkit-transform ": "scaleX(-1)",
           "transform": "scaleX(-1)"
         });*/
         
         // Here, i use css properties to get alignment and margin.
         //instance.getSymbol("G2_FACE").$("Gface").css({ "background": "url('images/Face/2/Face.png') no-repeat" instance.getSymbol("G2_FACE").$("Gface").css({ "background": "url('images/Face/2/Face.png') no-repeat" ,  "width" : "100%", "height" : "100%" , 'position': 'absolute'});
         //instance.getSymbol("G2_FACE").$("Gface").css({ "background": "url('images/Face/2/Face.png') no-repeat"});
         
         //alert(JSON.stringify(StoryStructure[currChapter].ChpScenes[currScene].BkgImg));
         if (StoryStructure[currChapter].ChpScenes[currScene].BkgImG =="car.png" || StoryStructure[currChapter].ChpScenes[currScene].BkgImG =="car_police.png"){
         
         sym.instance[i].getSymbolElement().hide();}
         
         }
         
         try{sym.DLGinstance.deleteSymbol();}catch(e){}
         sym.DLGinstance = sym.createChildSymbol( "DlgBackBoard", "Stage" ); // Here, i duplicate the square from the library to the container.
         sym.DLGinstance.getSymbolElement().css( {
          "top": "60%",
          "position":"absolute",
          //"left": "0",
          "left": "5%",
          "width" : "90%",
          "height" : "35%",
         
         });
         
         
         }
         // Show an element 
         //sym.getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_folding_hand2").play(14000);
         
         var temparr = ["C1","C2","C3"];
         //instance.getSymbol("G2_TOP_1").play(14000);
         //instance.getSymbol("G2_Face").$("Gface").css({ "background-image": "url("") no-repeat","opacity" : "1.0"});
         //alert(instance[0].getSymbol("G2_FACe").getSymbolElement().attr('ID'));
         //alert(JSON.stringify(sym.$('Gface').attr('background-image')));
         //sym.$('.img').attr('src', sym.$('.img').attr('src').replace('images/Face/1', 'images/Face/2'));
         
         //sym.$('DlgText').html("Helooooooooooooooo");
         
         sym.StoryHome = function (){
         
         				currScene = 0;
         				currDlg = 0;
         				currChapter = 0;
         				localStorage.setItem("CHP" ,currChapter);
         				localStorage.setItem("SCN" ,currScene);
         				localStorage.setItem("DLG" ,currDlg);
         
         				sym.$("GAME_PAUSE").hide();
         				sym.$("first_screen2").show();
         
         }
         sym.StoryReplay = function (){
         
         				currScene = 0;
         				currDlg = 0;
         				currChapter = 0;
         				localStorage.setItem("CHP" ,currChapter);
         				localStorage.setItem("SCN" ,currScene);
         				localStorage.setItem("DLG" ,currDlg);
         
         				sym.$("GAME_PAUSE").hide();
         				sym.$("first_screen2").show();
         
         }
         
         // Show an element 
         
         
         sym.StoryPause = function (){
         
         
         try
         
         		{
         
         
         				sym.DLGinstance.deleteSymbol();
         
         
         } catch(e) {}
         try
         
         		{
         		for(var i=0; i < sym.instance.length; i++)
                      sym.instance[i].deleteSymbol();
         
         } catch(e) {}
         
         try
         
         		{
         		if (BSShow == "true"){
         
         				BSShow = "false"
         				sym.BSinstance.deleteSymbol();
         
         		}
         
         } catch(e) {}
         
         
         sym.$("GAME_PAUSE").show();
         $('GAME_PAUSE').css('position', 'absolute');
         }
         sym.StartStory = function ()
         {
         
         
         
         try{
         sym.$("GAME_PAUSE").hide();
         //alert(localStorage.getItem("DLG").length);
         
         if (localStorage.getItem("DLG").length > 0){
         
         
         				currScene = parseInt(localStorage.getItem("SCN"));
         				currDlg = parseInt(localStorage.getItem("DLG"));
         
         				currChapter = parseInt(localStorage.getItem("CHP"));
         				LoadChr(StoryStructure[currChapter].ChpScenes[currScene].Chrs);
         				sym.DLGinstance.$("DlgText").html(Dlg[currDlg].DlgTxt);
         				// alert(Dlg[currDlg].ChrID);
         				//ChrNames[parseInt(Dlg[currDlg].ChrID)]
         				sym.DLGinstance.$("ChrName").html(ChrNames[parseInt(Dlg[currDlg].ChrID)-1]);
         
         		}
         else
         {
             			LoadChr(StoryStructure[currChapter].ChpScenes[currScene].Chrs);
         				sym.DLGinstance.$("DlgText").html(Dlg[currDlg].DlgTxt);
         				sym.DLGinstance.$("ChrName").html(ChrNames[parseInt(Dlg[currDlg].ChrID)-1]);
         			 //  sym.PlayExpression(Dlg[currDlg],StoryStructure[currChapter].ChpScenes[currScene].Chrs);
         
         
         }
         
         
         
         				localStorage.setItem("CHP" ,currChapter);
         				localStorage.setItem("SCN" ,currScene);
         				localStorage.setItem("DLG" ,currDlg);
         currDlg++;
         
         }
         catch (e) {
         
         
         				LoadChr(StoryStructure[currChapter].ChpScenes[currScene].Chrs);
         				sym.DLGinstance.$("DlgText").html(Dlg[currDlg].DlgTxt);
         				sym.DLGinstance.$("ChrName").html(ChrNames[parseInt(Dlg[currDlg].ChrID)-1]);
         		   //   sym.PlayExpression(Dlg[currDlg],StoryStructure[currChapter].ChpScenes[currScene].Chrs);
         
         				localStorage.setItem("CHP" ,currChapter);
         				localStorage.setItem("SCN" ,currScene);
         				localStorage.setItem("DLG" ,currDlg);
         				currDlg++;
         }
         }
         
         $(document).ready(function(){
              try{
         
         
         	  document.addEventListener("backbutton", onBackKeyDown, false);
         	  sym.getComposition().getStage().$("Chapter_strt").hide();
         	  sym.getComposition().getStage().$("Blank_screen").hide();
         	 // onDeviceReady();
         
         		//sym.$('img').attr('src').replace('images/Face/1/Face.png', 'images/Face/4/Face.png');
         //alert(sym.instance[0].getSymbol("G2_FACE").$('img')); 
         /*sym.instance[1].$("img").attr("src", sym.instance[0].$('img').attr('src').replace('images/1/Face/1',
         
         function xyz(e){
         var n = sym.instance[0].$('img').attr('src').indexOf('images/1/Face/1');
         if (n == -1)
         return sym.instance[0].$('img').attr('src');
         else
         return sym.instance[0].$('img').attr('src').replace('images/1/Face/1','images/1/Face/4');
         
          //if (sym.instance[0].$('img', this).attr('src').replace('images/1/Face/1','images/1/Face/4'))
         
         }));*/
         //sym.instance[0].$('img', this).attr('src').replace('images/1/Face/1','images/1/Face/4')
         
         
         
         		 }
         
         catch(e){};
         });
         
         
         
         
         
         /////////////////////////////////////////////////////
               // ad ajax call
         
               $(document).ready(function(){
             //alert("msg=2");
         
               });
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         ////////////////////////////////////////////////////
                 // sound
         
         
                 var my_MUSIC1;
                 var flag1 = 0;
                 // alert("outside");
                 var effect;
         
                 sym.playeffect = function (url)
                 {
                    try
                    {
                       effect = new Media(url, function ()
                       {
                       }
                       , function (err3)
                       {
                          /* alert("ere3=" + err3); */
                       }
                       ,
                       function (status)
                       {
                          if (status === Media.MEDIA_STOPPED)
                          {
                             // alert("status=" + status);
                             // effect.play();
                             effect.release();
                             // alert('relesed');
                          }
                       }
                       );
                       effect.play();
                    }
                    catch(e40)
                    {
                       /* alert("effect Audio ERR =" + e40); */
                    }
                 }
         
         
                 function xyz1(e)
                 {
                    myexitapp();
                    navigator.app.exitApp();
                 }
         
                 function xyz2(e)
                 {
                    myexitapp();
         
                    my_MUSIC1.pause();
                    sym.$("pause").hide();
                    sym.$("play").show();
                 }
         
                 function xyz3(e)
                 {
                    onDeviceReady();
                    usersoundstatus();
                 }
         
                 function xyz33(e)
                 {
                    myexitapp();
                    navigator.app.exitApp();  
                 }
         
                 function myexitapp()
                 {
         
                       my_MUSIC1.pause();
                       sym.$("pause").hide();
                       sym.$("play").show();
                       // my_MUSIC1.stop();
                       my_MUSIC1.release();
                       delete my_MUSIC1;
                       my_MUSIC1 = null;
                       delete my_MUSIC1;
         
                   }
         
         
                 function usersoundstatus()
                 {
         
                    try
                    {
                       // 0 = no   1 = yes
                       var s = localStorage.getItem("status");
         
                       if(s == null)
                       {
         
                      // alert("here");//
                          localStorage.setItem("status", "1");
                          //data_set_string("status", "1");
                          my_MUSIC1.play();
                          sym.$("play").hide();
                          sym.$("pause").show();
                          mysound = "true";
                       }
                       else if(s == "1")
                       {
                          /* alert("else1 s=" + s); */ my_MUSIC1.pause();
                          sym.$("play").hide();
                          sym.$("pause").show();
                          mysound = "true";
                       }
                       else
                       {
                          /* alert("else0 s=" + s); */ my_MUSIC1.play();
                          sym.$("pause").hide();
                          sym.$("play").show();
                          mysound = "false";
                       }
         
                    }
                    catch(ex)
                    {
                      //  alert("usersoundstatus= " + ex); 
                    }
                 }
         
         		  function showads(){
         		          app.initialize();
         		try {
         		  var adcolony_appId;
         			var interstitialAdZoneId;
         			var rewardedVideoAdZoneId;
         			//android
         			if (navigator.userAgent.match(/Android/i)) {//alert(navigator.userAgent.match(/Android/i));
         
         			  // working id
         			adsId = { 
         				 adcolony_appId : "app5897b3b5a1774b349f",
         				interstitialAdZoneId : "vzb511270b2f8640e29f",
         				rewardedVideoAdZoneId : "vzb511270b2f8640e29f"
         				};
         			/*trial	
         				adcolony_appId : "appac261d5336d744f4ac";
         				interstitialAdZoneId : "vzd855d463434d479086";
         				rewardedVideoAdZoneId : "vz58f9aa9efa6843118e";
         			*/	
         			}
         			//ios
         			else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
         				//alert(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i));
         			adsId = { 
         				adcolony_appId : "app5897b3b5a1774b349f",
         				interstitialAdZoneId : "vz06e8c32a037749699e7050",
         				rewardedVideoAdZoneId : "vz06e8c32a037749699e7050"
         				};
         			}
         			//////////////////////////////////////////////////////////
         
         			// vungle implementation
         
         
         			var vungle_appId = "58f05759ae5daade25000013";
         
         			//////////////////////////////////////all in one
         
         			var ban_ad="";
         			var inte_ad="";
         
         			try{
         
         				 function prepareInterstitial() {try{
         					  var autoshow = 'true';
         			//alert(" Adcol3  -- " + admobid.interstitial); 
         					  admob.interstitial.prepare();
         
         			  //      AdMob.prepareInterstitial({adId:admobid.interstitial, autoShow:autoshow});
         							  //alert(" Adcol 4 -- "); 
         
         					  }catch(e){}
         				 }
         
         			var intad = "admob";
         
         			function alternet_Interstitial(){
         			//alert(" Inti add  -- " + intad); 
         			//intad = "admob";
         			if(intad=="admob")
         				 { 
         				prepareInterstitial();
         				 intad = "adcol";
         				 try {
         				 clearInterval(myVar);
         				 }
         				 catch(e){}
         
         				 }
         			else if(intad=="adcol")
         
         
         				  {
         			try{    
         
         				  {
         					//window.adcolony.loadedInterstitialAd();    
         					  if(window.adcolony.loadedInterstitialAd())
         						 {
         					//alert(" Adcol2  -- "); 
         
         						  window.adcolony.showInterstitialAd();
         						  intad = "vungle";
         						 }    
         					  else
         						{
         						//prepareInterstitial();
         						//intad = "false";    
         						//alert(" Vungle  -- " + window.vungle.loadedRewardedVideoAd());
         						if(window.vungle.loadedRewardedVideoAd())
         						  {
         							window.vungle.showRewardedVideoAd();
         							intad = "admob";
         						  }
         						else
         						  {
         					prepareInterstitial();           					//interstitial.showAd(onSuccess,onError);
         						  intad = "vungle";
         						  }      
         					  }    
         			}
         				}catch(e){  prepareInterstitial(); intad = "admob";}
         				 }
         
         				 else // show vungle 
         				 {    
         				 try{        
         					 //alert(" Vungle 1111  -- " + window.vungle.loadedRewardedVideoAd());
         					 if(window.vungle.loadedRewardedVideoAd())   
         						{
         			//alert(" Vungle 1111  -- ")
         						window.vungle.showRewardedVideoAd();
         						intad = "adcol";
         						}    
         					 else
         						 { 
         						 //alert(" Adcol 11111  -- " + 						      window.adcolony.loadedInterstitialAd());
         						  if(window.adcolony.loadedInterstitialAd())
         							{    
         							window.adcolony.showInterstitialAd();
         							intad = "admob";       
         							}
         						  else
         							{
         							prepareInterstitial();    
         							intad = "vungle";
         							}      
         						}   
         				  }catch(e){prepareInterstitial();  intad = "admob";}    
         				 }
         			 }
         			{
         				setInterval(function(){alternet_Interstitial();},180000); 
         			}
         
         			}catch(ed){
         
         				setInterval(function(){ alternet_Interstitial();},180000);
         			try{
         			myVar = setInterval(function(){alternet_Interstitial();},10000);
         			}
         			catch (e) {}
         
         			}
         		}
         			catch (e) {}
         }
                 function onDeviceReady()
                 {
         
         		  showads();
         
         
         
                    // alert("READY")
                    loopMUSIC("file:///android_asset/www/media/gamesound.mp3");
         
                    function loopMUSIC(url)
                    {
                       try
                       {
                          my_MUSIC1 = new Media(url, function ()
                          {
                          }
                          , function (err3)
                          {
                             /* alert("ere3=" + err3); */
                          }
                          ,
         
                          function (status)
                          {
                             if (status === Media.MEDIA_STOPPED)
                             {
                                 //alert("status=" + status);
                                my_MUSIC1.play();
                             }
         
                          }
                          );
         
                          // sym.$("play").hide();
                          // sym.$("pause").show();
                          // alert("Play");
                          // my_MUSIC.play();
         
                          sym.pauseclick = function()
                          {
                             try
                             {
         
                             localStorage.setItem("status", "0");
                                //data_set_string("status", "0");
                                my_MUSIC1.pause();
                                sym.$("pause").hide();
                                sym.$("play").show();
                                mysound = "false";
                             }
                             catch(de)
                             {
                                /* alert("sym.pauseclick =" + de); */
                             }
                          }
         
                          sym.playclick = function()
                          {
                             try
                             {
         
                             localStorage.setItem("status", "1");
                                //data_set_string("status", "1");
                                my_MUSIC1.play();
                                sym.$("play").hide();
                                sym.$("pause").show();
                                mysound = "true";
                             }
                             catch(de1)
                             {
                                /* alert("sym.playclick =" + de1); */
                             }
                          }
         
                          sym.pauseAudio4reload = function()
                          {
                             try
                             {
                                my_MUSIC1.pause();
                                sym.$("pause").hide();
                                sym.$("play").show();
                                my_MUSIC1.stop();
                                // my_MUSIC1.release();
                                // delete my_MUSIC1;
                                my_MUSIC1 = null;
                                delete my_MUSIC1;
                             }
                             catch(et)
                             {
                                /* alert("et=" + et); */
                             }
                          }
                          usersoundstatus();
                       }
                       catch(e2)
                       {
                          // alert("Audio ERR =" + e2); 
                       }
                    }
         
                 }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Blank_screen}", "mousedown", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_play}", "mousedown", function(sym, e) {
         
         try{
         sym.getComposition().getStage().playclick();
         }catch(e){/*alert(e);*/}
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pause}", "mousedown", function(sym, e) {
         
         try{
         sym.getComposition().getStage().pauseclick();
         }catch(e){/*alert(e);*/}
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'WP_RS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("WP_RS");
   //Edge symbol end:'WP_RS'

   //=========================================================
   
   //Edge symbol: 'WP_LS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("WP_LS");
   //Edge symbol end:'WP_LS'

   //=========================================================
   
   //Edge symbol: 'WP_LL_bttm'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("WP_LL_bttm");
   //Edge symbol end:'WP_LL_bttm'

   //=========================================================
   
   //Edge symbol: 'WP_RL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("WP_RL");
   //Edge symbol end:'WP_RL'

   //=========================================================
   
   //Edge symbol: 'WP_RL_bttm'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("WP_RL_bttm");
   //Edge symbol end:'WP_RL_bttm'

   //=========================================================
   
   //Edge symbol: 'WP_RS_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("WP_RS_1");
   //Edge symbol end:'WP_RS_1'

   //=========================================================
   
   //Edge symbol: 'WP_LS_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("WP_LS_1");
   //Edge symbol end:'WP_LS_1'

   //=========================================================
   
   //Edge symbol: 'WP_LL'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("WP_LL");
   //Edge symbol end:'WP_LL'

   //=========================================================
   
   //Edge symbol: 'WP_PENT_Top'
   (function(symbolName) {   
   
   })("WP_PENT_Top");
   //Edge symbol end:'WP_PENT_Top'

   //=========================================================
   
   //Edge symbol: 'DlgBackBoard'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_DlgText}", "click", function(sym, e) {
         sym.getComposition().getStage().funcDlgClick();
         

      });
      //Edge binding end

      

      

   })("DlgBackBoard");
   //Edge symbol end:'DlgBackBoard'

   //=========================================================
   
   //Edge symbol: 'replay_sym'
   (function(symbolName) {   
   
   })("replay_sym");
   //Edge symbol end:'replay_sym'

   //=========================================================
   
   //Edge symbol: 'home_sym'
   (function(symbolName) {   
   
   })("home_sym");
   //Edge symbol end:'home_sym'

   //=========================================================
   
   //Edge symbol: 'Setting_sym'
   (function(symbolName) {   
   
   })("Setting_sym");
   //Edge symbol end:'Setting_sym'

   //=========================================================
   
   //Edge symbol: 'Back_sym'
   (function(symbolName) {   
   
   })("Back_sym");
   //Edge symbol end:'Back_sym'

   //=========================================================
   
   //Edge symbol: 'box'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         // Show an element 
         sym.getComposition().getStage().$("play").show();
         
         // Show an element 
         sym.getComposition().getStage().$("replay_sym").show();
         
         // Show an element 
         sym.getComposition().getStage().$("Text").show();
         
         // Show an element 
         sym.getComposition().getStage().$("Text3").show();
         
         // Show an element 
         sym.getComposition().getStage().$("Text2").show();
         
         // Show an element 
         sym.getComposition().getStage().$("back_sym").show();
         
         
         
         
         // Show an element 
         sym.getComposition().getStage().$("Setting_sym").show();
         
         
         // Show an element 
         sym.getComposition().getStage().$("home_sym").show();

      });
      //Edge binding end

   })("box");
   //Edge symbol end:'box'

   //=========================================================
   
   //Edge symbol: 'bs_play_butn'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_play}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         
      });
      //Edge binding end

   })("bs_play_butn");
   //Edge symbol end:'bs_play_butn'

   //=========================================================
   
   //Edge symbol: 'Back_BS'
   (function(symbolName) {   
   
   })("Back_BS");
   //Edge symbol end:'Back_BS'

   //=========================================================
   
   //Edge symbol: 'home_BS'
   (function(symbolName) {   
   
   })("home_BS");
   //Edge symbol end:'home_BS'

   //=========================================================
   
   //Edge symbol: 'Chp_play_butn'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_play}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // Hide an element 
         
         // Show an element 
         //sym.getComposition().getStage().$("Blank_screen").show();
         

      });
      //Edge binding end

   })("Chp_play_butn");
   //Edge symbol end:'Chp_play_butn'

   //=========================================================
   
   //Edge symbol: 'box_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         
         
         
         ;
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("Chapter_strt").$("Chp_play_butn").show();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("Chapter_strt").$("Text2").show();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("Chapter_strt").$("Text").show();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("Chapter_strt").$("Text3").show();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("Chapter_strt").$("Back_sym").show();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("Chapter_strt").$("replay_sym").show();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("Chapter_strt").$("box").show();
         
         
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("Chapter_strt").$("Setting_sym").show();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("Chapter_strt").$("home_sym").show();

      });
      //Edge binding end

   })("box_1");
   //Edge symbol end:'box_1'

   //=========================================================
   
   //Edge symbol: 'Chapter_strt'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Chp_play_butn}", "mousedown", function(sym, e) {
         //sym.getComposition().getStage().funcDlgClick();
         
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().StartStory();

      });
      //Edge binding end

   })("Chapter_strt");
   //Edge symbol end:'Chapter_strt'

   //=========================================================
   
   //Edge symbol: 'first_screen'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_play}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         // Hide an element 
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().StartStory();
         
         
         // Show an element 

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("first_screen");
   //Edge symbol end:'first_screen'

   //=========================================================
   
   //Edge symbol: 'Loading'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         
         
         sym.getComposition().getStage().$("lOADING").hide();
         
         
         sym.getComposition().getStage().$("Chapter_strt").show();
         
         

      });
      //Edge binding end

   })("Loading");
   //Edge symbol end:'Loading'

   //=========================================================
   
   //Edge symbol: 'lOADING'
   (function(symbolName) {   
   
   })("lOADING");
   //Edge symbol end:'lOADING'

   //=========================================================
   
   //Edge symbol: 'Blank_screen2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_BSTxt}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         
         
         sym.getComposition().getStage().funcDlgClick();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_board}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().funcDlgClick();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lockCopy}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().funcDlgClick();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_gif}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().funcDlgClick();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_silhoute}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().funcDlgClick();
         
         

      });
      //Edge binding end

   })("Blank_screen");
   //Edge symbol end:'Blank_screen'

   //=========================================================
   
   //Edge symbol: 'gAME_PAUSE'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_GamePause_anim}", "mousedown", function(sym, e) {
         

      });
      //Edge binding end

   })("gAME_PAUSE");
   //Edge symbol end:'gAME_PAUSE'

   //=========================================================
   
   //Edge symbol: 'GamePause_anim'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_GP_Play}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GP_Play}", "mousedown", function(sym, e) {
         //sym.getComposition().getStage().funcDlgClick();
         
         sym.getComposition().getStage().StartStory();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GP_Replay}", "mousedown", function(sym, e) {
         //sym.getComposition().getStage().funcDlgClick();
         
         
         
         sym.getComposition().getStage().StoryReplay();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_GP_Home}", "mousedown", function(sym, e) {
         //sym.getComposition().getStage().funcDlgClick();
         
         
         sym.getComposition().getStage().StoryHome();

      });
      //Edge binding end

   })("GamePause_anim");
   //Edge symbol end:'GamePause_anim'

   //=========================================================
   
   //Edge symbol: 'GP_setting'
   (function(symbolName) {   
   
   })("GP_setting");
   //Edge symbol end:'GP_setting'

   //=========================================================
   
   //Edge symbol: 'GP_Home'
   (function(symbolName) {   
   
   })("GP_Home");
   //Edge symbol end:'GP_Home'

   //=========================================================
   
   //Edge symbol: 'GP_Replay'
   (function(symbolName) {   
   
   })("GP_Replay");
   //Edge symbol end:'GP_Replay'

   //=========================================================
   
   //Edge symbol: 'GP_Play'
   (function(symbolName) {   
   
   })("GP_Play");
   //Edge symbol end:'GP_Play'

   //=========================================================
   
   //Edge symbol: 'Chapter_completed'
   (function(symbolName) {   
   
   })("Chapter_completed");
   //Edge symbol end:'Chapter_completed'

   //=========================================================
   
   //Edge symbol: 'Replay_complete'
   (function(symbolName) {   
   
   })("Replay_complete");
   //Edge symbol end:'Replay_complete'

   //=========================================================
   
   //Edge symbol: 'Chapter_completed_anim'
   (function(symbolName) {   
   
   })("Chapter_completed_anim");
   //Edge symbol end:'Chapter_completed_anim'

   //=========================================================
   
   //Edge symbol: 'B_Bye_TS_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();

      });
      //Edge binding end

   })("B_Bye_TS_1");
   //Edge symbol end:'B_Bye_TS_1'

   //=========================================================
   
   //Edge symbol: 'B_Hand_On_Lips'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();

      });
      //Edge binding end

   })("B_Hand_On_Lips");
   //Edge symbol end:'B_Hand_On_Lips'

   //=========================================================
   
   //Edge symbol: 'B_WOW_HAND_TS_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").show();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").show();

      });
      //Edge binding end

   })("B_WOW_HAND_TS_1");
   //Edge symbol end:'B_WOW_HAND_TS_1'

   //=========================================================
   
   //Edge symbol: 'B_Hand_On_Lips_TS_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33, function(sym, e) {
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").show();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").show();

      });
      //Edge binding end

   })("B_Hand_On_Lips_TS_1");
   //Edge symbol end:'B_Hand_On_Lips_TS_1'

   //=========================================================
   
   //Edge symbol: 'B_1_Close_eye'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("B_1_Close_eye");
   //Edge symbol end:'B_1_Close_eye'

   //=========================================================
   
   //Edge symbol: 'B_Folding_hand'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();

      });
      //Edge binding end

   })("B_Folding_hand");
   //Edge symbol end:'B_Folding_hand'

   //=========================================================
   
   //Edge symbol: 'B1_Folding_hand_Ts_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").hide();
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").show();

      });
      //Edge binding end

   })("B1_Folding_hand_Ts_1");
   //Edge symbol end:'B1_Folding_hand_Ts_1'

   //=========================================================
   
   //Edge symbol: 'B1_TOP_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_2").play(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_dwn_TS").play(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_2").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_dwn_TS").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_0n_Lips").play(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_0n_Lips").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips_TS_1").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips_TS_1").play(0);
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_N_CHEST").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_N_CHEST").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V_TS").hide();
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAnd_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAnd_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_waist").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_waist").hide();
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Folding_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Folding_hand").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_hand").hide();
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAND_WOW").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAND_WOW").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EXPLAINING_Exp").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EXPLAINING_Exp").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EX_DWn").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EX_DWn").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Explaining_exp").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Explaining_exp").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Explaining_exp").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Explaining_exp").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Exp_TS_dwn").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Exp_TS_dwn").hide();
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B1_Folding_hand_Ts_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B1_Folding_hand_Ts_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_TS_1").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips_TS_1").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips_TS_1").play(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_DWn").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_DWn").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand_TS_1").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_2").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_dwn_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_2").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_dwn_TS").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_0n_Lips").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_0n_Lips").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips_TS_1").stop(0);
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_N_CHEST").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_N_CHEST").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V_TS").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAnd_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAnd_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_waist").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_waist").hide();
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Folding_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Folding_hand").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_hand").hide();
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAND_WOW").play(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAND_WOW").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EXPLAINING_Exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EXPLAINING_Exp").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EX_DWn").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EX_DWn").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Explaining_exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Explaining_exp").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Exp_TS_dwn").stop(0);
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B1_Folding_hand_Ts_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B1_Folding_hand_Ts_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_TS_1").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_TS_1").play(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_DWn").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_DWn").play(0);
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand_TS_1").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_N_CHEST").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_N_CHEST").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V_TS").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAnd_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAnd_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_waist").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_waist").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_2").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_2").hide();
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Folding_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Folding_hand").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_hand").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAND_WOW").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAND_WOW").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EXPLAINING_Exp").play(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EXPLAINING_Exp").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EX_DWn").play(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EX_DWn").show();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Explaining_exp").play(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Explaining_exp").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Exp_TS_dwn").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Exp_TS_dwn").play(0);
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_dwn_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_dwn_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B1_Folding_hand_Ts_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B1_Folding_hand_Ts_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_DWn").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_DWn").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand_TS_1").stop(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_N_CHEST").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_N_CHEST").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks").hide();
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V_TS").hide();
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAnd_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAnd_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_waist").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_waist").hide();
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Folding_hand").play(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Folding_hand").show();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_hand").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAND_WOW").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAND_WOW").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EXPLAINING_Exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EXPLAINING_Exp").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EX_DWn").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EX_DWn").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Explaining_exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Explaining_exp").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Exp_TS_dwn").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Exp_TS_dwn").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_2").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_2").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_dwn_TS").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_dwn_TS").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B1_Folding_hand_Ts_1").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B1_Folding_hand_Ts_1").play(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_DWn").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_DWn").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand_TS_1").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_N_CHEST").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_N_CHEST").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks").hide();
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V_TS").hide();
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAnd_on_waist_TS").play(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAnd_on_waist_TS").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_waist").play(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_waist").show();
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Folding_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Folding_hand").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_hand").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAND_WOW").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAND_WOW").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EXPLAINING_Exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EXPLAINING_Exp").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EX_DWn").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EX_DWn").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Explaining_exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Explaining_exp").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Exp_TS_dwn").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Exp_TS_dwn").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_dwn_TS").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_dwn_TS").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips_TS_1").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_2").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_2").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B1_Folding_hand_Ts_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B1_Folding_hand_Ts_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_DWn").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_DWn").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand_TS_1").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_N_CHEST").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_N_CHEST").hide();
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks").hide();
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V").play(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V_TS").play(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V_TS").show();
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAnd_on_waist_TS").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAnd_on_waist_TS").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_waist").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_waist").hide();
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Folding_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Folding_hand").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_hand").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAND_WOW").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAND_WOW").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EXPLAINING_Exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EXPLAINING_Exp").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EX_DWn").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EX_DWn").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Explaining_exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Explaining_exp").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Exp_TS_dwn").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Exp_TS_dwn").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_dwn_TS").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_2").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_2").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_dwn_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B1_Folding_hand_Ts_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B1_Folding_hand_Ts_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_DWn").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_DWn").stop(0);
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand_TS_1").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_N_CHEST").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_N_CHEST").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks_TS").play(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks_TS").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks").play(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks").show();
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V_TS").hide();
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAnd_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAnd_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_waist").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_waist").hide();
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Folding_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Folding_hand").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_hand").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAND_WOW").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAND_WOW").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EXPLAINING_Exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EXPLAINING_Exp").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EX_DWn").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EX_DWn").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Explaining_exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Explaining_exp").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Exp_TS_dwn").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Exp_TS_dwn").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_dwn_TS").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_2").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_2").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_dwn_TS").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B1_Folding_hand_Ts_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B1_Folding_hand_Ts_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_DWn").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_DWn").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand_TS_1").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_chest_TS").play(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_chest_TS").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_N_CHEST").play(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_N_CHEST").show();
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks").hide();
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V_TS").hide();
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAnd_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAnd_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_waist").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_waist").hide();
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Folding_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Folding_hand").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_hand").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAND_WOW").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAND_WOW").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EXPLAINING_Exp").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EX_DWn").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EX_DWn").hide();
         
         
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EXPLAINING_Exp").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Exp_TS_dwn").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Exp_TS_dwn").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_dwn_TS").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Explaining_exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Explaining_exp").hide();
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_2").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_2").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_dwn_TS").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B1_Folding_hand_Ts_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B1_Folding_hand_Ts_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_DWn").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_DWn").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand_TS_1").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_N_CHEST").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_N_CHEST").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_cheeks").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_cheeks").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_V_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_V_TS").hide();
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAnd_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAnd_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_hand_on_waist").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_hand_on_waist").hide();
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Folding_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Folding_hand").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_hand").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAND_WOW").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAND_WOW").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand").play(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EXPLAINING_Exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EXPLAINING_Exp").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EX_DWn").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EX_DWn").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Explaining_exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Explaining_exp").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Exp_TS_dwn").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Exp_TS_dwn").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_dwn_TS").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_dwn_TS").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_2").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_2").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B1_Folding_hand_Ts_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B1_Folding_hand_Ts_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_DWn").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_DWn").stop(0);
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand_TS_1").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand_TS_1").play(0);

      });
      //Edge binding end

   })("B1_TOP_1");
   //Edge symbol end:'B1_TOP_1'

   //=========================================================
   
   //Edge symbol: 'B_HAND_WOW'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();

      });
      //Edge binding end

   })("B_HAND_WOW");
   //Edge symbol end:'B_HAND_WOW'

   //=========================================================
   
   //Edge symbol: 'B_LH_Explaining_exp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();

      });
      //Edge binding end

   })("B_LH_Explaining_exp");
   //Edge symbol end:'B_LH_Explaining_exp'

   //=========================================================
   
   //Edge symbol: 'B_Bye_hand'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").show();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();

      });
      //Edge binding end

   })("B_Bye_hand");
   //Edge symbol end:'B_Bye_hand'

   //=========================================================
   
   //Edge symbol: 'B_RH_EXPLAINING_Exp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();

      });
      //Edge binding end

   })("B_RH_EXPLAINING_Exp");
   //Edge symbol end:'B_RH_EXPLAINING_Exp'

   //=========================================================
   
   //Edge symbol: 'B_Mobile_hand_TS_1'
   (function(symbolName) {   
   
   })("B_Mobile_hand_TS_1");
   //Edge symbol end:'B_Mobile_hand_TS_1'

   //=========================================================
   
   //Edge symbol: 'LIPS_O'
   (function(symbolName) {   
   
   })("LIPS_O");
   //Edge symbol end:'LIPS_O'

   //=========================================================
   
   //Edge symbol: 'B_LH_TS_1'
   (function(symbolName) {   
   
   })("B_LH_TS_1");
   //Edge symbol end:'B_LH_TS_1'

   //=========================================================
   
   //Edge symbol: 'B_Talking_Lips'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         
         
         
         sym.getSymbolElement().hide();
         
         
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_Face").$("LIPS_O").show();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_Face").$("LIPS_O").hide();

      });
      //Edge binding end

   })("B_Talking_Lips");
   //Edge symbol end:'B_Talking_Lips'

   //=========================================================
   
   //Edge symbol: 'B_RH'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("B_RH");
   //Edge symbol end:'B_RH'

   //=========================================================
   
   //Edge symbol: 'B_RS_1'
   (function(symbolName) {   
   
   })("B_RS_1");
   //Edge symbol end:'B_RS_1'

   //=========================================================
   
   //Edge symbol: 'B_bottm'
   (function(symbolName) {   
   
   })("B_bottm");
   //Edge symbol end:'B_bottm'

   //=========================================================
   
   //Edge symbol: 'B_LL'
   (function(symbolName) {   
   
   })("B_LL");
   //Edge symbol end:'B_LL'

   //=========================================================
   
   //Edge symbol: 'B_RH_TS_1'
   (function(symbolName) {   
   
   })("B_RH_TS_1");
   //Edge symbol end:'B_RH_TS_1'

   //=========================================================
   
   //Edge symbol: 'B_Body'
   (function(symbolName) {   
   
   })("B_Body");
   //Edge symbol end:'B_Body'

   //=========================================================
   
   //Edge symbol: 'B1_Face'
   (function(symbolName) {   
   
   })("B1_Face");
   //Edge symbol end:'B1_Face'

   //=========================================================
   
   //Edge symbol: 'B1_face'
   (function(symbolName) {   
   
   })("B1_face");
   //Edge symbol end:'B1_face'

   //=========================================================
   
   //Edge symbol: 'B1_hair'
   (function(symbolName) {   
   
      

   })("B1_hair");
   //Edge symbol end:'B1_hair'

   //=========================================================
   
   //Edge symbol: 'B'
   (function(symbolName) {   
   
   })("B");
   //Edge symbol end:'B'

   //=========================================================
   
   //Edge symbol: 'Parent_B1'
   (function(symbolName) {   
   
   })("Parent_B1");
   //Edge symbol end:'Parent_B1'

   //=========================================================
   
   //Edge symbol: 'b_LS_1'
   (function(symbolName) {   
   
   })("b_LS_1");
   //Edge symbol end:'b_LS_1'

   //=========================================================
   
   //Edge symbol: 'B_1_eyebrow'
   (function(symbolName) {   
   
   })("B_1_eyebrow");
   //Edge symbol end:'B_1_eyebrow'

   //=========================================================
   
   //Edge symbol: 'B_RL_Bttm_1'
   (function(symbolName) {   
   
   })("B_RL_Bttm_1");
   //Edge symbol end:'B_RL_Bttm_1'

   //=========================================================
   
   //Edge symbol: 'B_LH'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("B_LH");
   //Edge symbol end:'B_LH'

   //=========================================================
   
   //Edge symbol: 'B_LL_bttm_1'
   (function(symbolName) {   
   
   })("B_LL_bttm_1");
   //Edge symbol end:'B_LL_bttm_1'

   //=========================================================
   
   //Edge symbol: 'B_Mobile_hand'
   (function(symbolName) {   
   
   })("B_Mobile_hand");
   //Edge symbol end:'B_Mobile_hand'

   //=========================================================
   
   //Edge symbol: 'B_RL'
   (function(symbolName) {   
   
   })("B_RL");
   //Edge symbol end:'B_RL'

   //=========================================================
   
   //Edge symbol: 'G2_BYE_TS_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").hide();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").show();

      });
      //Edge binding end

   })("G2_BYE_TS_1");
   //Edge symbol end:'G2_BYE_TS_1'

   //=========================================================
   
   //Edge symbol: 'G2_Wow_exp_TS_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").show();

      });
      //Edge binding end

   })("G2_Wow_exp_TS_1");
   //Edge symbol end:'G2_Wow_exp_TS_1'

   //=========================================================
   
   //Edge symbol: 'G2_hand_on_lips_Ts_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").show();

      });
      //Edge binding end

   })("G2_hand_on_lips_Ts_1");
   //Edge symbol end:'G2_hand_on_lips_Ts_1'

   //=========================================================
   
   //Edge symbol: 'G_Hand_ON_CHEEKS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LH").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_RH").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14, function(sym, e) {
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_RH").hide();

      });
      //Edge binding end

   })("G_Hand_ON_CHEEKS");
   //Edge symbol end:'G_Hand_ON_CHEEKS'

   //=========================================================
   
   //Edge symbol: 'G_Hand_on_face2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_RH").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LH").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_RH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LH").hide();

      });
      //Edge binding end

   })("G_Hand_on_face2");
   //Edge symbol end:'G_Hand_on_face2'

   //=========================================================
   
   //Edge symbol: 'G2_LOVE_HAND_TS_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_BODY").getSymbol("Parent_G2").$("G2_LH_TS_1").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_BODY").getSymbol("Parent_G2").$("G2_RH_TS_1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_BODY").getSymbol("Parent_G2").$("G2_LH_TS_1").show();
         
         
         
         sym.getComposition().getStage().getSymbol("G_BODY").getSymbol("Parent_G2").$("G2_RH_TS_1").show();

      });
      //Edge binding end

   })("G2_LOVE_HAND_TS_1");
   //Edge symbol end:'G2_LOVE_HAND_TS_1'

   //=========================================================
   
   //Edge symbol: 'G_WOW_EXP'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").show();

      });
      //Edge binding end

   })("G_WOW_EXP");
   //Edge symbol end:'G_WOW_EXP'

   //=========================================================
   
   //Edge symbol: 'G_folding_hand2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         
         
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LH").show();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_RH").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10, function(sym, e) {
         
         
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LH").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_RH").hide();

      });
      //Edge binding end

   })("G_folding_hand2");
   //Edge symbol end:'G_folding_hand2'

   //=========================================================
   
   //Edge symbol: 'G_HAND_ON_LIPS_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12, function(sym, e) {
         // insert code here
         // Hide an element 
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LH").hide();

      });
      //Edge binding end

   })("G_HAND_ON_LIPS_2");
   //Edge symbol end:'G_HAND_ON_LIPS_2'

   //=========================================================
   
   //Edge symbol: 'G2_hand_on_cheeks_TS_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").show();

      });
      //Edge binding end

   })("G2_hand_on_cheeks_TS_1");
   //Edge symbol end:'G2_hand_on_cheeks_TS_1'

   //=========================================================
   
   //Edge symbol: 'G_Talking_LIPS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_FACE").$("G2_Lips").show();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_FACE").$("G2_Lips").hide();
         

      });
      //Edge binding end

   })("G_Talking_LIPS");
   //Edge symbol end:'G_Talking_LIPS'

   //=========================================================
   
   //Edge symbol: 'G2_Folding_hand_TS_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").show();

      });
      //Edge binding end

   })("G2_Folding_hand_TS_1");
   //Edge symbol end:'G2_Folding_hand_TS_1'

   //=========================================================
   
   //Edge symbol: 'G_LOVE_HAND'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LH").hide();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_RH").hide();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LH").show();
         
         // Show an element 
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_RH").show();
         
         
         
         

      });
      //Edge binding end

   })("G_LOVE_HAND");
   //Edge symbol end:'G_LOVE_HAND'

   //=========================================================
   
   //Edge symbol: 'G_Hand_on_lips'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1444, function(sym, e) {
         // insert code here
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").show();

      });
      //Edge binding end

   })("G_Hand_on_lips");
   //Edge symbol end:'G_Hand_on_lips'

   //=========================================================
   
   //Edge symbol: 'G_close_eye'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("G_close_eye");
   //Edge symbol end:'G_close_eye'

   //=========================================================
   
   //Edge symbol: 'G2_TOP_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_0n_Chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_0n_Chest").stop(0);
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist").stop(0);
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand__Up").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand__Up").stop(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand").hide();
         sym.getComposition().getStage().getSymbo("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_LH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("showoff_LH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("showoff_LH").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH").stop(0);
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LOVE_HAND").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_LOVE_HAND").play(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Mobile_hand").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Mobile_hand").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_ON_CHEEKS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_ON_CHEEKS").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_face2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_face2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_folding_hand2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_folding_hand2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_lips").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_HAND_ON_LIPS_2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_HAND_ON_LIPS_2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_WOW_EXP").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_WOW_EXP").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_BYE_HAND").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_BYE_HAND").hide();
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_LOVE_HAND_TS_1").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LOVE_HAND_TS_1").show();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_mobile_han_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_mobile_han_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_cheeks_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_cheeks_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Hand_ON_FACE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Hand_ON_FACE_TS_1").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Folding_hand_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Folding_hand_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_lips_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_lips_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Wow_exp_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Wow_exp_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_BYE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_BYE_TS_1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest").stop(0);
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_0n_Chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_0n_Chest").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist").stop(0);
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand__Up").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand__Up").stop(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand").hide();
         sym.getComposition().getStage().getSymbo("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_LH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("showoff_LH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("showoff_LH").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH").stop(0);
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LOVE_HAND").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_LOVE_HAND").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Mobile_hand").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Mobile_hand").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_ON_CHEEKS").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_ON_CHEEKS").show();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_face2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_face2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_folding_hand2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_folding_hand2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_lips").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_HAND_ON_LIPS_2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_HAND_ON_LIPS_2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_WOW_EXP").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_WOW_EXP").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_BYE_HAND").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_BYE_HAND").hide();
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_LOVE_HAND_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LOVE_HAND_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_mobile_han_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_mobile_han_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_cheeks_TS_1").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_cheeks_TS_1").show();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Hand_ON_FACE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Hand_ON_FACE_TS_1").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Folding_hand_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Folding_hand_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_lips_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_lips_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Wow_exp_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Wow_exp_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_BYE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_BYE_TS_1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest").stop(0);
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_0n_Chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_0n_Chest").stop(0);
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist").stop(0);
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand__Up").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand__Up").stop(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand").hide();
         sym.getComposition().getStage().getSymbo("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").hide();
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_LH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("showoff_LH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("showoff_LH").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH").stop(0);
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         //////////////////////////
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Mobile_hand").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Mobile_hand").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LOVE_HAND").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_LOVE_HAND").stop(0);
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_ON_CHEEKS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_ON_CHEEKS").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_face2").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_face2").show();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_folding_hand2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_folding_hand2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_lips").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_HAND_ON_LIPS_2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_HAND_ON_LIPS_2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_WOW_EXP").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_WOW_EXP").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_BYE_HAND").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_BYE_HAND").hide();
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_LOVE_HAND_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LOVE_HAND_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_mobile_han_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_mobile_han_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_cheeks_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_cheeks_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Hand_ON_FACE_TS_1").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Hand_ON_FACE_TS_1").show();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Folding_hand_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Folding_hand_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_lips_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_lips_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Wow_exp_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Wow_exp_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_BYE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_BYE_TS_1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest").stop(0);
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_0n_Chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_0n_Chest").stop(0);
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist").stop(0);
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand__Up").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand__Up").stop(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand").hide();
         sym.getComposition().getStage().getSymbo("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_LH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("showoff_LH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("showoff_LH").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH").stop(0);
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         //////////////////////////
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Mobile_hand").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Mobile_hand").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LOVE_HAND").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_LOVE_HAND").stop(0);
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_ON_CHEEKS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_ON_CHEEKS").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_face2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_face2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_folding_hand2").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_folding_hand2").show();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_lips").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_HAND_ON_LIPS_2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_HAND_ON_LIPS_2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_WOW_EXP").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_WOW_EXP").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_BYE_HAND").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_BYE_HAND").hide();
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_LOVE_HAND_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LOVE_HAND_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_mobile_han_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_mobile_han_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_cheeks_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_cheeks_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Hand_ON_FACE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Hand_ON_FACE_TS_1").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Folding_hand_TS_1").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Folding_hand_TS_1").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_lips_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_lips_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Wow_exp_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Wow_exp_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_BYE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_BYE_TS_1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest").stop(0);
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_0n_Chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_0n_Chest").stop(0);
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist").stop(0);
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand__Up").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand__Up").stop(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand").hide();
         sym.getComposition().getStage().getSymbo("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_LH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("showoff_LH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("showoff_LH").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH").stop(0);
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LOVE_HAND").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_LOVE_HAND").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Mobile_hand").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Mobile_hand").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_ON_CHEEKS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_ON_CHEEKS").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_face2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_face2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_folding_hand2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_folding_hand2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_lips").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_lips").show();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_HAND_ON_LIPS_2").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_HAND_ON_LIPS_2").show();
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_LOVE_HAND_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LOVE_HAND_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_mobile_han_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_mobile_han_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_cheeks_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_cheeks_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Hand_ON_FACE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Hand_ON_FACE_TS_1").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Folding_hand_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Folding_hand_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_lips_Ts_1").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_lips_Ts_1").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LOVE_HAND").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_LOVE_HAND").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Mobile_hand").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Mobile_hand").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_ON_CHEEKS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_ON_CHEEKS").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_face2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_face2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_folding_hand2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_folding_hand2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_lips").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_HAND_ON_LIPS_2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_HAND_ON_LIPS_2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_WOW_EXP").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_WOW_EXP").show();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_LOVE_HAND_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LOVE_HAND_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_mobile_han_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_mobile_han_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_cheeks_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_cheeks_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Hand_ON_FACE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Hand_ON_FACE_TS_1").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Folding_hand_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Folding_hand_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_lips_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_lips_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Wow_exp_TS_1").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Wow_exp_TS_1").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest").stop(0);
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_0n_Chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_0n_Chest").stop(0);
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist").stop(0);
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand__Up").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand__Up").stop(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand").hide();
         sym.getComposition().getStage().getSymbo("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_LH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("showoff_LH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("showoff_LH").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH").stop(0);
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LOVE_HAND").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_LOVE_HAND").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Mobile_hand").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Mobile_hand").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_ON_CHEEKS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_ON_CHEEKS").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_face2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_face2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_folding_hand2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_folding_hand2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_lips").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_HAND_ON_LIPS_2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_HAND_ON_LIPS_2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_WOW_EXP").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_WOW_EXP").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_BYE_HAND").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_BYE_HAND").show();
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_LOVE_HAND_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LOVE_HAND_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_mobile_han_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_mobile_han_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_cheeks_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_cheeks_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Hand_ON_FACE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Hand_ON_FACE_TS_1").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Folding_hand_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Folding_hand_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_lips_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_lips_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Wow_exp_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Wow_exp_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_BYE_TS_1").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_BYE_TS_1").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_0n_Chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_0n_Chest").stop(0);
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist").stop(0);
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand__Up").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand__Up").play(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand").play(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").show();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_LH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("showoff_LH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("showoff_LH").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH").stop(0);
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LOVE_HAND").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_LOVE_HAND").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Mobile_hand").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Mobile_hand").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_ON_CHEEKS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_ON_CHEEKS").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_face2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_face2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_folding_hand2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_folding_hand2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_lips").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_HAND_ON_LIPS_2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_HAND_ON_LIPS_2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_WOW_EXP").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_WOW_EXP").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_BYE_HAND").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_BYE_HAND").hide();
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_LOVE_HAND_TS_1").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LOVE_HAND_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_mobile_han_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_mobile_han_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_cheeks_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_cheeks_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Hand_ON_FACE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Hand_ON_FACE_TS_1").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Folding_hand_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Folding_hand_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_lips_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_lips_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Wow_exp_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Wow_exp_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_BYE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_BYE_TS_1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest").stop(0);
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_0n_Chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_0n_Chest").stop(0);
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist").stop(0);
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand__Up").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand__Up").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH_TS").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_LH_TS").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").show();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("showoff_LH").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("showoff_LH").play(0);
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH").play(0);
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LOVE_HAND").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_LOVE_HAND").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Mobile_hand").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Mobile_hand").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_ON_CHEEKS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_ON_CHEEKS").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_face2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_face2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_folding_hand2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_folding_hand2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_lips").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_HAND_ON_LIPS_2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_HAND_ON_LIPS_2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_WOW_EXP").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_WOW_EXP").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_BYE_HAND").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_BYE_HAND").hide();
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_LOVE_HAND_TS_1").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LOVE_HAND_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_mobile_han_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_mobile_han_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_cheeks_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_cheeks_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Hand_ON_FACE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Hand_ON_FACE_TS_1").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Folding_hand_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Folding_hand_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_lips_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_lips_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Wow_exp_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Wow_exp_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_BYE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_BYE_TS_1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest").stop(0);
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_0n_Chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_0n_Chest").stop(0);
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand__Up").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand__Up").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").show();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").show();
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist_TS").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist_TS").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist").play(0);
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_LH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("showoff_LH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("showoff_LH").stop(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH").stop(0);
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LOVE_HAND").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_LOVE_HAND").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Mobile_hand").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Mobile_hand").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_ON_CHEEKS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_ON_CHEEKS").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_face2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_face2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_folding_hand2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_folding_hand2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_lips").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_HAND_ON_LIPS_2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_HAND_ON_LIPS_2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_WOW_EXP").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_WOW_EXP").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_BYE_HAND").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_BYE_HAND").hide();
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_LOVE_HAND_TS_1").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LOVE_HAND_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_mobile_han_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_mobile_han_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_cheeks_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_cheeks_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Hand_ON_FACE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Hand_ON_FACE_TS_1").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Folding_hand_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Folding_hand_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_lips_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_lips_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Wow_exp_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Wow_exp_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_BYE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_BYE_TS_1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest").stop(0);
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_hand_on_chest_TS").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_hand_on_chest_TS").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_0n_Chest").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_0n_Chest").play(0);
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand__Up").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand__Up").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist").stop(0);
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_LH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("showoff_LH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("showoff_LH").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH").stop(0);
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LOVE_HAND").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_LOVE_HAND").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Mobile_hand").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Mobile_hand").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_ON_CHEEKS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_ON_CHEEKS").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_face2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_face2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_folding_hand2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_folding_hand2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_lips").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_HAND_ON_LIPS_2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_HAND_ON_LIPS_2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_WOW_EXP").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_WOW_EXP").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_BYE_HAND").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_BYE_HAND").hide();
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_LOVE_HAND_TS_1").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LOVE_HAND_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_mobile_han_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_mobile_han_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_cheeks_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_cheeks_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Hand_ON_FACE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Hand_ON_FACE_TS_1").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Folding_hand_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Folding_hand_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_lips_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_lips_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Wow_exp_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Wow_exp_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_BYE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_BYE_TS_1").hide();
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39000, function(sym, e) {
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_0n_Chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_0n_Chest").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest_TS").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest_TS").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest").play(0);
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand__Up").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand__Up").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Hand_on_waist").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Hand_on_waist").stop(0);
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_LH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("showoff_LH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("showoff_LH").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH").stop(0);
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LOVE_HAND").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_LOVE_HAND").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Mobile_hand").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Mobile_hand").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_ON_CHEEKS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_ON_CHEEKS").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_face2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_face2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_folding_hand2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_folding_hand2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_lips").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_HAND_ON_LIPS_2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_HAND_ON_LIPS_2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_WOW_EXP").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_WOW_EXP").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_BYE_HAND").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_BYE_HAND").hide();
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_LOVE_HAND_TS_1").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LOVE_HAND_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_mobile_han_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_mobile_han_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_cheeks_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_cheeks_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Hand_ON_FACE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Hand_ON_FACE_TS_1").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Folding_hand_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Folding_hand_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_lips_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_lips_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Wow_exp_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Wow_exp_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_BYE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_BYE_TS_1").hide();
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_1_hand_on_chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_1_hand_on_chest").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_hand_on_chest_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_hand_on_chest_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_0n_Chest").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_0n_Chest").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_LH_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH_TS").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("showoff_LH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("showoff_LH").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Showoff_RH").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Showoff_RH").stop(0);
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand__Up").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand__Up").stop(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("Thinking_hand_TS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("Thinking_hand_TS").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_LOVE_HAND").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_LOVE_HAND").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Mobile_hand").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Mobile_hand").play(0);
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_ON_CHEEKS").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_ON_CHEEKS").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_face2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_face2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_folding_hand2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_folding_hand2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_Hand_on_lips").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_Hand_on_lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_HAND_ON_LIPS_2").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_HAND_ON_LIPS_2").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_WOW_EXP").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_WOW_EXP").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G_BYE_HAND").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G_BYE_HAND").hide();
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_LOVE_HAND_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LOVE_HAND_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_mobile_han_Ts_1").play(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_mobile_han_Ts_1").show();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_cheeks_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_cheeks_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Hand_ON_FACE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Hand_ON_FACE_TS_1").hide();
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Folding_hand_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Folding_hand_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_hand_on_lips_Ts_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_hand_on_lips_Ts_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_Wow_exp_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Wow_exp_TS_1").hide();
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").getSymbol("G2_BYE_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_BYE_TS_1").hide();

      });
      //Edge binding end

   })("G2_TOP_1");
   //Edge symbol end:'G2_TOP_1'

   //=========================================================
   
   //Edge symbol: 'G2_Hand_ON_FACE_TS_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").hide();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_Hand_ON_FACE_TS_1").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").show();

      });
      //Edge binding end

   })("G2_Hand_ON_FACE_TS_1");
   //Edge symbol end:'G2_Hand_ON_FACE_TS_1'

   //=========================================================
   
   //Edge symbol: 'G_BYE_HAND'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").show();
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").show();

      });
      //Edge binding end

   })("G_BYE_HAND");
   //Edge symbol end:'G_BYE_HAND'

   //=========================================================
   
   //Edge symbol: 'G2_RL_BTTM_1'
   (function(symbolName) {   
   
   })("G2_RL_BTTM_1");
   //Edge symbol end:'G2_RL_BTTM_1'

   //=========================================================
   
   //Edge symbol: 'Parent_G2'
   (function(symbolName) {   
   
   })("Parent_G2");
   //Edge symbol end:'Parent_G2'

   //=========================================================
   
   //Edge symbol: 'G2_RL_shoe_1'
   (function(symbolName) {   
   
   })("G2_RL_shoe_1");
   //Edge symbol end:'G2_RL_shoe_1'

   //=========================================================
   
   //Edge symbol: 'G_RL'
   (function(symbolName) {   
   
   })("G_RL");
   //Edge symbol end:'G_RL'

   //=========================================================
   
   //Edge symbol: 'G2_Lips'
   (function(symbolName) {   
   
   })("G2_Lips");
   //Edge symbol end:'G2_Lips'

   //=========================================================
   
   //Edge symbol: 'G2_PANT_TOP_1'
   (function(symbolName) {   
   
   })("G2_PANT_TOP_1");
   //Edge symbol end:'G2_PANT_TOP_1'

   //=========================================================
   
   //Edge symbol: 'G_LH'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("G_LH");
   //Edge symbol end:'G_LH'

   //=========================================================
   
   //Edge symbol: 'G_Body'
   (function(symbolName) {   
   
   })("G_Body");
   //Edge symbol end:'G_Body'

   //=========================================================
   
   //Edge symbol: 'G_Eye_brow_1'
   (function(symbolName) {   
   
   })("G_Eye_brow_1");
   //Edge symbol end:'G_Eye_brow_1'

   //=========================================================
   
   //Edge symbol: 'G_LL'
   (function(symbolName) {   
   
   })("G_LL");
   //Edge symbol end:'G_LL'

   //=========================================================
   
   //Edge symbol: 'G2_LL_BTTM_1'
   (function(symbolName) {   
   
   })("G2_LL_BTTM_1");
   //Edge symbol end:'G2_LL_BTTM_1'

   //=========================================================
   
   //Edge symbol: 'G2_Mobile'
   (function(symbolName) {   
   
   })("G2_Mobile");
   //Edge symbol end:'G2_Mobile'

   //=========================================================
   
   //Edge symbol: 'G2_Mobile_hand'
   (function(symbolName) {   
   
   })("G2_Mobile_hand");
   //Edge symbol end:'G2_Mobile_hand'

   //=========================================================
   
   //Edge symbol: 'G2_FACE'
   (function(symbolName) {   
   
   })("G2_FACE");
   //Edge symbol end:'G2_FACE'

   //=========================================================
   
   //Edge symbol: 'G2_mobile_han_Ts_1'
   (function(symbolName) {   
   
   })("G2_mobile_han_Ts_1");
   //Edge symbol end:'G2_mobile_han_Ts_1'

   //=========================================================
   
   //Edge symbol: 'G2_Hair'
   (function(symbolName) {   
   
   })("G2_Hair");
   //Edge symbol end:'G2_Hair'

   //=========================================================
   
   //Edge symbol: 'G_RH'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("G_RH");
   //Edge symbol end:'G_RH'

   //=========================================================
   
   //Edge symbol: 'G2_LL_S_1'
   (function(symbolName) {   
   
   })("G2_LL_S_1");
   //Edge symbol end:'G2_LL_S_1'

   //=========================================================
   
   //Edge symbol: 'G_1'
   (function(symbolName) {   
   
   })("G_1");
   //Edge symbol end:'G_1'

   //=========================================================
   
   //Edge symbol: 'G2_Hairup'
   (function(symbolName) {   
   
   })("G2_Hairup");
   //Edge symbol end:'G2_Hairup'

   //=========================================================
   
   //Edge symbol: 'Pause_sym'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_paues}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_paues}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().StoryPause();

      });
      //Edge binding end

   })("Pause_sym");
   //Edge symbol end:'Pause_sym'

   //=========================================================
   
   //Edge symbol: 'ImgBS'
   (function(symbolName) {   
   
   })("ImgBS");
   //Edge symbol end:'ImgBS'

   //=========================================================
   
   //Edge symbol: 'G_hand_on_chest_TS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").show();
         

      });
      //Edge binding end

   })("G_hand_on_chest_TS");
   //Edge symbol end:'G_hand_on_chest_TS'

   //=========================================================
   
   //Edge symbol: 'Hand_0n_Chest'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").show();

      });
      //Edge binding end

   })("Hand_0n_Chest");
   //Edge symbol end:'Hand_0n_Chest'

   //=========================================================
   
   //Edge symbol: 'Thinking_hand_TS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").show();

      });
      //Edge binding end

   })("Thinking_hand_TS");
   //Edge symbol end:'Thinking_hand_TS'

   //=========================================================
   
   //Edge symbol: 'Thinking_hand__Up'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").hide();
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").show();
         
         
         

      });
      //Edge binding end

   })("Thinking_hand__Up");
   //Edge symbol end:'Thinking_hand__Up'

   //=========================================================
   
   //Edge symbol: 'Thinking_hand'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").hide();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").show();
         
         
         
         

      });
      //Edge binding end

   })("Thinking_hand");
   //Edge symbol end:'Thinking_hand'

   //=========================================================
   
   //Edge symbol: 'Showoff_RH_TS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").show();

      });
      //Edge binding end

   })("Showoff_RH_TS");
   //Edge symbol end:'Showoff_RH_TS'

   //=========================================================
   
   //Edge symbol: 'Showoff_RH'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").hide();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").show();
         
         

      });
      //Edge binding end

   })("Showoff_RH");
   //Edge symbol end:'Showoff_RH'

   //=========================================================
   
   //Edge symbol: 'Showoff_LH_TS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").show();

      });
      //Edge binding end

   })("Showoff_LH_TS");
   //Edge symbol end:'Showoff_LH_TS'

   //=========================================================
   
   //Edge symbol: 'showoff_LH'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").hide();
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").show();
         
         
         

      });
      //Edge binding end

   })("showoff_LH");
   //Edge symbol end:'showoff_LH'

   //=========================================================
   
   //Edge symbol: 'G_1_hand_on_chest_TS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").show();

      });
      //Edge binding end

   })("G_1_hand_on_chest_TS");
   //Edge symbol end:'G_1_hand_on_chest_TS'

   //=========================================================
   
   //Edge symbol: 'G_1_hand_on_chest'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").hide();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH").show();

      });
      //Edge binding end

   })("G_1_hand_on_chest");
   //Edge symbol end:'G_1_hand_on_chest'

   //=========================================================
   
   //Edge symbol: 'B_Hand_on_chest_TS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_DWN").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_DWn").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 120000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").show();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code heresym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_DWN").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_DWn").show();
         
         

      });
      //Edge binding end

   })("B_Hand_on_chest_TS");
   //Edge symbol end:'B_Hand_on_chest_TS'

   //=========================================================
   
   //Edge symbol: 'B_hand_N_CHEST'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 120000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();
         

      });
      //Edge binding end

   })("B_hand_N_CHEST");
   //Edge symbol end:'B_hand_N_CHEST'

   //=========================================================
   
   //Edge symbol: 'B_hand_on_V_TS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").show();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_DWN").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_DWn").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_DWN").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_DWn").show();
         
         

      });
      //Edge binding end

   })("B_hand_on_V_TS");
   //Edge symbol end:'B_hand_on_V_TS'

   //=========================================================
   
   //Edge symbol: 'B_hand_on_V'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();
         

      });
      //Edge binding end

   })("B_hand_on_V");
   //Edge symbol end:'B_hand_on_V'

   //=========================================================
   
   //Edge symbol: 'HAnd_on_waist_TS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_RH_TS_1").show();
         
         sym.getComposition().getStage().getSymbol("G_1").getSymbol("Parent_G2").getSymbol("G2_TOP_1").$("G2_LH_TS_1").hide();
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_DWN").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_DWn").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_DWN").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_DWn").show();
         

      });
      //Edge binding end

   })("HAnd_on_waist_TS");
   //Edge symbol end:'HAnd_on_waist_TS'

   //=========================================================
   
   //Edge symbol: 'B_hand_on_waist'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();
         

      });
      //Edge binding end

   })("B_hand_on_waist");
   //Edge symbol end:'B_hand_on_waist'

   //=========================================================
   
   //Edge symbol: 'B_LH_TS_DWn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("B_LH_TS_DWn");
   //Edge symbol end:'B_LH_TS_DWn'

   //=========================================================
   
   //Edge symbol: 'B_RH_TS_DWN'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("B_RH_TS_DWN");
   //Edge symbol end:'B_RH_TS_DWN'

   //=========================================================
   
   //Edge symbol: 'B_LH_Exp_dwn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_DWN").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_DWn").show();

      });
      //Edge binding end

   })("B_LH_Exp_dwn");
   //Edge symbol end:'B_LH_Exp_dwn'

   //=========================================================
   
   //Edge symbol: 'B_RH_EX_DWn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_DWN").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_DWn").show();

      });
      //Edge binding end

   })("B_RH_EX_DWn");
   //Edge symbol end:'B_RH_EX_DWn'

   //=========================================================
   
   //Edge symbol: 'B_Hand_on_lips_dwn_TS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10, function(sym, e) {
         // insert code here
         // Hide an element 
         
         // Hide an element 
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_DWN").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("Hand_on_lipe_dwn_TS").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         //sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_DWN").show();
         
         
         //sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_DWn").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         
         
         // Hide an element 
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_DWN").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_DWn").show();

      });
      //Edge binding end

   })("B_Hand_on_lips_dwn_TS");
   //Edge symbol end:'B_Hand_on_lips_dwn_TS'

   //=========================================================
   
   //Edge symbol: 'B_WOW_HAND_DWn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").show();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").show();

      });
      //Edge binding end

   })("B_WOW_HAND_DWn");
   //Edge symbol end:'B_WOW_HAND_DWn'

   //=========================================================
   
   //Edge symbol: 'B_hand_on_cheeks_TS'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").show();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_DWN").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_DWn").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_1").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_1").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_TS_DWN").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_TS_DWn").show();
         
         

      });
      //Edge binding end

   })("B_hand_on_cheeks_TS");
   //Edge symbol end:'B_hand_on_cheeks_TS'

   //=========================================================
   
   //Edge symbol: 'B_hand_on_cheeks'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH").show();
         

      });
      //Edge binding end

   })("B_hand_on_cheeks");
   //Edge symbol end:'B_hand_on_cheeks'

})(jQuery, AdobeEdge, "EDGE-2322261730");