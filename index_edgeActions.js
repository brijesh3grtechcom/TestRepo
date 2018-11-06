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
          yepnope({ nope : ["cordova.js","jquery-ui.min.js","locals.js"]}); 
          
                 document.addEventListener("backbutton", xyz33, false);
                 document.addEventListener("menubutton", xyz1, false);
                 document.addEventListener("pause", xyz2, false);
                 document.addEventListener("resume", xyz3, false);
           document.addEventListener("deviceready", onDeviceReady, false);
          
          
         var ChrNames =  [
         "Charles" // 1
         ,"Roselle" // 2 
         ,"Catherin" // 3 
         ,"Stephen" //4 
         ,"Evelyn" //5 
         ,"Alex" //6
         ,"" //7
         ,"Mrs. Herbert" //8
         ,"Mrs. Wilson" //9
         ,"Ms. George" //10
         ,"" //11
         ,"" //12
         ,"" //13
         ,"Salesgirl" //14
         ,"" //15
         ,"Manager" //16
         ,"Mr. Johnathan Day" //17
         ,"Informer" //18
         ,"Mr. Alfred" //19
         ,"Mrs. Bryan" //20
         ,"Mr. Clint" //21
         ,"" //22
         ,"Principal Roger" //23
         ,"Mr. Wilson" //24
         ,"Mr. Herbert" //25
         ]
         
         var StoryStructure =  [
         
         { //chp starts
         			  "ChpName" : "The College Campus", 
         			  "ChpScenes" : [
         								 { 
         									"Dlgs" : [ "1", "7"], // Start to end dailogues in this Scene.
         									"Chrs" : [ {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"0"},
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"6","BtmD":"6"}], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"//1//
         								 },
         								 { 
         									"Dlgs" : [ "8", "24"],
         									"Chrs" : [
         									{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"0"},
         									{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"6","BtmD":"6"},
         									{"Chr":"1","Fs":"2","Shoe":"18","Lip":"1","Hair":"2","TopD":"19","BtmD":"0"},
         									{"Chr":"2","Fs":"1","Shoe":"9","Lip":"1","Hair":"1","TopD":"1","BtmD":"1"}
         									],
         									"BkgImG" : "Corridorcollege.png"//2//
         								 },
         
         						 { 
         									"Dlgs" : [ "25", "40"],
         									"Chrs" : [
                                    {"Chr":"1","Fs":"4","Shoe":"11","Lip":"1","Hair":"4","TopD":"28","BtmD":"11"},
                                    {"Chr":"2","Fs":"1","Shoe":"9","Lip":"1","Hair":"1","TopD":"1","BtmD":"1"},
                                    {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"6","BtmD":"6"},
         									{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"11"},
         
         									{"Chr":"1","Fs":"2","Shoe":"18","Lip":"1","Hair":"2","TopD":"19","BtmD":"11"},
         
         									{"Chr":"1","Fs":"5","Shoe":"13","Lip":"1","Hair":"5","TopD":"35","BtmD":"1"}
         
         
         
         
         
         									],
         									"BkgImG" : "classroom.png"//3//
         								 },		
         
         
         //		 @@@"black screen" slideshow
         
         
         								{
         								 	"Dlgs" : [ "41", "44"],
         									"Chrs" : [
                                    {"Chr":"1","Fs":"4","Shoe":"11","Lip":"1","Hair":"4","TopD":"28","BtmD":"11"},
                                    {"Chr":"2","Fs":"1","Shoe":"9","Lip":"1","Hair":"1","TopD":"1","BtmD":"1"},
                                    {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"6","BtmD":"6"},
         									{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"11"},
         
         									{"Chr":"1","Fs":"2","Shoe":"18","Lip":"1","Hair":"2","TopD":"19","BtmD":"11"},
         
         									{"Chr":"1","Fs":"5","Shoe":"13","Lip":"1","Hair":"5","TopD":"29","BtmD":"1"}
         
         
         								],
         								"BkgImG" : "classroom.png"//4//
         								 	 }	,		
         
         
         //		 @@@"black screen" slideshow
         {
         								 	"Dlgs" : [ "45", "49"],
         									"Chrs" : [
         
                                    {"Chr":"1","Fs":"4","Shoe":"11","Lip":"1","Hair":"4","TopD":"28","BtmD":"11"},
                                    {"Chr":"2","Fs":"1","Shoe":"9","Lip":"1","Hair":"1","TopD":"1","BtmD":"1"},
                                    {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"6","BtmD":"6"},
         									{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"11"},
         
         									{"Chr":"1","Fs":"2","Shoe":"18","Lip":"1","Hair":"2","TopD":"19","BtmD":"11"},
         
         									{"Chr":"1","Fs":"5","Shoe":"13","Lip":"1","Hair":"5","TopD":"35","BtmD":"1"}
         
         
         
         								],
         								"BkgImG" : "classroom.png"//5//
         								 	 }	,	
         
         
         		{
         								 "Dlgs" : [ "50", "51"],
         									"Chrs" : [
         									{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"0"},
         									{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"6","BtmD":"6"},
         									{"Chr":"1","Fs":"2","Shoe":"18","Lip":"1","Hair":"2","TopD":"19","BtmD":"0"},
         									{"Chr":"2","Fs":"1","Shoe":"9","Lip":"1","Hair":"1","TopD":"1","BtmD":"1"},
         									{"Chr":"2","Fs":"3","Shoe":"19","Lip":"1","Hair":"3","TopD":"4","BtmD":"2"}
         
         
         
                                    ],
         									"BkgImG" : "classroom.png"//6//
         								 	 }	,
         
         
         
         
         
         
         
         
         
         
         
         
         						//		"black screen" canteen  Hey guys, here comes Roselle…. That new-comer…... the roman hottie... 
         
         							{
         
         								   "Dlgs" : [ "53", "72"],
         									"Chrs" : [
         									{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"0"},
         									{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"6","BtmD":"6"},
         									{"Chr":"2","Fs":"1","Shoe":"9","Lip":"1","Hair":"1","TopD":"1","BtmD":"1"},
         									{"Chr":"1","Fs":"2","Shoe":"18","Lip":"1","Hair":"2","TopD":"19","BtmD":"0"},
         
         									{"Chr":"2","Fs":"3","Shoe":"19","Lip":"1","Hair":"3","TopD":"4","BtmD":"2"},
         					            {"Chr":"1","Fs":"4","Shoe":"11","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"}
         
         									],
         									"BkgImG" : "Canteen.png"//7//
         								 	 },
         
         
         								//	"black screen" at classroom
         							{
         								 	  "Dlgs" : [ "73", "86"],
         									"Chrs" : [
         									{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"0"},
         									{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"6","BtmD":"6"},
         									{"Chr":"1","Fs":"4","Shoe":"11","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"}
         
         									],
         									"BkgImG" : "classroom.png"//8//
         								 	 }	
         
         
         
         								  ]
         
         		 }, //chp ends
         		 { 		 
         
         
         
         
         
         			  "ChpName" : "The Pool of Quarrel & Anguish", 
         			  "ChpScenes" : [
         								 { 
         									"Dlgs" : [ "87", "89"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"11","BtmD":"0"},
                                             {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"14","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "parkinglot.png"//9//
         								 },
         
         								   //black screen (With a husky manly shriek… Alex Interrupts) //
         								 { 
         									"Dlgs" : [ "90", "140"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"6","Lip":"1","Hair":"1","TopD":"11","BtmD":"0"},
                                             {"Chr":"1","Fs":"4","Shoe":"1","Lip":"1","Hair":"4","TopD":"14","BtmD":"0"},
                                             {"Chr":"2","Fs":"3","Shoe":"19","Lip":"1","Hair":"3","TopD":"8","BtmD":"4"}
         
         
         												], // Characters Definition
         									"BkgImG" : "parkinglot.png"//10//
         								 },
         
         						{ 
         									"Dlgs" : [ "141", "157"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"6","Lip":"1","Hair":"1","TopD":"11","BtmD":"0"},
                                             {"Chr":"1","Fs":"4","Shoe":"1","Lip":"1","Hair":"4","TopD":"14","BtmD":"0"},
                                             {"Chr":"2","Fs":"3","Shoe":"19","Lip":"1","Hair":"3","TopD":"8","BtmD":"4"},
                                             {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"2","BtmD":"1"}
         
         
         												], // Characters Definition
         									"BkgImG" : "parkinglot.png"//11//
         								 },
                            //black screen(Catherin leaves) 
         
         								 { 
         									"Dlgs" : [ "158", "185"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         									         {"Chr":"1","Fs":"4","Shoe":"1","Lip":"1","Hair":"4","TopD":"14","BtmD":"0"},
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"2","BtmD":"1"}
         
         
         
         
         
         
         												], // Characters Definition
         									"BkgImG" : "parkinglot.png"//12//
         								 },
         
          { 
         									"Dlgs" : [ "186", "187"], // '@@@'we should remove this dialogue as it is irrelevent 
         									"Chrs" : [
         												{"Chr":"1","Fs":"4","Shoe":"1","Lip":"1","Hair":"4","TopD":"14","BtmD":"0"},
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"2","BtmD":"1"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "classroom.png"//13//
         								 }
         
                                ]
         
         
         
         
         
         				},//chp ends
         
         { 		 
         
                    "ChpName" : "Style & Source", 
         			  "ChpScenes" : [
         								 { 
         									"Dlgs" : [ "188", "192"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"9","BtmD":"0"},
                                             {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"19"} 
         
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"//14//
         								 },
         
         
                                          //  BS  //
         
         { 
         									"Dlgs" : [ "193", "197"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"20","Lip":"1","Hair":"1","TopD":"9","BtmD":"0"},
                                             {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"19"}, 
                                             {"Chr":"1","Fs":"4","Shoe":"1","Lip":"1","Hair":"4","TopD":"13","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"//15//
         								 },
         
         							{ 
         									"Dlgs" : [ "198", "203"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"20","Lip":"1","Hair":"1","TopD":"9","BtmD":"11"},
                                             {"Chr":"1","Fs":"4","Shoe":"21","Lip":"1","Hair":"4","TopD":"13","BtmD":"11"},
                                             {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"19"},
                                             {"Chr":"1","Fs":"5","Shoe":"13","Lip":"1","Hair":"5","TopD":"35","BtmD":"1"}
         												], // Characters Definition
         									"BkgImG" : "classroom.png"//16//
         								 }, 
         								 //"black screen"  slide show//	 
         
         							{ 
         									"Dlgs" : [ "204", "207"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
                                             {"Chr":"1","Fs":"1","Shoe":"20","Lip":"1","Hair":"1","TopD":"9","BtmD":"11"},
                                             {"Chr":"1","Fs":"4","Shoe":"21","Lip":"1","Hair":"4","TopD":"13","BtmD":"11"},
                                             {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"19"},
                                             {"Chr":"1","Fs":"5","Shoe":"13","Lip":"1","Hair":"5","TopD":"35","BtmD":"1"}
         												], // Characters Definition
         									"BkgImG" : "classroom.png"//17//
         								 }, 
         
         
                               //"black screen" (Everyone shows their research presentation one by one in turn) 
         
                               { 
         									"Dlgs" : [ "208", "210"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
                                             {"Chr":"1","Fs":"1","Shoe":"20","Lip":"1","Hair":"1","TopD":"9","BtmD":"11"},
                                             {"Chr":"1","Fs":"4","Shoe":"21","Lip":"1","Hair":"4","TopD":"13","BtmD":"11"},
                                             {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"19"},
                                             {"Chr":"1","Fs":"5","Shoe":"13","Lip":"1","Hair":"5","TopD":"35","BtmD":"1"}
         												], // Characters Definition
         									"BkgImG" : "classroom.png"//18//
         								 }, 
         
         	               {
         							 	"Dlgs" : [ "211", "226"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         
                                             {"Chr":"1","Fs":"1","Shoe":"20","Lip":"1","Hair":"1","TopD":"9","BtmD":"0"},
                                             {"Chr":"2","Fs":"3","Shoe":"19","Lip":"1","Hair":"3","TopD":"7","BtmD":"17"},
                                             {"Chr":"2","Fs":"1","Shoe":"10","Lip":"1","Hair":"1","TopD":"3","BtmD":"16"},
                                             {"Chr":"1","Fs":"4","Shoe":"21","Lip":"1","Hair":"4","TopD":"13","BtmD":"0"},
                                             {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"19"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"//19//
         								 }, 	
         
         
         				{ 
         									"Dlgs" : [ "227", "232"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         
         												{"Chr":"1","Fs":"1","Shoe":"20","Lip":"1","Hair":"1","TopD":"9","BtmD":"0"},
                                             {"Chr":"2","Fs":"3","Shoe":"19","Lip":"1","Hair":"3","TopD":"7","BtmD":"17"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"//20//
         								 }, 
         
         
         
         				{ 
         									"Dlgs" : [ "233", "241"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         
         												{"Chr":"1","Fs":"1","Shoe":"20","Lip":"1","Hair":"1","TopD":"9","BtmD":"0"},
         
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"19"} // '@@@'phone call//
         												], // Characters Definition
         									"BkgImG" : "Char_Cath_ph2.png"//21//
         								 },
         
         								 { 
         									"Dlgs" : [ "242", "247"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         
         												{"Chr":"1","Fs":"1","Shoe":"20","Lip":"1","Hair":"1","TopD":"26","BtmD":"0"},
         
         
                                             {"Chr":"2","Fs":"3","Shoe":"19","Lip":"1","Hair":"3","TopD":"11","BtmD":"22"},
                                             {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"18","BtmD":"17"}
         												 // '@@@'phone call//
         												], // Characters Definition
         									"BkgImG" : "pub.png"//22//
         								 },						 
         
                   //black screen(After 3 hours they leave for home)// 
         
         
         { 
         									"Dlgs" : [ "248", "255"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
                                             {"Chr":"2","Fs":"1","Shoe":"6","Lip":"1","Hair":"1","TopD":"9","BtmD":"20"},
                                             {"Chr":"1","Fs":"1","Shoe":"20","Lip":"1","Hair":"1","TopD":"26","BtmD":"0"},
         
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"18","BtmD":"17"},
                                             {"Chr":"2","Fs":"3","Shoe":"19","Lip":"1","Hair":"3","TopD":"11","BtmD":"22"}
         												// '@@@' Let’s drive off home. Get into the car. //
         												], // Characters Definition
         									"BkgImG" : "pub.png"//23//
         								 },	
         
         
         
         								 { 
         									"Dlgs" : [ "256", "257"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         
         												{"Chr":"1","Fs":"6","Shoe":"1","Lip":"1","Hair":"6","TopD":"18","BtmD":"0"},
         
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"18","BtmD":"17"},
         												], // Characters Definition
         									"BkgImG" : "Catherinhome.png"//24//
         								}	
         
         
         
         								  ]
         
         		 }, //chp ends
         
         		 { 		 
         
         
         			  "ChpName" : "Heart Stealers & Heart Breakers", 
         			  "ChpScenes" : [
         								 //black screen(Finds Roselle and Charles coming together) 
         
         								 { 
         									"Dlgs" : [ "258", "263"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"0"},
         												{"Chr":"2","Fs":"3","Shoe":"19","Lip":"1","Hair":"3","TopD":"10","BtmD":"3"}
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"//25//
         								 },
         
         								 { 
         									"Dlgs" : [ "264", "280"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"0"},
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"12","BtmD":"2"},
         												{"Chr":"2","Fs":"3","Shoe":"9","Lip":"1","Hair":"3","TopD":"10","BtmD":"3"},
                                             {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"} 
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"//26//
         								 },
         								 { 
         									"Dlgs" : [ "281", "301"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
                                             {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"12","BtmD":"2"}, 
                                             {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"}, 
                                             {"Chr":"1","Fs":"2","Shoe":"11","Lip":"1","Hair":"2","TopD":"20","BtmD":"0"}   
         												], // Characters Definition
         									"BkgImG" : "classroom.png"//27//
         								 },
         								 //@@@ black screen Charles:  (Calls Roselle) 
         
         { 
         									"Dlgs" : [ "3011","3014"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         
                                             {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"12","BtmD":"2"}, 
                                             {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"}   
         												], // Characters Definition
         									"BkgImG" : "Char_Rose_ph.png"//28//
         								 },
         
         
         
         { 
         									"Dlgs" : [ "302", "343"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         
                                             {"Chr":"2","Fs":"2","Shoe":"16","Lip":"1","Hair":"2","TopD":"15","BtmD":"5"}, 
                                             {"Chr":"1","Fs":"4","Shoe":"13","Lip":"1","Hair":"4","TopD":"6","BtmD":"0"}   
         												], // Characters Definition
         									"BkgImG" : "subway.png"//29//
         								 },
         
         
         
          //black screen some article
         
         
         
           { 
         									"Dlgs" : [ "344", "347"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         
                                             {"Chr":"2","Fs":"2","Shoe":"16","Lip":"1","Hair":"2","TopD":"15","BtmD":"5"}, 
                                             {"Chr":"1","Fs":"4","Shoe":"13","Lip":"1","Hair":"4","TopD":"6","BtmD":"0"}   
         												], // Characters Definition
         									"BkgImG" : "subway.png"//30//
         								 }
         
                                ]
         
         
         
         
         
         				},//chp ends
         
         				{ 		 
         
                    "ChpName" : "Unveil of Feelings", 
         			  "ChpScenes" : [
         								 { 
         									"Dlgs" : [ "348", "355"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"17","BtmD":"0"},
         												{"Chr":"2","Fs":"1","Shoe":"15","Lip":"1","Hair":"1","TopD":"3","BtmD":"21"},
                                             {"Chr":"1","Fs":"2","Shoe":"5","Lip":"1","Hair":"2","TopD":"12","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },
         
         						//black screen (Catherin uses the laptop) (She finds a card saved on the desktop. She clicks on the icon and to her surprise she finds a Valentine card) // 
         { 
         									"Dlgs" : [ "356", "357"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"17","BtmD":"0"},
         												{"Chr":"2","Fs":"1","Shoe":"15","Lip":"1","Hair":"1","TopD":"3","BtmD":"21"},
                                             {"Chr":"1","Fs":"2","Shoe":"5","Lip":"1","Hair":"2","TopD":"12","BtmD":"0"} 
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },
         
         								  { 
         									"Dlgs" : [ "358", "371"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"17","BtmD":"0"},
                                             {"Chr":"2","Fs":"3","Shoe":"19","Lip":"1","Hair":"3","TopD":"8","BtmD":"10"},
                                             {"Chr":"2","Fs":"1","Shoe":"15","Lip":"1","Hair":"1","TopD":"3","BtmD":"21"}
         
         												], // Characters Definition
         									"BkgImG" : "classroom.png"
         								 },
         
         //black screen(The class starts) (Principal Mr. Roger arrives) 
         								  { 
         									"Dlgs" : [ "372", "382"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"17","BtmD":"0"},
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"2"},
                                             {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"},
                                             {"Chr":"1","Fs":"3","Shoe":"3","Lip":"1","Hair":"3","TopD":"15","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "classroom.png"
         								 },
         
         								   { 
         									"Dlgs" : [ "383", "415"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"17","BtmD":"11"},
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"2"},
                                             {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"11"},
                                             {"Chr":"1","Fs":"5","Shoe":"13","Lip":"1","Hair":"5","TopD":"35","BtmD":"1"}
         
         												], // Characters Definition
         									"BkgImG" : "classroom.png"
         								 },
         
         
         
         
         
         
         
         
         
         
         // black screen(Ms. George departs from the classroom) 
         
         								 { 
         									"Dlgs" : [ "416", "433"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
                                              {"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"17","BtmD":"0"},
                                              {"Chr":"1","Fs":"2","Shoe":"5","Lip":"1","Hair":"2","TopD":"12","BtmD":"0"}  
         												], // Characters Definition
         									"BkgImG" : "classroom.png"
         								}
         
                                ]
         
         
         
         
         
         				},//chp ends
         
         { 		 
         
                    "ChpName" : "Fashion & Trends", 
         			  "ChpScenes" : [
         								 { 
         									"Dlgs" : [ "434", "450"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"1","Shoe":"4","Lip":"1","Hair":"1","TopD":"1","BtmD":"6"},
                                              {"Chr":"1","Fs":"4","Shoe":"6","Lip":"1","Hair":"4","TopD":"30","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "Canteen.png"
         								 },
         
         
         							//black screen 451. Headline of the Article - The Top 10 Trends from New York  Fashion Week Spring 2017 by HILARY GEORGE-PARKIN 	 
         
         								 { 
         									"Dlgs" : [ "452", "458"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"1","Shoe":"4","Lip":"1","Hair":"1","TopD":"1","BtmD":"6"},
                                             {"Chr":"1","Fs":"4","Shoe":"6","Lip":"1","Hair":"4","TopD":"30","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "Canteen.png"
         								 },
         								 // black screen options
         
         								 //459. (Shall I propose her now?)   
         
                                  //460. (Shall I propose her later?) 
         
         
         
         
         
         
         
         								 { 
         									"Dlgs" : [ "461", "468"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"1","Shoe":"4","Lip":"1","Hair":"1","TopD":"1","BtmD":"6"},
                                             {"Chr":"1","Fs":"4","Shoe":"6","Lip":"1","Hair":"4","TopD":"30","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "Canteen.png"
         								 },
         								// black screen options (Shall I propose her later?)
         
         								 { 
         									"Dlgs" : [ "469", "481"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"1","Shoe":"4","Lip":"1","Hair":"1","TopD":"1","BtmD":"6"},
                                             {"Chr":"1","Fs":"4","Shoe":"6","Lip":"1","Hair":"4","TopD":"30","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "Canteen.png"
         								 },
         
         								 { 
         									"Dlgs" : [ "482", "491"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"1","Shoe":"4","Lip":"1","Hair":"1","TopD":"1","BtmD":"6"},
                                             {"Chr":"1","Fs":"4","Shoe":"6","Lip":"1","Hair":"4","TopD":"30","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "Canteen.png"
         								 }
         
         								 //(Shall I propose her later?)  
         
         //Stephen: (Thinking)  492. I think I should propose her later. At some other place. 
         //493. This isn’t the right time. I don’t know what’s she thinking about  me…
         //494. First, I should know whether she also feels the same for me. 
         
         
         
         								/* { 
         									"Dlgs" : [ "495", "517"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"1","Shoe":"4","Lip":"1","Hair":"1","TopD":"1","BtmD":"6"},
                                             {"Chr":"1","Fs":"4","Shoe":"6","Lip":"1","Hair":"4","TopD":"30","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "Canteen.png"
         									}*/
         
                                ]
         
         
         
         
         
         		},//chp ends
         
         				{ 		 
         
                    "ChpName" : "Project Work seasoned with Jealousy", 
         			  "ChpScenes" : [
         								 { 
         									"Dlgs" : [ "518", "545"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"2","BtmD":"16"},
                                             {"Chr":"1","Fs":"4","Shoe":"4","Lip":"1","Hair":"4","TopD":"10","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },	
         
         							// black screen(Charles & Roselle departs) 	 
         
         
         { 
         									"Dlgs" : [ "546", "572"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"2","BtmD":"16"},
                                             {"Chr":"2","Fs":"1","Shoe":"10","Lip":"1","Hair":"1","TopD":"3","BtmD":"22"}
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },
         
         						// black screen(Thinking in the state of dilemma)		 
         
         
         
         
         								 { 
         
         
         
         									"Dlgs" : [ "573", "577"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"2","BtmD":"16"},
                                             {"Chr":"2","Fs":"1","Shoe":"10","Lip":"1","Hair":"1","TopD":"3","BtmD":"22"}
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },
         
         
         								 { 
         
         
         
         									"Dlgs" : [ "578", "579"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"2","BtmD":"16"},
                                             {"Chr":"2","Fs":"1","Shoe":"10","Lip":"1","Hair":"1","TopD":"3","BtmD":"22"}
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },	 
         
         
         
         		//(While passing through the corridor, Roselle and Charles crossed on their way. He saw Roselle and thought) 
         
         
         
         
         								//black screen(poem)580-594
         
         
         							{ 
         									"Dlgs" : [ "580", "594"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"2","BtmD":"16"}
         
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },
         								 { 
         									"Dlgs" : [ "595", "604"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"2","BtmD":"16"},
                                             {"Chr":"1","Fs":"4","Shoe":"4","Lip":"1","Hair":"4","TopD":"10","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 }
         
                                ]
         
         
         
         
         
         				},//chp ends
         
         				{ 		 
         
                    "ChpName" : "Tangles in Love", 
         			  "ChpScenes" : [
         								 { 
         									"Dlgs" : [ "605", "607"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"1","Shoe":"6","Lip":"1","Hair":"1","TopD":"14","BtmD":"18"},
                                             {"Chr":"1","Fs":"2","Shoe":"11","Lip":"1","Hair":"2","TopD":"19","BtmD":"0"}
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },		
         //black screen[In the following lines, Evelyn means to refer about the valentine card which she predicts is for her according to Catherin and her conversation (about Evelyn’s equation with him(Stephen)] 
          { 
         									"Dlgs" : [ "608", "612"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         											{"Chr":"2","Fs":"1","Shoe":"6","Lip":"1","Hair":"1","TopD":"14","BtmD":"18"},
                                          {"Chr":"1","Fs":"2","Shoe":"11","Lip":"1","Hair":"2","TopD":"19","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },
         
         								 // black screen(However, Stephen likes Roselle and takes Evelyn just a best friend of him…) Stephen: (Stunts…...) 
         
         							{ 
         									"Dlgs" : [ "613", "616"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"1","Shoe":"6","Lip":"1","Hair":"1","TopD":"14","BtmD":"18"},
                                             {"Chr":"1","Fs":"2","Shoe":"11","Lip":"1","Hair":"2","TopD":"19","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },	
         							// black screen[Thinking that he (Stephen) loves her(Evelyn)] 	 
         
         							{ 
         									"Dlgs" : [ "617", "623"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"1","Shoe":"6","Lip":"1","Hair":"1","TopD":"14","BtmD":"18"},
                                             {"Chr":"1","Fs":"2","Shoe":"11","Lip":"1","Hair":"2","TopD":"19","BtmD":"0"}
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },		 
         							//black screenStephen: (Stephen is confused… whether Roselle has disclosed it to Catherin and so has Catherin to Evelyn?) 	 
         							{ 
         									"Dlgs" : [ "624", "633"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"2","Shoe":"11","Lip":"1","Hair":"2","TopD":"19","BtmD":"0"},
                                              {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "Computerlab.png"
         								 },	 
         
                      //black screen charles enter
         								  { 
         									"Dlgs" : [ "634", "640"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"2","Shoe":"11","Lip":"1","Hair":"2","TopD":"19","BtmD":"0"},
                                              {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"},
                                              {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"2"}
         												], // Characters Definition
         									"BkgImG" : "Computerlab.png"
         								 },
         
         								 // blank screen	(After calling his mom…) 
         								 { 
         									"Dlgs" : [ "641", "642"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"2","Shoe":"11","Lip":"1","Hair":"2","TopD":"19","BtmD":"0"},
                                              {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"},
                                              {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"2"}
         												], // Characters Definition
         
         
         
         									"BkgImG" : "Computerlab.png"
         								 },	
         
            // black screen(Charles & Roselle leaves towards the parking lot. On their way they come across Catherin) 
         
            { 
         									"Dlgs" : [ "643", "661"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"0"},
                                              {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"},
                                              {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"2"}
         
         
         												], // Characters Definition
         									"BkgImG" : "parkinglot.png"
         								 },	
         
         	// black screen(Charles & Roselle leaves to shop the fabric for the dress. After shopping Charles gaze at Roselle and requests her to accompany him for  Jehan Rictus garden square).  
         
         						{ 
         									"Dlgs" : [ "662", "671"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"},
                                              {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"2"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Car.png"
         								 },	
         //Paris is known as the city of lights’, ‘the city of Romance’, ‘the culinary capital of the world’. To know more a beautiful place in Paris click below: 
         
         //(Personal Note for the creator of App: The segment is pink color is optional and has to be flashed only if the reader clicks) 
         
         
         								 //black screen(Roselle at home in her bed - contemplating) 
         
         { 
         									"Dlgs" : [ "672", "679"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"},
                                              {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"2"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "walloflove.png"
         								 },
         
         
         			{ 
         									"Dlgs" : [ "680", "689"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"},
                                              {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"2"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "walloflove.png"
         								 },					 
         
         
         { 
         									"Dlgs" : [ "690", "692"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"}
         
         
         
         
         												], // Characters Definition
         									"BkgImG" : "rosellebedroom.png"
         								 },
         								 //black screen(Charles at home in his bed) 
         								 { 
         									"Dlgs" : [ "693", "696"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"5","BtmD":"2"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "charlesbedroom.png"
         								 },
         								 //black screen(Cathrine at home in her bed) 
         								  { 
         									"Dlgs" : [ "697", "703"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         												{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"0"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "cathrinebedroom.png"
         								}	
         
         
         
         								  ]
         
         		 }, //chp ends
         		 { 		 
         
         
         
         
         
         			  "ChpName" : "A Lake of Annoyance & Broken Hearts", 
         			  "ChpScenes" : [
         								 { 
         									"Dlgs" : [ "704", "717"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"4","BtmD":"0"},
         												{"Chr":"2","Fs":"3","Shoe":"9","Lip":"1","Hair":"3","TopD":"4","BtmD":"6"}
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },
         
         
         								 // black screen(Alex leaves but Catherin is still in the corridor. Roselle arrives there in a beautiful dress). 
         
         								 { 
         									"Dlgs" : [ "718", "724"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"4","BtmD":"0"},
         
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"7","BtmD":"0"}
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },
         
         								 //black screen(Selfie game) (After capturing the selfie) 
         
         { 
         									"Dlgs" : [ "725", "730"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"4","BtmD":"0"},
         
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"7","BtmD":"0"}
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },
         						//black screen(Roselle & Catherin leaves to the lab to head their day) . 		 
         
         
         
         { 
         									"Dlgs" : [ "731", "747"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"2","TopD":"13","BtmD":"4"},
                                              {"Chr":"2","Fs":"3","Shoe":"9","Lip":"1","Hair":"3","TopD":"4","BtmD":"6"}
         
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },
         
         								 //@@@ black screen(Charles goes to the computer lab) 
         { 
         									"Dlgs" : [ "748", "753"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"2","TopD":"13","BtmD":"4"},
                                             {"Chr":"2","Fs":"1","Shoe":"6","Lip":"1","Hair":"1","TopD":"7","BtmD":"1"}
         
         
         												], // Characters Definition
         									"BkgImG" : "Computerlab.png"
         								 },
                                //black screen[Trying to stop Charles from going to Roselle as he (Stephen) loves her(Roselle)]. 
         { 
         									"Dlgs" : [ "754", "763"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"2","TopD":"13","BtmD":"4"},
                                             {"Chr":"2","Fs":"1","Shoe":"6","Lip":"1","Hair":"1","TopD":"7","BtmD":"1"}
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },
         
         
         								//black screen rosselle enter
         
         
         								 { 
         									"Dlgs" : [ "764", "785"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"2","TopD":"13","BtmD":"4"},
                                             {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"7","BtmD":"0"}
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },
         
         								 // black screen(Thinks herself while loitering in the house
         								 { 
         									"Dlgs" : [ "786", "789"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
                                             {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"7","BtmD":"0"}
         
         
         												], // Characters Definition
         									"BkgImG" : "rosselhouse.png"
         								 },
         
         								 //black screen(Roselle visits Hartford and buy a dress for herself).  (Dress up game). (Next day – Evening time)Roselle is baking cake and pizza for Charles 
         								{ 
         									"Dlgs" : [ "790", "791"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"2","TopD":"22","BtmD":"22"},
                                             {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"1","BtmD":"0"}
         
         
         												], // Characters Definition
         									"BkgImG" : "rosselhouse.png"
         								 },
         
         								 { 
         									"Dlgs" : [ "792", "806"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"2","TopD":"22","BtmD":"22"},
                                             {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"1","BtmD":"0"}
         
         
         												], // Characters Definition
         									"BkgImG" : "rosselhouse.png"
         								 },
         
         
         
                              // black screen(In the car)
         								 { 
         									"Dlgs" : [ "807", "812"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"2","TopD":"22","BtmD":"22"},
                                             {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"1","BtmD":"0"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Car.png"
         								 }	
         
         
         
         								  ]
         
         		 }, //chp ends
         		 { 		 
         
         
         
         
         
         			  "ChpName" : "Birthday bash", 
         			  "ChpScenes" : [
         
         								{ 
         									"Dlgs" : [ "813", "818"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"16","Lip":"1","Hair":"2","TopD":"22","BtmD":"22"},
         												{"Chr":"1","Fs":"7","Shoe":"20","Lip":"1","Hair":"7","TopD":"31","BtmD":"0"}
         
         
         												], // Characters Definition
         									"BkgImG" : "Charleshome.png"
         								 }, 
         
         								 //black screen(After 10 mins Charles is in the drawing room and the guests (Mr. & Mrs. Herbert and Catherin arrive) 
         
         { 
         									"Dlgs" : [ "819", "821"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"7","Shoe":"20","Lip":"1","Hair":"7","TopD":"31","BtmD":"0"},
         												{"Chr":"2","Fs":"2","Shoe":"16","Lip":"1","Hair":"2","TopD":"22","BtmD":"22"},
         											   {"Chr":"2","Fs":"4","Shoe":"4","Lip":"1","Hair":"4","TopD":"20","BtmD":"20"},
                                             {"Chr":"1","Fs":"6","Shoe":"15","Lip":"1","Hair":"6","TopD":"18","BtmD":"0"},
                                             {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"25","BtmD":"0"},
                                             {"Chr":"2","Fs":"5","Shoe":"10","Lip":"1","Hair":"5","TopD":"21","BtmD":"21"}
         
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Charleshome.png"
         								 }, 
         
         
         
         
         			{ 
         									"Dlgs" : [ "822","829"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         												{"Chr":"2","Fs":"5","Shoe":"10","Lip":"1","Hair":"5","TopD":"21","BtmD":"21"},
                                             {"Chr":"2","Fs":"4","Shoe":"4","Lip":"1","Hair":"4","TopD":"20","BtmD":"14"}
         
         
         												], // Characters Definition
         									"BkgImG" : "Charleshome.png"
         								 }, 	 
         
         
         
         								 { 
         									"Dlgs" : [ "830", "841"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												 {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"25","BtmD":"0"},
         												 {"Chr":"2","Fs":"2","Shoe":"16","Lip":"1","Hair":"2","TopD":"22","BtmD":"22"},
         												 {"Chr":"1","Fs":"7","Shoe":"20","Lip":"1","Hair":"7","TopD":"31","BtmD":"0"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Charleshome.png"
         								 }, 
         
         								// black screen(Charles’ phone rings - displays Roselle calling)  
         								 { 
         									"Dlgs" : [ "842", "847"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"16","Lip":"1","Hair":"2","TopD":"22","BtmD":"22"},
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"1","BtmD":"0"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Char_Rose_ph.png"
         								 }, 
         
         
         								 { 
         									"Dlgs" : [ "848", "850"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"25","BtmD":"0"},
         												 {"Chr":"2","Fs":"2","Shoe":"16","Lip":"1","Hair":"2","TopD":"22","BtmD":"22"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Charleshome.png"
         								 }, 	 
         
         
         
         // black screen(On the other side at dinner table Mr. & Mrs. Herbert & Mr. & Mrs. Wilson are talking about the equation of Charles & Catherin). 
         	 { 
         									"Dlgs" : [ "851", "859"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"7","Shoe":"20","Lip":"1","Hair":"7","TopD":"31","BtmD":"0"},
                                             {"Chr":"2","Fs":"5","Shoe":"10","Lip":"1","Hair":"5","TopD":"21","BtmD":"21"},
                                             {"Chr":"1","Fs":"6","Shoe":"15","Lip":"1","Hair":"6","TopD":"18","BtmD":"0"},
         												{"Chr":"2","Fs":"4","Shoe":"4","Lip":"1","Hair":"4","TopD":"20","BtmD":"20"}
         
         
         
         
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Charleshome.png"
         								 }, 
         				//@@@ black screen(After dinner, Catherin & her parents disperse for home). (The scene at Catherin’s house) 				 
         				{ 
         									"Dlgs" : [ "860", "874"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"6","Shoe":"15","Lip":"1","Hair":"6","TopD":"18","BtmD":"0"},
         												{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"25","BtmD":"0"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Catherinhome.png"
         								 }	
         
         
         
         								  ]
         
         		 }, //chp ends
         		 { 		 
         
         
         
         
         			  "ChpName" : "Shaping of Apparels", 
         			  "ChpScenes" : [
         								 { 
         									"Dlgs" : [ "875", "884"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"3","Shoe":"9","Lip":"1","Hair":"3","TopD":"10","BtmD":"3"},
         												{"Chr":"1","Fs":"5","Shoe":"13","Lip":"1","Hair":"5","TopD":"35","BtmD":"1"},
                                             {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"12","BtmD":"2"},
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"32","BtmD":"11"}
         												], // Characters Definition
         									"BkgImG" : "classroom.png"
         								 },
         
         
         
         								 { 
         									"Dlgs" : [ "885", "895"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												 {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"12","BtmD":"2"},
         												 {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"32","BtmD":"11"}
                                             ], // Characters Definition
                                             	"BkgImG" : "classroom.png"
         								 },
         
         
         
         
         							//@@@ black screen(Roselle goes to the workshop & Starts working on design). (Catherin also goes to the workshop, hides behind and watches Roselle’s design - Game). (After sometime Charles enters the workshop). 	 
         { 
         									"Dlgs" : [ "896", "898"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												 {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"12","BtmD":"2"},
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"32","BtmD":"11"}
         
         
         												], // Characters Definition
         									"BkgImG" : "workshop.png"
         								 },
         						//@@@ black screenslide show of collars		 
         
         							{ 
         									"Dlgs" : [ "899", "902"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												 {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"12","BtmD":"2"},
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"32","BtmD":"11"}
         
         
         												], // Characters Definition
         									"BkgImG" : "workshop.png"
         								 },
         
         
         							{ 
         									"Dlgs" : [ "903", "906"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												 {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"12","BtmD":"2"},
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"32","BtmD":"11"}
         
         
         												], // Characters Definition
         									"BkgImG" : "workshop.png"
         								 },
         // black screenslide show of collars	
         
         
         
         { 
         									"Dlgs" : [ "907", "915"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												 {"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"12","BtmD":"2"},
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"32","BtmD":"11"}
         
         
         												], // Characters Definition
         									"BkgImG" : "workshop.png"
         								 },
         // black screen(On the other hand, Alex’ nasty mind is planning a prank to deviate Roselle). 
         
         //Alex: (Offers bribery to the guard of locker room).
         								 //936. Option 1 – safe…Option – 2 is risky no use dont elobarate
         
         					{ 
         									"Dlgs" : [ "916", "940"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"3","Shoe":"9","Lip":"1","Hair":"3","TopD":"10","BtmD":"3"},
         												{"Chr":"2","Fs":"6","Shoe":"1","Lip":"1","Hair":"6","TopD":"23","BtmD":"19"}
         
         
         												], // Characters Definition
         									"BkgImG" : "lockerroom.png"
         								}	
         
         
         
         								  ]
         
         		 }, //chp ends
         		 { 		 
         
         
         
         
         
         			  "ChpName" : "The Catastrophe", 
         			  "ChpScenes" : [
         
         								{ 
         									"Dlgs" : [ "941", "953"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"17","BtmD":"11"},
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"11"},
                                             {"Chr":"1","Fs":"5","Shoe":"13","Lip":"1","Hair":"5","TopD":"35","BtmD":"1"}
         
         												], // Characters Definition
         									"BkgImG" : "workshop.png"
         								 }, 
         
         //black screenslide
         
         	{ 
         									"Dlgs" : [ "954", "958"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"2","TopD":"6","BtmD":"14"},
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"},
                                             {"Chr":"2","Fs":"1","Shoe":"6","Lip":"1","Hair":"1","TopD":"1","BtmD":"1"}
         												], // Characters Definition
         									"BkgImG" : "workshop.png"
         								 },
         
         				// black screen(On a cell phone screen) 				 
         
         								 { 
         									"Dlgs" : [ "959", "967"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"},
                                             {"Chr":"1","Fs":"8","Shoe":"6","Lip":"1","Hair":"8","TopD":"21","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "rose_Bryan_Ph.png"
         								 },
         
         
         								 { 
         									"Dlgs" : [ "968", "972"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"2","TopD":"6","BtmD":"14"},
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"28","BtmD":"0"},
                                             {"Chr":"2","Fs":"1","Shoe":"6","Lip":"1","Hair":"1","TopD":"1","BtmD":"1"}
         
         
         												], // Characters Definition
         									"BkgImG" : "workshop.png"
         								 }	
         
         
         
         								  ]
         
         		 }, //chp ends
         		 { 		 
         
         
         
         
         
         			  "ChpName" : "Designer Apparels Ready to Rock", 
         			  "ChpScenes" : [
         
         								{ 
         									"Dlgs" : [ "973", "983"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"2","TopD":"12","BtmD":"16"},
         												{"Chr":"1","Fs":"4","Shoe":"1","Lip":"1","Hair":"4","TopD":"14","BtmD":"11"},
         												{"Chr":"1","Fs":"5","Shoe":"13","Lip":"1","Hair":"5","TopD":"35","BtmD":"1"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "workshop.png"
         							 }, 
         				//black screenslide
         	//black screen(After the examination of costumes, everyone placed their costumes in the assigned personal lockers. All were about to disperse). Charles & Roselle are about to leave. Charles left his key in the bag of his costume which he kept in his locker. He was searching for it but suddenly he recollected that it’s left in the bag of costume which is placed in the locker). 	 
         
         
         
         						{ 
         									"Dlgs" : [ "984", "991"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"17","BtmD":"0"},
         
                                             {"Chr":"2","Fs":"1","Shoe":"6","Lip":"1","Hair":"1","TopD":"7","BtmD":"13"}
         
         												], // Characters Definition
         									"BkgImG" : "workshop.png"
         								 }, 
         
         
         								//black screen(After everyone leaves the college, Alex tries to put his malicious thought into action) Charles:  
         
         
         							{ 
         									"Dlgs" : [ "992", "993"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"4","Shoe":"1","Lip":"1","Hair":"4","TopD":"14","BtmD":"0"},
         
                                             {"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"2","TopD":"12","BtmD":"16"} 
         
         												], // Characters Definition
         									"BkgImG" : "workshop.png"
         								 },
         
         
         
          // black screen(Scene in the locker room)	 
         								{ 
         									"Dlgs" : [ "994", "997"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"3","Shoe":"9","Lip":"1","Hair":"3","TopD":"6","BtmD":"3"},
         												{"Chr":"2","Fs":"6","Shoe":"1","Lip":"1","Hair":"6","TopD":"23","BtmD":"19"} 
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 }, 
         
         
         				// black screen(On one side Charles is heading towards the locker room and on the other hand, Alex is about to get the key from the envelope and distort Roselle’s costume in order to take his pranky revenge). 
         
         //(While Alex is all set with Roselle’s dress in his hand and spill the drops of acidic fluid which on sprinkling the fabric immediately gets torn, Charles reaches there). 				 		
         	{ 
         									"Dlgs" : [ "998", "1007"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												 {"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"2","TopD":"12","BtmD":"16"}, 
                                              {"Chr":"2","Fs":"3","Shoe":"9","Lip":"1","Hair":"3","TopD":"8","BtmD":"3"}
         
         
         												], // Characters Definition
         									"BkgImG" : "lockerroom.png"
         								 }, 
         
         
         								 //@@@ black screen(As Charles took a long time to return, Roselle goes to the locker room to see where Charles is stuck up). (Roselle in the locker room). 							 		
         								 { 
         									"Dlgs" : [ "1008", "1009"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"4","Shoe":"1","Lip":"1","Hair":"4","TopD":"14","BtmD":"0"},
                                             {"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"2","TopD":"12","BtmD":"16"}, 
                                             {"Chr":"2","Fs":"3","Shoe":"9","Lip":"1","Hair":"3","TopD":"8","BtmD":"3"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "lockerroom.png"
         								 }, 
         								//black screen (Charles narrates the entire incident and his malicious pranky intention). 
         
         								 { 
         									"Dlgs" : [ "1010", "1018"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"4","Shoe":"1","Lip":"1","Hair":"4","TopD":"14","BtmD":"0"},
                                             {"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"2","TopD":"12","BtmD":"16"}, 
                                             {"Chr":"2","Fs":"3","Shoe":"9","Lip":"1","Hair":"3","TopD":"8","BtmD":"3"}
         
         
         												], // Characters Definition
         									"BkgImG" : "lockerroom.png"
         								 }	
         
         
         
         								  ]
         
         		 }, //chp ends
         		 { 		 
         
         
         
         
         
         			  "ChpName" : "Behind the Curtains ", 
         			  "ChpScenes" : [
         
         								{ 
         									"Dlgs" : [ "1019", "1029"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"3","Lip":"1","Hair":"2","TopD":"15","BtmD":"2"},
                                              {"Chr":"2","Fs":"7","Shoe":"3","Lip":"1","Hair":"7","TopD":"24","BtmD":"16"},
         												], // Characters Definition
         									"BkgImG" : "stage.png"
         								 }
         
         								 /*{ 
         									"Dlgs" : [ "1030", "1038"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"8","Shoe":"1","Lip":"1","Hair":"8","TopD":"17","BtmD":"22"},
         
                                            {"Chr":"1","Fs":"5","Shoe":"13","Lip":"1","Hair":"5","TopD":"35","BtmD":"1"},
         
         												], // Characters Definition
         									"BkgImG" : "stage.png"
         								 }	*/
         
         
         
         								  ]
         
         		 }, //chp ends
         		 { 		 
         
         
         
         
         
         			  "ChpName" : "Glamour Time", 
         			  "ChpScenes" : [
         
         								{ 
         									"Dlgs" : [ "1041", "1047"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         									         {"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"19","BtmD":"19"},
         									         {"Chr":"1","Fs":"4","Shoe":"1","Lip":"1","Hair":"4","TopD":"22","BtmD":"0"},
         									         {"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"2","BtmD":"0"}
         
         
         												], // Characters Definition
         									"BkgImG" : "stage.png"
         
         // black screen  "we havenot  made judges and event mangaer and host characters "
                                          }	
         
         
         
         								  ]
         
         		 }, //chp ends
         		 { 		 
         
         
         
         
         
         			  "ChpName" : "Roselle – Behind the Bars", 
         			  "ChpScenes" : [
         
         								{ 
         									"Dlgs" : [ "1049", "1062"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"2","BtmD":"0"},
         									         {"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"19","BtmD":"19"},
         									         {"Chr":"1","Fs":"4","Shoe":"1","Lip":"1","Hair":"4","TopD":"22","BtmD":"0"}
         												], // Characters Definition
         									"BkgImG" : "stage.png"
         								 }, 
         
         
         								 { 
         									"Dlgs" : [ "1063", "1071"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         												{"Chr":"1","Fs":"1","Shoe":"3","Lip":"1","Hair":"1","TopD":"5","BtmD":"0"},
                                             {"Chr":"1","Fs":"6","Shoe":"3","Lip":"1","Hair":"6","TopD":"18","BtmD":"0"},
         
         												], // Characters Definition
         									"BkgImG" : "Catherinhome.png"
         								 }, 
         
         
         
         								 { 
         									"Dlgs" : [ "1072", "1086"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"16","BtmD":"16"},
         
                                             {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"23","BtmD":"0"}
         
         
         												], // Characters Definition
         									"BkgImG" : "Char_Rose_ph.png"
         								 },
         
         { 
         									"Dlgs" : [ "1087", "10901"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"23","BtmD":"0"},
         
                                             {"Chr":"2","Fs":"1","Shoe":"6","Lip":"1","Hair":"1","TopD":"14","BtmD":"6"} 
         
         												], // Characters Definition
         									"BkgImG" : "rose_step_ph.png"
         								 },
         
         								// black screen(Scene – At the Shop ‘Luxury De Crystal’)  
         						{ 
         									"Dlgs" : [ "1091", "1096"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"16","BtmD":"16"},
         
                                             {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"23","BtmD":"0"}
         
         
         												], // Characters Definition
         									"BkgImG" : "jewelleryshop.png"
         								 },
         								// black screen sales girl enter 
         							{ 
         									"Dlgs" : [ "1097", "1125"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         									         {"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"16","BtmD":"16"},
                                             {"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"23","BtmD":"0"},
                                             {"Chr":"1","Fs":"9","Shoe":"1","Lip":"1","Hair":"9","TopD":"33","BtmD":"0"}
         
         
         
         
         
         												], // Characters Definition
         									"BkgImG" : "jewelleryshop.png"
         								 },	 
         
         								  // black screen manager enter 
         
         
         							// black screen(Charles narrates everything to the manager) 	 	
         					{ 
         									"Dlgs" : [ "1127","1132"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"16","BtmD":"16"},
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"23","BtmD":"0"},
                                             {"Chr":"1","Fs":"10","Shoe":"4","Lip":"1","Hair":"10","TopD":"34","BtmD":"0"},
                                             {"Chr":"1","Fs":"9","Shoe":"1","Lip":"1","Hair":"9","TopD":"33","BtmD":"0"}
         
         
         												], // Characters Definition
         									"BkgImG" : "jewelleryshop.png"
         								 },
         								 // black screen(Charles allows to check) (While checking Roselle’s Purse…...) 
         								 { 
         									"Dlgs" : [ "1133","1141"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"16","BtmD":"16"},
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"23","BtmD":"0"},
                                             {"Chr":"1","Fs":"10","Shoe":"4","Lip":"1","Hair":"10","TopD":"34","BtmD":"0"},
                                             {"Chr":"1","Fs":"9","Shoe":"1","Lip":"1","Hair":"9","TopD":"33","BtmD":"0"}
         
         
         												], // Characters Definition
         									"BkgImG" : "jewelleryshop.png"
         								 },
         								 	// black screen(Manager narrates the incident to the cop… The cops arrest Roselle) 
         			 { 
         									"Dlgs" : [ "1142","1144"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         
         
                                             {"Chr":"1","Fs":"10","Shoe":"1","Lip":"1","Hair":"10","TopD":"34","BtmD":"0"},
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"16","BtmD":"16"}
         
         												], // Characters Definition
         									"BkgImG" : "jewelleryshop.png"
         
         
         		// black screenNote for Reader
         
         		//1145. Has Roselle stolen the ring? If yes then, Is she behind Charles’ money? 
         		//1146. Is Catherin trying to strangle Roselle so that she can marry Charles? 
         		//1147. Is Stephen trying to depart Roselle and Charles so that he can propose his  love to Roselle? 
         		//1148. Is Alex trying to take revenge with Roselle? 
         
         //To know the real culprit…. Unlock the points.
         
         			                 }
         
         
         
         								  ]
         
         		 }, //chp ends
         		 { 		 
         
         
         
         
         
         			  "ChpName" : "Disheartening Infidelity ", 
         			  "ChpScenes" : [
         
         								{ 
         									"Dlgs" : [ "1149", "1152"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"9","BtmD":"16"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Charleshome.png"
         								 },
         
         
         
         
         { 
         									"Dlgs" : [ "1153", "1166"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"23","BtmD":"0"},
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"9","BtmD":"16"}
         
         
         												], // Characters Definition
         									"BkgImG" : "Policestation.png"
         								 },
         
         								// black screen (Calls Stephen
         								{ 
         									"Dlgs" : [ "1168", "1172"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"9","BtmD":"16"},
         												{"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"3","BtmD":"20"}
         
         
         												], // Characters Definition
         									"BkgImG" : "Char_step_Ph.png"
         								 }, 
         
         
         								{ 
         									"Dlgs" : [ "1173", "1176"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"9","BtmD":"16"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Charleshome.png"
         								 },	 
         
         
         
         
         
         								  // black screen(Next Day) (Charles & Stephen goes to the jail to meet Roselle) 
         
         { 
         									"Dlgs" : [ "1177", "1197"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"9","BtmD":"10"},
         												{"Chr":"2","Fs":"1","Shoe":"11","Lip":"1","Hair":"1","TopD":"3","BtmD":"22"},
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"23","BtmD":"0"}
         
         
         												], // Characters Definition
         									"BkgImG" : "Policestation.png"
         								  }	
         
         
         
         								  ]
         
         		 }, //chp ends
         		 { 		 
         
         
         
         
         
         			  "ChpName" : "Investigation Begins ", 
         			  "ChpScenes" : [
         
         								{ 
         									"Dlgs" : [ "1198", "1223"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"10","Lip":"1","Hair":"2","TopD":"12","BtmD":"10"},
         												{"Chr":"2","Fs":"1","Shoe":"4","Lip":"1","Hair":"1","TopD":"14","BtmD":"22"}
         
         												], // Characters Definition
         									"BkgImG" : "Corridorcollege.png"
         								 },
         	      // black screen charles call mr herbert
         								{ 
         									"Dlgs" : [ "1224", "1238"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"10","Lip":"1","Hair":"2","TopD":"12","BtmD":"10"},
         
         
                                             {"Chr":"2","Fs":"5","Shoe":"4","Lip":"1","Hair":"5","TopD":"21","BtmD":"21"}
         
         												], // Characters Definition
         									"BkgImG" : "Char_herbrt_Ph.png"
         								 }, 
         
                     // black screen(Charles calling Catherin) 
         
          { 
         									"Dlgs" : [ "1239", "1245"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"10","Lip":"1","Hair":"2","TopD":"12","BtmD":"10"},
         												{"Chr":"1","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"4","BtmD":"0"},
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Char_Cath_ph.png"
         								}	
         
                             // black screen(Charles calling Catherin)
         		        //chp ends        
         
         								  ]
         
         		 },  
         
         		 { 		 
         
         
         
         
         
         			  "ChpName" : "The Spy ", 
         			  "ChpScenes" : [
         
         								{ 
         									"Dlgs" : [ "1249", "1262"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"15","BtmD":"10"},
                                             {"Chr":"2","Fs":"8","Shoe":"4","Lip":"1","Hair":"8","TopD":"11","BtmD":"2"}
         
         
         												], // Characters Definition
         									"BkgImG" : "Char_jonath_Ph.png"
         								 },
         
         								    // black screen(Charles texts him (Mr. Johnathan) the information)  
         							{ 
         									"Dlgs" : [ "1263", "1305"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"2","Lip":"1","Hair":"2","TopD":"15","BtmD":"10"},
         
                                             {"Chr":"2","Fs":"1","Shoe":"4","Lip":"1","Hair":"1","TopD":"3","BtmD":"12"}
         
         												], // Characters Definition
         									"BkgImG" : "Charleshome.png"
         								 }	
         
         
         
         								  ]
         
         		 }, //chp ends
         		 { 		 
         
         
         
         
         
         			  "ChpName" : "The Mystery Hovers", 
         			  "ChpScenes" : [
                              // black screen (Checking his emails)  
         
         
         
         
         
         
         
         
         								{ 
         									"Dlgs" : [ "1306", "1324"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"9","Lip":"1","Hair":"2","TopD":"5","BtmD":"10"},
         
                                             {"Chr":"2","Fs":"1","Shoe":"4","Lip":"1","Hair":"1","TopD":"14","BtmD":"12"}
         
         												], // Characters Definition
         									"BkgImG" : "Charleshome.png"
         								 },
         						 // black screen(Upon reaching at the shop) 	
         
         					/* { 
         									"Dlgs" : [ "1325", "1327"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"9","Lip":"1","Hair":"2","TopD":"5","BtmD":"10"},
         
                                             {"Chr":"2","Fs":"1","Shoe":"4","Lip":"1","Hair":"1","TopD":"14","BtmD":"12"},
         											   {"Chr":"0","Fs":"0","Shoe":"0","Lip":"0","Hair":"0","TopD":"0","BtmD":"0"}
         												], // Characters Definition
         									"BkgImG" : "jewelleryshop.png"
         								 },*/			 
         
         
         
         
         
         
         
         
         
         
         
         
         
         						 { 
         									"Dlgs" : [ "1328", "1340"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"9","Lip":"1","Hair":"2","TopD":"5","BtmD":"10"},
         
                                             {"Chr":"2","Fs":"1","Shoe":"4","Lip":"1","Hair":"1","TopD":"14","BtmD":"12"},
         
         												{"Chr":"1","Fs":"10","Shoe":"4","Lip":"1","Hair":"10","TopD":"34","BtmD":"0"}
         
         
         
         
         
         												], // Characters Definition
         									"BkgImG" : "jewelleryshop.png"
         								 },
         						  // black screen(After seeing all the salesmen). 
         
         					{ 
         									"Dlgs" : [ "1341", "1350"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"9","Lip":"1","Hair":"2","TopD":"5","BtmD":"10"},
         
                                             {"Chr":"2","Fs":"1","Shoe":"4","Lip":"1","Hair":"1","TopD":"14","BtmD":"12"},
         
         												{"Chr":"1","Fs":"10","Shoe":"4","Lip":"1","Hair":"10","TopD":"34","BtmD":"0"}
         
         
         
         
         
         												], // Characters Definition
         									"BkgImG" : "jewelleryshop.png"
         								 },			 
         
         
         
         					 { 
         									"Dlgs" : [ "1351", "1360"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"9","Lip":"1","Hair":"2","TopD":"5","BtmD":"10"},
         
                                             {"Chr":"2","Fs":"1","Shoe":"4","Lip":"1","Hair":"1","TopD":"14","BtmD":"12"},
         
         												{"Chr":"1","Fs":"10","Shoe":"4","Lip":"1","Hair":"10","TopD":"34","BtmD":"0"}
         
                                             ], // Characters Definition
         
                                           "BkgImG" : "jewelleryshop.png"
         								        },
         
         
         
         				// black screen(Manager texts Charles all the information along with the photograph								
         
         					//(Charles & Stephen leaves for home).
         
         
         		{ 
         									"Dlgs" : [ "1361", "1362"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"9","Lip":"1","Hair":"2","TopD":"5","BtmD":"10"},
         
                                             {"Chr":"2","Fs":"1","Shoe":"4","Lip":"1","Hair":"1","TopD":"14","BtmD":"12"}
                                             ], // Characters Definition
         
                                           "BkgImG" : "jewelleryshop.png"
         
         
         
         				   // black screen(Stephen works on the call history of Alex but doesn’t find any suspicious call) 
         				   }	
         
         
         
         								  ]
         
         		 }, //chp ends
         		 { 		 
         
         
         
         
         
         			  "ChpName" : "Reconciliation of Love", 
         			  "ChpScenes" : [
         
         
         								{ 
         									"Dlgs" : [ "1363", "1368"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"15","BtmD":"20"},
         
                                             {"Chr":"2","Fs":"8","Shoe":"4","Lip":"1","Hair":"8","TopD":"7","BtmD":"13"}
         
         												], // Characters Definition
         									"BkgImG" : "Char_jonath_Ph.png"
         								 },
         
         				  // black screen Confession Video: (Charles receives the video recording of Alex which says)
         				 // Man (Who receives money from Alex confesses to Charles’ informer): 
         
         			{ 
         									"Dlgs" : [ "1373", "1374"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"15","BtmD":"20"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Charleshome.png"
         								 },	
         
         
         								   // black screen(Charles calls Stephen) 
         
         			{ 
         									"Dlgs" : [ "1375", "1391"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"15","BtmD":"20"},
         
         												{"Chr":"2","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"1","BtmD":"2"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Char_step_Ph.png"
         								 },						 
         
         
         // black screen(Charles & Stephen reaches at the Salesman’s house but it was locked) 
         
         { 
         									"Dlgs" : [ "1392", "1398"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"15","BtmD":"20"},
         
         												{"Chr":"2","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"1","BtmD":"2"}
         
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Salesmanhouse.png"
         								 },						 
         
         // black screen(Charles orders his informer to trace his location and text him). 
         
         //(After sometime…. the informer texts Charles his location) 
         
         				{ 
         									"Dlgs" : [ "1399", "1401"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"15","BtmD":"20"},
         
         												{"Chr":"2","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"1","BtmD":"2"}
         
         
         
         												], // Characters Definition
         									"BkgImG" : "Charleshome.png"
         								 },						 
         
         					// black screen(Charles & Stephen reaches at the Motel Le Villiers) (Charles & Stephen are successful in finding the Pilipino Salesman) 			 
         
         						{ 
         									"Dlgs" : [ "1402", "1428"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"15","BtmD":"20"},
         
         												{"Chr":"2","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"1","BtmD":"2"},
                                             {"Chr":"1","Fs":"9","Shoe":"1","Lip":"1","Hair":"9","TopD":"33","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "MotelLeVilliers.png"
         								 },		 
         
         								// black screen(Charles & Stephen along with the Salesman reaches to the police station) 	 
         								/*{ 
         									"Dlgs" : [ "1429", "1430"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"15","BtmD":"20"},
         
         												{"Chr":"2","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"1","BtmD":"2"},
                                             {"Chr":"1","Fs":"9","Shoe":"1","Lip":"1","Hair":"9","TopD":"33","BtmD":"9"}
         
         
         												], // Characters Definition
         									"BkgImG" : "Policestation.png"
         								 },*/ 
         						// black screen(Calls Catherin and asks her to meet him urgently).   
         
         
         						{ 
         									"Dlgs" : [ "1432", "1472"], // Start to end dailogues in this Scene.
         									"Chrs" : [
         												{"Chr":"2","Fs":"2","Shoe":"4","Lip":"1","Hair":"2","TopD":"15","BtmD":"20"},
         
         												{"Chr":"2","Fs":"1","Shoe":"1","Lip":"1","Hair":"1","TopD":"1","BtmD":"2"},
         												{"Chr":"1","Fs":"4","Shoe":"5","Lip":"1","Hair":"4","TopD":"23","BtmD":"0"},
                                             {"Chr":"1","Fs":"1","Shoe":"20","Lip":"1","Hair":"1","TopD":"3","BtmD":"0"}
         
         												], // Characters Definition
         									"BkgImG" : "Policestation.png"
         										   }
         
         
         
         								  ]
         
         		 } //chp ends
         
         
         
         ]
         
         
         
         var Dlg = [
         {
         "DID" : "1",
         "ChrID": "1",
         "DlgTxt" :"Hey Catherin!How are you? How was the vacation?",
         "ExpID" :"0,201",
         "DType" :""
         },
         {
         "DID" : "2",
         "ChrID": "3",
         "DlgTxt" :"Well…. I had a nice time…. I just had a blast",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "3",
         "ChrID": "3",
         "DlgTxt" :"How about you?I’m sure you must have had an easy peasy fun time",
         "ExpID" :"106,0",
         "DType" :""
         },
         {
         "DID" : "4",
         "ChrID": "1",
         "DlgTxt" :"Yeah…. I’ve been to US for holidays",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "5",
         "ChrID": "1",
         "DlgTxt" :"The holidays were super cool…… It was a barrel of fun.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "6",
         "ChrID": "3",
         "DlgTxt" :"That should have been an amazing jolly time for you…",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "7",
         "ChrID": "3",
         "DlgTxt" :"Hey here comes Evelyn and Stephen…. The most golly Polly people.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "8",
         "ChrID": "4",
         "DlgTxt" :"Hey guys!How are you all…. Missed you all a lot.",
         "ExpID" :"0,0,107,0",
         "DType" :""
         },
         {
         "DID" : "9",
         "ChrID": "5",
         "DlgTxt" :"It feels so good to be back with all you guys….",
         "ExpID" :"104,206,0,0",
         "DType" :""
         },
         {
         "DID" : "10",
         "ChrID": "4",
         "DlgTxt" :"Come on Eve…. Don’t bluff….Especially like you puff the make-up on your cheeks.",
         "ExpID" :"0,202,0,206",
         "DType" :""
         },
         {
         "DID" : "11",
         "ChrID": "4",
         "DlgTxt" :"You can’t bluff a bluffer. We know you were occupied at your father’s boutique.",
         "ExpID" :"104,0,105,0",
         "DType" :""
         },
         {
         "DID" : "12",
         "ChrID": "4",
         "DlgTxt" :"You had no time…... Really hard working…",
         "ExpID" :"0,0,104,0",
         "DType" :""
         },
         {
         "DID" : "13",
         "ChrID": "4",
         "DlgTxt" :"By the way where’s your friend Alex? That scandalous guy!",
         "ExpID" :"0,0,0,206",
         "DType" :""
         },
         {
         "DID" : "14",
         "ChrID": "5",
         "DlgTxt" :"Better don’t recall that devil…. Woof…. Master of pranky gang……",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         
         
         {
         "DID" : "BS",
         "ChrID": "2",
         "DlgTxt" :"Alex enters in the college campus. They are far from this group.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "15",
         "ChrID": "1",
         "DlgTxt" :"Speak of the devil and he doth appear…. See… There he’s…...",
         "ExpID" :"0,203,104,0",
         "DType" :""
         },
         {
         "DID" : "16",
         "ChrID": "3",
         "DlgTxt" :"It seems that hell is empty coz all the devils are here in the college…",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "2",
         "DlgTxt" :"College Corridor. There is a girl walking alongside Alex’s way.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "17",
         "ChrID": "5",
         "DlgTxt" :"Hey guys!Look at him. There’s a girl walking alongside him",
         "ExpID" :"0,206,104,0",
         "DType" :""
         },
         {
         "DID" : "18",
         "ChrID": "4",
         "DlgTxt" :"May be Alex’new girlfriend! But never seen her before. Soooo hottttt… must say.",
         "ExpID" :"0,0,0,206",
         "DType" :""
         },
         {
         "DID" : "19",
         "ChrID": "4",
         "DlgTxt" :"All hotties mutter around Alex….",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "20",
         "ChrID": "1",
         "DlgTxt" :"She seems a new comer I guess. A new face in the college… Doesn’t look like French national.",
         "ExpID" :"0,205,104,0",
         "DType" :""
         },
         {
         "DID" : "21",
         "ChrID": "3",
         "DlgTxt" :"Guys… I’ve learned a nice recipe of French Tart for Alex…. I’d like to share with you… Well… here it goes.",
         "ExpID" :"104,0,0,0",
         "DType" :""
         },
         {
         "DID" : "22",
         "ChrID": "3",
         "DlgTxt" :"½ Cup of lying ½ Cup of cheating ½ Cup of stealing ½ Cup of manipulation ½ Cup of bullshit Add a pinch of fake words to season…...",
         "ExpID" :"0,0,106,0",
         "DType" :""
         },
         {
         "DID" : "23",
         "ChrID": "3",
         "DlgTxt" :"Makes one complete French Tart which Alex eats everyday…",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "24",
         "ChrID": "1",
         "DlgTxt" :"Really Yummy…. How sweet of you Catherin. You’re master chef. Guys……. I think it’s time to go to the classroom… Let’s walk off ……",
         "ExpID" :"0,203,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"In the classroom. Ms. George enters.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "25",
         "ChrID": "10",
         "DlgTxt" :"Hello students! Welcome to the last year of your Undergrad Programme of your Fashion Designing Course.",
         "ExpID" :"0,0,0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "26",
         "ChrID": "10",
         "DlgTxt" :"This is a very crucial and important year for you. You have to learned to design the best costumes in this final year.",
         "ExpID" :"0,206,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "27",
         "ChrID": "10",
         "DlgTxt" :"And believe me it requires a lot of efforts and commitment... So, are you all ready for it?",
         "ExpID" :"0,0,206,0,0,104",
         "DType" :""
         },
         {
         "DID" : "28",
         "ChrID": "1",
         "DlgTxt" :"Yes Ms. George…... With all spirit.",
         "ExpID" :"0,0,206,0,0,0",
         "DType" :""
         },
         {
         "DID" : "29",
         "ChrID": "10",
         "DlgTxt" :"That’s great",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "30",
         "ChrID": "10",
         "DlgTxt" :"Seems we’ve a new face…Are you new to this college?",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "31",
         "ChrID": "2",
         "DlgTxt" :"Yeah….",
         "ExpID" :"104,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "32",
         "ChrID": "10",
         "DlgTxt" :"What’s your name?",
         "ExpID" :"0,0,0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "33",
         "ChrID": "2",
         "DlgTxt" :"Myself Roselle.",
         "ExpID" :"104,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "34",
         "ChrID": "10",
         "DlgTxt" :"Where do you hail from and why have you joined ‘Grande Ecole de Fashion et Arts’college of France?",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "35",
         "ChrID": "2",
         "DlgTxt" :"I’m from Rome.I’ve come here as this college is considered to be one of the best colleges for fashion designing.",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "36",
         "ChrID": "10",
         "DlgTxt" :"You have come at the right place. But here we don’t compromise with hard work",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "37",
         "ChrID": "10",
         "DlgTxt" :"We create the best designers. But you’re embalmed with a beautiful face… You should go to glamor industry, some acting school kinda Hollywood or something…",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "38",
         "ChrID": "2",
         "DlgTxt" :"Thanks Ms. George…... But my passion lies in threads, fabrics and costumes",
         "ExpID" :"104,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "39",
         "ChrID": "10",
         "DlgTxt" :"Well…. Listening to one’s own instinct is the right ladder leading success….",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "40",
         "ChrID": "10",
         "DlgTxt" :"Ok class. So today we will study about Surface Ornamentation. Can you take a look at this kit?",
         "ExpID" :"0,0,0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"1_40_1",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "41",
         "ChrID": "5",
         "DlgTxt" :"Ms. George, are these patches to be stitched on the dress?",
         "ExpID" :"0,205,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "42",
         "ChrID": "10",
         "DlgTxt" :"Yeah…",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "43",
         "ChrID": "5",
         "DlgTxt" :"Yeah, I’ve learned this technique at my dad’s boutique. It’s so contemporary….",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "44",
         "ChrID": "10",
         "DlgTxt" :"That’s good. Now let’s take a look at a piece of patch and a piece of fabric. Here you go!",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"1_44_1",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"1_44_2",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "45",
         "ChrID": "10",
         "DlgTxt" :"All these material is used for surface ornamentation.",
         "ExpID" :"104,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "46",
         "ChrID": "10",
         "DlgTxt" :"This can be used for glamorous outfits. Worn for fashion shows, royal evening parties etc.",
         "ExpID" :"0,202,0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "47",
         "ChrID": "10",
         "DlgTxt" :"You have to research more on such designs.Be it Contemporary designs,Elizabethan style, Renaissance style, Roman, Kinda Opera… huhhh lots of research for you guys…",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "48",
         "ChrID": "10",
         "DlgTxt" :"So, students, you can do it while you’re in the lab…...that’s all for today.",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "49",
         "ChrID": "10",
         "DlgTxt" :"Let’s study further in the next class.",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Group of students in the classroom",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "50",
         "ChrID": "4",
         "DlgTxt" :"Guys…. Bubbles are really rolling up in my stomach. I just had a peach yogurt in the morning. My stomach is really starving…… it says I need to follow my heart.And my heart leads me to Cafeteria.",
         "ExpID" :"0,203,0,202,0",
         "DType" :""
         },
         {
         "DID" : "51",
         "ChrID": "4",
         "DlgTxt" :"Guys everyone here…let’s push off to the cafeteria…. Time for fresh Avocado Bruschetta, cupcakes, cookies……",
         "ExpID" :"0,0,108,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"In the cafeteria.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "53",
         "ChrID": "1",
         "DlgTxt" :"Hey guys, here comes Roselle…. That new-comer…... the roman hottie...",
         "ExpID" :"104,202,0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "54",
         "ChrID": "5",
         "DlgTxt" :"Roselle…. You can join us.",
         "ExpID" :"0,0,206,0,0,0",
         "DType" :""
         },
         {
         "DID" : "55",
         "ChrID": "2",
         "DlgTxt" :"Thanks",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "56",
         "ChrID": "5",
         "DlgTxt" :"Let me introduce everyone. He’s Charles, Alex, Catherin, Stephen and myself,Evelyn. Friends call me Eve.",
         "ExpID" :"0,0,0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "57",
         "ChrID": "3",
         "DlgTxt" :"Charles and I are childhood friends. We share a strong bond of friendship ever since we were in school.",
         "ExpID" :"108,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "58",
         "ChrID": "3",
         "DlgTxt" :"My dad is also associated in business with Charles’ dad. So, girls simply dread to think to poke their nose between us.",
         "ExpID" :"105,0,0,0,0,102",
         "DType" :""
         },
         {
         "DID" : "59",
         "ChrID": "2",
         "DlgTxt" :"Oh, that’s amazing. I was just thinking you behave as if Charles is your dad’s estate… Isn’t it?",
         "ExpID" :"0,0,0,0,0,106",
         "DType" :""
         },
         {
         "DID" : "60",
         "ChrID": "3",
         "DlgTxt" :"Come on Roselle…... Charles is much more to me than any other possession.",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "61",
         "ChrID": "4",
         "DlgTxt" :"Rome reminiscent me of heritage history. A city of architectural monuments.",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "62",
         "ChrID": "2",
         "DlgTxt" :"Well, I’m in a bit hurry. I should make a move. I need to check the schedule of lectures….",
         "ExpID" :"0,0,0,0,0,103",
         "DType" :""
         },
         {
         "DID" : "63",
         "ChrID": "5",
         "DlgTxt" :"Don’t worry, today it’s the first day of the college. So, it’s half day. Just chill babe",
         "ExpID" :"0,0,206,0,0,104",
         "DType" :""
         },
         {
         "DID" : "64",
         "ChrID": "2",
         "DlgTxt" :"Okay… What’s next after the break",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "65",
         "ChrID": "6",
         "DlgTxt" :"The boring session of research on designs…. And making sketches. Babe, do you have any crazy roman idea to survive forth coming boring lecture?",
         "ExpID" :"0,0,0,0,203,0",
         "DType" :""
         },
         {
         "DID" : "66",
         "ChrID": "2",
         "DlgTxt" :"My tolerance for idiotic talks is very low today…. You better bask out in the sunlight while we attend the class…",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "67",
         "ChrID": "2",
         "DlgTxt" :"So, Charles are we gonna design the sketch of dresses?",
         "ExpID" :"0,0,0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "68",
         "ChrID": "1",
         "DlgTxt" :"Yes, that too based on the theme. But don’t worry… that’s just an hour’s session And then the day ends.",
         "ExpID" :"0,0,0,0,0,106",
         "DType" :""
         },
         {
         "DID" : "69",
         "ChrID": "2",
         "DlgTxt" :"Guys, time for class…Let’s go to the class…...",
         "ExpID" :"0,0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "70",
         "ChrID": "6",
         "DlgTxt" :"Studies really kill us. Books are made from paper, paper made from trees, we need trees for oxygen…. Thus, studies kill us….",
         "ExpID" :"104,0,0,0,203,0",
         "DType" :""
         },
         {
         "DID" : "71",
         "ChrID": "6",
         "DlgTxt" :"White pages with black ink really cause me …. Feel like I wanna escape to some world where there’re no books….",
         "ExpID" :"0,0,0,0,206,0",
         "DType" :""
         },
         {
         "DID" : "72",
         "ChrID": "2",
         "DlgTxt" :"Than you better go to the world of Aliens….",
         "ExpID" :"0,206,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"In the classroom",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "73",
         "ChrID": "3",
         "DlgTxt" :"Roselle, do let me know if you need my help in anyway",
         "ExpID" :"0,206,0",
         "DType" :""
         },
         {
         "DID" : "74",
         "ChrID": "2",
         "DlgTxt" :"Sure, I will. Thanks….",
         "ExpID" :"0,0,102",
         "DType" :""
         },
         {
         "DID" : "75",
         "ChrID": "1",
         "DlgTxt" :"Catherin, I have picked up the theme of office wear. What about you?",
         "ExpID" :"0,205,0",
         "DType" :""
         },
         {
         "DID" : "76",
         "ChrID": "3",
         "DlgTxt" :"I’m trying to put in some fashion themes",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "77",
         "ChrID": "1",
         "DlgTxt" :"Okay…. Good. I think Roselle also has chosen the same theme.",
         "ExpID" :"0,203,0",
         "DType" :""
         },
         {
         "DID" : "78",
         "ChrID": "3",
         "DlgTxt" :" So what? Let her…. I think she’s following me…. By now she must have acknowledged what Catherin is in this college… I’m known as a fashion icon in the college. .",
         "ExpID" :"105,0,102",
         "DType" :""
         },
         {
         "DID" : "79",
         "ChrID": "3",
         "DlgTxt" :"I’m damn sure that Roman can’t beat me. You know I’m the best to design the fashion dresses",
         "ExpID" :"0,0,106",
         "DType" :""
         },
         {
         "DID" : "80",
         "ChrID": "1",
         "DlgTxt" :"Yeah. You’ve that flair for designs…But what if that Roman beauty snatches that tag from you?",
         "ExpID" :"0,0,102",
         "DType" :""
         },
         {
         "DID" : "81",
         "ChrID": "3",
         "DlgTxt" :"(With envy) Is it? You really think so? Than you must consult an eye specialist.You’ve vision problem. Look at her…",
         "ExpID" :"0,203,0",
         "DType" :""
         },
         {
         "DID" : "82",
         "ChrID": "3",
         "DlgTxt" :"How dull and timid attitude she has…... She can’t compete me",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "83",
         "ChrID": "1",
         "DlgTxt" :"My eyes define her beautiful…. She seems timid…May be because she’s new here.",
         "ExpID" :"0,205,0",
         "DType" :""
         },
         {
         "DID" : "84",
         "ChrID": "3",
         "DlgTxt" :"Wufoo Charles…. You seem to favor her as if she’s your girlfriend.",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "85",
         "ChrID": "1",
         "DlgTxt" :"Good joke… hahahaha. Why don’t you check out Amazon and buy some pepper for yourself to sprinkle on your words? Anyways… It’s a half day… Let’s push off for home.",
         "ExpID" :"0,0,105",
         "DType" :""
         },
         {
         "DID" : "86",
         "ChrID": "1",
         "DlgTxt" :"It really seemed an overdose of lecture after a long holidaying time. Need some oxygen…",
         "ExpID" :"0,0,103",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"In the parking lot.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "87",
         "ChrID": "2",
         "DlgTxt" :"Morning Catherin",
         "ExpID" :"0,107",
         "DType" :""
         },
         {
         "DID" : "88",
         "ChrID": "3",
         "DlgTxt" :"Morning, how are you?",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "89",
         "ChrID": "2",
         "DlgTxt" :"I’m fine. By the way…...",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "90",
         "ChrID": "6",
         "DlgTxt" :"(With a husky manly shriek… Alex Interrupts)Hey girl! You…. You…. Yes, I’m addressing you, Roselle",
         "ExpID" :"0,0,202",
         "DType" :""
         },
         {
         "DID" : "91",
         "ChrID": "2",
         "DlgTxt" :"Oh gosh! Morning began with a headache…... blah blah blah………",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "92",
         "ChrID": "2",
         "DlgTxt" :"Yes, tell me? Seems you’ve had a bubbly kinda froth drink or probably a can of red bull… hence you’re pouring out with full of energy…",
         "ExpID" :"0,102,0",
         "DType" :""
         },
         {
         "DID" : "93",
         "ChrID": "6",
         "DlgTxt" :"That white taffeta Honda City…. Is that your car?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "94",
         "ChrID": "2",
         "DlgTxt" :"Yes, that’s mine. How did you know?",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "95",
         "ChrID": "6",
         "DlgTxt" :"Eve told me. Eve saw you alighting from that car.",
         "ExpID" :"104,102,0",
         "DType" :""
         },
         {
         "DID" : "96",
         "ChrID": "2",
         "DlgTxt" :"Oh Okay. So? What’s the matter? Any concerns?",
         "ExpID" :"0,103,203",
         "DType" :""
         },
         {
         "DID" : "97",
         "ChrID": "6",
         "DlgTxt" :"You gal…. You have parked your car at my place.",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "98",
         "ChrID": "6",
         "DlgTxt" :"Shift that boneshaker right away from there. You also have another option…... I can trash it for you free of cost….",
         "ExpID" :"0,0,206",
         "DType" :""
         },
         {
         "DID" : "99",
         "ChrID": "6",
         "DlgTxt" :"That’s my place. I park my car there every day",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "100",
         "ChrID": "2",
         "DlgTxt" :"Okay, but why are you so loud?",
         "ExpID" :"0,102,0",
         "DType" :""
         },
         {
         "DID" : "101",
         "ChrID": "2",
         "DlgTxt" :"Your loud voice will probably break the glass of your ‘so called’ expensive car.",
         "ExpID" :"0,104,0",
         "DType" :""
         },
         {
         "DID" : "102",
         "ChrID": "2",
         "DlgTxt" :"Better you Calm down! And who’s Eve?",
         "ExpID" :"0,0,202",
         "DType" :""
         },
         {
         "DID" : "103",
         "ChrID": "3",
         "DlgTxt" :"He’s talking about Evelyn.",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "104",
         "ChrID": "2",
         "DlgTxt" :"Oh okay…...Yeah, yeah …...she met me in the parking lot.",
         "ExpID" :"",
         "DType" :"0,102,0"
         },
         {
         "DID" : "105",
         "ChrID": "2",
         "DlgTxt" :"And she told me you come by McLaren and that’s your place to park.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "106",
         "ChrID": "6",
         "DlgTxt" :"Despite knowing, you parked that bullshit boneshaker over there… at my place?",
         "ExpID" :"0,0,205",
         "DType" :""
         },
         {
         "DID" : "107",
         "ChrID": "2",
         "DlgTxt" :"Dare you call my car a boneshaker. Lower down your bossy tone.",
         "ExpID" :"0,102,0",
         "DType" :""
         },
         {
         "DID" : "108",
         "ChrID": "2",
         "DlgTxt" :"You’re so loud…It seems you’ve swallowed a loud speaker. But unfortunately I need to install a silencer in your throat to calm down you.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "109",
         "ChrID": "2",
         "DlgTxt" :"And what do you mean by your place? It belongs to the college",
         "ExpID" :"0,104,0",
         "DType" :""
         },
         {
         "DID" : "110",
         "ChrID": "2",
         "DlgTxt" :"Park your car elsewhere and stop commanding me.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "111",
         "ChrID": "6",
         "DlgTxt" :"Alex commands everyone in the college. You better learn to follow.",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "112",
         "ChrID": "6",
         "DlgTxt" :"That’s my place and that’s the place to park all classy cars",
         "ExpID" :"0,102,0",
         "DType" :""
         },
         {
         "DID" : "113",
         "ChrID": "2",
         "DlgTxt" :"Crappy cars are parked beside cafeteria. Now just go and move your scrap,come on…",
         "ExpID" :"0,0,205",
         "DType" :""
         },
         {
         "DID" : "114",
         "ChrID": "2",
         "DlgTxt" :"(Sarcastically) Ooops, I never knew this rule. Posh cars…. Cheap cars have different parking",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "115",
         "ChrID": "2",
         "DlgTxt" :"But you know what Alex",
         "ExpID" :"0,104,0",
         "DType" :""
         },
         {
         "DID" : "116",
         "ChrID": "6",
         "DlgTxt" :"What haaa, what are you trying to convey?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "117",
         "ChrID": "2",
         "DlgTxt" :"If there is something cheap,then that’s not my car…That’s your mind….That saying goes quite well… Empty minds are devil’s workshop.",
         "ExpID" :"0,105,0",
         "DType" :""
         },
         {
         "DID" : "118",
         "ChrID": "2",
         "DlgTxt" :"And you have no courtesy. You should go to some college where you can pursue Anger Management Course.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "119",
         "ChrID": "2",
         "DlgTxt" :"Fashion Designing isn’t your cup of tea….",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "120",
         "ChrID": "6",
         "DlgTxt" :"This is nothing less than an insult….",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "121",
         "ChrID": "2",
         "DlgTxt" :"Oooops, Alex…. The son of a rich businessman. Is insulted by a girl… Ooooohuuuuu",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "122",
         "ChrID": "2",
         "DlgTxt" :"When I was in a school, I drew the sketch of a guy with my eyes closed… You look exactly like that guy in the sketch…",
         "ExpID" :"0,102,0",
         "DType" :""
         },
         {
         "DID" : "123",
         "ChrID": "3",
         "DlgTxt" :"Roselle, please move your car. I’ve not asked you to write a poem on my appearance",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "124",
         "ChrID": "2",
         "DlgTxt" :"Why should I? Why can’t he park his car somewhere else?",
         "ExpID" :"0,0,206",
         "DType" :""
         },
         {
         "DID" : "125",
         "ChrID": "2",
         "DlgTxt" :"I entered the college first and I parked. What’s the big deal? Why is he being so ruthless?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "126",
         "ChrID": "3",
         "DlgTxt" :"He’s a pranky guy and his pranks are terrifying. He pranked me as well… No one is spared from his pranks…. Especially the new comers.",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "127",
         "ChrID": "3",
         "DlgTxt" :"(Whispers)He’s the son of the richest businessman of Paris? And he’s a brat",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "128",
         "ChrID": "3",
         "DlgTxt" :"If you don’t follow, he will cause you harm. He once played a prank with me and you know what, I almost fainted.",
         "ExpID" :"0,102,0",
         "DType" :""
         },
         {
         "DID" : "129",
         "ChrID": "6",
         "DlgTxt" :"You know what…... I’ve framed categories for the girl like you.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "130",
         "ChrID": "6",
         "DlgTxt" :"Fit yourself in one these categories.",
         "ExpID" :"0,0,206",
         "DType" :""
         },
         {
         "DID" : "131",
         "ChrID": "6",
         "DlgTxt" :"HARD-DISK girls - remembers everything, FOREVER. And remembers my rules also.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "132",
         "ChrID": "6",
         "DlgTxt" :"EMAIL girls - Every ten things she says, eight are nonsense.",
         "ExpID" :"0,0,205",
         "DType" :""
         },
         {
         "DID" : "133",
         "ChrID": "6",
         "DlgTxt" :"RAM girls - forgets about you, the moment you turn her off.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "134",
         "ChrID": "6",
         "DlgTxt" :"INTERNET girls - Always clings to fb.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "135",
         "ChrID": "6",
         "DlgTxt" :"SERVER girls - Always busy…talking, chirping, gossiping.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "136",
         "ChrID": "6",
         "DlgTxt" :"Screen girls - Always shows- off without brains.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "137",
         "ChrID": "6",
         "DlgTxt" :"Key-board girls - tap…. tap…. tap…",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "138",
         "ChrID": "6",
         "DlgTxt" :"VIRUS girls - Always destructive.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "139",
         "ChrID": "2",
         "DlgTxt" :"Bull-shit. Do the hell with your categories.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "140",
         "ChrID": "2",
         "DlgTxt" :"I think there are some stupid people thriving on this planet who are sent on earth to test my anger management skills.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         /*
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Scene – 4 characters – 2 girls, 2 boys)",
         "ExpID" :"",
         "DType" :""
         },*/
         {
         "DID" : "141",
         "ChrID": "1",
         "DlgTxt" :"(Enters) Hey guys… what’s up? Why you all are here? Is the lecture postponed?",
         "ExpID" :"0,0,0,201",
         "DType" :""
         },
         {
         "DID" : "142",
         "ChrID": "6",
         "DlgTxt" :"Nope. Here Roselle is taking the class. A class on discipline, a class on career,a class on code of conduct and so on.",
         "ExpID" :"104,0,203,0",
         "DType" :""
         },
         {
         "DID" : "143",
         "ChrID": "6",
         "DlgTxt" :"Interesting topics…. Please join us… Ms. Roselle’s lecture on life learning lessons…",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "144",
         "ChrID": "6",
         "DlgTxt" :"Roselle is new this college Charles. You better explain her the rules. The rules of ALEX.",
         "ExpID" :"0,0,0,206",
         "DType" :""
         },
         {
         "DID" : "145",
         "ChrID": "1",
         "DlgTxt" :"What’s going on? What happen? All okay?",
         "ExpID" :"0,104,0,0",
         "DType" :""
         },
         {
         "DID" : "146",
         "ChrID": "2",
         "DlgTxt" :"Narrates everything to Charles………",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "147",
         "ChrID": "6",
         "DlgTxt" :"Alex! You’re wrong… What interests you so much to mess up with people?",
         "ExpID" :"0,102,0,205",
         "DType" :""
         },
         {
         "DID" : "148",
         "ChrID": "6",
         "DlgTxt" :"You know what Charles… There’re stupid people all around… Without stupid people... we’d have no one for time pass or to laugh at. Therefore, we should spare time to thank Roselle for her contribution",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "149",
         "ChrID": "1",
         "DlgTxt" :"You better mind your language. What pleases you to be so rude?",
         "ExpID" :"0,0,206,0",
         "DType" :""
         },
         {
         "DID" : "150",
         "ChrID": "1",
         "DlgTxt" :"Please end this matter here.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "151",
         "ChrID": "6",
         "DlgTxt" :"You are favoring her? Why? I mean, it’s ridiculous… Catherin, why don’t you tell Charles the way Roselle behaved…",
         "ExpID" :"0,0,202,0",
         "DType" :""
         },
         {
         "DID" : "152",
         "ChrID": "3",
         "DlgTxt" :"Well…. I believe Silence is golden when quarrel is brewing. Guys, I’ve gotta go.",
         "ExpID" :"102,0,0,206",
         "DType" :""
         },
         {
         "DID" : "153",
         "ChrID": "3",
         "DlgTxt" :"I have to collect the kit for the assignment given by Miss George and many other things. My things-to-do list is too long for the day...",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "154",
         "ChrID": "6",
         "DlgTxt" :"Yeah yeah Ms. Book Smart. You better leave. Rather I should say book worm….",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "155",
         "ChrID": "6",
         "DlgTxt" :"It’s a bad start of a morning. It really is. This girl is really a drama queen...",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "156",
         "ChrID": "6",
         "DlgTxt" :"Anyways I’m leaving too…. But remember you both… or carve in your minds",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "157",
         "ChrID": "6",
         "DlgTxt" :"You both will pay for this. You really will someday.",
         "ExpID" :"0,103,203,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Catherin leaves. Charles & Roselle are still in the parking lot.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "158",
         "ChrID": "1",
         "DlgTxt" :"Hey Roselle. Are you okay?",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "159",
         "ChrID": "2",
         "DlgTxt" :"(Upset)Yeah… But he appears to be to whimsical… Isn’t it?",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "160",
         "ChrID": "1",
         "DlgTxt" :"There’s always someone for everyone…. And the person for Alex is Psychiatrist.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "161",
         "ChrID": "1",
         "DlgTxt" :"Therefore…... Don’t you worry gal. It happens. Its like some people spread happiness wherever they go, some spread sadness whenever they go.",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "162",
         "ChrID": "2",
         "DlgTxt" :"Alex is one of the second type. Shall we lead towards the class?",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "163",
         "ChrID": "1",
         "DlgTxt" :"Yeah, let’s move. Roselle, stewing up with Alex is not a good idea.",
         "ExpID" :"105,0",
         "DType" :""
         },
         {
         "DID" : "164",
         "ChrID": "1",
         "DlgTxt" :"He’s a revengeful mindset. He pranks every new-comer and they’re extremely annoying.",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "165",
         "ChrID": "1",
         "DlgTxt" :"Everyone in the college keeps away from him.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "166",
         "ChrID": "1",
         "DlgTxt" :"He can do anything. He can harm you or play pranks with you. Keep away from him.",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "167",
         "ChrID": "2",
         "DlgTxt" :"Well…... He’s arrogant. I can’t stand him I just can’t.",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "168",
         "ChrID": "2",
         "DlgTxt" :"Why don’t you give him a tissue…? He keeps leaking bullshit from his mouth.Probably he can clean his lips full of that crap bullshit.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "169",
         "ChrID": "Anyways, Chuck him off…. You tell me which theme have you chosen for the design sketches?",
         "DlgTxt" :"",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "170",
         "ChrID": "1",
         "DlgTxt" :"Well…. I’ve opted for office wear. And you?",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "171",
         "ChrID": "1",
         "DlgTxt" :"Let me guess…... Is it some fashion theme?",
         "ExpID" :"105,0",
         "DType" :""
         },
         {
         "DID" : "172",
         "ChrID": "2",
         "DlgTxt" :"That’s right, how did you know?",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "173",
         "ChrID": "1",
         "DlgTxt" :"I saw your screen while you were doing research",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "174",
         "ChrID": "2",
         "DlgTxt" :"Okay…... Let’s see, how my assignment goes. But I’m very serious about it",
         "ExpID" :"105,0",
         "DType" :""
         },
         {
         "DID" : "175",
         "ChrID": "2",
         "DlgTxt" :"I envision to be the best designer. And to design for celebrities in Hollywood.That’s my dream.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "176",
         "ChrID": "1",
         "DlgTxt" :"You’re very ambitious. Sounds good. Keep up this spirit.",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "177",
         "ChrID": "2",
         "DlgTxt" :"This college ‘Grande Ecole de Fashion et Arts’ is one of the best colleges in France.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "178",
         "ChrID": "2",
         "DlgTxt" :"And all the students passed out from here are all placed in big corporate fashion houses. Isn’t it?",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "179",
         "ChrID": "1",
         "DlgTxt" :"Yes, it is. But mine is a different story. I’ve to settle in my dad’s business.",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "180",
         "ChrID": "1",
         "DlgTxt" :"His business is widely spread and he really needs some help. His shoulders have lots of responsibilities.",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "181",
         "ChrID": "1",
         "DlgTxt" :"Now I wanna share them and relieve him.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "182",
         "ChrID": "2",
         "DlgTxt" :"Oh, that’s good. Seems your dad has a very well-established business",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "183",
         "ChrID": "1",
         "DlgTxt" :"Yeah, it’s spread across Eastern and Western Europe and so he has to travel very often… Therefore, he needs my help.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "184",
         "ChrID": "2",
         "DlgTxt" :"By the way which lecture do we have now? Any idea?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "185",
         "ChrID": "1",
         "DlgTxt" :"Yeah. The same. Design sketch. Very monotonous……",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"In the classroom",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "186",
         "ChrID": "2",
         "DlgTxt" :"I will start with some small research. I’ve not done yet.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "187",
         "ChrID": "1",
         "DlgTxt" :"So will I. Even mine is left yet so I’ll accompany you.",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :" That's the end of the day in college.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "188",
         "ChrID": "3",
         "DlgTxt" :"Hello buddy! So how’s your research going on",
         "ExpID" :"107,0",
         "DType" :""
         },
         {
         "DID" : "189",
         "ChrID": "1",
         "DlgTxt" :"Cool…. I’ve selected some design for office wear. A kind of corporate look. I need like three shots of espresso this morning. I have pulled an all-nighter yesterday.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "190",
         "ChrID": "3",
         "DlgTxt" :"You’re goddamn independent. Do you know we have to demonstrate our work to Ms. George today. I’m so unprepared. That specsy lady will not spare me if I fail to present my work today….",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "191",
         "ChrID": "1",
         "DlgTxt" :"Be cool. There’s always next time. You can put forth your research until you have done.",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "192",
         "ChrID": "3",
         "DlgTxt" :"Yep. I’ve done a substantial amount of work but yet not thru.Ah, here comes Roselle.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "193",
         "ChrID": "3",
         "DlgTxt" :"Babe… Are you thru with your research?",
         "ExpID" :"105,0,0",
         "DType" :""
         },
         {
         "DID" : "194",
         "ChrID": "2",
         "DlgTxt" :"Yep…. Almost…. I’m thru. I’m gonna show my ppt today.",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         {
         "DID" : "195",
         "ChrID": "3",
         "DlgTxt" :"What did you say? you gonna show your ppt today?",
         "ExpID" :"103,0,0",
         "DType" :""
         },
         {
         "DID" : "196",
         "ChrID": "2",
         "DlgTxt" :"Yes. Once I show my research on surface design today, I can proceed on further.",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         {
         "DID" : "197",
         "ChrID": "3",
         "DlgTxt" :"(Smirks in her mind). What an attitude? As if she’s the only to bust a nut. Well then… I’m eager to see your ppt in the class. Charles… Isn’t she eager beaver to complete the research so fast?",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"In the classroom.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "198",
         "ChrID": "10",
         "DlgTxt" :"So students. Is anyone thru with the research part. We need to proceed on further.",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "199",
         "ChrID": "10",
         "DlgTxt" :"We’re running with the short of time.",
         "ExpID" :"104,0,0,105",
         "DType" :""
         },
         {
         "DID" : "200",
         "ChrID": "3",
         "DlgTxt" :"Ms. George, Roselle is already done. She’s too industrious. In fact, she’s come with the presentation.",
         "ExpID" :"104,0,0,0",
         "DType" :""
         },
         {
         "DID" : "201",
         "ChrID": "2",
         "DlgTxt" :"Catherin…... why don’t you stop interfering? I think you can do a better job as a secretary rather than a costume designer….",
         "ExpID" :"0,0,206,104",
         "DType" :""
         },
         {
         "DID" : "202",
         "ChrID": "2",
         "DlgTxt" :"From this point on, I’m gonna treat people exactly the way they treat me. Some should be glad, some should be scared….",
         "ExpID" :"0,105,206,0",
         "DType" :""
         },
         {
         "DID" : "203",
         "ChrID": "10",
         "DlgTxt" :"Roselle, let’s have a look at your ppt. What have you come prepared with….",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Slide 1:Topic-Surface Design...Surface Design encompasses the coloring, patterning, and structuring of fiber and fabric. This involves creative exploration of processes such as painting, stitching, embellishing, quilting,weaving, knitting and felting.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Slide 2...Different themes can be used for Surface Designing.The Brooch Work",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"3_203_1",
         "ExpID" :"",
         "DType" :"img"
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Slide 3...The Crystals Embellishment bequeaths the beauty of the dress to more in glamour touch.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"3_203_2",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Slide 4..The royal beauty of Pearls bestows the fabric a royal look.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"3_203_3",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Slide 5..Elegance of Patches are inclined to fulfill party times use for semi-formal purposes.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"3_203_4",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"3_203_5",
         "ExpID" :"",
         "DType" :"img"
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Slide 6..The final dress with the different themes and occasions.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"3_203_6",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"3_203_7",
         "ExpID" :"",
         "DType" :"img"
         },
         
         {
         "DID" : "204",
         "ChrID": "10",
         "DlgTxt" :"Perfect Roselle. I must say…. It was just up to the mark. You’ve put in lot of efforts. I appreciate",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "205",
         "ChrID": "10",
         "DlgTxt" :"There are also certain more things to this which I shall explain you to modify.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "206",
         "ChrID": "2",
         "DlgTxt" :"Alright Ms. George. Thanks.",
         "ExpID" :"0,104,0,0",
         "DType" :""
         },
         {
         "DID" : "207",
         "ChrID": "10",
         "DlgTxt" :"Charles, Alex, Catherin, Evelyn…… all of you please come with your presentations one by one in turn.",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Everyone shows their research presentation one by one in turn",
         "ExpID" :"0,0,202,0",
         "DType" :""
         },
         {
         "DID" : "208",
         "ChrID": "10",
         "DlgTxt" :"Well…. I must say, the research presentation by all of you was quite impressive. But this wasn’t enough to be the best designer.",
         "ExpID" :"0,0,202,102",
         "DType" :""
         },
         {
         "DID" : "209",
         "ChrID": "10",
         "DlgTxt" :"You have to put a lot more to it. However, Roselle has set an exemplary illustration which you all can take up as a model presentation.",
         "ExpID" :"0,0,206,0",
         "DType" :""
         },
         {
         "DID" : "210",
         "ChrID": "10",
         "DlgTxt" :"For now, the class is over. You all may leave.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"After the class.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "211",
         "ChrID": "4",
         "DlgTxt" :"Hey gul. Your ppt was awesome. You have portrayed damn good designs.",
         "ExpID" :"0,0,203,0,0",
         "DType" :""
         },
         {
         "DID" : "212",
         "ChrID": "3",
         "DlgTxt" :"(Jealous) Have you copied from somewhere? Don’t copy the designs. You may be accused of plagiarism…. you know.",
         "ExpID" :"104,0,0,0,206",
         "DType" :""
         },
         {
         "DID" : "213",
         "ChrID": "3",
         "DlgTxt" :"(Rolling her eyes) You may have to pay the penalty. Or You may be charged for some bucks as fine.",
         "ExpID" :"0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "214",
         "ChrID": "2",
         "DlgTxt" :"What do you mean ha? I haven’t copied anything. Why should I copy? It’s all mine.",
         "ExpID" :"0,0,0,104,0",
         "DType" :""
         },
         {
         "DID" : "215",
         "ChrID": "2",
         "DlgTxt" :"All original creation. I’ve developed them. I think jealousy has some magical powers… It requires profound thinking power.",
         "ExpID" :"0,0,0,104,0",
         "DType" :""
         },
         {
         "DID" : "216",
         "ChrID": "2",
         "DlgTxt" :"People try to criticize others for three reasons.i. When they can’t reach your level.ii. When they don’t have what you haveiii. When they try to copy you, but fail to do so.",
         "ExpID" :"0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "217",
         "ChrID": "3",
         "DlgTxt" :"(Chortles) Ms. Beauty Queen thinks she’s on the top of the world and down there people on earth follow her",
         "ExpID" :"103,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "218",
         "ChrID": "3",
         "DlgTxt" :"But I need to realize you…. your designs weren’t super cool. You need to improve. Isn’t it?",
         "ExpID" :"102,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "219",
         "ChrID": "3",
         "DlgTxt" :"How this lady (Ms. George) approved it. She badly needs an eye check-up…...",
         "ExpID" :"104,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "220",
         "ChrID": "2",
         "DlgTxt" :"Babe. You better mind your business. Word Business reminds me of something. To mind one’s own business is the hardest thing in the world.",
         "ExpID" :"0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "221",
         "ChrID": "2",
         "DlgTxt" :"I’m already all set with my work... If I’m not wrong, you’re lagging behind.",
         "ExpID" :"0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "222",
         "ChrID": "3",
         "DlgTxt" :"Sweety… Have you heard about that saying…?“Quality & quantity do not go hand-in-hand”",
         "ExpID" :"104,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "223",
         "ChrID": "2",
         "DlgTxt" :"Yep. But I’ve also heard about the saying…...“Time and tide wait for none”",
         "ExpID" :"0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Alex To Catherin",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "224",
         "ChrID": "6",
         "DlgTxt" :"Hey, you dumbo…. Who have you fussed with? The one who has no brain? She’s just a virus girl…All time destructive.",
         "ExpID" :"0,0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "225",
         "ChrID": "2",
         "DlgTxt" :"Alex, I’m very well acquainted with your formula for studies-------- Formula Studying = Stu(Dying)Studied = Stu(Died)….",
         "ExpID" :"0,0,0,104,0",
         "DType" :""
         },
         {
         "DID" : "226",
         "ChrID": "1",
         "DlgTxt" :"Roselle, let’s go. I’m heading to home.",
         "ExpID" :"0,0,0,0,206",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Roselle bangs her leg on floor leaves with Charles",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "227",
         "ChrID": "6",
         "DlgTxt" :"(To Catherin). I clearly see your friendship diminishing.“The bird has flown To the home His buddy is left to the frown……”",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "228",
         "ChrID": "3",
         "DlgTxt" :"Don’t act smart Alex. No one can take my place",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "229",
         "ChrID": "3",
         "DlgTxt" :"No one. At all… Never ever…. By no means…Not even Roselle. I’ve been Charles’ bestie since childhood. And would always be.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "230",
         "ChrID": "6",
         "DlgTxt" :"Uuuuffff. Sometimes It’s good to have illusions. [(Murmers) She’s a day- Dreamer]. Even day dreaming is good for health….",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "231",
         "ChrID": "6",
         "DlgTxt" :"I’ve a stress buster exercise for you. Take a pan of whipped cream and spill it on Roselle’s head…",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "232",
         "ChrID": "3",
         "DlgTxt" :"Oh please… Will you ever come out of your dirty pranky ideas….?",
         "ExpID" :"102,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"At Charles home",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Catherin:(Calls Charles)",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "233",
         "ChrID": "3",
         "DlgTxt" :"Hey buddy. What are you doing today evening?",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "234",
         "ChrID": "1",
         "DlgTxt" :"Nothing important as such so had a plan to go to Gym. You say…... All okay?",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "235",
         "ChrID": "3",
         "DlgTxt" :"Actually, I was planning to go to a disc. Can you accompany me tonight?",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "236",
         "ChrID": "1",
         "DlgTxt" :"Ummmmm….. Yep let’s go. Which pub?",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "237",
         "ChrID": "3",
         "DlgTxt" :"Le Caveau de la Huchette. Or any other if you suggest.",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "238",
         "ChrID": "1",
         "DlgTxt" :"Nope. Let’s go here. Anyone else joining for the fun?",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "239",
         "ChrID": "3",
         "DlgTxt" :"Yep we all are going. Alex, Stephen, Eve, Jane…. All of us",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "240",
         "ChrID": "1",
         "DlgTxt" :"And? That’s all? Roselle isn’t joining us?",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "241",
         "ChrID": "3",
         "DlgTxt" :"That wonkish dumbo huuuuhhhh. She works her fingers to the bone. So, I haven’t called her. Chuck her off….",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :" At the pub disk  - Everyone is dancing",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "242",
         "ChrID": "1",
         "DlgTxt" :"Buddies, anyone on the rocks?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "243",
         "ChrID": "6",
         "DlgTxt" :"Yep. One shot for me.",
         "ExpID" :"0,0,206",
         "DType" :""
         },
         {
         "DID" : "244",
         "ChrID": "1",
         "DlgTxt" :"Alex drinks like a fish. Catherin, you?",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "245",
         "ChrID": "3",
         "DlgTxt" :"Ummmm…. Yep…... Me too….",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "246",
         "ChrID": "1",
         "DlgTxt" :"Babe, then you will be away with the fairies. Anyways I will get one for you. But I’m afraid… You’re gonna get a rude awakening from your Mom tomorrow….",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "247",
         "ChrID": "6",
         "DlgTxt" :"Come on Charles…. Don’t play a role of a killjoy.",
         "ExpID" :"0,206,202",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"All the friend dance till late night. Afterwards they leave for home",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "248",
         "ChrID": "1",
         "DlgTxt" :"Catherin, I will drop you home. You’ve gone tipsy. Can’t drive like this. Come on, let’s off to home.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Catherin - In tipsy mood",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "249",
         "ChrID": "1",
         "DlgTxt" :"What did you say Charles? You and Roselle…. Ummmm…... Is like…. What’s going on?",
         "ExpID" :"206,102,0,0",
         "DType" :""
         },
         {
         "DID" : "250",
         "ChrID": "1",
         "DlgTxt" :"Are you dating her? I mean… Is she your…... you know. Like kinda…... your girlfriend?",
         "ExpID" :"0,103,206,0",
         "DType" :""
         },
         {
         "DID" : "251",
         "ChrID": "4",
         "DlgTxt" :"Uuuufuuu…. Roselle…… is Charles’ girl. Breaking news….Roman French combo best pals",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "252",
         "ChrID": "6",
         "DlgTxt" :"Roman Hottie is in. I knew it…... I knew on that day itself…...",
         "ExpID" :"202,0,0,206",
         "DType" :""
         },
         {
         "DID" : "253",
         "ChrID": "3",
         "DlgTxt" :"I thought I’m mega popular in the college…. The most aspired girl to be a girlfriend…... But I’m overshadowed…",
         "ExpID" :"0,104,0,0",
         "DType" :""
         },
         {
         "DID" : "254",
         "ChrID": "1",
         "DlgTxt" :"Oh, Shut up guys…. We’re good friends…. Just friends…",
         "ExpID" :"0,104,205,0",
         "DType" :""
         },
         {
         "DID" : "255",
         "ChrID": "1",
         "DlgTxt" :"Catherin, you are in a merry mood. Let’s drive off home. Get into the car.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles dropped Catherin to her home",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "256",
         "ChrID": "8",
         "DlgTxt" :"Charles, You guys party hard late nights… … She is fully woozy. This is really not tolerable…. Next time wind up your parties early…",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "257",
         "ChrID": "1",
         "DlgTxt" :"Alright…. Mrs. Herbert. Gn….",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :" Next day at the college.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "258",
         "ChrID": "6",
         "DlgTxt" :"(Finds Roselle and Charles coming together) Look at them. The two lovers together…... Sometimes I wonder… some people are like dark clouds. When they disappear… there’s a beautiful day.",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "259",
         "ChrID": "6",
         "DlgTxt" :"Charles and Roselle are kinda dark clouds…. Isn’t it?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "260",
         "ChrID": "3",
         "DlgTxt" :"I’ll blow her to hell someday…. You better get her a car so that she can directly drive somewhere where devils thrive…",
         "ExpID" :"105,0",
         "DType" :""
         },
         {
         "DID" : "261",
         "ChrID": "3",
         "DlgTxt" :"I can’t stand her. Just can’t Alex.",
         "ExpID" :"102,0",
         "DType" :""
         },
         {
         "DID" : "262",
         "ChrID": "6",
         "DlgTxt" :"See I told you earlier. She’s snatched your friend. Kinda heart stealers and heart breakers...",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "263",
         "ChrID": "3",
         "DlgTxt" :"I care a damn. What difference does it make? Let her do. A relationship is only made for two but some bitches don’t know how to count…...",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "264",
         "ChrID": "1",
         "DlgTxt" :"Hey Catherin. What’s up? Last night you were like woozy boo.",
         "ExpID" :"0,201,0,0",
         "DType" :""
         },
         {
         "DID" : "265",
         "ChrID": "1",
         "DlgTxt" :"I dropped you home. Do you remember?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "266",
         "ChrID": "2",
         "DlgTxt" :"What…… what? I mean why? You dropped her? From where?",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "267",
         "ChrID": "1",
         "DlgTxt" :"Yeah you don’t know. Last night we all went to a disc and Catherin was little squiffy. So I dropped her.",
         "ExpID" :"0,206,0,0",
         "DType" :""
         },
         {
         "DID" : "268",
         "ChrID": "3",
         "DlgTxt" :"(In Sarcasm to make Roselle feel envy) Yea Charles how can I forget the drive with you.",
         "ExpID" :"103,0,0,0",
         "DType" :""
         },
         {
         "DID" : "269",
         "ChrID": "3",
         "DlgTxt" :"It was an awesome feeling to be in your arms.",
         "ExpID" :"105,0,0,0",
         "DType" :""
         },
         {
         "DID" : "270",
         "ChrID": "2",
         "DlgTxt" :"(With annoyance). Charles… You didn’t even tell me? I would have joined You guys.",
         "ExpID" :"0,0,0,102",
         "DType" :""
         },
         {
         "DID" : "271",
         "ChrID": "2",
         "DlgTxt" :"How could you do this? I thought we’re good friends….",
         "ExpID" :"0,206,0,104",
         "DType" :""
         },
         {
         "DID" : "272",
         "ChrID": "3",
         "DlgTxt" :"I told cath…. (Roselle interrupts Charles)",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "273",
         "ChrID": "2",
         "DlgTxt" :"I’m astonished.",
         "ExpID" :"0,0,0,102",
         "DType" :""
         },
         {
         "DID" : "274",
         "ChrID": "1",
         "DlgTxt" :"(Trying to explain but Roselle stops him)",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "275",
         "ChrID": "1",
         "DlgTxt" :"You…. I mean…. I was about to….",
         "ExpID" :"0,206,0,0",
         "DType" :""
         },
         {
         "DID" : "276",
         "ChrID": "2",
         "DlgTxt" :"Stop justifying yourself. That’s was enough… It’s tough to accept when someone special is ignoring you.",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "277",
         "ChrID": "1",
         "DlgTxt" :"Alright. Let’s go today evening for a coffee. Would you mind it?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "278",
         "ChrID": "1",
         "DlgTxt" :"I’ve something to discuss with you…. About projects…… About assignments and so on….",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "279",
         "ChrID": "1",
         "DlgTxt" :"Hey now don’t rebuff…... You are coming…... And that’s final…… No excuses…. We’re meeting and that’s final…...",
         "ExpID" :"0,203,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "2",
         "DlgTxt" :"Rolling her eyes with irritation and not replying.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "280",
         "ChrID": "1",
         "DlgTxt" :"Come on gal…. Don’t have the blues. Cheer up now…. Let’s move to the class.",
         "ExpID" :"0,206,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"In the classroom",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "281",
         "ChrID": "5",
         "DlgTxt" :"Hey Charles…February… the month of love is approaching…. the most awaited…... Valentine day…... What about celebrations?",
         "ExpID" :"0,0,105",
         "DType" :""
         },
         {
         "DID" : "282",
         "ChrID": "5",
         "DlgTxt" :"You need to choose your valentine…... the lucky girl……",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         {
         "DID" : "283",
         "ChrID": "1",
         "DlgTxt" :"Valentine day has long way yet. And I’m yet to involve with anyone….",
         "ExpID" :"0,104,0",
         "DType" :""
         },
         {
         "DID" : "284",
         "ChrID": "5",
         "DlgTxt" :"So what? You will have to choose someone as your valentine.",
         "ExpID" :"206,0,108",
         "DType" :""
         },
         {
         "DID" : "285",
         "ChrID": "5",
         "DlgTxt" :"You know what Roselle…. Out there… those girl in the group were chit chatting",
         "ExpID" :"0,102,0",
         "DType" :""
         },
         {
         "DID" : "286",
         "ChrID": "5",
         "DlgTxt" :"I just overheard… they all aspire to be Charles’ gf – a richy rich handsome guy.",
         "ExpID" :"203,0,108",
         "DType" :""
         },
         {
         "DID" : "287",
         "ChrID": "2",
         "DlgTxt" :"(Out of jealousy) So? Don’t rack your brain in such bullshit. Those crony of Charles…...",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "288",
         "ChrID": "5",
         "DlgTxt" :"It’s not bull shit. They’re serious…. You know what….",
         "ExpID" :"205,0,0",
         "DType" :""
         },
         {
         "DID" : "289",
         "ChrID": "5",
         "DlgTxt" :"Every girl in the college aspire to be Charles’ valentine.",
         "ExpID" :"0,0,108",
         "DType" :""
         },
         {
         "DID" : "290",
         "ChrID": "5",
         "DlgTxt" :"He’s so cute. In fact, cutest of all. The most desired guy in the college….",
         "ExpID" :"0,104,0",
         "DType" :""
         },
         {
         "DID" : "291",
         "ChrID": "2",
         "DlgTxt" :"(Out of jealousy) If he’s so desirable …. Than why don’t you become his valentine?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "292",
         "ChrID": "5",
         "DlgTxt" :"Well…. Not a bad idea. Can think about…...",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "293",
         "ChrID": "5",
         "DlgTxt" :"But he gets along the best with Catherin. She’s his bestie. Isn’t it Charles?",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles is spell bound gazing at Roselle.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "294",
         "ChrID": "2",
         "DlgTxt" :"(With the frown face and raised eyebrows)",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "295",
         "ChrID": "2",
         "DlgTxt" :"Why aren’t you replying Charles? Say something…. You’re spell bound… Have you swallowed some cakes…? Or probably choked due to some sugar cubes in your throat?",
         "ExpID" :"206,103,0",
         "DType" :""
         },
         {
         "DID" : "296",
         "ChrID": "1",
         "DlgTxt" :"Yea… I mean…. We are…. Uuummm…... like…. Kinda good friends. Nothing more…...But…. Anyways…",
         "ExpID" :"203,0,0",
         "DType" :""
         },
         {
         "DID" : "297",
         "ChrID": "1",
         "DlgTxt" :"It’s like we’re kinda childhood friends but never been into more than a casual relations other than friends…...",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "298",
         "ChrID": "1",
         "DlgTxt" :"You Evelyn…. Where is your bestie",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         {
         "DID" : "299",
         "ChrID": "5",
         "DlgTxt" :"Who? Stephen?",
         "ExpID" :"0,0,105",
         "DType" :""
         },
         {
         "DID" : "300",
         "ChrID": "1",
         "DlgTxt" :"I just saw him loitering around outside. Today he’s gonna bunk the lecture.",
         "ExpID" :"0,0,103",
         "DType" :""
         },
         {
         "DID" : "301",
         "ChrID": "1",
         "DlgTxt" :"He’s aired up like Alex…. When he has to study … even the walls of a room seems him interesting.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"The day engages with consecutive lectures and ends.  After the college… In the evening time.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "3010",
         "ChrID": "1",
         "DlgTxt" :"(Calls Roselle)",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "3011",
         "ChrID": "1",
         "DlgTxt" :"Hey Roselle……. You ready? I’m off to road….",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "3012",
         "ChrID": "2",
         "DlgTxt" :"Yeah … I was just thinking of some other place rather than to a café shop. I mean only if you’re fine with it.",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "3013",
         "ChrID": "1",
         "DlgTxt" :"So… than…. Let’s meet at Subway…I thought to have a fresh brew with you. Anyways... Let’s check out subway. I’ll pick you up then. See ya.",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "3014",
         "ChrID": "1",
         "DlgTxt" :"Okay….. Bubyee….",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "302",
         "ChrID": "1",
         "DlgTxt" :"Hey I’m extremely sorry we couldn’t call you to join for a disc",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "303",
         "ChrID": "1",
         "DlgTxt" :"I asked Catherin if you’re joining us or not",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "304",
         "ChrID": "1",
         "DlgTxt" :"But she said you are occupied with project work. So I didn’t insist upon",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "305",
         "ChrID": "1",
         "DlgTxt" :"You still upset? I think you still don’t believe me… It was absolutely unintentional.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "306",
         "ChrID": "2",
         "DlgTxt" :"That’s okay. I’m not upset…. At that moment I felt ignored…",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "307",
         "ChrID": "2",
         "DlgTxt" :"Catherin is a fussy girl. Very annoying tacky girl.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "308",
         "ChrID": "2",
         "DlgTxt" :"Always grumbling. She is not rational. I think no amount of make-up can cover up her ugly personality.",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "309",
         "ChrID": "1",
         "DlgTxt" :"(Smirks)Hmmm…… I know her. She’s been my childhood buddy. But always been very tacky and stubborn.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "310",
         "ChrID": "1",
         "DlgTxt" :"Anyways… how’s Paris? Are you acquainted with the city?",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "311",
         "ChrID": "2",
         "DlgTxt" :"Well it’s a beautiful city.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "312",
         "ChrID": "2",
         "DlgTxt" :"Hey do let me know if you need any help … just buzz me anytime",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "313",
         "ChrID": "2",
         "DlgTxt" :"By the way where do stay here?",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "314",
         "ChrID": "2",
         "DlgTxt" :"I stay in a rented apartment.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "315",
         "ChrID": "1",
         "DlgTxt" :"Oh… I see…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "316",
         "ChrID": "1",
         "DlgTxt" :"Cool. You can explore the best fashion out there in the market.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "317",
         "ChrID": "2",
         "DlgTxt" :"Yea. Paris is best known for fashion and trends.",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "318",
         "ChrID": "2",
         "DlgTxt" :"What do you wish to do after your undergrad Programme?",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "319",
         "ChrID": "2",
         "DlgTxt" :"I mean to start your own business set up or….",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "320",
         "ChrID": "1",
         "DlgTxt" :"It’s very clear to me. I’ve to throw bone to my dad in his business.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "321",
         "ChrID": "1",
         "DlgTxt" :"His business is very well expanded. It’s a large listed company now.",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "322",
         "ChrID": "1",
         "DlgTxt" :"Fashion Designing is my passion hence I’m here. And again, you never know what you are destined to…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "323",
         "ChrID": "2",
         "DlgTxt" :"Yea… Catherin told me once that your Dad is one of the richest men in Paris.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "324",
         "ChrID": "2",
         "DlgTxt" :"Well your life is very interesting. I mean…... You can do whatever you want.",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "325",
         "ChrID": "2",
         "DlgTxt" :"You can join your dad’s business…... can start up with you own venture in fashion industry…. Impressive.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "326",
         "ChrID": "1",
         "DlgTxt" :"Yea. In fact, her dad and mine are business associates since past two decades.So we share a strong bond...",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "327",
         "ChrID": "1",
         "DlgTxt" :"Often times Catherin and her parents come to our house for dinner.",
         "ExpID" :"206,104",
         "DType" :""
         },
         {
         "DID" : "328",
         "ChrID": "1",
         "DlgTxt" :"We’ve been childhood friends. We’ve grown up together, had been to school together and now we’re here…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "329",
         "ChrID": "2",
         "DlgTxt" :"(With hesitation) Just friends or something like you know…. Kinda different…. Uuumm…. More than friends….",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "330",
         "ChrID": "1",
         "DlgTxt" :"Nope. Just friends. Very close friends…. That’s all.",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "331",
         "ChrID": "2",
         "DlgTxt" :"(Relieved and released her breathe with peace)(Whispers in her mind) Thank god, they’re just friends.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "332",
         "ChrID": "1",
         "DlgTxt" :"(Gazing at her and thinking) Why is she asking about mine and Catherin’s equations?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "333",
         "ChrID": "1",
         "DlgTxt" :"Does she kinda like me? Or wanted to be my valentine?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "334",
         "ChrID": "1",
         "DlgTxt" :"God knows…... (Sparks into conversation). Yea. So where’s your mom dad? In Rome?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "335",
         "ChrID": "2",
         "DlgTxt" :"Yea they’re in Rome.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "336",
         "ChrID": "1",
         "DlgTxt" :"Okay. Your dad also in business?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "337",
         "ChrID": "2",
         "DlgTxt" :"Yea… My dad owns a textile business but he came across a loss in the business.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "338",
         "ChrID": "2",
         "DlgTxt" :"He’s trying to recover the loss but…… You know how it is",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "339",
         "ChrID": "2",
         "DlgTxt" :"It’s tough time. But I’m very clear with my goals.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "340",
         "ChrID": "2",
         "DlgTxt" :"My ambition is to work with in collaboration with huge corporate houses who can invest and fund me the capital for my designs. I want to design costumes for glamour industry.",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "341",
         "ChrID": "2",
         "DlgTxt" :"And you know costumes for glamour industry requires a huge capital.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "342",
         "ChrID": "2",
         "DlgTxt" :"Anyways. I’m drafting articles for our college e- magazine‘Fashionista’.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "343",
         "ChrID": "2",
         "DlgTxt" :"(Showing the article). This is it. Can you glance. Give me some suggestions if required…..",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"After reading the article",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "344",
         "ChrID": "1",
         "DlgTxt" :"Well…. Very well written. It goes perfect.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "345",
         "ChrID": "1",
         "DlgTxt" :"In fact, there lies an inherent message. Impressive. Just freeze this….",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "346",
         "ChrID": "2",
         "DlgTxt" :"Well okay. Hey it’s 10. Shall we leave?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "347",
         "ChrID": "1",
         "DlgTxt" :"Yup. Let’s leave. I will drop you home.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles & Roselle drive back to home",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" : "Scene at the college",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "348",
         "ChrID": "3",
         "DlgTxt" :"Hello Evelyn… Can you lend me your laptop for a while? Mine isn’t working. I’ve given for repair.",
         "ExpID" :"107,0,0",
         "DType" :""
         },
         {
         "DID" : "349",
         "ChrID": "5",
         "DlgTxt" :"Hey…I’m sorry…... I’m working on designs.",
         "ExpID" :"0,0,105",
         "DType" :""
         },
         {
         "DID" : "350",
         "ChrID": "5",
         "DlgTxt" :"Can you borrow from Stephen?",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         {
         "DID" : "351",
         "ChrID": "3",
         "DlgTxt" :"Oh sure. You please carry on. I just want to download a file from my inbox and copy in my hard drive.",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "352",
         "ChrID": "3",
         "DlgTxt" :"I need some physical copies for the class. Won’t take much time.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "353",
         "ChrID": "3",
         "DlgTxt" :"Stephen…. Can I borrow your laptop please? If you don’t mind?",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "354",
         "ChrID": "4",
         "DlgTxt" :"Yea sure. But please return me before the lecture.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "355",
         "ChrID": "3",
         "DlgTxt" :"Oh sure. I’ll see you in the class.",
         "ExpID" :"102,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Catherin uses the laptop. She finds a card saved on the desktop. She clicks on the icon and to her surprise she finds a Valentine card",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"5_355_1",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "356",
         "ChrID": "3",
         "DlgTxt" :"(Murmurs to herself). Oh…… Valentine card…. But for whom?",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "357",
         "ChrID": "3",
         "DlgTxt" :"The message space is blank. Let me catch hold of him today…. (In the classroom)",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "358",
         "ChrID": "3",
         "DlgTxt" :"Stephen! Guess what I found on your laptop?",
         "ExpID" :"103,0,206",
         "DType" :""
         },
         {
         "DID" : "359",
         "ChrID": "4",
         "DlgTxt" :"What? The designs",
         "ExpID" :"0,0,203",
         "DType" :""
         },
         {
         "DID" : "360",
         "ChrID": "3",
         "DlgTxt" :"Yes. The design of love…. Who’s the girl…… who’s the girl?",
         "ExpID" :"103,0,0",
         "DType" :""
         },
         {
         "DID" : "361",
         "ChrID": "3",
         "DlgTxt" :"Let me guess… Evelyn......",
         "ExpID" :"102,0,0",
         "DType" :""
         },
         {
         "DID" : "362",
         "ChrID": "4",
         "DlgTxt" :"Oh come on…. Not at least Evelyn… She’s my best buddy…",
         "ExpID" :"0,0,206",
         "DType" :""
         },
         {
         "DID" : "363",
         "ChrID": "6",
         "DlgTxt" :"Roses are red Violets are blue Vodka costs less Than dinner for two",
         "ExpID" :"0,205,0",
         "DType" :""
         },
         {
         "DID" : "364",
         "ChrID": "6",
         "DlgTxt" :"Hey bro….. Come on…. spill the beans.",
         "ExpID" :"0,205,0",
         "DType" :""
         },
         {
         "DID" : "365",
         "ChrID": "4",
         "DlgTxt" :"(Murmurs in his mind) (I won’t reveal anyone till I propose Roselle and she accepts my proposal).",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "366",
         "ChrID": "5",
         "DlgTxt" :"You wanna me spill the beans? Here you go",
         "ExpID" :"0,0,206",
         "DType" :""
         },
         {
         "DID" : "367",
         "ChrID": "5",
         "DlgTxt" :"Roses are red Violets are blue A face like yours belongs to zoo",
         "ExpID" :"0,0,203",
         "DType" :""
         },
         {
         "DID" : "368",
         "ChrID": "5",
         "DlgTxt" :"Don’t you worry, I will be there too Not in the cage But laughing at you.",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "369",
         "ChrID": "5",
         "DlgTxt" :"You Alex…. You better concentrate on books. This is our final year and you need to get through.",
         "ExpID" :"0,0,205",
         "DType" :""
         },
         {
         "DID" : "370",
         "ChrID": "6",
         "DlgTxt" :"Dude! You know,“which books help me the most in my life? My father’s cheque book”(All burst into laughter)",
         "ExpID" :"105,0,202",
         "DType" :""
         },
         {
         "DID" : "371",
         "ChrID": "4",
         "DlgTxt" :"Dude…. You are never gonna be serious.",
         "ExpID" :"0,0,206",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"The class starts. Principal Ms. Roger arrives. Mr. Roger:Announcement:",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "372",
         "ChrID": "23",
         "DlgTxt" :"Your attention please…... Well you are in final year of your Undergrad ‘Fashion Designing Course’.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "373",
         "ChrID": "23",
         "DlgTxt" :"You all are very industrious and I’m sure it’s been a journey of learning with fun at ‘Grande Ecole de Fashion et Arts’.",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "374",
         "ChrID": "23",
         "DlgTxt" :"Year after year, the college has made a history of its students being placed at the premium companies.",
         "ExpID" :"0,206,0,0",
         "DType" :""
         },
         {
         "DID" : "375",
         "ChrID": "23",
         "DlgTxt" :"Our alumni meets make us feel jubilant to acknowledge that our past students have been very successful and have earned fame in the fashion industry.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "376",
         "ChrID": "23",
         "DlgTxt" :"We expect the same from you as well.",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "377",
         "ChrID": "23",
         "DlgTxt" :"I also have an important announcement: In the forth coming month, we are going to have a Campus Interview which is going to play the most vital part of your career.",
         "ExpID" :"0,0,105,0",
         "DType" :""
         },
         {
         "DID" : "378",
         "ChrID": "23",
         "DlgTxt" :"Unlike the most common questionnaire interviews,this campus interview will be unconventional and will be organized Private and Confidential 43 | P a g e for you in the form of a project.",
         "ExpID" :"104,0,103,0",
         "DType" :""
         },
         {
         "DID" : "379",
         "ChrID": "23",
         "DlgTxt" :"I request everyone to work hard for it and put in the best.",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "380",
         "ChrID": "23",
         "DlgTxt" :"My students have always reached at the edge in the renowned companies and so should be continued.",
         "ExpID" :"103,0,0,0",
         "DType" :""
         },
         {
         "DID" : "381",
         "ChrID": "23",
         "DlgTxt" :"Ms. George has been given the responsibility of the entire project.",
         "ExpID" :"0,206,0,0",
         "DType" :""
         },
         {
         "DID" : "382",
         "ChrID": "10",
         "DlgTxt" :"Ms. George, can you please instruct the students about campus interview based on the project?",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "383",
         "ChrID": "10",
         "DlgTxt" :"Sure…. Dear students,",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "384",
         "ChrID": "10",
         "DlgTxt" :"We’re going to organize a Fashion Show.",
         "ExpID" :"103,0,102,0",
         "DType" :""
         },
         {
         "DID" : "385",
         "ChrID": "10",
         "DlgTxt" :"The rules of the show are:",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "386",
         "ChrID": "10",
         "DlgTxt" :"The costumes which you wear on the stage in the fashion show will be designed the participants themselves.",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "387",
         "ChrID": "10",
         "DlgTxt" :"The dress which you fabricate should be designed only in the college and cannot work on it at home as coping of pattern and designs are not allowed.",
         "ExpID" :"0,206,0,0",
         "DType" :""
         },
         {
         "DID" : "388",
         "ChrID": "10",
         "DlgTxt" :"Upon breaking the rules…. like the participant who tries to buy dress from the shop or boutique and wear during the fashion show will not be just eliminated but also suspended from the college.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "389",
         "ChrID": "10",
         "DlgTxt" :"No students can copy each other’s design.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "390",
         "ChrID": "10",
         "DlgTxt" :"The judges will also be called upon.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "391",
         "ChrID": "10",
         "DlgTxt" :"These judges will be from elite corporate companies and the premium boutiques.",
         "ExpID" :"104,0,103,0",
         "DType" :""
         },
         {
         "DID" : "392",
         "ChrID": "10",
         "DlgTxt" :"There will be 5 winners.",
         "ExpID" :"0,206,105,0",
         "DType" :""
         },
         {
         "DID" : "393",
         "ChrID": "10",
         "DlgTxt" :"These five winners will be honored.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "394",
         "ChrID": "10",
         "DlgTxt" :"The winning part will be based upon the following:",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "395",
         "ChrID": "10",
         "DlgTxt" :"The best designer dresses.",
         "ExpID" :"104,0,105,0",
         "DType" :""
         },
         {
         "DID" : "396",
         "ChrID": "10",
         "DlgTxt" :"The best way to present it during the catwalk.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "397",
         "ChrID": "10",
         "DlgTxt" :"Your level of confidence",
         "ExpID" :"0,0,104,0",
         "DType" :""
         },
         {
         "DID" : "398",
         "ChrID": "10",
         "DlgTxt" :"And lastly there will be the question answer segment.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "399",
         "ChrID": "10",
         "DlgTxt" :"Wherein they will ask you about the way of designing part",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "400",
         "ChrID": "10",
         "DlgTxt" :"Kinda rhetorical questions where they will give you a situation or a context or even a theme and participants have to answer about how and what kind of dress you will design which fits the best to that occasion.",
         "ExpID" :"0,205,0,104",
         "DType" :""
         },
         {
         "DID" : "401",
         "ChrID": "10",
         "DlgTxt" :"To answer this question, you will neither be given an iPad nor any other device to portray the sketch of your design. Hence your words should be very powerful to enable them imagine the way you present it.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "402",
         "ChrID": "10",
         "DlgTxt" :"This will enable the judges how prompt you are to frame a design to describe the word picture of their question.",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "403",
         "ChrID": "10",
         "DlgTxt" :"Any questions students?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "404",
         "ChrID": "2",
         "DlgTxt" :"Can we have a soft copy of these rules with us?",
         "ExpID" :"0,0,105,0",
         "DType" :""
         },
         {
         "DID" : "405",
         "ChrID": "10",
         "DlgTxt" :"Yeah sure. I’ll share with you all.",
         "ExpID" :"103,0,0,104",
         "DType" :""
         },
         {
         "DID" : "406",
         "ChrID": "10",
         "DlgTxt" :"Now the most important segment is to reach at the winning post:",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "407",
         "ChrID": "10",
         "DlgTxt" :"There will be five winners.",
         "ExpID" :"102,0,0,0",
         "DType" :""
         },
         {
         "DID" : "408",
         "ChrID": "10",
         "DlgTxt" :"These selected five winners will be given small assignments of costume designing as a part time job.",
         "ExpID" :"0,0,103,0",
         "DType" :""
         },
         {
         "DID" : "409",
         "ChrID": "10",
         "DlgTxt" :"It could be for men, for women, for corporate sectors, ethnic wear,traditional wear, for glamour industry……anything.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "410",
         "ChrID": "10",
         "DlgTxt" :"To make a long story short, these companies and boutiques are real giants and to get the assignments from them as a part time job is the spark of your career.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "411",
         "ChrID": "10",
         "DlgTxt" :"They will help you reach at peak. And gradually you can get the recognition as an individual as well.",
         "ExpID" :"0,0,106,0",
         "DType" :""
         },
         {
         "DID" : "412",
         "ChrID": "10",
         "DlgTxt" :"If you work with them, then sky is your limit.",
         "ExpID" :"0,0,106,0",
         "DType" :""
         },
         {
         "DID" : "413",
         "ChrID": "10",
         "DlgTxt" :"So students…...that’s all about the rules. If you have any difficulty to understand the process…. You can approach me between 9 a.m. to 12 p.m.",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "414",
         "ChrID": "10",
         "DlgTxt" :"The soft copies will be sent to all of you through an e-mail.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "415",
         "ChrID": "10",
         "DlgTxt" :"Alright then… good luck. (Ms. George departs from the classroom)",
         "ExpID" :"0,0,106,0",
         "DType" :""
         },
         {
         "DID" : "416",
         "ChrID": "5",
         "DlgTxt" :"It’s really an amazing project. What an unconventional way of interview!",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "417",
         "ChrID": "5",
         "DlgTxt" :"Interview – in the form of a Fashion show. Isn’t it exciting?",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "418",
         "ChrID": "5",
         "DlgTxt" :"But we’ve to design the best dress for ourselves.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "419",
         "ChrID": "3",
         "DlgTxt" :"I’m so excited. Its’ gonna be fun…… I’m so fascinated. There’s lot of work to do. Fabric, crystals, pearls, quills.",
         "ExpID" :"102,0",
         "DType" :""
         },
         {
         "DID" : "420",
         "ChrID": "3",
         "DlgTxt" :"Hey how can I forget to tell you…. You know what",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "421",
         "ChrID": "3",
         "DlgTxt" :"There is a file of Valentine card in Stephen’s PC for his dream girl.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "422",
         "ChrID": "3",
         "DlgTxt" :"I insisted upon revealing her name…. But Stephen didn’t do.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "423",
         "ChrID": "3",
         "DlgTxt" :"I thought it should be you… Is that you Evelyn?",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "424",
         "ChrID": "5",
         "DlgTxt" :"Well…. I’m not sure…... He never proposed me. Often times I’ve marked that he wants to express something to me but something stops him.",
         "ExpID" :"102,0",
         "DType" :""
         },
         {
         "DID" : "425",
         "ChrID": "3",
         "DlgTxt" :"Come on Evelyn…. He’s your best buddy and he shares almost all the matters with you. Isn’t it?",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "426",
         "ChrID": "3",
         "DlgTxt" :"And I know it’s you. You both get along very well with each other. Frequently Private and Confidential you guys go for clubs and dinners.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "427",
         "ChrID": "5",
         "DlgTxt" :"(Thinking and replying). I also think so. It could be me.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "428",
         "ChrID": "5",
         "DlgTxt" :"Oh my God… I’m so happy…",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "429",
         "ChrID": "5",
         "DlgTxt" :"But why he never ever expressed his feelings?",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "430",
         "ChrID": "3",
         "DlgTxt" :"Maybe he wanna surprise you on the Valentine day.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "431",
         "ChrID": "5",
         "DlgTxt" :"Oh yes… Valentine day is heading. You’re right…. He’s so cute.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "432",
         "ChrID": "5",
         "DlgTxt" :"He wanna surprise me. Love you Stephen…. Love you sooooo so much.",
         "ExpID" :"0,108",
         "DType" :""
         },
         {
         "DID" : "433",
         "ChrID": "5",
         "DlgTxt" :"It feels to be in the world of fairy tale.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"At the college - Cafeteria",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "434",
         "ChrID": "4",
         "DlgTxt" :"This project is really going to give a breakthrough in our career.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "435",
         "ChrID": "4",
         "DlgTxt" :"Have you decided any theme as of now?",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "436",
         "ChrID": "2",
         "DlgTxt" :"Not yet. But I’m thinking of the same theme on which I accomplished my research.",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "437",
         "ChrID": "2",
         "DlgTxt" :"I read many articles during my research on how to frame out the designs.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "438",
         "ChrID": "2",
         "DlgTxt" :"What is the need of the customers? What are the current trends?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "439",
         "ChrID": "2",
         "DlgTxt" :"How the design can be eye glaring? And so on…",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "440",
         "ChrID": "2",
         "DlgTxt" :"In fact, I’ve a file of all those articles collectively. I’ll try to refer them again.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "441",
         "ChrID": "4",
         "DlgTxt" :"(In profound Contemplation) She’s really a girl of virtue. Very passionate for her ambitions.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "442",
         "ChrID": "4",
         "DlgTxt" :"But how do I put forth my feelings to her?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "443",
         "ChrID": "4",
         "DlgTxt" :"Oh my god! I’m scared…. What if she doesn’t love me?",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "444",
         "ChrID": "4",
         "DlgTxt" :"Will I lose her forever?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "445",
         "ChrID": "4",
         "DlgTxt" :"I always aspired to have a girl like her…...confident, ambitious….Yet soft spoken….",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "446",
         "ChrID": "4",
         "DlgTxt" :"She’s really beauty with brains.",
         "ExpID" :"206,0",
         "DType" :""
         },
         /*{
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"",
         "ExpID" :"0,0",
         "DType" :""
         },*/
         {
         "DID" : "447",
         "ChrID": "2",
         "DlgTxt" :"Stephen…. (Snapped her fingers) Stephen…. Which world are you in?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "448",
         "ChrID": "2",
         "DlgTxt" :"You not listening me? I’m discussing with you.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "449",
         "ChrID": "4",
         "DlgTxt" :"No…. I mean… I’m der. Yea I heard you…...",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "450",
         "ChrID": "2",
         "DlgTxt" :"Okay…. Look at this article. It’s really gonna be of great help.",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Headline of the Article - The Top 10 Trends from New York  Fashion Week Spring 2017 by HILARY GEORGE-PARKIN -------------------------------------------- -------------------------------------------- -------------------------------------------- -------------------------------------------- -------------------------------------------- ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "451",
         "ChrID": "2",
         "DlgTxt" :"Headline of the Article - The Top 10 Trends from New York Fashion Week Spring 2017 by HILARY GEORGE-PARKIN",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "452",
         "ChrID": "2",
         "DlgTxt" :"So this is one of the article which I came across. Let’s see what theme I choose for my project. It’s gonna direct me lot on patterns.",
         "ExpID" :"20,0",
         "DType" :""
         },
         {
         "DID" : "453",
         "ChrID": "2",
         "DlgTxt" :"The article states slouchy, one-shoulder pieces and a wave of skimpy top etc.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "454",
         "ChrID": "2",
         "DlgTxt" :"It also educated us about different themes like Neon theme, Garden Party theme, Bad girls’ club theme practiced in glamor world.",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "455",
         "ChrID": "4",
         "DlgTxt" :"But I guess you’ve presented glamour outfits…. If I’m not wrong.",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "456",
         "ChrID": "2",
         "DlgTxt" :"Yeah…. the same. And I think I’ll choose that.",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "457",
         "ChrID": "4",
         "DlgTxt" :"(Thinking…...Right now, Roselle is alone with me.)",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "458",
         "ChrID": "4",
         "DlgTxt" :"(We’re not surrounded by anyone)",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "459",
         "ChrID": "4",
         "DlgTxt" :"(Shall I propose her now?)",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "460",
         "ChrID": "4",
         "DlgTxt" :"(Shall I propose her later?)",
         "ExpID" :"0,0",
         "DType" :""
         },
         /*{
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Option – 538(Propose her now)",
         "ExpID" :"0,0",
         "DType" :""
         },*/
         {
         "DID" : "461",
         "ChrID": "4",
         "DlgTxt" :"I need to tell you something since the time I saw you",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "462",
         "ChrID": "2",
         "DlgTxt" :"(Astonished) What? I mean… what is it?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "463",
         "ChrID": "4",
         "DlgTxt" :"(Stalled for time…) You’re so formal in your conduct. As if I’ve asked you to draft an email for some company….",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "464",
         "ChrID": "2",
         "DlgTxt" :"What…... U crazy?",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "465",
         "ChrID": "4",
         "DlgTxt" :"No…. I mean…. Ummm…... I didn’t mean that.",
         "ExpID" :"202,104",
         "DType" :""
         },
         {
         "DID" : "466",
         "ChrID": "4",
         "DlgTxt" :"(What am I saying?) When I see snow fall…. I imagine you with me….",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "467",
         "ChrID": "2",
         "DlgTxt" :"What snow fall? I didn’t get you? I mean why?",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "468",
         "ChrID": "4",
         "DlgTxt" :"No…. I didn’t mean that. I mean to say…. (After accumulating courage)",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "469",
         "ChrID": "4",
         "DlgTxt" :"My eyes search for you when you are not around.",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "470",
         "ChrID": "4",
         "DlgTxt" :"My heart aches when I don’t find you.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "471",
         "ChrID": "4",
         "DlgTxt" :"You are the reason for all my happiness and without you my life would be so dull.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "472",
         "ChrID": "4",
         "DlgTxt" :"All I want in my life is that we stay together for all the life.",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "473",
         "ChrID": "4",
         "DlgTxt" :"I just fall for you…...",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "474",
         "ChrID": "2",
         "DlgTxt" :"You mean… Ummmm",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "475",
         "ChrID": "2",
         "DlgTxt" :"I didn’t get you…. You fall for me?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "476",
         "ChrID": "2",
         "DlgTxt" :"Does that mean you love me?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "477",
         "ChrID": "2",
         "DlgTxt" :"Well…. I’ve never thought myself being with you...",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "478",
         "ChrID": "2",
         "DlgTxt" :"I’m sorry… but…. like…. You know. You’re really a gentlemanly guy.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "479",
         "ChrID": "2",
         "DlgTxt" :"Alright…. Let me make it clear….",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "480",
         "ChrID": "2",
         "DlgTxt" :"Ummm… We should mend our ways… Right now my focus is to concentrate in my studies and have my personal business set up.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "481",
         "ChrID": "2",
         "DlgTxt" :"Please don’t misunderstand me. I’m not trying to be rude with you. And moreover, I’ve no such feeling for you at the moment.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "4810",
         "ChrID": "4",
         "DlgTxt" :"(Sensing Roselle doesn’t love him… he changes his statement)(Starts laughing loudly)",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "482",
         "ChrID": "4",
         "DlgTxt" :"Hey Roselle… You think I was serious?",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "483",
         "ChrID": "4",
         "DlgTxt" :"You dumbo… I was just kidding",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "484",
         "ChrID": "4",
         "DlgTxt" :"(Laughing loudly) Just wanna to see your expressions.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "485",
         "ChrID": "4",
         "DlgTxt" :"How crazy faces will you make…. If someone proposes you?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "486",
         "ChrID": "2",
         "DlgTxt" :"With a frowned face) What?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "487",
         "ChrID": "2",
         "DlgTxt" :"How could you? Dare you do that to anyone else?",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "488",
         "ChrID": "2",
         "DlgTxt" :"You…. Silly guy…. You put me to extreme embarrassment…...",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "489",
         "ChrID": "4",
         "DlgTxt" :"I was just pranking you.",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "490",
         "ChrID": "2",
         "DlgTxt" :"Dare you prank me again? I’ll kill you.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "491",
         "ChrID": "2",
         "DlgTxt" :"It was terrifying. I think Alex has sprinkled some magical drops of water on you to transform you like him.",
         "ExpID" :"0,0",
         "DType" :""
         },
         /*{
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Option - 2(Shall I propose her later?)",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "492",
         "ChrID": "4",
         "DlgTxt" :"I think I should propose her later. At some other place.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "493",
         "ChrID": "4",
         "DlgTxt" :"This isn’t the right time. I don’t know what’s she thinking about me…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "494",
         "ChrID": "4",
         "DlgTxt" :"First, I should know whether she also feels the same for me.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Continue with the story)",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "495",
         "ChrID": "2",
         "DlgTxt" :"Anyways… what we were discussing about?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "496",
         "ChrID": "2",
         "DlgTxt" :"Yea… the themes. What theme you are going to choose?",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "497",
         "ChrID": "2",
         "DlgTxt" :"Kinda fashion theme… or something else?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "498",
         "ChrID": "2",
         "DlgTxt" :"I’m so eager to know about everyone’s theme. It’s very exciting to see costumes being sewed up ready with different themes, Isn’t it?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "499",
         "ChrID": "4",
         "DlgTxt" :"Well…. Mine will be probably semi formals. Kinda apparels which models use and even the generic people for various party or festive occasions.",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "500",
         "ChrID": "2",
         "DlgTxt" :"Oh, that’s a dazzling idea…. I mean it’s a very rational purpose.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "501",
         "ChrID": "2",
         "DlgTxt" :"And these kinda costumes are consumed more often in the market.",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "502",
         "ChrID": "4",
         "DlgTxt" :"Yeah even I think so. But I’m not sure on the consumption ratio.",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "503",
         "ChrID": "4",
         "DlgTxt" :"I’m yet not through to do the market analyses.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "504",
         "ChrID": "4",
         "DlgTxt" :"But I think for this project, this theme should go well… What say?",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "505",
         "ChrID": "2",
         "DlgTxt" :"Yeah… even I think so… I think it should splash a blast…",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "506",
         "ChrID": "2",
         "DlgTxt" :"(After a pause). Fine then… Its decided. But careful… don’t share all the project details with anyone. Especially that weird Evelyn...",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "507",
         "ChrID": "4",
         "DlgTxt" :"Yeah, I won’t. But it’s not going to remain undisclosed.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "508",
         "ChrID": "4",
         "DlgTxt" :"As per the rules, we’re supposed to design the entire costume in the college premises only.",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "509",
         "ChrID": "2",
         "DlgTxt" :"Alright… I should make a move now…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "510",
         "ChrID": "2",
         "DlgTxt" :"Need to go the lab… I have some designs in my folder.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "511",
         "ChrID": "2",
         "DlgTxt" :"Need to Just glance them to find some ideas. Will you accompany me?",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "512",
         "ChrID": "4",
         "DlgTxt" :"Nope. You carry on… I’ve gotta leave for the day.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "513",
         "ChrID": "4",
         "DlgTxt" :"My mom is going to Toronto today. I’ve to drop her to the airport.",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "514",
         "ChrID": "2",
         "DlgTxt" :"Okay… then you should be get going to home.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "515",
         "ChrID": "2",
         "DlgTxt" :"See ya…. Will catch you tomorrow.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "516",
         "ChrID": "4",
         "DlgTxt" :"Sure. Even I need to heed on the semi- formal designs.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "517",
         "ChrID": "4",
         "DlgTxt" :"We will work together on the project.",
         "ExpID" :"203,0",
         "DType" :""
         },*/
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"At the college next day.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "518",
         "ChrID": "1",
         "DlgTxt" :"Hey Roselle… You didn’t show up yesterday. Where were you?",
         "ExpID" :"201,0",
         "DType" :""
         },
         {
         "DID" : "519",
         "ChrID": "2",
         "DlgTxt" :"I was busy with some work…... About the project.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "520",
         "ChrID": "2",
         "DlgTxt" :"But why you asking? Generally, you keep busy with Catherin and your other friends.",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "521",
         "ChrID": "1",
         "DlgTxt" :"So what? You too are one of my best friends….",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "522",
         "ChrID": "1",
         "DlgTxt" :"I thought you will be busy. Hence, I didn’t search for you.",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "523",
         "ChrID": "2",
         "DlgTxt" :"(With rampant voice) Yea I was busy… And so were you…. Don’t know with whom?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "524",
         "ChrID": "2",
         "DlgTxt" :"Stephen and I were discussing on the project. We had a nice time over a discussion.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "525",
         "ChrID": "1",
         "DlgTxt" :"You could have told me .. Even I’d have joined both of you.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "526",
         "ChrID": "1",
         "DlgTxt" :"Even I need to start up with it soon.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "527",
         "ChrID": "1",
         "DlgTxt" :"And wait…. What did you say? Who were you with?",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "528",
         "ChrID": "1",
         "DlgTxt" :"That guy…. Stephen…. I mean why?",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "529",
         "ChrID": "1",
         "DlgTxt" :"Why should you go to him?...... For no reason?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "530",
         "ChrID": "2",
         "DlgTxt" :"Stop ranting and raving your questions for a minute and start being honest with Yourself.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "531",
         "ChrID": "2",
         "DlgTxt" :"If you have a long questionnaire for me than better you jot them down in a scribble pad for me. I’ll reply them whenever I’m free.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "532",
         "ChrID": "1",
         "DlgTxt" :"I must applaud you. The great beauty queen of the ‘Grande Ecole de Fashion et Arts’ is annoyed due to Charles’ questions.",
         "ExpID" :"203,104",
         "DType" :""
         },
         {
         "DID" : "533",
         "ChrID": "1",
         "DlgTxt" :"What do you mean? Often times I’ve been with you for research and the stuff…",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "534",
         "ChrID": "1",
         "DlgTxt" :"If yesterday I was with Catherin…. Can’t you come to me and all of us?",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "535",
         "ChrID": "1",
         "DlgTxt" :"But no… Why should you come with us?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "536",
         "ChrID": "1",
         "DlgTxt" :"You were with your so-called friend Stephen.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "537",
         "ChrID": "2",
         "DlgTxt" :"So what’s a big deal? You’re reacting as if I’ve committed some criminal Private and Confidential offence.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "538",
         "ChrID": "2",
         "DlgTxt" :"If we did research together… than can I not work on project with Stephen?",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "539",
         "ChrID": "2",
         "DlgTxt" :"Why you so upset? I think your thermometer of being your friend is merely jealousy of malcontents.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "540",
         "ChrID": "1",
         "DlgTxt" :"It’s not about that discussion. Its ignorance.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "541",
         "ChrID": "1",
         "DlgTxt" :"You’re ignoring me. I can clearly see.",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "542",
         "ChrID": "2",
         "DlgTxt" :"Well…. You better introspect yourself.",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "543",
         "ChrID": "2",
         "DlgTxt" :"You will find who’s ignoring whom",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "544",
         "ChrID": "1",
         "DlgTxt" :"You know what Alex was right to conclude you…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "545",
         "ChrID": "1",
         "DlgTxt" :"Whatever… I care a damn what he says……",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles & Roselle depart",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "546",
         "ChrID": "4",
         "DlgTxt" :"Hey Charles… Are you heading to cafeteria?",
         "ExpID" :"0,201",
         "DType" :""
         },
         {
         "DID" : "547",
         "ChrID": "1",
         "DlgTxt" :"Yeah... I just need a cappuccino…",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "548",
         "ChrID": "4",
         "DlgTxt" :"Dude…. All okay? You seem aggro….",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "549",
         "ChrID": "1",
         "DlgTxt" :"Nothing important….",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "550",
         "ChrID": "4",
         "DlgTxt" :"Come on bro… You can share with me.",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "551",
         "ChrID": "4",
         "DlgTxt" :"What happen? Open up buddy…. Maybe I can help you….",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "552",
         "ChrID": "1",
         "DlgTxt" :"Okay…. If you insist…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "553",
         "ChrID": "1",
         "DlgTxt" :"I balled up with Roselle… I just don’t know how",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "554",
         "ChrID": "1",
         "DlgTxt" :"I asked her the other day to work on together…",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "555",
         "ChrID": "1",
         "DlgTxt" :"But she…... (paused)",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "556",
         "ChrID": "4",
         "DlgTxt" :"Yeah… so what happened then?",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "557",
         "ChrID": "1",
         "DlgTxt" :"She screwed up… She’s started ignoring me.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "558",
         "ChrID": "1",
         "DlgTxt" :"I guess she’s turned up with you…. I…. mean",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "559",
         "ChrID": "1",
         "DlgTxt" :"I really don’t mind that but she’s ignoring me….",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "560",
         "ChrID": "4",
         "DlgTxt" :"Why you feel ignorant? I can’t really get you…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "561",
         "ChrID": "4",
         "DlgTxt" :"So what…. if she’s stated working with me or with anyone else...",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "562",
         "ChrID": "1",
         "DlgTxt" :"So what…. if she’s stated working with me or with anyone else...",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "563",
         "ChrID": "1",
         "DlgTxt" :"It’s like…... She’s just given me the cold shoulder...",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "564",
         "ChrID": "4",
         "DlgTxt" :"Let her be…. Chuck her off… What’s a big deal?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "565",
         "ChrID": "4",
         "DlgTxt" :"And we weren’t working…. We were like just shooting the breeze.",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "566",
         "ChrID": "1",
         "DlgTxt" :"No… it’s not that…. I don’t know what I feel for her…",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "567",
         "ChrID": "1",
         "DlgTxt" :"There’re millions of words in the language",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "568",
         "ChrID": "1",
         "DlgTxt" :"But for some reason…. None of them can describe The way I feel for her.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "569",
         "ChrID": "1",
         "DlgTxt" :"I even sat with a paper….I wanted to write down….",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "570",
         "ChrID": "1",
         "DlgTxt" :"Exactly what I felt But somehow…",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "571",
         "ChrID": "1",
         "DlgTxt" :"The paper stayed empty… And somehow, I could not describe it any better…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "572",
         "ChrID": "1",
         "DlgTxt" :"Anyways I’ve a bigger fish to fry.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Thinking in the state of dilemma",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "573",
         "ChrID": "4",
         "DlgTxt" :"Is Charles in love with Roselle?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "574",
         "ChrID": "4",
         "DlgTxt" :"Nope…. He can’t feel for her. He and Catherin get along with each other very well.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "575",
         "ChrID": "4",
         "DlgTxt" :"He shouldn’t be thinking to involve with Roselle…",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "576",
         "ChrID": "4",
         "DlgTxt" :"But then why is he so upset for her? I think I should create some negative insight for Roselle. I’m on knees for her.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "577",
         "ChrID": "4",
         "DlgTxt" :"I don’t want to lose her for any reason. I must do something…",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "578",
         "ChrID": "1",
         "DlgTxt" :"I think I should make a move. (he means to move from the cafeteria)",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "579",
         "ChrID": "4",
         "DlgTxt" :"Yeah... You really should… (he means to move from Roselle’s life)",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"While passing through the corridor, Roselle and Charles crossed on their way. He saw Roselle and thought",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "580",
         "ChrID": "1",
         "DlgTxt" :"Admit that i'm afraid",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "581",
         "ChrID": "1",
         "DlgTxt" :"Afraid to lose not just to lose",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "582",
         "ChrID": "1",
         "DlgTxt" :"I feel empty..",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "583",
         "ChrID": "1",
         "DlgTxt" :"I feel empty yet so full of emotion ",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "584",
         "ChrID": "1",
         "DlgTxt" :"Your deep oceanic eyes....your looks of hair",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "585",
         "ChrID": "1",
         "DlgTxt" :"Falling and moving through the breeze the breeze which move youer looks",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "586",
         "ChrID": "1",
         "DlgTxt" :"Blow even through me....",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "587",
         "ChrID": "1",
         "DlgTxt" :"I admit that i'm afrid ",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "588",
         "ChrID": "1",
         "DlgTxt" :"Just to think....what if i lose not just to lose",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "589",
         "ChrID": "1",
         "DlgTxt" :"But to lose you....",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "590",
         "ChrID": "1",
         "DlgTxt" :"You're an ocean and i'm just another guy",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "591",
         "ChrID": "1",
         "DlgTxt" :"Who loves waves but completely terrifies to swim",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "592",
         "ChrID": "1",
         "DlgTxt" :"I admit that i'm afrid",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "593",
         "ChrID": "1",
         "DlgTxt" :"afrid to lose.....",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "594",
         "ChrID": "1",
         "DlgTxt" :"But to lose you....",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles Turns around",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "595",
         "ChrID": "1",
         "DlgTxt" :"Roselle…. U leaving for home?",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "596",
         "ChrID": "2",
         "DlgTxt" :"Yeah…. I’m done for the day…. So will get going for home.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "597",
         "ChrID": "2",
         "DlgTxt" :"(Out of ill feelings for Charles) Catherin must be awaiting you...",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "598",
         "ChrID": "2",
         "DlgTxt" :"You please get going.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "599",
         "ChrID": "1",
         "DlgTxt" :"Babe come on… I even don’t know where she is.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "600",
         "ChrID": "1",
         "DlgTxt" :"Let’s make a move… I know you don’t have car today.",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "601",
         "ChrID": "1",
         "DlgTxt" :"I’ll drop you…. Let’s catch up near parking lot.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "602",
         "ChrID": "1",
         "DlgTxt" :"I’ll see you there.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "603",
         "ChrID": "2",
         "DlgTxt" :"Okay… I’ll catch you there. Will be there in probably 10 mins.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "604",
         "ChrID": "2",
         "DlgTxt" :"Just need to submit this book to the librarian. See you there…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Roselle & Charles disperse",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"At the college",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "605",
         "ChrID": "5",
         "DlgTxt" :"Stephen…. Have you selected the theme of the costume?",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "606",
         "ChrID": "5",
         "DlgTxt" :"Whether western… whether traditional…... anything?",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "607",
         "ChrID": "4",
         "DlgTxt" :"Yeah…. A kind of…. But still need to think upon before I go for designing part.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"In the following lines, Evelyn means to refer about the valentine card which she predicts is for her according to Catherin and her conversation (about Evelyn’s equation with him(Stephen)",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "608",
         "ChrID": "5",
         "DlgTxt" :"You know what Stephen…. I came to know something about you.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "609",
         "ChrID": "4",
         "DlgTxt" :"About me? (Smirks…) What is it?",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "610",
         "ChrID": "5",
         "DlgTxt" :"About you…. Something which is called friendship…. I mean…. More than friends Kinda friendship….",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "611",
         "ChrID": "5",
         "DlgTxt" :"How do I define it? It’s like I know it…. But can’t explain…",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "612",
         "ChrID": "5",
         "DlgTxt" :"(stated in a romantic way) But I guess you can read my eyes.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"However, Stephen likes Roselle and takes Evelyn just a best friend of him… Stephen:(Stunts…...)",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "613",
         "ChrID": "5",
         "DlgTxt" :"What! I mean…. What have you been known?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "614",
         "ChrID": "5",
         "DlgTxt" :"(Thinks….) Has Roselle told about my confession of my feelings for her?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "615",
         "ChrID": "5",
         "DlgTxt" :"No, she can’t do so. I told her I was just kidding her…. I didn’t mean that.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "616",
         "ChrID": "5",
         "DlgTxt" :"(Storms and asks her) What have you come to know?",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Thinking that he (Stephen) loves her(Evelyn)",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "617",
         "ChrID": "5",
         "DlgTxt" :"That you love someone…. You’ve also made a Valentine card for her...",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "618",
         "ChrID": "4",
         "DlgTxt" :"Who told you about that?",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "619",
         "ChrID": "5",
         "DlgTxt" :"Catherin…. She saw card saved in your laptop.",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "620",
         "ChrID": "5",
         "DlgTxt" :"And guess what…I’ve also came to know about your dream girl…",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "621",
         "ChrID": "4",
         "DlgTxt" :"Who? I mean…. Who do you think is my dream girl?",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "622",
         "ChrID": "5",
         "DlgTxt" :"Well… I won’t tell you now. It’s special for her so better you only reveal her on the Valentine day.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Stephen is confused… whether Roselle has disclosed it to Catherin and so has Catherin to Evelyn?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "623",
         "ChrID": "4",
         "DlgTxt" :"Anyways…. Time to go to the lab… Let’s catch up in the break.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"In the Computer Lab",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "624",
         "ChrID": "4",
         "DlgTxt" :"Hey roselle…... what have you been doing?",
         "ExpID" :"107,0",
         "DType" :""
         },
         {
         "DID" : "625",
         "ChrID": "2",
         "DlgTxt" :"I’ve almost designed a rough sketch of my dress for the fashion show.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "626",
         "ChrID": "2",
         "DlgTxt" :"I think I should be probably freezing this design…. It’s really a unique one.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "627",
         "ChrID": "4",
         "DlgTxt" :"Great!…. You’re moving at the pace of a lighting… like a drop of a hat.",
         "ExpID" :"102,0",
         "DType" :""
         },
         {
         "DID" : "628",
         "ChrID": "2",
         "DlgTxt" :"Yeah that’s because I don’t want to lose in the show. I won’t let the ship sail…",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "629",
         "ChrID": "4",
         "DlgTxt" :"But I haven’t yet up with anything substantial. I need your help.You’re well versed in designing.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "630",
         "ChrID": "2",
         "DlgTxt" :"I can’t help… Can’t break the rule… Remember…. what Ms. George said? We’ll be eliminated.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "631",
         "ChrID": "4",
         "DlgTxt" :"At least you can give me some rough idea… like theme or neck designs, patterns etc.",
         "ExpID" :"105,0",
         "DType" :""
         },
         {
         "DID" : "632",
         "ChrID": "2",
         "DlgTxt" :"Sorry rules are rules… can’t break it…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "633",
         "ChrID": "2",
         "DlgTxt" :"Even I’m struggling… I don’t know where to buy the fabric and other stuff from? I’m new to this place.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "634",
         "ChrID": "1",
         "DlgTxt" :"Hey girls…. What’s going on?",
         "ExpID" :"0,0,201",
         "DType" :""
         },
         {
         "DID" : "635",
         "ChrID": "4",
         "DlgTxt" :"Roselle is stuck up…. She doesn’t know where to buy the fabric and other stuff from as she is new to the city.",
         "ExpID" :"103,104,0",
         "DType" :""
         },
         {
         "DID" : "636",
         "ChrID": "2",
         "DlgTxt" :"That’s okay Evelyn… I’ll surf on internet… In fact, now going to prepare the list of shops in an excel sheet.",
         "ExpID" :"0,102,0",
         "DType" :""
         },
         {
         "DID" : "637",
         "ChrID": "1",
         "DlgTxt" :"Hey why bang head to such a boredom exercise? You come along with me this evening…",
         "ExpID" :"0,0,202",
         "DType" :""
         },
         {
         "DID" : "638",
         "ChrID": "1",
         "DlgTxt" :"Together we’ll go to the market. Even I’ve gotta buy some fabrics for myself. We can make it today.",
         "ExpID" :"104,0,206",
         "DType" :""
         },
         {
         "DID" : "639",
         "ChrID": "2",
         "DlgTxt" :"Oh, that’s so sweet of you Charles…. Thanks. We’ll move after the college.",
         "ExpID" :"0,106,0",
         "DType" :""
         },
         {
         "DID" : "640",
         "ChrID": "1",
         "DlgTxt" :"Sure… done… Let me call up mom that I’ll be late today…",
         "ExpID" :"0,104,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"After charles calling his mom…",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "641",
         "ChrID": "1",
         "DlgTxt" :"So Roselle… the time is up… Shall we leave for the market?",
         "ExpID" :"0,0,202",
         "DType" :""
         },
         {
         "DID" : "642",
         "ChrID": "2",
         "DlgTxt" :"Yeah sure let’s leave…. Bye Evelyn… See you…...",
         "ExpID" :"0,107,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles & Roselle leaves towards the parking lot. On their way they come across Catherin",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "643",
         "ChrID": "3",
         "DlgTxt" :"Hey Charles… I was searching for you. Can you please drop me to home today? I don’t have my car.",
         "ExpID" :"107,0,0",
         "DType" :""
         },
         {
         "DID" : "644",
         "ChrID": "1",
         "DlgTxt" :"Oh, I’m so sorry. Roselle and I are going to the fabric shop for the dress now. You’ll have to manage yourself.",
         "ExpID" :"0,0,202",
         "DType" :""
         },
         {
         "DID" : "645",
         "ChrID": "3",
         "DlgTxt" :"But why? Can’t she go alone herself? If she manages to go alone than you can drop me home.",
         "ExpID" :"102,104,0",
         "DType" :""
         },
         {
         "DID" : "646",
         "ChrID": "2",
         "DlgTxt" :"I really would have…. But I don’t know the right place as I’m new to the city.",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "647",
         "ChrID": "3",
         "DlgTxt" :"Come on Roselle…. You please stay out of this… I’m talking to Charles…. Not you.",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "648",
         "ChrID": "1",
         "DlgTxt" :"Yeah … I offered her a help. To cancel the visit would seem out of courtesy. Please understand.",
         "ExpID" :"0,0,203",
         "DType" :""
         },
         {
         "DID" : "649",
         "ChrID": "3",
         "DlgTxt" :"Oh…. please Charles…. Don’t tell me that you’re going with her.",
         "ExpID" :"103,0,0",
         "DType" :""
         },
         {
         "DID" : "650",
         "ChrID": "3",
         "DlgTxt" :"She’s not up to our standard. She’s dual face. She isn’t a kid who will need to hold your finger to go out.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "651",
         "ChrID": "2",
         "DlgTxt" :"Catherin… you better mind your language. Yes, I’m independent enough to manage my tasks.",
         "ExpID" :"0,105,0",
         "DType" :""
         },
         {
         "DID" : "652",
         "ChrID": "2",
         "DlgTxt" :"But Charles is my friend and if he wants to accompany me than what’s a big deal in that?",
         "ExpID" :"106,0,206",
         "DType" :""
         },
         {
         "DID" : "653",
         "ChrID": "3",
         "DlgTxt" :"You know what Charles…. She’s behind your money…",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "654",
         "ChrID": "2",
         "DlgTxt" :"Just shut up Catherin… You’re out of your senses. Behave yourself.",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "655",
         "ChrID": "3",
         "DlgTxt" :"How dare you form a distance between me & Charles?",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "656",
         "ChrID": "3",
         "DlgTxt" :"Alex was right about you. Often times People who are below status like you tend to chase the riches.",
         "ExpID" :"0,0,206",
         "DType" :""
         },
         {
         "DID" : "657",
         "ChrID": "2",
         "DlgTxt" :"Huuuh“People often throw rocks at the things that shine…...”",
         "ExpID" :"0,106,0",
         "DType" :""
         },
         {
         "DID" : "658",
         "ChrID": "3",
         "DlgTxt" :"Is it? But…“All that shine….Is not gold………”",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "659",
         "ChrID": "1",
         "DlgTxt" :"Girls…. Enough of that rubbish…. Catherin… you’re upset.",
         "ExpID" :"0,0,205",
         "DType" :""
         },
         {
         "DID" : "660",
         "ChrID": "1",
         "DlgTxt" :"You please leave for home. I’ll see you later.",
         "ExpID" :"0,0,202",
         "DType" :""
         },
         {
         "DID" : "661",
         "ChrID": "3",
         "DlgTxt" :"I don’t want your sympathy. You can go along with Roselle.",
         "ExpID" :"103,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles & Roselle leaves to shop the fabric for the dress. After shopping Charles gaze at Roselle and requests her to accompany him for Jehan Rictus garden square (Talking while strolling).",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "662",
         "ChrID": "1",
         "DlgTxt" :"Today the sunset seems very beautiful… Isn’t it Roselle?",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "663",
         "ChrID": "2",
         "DlgTxt" :"Yeah it is. The sky is golden with the hues of blue. It’s really lovely.",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "664",
         "ChrID": "2",
         "DlgTxt" :"“The sun sets to rise again...the flower withers….the new bud glitters…",
         "ExpID" :"102,0",
         "DType" :""
         },
         {
         "DID" : "665",
         "ChrID": "2",
         "DlgTxt" :"The petals blossom,beating autumn…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "666",
         "ChrID": "2",
         "DlgTxt" :"The old expectation dies,the new hopes rise…”",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "667",
         "ChrID": "1",
         "DlgTxt" :"I was thinking to take you to Jehan Rictus garden square. It’s a beautiful place.",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "668",
         "ChrID": "2",
         "DlgTxt" :"I would sincerely love to go there with you. Let’s go.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles & Roselle reaches at Jehan Rictus garden square.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "669",
         "ChrID": "2",
         "DlgTxt" :"Often times I’ve heard about this place but I’ve never been here.What’s so special about this place?",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "670",
         "ChrID": "1",
         "DlgTxt" :"There lies the history behind",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "671",
         "ChrID": "1",
         "DlgTxt" :"There is a wall called ‘The Wall of Love (French: Le mur des je t'aime, ‘the I Love You Wall’.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Paris is known as the city of lights’, ‘the city of Romance’.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "672",
         "ChrID": "1",
         "DlgTxt" :"It’s a love-themed wall of 40 square meters (430 sq. ft.) in the Jehan Rictus garden square in Paris, France.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "673",
         "ChrID": "1",
         "DlgTxt" :"The wall was created by a calligraphist named Fédéric Baron and mural artist Claire Kito.",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "674",
         "ChrID": "1",
         "DlgTxt" :"Each tile is 21 by 29.7 centimeters.",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "675",
         "ChrID": "1",
         "DlgTxt" :"It includes the words 'I love you' in all major languages.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "676",
         "ChrID": "1",
         "DlgTxt" :"Fédéric Baron first asked his brother, and later his foreign neighbors, to write words of love in their languages.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "677",
         "ChrID": "1",
         "DlgTxt" :"Consequently, he collected 'I love you' in this way in over 300 languages and dialects of the world.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "678",
         "ChrID": "1",
         "DlgTxt" :"The symbolism of the wall was a personal choice of the artist.",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "679",
         "ChrID": "1",
         "DlgTxt" :"A wall is, of course, a symbol of division and separation, and here Fédéric Baron wished that a wall could also be a support for the most beautiful of human feelings.",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "680",
         "ChrID": "1",
         "DlgTxt" :"The red splashes on the wall symbolize parts of a broken heart, and can be gathered to form a full heart.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"8_680_1",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "681",
         "ChrID": "2",
         "DlgTxt" :"Wow! It’s a beautiful historical cherished wall. Well… Love is really a beautiful sentiment which words often fail to express.",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "682",
         "ChrID": "1",
         "DlgTxt" :"As the morning sun lean to the sleepy earth… I strive to lean and hold your hand",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "683",
         "ChrID": "1",
         "DlgTxt" :"I feel I’m poor Poor at words Poor to define",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "684",
         "ChrID": "1",
         "DlgTxt" :"What conflict I’m facing within Transported from the slumber nights to the sleeplessness…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "685",
         "ChrID": "1",
         "DlgTxt" :"I fail to unknot the mystery, I’m poor Poor at words Poor to define",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "686",
         "ChrID": "2",
         "DlgTxt" :"Have you ever fallen in love?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "687",
         "ChrID": "1",
         "DlgTxt" :"Never before… But now I feel there’s some conflict I’m facing.But as I said, I’m poor to define… Poor at words.Anyways… shall we move. It’s been a long time.",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "688",
         "ChrID": "2",
         "DlgTxt" :"I…. I was about to say…",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "689",
         "ChrID": "1",
         "DlgTxt" :"Let’s take a leave.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles & Roselle departs for home. Roselle at home in her bed - contemplating",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "690",
         "ChrID": "2",
         "DlgTxt" :"What happened to Charles? What was he trying to convey?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "691",
         "ChrID": "2",
         "DlgTxt" :"What conflict was he talking about? Is that love he was talking about?",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "692",
         "ChrID": "2",
         "DlgTxt" :"If so… who does he love? Is it me? What am I thinking? It can’t be me...",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles at home in his bedroom.",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "693",
         "ChrID": "1",
         "DlgTxt" :"What happened to me? Especially, when I’m with Roselle..",
         "ExpID" :"203",
         "DType" :""
         },
         {
         "DID" : "694",
         "ChrID": "1",
         "DlgTxt" :"Has she made a place in my heart?",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "695",
         "ChrID": "1",
         "DlgTxt" :"Why do I find beauty in sunrise and sunsets? Am I attracted to her?",
         "ExpID" :"206",
         "DType" :""
         },
         {
         "DID" : "696",
         "ChrID": "1",
         "DlgTxt" :"Is this a mere infatuation? Or I really fall for her?",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles at home in his bedroom.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "697",
         "ChrID": "3",
         "DlgTxt" :"It was really silly of Charles… He went with Roselle… Roselle? Yuk…",
         "ExpID" :"104",
         "DType" :""
         },
         {
         "DID" : "698",
         "ChrID": "3",
         "DlgTxt" :"He chose her over me? He’s really disappointed me.",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "699",
         "ChrID": "3",
         "DlgTxt" :"I share a different bond of friendship with him.",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "700",
         "ChrID": "3",
         "DlgTxt" :"Millions of memories Thousands of Jokes",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "701",
         "ChrID": "3",
         "DlgTxt" :"Hundreds of secrets He just crushed in moments.He shattered me once and for all...",
         "ExpID" :"103",
         "DType" :""
         },
         {
         "DID" : "702",
         "ChrID": "3",
         "DlgTxt" :"But I won’t let her (Roselle) snatch him (Charles).",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "703",
         "ChrID": "3",
         "DlgTxt" :"He’s my friend… a special person… a precious knot which no one can untie.",
         "ExpID" :"104",
         "DType" :""
         },
         {
         "DID" : "704",
         "ChrID": "6",
         "DlgTxt" :"Catherin…. What’s up?",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "705",
         "ChrID": "3",
         "DlgTxt" :"Can you just leave from here Alex......? I’ll talk to you later. Right now, I’m busy.",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "706",
         "ChrID": "6",
         "DlgTxt" :"You’ve made me feel the most worthless piece of shit. I should be winning an award this year. Award for the most worthless man in the college…… Mr.Alex.",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "707",
         "ChrID": "3",
         "DlgTxt" :"I really have no energy to bear you.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "708",
         "ChrID": "6",
         "DlgTxt" :"Why do you get frustrated? Should you not learn respecting people?",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "709",
         "ChrID": "6",
         "DlgTxt" :"And I can’t see you busy…... You stressed up with project?",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "710",
         "ChrID": "3",
         "DlgTxt" :"Nope. It’s something really annoying me too much. Charles is ignoring me due to that stupid girl Roselle.",
         "ExpID" :"102,0",
         "DType" :""
         },
         {
         "DID" : "711",
         "ChrID": "3",
         "DlgTxt" :"I’ve never expected this from him at least. Yesterday evening Charles denied me to drop me home coz he was going out with Roselle.",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "712",
         "ChrID": "3",
         "DlgTxt" :"Isn’t it ridiculous of him? On top of all this…. That middle-class girl too had an argument with me.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "713",
         "ChrID": "3",
         "DlgTxt" :"I pity Charles… what’s wrong with his choice?",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "714",
         "ChrID": "6",
         "DlgTxt" :"Don’t be stressed for her dumbo…. You’re always making things a bigger deal than they actually are.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "715",
         "ChrID": "3",
         "DlgTxt" :"Do you mean I’m exaggerating? The truth is something else and I’ll drag it out someday.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "716",
         "ChrID": "3",
         "DlgTxt" :"If I put a shitometer in Roselle’s mouth, believe me it’ll show a very high degree of shit.",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "717",
         "ChrID": "6",
         "DlgTxt" :"Well… that lassie is really a trouble. But you better be cool.Anyways… I’ve gotta go. Catch you later.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Alex leaves but Catherin is still in the corridor. Roselle arrives there in a beautiful dress.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "718",
         "ChrID": "2",
         "DlgTxt" :"Hello babe… hope your anger didn’t reach till the temperature of a sun? I’m sure you didn’t find any difficulty to reach home without Charles yesterday? Did you?",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "719",
         "ChrID": "3",
         "DlgTxt" :"Not at all. By the way… you don’t need to worry about me.Charles takes enough care of me. We’re bff… You got it?",
         "ExpID" :"102,0",
         "DType" :""
         },
         {
         "DID" : "720",
         "ChrID": "2",
         "DlgTxt" :"Yeah that was apparent to me yesterday. At times I feel you’re deceiving yourself.",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "721",
         "ChrID": "3",
         "DlgTxt" :"Is it? But I guess that’s applicable to you…",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "722",
         "ChrID": "3",
         "DlgTxt" :"Keep rolling your eyes, probably you’ll find your brain back there…",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "723",
         "ChrID": "2",
         "DlgTxt" :"I think you should probably eat some make-up so that you can beautify yourself from inside too.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "724",
         "ChrID": "3",
         "DlgTxt" :"Okay! Let’s test who’s more beautiful… let’s take a selfie, view the pic and then decide who looks more beautiful.",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Selfie game - After capturing the selfie",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "725",
         "ChrID": "3",
         "DlgTxt" :"Yippee… I grace more than you.",
         "ExpID" :"106,0",
         "DType" :""
         },
         {
         "DID" : "726",
         "ChrID": "2",
         "DlgTxt" :"You really grace until you’re present in the crowd of blinds…",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "727",
         "ChrID": "2",
         "DlgTxt" :"I can remove 90% of your beauty with a wet tissue. The human body weighs  90% of water, but unfortunately, you weigh 90% of make-up. ”.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "728",
         "ChrID": "2",
         "DlgTxt" :"Also, do remember“Beauty does not last forever But a beautiful personality does”.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Moral: Shadows fall even in the brightest hours",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "729",
         "ChrID": "2",
         "DlgTxt" :"Be not pride girl….Tis that you are inviting self- destruction.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "730",
         "ChrID": "3",
         "DlgTxt" :"I’ve far more pretty important things than listening to your philosophy.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Roselle & Catherin leaves to the lab to head their day .",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "731",
         "ChrID": "1",
         "DlgTxt" :"Alex, You done with any theme for the show?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "732",
         "ChrID": "6",
         "DlgTxt" :"Nope... Not yet done… I’m working on it. How about you?",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "733",
         "ChrID": "1",
         "DlgTxt" :"Yeah, I’ve worked on the theme… Now will start with the designing part in some time.",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "734",
         "ChrID": "1",
         "DlgTxt" :"In fact, Roselle & I have already bought the fabric. Done with all major things.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "735",
         "ChrID": "4",
         "DlgTxt" :"With Roselle? Great…. Birds of feather flock together… Beauty has corrupted your mind.",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "736",
         "ChrID": "1",
         "DlgTxt" :"Why you so prejudiced for her? Just coz she parked her car at your place?",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "737",
         "ChrID": "6",
         "DlgTxt" :"Oh yeah how could I forget that! She insulted me…. She stewed up with Alex.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "738",
         "ChrID": "6",
         "DlgTxt" :"Well… Chuck her. I’ve gotta some better work than to talk about that drama queen.",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "739",
         "ChrID": "1",
         "DlgTxt" :"Aren’t you going to the lab? The deadline is approaching to complete with the dress. We need to approve with Ms. George.",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "740",
         "ChrID": "6",
         "DlgTxt" :"Well…. People often drink and smoke and get addicted to it.I’m studying since nursery but still not addicted to it.",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "741",
         "ChrID": "6",
         "DlgTxt" :"Do you know what is this called? Self-control dude.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "742",
         "ChrID": "1",
         "DlgTxt" :"Too much of over confidence is not good!",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "743",
         "ChrID": "6",
         "DlgTxt" :"Now Charles will give me lessons? Hahahaha Which lessons will you give me? Lessons of love?",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "744",
         "ChrID": "6",
         "DlgTxt" :"Let me give you a clear definition of love Love is:One side Then two side And lastly suicide",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "745",
         "ChrID": "1",
         "DlgTxt" :"Well…. You’ve your own predictions… Why’re you here? You should be an astrologer.",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "746",
         "ChrID": "6",
         "DlgTxt" :"Funny…... But Alex can do anything.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "747",
         "ChrID": "1",
         "DlgTxt" :"It’s no point arguing with you. I’ve gotta work in the lab.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles goes to the computer lab.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "748",
         "ChrID": "1",
         "DlgTxt" :"Hey…Stephen… I was searching for you. Done with your costumes? I’ve heard the big shot boutiques are going to make their presence as the judge.",
         "ExpID" :"201,0",
         "DType" :""
         },
         {
         "DID" : "749",
         "ChrID": "4",
         "DlgTxt" :"Yeah that’s right. And we’ve to be very organized in the show.Right from our costumes to design to the fittings…. Everything.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "750",
         "ChrID": "1",
         "DlgTxt" :"Yep. You’re right. It’s very difficult to get the assignments from those premium companies and boutiques.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "751",
         "ChrID": "4",
         "DlgTxt" :"Let’s try our best and hope for the best. One can’t have a milliondollar dream on a minimum wage worth ethic.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "752",
         "ChrID": "1",
         "DlgTxt" :"I agree. Roselle too is very sincere. Let’s see who bags the job. In fact, I’m going to Roselle now. We’re working in pairs on this project.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "753",
         "ChrID": "1",
         "DlgTxt" :"Need to rush now…. She must be awaiting me. Would you like to join us?",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Trying to stop Charles from going to Roselle as he (Stephen) loves her(Roselle).",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "754",
         "ChrID": "4",
         "DlgTxt" :"Nope. You please carry on. But why you go to Roselle? I mean she isn’t your type. She belongs to a conservative middle-class family.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "755",
         "ChrID": "1",
         "DlgTxt" :"I think she’s morally good and I evaluate people with their morals and not money.",
         "ExpID" :"206,0",
         "DType" :""
         },{
         "DID" : "756",
         "ChrID": "4",
         "DlgTxt" :"And I think she gets along with you coz you’re rich and she’s in need of money to start up with her own business.",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "757",
         "ChrID": "1",
         "DlgTxt" :"Come on Stephen…. Don’t act girlish. You seem to act like Catherin.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "758",
         "ChrID": "1",
         "DlgTxt" :"I know her very well. She isn’t selfish nor covetous.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "759",
         "ChrID": "4",
         "DlgTxt" :"Well…. I just thought to alert you. To believe it or not is your wish.",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "760",
         "ChrID": "1",
         "DlgTxt" :"Words fall short When I’m in her thoughts",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "761",
         "ChrID": "1",
         "DlgTxt" :"Things become still When I’m in her zeal",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "762",
         "ChrID": "1",
         "DlgTxt" :"I think I can make out people… My instinct is generally right.Anyways Stephen… Catch you later. Roselle must be awaiting me.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "763",
         "ChrID": "4",
         "DlgTxt" :"Yep… see you later.",
         "ExpID" :"0,201",
         "DType" :""
         },
         {
         "DID" : "764",
         "ChrID": "2",
         "DlgTxt" :"Hey where were you? I was searching for you all around.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "765",
         "ChrID": "1",
         "DlgTxt" :"I was in the lab with Stephen.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "766",
         "ChrID": "2",
         "DlgTxt" :"You should have at least text me. I thought we will freeze some designs out of those few which were the best.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "767",
         "ChrID": "1",
         "DlgTxt" :"Oh yeah… We were supposed to complete it today itself. But time is up. Shall we do it tomorrow?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "768",
         "ChrID": "2",
         "DlgTxt" :"Well alright… No hassles. But don’t delay any further...",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "769",
         "ChrID": "1",
         "DlgTxt" :"Will not... promise. Tomorrow there’s also a special day… It’s my birthday.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "770",
         "ChrID": "2",
         "DlgTxt" :"Oh, your birthday? Okay then… let’s celebrate our friendship with your birthday. I’ll try to make your day special.",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "771",
         "ChrID": "2",
         "DlgTxt" :"But for that you’ll have to come to my home… Will you?",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "772",
         "ChrID": "1",
         "DlgTxt" :"Well… okay. We’ve guests at home coz tomorrow it’s also my mom dad’s wedding anniversary. But I’ll manage. I’ll come in the evening… is that okay?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "773",
         "ChrID": "2",
         "DlgTxt" :"Okay done… We’ll have blast tomorrow.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "774",
         "ChrID": "1",
         "DlgTxt" :"Is there anybody else also gonna come tomorrow?",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "775",
         "ChrID": "2",
         "DlgTxt" :"Nope… Why? Do we need anybody else? I mean… I like to spend time along with you in isolation. To celebrate with you, to share things with you, to work with you, to be around you….",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "776",
         "ChrID": "2",
         "DlgTxt" :"Do you also feel the same as I do? I mean… as a friend?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "777",
         "ChrID": "1",
         "DlgTxt" :"Yeah, I do. We’re best friends now. In fact, more than friends. But Private and Confidential I need to leave after an hour or so.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "778",
         "ChrID": "1",
         "DlgTxt" :"Catherin’s parents and few other guests are anticipated tomorrow for dinner at my home.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "779",
         "ChrID": "2",
         "DlgTxt" :"Why Catherin’s parents? I mean do you know them?",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "780",
         "ChrID": "1",
         "DlgTxt" :"Yeah very well... My dad and hers are business associates.Remember She told you once in the cafeteria.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "781",
         "ChrID": "2",
         "DlgTxt" :"Ummmm not so well… I’m sure Catherin also must be coming.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "782",
         "ChrID": "1",
         "DlgTxt" :"Yeah, she and her parents often come to my house for dinners,social gatherings etc.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "783",
         "ChrID": "2",
         "DlgTxt" :"I see…. That’s why she made a mountain out of a molehill when you denied to drop her home that day.",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "784",
         "ChrID": "1",
         "DlgTxt" :"Well…. I don’t think so. But she’s little frenzied at times. Alright then… Catch you tomorrow.",
         "ExpID" :"201,0",
         "DType" :""
         },
         {
         "DID" : "785",
         "ChrID": "2",
         "DlgTxt" :"Okay…... See you. We’ll have nice time tomorrow.",
         "ExpID" :"0,107",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Thinks herself while loitering in the house",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "786",
         "ChrID": "2",
         "DlgTxt" :"Omg! It’s Charles birthday tomorrow… I’ve invited him but I’m so unprepared. What do I do.",
         "ExpID" :"103",
         "DType" :""
         },
         {
         "DID" : "787",
         "ChrID": "2",
         "DlgTxt" :"Let me think! I’m so bad at surprises and so for cooking...Bling cling…There struck an idea… I can bake a strawberry cake for him and also make a pizza for him… Yippee… I’m done.",
         "ExpID" :"102",
         "DType" :""
         },
         {
         "DID" : "788",
         "ChrID": "2",
         "DlgTxt" :"But before that I’ve to select a dress for myself. What do I wear? All I have is funky type dresses for college. I need something party wear.",
         "ExpID" :"104",
         "DType" :""
         },
         {
         "DID" : "789",
         "ChrID": "2",
         "DlgTxt" :"I think I should visit Hartford. They have a very beautiful collection.",
         "ExpID" :"106",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Roselle visits Hartford and buy a dress for herself). (Next day – Evening time) Roselle is baking cake and pizza for Charles (Charles at Roselle’s house)",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "790",
         "ChrID": "2",
         "DlgTxt" :"Welcome to my home Charles. Many many happy returns of the day.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "791",
         "ChrID": "1",
         "DlgTxt" :"Thanks. I feel so overwhelmed. You’re trying to make my birthday the most memorable one.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles cut the cake and have merry cheerful time with her.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "792",
         "ChrID": "2",
         "DlgTxt" :"I think now I need to rush. We’ve guests at dinner – Catherin and her family. Mom must be awaiting me.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "793",
         "ChrID": "2",
         "DlgTxt" :"In fact, mom has asked me to buy few stuff from Carrefour.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "794",
         "ChrID": "2",
         "DlgTxt" :"Than you must be passing by Avenue De La Bourdonnais.",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "795",
         "ChrID": "1",
         "DlgTxt" :"Yeah, I’ll drive through that road. Why? Any concerns?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "796",
         "ChrID": "2",
         "DlgTxt" :"Can you drop me to the Star bucks please? It’s on your way to home.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "797",
         "ChrID": "1",
         "DlgTxt" :"Yeah sure. Meeting your friends there?",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "798",
         "ChrID": "2",
         "DlgTxt" :"Not really. I’ve a meet with an investor, Mr. Nicholas Cowles",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "799",
         "ChrID": "1",
         "DlgTxt" :"Who’s he? And why do you wanna meet him?",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "800",
         "ChrID": "2",
         "DlgTxt" :"He’s one of the big business tycoon of fashion industry and an investor. He’s seeking for young talent who can grace the clothes with the upcoming fresh designs.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "801",
         "ChrID": "1",
         "DlgTxt" :"Is he offering you some project or kinda part time assignment?",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "802",
         "ChrID": "2",
         "DlgTxt" :"Nope. He wants to invest in a small company where he could find all fresh costume designs. And the best part is… he aspires to invest in where only youth like us is growing up as his business associate.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "803",
         "ChrID": "2",
         "DlgTxt" :"And again, like you know I need funds to start with my own business.",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "804",
         "ChrID": "2",
         "DlgTxt" :"Isn’t it interesting? I’m so keen to meet him. I just hope that he likes my perception of executing business and be affirmative to invest.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "805",
         "ChrID": "1",
         "DlgTxt" :"He surely will… In that case, I would suggest that you shouldn’t be late. You must reach on time. Let’s go then….",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "806",
         "ChrID": "2",
         "DlgTxt" :"You’re right.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Near the car",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "807",
         "ChrID": "1",
         "DlgTxt" :"How did you come to know about Mr. Nicholas Cowles?",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "808",
         "ChrID": "2",
         "DlgTxt" :"One of my dad’s business associate knows him very well. He referred me to him as my core is into fashion designing.",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "809",
         "ChrID": "2",
         "DlgTxt" :"Mr. Nicholas hardly finds time to meet people like me. But today he’s boarding flight for Milan and his flight is delayed by 6 hours due to unfavorable weather.",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "810",
         "ChrID": "2",
         "DlgTxt" :"Therefore, he’s been to Starbucks and set a meeting with me.This is called destiny.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "811",
         "ChrID": "1",
         "DlgTxt" :"It’s a good opportunity for you. All the best…. Here we arrive to Starbucks. Alright then… see you. Bubbye…",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "812",
         "ChrID": "2",
         "DlgTxt" :"I’ll update you later about my meeting. See you.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles reaches his home",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "813",
         "ChrID": "9",
         "DlgTxt" :"Where have you been Charles? Why are you so late? I told you to be on time.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "814",
         "ChrID": "1",
         "DlgTxt" :"Mom…. Please…. Stop interrogating me like a police man interrogating a criminal. I was out with my friend… Enough?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "815",
         "ChrID": "9",
         "DlgTxt" :"What’s wrong with you guys I don’t understand. When we were at your age, we never talked in this tone with our parents.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "816",
         "ChrID": "1",
         "DlgTxt" :"Come on Mom… Now don’t lecture on you and your generation.Already we had enough of it in the college.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "817",
         "ChrID": "9",
         "DlgTxt" :"Alright. You better freshen up and get ready.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "818",
         "ChrID": "1",
         "DlgTxt" :"Ok Mom…. Will be back in 10 mins.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"After 10 mins Charles is in the drawing room and the guests (Mr. & Mrs. Herbert and Catherin arrive",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "819",
         "ChrID": "24",
         "DlgTxt" :"Welcome Mr. & Mrs. Herbert… Please make yourself comfortable.",
         "ExpID" :"104,0,203,0,0,0",
         "DType" :""
         },
         {
         "DID" : "820",
         "ChrID": "25",
         "DlgTxt" :"Many happy returns of the day Charles… and Happy Wedding Anniversary Mr. & Mrs. Wilson. May you live longer and prosper with leaps and bound.",
         "ExpID" :"0,206,0,0,0,203",
         "DType" :""
         },
         {
         "DID" : "821",
         "ChrID": "24",
         "DlgTxt" :"Thanks…... It’s been a long time we have been together for dinner... isn’t it?",
         "ExpID" :"0,0,203,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "822",
         "ChrID": "25",
         "DlgTxt" :"Yeah almost 3 months…. I remember last time we met at dinner when we were going to finalize on the deal of Caisse D’ Epargne.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "823",
         "ChrID": "24",
         "DlgTxt" :"Yeah that’s right.",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "824",
         "ChrID": "25",
         "DlgTxt" :"Well before I forget, I just want you to highlight on sales figures running low. We need funds from the market for this venture. Or we need our own fund to flow in.",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "825",
         "ChrID": "25",
         "DlgTxt" :"The rival company has hit large on sales figures in my company.Now it’s high time… Need to take action.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "826",
         "ChrID": "24",
         "DlgTxt" :"Why don’t you bring some investors in here to deal with?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "827",
         "ChrID": "25",
         "DlgTxt" :"Who would invest now at this point when sales is low?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "828",
         "ChrID": "25",
         "DlgTxt" :"For time being you only have to bring the cash flow in the system.Once things settle down and we’re able to manage the sales, then we can convince investors.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "829",
         "ChrID": "24",
         "DlgTxt" :"Alright let me think on this.",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "830",
         "ChrID": "9",
         "DlgTxt" :"The table is set for dinner. Can you all join for dinner?",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         {
         "DID" : "831",
         "ChrID": "1",
         "DlgTxt" :"Mom I’ll have dinner later. I had a thin crust with my friend.",
         "ExpID" :"0,203,0",
         "DType" :""
         },
         {
         "DID" : "832",
         "ChrID": "3",
         "DlgTxt" :"Alright then even I’ll have dinner later. It’s Charles’ birthday today Therefore, I’ll accompany him.",
         "ExpID" :"106,0,0",
         "DType" :""
         },
         {
         "DID" : "833",
         "ChrID": "9",
         "DlgTxt" :"Alright guys… You both spend time together…",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         {
         "DID" : "834",
         "ChrID": "3",
         "DlgTxt" :"Mrs. Wilson, Charles is too busy nowadays… These days he hardly finds time. He’s all time busy being with project and that girl… Roselle.",
         "ExpID" :"102,0,0",
         "DType" :""
         },
         {
         "DID" : "835",
         "ChrID": "3",
         "DlgTxt" :"In fact, they have been together to buy the fabric for the costume for our upcoming show.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "836",
         "ChrID": "1",
         "DlgTxt" :"Being new in the city, Roselle doesn’t know much about the streets and roads. I just took her all around to acquaint her with the city.",
         "ExpID" :"0,205,0",
         "DType" :""
         },
         {
         "DID" : "837",
         "ChrID": "3",
         "DlgTxt" :"Oh really, I thought there is something called google map and can be wisely used to help with the roads.",
         "ExpID" :"102,0,0",
         "DType" :""
         },
         {
         "DID" : "838",
         "ChrID": "3",
         "DlgTxt" :"Never mind… You just said you had thin crust with your friend? Who’s this friend?",
         "ExpID" :"105,0,0",
         "DType" :""
         },
         {
         "DID" : "839",
         "ChrID": "1",
         "DlgTxt" :"Roselle called me at her home. I was with her. She wanted to celebrate my birthday.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "840",
         "ChrID": "3",
         "DlgTxt" :"Oh yeah! How could she miss such a chance to hover upon you?",
         "ExpID" :"102,0,0",
         "DType" :""
         },
         {
         "DID" : "841",
         "ChrID": "1",
         "DlgTxt" :"What’s a chance in that? It’s my birthday and she wanted to celebrate. That’s all….",
         "ExpID" :"0,206,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles’ phone rings - displays Roselle calling",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "842",
         "ChrID": "2",
         "DlgTxt" :"Hello Charles…... Is this good time for you to talk with you?",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "843",
         "ChrID": "1",
         "DlgTxt" :"Yes…. Tell me… You sound worried… All cool?",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "844",
         "ChrID": "2",
         "DlgTxt" :"I think my bracelet has fallen in your car. Can you please check?",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "845",
         "ChrID": "1",
         "DlgTxt" :"Yeah, I saw it when I reached home. Don’t worry... I’ll give you tomorrow in the college.",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "846",
         "ChrID": "2",
         "DlgTxt" :"Thank God, it’s in your car. I thought I lost it. It’s very expensive.",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "847",
         "ChrID": "2",
         "DlgTxt" :"Alright see you.",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "848",
         "ChrID": "3",
         "DlgTxt" :"(Upon hearing Charles’ interaction). Are you dating Roselle?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "849",
         "ChrID": "1",
         "DlgTxt" :"Nope. Why will I date her? Like I said... We’re good friends…... And you and I are bff as earlier",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "850",
         "ChrID": "3",
         "DlgTxt" :"Oh really? But now we’re frenemies.",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"On the other side at dinner table Mr. & Mrs. Herbert & Mr. & Mrs. Wilson are talking about the equation of Charles & Catherin.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "851",
         "ChrID": "8",
         "DlgTxt" :"Often times I’ve seen Charles getting along with Catherin very well.They hang out together, go to clubs, discs etc...",
         "ExpID" :"0,0,104,0",
         "DType" :""
         },
         {
         "DID" : "852",
         "ChrID": "8",
         "DlgTxt" :"But the best part is they understand each other very well… Isn’t it Mrs. Wilson?",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "853",
         "ChrID": "9",
         "DlgTxt" :"Yeah, they’re fairly comfortable with each other. They appear to be more than friends. They mean a lot to each other.",
         "ExpID" :",0,0,0",
         "DType" :""
         },
         {
         "DID" : "854",
         "ChrID": "25",
         "DlgTxt" :"What do you mean by that?",
         "ExpID" :"0,206,0,0",
         "DType" :""
         },
         {
         "DID" : "855",
         "ChrID": "8",
         "DlgTxt" :"They like each other and extend the expression of love for each other…. Simple as that… They know each other form childhood.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "856",
         "ChrID": "8",
         "DlgTxt" :"I think we should tie them into the wedding strings….",
         "ExpID" :"0,0,104,0",
         "DType" :""
         },
         {
         "DID" : "857",
         "ChrID": "8",
         "DlgTxt" :"What’re you saying? Are you sure?",
         "ExpID" :"0,0,104,0",
         "DType" :""
         },
         {
         "DID" : "858",
         "ChrID": "24",
         "DlgTxt" :"Nope. Let the children come up with this proposal rather than we talking so high… Let’s not shoot blindly in the dark.",
         "ExpID" :"0,0,0,206",
         "DType" :""
         },
         {
         "DID" : "859",
         "ChrID": "24",
         "DlgTxt" :"Let them complete their education prior to all this stuff. And let’s keep this to ourselves only.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"After dinner, Catherin & her parents disperse for home. At Catherin’s house.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "860",
         "ChrID": "8",
         "DlgTxt" :"Why are you so quiet Cat? Is all okay?",
         "ExpID" :"105,0,",
         "DType" :""
         },
         {
         "DID" : "861",
         "ChrID": "3",
         "DlgTxt" :"Yeah everything is fine… I’m just worried about the show and my costumes. That’s all.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "862",
         "ChrID": "8",
         "DlgTxt" :"Your dad and I were talking about you and Charles. About marriage. I’m sure you love him and you’re affirmative to go ahead with him.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "863",
         "ChrID": "3",
         "DlgTxt" :"What Mom? What’re you saying? Where has the marriage spewed up suddenly? From the sky? I’ve never thought on this before.",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "864",
         "ChrID": "8",
         "DlgTxt" :"Does that mean you don’t love him?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "865",
         "ChrID": "3",
         "DlgTxt" :"No Mom. I like him. But never thought about marriage.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "866",
         "ChrID": "8",
         "DlgTxt" :"Than better start thinking now. You know very well that dad is making consecutive losses in his business. But Charles’ dad Mr.Wilson is our business associate.",
         "ExpID" :"105,0",
         "DType" :""
         },
         {
         "DID" : "867",
         "ChrID": "8",
         "DlgTxt" :"We can anticipate some funds from him and your relation with Charles will even make it stronger for us to sustain.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "868",
         "ChrID": "3",
         "DlgTxt" :"But what about Roselle.",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "869",
         "ChrID": "8",
         "DlgTxt" :"Who is Roselle? Charles’ girlfriend?",
         "ExpID" :"1,0",
         "DType" :""
         },
         {
         "DID" : "870",
         "ChrID": "3",
         "DlgTxt" :"I think so. But I’m not sure. Charles has never admitted. They’re friends. But I doubt. He always surrounds her.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "871",
         "ChrID": "3",
         "DlgTxt" :"In fact, he’s started ignoring me after her arrival in the college. I’m in dilemma.Day by day she’s turning mega popular in the college. Even Stephen is trapped in her net of beauty. Huhhhh…… Drama queen.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "872",
         "ChrID": "8",
         "DlgTxt" :"Before he falls in love with her… you better date him. We want to happen this marriage by any means. We’re in huge losses.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "873",
         "ChrID": "3",
         "DlgTxt" :"Mom you need to give me some time. I like Charles and I don’t want to lose him.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "874",
         "ChrID": "3",
         "DlgTxt" :"It’s been a big day for me. Time for me to get my beauty sleep!",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "875",
         "ChrID": "10",
         "DlgTxt" :"Good Morning everyone… Hope you all have translated your ideas into sketches, scale models or mood boards which was the first phase of your project and finalized the design with a particular theme.",
         "ExpID" :"0,104,0,0",
         "DType" :""
         },
         {
         "DID" : "876",
         "ChrID": "10",
         "DlgTxt" :"Now we’re moving towards the second phase which plays a very significant role to win the show…",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "877",
         "ChrID": "10",
         "DlgTxt" :"In this phase you’ve to work in the workshop.  And You’ve to work  upon three-dimensional space, movement, texture as per the selected theme. ",
         "ExpID" :"0,0,0,103",
         "DType" :""
         },
         {
         "DID" : "878",
         "ChrID": "10",
         "DlgTxt" :"This will be a very vital stage of your costume. Remember to maintain the privacy of your costume.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "879",
         "ChrID": "6",
         "DlgTxt" :"This specky lady always comes up with a long tedious lecture…... Hope  someone had replace her lipstick with a glue stick.  ",
         "ExpID" :"206,0,0,0",
         "DType" :""
         },
         {
         "DID" : "880",
         "ChrID": "10",
         "DlgTxt" :"In case of any malpractice occurrence, you will be eliminated from the show. Therefore, better follow rules than pleading for mercy after being eliminated.",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "881",
         "ChrID": "10",
         "DlgTxt" :"In case of any malpractice occurrence, you will be eliminated from the show. Therefore, better follow rules than pleading for mercy after being eliminated.",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "882",
         "ChrID": "10",
         "DlgTxt" :"Keep your shelf locked in order to be safe.",
         "ExpID" :"0,0,202,0",
         "DType" :""
         },
         {
         "DID" : "883",
         "ChrID": "10",
         "DlgTxt" :"Once you mould your costumes with cutting and stitching process,you can come to me for approval.You have last 15 days to complete all the work. All the best!",
         "ExpID" :"0,105,0,104",
         "DType" :""
         },
         {
         "DID" : "884",
         "ChrID": "10",
         "DlgTxt" :"That’s all about the second phase. You all can disperse and approach Ms. Betsy for lockers.",
         "ExpID" :"0,104,0,0",
         "DType" :""
         },
         {
         "DID" : "885",
         "ChrID": "1",
         "DlgTxt" :"Hey Roselle… Here’s your bracelet… How could you forget in my car? You are like a bull in a china shop.",
         "ExpID" :"201,0",
         "DType" :""
         },
         {
         "DID" : "886",
         "ChrID": "2",
         "DlgTxt" :"Yeah, I was out of my mind… Actually, I was thinking about the presentation to be given to Mr. Nicholas Cowles.",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "887",
         "ChrID": "1",
         "DlgTxt" :"Did he like your plan? What did he say?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "888",
         "ChrID": "1",
         "DlgTxt" :"Is he interested to invest?",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "889",
         "ChrID": "2",
         "DlgTxt" :"He said he has already invested in two such companies. And now he will invest next year. So, either I’ve to wait or find a new investor.",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "890",
         "ChrID": "1",
         "DlgTxt" :"Never mind…. You will get some new investor. Not a big deal.",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "891",
         "ChrID": "1",
         "DlgTxt" :"Shall we march to the workshop? Let’s work out on some styles and cuts… What say? Have you collected the key of your locker from Ms. Betsy?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "892",
         "ChrID": "1",
         "DlgTxt" :"Have you collected the key of your locker from Ms. Betsy? ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "893",
         "ChrID": "2",
         "DlgTxt" :"Yes, right after the completion of lecture. ",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "894",
         "ChrID": "1",
         "DlgTxt" :"I’m yet to collect. You better go to workshop and start with the process. I’ll be back quickly.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "895",
         "ChrID": "2",
         "DlgTxt" :"Sure. You better collect the key first.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Roselle goes to the workshop & Starts working on design. Catherin also goes to the workshop, hides behind and watches Roselle’s design. After sometime Charles enters the workshop.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "896",
         "ChrID": "1",
         "DlgTxt" :"So, what have you stated with?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "897",
         "ChrID": "2",
         "DlgTxt" :"I’m just trying different cuts of the neck. I shall try first on this rough fabric. If it sets well, then I shall cut on the final fabric. What say?",
         "ExpID" :"0,105",
         "DType" :""
         },
         {
         "DID" : "898",
         "ChrID": "1",
         "DlgTxt" :"Yeah, that’s a good idea. Even I shall try the same.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "899",
         "ChrID": "2",
         "DlgTxt" :"This is flair collar neck.",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"11_899_1",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "900",
         "ChrID": "2",
         "DlgTxt" :"It’s generally called Theatrical Costumes. What say?",
         "ExpID" :"0,103",
         "DType" :""
         },
         {
         "DID" : "901",
         "ChrID": "1",
         "DlgTxt" :"Seems good…. But why don’t you try something retro style?",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "902",
         "ChrID": "2",
         "DlgTxt" :"Yeah, can be tried.",
         "ExpID" :"0,106",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"11_902_1",
         "ExpID" :"",
         "DType" :"img"
         },
         
         {
         "DID" : "903",
         "ChrID": "2",
         "DlgTxt" :"What kind of costume you are planning to design?",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "904",
         "ChrID": "1",
         "DlgTxt" :"I’m trying with some collars and sleeves cut on a rough fabric. Just  warming up my hand. Once set, I’ll start with my original fabric.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "905",
         "ChrID": "1",
         "DlgTxt" :"I’ve perception for…... Two button collar Webster collar Tab collar Button down Collar Round pin collar Bud collar",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "906",
         "ChrID": "1",
         "DlgTxt" :"Just have a look. I’ve sketched a collar guide.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"11_906_1",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "907",
         "ChrID": "1",
         "DlgTxt" :"Each one has its own style. Actually, I’m confused. Can you help  with this?.",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "908",
         "ChrID": "2",
         "DlgTxt" :"I could have for sure… But it’s absolutely Greek and Latin to me…",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "909",
         "ChrID": "2",
         "DlgTxt" :"Why don’t you try to interweave some Hollywood styles… or some  theatrical patterns?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "910",
         "ChrID": "2",
         "DlgTxt" :"These styles are pretty eye-glaring.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "911",
         "ChrID": "2",
         "DlgTxt" :"Or probably you can ask Stephen. He can give a nice piece of  advice. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "912",
         "ChrID": "1",
         "DlgTxt" :"Huhhhh…. Stephen reminds me of a penny…... Two faced and not worth  much. . ",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "913",
         "ChrID": "1",
         "DlgTxt" :"And Sweetie you…. need to put your broken brain cell together to have  rational thoughts. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "914",
         "ChrID": "2",
         "DlgTxt" :"I don’t believe you. He’s gotta good choice and an artistic approach… ",
         "ExpID" :"0,104",
         "DType" :""
         },
         {
         "DID" : "915",
         "ChrID": "1",
         "DlgTxt" :"Sorry to differ…. But this is not a bakery and I don’t sugar coat anything. If  you ask for my opinion then that’s what you’ll get. I can’t speak something which pleases you. ",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"On the other hand, Alex’ nasty mind is planning a prank to deviate Roselle. Alex: Offers bribery to the guard of locker room.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "916",
         "ChrID": "6",
         "DlgTxt" :"Hello Mr. Alfred… Are you free for a while? ",
         "ExpID" :"201,0",
         "DType" :""
         },
         {
         "DID" : "917",
         "ChrID": "19",
         "DlgTxt" :"Actually, I’ve gotta tally this list with the name plates on the locker. ",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "918",
         "ChrID": "6",
         "DlgTxt" :"I see…. I find you all time busy with some or other odd jobs.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "919",
         "ChrID": "6",
         "DlgTxt" :"It’s very difficult to accomplish such odd tasks at this age. Don’t  you get exhaust? ",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "920",
         "ChrID": "19",
         "DlgTxt" :"Yeah…. At times… But It’s my job and I love my work.",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "921",
         "ChrID": "6",
         "DlgTxt" :"Why don’t you change the job? Something easy-peasy type? ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "922",
         "ChrID": "6",
         "DlgTxt" :"Like handling office day-to-day affairs etc. You can earn a better  salary than this?",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "923",
         "ChrID": "19",
         "DlgTxt" :"I’ve been working here in this college since its inception. So, I don’t  like to change. And again, now I’m too old to adapt the changes… ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "924",
         "ChrID": "6",
         "DlgTxt" :"Than you should find some side income. You can get in this college  itself… by helping students like me. ",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "925",
         "ChrID": "19",
         "DlgTxt" :"By helping you? And who will pay me for that? ",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "926",
         "ChrID": "6",
         "DlgTxt" :"Of course, me…. I’ve an anti-poverty program for you. All you have to do  is…. Come I’ll explain you.",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "927",
         "ChrID": "6",
         "DlgTxt" :"There’s a locker on the name of Ms. Roselle Brian.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "928",
         "ChrID": "6",
         "DlgTxt" :"One key is already given to her by Ms. Betsy. I just want another  key which is in the office. Can you help me get that?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "929",
         "ChrID": "19",
         "DlgTxt" :"Locker is assigned only for personal use…No one else allowed to  open it. That’s what I’ve been said. And I’m the guard here… I’ve  to maintain the privacy of all lockers",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "930",
         "ChrID": "6",
         "DlgTxt" :"And if I say that I can pay you hard for this work… Then? Can you  get me the keys? ",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "931",
         "ChrID": "19",
         "DlgTxt" :"(Frowned) You’re offering me the bribe… What’s your intention? Don’t get  me started, I don’t come with brakes.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "932",
         "ChrID": "6",
         "DlgTxt" :"Relax Mr. Alfred…. I’m just trying to appreciate your work. And if  you don’t do this work than Alex can find other ways to get it done",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "933",
         "ChrID": "6",
         "DlgTxt" :"I’ll find some other way to get the key. And then you may be fired  for not been able to take care of these lockers. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "934",
         "ChrID": "6",
         "DlgTxt" :"So, you better get me the key… I’ll complete my work and return  you the keys. Assume that it’s an anti-poverty program for you. ",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "935",
         "ChrID": "6",
         "DlgTxt" :"You can quietly place them back in the office. Just think upon  this… ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "937",
         "ChrID": "19",
         "DlgTxt" :"Alright…. I’ll get you the keys of Ms. Roselle Bryan’s locker. But promise  me… You’ll not cause any harm to her. ",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "938",
         "ChrID": "6",
         "DlgTxt" :"Trust me…. Alex has some standard… ",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "939",
         "ChrID": "19",
         "DlgTxt" :"But I can’t make it today. You need to give me a week’s time. I’ll find the opportunity and get the key. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "940",
         "ChrID": "6",
         "DlgTxt" :"No probs. Done… You’ll be paid hard for this… Don’t worry. ",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Next day in the college. All the students are in the workshop busy stitching, weaving, surface designing their dresses. ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "941",
         "ChrID": "10",
         "DlgTxt" :"What an enthralling sight! I’m ecstatic to see you all engrossed in  to the making of costumes.  ",
         "ExpID" :"0,0,106",
         "DType" :""
         },
         {
         "DID" : "942",
         "ChrID": "10",
         "DlgTxt" :"I think I must take a round and have a fleeting look at your making  of costumes. ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         {
         "DID" : "943",
         "ChrID": "10",
         "DlgTxt" :"Roselle…. Is everything functioning smooth?  ",
         "ExpID" :"0,0,106",
         "DType" :""
         },
         {
         "DID" : "944",
         "ChrID": "2",
         "DlgTxt" :"Yes…. Ms. George… We’ve started with the various segments of  the dress.",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "945",
         "ChrID": "3",
         "DlgTxt" :"Ms. George! Roselle is trying initially on rough fabric to warm up  her hand. How silly of her!",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "946",
         "ChrID": "3",
         "DlgTxt" :"She believes she’s nominated by Oscar.",
         "ExpID" :"106,0,0",
         "DType" :""
         },
         {
         "DID" : "947",
         "ChrID": "10",
         "DlgTxt" :"Catherin! No comments please… ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "948",
         "ChrID": "2",
         "DlgTxt" :"I’m returning your nose Catherin…. I just found it in my business. Some  people are often anxious about others work. ",
         "ExpID" :"0,104,0",
         "DType" :""
         },
         {
         "DID" : "949",
         "ChrID": "3",
         "DlgTxt" :"Its’ not called anxiety. It’s the folly and because I pity at their talent….  I tried to draw Ms. George’s attention…... Probably she can stop such  folly…... ",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         {
         "DID" : "950",
         "ChrID": "2",
         "DlgTxt" :"I was planning for some immunity build up exercise today. I think punching  someone’s face would be one of its best. ",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "951",
         "ChrID": "2",
         "DlgTxt" :"Your face fits the best to punch as you think you’re the hottest face in the  college. It’ll help me burn some extra loads of calories as well… What say? ",
         "ExpID" :"0,104,0",
         "DType" :""
         },
         {
         "DID" : "952",
         "ChrID": "10",
         "DlgTxt" :"Stop such bombardment of comments at each other. I’ve just  arrived here to take a fleeting look at your costumes…... Surprisingly, there’s less work and more of bombing. ",
         "ExpID" :"0,0,103",
         "DType" :""
         },
         {
         "DID" : "953",
         "ChrID": "10",
         "DlgTxt" :"I need to rush for a meeting with the Event Manager. ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"(Visuals of the segments of dresses) ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_1",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_2",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_3",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_4",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_5",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_6",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_7",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_8",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_9",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_10",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_11",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_12",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_13",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_14",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_15",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_16",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_17",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_18",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_19",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"12_953_20",
         "ExpID" :"",
         "DType" :"img"
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"After lots of work ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "954",
         "ChrID": "2",
         "DlgTxt" :"Whoofff ! Completely exhausted. This work is exceedingly  strenuous. I badly need a peach ice tea and a cup cake to freshen up. Shall we walk off to cafeteria? ",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "955",
         "ChrID": "1",
         "DlgTxt" :"Even I was thinking of going to cafeteria. Or else let’s go to  Francart… We’ll have yummy freshly baked croissants dipped in  coffee. ",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         {
         "DID" : "956",
         "ChrID": "4",
         "DlgTxt" :"(Thinking) I must keep Roselle away from Charles. I don’t want to  lose her. By hook or by crook I want her.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "957",
         "ChrID": "2",
         "DlgTxt" :"Why not we order here itself?  Francart gives delivery service. Ms.  George has allowed us to have food here due to the extended hours.",
         "ExpID" :"0,104,0",
         "DType" :""
         },
         {
         "DID" : "958",
         "ChrID": "1",
         "DlgTxt" :"Alright babe…. Will call Francart and order. They bake the best  croissants in Paris. You’ll love it. ",
         "ExpID" :"203,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"On a cell phone screen. Mom calling…. Hello Mom… ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "960",
         "ChrID": "20",
         "DlgTxt" :"Roselle…. Dad is unwell…... He had an ache in the heart last night.  ",
         "ExpID" :"101,101",
         "DType" :""
         },
         
         {
         "DID" : "961",
         "ChrID": "20",
         "DlgTxt" :"We consulted the doctor. He recommended for heart surgery… ",
         "ExpID" :"101,101",
         "DType" :""
         },
         
         {
         "DID" : "962",
         "ChrID": "2",
         "DlgTxt" :"Oh my god! Mom…... I’m coming back to Rome. I’ll leave  tomorrow.  ",
         "ExpID" :"101,101",
         "DType" :""
         },
         
         {
         "DID" : "963",
         "ChrID": "20",
         "DlgTxt" :"But you said you have a Fashion Show and you’re busy designing  your costume",
         "ExpID" :"101,101",
         "DType" :""
         },
         
         {
         "DID" : "964",
         "ChrID": "2",
         "DlgTxt" :"No matter what Mom… I’m coming… You don’t worry… I’ll be  back soon. When is the surgery? ",
         "ExpID" :"101,101",
         "DType" :""
         },
         
         {
         "DID" : "965",
         "ChrID": "20",
         "DlgTxt" :"The surgery is scheduled tomorrow itself. And if you leave  tomorrow you’ll be late. You better concentrate on your costumes.  ",
         "ExpID" :"101,101",
         "DType" :""
         },
         
         
         {
         "DID" : "966",
         "ChrID": "20",
         "DlgTxt" :"This is the biggest stride of your career and Dad and I don’t want  to cause any hinderance. ",
         "ExpID" :"101,101",
         "DType" :""
         },
         
         
         {
         "DID" : "967",
         "ChrID": "2",
         "DlgTxt" :"Alright Mom. But you please keep me posted. I’m so worried.  ",
         "ExpID" :"101,101",
         "DType" :""
         },
         {
         "DID" : "968",
         "ChrID": "1",
         "DlgTxt" :"All okay Roselle? You look upset  ",
         "ExpID" :"203,0,0",
         "DType" :""
         },
         {
         "DID" : "969",
         "ChrID": "2",
         "DlgTxt" :"Oh yeah… Dad isn’t keeping well. I need to go home. I think I  better block the ticket for British Airways. ",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "970",
         "ChrID": "1",
         "DlgTxt" :"You better block for Air France. It reaches faster as it  flies directly from Paris to Rome. ",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         {
         "DID" : "971",
         "ChrID": "1",
         "DlgTxt" :"Don’t panic and buzz me if any help required.  ",
         "ExpID" :"203,0,0",
         "DType" :""
         },
         {
         "DID" : "972",
         "ChrID": "2",
         "DlgTxt" :"Sure…. Thanks… See you tomorrow. But most probably I’ll go in the  next week once he is discharged from the hospital.  ",
         "ExpID" :"0,104,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"After 10 days of long industrious preparation, the final Fashion Wears of the contestants are ready. ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "973",
         "ChrID": "10",
         "DlgTxt" :"Students, yesterday was your deadline to complete with the final  costumes. Hope you all are ready with it. ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         {
         "DID" : "974",
         "ChrID": "10",
         "DlgTxt" :"Ms. Roger Ms. (Principal) wants the report of your costumes.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "975",
         "ChrID": "10",
         "DlgTxt" :"You may come one by one with your costumes in the auditorium. And  if any touch up is left, you can do after the college hours.  ",
         "ExpID" :"0,0,106",
         "DType" :""
         },
         {
         "DID" : "976",
         "ChrID": "10",
         "DlgTxt" :"But I want someone as a volunteer to head this event. Charles, can you  head the event? ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         {
         "DID" : "977",
         "ChrID": "1",
         "DlgTxt" :"Sure Ms. George…... No hassles. ",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         
         {
         "DID" : "978",
         "ChrID": "10",
         "DlgTxt" :"You’ve to report Mr. Clint. He’s a Green Room Manager of this  show. He’ll guide you and explain you your roles and responsibility.  Do you want anybody else from your classmates as a volunteer? ",
         "ExpID" :"0,0,102",
         "DType" :""
         },
         {
         "DID" : "979",
         "ChrID": "1",
         "DlgTxt" :"Do you mind Roselle joining me? She’s organized such events earlier  while she was in Rome. ",
         "ExpID" :"205,0,0",
         "DType" :""
         },
         {
         "DID" : "980",
         "ChrID": "10",
         "DlgTxt" :"Of course not. In fact, I’m glad to assign her to volunteer the event.",
         "ExpID" :"0,0,102",
         "DType" :""
         },
         {
         "DID" : "981",
         "ChrID": "10",
         "DlgTxt" :"After my examination of your costumes, keep them safely in your  locker. In case of any misplacement, the college management is not  responsible",
         "ExpID" :"205,0,0",
         "DType" :""
         },
         
         {
         "DID" : "982",
         "ChrID": "10",
         "DlgTxt" :"Please make a note that College hours are extended so you may stay  back in case any touch up is left.",
         "ExpID" :"0,104,0",
         "DType" :""
         },
         {
         "DID" : "983",
         "ChrID": "10",
         "DlgTxt" :"All of you please gather near the auditorium. I shall scrutinize  your costumes.",
         "ExpID" :"0,0,106",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_1",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_2",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_3",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_4",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_5",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_6",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_7",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_8",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_9",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_10",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_11",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_12",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_13",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_14",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_15",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"13_983_16",
         "ExpID" :"",
         "DType" :"img"
         },
         
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"After the examination of costumes, everyone placed their costumes in the assigned personal lockers. All were about to disperse). Charles & Roselle are about to leave. Charles left his key in the bag of his costume which he kept in his locker. He was searching for it but suddenly he recollected that it’s left in the bag of costume which is placed in the locker.",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "984",
         "ChrID": "3",
         "DlgTxt" :"After examining my costume, Ms. George said “all the costumes  are exceptionally outstanding. I think you guys are gonna rock the show.",
         "ExpID" :"104,0",
         "DType" :""
         },
         
         {
         "DID" : "985",
         "ChrID": "3",
         "DlgTxt" :"But I guess she liked my costume the most. I saw her eye- glared upon  my costume. Hope I won the show. At least I want to be ahead of that bitch Roselle.",
         "ExpID" :"105,0",
         "DType" :""
         },
         
         {
         "DID" : "986",
         "ChrID": "3",
         "DlgTxt" :"She shows up attitude. A bad attitude is like a flat tire, you can’t get very far  until you change it.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "987",
         "ChrID": "4",
         "DlgTxt" :"Settle your oats babe…. Have a piece of doughnut and breathe easy.",
         "ExpID" :"0,205",
         "DType" :""
         },
         {
         "DID" : "988",
         "ChrID": "3",
         "DlgTxt":"How can I breathe easy? Didn’t you see? How Ms. George is flattered  by Roselle, the so-called ‘rosy chic’.",
         "ExpID" :"104,0",
         "DType" :""
         },
         {
         "DID" : "989",
         "ChrID": "3",
         "DlgTxt" :"All time she applies that rose red lip balm and thinks herself the great Queen Elizabeth and makes me feel as a poor Cindrella.",
         "ExpID" :"0,206",
         "DType" :""
         },
         
         {
         "DID" : "990",
         "ChrID": "3",
         "DlgTxt" :"She’s some magical powers to make people dance behind her. And Ms.  George…. She really carries George Bush expectations.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "991",
         "ChrID": "3",
         "DlgTxt" :"If I had eggs in my hands… I would have surely exploded them on her  face.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"After everyone leaves the college, Alex tries to put his malicious thought into action",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "992",
         "ChrID": "1",
         "DlgTxt" :"Roselle… Can you wait outside near my car? I’ll get my keys.",
         "ExpID" :"0,205",
         "DType" :""
         },
         
         {
         "DID" : "993",
         "ChrID": "2",
         "DlgTxt" :"Sure. But please hurry up….",
         "ExpID" :"104,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Scene in the College Corridor",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "994",
         "ChrID": "6",
         "DlgTxt" :"Mr. Alfred…  Where’s the key of Roselle’s locker?",
         "ExpID" :"206,0",
         "DType" :""
         },
         
         {
         "DID" : "995",
         "ChrID": "19",
         "DlgTxt" :"I can’t give you here. The CCTV camera can capture us. I’ve kept the  key behind the door of the locker room on the left side in an  envelope.",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "996",
         "ChrID": "19",
         "DlgTxt" :"There is no CCTV camera in the locker room in order to maintain the  privacy of the designs of costume. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "997",
         "ChrID": "19",
         "DlgTxt" :"You can collect the key. All you have is 10 minutes. Get your work  done and get going out. Remember well… my name shouldn’t be  involved and don’t cause any harm to Roselle’s locker. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"On one side Charles is heading towards the locker room and on the other hand, Alex is about to get the key from the envelope and distort Roselle’s costume in order to take his pranky revenge. While Alex is all set with Roselle’s dress in his hand and spill the drops of acidic fluid which on sprinkling the fabric immediately gets torn, Charles reaches there. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "998",
         "ChrID": "1",
         "DlgTxt" :"Alex…. What have you been doing with Roselle’s dress? ",
         "ExpID" :"202,0",
         "DType" :""
         },
         
         {
         "DID" : "999",
         "ChrID": "6",
         "DlgTxt" :"(Panicked)This isn’t Roselle’s dress…? ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1000",
         "ChrID": "1",
         "DlgTxt" :"Liar…. This is Roselle’s dress and so is her locker. ",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "1001",
         "ChrID": "6",
         "DlgTxt" :"How could you claim that it’s her dress? Ms. George has privately seen  our costumes.  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "1002",
         "ChrID": "1",
         "DlgTxt" :"I know it is. We went to buy the fabric together. What is this liquid in  your hand smelling acid?   ",
         "ExpID" :"205,0",
         "DType" :""
         },
         {
         "DID" : "1003",
         "ChrID": "1",
         "DlgTxt" :"Oh…. Now I’m getting your intentions…. You were trying to splash  acid on Roselle’s dress…... Right? ",
         "ExpID" :"206,0",
         "DType" :""
         },
         
         {
         "DID" : "1004",
         "ChrID": "6",
         "DlgTxt" :"Charles Please don’t get dismayed. I know you’re her friend but she doesn’t  worth your friendship. Believe me she’s greedy behind your money. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1005",
         "ChrID": "1",
         "DlgTxt" :"Oh, shut up Alex just shut up…. Will you? What you’re doing is called  theft. You can be behind the bars for this and the college will rusticate you. ",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "1006",
         "ChrID": "6",
         "DlgTxt" :"To tell you anything about Roselle is like falling words on deaf ears.  She’s tied a dark band on your eyes. One day you’ll repent for this. Remember my words.  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1007",
         "ChrID": "1",
         "DlgTxt" :"At this moment, I can only remember Ms. Roger (Principal).  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"As Charles took a long time to return, Roselle goes to the locker room to see where Charles is stuck up. Roselle in the locker room. ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "1008",
         "ChrID": "2",
         "DlgTxt" :"Charles…. What’s going on? Why you taking so long?   ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Horrified at the sight of her dress in Alex’ hands. ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "1009",
         "ChrID": "2",
         "DlgTxt" :" Alex…. What have you been  doing with my dress? How dare you open my locker?    ",
         "ExpID" :"103,0,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles narrates the entire incident and his malicious pranky intention.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1010",
         "ChrID": "2",
         "DlgTxt" :"  (Expressing disgust at Alex): Alex…. I never knew you’re so mean cheapo type guy… You were not  going to distort just my dress… You were about to ruin my career. You just don’t know what unfortunate situation I’m going through ",
         "ExpID" :"102,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1011",
         "ChrID": "6",
         "DlgTxt" :"I know it all. And I know your secret. You’re falling for money and  strangled Charles in your enchanting beauty",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "1012",
         "ChrID": "1",
         "DlgTxt" :"Oh shut up Alex… I’m not a kid. Roselle… let’s go to Ms. Roger  (Principal). ",
         "ExpID" :"0,206",
         "DType" :""
         },
         
         {
         "DID" : "1013",
         "ChrID": "6",
         "DlgTxt" :"Please don’t…... Charles… I just thought you’re my friend. You know  Ms. Roger will fire me out from this college.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1014",
         "ChrID": "2",
         "DlgTxt" :"He’s right Charles. Leave it. Let’s forgive him. End up this matter here.  ",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1015",
         "ChrID": "2",
         "DlgTxt" :"Unlike him I don’t want to ruin his career. I’ll keep my dress in your  locker for time being. .  ",
         "ExpID" :"102,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1016",
         "ChrID": "2",
         "DlgTxt" :"Thanks Charles… You saved my costume from being ugly. I’m just  spell-bound. Already my dad is passing through rough times…. ",
         "ExpID" :"103,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1017",
         "ChrID": "2",
         "DlgTxt" :"I couldn’t have been able to handle one more shock of elimination  from the show.   ",
         "ExpID" :"104,0,206",
         "DType" :""
         },
         
         {
         "DID" : "1018",
         "ChrID": "1",
         "DlgTxt" :"Don’t be formal to thank me. I just reached right place at the right  time",
         "ExpID" :"0,203,0",
         "DType" :""
         },
         
         {
         "DID" : "1019",
         "ChrID": "21",
         "DlgTxt" :"Guys…. Are all present here? ",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "1020",
         "ChrID": "1",
         "DlgTxt" :"Yes Mr. Clint… I’ve tallied with the list. All the contestants are present.  ",
         "ExpID" :"203,0",
         "DType" :""
         },
         
         {
         "DID" : "1021",
         "ChrID": "21",
         "DlgTxt" :"That’s great…. I’ve allotted room no 101 & 102 for girls and room no 103 &  ",
         "ExpID" :"0,203",
         "DType" :""
         },
         {
         "DID" : "1022",
         "ChrID": "21",
         "DlgTxt" :"104 for boys.   ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1023",
         "ChrID": "21",
         "DlgTxt" :"Make- up artist and hairstylist has already arrived. They’re waiting in the  allotted respective rooms. Charles… Please inform all the boys to start with the prepation and get ready. Roselle will inform all the girls. ",
         "ExpID" :"0,205",
         "DType" :""
         },
         
         
         
         {
         "DID" : "1024",
         "ChrID": "1",
         "DlgTxt" :"Sure…. After getting ready shall we wait their itself? ",
         "ExpID" :"202,0",
         "DType" :""
         },
         
         {
         "DID" : "1025",
         "ChrID": "21",
         "DlgTxt" :"You’ve 3 hours to go for the show. But I want all of you here within 2 hours.  So, all you’ve for dressing up, make-up and hair-style is 2 hours.  ",
         "ExpID" :"0,206",
         "DType" :""
         },
         
         {
         "DID" : "1026",
         "ChrID": "21",
         "DlgTxt" :"Once you all get ready, right away come to the green room. Girls will use the  right side Green room and boys the left one…... And so on the respective entry to the stage.  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1027",
         "ChrID": "21",
         "DlgTxt" :"Clear with all instructions? ",
         "ExpID" :"0,202",
         "DType" :""
         },
         
         {
         "DID" : "1028",
         "ChrID": "1",
         "DlgTxt" :"Absolutely….  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "1029",
         "ChrID": "21",
         "DlgTxt" :"Great. So…...  get going…... We’ll meet soon in the green room.  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"While all are getting ready in their respective rooms…... Ms. George is engaged in tallying things of the check-list with event manager.Site - Plan Checklist,• Hospitality for Celebrities and guest designers• Cue Personnel, • Hosts ,• Ushers ,• Media Crew ,• Video Crew ,• ,Technical staff • Sound Crew ,• Food Service ,• Emergency Reserves ,• Decorations, • Stage & Ramp way, • Lights ,• Security & Crowd Control Staff , • First Aid Arrangements, • Fire Fighting Equipments",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Ms. George Says ....Almost everything is arranged. I think everything seems perfect. Now you  just need to check with the lights with the contestants.They will need the lights as per their outfit.",
         "ExpID" :"",
         "DType" :""
         },
         /*
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"They will need the lights as per their outfit. .     ",
         "ExpID" :"",
         "DType" :""
         },
         */
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Event Manager Says..Yeah Mr. Clint informed me and also gave me the list of who wants what.Like Roselle needs only the spot light as she has floral theme based red dress.I’ve arranged contrast lights for everyone as per the list… Just to show up a better color effect of their costumes.",
         "ExpID" :"",
         "DType" :""
         },
         /*
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Like Roselle needs only the spot light as she has floral theme based red dress. .     ",
         "ExpID" :"",
         "DType" :""
         },
         */
         
         /*
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"I’ve arranged contrast lights for everyone as per the list… Just to show up a better color effect of their costumes.    ",
         "ExpID" :"",
         "DType" :""
         },
         */
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Ms. George Says..Yeah…. Basically, you need to take intense care that the colors of costumes  don’t merge and blend into the brightness of lights.The light effect should be such which brings out the sharpness of the  costumes and each and every curve and cut displays a clear visual. That would enable judges to select the right candidate.",
         "ExpID" :"0,104",
         "DType" :""
         },
         /*
         {
         "DID" : "",
         "ChrID": "",
         "DlgTxt" :"The light effect should be such which brings out the sharpness of the  costumes and each and every curve and cut displays a clear visual. That would enable judges to select the right candidate.",
         "ExpID" :"0,106",
         "DType" :""
         },
         */
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Event Manager Says..Sure Ms. George… That will be taken care of. I’ll instruct the technician and  also take personal care of this.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Ms. George Says...Alright then… I’ll need to check with the green room. Probably shortly we  should be starting with the show.  ",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Fashion show starts with a big bash. All the contestants with the top-tier fashion wear come to rock the ramp. it’s no wonder every self-proclaimed fashionista wants to launch a personal style. ",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Host: After a stunning interpretation of the costumes and the fair assessment…. I  request the judges to do the honors by concluding the show with the declaration of the winners with the best fashion wear of the year.   ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Ms. Florence McLain (Judge 1): 1. Ms. Roselle Brian at the first place 2. Ms. Catherin Herbert at the second place 3. Mr. Charles Wilson at the third place    ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1041",
         "ChrID": "2",
         "DlgTxt" :"I always loved wearing stylish outfits since my childhood. I inherited that  from my mom. I was posting my outfits on various online portals for the past few years and was getting requests to give suggestions. ",
         "ExpID" :"0,102,0",
         "DType" :""
         },
         
         {
         "DID" : "1042",
         "ChrID": "2",
         "DlgTxt" :"Initially, I ignored the requests of suggestions due to time crunch. However,  eventually I gave it a serious thought and started pursuing my passion for fashion designing. ",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Mr. Marcus Gates (Judge 2): Catherin…... Do you think organized stores keep an eye on various fashion  style or follow their own trend? ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "1044",
         "ChrID": "3",
         "DlgTxt" :"I think the chain of organized stores have their own perception on whether to keep an eye on various latest style or to create their own. It depends quite a  lot on their budget.     ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Ms. Jaqueline Furtado (Judge 3): Charles…. Can you advise something on fashion and style to all our fashion  followers? ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "1046",
         "ChrID": "1",
         "DlgTxt" :"We live in a country where people have a very strong sense of pride in the  way they dress. Comfort factor is an integral part of fashion, so pay due heed to it. ",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1047",
         "ChrID": "1",
         "DlgTxt" :" Furthermore, know fashion trend by engaging in Eastern and Western  cultures to get the best of both worlds. ",
         "ExpID" :"203,0,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Host: At the finale of the show, I request Ms. Florence McLain to say a few words  to our fashion creators and followers…... ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Ms. Florence McLain’s Speech: It thrills me a lot that fashion and design now play an equally important role with other artistic fields. For what is fashion if not an artistic and creative expression? When I was seven years old and experienced my first days at school, I found a hat at my granny’s loft. It wasn't any hat, according to me, it was the most beautiful belonging one could possibly carry. I believe fashion is a form of a universal language which allows constructing and deconstructing our identities, to play whatever role we want by shaping our look to show certain attitudes or values. It's always been amazing to me how quickly a piece of clothing can change how I feel, how I hold myself, and even how I act. Fashion as a phenomenon is something that is very dynamic and in constant change, and especially in the globalized world we live in. And the Paris fashion industry holds up well in the tough competition and enjoys great success both nationally and internationally. Fashion, form and design are elements that for decades characterized the rest of the world picture of Paris. Fashion sector employs a large group of people at all stages from production to design and marketing - but also all those who currently subsist on to write, analyze, shoot, commenting and blogging about fashion. And I thank them all.  Sustainable fashion is a part of the growing design philosophy and trend of sustainability, the goal of which is to create a system which can be supported indefinitely in terms of human impact on the environment and social responsibility. I am thrilled that many fashion designers are now introducing eco-conscious methods at the source through the use of environmentally friendly materials and socially responsible methods of production. rated. With these final words I hereby wish you all the best for your future.  ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1049",
         "ChrID": "2",
         "DlgTxt" :"Congrats Catherin…… and Charles…. ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         
         {
         "DID" : "1050",
         "ChrID": "2",
         "DlgTxt" :"Kiddo…. We won…… Hip hip hurray…... It’s really a wonderful feeling to  win such a big bang kinda contest.",
         "ExpID" :"0,0,103",
         "DType" :""
         },
         
         {
         "DID" : "1051",
         "ChrID": "3",
         "DlgTxt" :"(Out of Jealousy) Yea but there was a partial decision…... Otherwise I could  have come first…. Ms. George complimented my costume as the best of all. ",
         "ExpID" :"106,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1052",
         "ChrID": "2",
         "DlgTxt" :"How mean or rather I should say how jealous! Can you ever accept others’  victory? ",
         "ExpID" :"0,0,103",
         "DType" :""
         },
         {
         "DID" : "1053",
         "ChrID": "2",
         "DlgTxt" :"I wonder! How could your high society ‘Aristocratic Class’ tag didn’t help you  win the first position?  ",
         "ExpID" :"0,0,102",
         "DType" :""
         },
         {
         "DID" : "1054",
         "ChrID": "3",
         "DlgTxt" :"Mind your language…. You better get off your high horse. Winning this one  contest doesn’t judge anyone’s career. There is lot more to come ahead.  ",
         "ExpID" :"104,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1055",
         "ChrID": "3",
         "DlgTxt" :"I believe…. Sometimes we need to lose the small battles to win the war…. ",
         "ExpID" :"106,0,0",
         "DType" :""
         },
         {
         "DID" : "1056",
         "ChrID": "2",
         "DlgTxt" :"Oh really! I’m anticipating those wars…… ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1057",
         "ChrID": "1",
         "DlgTxt" :"Can you stop this silly non-sense girls? Can’t you celebrate this moment? ",
         "ExpID" :"0,205,0",
         "DType" :""
         },
         
         {
         "DID" : "1058",
         "ChrID": "1",
         "DlgTxt" :"It’s your day girls…... Shortly these judges will give you small projects to work  on. You better concentrate on them.  ",
         "ExpID" :"0,202,0",
         "DType" :""
         },
         
         {
         "DID" : "1059",
         "ChrID": "3",
         "DlgTxt" :"Oh yeah…... Roselle thinks herself as the Beauty Glamour Queen…. And she  thinks she has been on first place…. So, she would get better projects than  me. ",
         "ExpID" :"103,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1060",
         "ChrID": "3",
         "DlgTxt" :"But I’m gonna bag something which you can’t.  ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "1061",
         "ChrID": "2",
         "DlgTxt" :"Can you stop honking on my head? I just need to go home and facetime my  mom about today’s victory in the contest.   ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1062",
         "ChrID": "2",
         "DlgTxt" :"Charles I’ve to rush. I’ll see you in the evening. ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Next day at Catherin’s house",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1063",
         "ChrID": "8",
         "DlgTxt" :"Catherin…. Are you involved with Charles? Your Undergrad Programme is  already on the verge of completion.  ",
         "ExpID" :"0,104",
         "DType" :""
         },
         
         {
         "DID" : "1064",
         "ChrID": "3",
         "DlgTxt" :"Mom please will you stop bothering me? ",
         "ExpID" :"103,0",
         "DType" :""
         },
         
         {
         "DID" : "1065",
         "ChrID": "8",
         "DlgTxt" :"Catherin when will you stop blowing your own trumpet? Dad’s business is  facing losses. And you can’t be so happy go lucky kinda girl. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "1066",
         "ChrID": "8",
         "DlgTxt" :"Your string with Charles can help dad out of the loss. Please understand…. ",
         "ExpID" :"0,102",
         "DType" :""
         },
         {
         "DID" : "1067",
         "ChrID": "8",
         "DlgTxt" :"And we aren’t doing anything wrong. Both of you’re equally talented,  beautiful and compatible. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "1068",
         "ChrID": "8",
         "DlgTxt" :"Before that girl Roselle bags him, you need to act. ",
         "ExpID" :"0,103",
         "DType" :""
         },
         
         {
         "DID" : "1069",
         "ChrID": "3",
         "DlgTxt" :"Mom I can’t snatch him or anyone… I like Charles and I’m ready to marry  him.  ",
         "ExpID" :"104,0",
         "DType" :""
         },
         
         {
         "DID" : "1070",
         "ChrID": "3",
         "DlgTxt" :"But if he’s all time around Roselle than I can’t hold his collar and get him  behind me. ",
         "ExpID" :"105,0",
         "DType" :""
         },
         {
         "DID" : "1071",
         "ChrID": "8",
         "DlgTxt" :"Valentine is heading. And you should not lose this opportunity. Better propose him to be your Valentine.   ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"On the other hand…. Charles calls Roselle",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1072",
         "ChrID": "1",
         "DlgTxt" :" Hey babe….. ",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         {
         "DID" : "1073",
         "ChrID": "2",
         "DlgTxt" :" Hello Charles…. What’s up?",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "1074",
         "ChrID": "1",
         "DlgTxt" :"How are you placed today evening?",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "1075",
         "ChrID": "2",
         "DlgTxt" :"Nothing so happening is planned yet… ",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "1076",
         "ChrID": "1",
         "DlgTxt" :"Okay… So let’s catch up at 5 p.m. I wanna buy a gift for a special person. And that’s for my Valentine.  I need your help to buy something very beautiful and romantic…. Something which expresses my feeling for her.  ",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "1077",
         "ChrID": "2",
         "DlgTxt" :"May I know who’s that lucky girl……   ",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         {
         "DID" : "1078",
         "ChrID": "1",
         "DlgTxt" :"That’s a surprise…. Just assume she’s very close to my heart. And I can’t live  without her. I just need your help to buy her a gift. ",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         {
         "DID" : "1079",
         "ChrID": "1",
         "DlgTxt" :"I’m thinking of buying a Swarovski crystal ring.   ",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         {
         "DID" : "1080",
         "ChrID": "1",
         "DlgTxt" :"And you’re going to select a ring for her. How’s the idea? ",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         
         {
         "DID" : "1081",
         "ChrID": "2",
         "DlgTxt" :"Hmmm…. Seems pretty cool… ",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         {
         "DID" : "1082",
         "ChrID": "2",
         "DlgTxt" :"Okay then let’s catch up… Where do I need to see you?  ",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         {
         "DID" : "1083",
         "ChrID": "1",
         "DlgTxt" :"Can you meet me at Luxury De Crystal? ",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         {
         "DID" : "1084",
         "ChrID": "1",
         "DlgTxt" :"The address is 72 Rue du Faubourg Saint-Honoré, 75008 Paris, France. ",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "1085",
         "ChrID": "2",
         "DlgTxt" :"Cool…. Done…. I’ll see you there in the evening. ",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "1086",
         "ChrID": "1",
         "DlgTxt" :"Okay… Bubbye….. ",
         "ExpID" :"204,101",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"After sometime Stephen Calling Roselle ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1087",
         "ChrID": "4",
         "DlgTxt" :"Hey gul…. Congrats… You’ve done it.",
         "ExpID" :"101,204",
         "DType" :""
         },
         
         {
         "DID" : "1088",
         "ChrID": "2",
         "DlgTxt" :"Thanks dude… But this is not the final victory. There’s lot more to win ahead",
         "ExpID" :"101,204",
         "DType" :""
         },
         
         {
         "DID" : "1089",
         "ChrID": "4",
         "DlgTxt" :"It’s party time gul…. Let’s party tonight? What say? ",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "1090",
         "ChrID": "2",
         "DlgTxt" :"Tonight, not possible. I’m with Charles today…... We’re going to buy a  Valentine gift today. We’ll make it some other day.  ",
         "ExpID" :"101,204",
         "DType" :""
         },
         
         {
         "DID" : "10901",
         "ChrID": "4",
         "DlgTxt" :"Oh that’s perfectly alright. See you then… Bubbye…",
         "ExpID" :"101,204",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"At the Shop ‘Luxury De Crystal’ ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "1091",
         "ChrID": "1",
         "DlgTxt" :"Hey babe… have you been waiting since long?  ",
         "ExpID" :"201,0",
         "DType" :""
         },
         {
         "DID" : "1092",
         "ChrID": "2",
         "DlgTxt" :"Nope. I just arrived a little while back.  ",
         "ExpID" :"0,104",
         "DType" :""
         },
         
         {
         "DID" : "1093",
         "ChrID": "1",
         "DlgTxt" :"Do you think we should go for ring or shall we buy a watch or some other  accessory? ",
         "ExpID" :"205,0",
         "DType" :""
         },
         
         {
         "DID" : "1094",
         "ChrID": "1",
         "DlgTxt" :"Actually, I don’t know what accessories generally girls like the most…  ",
         "ExpID" :"203,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1095",
         "ChrID": "2",
         "DlgTxt" :"Girls like almost all accessories but if you want to make a girl feel special about you then ring expresses your feeling the best.   ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1096",
         "ChrID": "1",
         "DlgTxt" :"Well…. That seems romantic…  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Sales person Enter",
         "ExpID" :"",
         "DType" :""
         },
         
         
         
         
         {
         "DID" : "1097",
         "ChrID": "1",
         "DlgTxt" :"Can you show me some beautiful rings that you have?  ",
         "ExpID" :"206,0,104",
         "DType" :""
         },
         
         {
         "DID" : "1098",
         "ChrID": "14",
         "DlgTxt" :"Sure sir… Would you like to go for stone studded or crystals?  ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1099",
         "ChrID": "1",
         "DlgTxt" :"I think crystals is a better option. Make sure you show me the most beautiful  rings…. It’s for my Valentine. ",
         "ExpID" :"205,0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1100",
         "ChrID": "14",
         "DlgTxt" :"Sir what’s the size of your ladylove? ",
         "ExpID" :"0,0,106",
         "DType" :""
         },
         
         
         {
         "DID" : "1101",
         "ChrID": "1",
         "DlgTxt" :"I’ve no idea. Actually, it just skipped from my mind to ask her size  number",
         "ExpID" :"202,0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1102",
         "ChrID": "1",
         "DlgTxt" :"Roselle… show your finger… It’s her size… you can assume her size.  ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         
         
         {
         "DID" : "1103",
         "ChrID": "2",
         "DlgTxt" :"Charles… how can she have exactly my size? How can you buy so blindly?  ",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1104",
         "ChrID": "2",
         "DlgTxt" :"It’s like shooting in dark.  ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "1105",
         "ChrID": "2",
         "DlgTxt" :"Will you tell me who’s that girl?  ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1106",
         "ChrID": "1",
         "DlgTxt" :"That’s the surprise. I’ll unveil her on the Valentine Day. And trust me she’s  your size of finger.  ",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1107",
         "ChrID": "1",
         "DlgTxt" :"She’s a replica of my imagined dream girl. She herself doesn’t know how  much I love her. I’m gonna propose her on the Valentine Day itself.  ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "1108",
         "ChrID": "2",
         "DlgTxt" :"How romantic! And what a co-incident! ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "1109",
         "ChrID": "2",
         "DlgTxt" :"Even Stephen has gotta a girl who he loves boundlessly and he’s also gonna  propose her on Valentine Day. ",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "1110",
         "ChrID": "2",
         "DlgTxt" :"I think this Valentine is lucky for heart stealers.",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "1111",
         "ChrID": "14",
         "DlgTxt" :"Sir these are some of the premium rings we have.  ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "1112",
         "ChrID": "1",
         "DlgTxt" :"Show me a few more. These don’t look expressive.  ",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         {
         "DID" : "1113",
         "ChrID": "14",
         "DlgTxt" :"Please check out these. I think these rings suits your requirement. ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         {
         "DID" : "1114",
         "ChrID": "1",
         "DlgTxt" :"Roselle… You’ve to select. All yours…  ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "1115",
         "ChrID": "2",
         "DlgTxt" :"Well I think this ring is very expressive. It has two hearts. Signifying the  symbol of love. What say?  ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"16_1115_1",
         "ExpID" :"",
         "DType" :"img"
         },
         {
         "DID" : "1116",
         "ChrID": "1",
         "DlgTxt" :"Yeah, it’s very defining and eye- glaring.  ",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1117",
         "ChrID": "14",
         "DlgTxt" :"Sir it’ll cost you very high…… around…… ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         {
         "DID" : "1118",
         "ChrID": "1",
         "DlgTxt" :"(Interrupts) whatever is the price… I don’t care. Please pack this…  ",
         "ExpID" :"205,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1119",
         "ChrID": "14",
         "DlgTxt" :"Sir… One ring is missing from the tray other than you selected. Can you  please return?  ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1120",
         "ChrID": "1",
         "DlgTxt" :"I think you’ve gotta some misunderstanding. I just had one which I returned  You to pack.  ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "1121",
         "ChrID": "14",
         "DlgTxt" :"Sorry to differ Sir… But Ma’am had it. She was trying in her finger.  ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1122",
         "ChrID": "2",
         "DlgTxt" :"I don’t have any ring. I’ve returned what I had.  ",
         "ExpID" :"0,103,0",
         "DType" :""
         },
         {
         "DID" : "1123",
         "ChrID": "14",
         "DlgTxt" :"No Ma’am you had it. Can you please check your purse? ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         {
         "DID" : "1124",
         "ChrID": "2",
         "DlgTxt" :"What do you mean?  ",
         "ExpID" :"0,102,0",
         "DType" :""
         },
         
         {
         "DID" : "1125",
         "ChrID": "1",
         "DlgTxt" :"(Frowned) Do you mean Roselle has stolen your ring? This is sheer insult.  (In a raised voice) Please call your manager. I need to talk to her right now….  Right away… ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Manager Enters (Charles narrates everything to the manager) ",
         "ExpID" :"",
         "DType" :""
         },
         
         
         
         {
         "DID" : "1127",
         "ChrID": "16",
         "DlgTxt" :"Sir, I do understand that you’re dignified people but if the ring is missing than  we’ve to follow the process. I’m helpless.",
         "ExpID" :"0,0,106,0",
         "DType" :""
         },
         {
         "DID" : "1128",
         "ChrID": "16",
         "DlgTxt" :"Let’s follow the process. Please co-operate.  ",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         
         {
         "DID" : "1129",
         "ChrID": "16",
         "DlgTxt" :"Watchman…. Shut the door and don’t let anyone go out of the shop.   ",
         "ExpID" :"206,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1130",
         "ChrID": "16",
         "DlgTxt" :"(Salesman), Check the bags of all our employees first and then each  and every customer present here.  ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1131",
         "ChrID": "14",
         "DlgTxt" :"Ma’am… Employees bags are checked. All the customers are also checked except  for Sir and Ma’am. The ring isn’t found. ",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         {
         "DID" : "1132",
         "ChrID": "16",
         "DlgTxt" :"Mr. Charles…. Shall we check you and Madam’s bag?  ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles allows to check. While checking Roselle’s Purse…...  ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1133",
         "ChrID": "14",
         "DlgTxt" :"Sir…. The ring is found. It was in Madam’s purse.   ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1134",
         "ChrID": "2",
         "DlgTxt" :"(Shocked) Oh shut up…. I didn’t take the ring. I don’t know how it was lying  in my purse. ",
         "ExpID" :"0,104,0,0",
         "DType" :""
         },
         {
         "DID" : "1135",
         "ChrID": "1",
         "DlgTxt" :"(Astonished) Roselle…. How could you?   ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "1136",
         "ChrID": "2",
         "DlgTxt" :"Charles please don’t take me wrong. I haven’t stolen the ring.  ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1137",
         "ChrID": "16",
         "DlgTxt" :"Miss. Roselle the truth is out. Don’t pretend to be innocent. salesman … Call the  cops.   ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1138",
         "ChrID": "1",
         "DlgTxt" :"Look Manager… we can settle this matter….  ",
         "ExpID" :"206,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1139",
         "ChrID": "16",
         "DlgTxt" :"Mr. Charles. You stay out of this. Let me follow our process.  ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "1140",
         "ChrID": "2",
         "DlgTxt" :"Charles believe me. I haven’t done this…. I swear…. Please save me. I don’t  wanna be imprisoned. Please help me. ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1141",
         "ChrID": "1",
         "DlgTxt" :"Roselle for god sake… Stop lying… The ring was found from your purse. ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Manager narrates the incident to the cop… The cops arrest Roselle",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "1142",
         "ChrID": "16",
         "DlgTxt" :"Mr. Charles…. Beautiful faces are often deceiving. Be careful. They often  strangle rich men.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1143",
         "ChrID": "1",
         "DlgTxt" :"(Thinking) How could Roselle steal a ring. Does she need money?",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "1144",
         "ChrID": "1",
         "DlgTxt" :"She could have asked me to lend her some bucks. My heart is missing beats.I don’t believe this.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1149",
         "ChrID": "1",
         "DlgTxt" :"(Thinking) Roselle… What have you done? Why did you steal that ring? ",
         "ExpID" :"206",
         "DType" :""
         },
         {
         "DID" : "1150",
         "ChrID": "1",
         "DlgTxt" :"Is that just you’re falling for money? Weren’t you ashamed to stride so mean? ",
         "ExpID" :"0",
         "DType" :""
         },
         {
         "DID" : "1151",
         "ChrID": "1",
         "DlgTxt" :"You’ve shattered me. I feel vacuum from within…...But all this was enough  for me. Now I hate you as much as I loved you before.  ",
         "ExpID" :"0",
         "DType" :""
         },
         
         {
         "DID" : "1152",
         "ChrID": "1",
         "DlgTxt" :"Before I turn my eyes from you forever, I need the answer why you strode to  stealth? I need to meet you.  ",
         "ExpID" :"206",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles at the Police station to meet Roselle.",
         "ExpID" :"0",
         "DType" :""
         },
         
         {
         "DID" : "1153",
         "ChrID": "2",
         "DlgTxt" :"I was awaiting you Charles… Please get me out of here. I feel breathless  here...  ",
         "ExpID" :"102,0",
         "DType" :""
         },
         {
         "DID" : "1154",
         "ChrID": "1",
         "DlgTxt" :"There’s no short-cut to money Roselle. ",
         "ExpID" :"0,206",
         "DType" :""
         },
         
         {
         "DID" : "1155",
         "ChrID": "2",
         "DlgTxt" :"(Astonished) What…. What did you say? Just come again….  ",
         "ExpID" :"103,0",
         "DType" :""
         },
         
         {
         "DID" : "1156",
         "ChrID": "2",
         "DlgTxt" :"Do you think I’ve stolen the ring for money?  ",
         "ExpID" :"104,0",
         "DType" :""
         },
         
         {
         "DID" : "1157",
         "ChrID": "1",
         "DlgTxt" :"For heaven sake Roselle…. Don’t pretend to be innocent…... ",
         "ExpID" :"0,203",
         "DType" :""
         },
         
         {
         "DID" : "1158",
         "ChrID": "2",
         "DlgTxt" :"I thought you’ve come here to bail me… to get me out of here…… ",
         "ExpID" :"104,0",
         "DType" :""
         },
         
         {
         "DID" : "1159",
         "ChrID": "2",
         "DlgTxt" :"In fact, I was very optimistic about you.  ",
         "ExpID" :"103,0",
         "DType" :""
         },
         {
         "DID" : "1160",
         "ChrID": "1",
         "DlgTxt" :"Roselle…... Don’t comfort me with the lie Hurt me with the truth…….    Just confess that you’ve stolen that ring…. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1161",
         "ChrID": "2",
         "DlgTxt" :"Oh, shut up Charles…. How could you not trust me?   ",
         "ExpID" :"105,0",
         "DType" :""
         },
         
         {
         "DID" : "1162",
         "ChrID": "1",
         "DlgTxt" :"I trusted you, but your words mean nothing because your actions spoke the  truth.   ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1163",
         "ChrID": "2",
         "DlgTxt" :"Doubt and distrust are the panic of timid imagination….   ",
         "ExpID" :"104,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1164",
         "ChrID": "2",
         "DlgTxt" :"When nails grow, we cut our nails; not fingers…. Similarly, when misunderstanding grows up, cut your ego, not your  relationship…...  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1165",
         "ChrID": "2",
         "DlgTxt" :"To tell you anything is all in vain…. Just do me a favor. Can you narrate about  this incident to Stephen and ask him to meet me. I’m sure he’ll help me.   ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1166",
         "ChrID": "1",
         "DlgTxt" :"Alright... I’ll inform him. Let’s see does he trust you or not…. I’ll call him and  inform.   ",
         "ExpID" :"0,203",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Calls Stephen. Hello Stephen Narrates the incident. ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1168",
         "ChrID": "4",
         "DlgTxt" :"(Flabbergasted)Roselle can never ever do this. It’s unbelievable.   ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         
         {
         "DID" : "1169",
         "ChrID": "4",
         "DlgTxt" :" I’ve some people who can help Roselle come out of this faulty allegation.   ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1170",
         "ChrID": "1",
         "DlgTxt" :"She has stolen the ring Stephen…. I was with her in the shop. The ring was  found from her purse. How could I not believe my eyes?   ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         
         {
         "DID" : "1171",
         "ChrID": "4",
         "DlgTxt" :"No Charles. The story is something else.  ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1172",
         "ChrID": "4",
         "DlgTxt" :"I’m sure someone’s trying to strangle her. Convey my message to Roselle that  I’ll get her out before Valentine Day. I’ll talk to you later. Bubbye…   ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1173",
         "ChrID": "1",
         "DlgTxt" :"(Thinking) My friends told me that Roselle is fake. Alex and Catherin  emphasized me on not getting along with Roselle. She was really behind my money ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1174",
         "ChrID": "1",
         "DlgTxt" :"I was a fool to not understand this. Some people aren’t loyal to you…...  They’re loyal to their need of you… once their needs change, so does their loyalty. Roselle is one of them….  ",
         "ExpID" :"0",
         "DType" :""
         },
         
         {
         "DID" : "1175",
         "ChrID": "1",
         "DlgTxt" :"Even when Mr. Nicholas Cowles (investor) refused to invest in her project,  she was highly disappointed.  ",
         "ExpID" :"0",
         "DType" :""
         },
         
         {
         "DID" : "1176",
         "ChrID": "1",
         "DlgTxt" :"I never predicted Roselle could fall so low for money  ",
         "ExpID" :"0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Next Day. Charles & Stephen goes to the jail to meet Roselle.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1177",
         "ChrID": "2",
         "DlgTxt" :"What a bad luck! Two days back I won the contest. I dreamed of  working on Hollywood projects.  ",
         "ExpID" :"0,0,103",
         "DType" :""
         },
         {
         "DID" : "1178",
         "ChrID": "2",
         "DlgTxt" :"I never thought I’ll be in jail….  ",
         "ExpID" :"0,0,102",
         "DType" :""
         },
         
         {
         "DID" : "1179",
         "ChrID": "4",
         "DlgTxt" :"Don’t worry Roselle…. I’m always there for you. We’ll find some way out. ",
         "ExpID" :"0,202,0",
         "DType" :""
         },
         
         {
         "DID" : "1180",
         "ChrID": "4",
         "DlgTxt" :"But you need to tell me the truth. ",
         "ExpID" :"0,206,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1181",
         "ChrID": "2",
         "DlgTxt" :"I’m not lying. I’m innocent. I haven’t stolen any ring. I really don’t know how  the ring came into my purse. ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         {
         "DID" : "1182",
         "ChrID": "4",
         "DlgTxt" :"Roselle, you need to relax… Don’t panic…. Tell me have you handed over  your purse to anyone while you were in the shop?    ",
         "ExpID" :"0,205,0",
         "DType" :""
         },
         
         {
         "DID" : "1183",
         "ChrID": "2",
         "DlgTxt" :"Nope. It was with me through out.",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         
         {
         "DID" : "1184",
         "ChrID": "2",
         "DlgTxt" :"I just left my purse unattended for a while as Charles asked me to try some  rings in my finger to check the size. ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1185",
         "ChrID": "4",
         "DlgTxt" :"There you are…... The mystery is soon going to be unlocked. ",
         "ExpID" :"0,206,0",
         "DType" :""
         },
         {
         "DID" : "1186",
         "ChrID": "1",
         "DlgTxt" :"What did you say? You left your purse unattended?",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         {
         "DID" : "1187",
         "ChrID": "2",
         "DlgTxt" :"Yes…. But I’m sure you won’t believe my words. You think I’ve greed for  money.",
         "ExpID" :"0,0,103",
         "DType" :""
         },
         
         {
         "DID" : "1188",
         "ChrID": "4",
         "DlgTxt" :"Look Charles… This is not the right time to argue. Roselle has no one except  us to help her in France at the moment. ",
         "ExpID" :"0,203,0",
         "DType" :""
         },
         {
         "DID" : "1189",
         "ChrID": "4",
         "DlgTxt" :"Roselle, do you want to inform your parents in Rome? ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1190",
         "ChrID": "2",
         "DlgTxt" :"No… Not at this moment. My dad has undergone an operation recently while  the time we’d fashion show. He hasn’t yet recovered completely. ",
         "ExpID" :"0,0,102",
         "DType" :""
         },
         
         {
         "DID" : "1191",
         "ChrID": "2",
         "DlgTxt" :"Knowing that I’ve landed into this problem… his health will even more  deteriorate. ",
         "ExpID" :"0,0,103",
         "DType" :""
         },
         
         {
         "DID" : "1192",
         "ChrID": "1",
         "DlgTxt" :"Somewhere now I believe you Roselle. Stephen & I will try our best to unveil  the mystery ",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1193",
         "ChrID": "2",
         "DlgTxt" :"Thanks Charles for trusting me. ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         
         {
         "DID" : "1194",
         "ChrID": "4",
         "DlgTxt" :"We’ll not just try to unveil the mystery. We’ll bring the right culprit to your  knees",
         "ExpID" :"0,203,0",
         "DType" :""
         },
         {
         "DID" : "1195",
         "ChrID": "2",
         "DlgTxt" :"I feel breathlessness here. My tough time is hovered like a dark cloud",
         "ExpID" :"0,0,103",
         "DType" :""
         },
         
         {
         "DID" : "1196",
         "ChrID": "2",
         "DlgTxt" :"But I thank God for having such good friends like you.",
         "ExpID" :"0,0,106",
         "DType" :""
         },
         
         {
         "DID" : "1197",
         "ChrID": "2",
         "DlgTxt" :"I’m sure you both will help me to embark my journey towards life and career  soon.",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         
         {
         "DID" : "1198",
         "ChrID": "4",
         "DlgTxt" :"Charles… Who do you think can strangle Roselle to such a bad drape? ",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "1199",
         "ChrID": "4",
         "DlgTxt" :"Honestly speaking…. I’ve no idea. Roselle doesn’t know much people except  the college friends here in France as most of her friends and other associates  are in Rome.",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "1200",
         "ChrID": "1",
         "DlgTxt" :"But somewhere I’ve a grain of doubt on Alex.  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "1201",
         "ChrID": "4",
         "DlgTxt" :"Are you crazy? Alex? Why would he strangle Roselle?",
         "ExpID" :"0,202",
         "DType" :""
         },
         {
         "DID" : "1202",
         "ChrID": "1",
         "DlgTxt" :"He’s a prank player…. A spoiled brat….  ",
         "ExpID" :"206,0",
         "DType" :""
         },
         
         {
         "DID" : "1203",
         "ChrID": "4",
         "DlgTxt" :"We all know that his pranks are really dangerous. But this is like playing with  Roselle’s career.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1204",
         "ChrID": "4",
         "DlgTxt" :"Any individual having criminal record will not be hired for job by good companies. ",
         "ExpID" :"0,203",
         "DType" :""
         },
         
         {
         "DID" : "1205",
         "ChrID": "4",
         "DlgTxt" :"Alex can’t prank someone’s life or ruin the career.  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1206",
         "ChrID": "1",
         "DlgTxt" :"He has already attempted ruining Roselle’s career right before the day of  Fashion Show. ",
         "ExpID" :"205,0",
         "DType" :""
         },
         
         {
         "DID" : "1207",
         "ChrID": "4",
         "DlgTxt" :"(Devastated) I’m so amazed to acknowledge that. What did he do?",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1208",
         "ChrID": "1",
         "DlgTxt" :"He was going to distort Roselle’s costume. He was about to sprinkle an acidic  fluid on Roselle’s dress. But I reached at the right time.  ",
         "ExpID" :"203,0",
         "DType" :""
         },
         
         {
         "DID" : "1209",
         "ChrID": "4",
         "DlgTxt" :"But we were allotted locker and no one had an access to our lockers except  us. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         
         
         {
         "DID" : "1210",
         "ChrID": "1",
         "DlgTxt" :"He bribed the guard and was successful to get the duplicate key of Roselle’s  locker from him",
         "ExpID" :"205,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1211",
         "ChrID": "4",
         "DlgTxt" :"He planned very smartly to access Roselle’s locker. I’ve noticed that from the  beginning of the year, Alex disliked Roselle ",
         "ExpID" :"0,206",
         "DType" :""
         },
         
         
         {
         "DID" : "1212",
         "ChrID": "4",
         "DlgTxt" :"But never ever thought he can revenge her so mean.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1213",
         "ChrID": "1",
         "DlgTxt" :"It was really a shameful act. Whatever begins in anger, ends in shame…. ",
         "ExpID" :"206,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1214",
         "ChrID": "4",
         "DlgTxt" :"Than what’re we waiting for? Let’s go to Alex and enquire about this…  ",
         "ExpID" :"0,203",
         "DType" :""
         },
         
         {
         "DID" : "1215",
         "ChrID": "1",
         "DlgTxt" :"As if he’s gonna reveal the truth to us. If he reveals truth than he’d land in a  big legal problem.  ",
         "ExpID" :"206,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1216",
         "ChrID": "1",
         "DlgTxt" :"He could be even jailed in attempt to strangle a conspiracy against Roselle.  ",
         "ExpID" :"205,0",
         "DType" :""
         },
         
         
         
         {
         "DID" : "1217",
         "ChrID": "4",
         "DlgTxt" :"I think we need to spread a net for him. Let’s try to intrigue him.  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1218",
         "ChrID": "1",
         "DlgTxt" :"Alex is very shrewd. He’ll not fall in our intrigues. Let’s get his call records  checked. Probably we can find some clues.  ",
         "ExpID" :"203,0",
         "DType" :""
         },
         
         {
         "DID" : "1219",
         "ChrID": "4",
         "DlgTxt" :"But how can we get his call record? It’s a personal document. We aren’t  permissible to have access to his call records. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1220",
         "ChrID": "1",
         "DlgTxt" :"You leave it to me dude. I’ll get it done. Catherin’s parents know a spy who  works for spy agencies",
         "ExpID" :"203,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1221",
         "ChrID": "1",
         "DlgTxt" :"He’s job is to assimilate information from various places and forward them  to the higher authorities. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1222",
         "ChrID": "4",
         "DlgTxt" :"That’s a brilliant idea! You better call Catherin and enquire to reach Alex’ call  record ",
         "ExpID" :"0,203",
         "DType" :""
         },
         
         {
         "DID" : "1223",
         "ChrID": "1",
         "DlgTxt" :"We’ve no time to waste. Let me call directly to her dad.  ",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Calls Mr. Herbert",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1223",
         "ChrID": "1",
         "DlgTxt" :"Hello Mr. Herbert…...   ",
         "ExpID" :"204,204",
         "DType" :""
         },
         {
         "DID" : "1224",
         "ChrID": "1",
         "DlgTxt" :"Hello Mr. Herbert…...   ",
         "ExpID" :"204,204",
         "DType" :""
         },
         {
         "DID" : "1225",
         "ChrID": "25",
         "DlgTxt" :"Hello Charles…. How’re you doing?    ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1226",
         "ChrID": "1",
         "DlgTxt" :"Mr. Herbert, I need a favor from you   ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1227",
         "ChrID": "25",
         "DlgTxt" :"Of course…. Anything for you… But you sound worried…... Everything okay?  ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1228",
         "ChrID": "1",
         "DlgTxt" :"Yeah… all cool… I just need a phone call record of one of my friends.  ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         
         {
         "DID" : "1229",
         "ChrID": "1",
         "DlgTxt" :"Remember once you helped my dad to retrieve the call history of one of the  employees in his office who leaked all confidential information to a rival  company?    ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         
         {
         "DID" : "1230",
         "ChrID": "25",
         "DlgTxt" :"Yes of course I do. Are you talking about Day Jonathan… that spy?    ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1231",
         "ChrID": "1",
         "DlgTxt" :"Exactly…..   ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1232",
         "ChrID": "25",
         "DlgTxt" :"But that’s against law. You can’t secretly retrieve anyone’s call history unless  a valid reason.    ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1233",
         "ChrID": "1",
         "DlgTxt" :"Mr. Herbert… Do you think I’d misuse the information? Trust me…  It’s the question of someone’s life and career. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1234",
         "ChrID": "1",
         "DlgTxt" :"Please give me Jonathan’s handheld number and request him to help me.   ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1235",
         "ChrID": "25",
         "DlgTxt" :"Alright…. I’m not in Paris at the moment and his contact number is in  Private and Confidential another handheld which I’m not carrying with me. It’s at home.   ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1236",
         "ChrID": "25",
         "DlgTxt" :"Catherin can help you with the number.  ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1237",
         "ChrID": "1",
         "DlgTxt" :"Sure. I’ll call her and ask her to text me his number  ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1238",
         "ChrID": "1",
         "DlgTxt" :"Thanks a lot. I’ll talk to you later…. I’m in a hurry.  ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles calling Catherin.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1239",
         "ChrID": "3",
         "DlgTxt" :"Hey Charles… What’s up?",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         
         {
         "DID" : "1240",
         "ChrID": "1",
         "DlgTxt" :"Catherin... I’m in a hurry. Can you please text me Mr. Johnathan’s  number from your dad’s handheld?  ",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         {
         "DID" : "1241",
         "ChrID": "1",
         "DlgTxt" :"I just had a word with him.  ",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         
         
         {
         "DID" : "1242",
         "ChrID": "3",
         "DlgTxt" :"Yeah sure. You sound worried… Are you in any problem?  ",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         
         
         
         {
         "DID" : "1243",
         "ChrID": "1",
         "DlgTxt" :"Yes, a huge one…. But right now, I’m in a rush to discuss with you on  anything.   ",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         
         {
         "DID" : "1244",
         "ChrID": "1",
         "DlgTxt" :"Only you can help me rise out of this by giving me Johnathan’s number.  ",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         
         {
         "DID" : "1245",
         "ChrID": "3",
         "DlgTxt" :"Sure Charles… Worry not… I’ll text you his number. Give me 5 minutes.   ",
         "ExpID" :"204,101",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Catherin:(Thinking) Charles is involving me in all his major problems. I think he loves  me. In fact, he always loved me.The problem named Roselle seems out of my life forever.  ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Catherin texts Mr. Johnathan’s number to Charles. ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles:(Receiving Johnathan’s number speaks to himself)  Alex…... Now begins the investigation…...",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Next day.",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "1249",
         "ChrID": "1",
         "DlgTxt" :"(Calling Mr. Johnathan) Hello Mr. Johnathan… Charles here",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1250",
         "ChrID": "18",
         "DlgTxt" :" Yeah Charles… Mr. Herbert familiarized your reference to me",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1251",
         "ChrID": "1",
         "DlgTxt" :"Can you please make it to retrieve a call history? ",
         "ExpID" :"204,204",
         "DType" :""
         },
         {
         "DID" : "1252",
         "ChrID": "18",
         "DlgTxt" :"Yeah sure… You need to text me the information like Name, contact no and the city he lives in.",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1253",
         "ChrID": "1",
         "DlgTxt" :"Sure…. I’ll text all these information...  How long will it take to send me this  information?  ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1254",
         "ChrID": "18",
         "DlgTxt" :"May be within two days or so. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1255",
         "ChrID": "1",
         "DlgTxt" :"Please make it as early as possible. It’s very crucial. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1256",
         "ChrID": "18",
         "DlgTxt" :"I’ll try my best. To retrieve the call history of someone without  his consent is a tough task. It’s against law.  ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         
         {
         "DID" : "1257",
         "ChrID": "18",
         "DlgTxt" :"I’m secretly gonna retrieve the information. And again, like you know,  I don’t work for individuals like you. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         {
         "DID" : "1258",
         "ChrID": "18",
         "DlgTxt" :"I work for CID or some government bodies who are responsible  to maintain the peace and harmony of the country. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         
         {
         "DID" : "1259",
         "ChrID": "18",
         "DlgTxt" :"Retrieving information of someone randomly without the orders from  my higher authorities may land me in big problem. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1260",
         "ChrID": "17",
         "DlgTxt" :"Mr. Herbert gave me your reference…. Therefore, I thought to  help you",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1261",
         "ChrID": "1",
         "DlgTxt" :"I’ve no words to express gratitude",
         "ExpID" :"204,204",
         "DType" :""
         },
         {
         "DID" : "1262",
         "ChrID": "18",
         "DlgTxt" :"Alright see you…...  Waiting for your text. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles texts him (Mr. Johnathan) the information.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1263",
         "ChrID": "4",
         "DlgTxt" :"Why did you not come to the college today? Everyone there was searching  for you to congratulate.  ",
         "ExpID" :"0,202",
         "DType" :""
         },
         
         {
         "DID" : "1264",
         "ChrID": "4",
         "DlgTxt" :"They wanted to congratulate you out there.  I thought even we’ll discuss some  plans to release Roselle. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1265",
         "ChrID": "1",
         "DlgTxt" :"Well…. I wanted to attend the college, but I’m so dismayed that I couldn’t  make it up. I’ve hurt Roselle by not trusting her.  ",
         "ExpID" :"206,0",
         "DType" :""
         },
         {
         "DID" : "1266",
         "ChrID": "1",
         "DlgTxt" :"I wish I could go back in past and unsay that. ",
         "ExpID" :"203,0",
         "DType" :""
         },
         
         {
         "DID" : "1267",
         "ChrID": "4",
         "DlgTxt" :"Yeah, she’s hurt. She didn’t expect this from you.  ",
         "ExpID" :"0,206",
         "DType" :""
         },
         
         {
         "DID" : "1268",
         "ChrID": "4",
         "DlgTxt" :"I would suggest let bygones be bygones….  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1269",
         "ChrID": "1",
         "DlgTxt" :"Well…... You were saying something about college.    ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1270",
         "ChrID": "4",
         "DlgTxt" :"Yeah…... I saw Alex in the cafeteria today. I overheard him talking over a  phone about a huge amount of money to be paid to someone.    ",
         "ExpID" :"0,202",
         "DType" :""
         },
         
         {
         "DID" : "1271",
         "ChrID": "4",
         "DlgTxt" :"I’m sure he offered ransom.    ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "1272",
         "ChrID": "1",
         "DlgTxt" :"(Devastated) What are you saying? Are you sure you heard that?    ",
         "ExpID" :"203,0",
         "DType" :""
         },
         
         {
         "DID" : "1273",
         "ChrID": "4",
         "DlgTxt" :"Damn sure.   ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1274",
         "ChrID": "1",
         "DlgTxt" :"When is he gonna pay the ransom? Any idea?    ",
         "ExpID" :"205,0",
         "DType" :""
         },
         
         {
         "DID" : "1275",
         "ChrID": "4",
         "DlgTxt" :"Yeah, I heard he’s meeting him tomorrow after the college.    ",
         "ExpID" :"0,202",
         "DType" :""
         },
         
         {
         "DID" : "1276",
         "ChrID": "1",
         "DlgTxt" :"Great…. Now no one can help Alex get rid of me. I’ll catch hold of him red  handed   ",
         "ExpID" :"206,0",
         "DType" :""
         },
         
         {
         "DID" : "1277",
         "ChrID": "4",
         "DlgTxt" :"Wait…... Let’s not be haste.    ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1278",
         "ChrID": "1",
         "DlgTxt" :"Cops are taking Roselle on an interrogative remand   ",
         "ExpID" :"202,0",
         "DType" :""
         },
         
         {
         "DID" : "1279",
         "ChrID": "1",
         "DlgTxt" :"I don’t know what do I do. I’m worried about Roselle….   ",
         "ExpID" :"202,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1280",
         "ChrID": "1",
         "DlgTxt" :"Today I realized that a day of worry is more exhausting than a week of work.   ",
         "ExpID" :"203,0",
         "DType" :""
         },
         {
         "DID" : "1281",
         "ChrID": "4",
         "DlgTxt" :" Worry is like sitting in a rocking chair. It gives you something to do but it  doesn’t get you anywhere.    ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1282",
         "ChrID": "1",
         "DlgTxt" :"Yeah, I understand…. Living in a worry invites trouble in a hurry….    ",
         "ExpID" :"206,0",
         "DType" :""
         },
         
         {
         "DID" : "1283",
         "ChrID": "4",
         "DlgTxt" :"I think tomorrow we should follow that man who is gonna receive money  from Alex ",
         "ExpID" :"0,206",
         "DType" :""
         },
         
         {
         "DID" : "1284",
         "ChrID": "4",
         "DlgTxt" :"Probably he can unveil the mystery.    ",
         "ExpID" :"0,202",
         "DType" :""
         },
         
         {
         "DID" : "1285",
         "ChrID": "1",
         "DlgTxt" :"Are you crazy? Imagine what if Alex catches an eye on us?   ",
         "ExpID" :"205,0",
         "DType" :""
         },
         
         {
         "DID" : "1286",
         "ChrID": "1",
         "DlgTxt" :"He’ll immediately change his plan and we’d never be able to catch hold of  that man who Alex is gonna pay the ransom.",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "1287",
         "ChrID": "4",
         "DlgTxt" :"We’ve to risk it. Do you have any other plan to spread a net for Alex?    ",
         "ExpID" :"0,205",
         "DType" :""
         },
         
         {
         "DID" : "1288",
         "ChrID": "1",
         "DlgTxt" :"Yep… I know a man who is an informer. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1289",
         "ChrID": "1",
         "DlgTxt" :"He’ll chase Alex and also chase that man who’s gonna receive money from Alex   ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1290",
         "ChrID": "1",
         "DlgTxt" :"Alex is just a medium…... kinda soft target. The real target is that man.    ",
         "ExpID" :"206,0",
         "DType" :""
         },
         
         {
         "DID" : "1291",
         "ChrID": "1",
         "DlgTxt" :"We can retrieve the right information from him which will play a vital role to  release Roselle.    ",
         "ExpID" :"202,0",
         "DType" :""
         },
         
         {
         "DID" : "1292",
         "ChrID": "4",
         "DlgTxt" :"Yeah, but the game player is Alex… What have we gotta do with that man?    ",
         "ExpID" :"0,206",
         "DType" :""
         },
         
         {
         "DID" : "1293",
         "ChrID": "4",
         "DlgTxt" :"He’s a stranger. He doesn’t know Roselle.    ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1294",
         "ChrID": "1",
         "DlgTxt" :"Would Alex confess that he’s played a scandal with Roselle?    ",
         "ExpID" :"205,0",
         "DType" :""
         },
         
         {
         "DID" : "1295",
         "ChrID": "4",
         "DlgTxt" :"Never ever….   ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1296",
         "ChrID": "1",
         "DlgTxt" :"Than how we’ll be successful to release Roselle. The law needs evidences and  witnesses.    ",
         "ExpID" :"206,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1297",
         "ChrID": "1",
         "DlgTxt" :"Till the time we’ve not been able to gather a single evidence or a witness who  can prove Roselle innocent, we’d not let Alex know that we’re investigating  the case.  ",
         "ExpID" :"205,0",
         "DType" :""
         },
         
         {
         "DID" : "1298",
         "ChrID": "4",
         "DlgTxt" :"Do you mean that stranger could be our witness?    ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1299",
         "ChrID": "1",
         "DlgTxt" :"Exactly…...  My informer will chase him till his house. ",
         "ExpID" :"203,0",
         "DType" :""
         },
         
         {
         "DID" : "1300",
         "ChrID": "1",
         "DlgTxt" :"The moment he’s (Stranger) alone, my informer will hold him and threaten,  bribe or do whatever is needed to get all the information",
         "ExpID" :"202,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1301",
         "ChrID": "1",
         "DlgTxt" :"He’ll also record his confession.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1302",
         "ChrID": "1",
         "DlgTxt" :"In this confession, he’ll utter the name of a person who offered him a bribe.  That man is none other than Alex. ",
         "ExpID" :"205,0",
         "DType" :""
         },
         
         {
         "DID" : "1303",
         "ChrID": "1",
         "DlgTxt" :"This is how we need to collect a proof against Alex which proves Roselle  innocent",
         "ExpID" :"206,0",
         "DType" :""
         },
         
         {
         "DID" : "1304",
         "ChrID": "1",
         "DlgTxt" :"Later part will be looked after by the cops.",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1305",
         "ChrID": "4",
         "DlgTxt" :"The plan sounds highly intellectual. Let’s not waste time and implement this  asap. ",
         "ExpID" :"0,203",
         "DType" :""
         },
         
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"20_1305_1",
         "ExpID" :"",
         "DType" :"img"
         },
         
         {
         "DID" : "1306",
         "ChrID": "1",
         "DlgTxt" :"Oh, there’s an email pop-up. Let me check if any important mail…. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1307",
         "ChrID": "1",
         "DlgTxt" :"It’s from Mr. Johnathan…. Thank God.  ",
         "ExpID" :"206,0",
         "DType" :""
         },
         
         {
         "DID" : "1308",
         "ChrID": "1",
         "DlgTxt" :"I’m sure the attachment consists of the call history of Alex.  ",
         "ExpID" :"202,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1309",
         "ChrID": "4",
         "DlgTxt" :"That’s amazing. I really appreciate his prompt reply.  ",
         "ExpID" :"0,206",
         "DType" :""
         },
         
         
         {
         "DID" : "1310",
         "ChrID": "4",
         "DlgTxt" :"We seem to be moving closer to our destination. Let’s go through the  attachment",
         "ExpID" :"0,205",
         "DType" :""
         },
         
         {
         "DID" : "1311",
         "ChrID": "1",
         "DlgTxt" :"(Glancing the print out of the call history) They’re all familiar numbers. ",
         "ExpID" :"202,0",
         "DType" :""
         },
         
         {
         "DID" : "1312",
         "ChrID": "1",
         "DlgTxt" :"Most of all are our college guys. But here I could see there’s Catherin’s  number dialed frequently. ",
         "ExpID" :"205,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1313",
         "ChrID": "1",
         "DlgTxt" :"He’s a chain of call received from and dialed to Catherin.….  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1314",
         "ChrID": "4",
         "DlgTxt" :"Catherin doesn’t get along much with Alex…. Especially on calls…. ",
         "ExpID" :"0,202",
         "DType" :""
         },
         
         
         {
         "DID" : "1315",
         "ChrID": "1",
         "DlgTxt" :"Chuck off her for now…. This is a list of number which are unfamiliar. We  need to check them on a Caller Identity Software. ",
         "ExpID" :"205,0",
         "DType" :""
         },
         
         {
         "DID" : "1316",
         "ChrID": "4",
         "DlgTxt" :"Mail me this list. I’ll do this tonight. We’ve only 1 hour left to go off.  ",
         "ExpID" :"0,202",
         "DType" :""
         },
         
         {
         "DID" : "1317",
         "ChrID": "4",
         "DlgTxt" :"Alex might leave anytime to pay the ransom.  ",
         "ExpID" :"0,206",
         "DType" :""
         },
         
         {
         "DID" : "1318",
         "ChrID": "1",
         "DlgTxt" :"I’ve already called up my informer and also sent all the necessary information  along with Alex’ pic so that he could chase that stranger easily.  ",
         "ExpID" :"205,0",
         "DType" :""
         },
         
         {
         "DID" : "1319",
         "ChrID": "1",
         "DlgTxt" :"We just need to wait for the recording.  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1320",
         "ChrID": "1",
         "DlgTxt" :"Once we’ve the recording with us, we can present it to the cops as an evidence  and release Roselle from that hell like place. ",
         "ExpID" :"205,0",
         "DType" :""
         },
         
         {
         "DID" : "1321",
         "ChrID": "4",
         "DlgTxt" :"Meanwhile, I was planning to go to that shop from where you bought the  ring. ",
         "ExpID" :"0,206",
         "DType" :""
         },
         
         
         
         {
         "DID" : "1322",
         "ChrID": "4",
         "DlgTxt" :"Probably we could find some concrete evidence from there. What say? ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1323",
         "ChrID": "1",
         "DlgTxt" :"You’re right. Let’s leave for shop. We’ll do the general enquiries and I’ll  request for the footage of that day to the manager. ",
         "ExpID" :"206,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1324",
         "ChrID": "1",
         "DlgTxt" :"Footage will pave us a road to the evidence. ",
         "ExpID" :"203,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Upon reaching at the shop.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Sales man Says...Hello Sir… How can I help you?  ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles Says...Can I talk to your manager Please?   ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Sales man Says..Sure sir. I’ll call him here.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Manager Enters",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1328",
         "ChrID": "16",
         "DlgTxt" :"Are you the one who came to buy a Swarovski crystal ring a week before?   ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         
         {
         "DID" : "1329",
         "ChrID": "1",
         "DlgTxt" :"Yep…. Roselle and I were here last week. I’ve come to seek your help.   ",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1330",
         "ChrID": "16",
         "DlgTxt" :" Yea sure …. What can I do for You?   ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         
         
         {
         "DID" : "1331",
         "ChrID": "1",
         "DlgTxt" :"That day while Roselle was trying different rings to check the size, she left her  purse unattended for some time.  ",
         "ExpID" :"202,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1332",
         "ChrID": "1",
         "DlgTxt" :"I’m sure this fiddle took place during that span of time.   ",
         "ExpID" :"203,0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1333",
         "ChrID": "16",
         "DlgTxt" :"What do you mean Mr. Charles?",
         "ExpID" :"0,0,103",
         "DType" :""
         },
         
         
         
         {
         "DID" : "1334",
         "ChrID": "1",
         "DlgTxt" :"What I mean is crystal clear? It’s a pure swindle. ",
         "ExpID" :"203,0,0",
         "DType" :""
         },
         
         
         
         {
         "DID" : "1335",
         "ChrID": "16",
         "DlgTxt" :"This is a mere allegation. Don’t try to play with our goodwill Mr. Charles… ",
         "ExpID" :"0,0,102",
         "DType" :""
         },
         
         
         
         {
         "DID" : "1336",
         "ChrID": "16",
         "DlgTxt" :"We’re one of the most famous shops recognized for the authenticity of all the  products we sell.",
         "ExpID" :"0,0,106",
         "DType" :""
         },
         
         {
         "DID" : "1337",
         "ChrID": "1",
         "DlgTxt" :"My friend is in jail… And you’re responsible for that.   ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1338",
         "ChrID": "4",
         "DlgTxt" :"Relax Charles…... Calm down. It’s no point expressing anger. Let’s do our  work and get going… ",
         "ExpID" :"0,205,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1339",
         "ChrID": "16",
         "DlgTxt" :" Please pacify your friend Mr. Stephen. He’s lost his senses I guess…   ",
         "ExpID" :"0,0,106",
         "DType" :""
         },
         
         
         
         {
         "DID" : "1340",
         "ChrID": "4",
         "DlgTxt" :"Can you give us the footage of 1st February? We just wanna check how has  the purse been intrigued while it was unattended  ",
         "ExpID" :"0,205,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"After sometime. Checks the records.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1341",
         "ChrID": "16",
         "DlgTxt" :"We’re extremely sorry Mr. Charles.  That day the camera support wasn’t working.   ",
         "ExpID" :"0,0,105",
         "DType" :""
         },
         
         
         {
         "DID" : "1342",
         "ChrID": "16",
         "DlgTxt" :"Believe me…. I really want to help you. But unfortunately, there was some  technical fault.   ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         
         
         {
         "DID" : "1343",
         "ChrID": "4",
         "DlgTxt" :"It’s an unfortunate day. I think Roselle is an unfortunate girl. She brought bad  luck with her. ",
         "ExpID" :"0,206,0",
         "DType" :""
         },
         
         {
         "DID" : "1344",
         "ChrID": "1",
         "DlgTxt" :"Roselle doesn’t own bad luck…. Bad luck follows a man who believes in  Superstitions.   ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1345",
         "ChrID": "4",
         "DlgTxt" :"This footage was very important for us. I think we’ve defeated",
         "ExpID" :"0,205,0",
         "DType" :""
         },
         
         
         
         {
         "DID" : "1346",
         "ChrID": "1",
         "DlgTxt" :"A man defeats when he believes his defeat from his heart.   ",
         "ExpID" :"203,0,0",
         "DType" :""
         },
         
         
         
         {
         "DID" : "1347",
         "ChrID": "1",
         "DlgTxt" :"He who fears being conquered is sure of defeat…...   ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         
         
         
         {
         "DID" : "1348",
         "ChrID": "4",
         "DlgTxt" :"Do you remember which salesperson attended you? ",
         "ExpID" :"0,206,0",
         "DType" :""
         },
         
         {
         "DID" : "1349",
         "ChrID": "1",
         "DlgTxt" :"Yeah…. I can identify him… That’s a good idea",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1350",
         "ChrID": "16",
         "DlgTxt" :"Sir, can you point out her. We can enquire her about the incident. ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"After seeing all the sales person.",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1351",
         "ChrID": "1",
         "DlgTxt" :"How’s this possible! I’m so amazed. That salesprson isn’t present here. ",
         "ExpID" :"202,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1352",
         "ChrID": "1",
         "DlgTxt" :"Is there anyone on leave today? ",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1353",
         "ChrID": "16",
         "DlgTxt" :"Nope. But one salesgirl has resigned the job. She was fair,and tall girl ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1354",
         "ChrID": "1",
         "DlgTxt" :"Yes… exactly she was as you described.",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1355",
         "ChrID": "16",
         "DlgTxt" :"Mr. Charles…unfortunately she has resigned the next day itself of this  incident. ",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1356",
         "ChrID": "1",
         "DlgTxt" :"What a coincident! I’m sure of this girl having involved in this mystery.  ",
         "ExpID" :"203,0,0",
         "DType" :""
         },
         
         
         {
         "DID" : "1357",
         "ChrID": "1",
         "DlgTxt" :"How can she leave right after this incident? ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1358",
         "ChrID": "16",
         "DlgTxt" :"She was a Pilipino. I can retrieve the information from our employee records. ",
         "ExpID" :"0,0,106",
         "DType" :""
         },
         
         {
         "DID" : "1359",
         "ChrID": "1",
         "DlgTxt" :"Awesome. Please give me her address also. ",
         "ExpID" :"206,0,0",
         "DType" :""
         },
         {
         "DID" : "1360",
         "ChrID": "16",
         "DlgTxt" :"Sure. I’ll provide you all the information. ",
         "ExpID" :"0,0,104",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Manager texts Charles all the information along with the photograph. (Charles & Stephen leaves for home)",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "1361",
         "ChrID": "1",
         "DlgTxt" :"Can you please work out on the call history of Alex tonight with the help of  the Caller Identity Software without fail?  ",
         "ExpID" :"202,0",
         "DType" :""
         },
         {
         "DID" : "1362",
         "ChrID": "4",
         "DlgTxt" :"Can you please work out on the call history of Alex tonight with the help of  the Caller Identity Software without fail?  ",
         "ExpID" :"0,206",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Stephen works on the call history of Alex but doesn’t find any suspicious call",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles:(Calls Informer)",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1363",
         "ChrID": "1",
         "DlgTxt" :"Hello dude… Any luck on information? ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1364",
         "ChrID": "18",
         "DlgTxt" :"Yep… we’ve done it.  ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1365",
         "ChrID": "1",
         "DlgTxt" :"Amazing. I knew it that you’ll do this for me. You’re an ace  ",
         "ExpID" :"204,204",
         "DType" :""
         },
         {
         "DID" : "1366",
         "ChrID": "1",
         "DlgTxt" :"I’ll wire transfer your payment. Is that okay? ",
         "ExpID" :"204,204",
         "DType" :""
         },
         {
         "DID" : "1367",
         "ChrID": "18",
         "DlgTxt" :"Absolutely fine…. Once I receive money, I’ll share that video recording to  you ",
         "ExpID" :"204,204",
         "DType" :""
         },
         {
         "DID" : "1368",
         "ChrID": "1",
         "DlgTxt" :"Sure… I’ll do it right away. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Confession Video: (Charles receives the video recording of Alex which says)  ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"In Video - Man (Who receives money from Alex confesses to Charles’ informer)   ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"I’m extremely sorry for what I’ve done. I apologize whole heatedly.  ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Alex wanted to win the Fashion Show by hook or by crook ",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Having employed at the Costume designing Company, I’ve access to the big  shot designs prepared by the best designers. ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"I just have to copy one of the best designs and pass it to Alex. I was paid a  €50,000 for that.  ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles:(After watching the video).",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "1373",
         "ChrID": "1",
         "DlgTxt" :"Oh damn. Alex didn’t pay the ransom to strangle  Roselle. ",
         "ExpID" :"206",
         "DType" :""
         },
         
         {
         "DID" : "1374",
         "ChrID": "1",
         "DlgTxt" :"The conversation of Alex which Stephen heard wasn’t for Roselle. It  was a deal of payment for the stolen the design for the fashion show.  ",
         "ExpID" :"202",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles calls Stephen",
         "ExpID" :"",
         "DType" :""
         },
         {
         "DID" : "1375",
         "ChrID": "1",
         "DlgTxt" :"Everything tumbled down horribly. Alex has no involvement to strangle  Roselle.",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1376",
         "ChrID": "1",
         "DlgTxt" :"He ransomed that guy to steal the design from a Costume designing company. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         {
         "DID" : "1377",
         "ChrID": "1",
         "DlgTxt" :"He wanted to win the fashion show by hook or by crook.  Therefore, he  bribed this man. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1378",
         "ChrID": "4",
         "DlgTxt" :"Oh God! Not again! First the footage couldn’t get in our hand due to the  technical problem",
         "ExpID" :"204,204",
         "DType" :""
         },
         {
         "DID" : "1379",
         "ChrID": "4",
         "DlgTxt" :"Than the Salesman who attended you that day resigned the job and now our  suspicion on Alex proved to be wrong. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1380",
         "ChrID": "1",
         "DlgTxt" :"Every time I feel we’re close to the evidence… and we grab a rotten poster  turned mouse. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1381",
         "ChrID": "1",
         "DlgTxt" :"Will Roselle ever be out of the jail? ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1382",
         "ChrID": "1",
         "DlgTxt" :"Shall we never be able to find any concrete evidence in favor of Roselle? ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1383",
         "ChrID": "1",
         "DlgTxt" :"I’m shattered. I’ve no courage to face Roselle. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1384",
         "ChrID": "4",
         "DlgTxt" :"Relax Charles… You can’t give up. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1385",
         "ChrID": "1",
         "DlgTxt" :"I haven’t…. The phrase ‘give up’ doesn’t hail in the dictionary of Charles. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         
         {
         "DID" : "1386",
         "ChrID": "1",
         "DlgTxt" :"In fact, now I’m more passionate to know the right culprit",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1387",
         "ChrID": "1",
         "DlgTxt" :"Honor belongs to those who never forsake the truth, even when things seem  dark and grim… ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         
         {
         "DID" : "1388",
         "ChrID": "1",
         "DlgTxt" :"It’s a stain on Roselle’s honor and dignity. Nothing can stop me retain it back",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1389",
         "ChrID": "4",
         "DlgTxt" :"It so often appears that slander, dishonesty and unrighteousness prevail in  this world…... but the end is victory of good over evil. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1390",
         "ChrID": "4",
         "DlgTxt" :"Now what’s the next stride? ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1391",
         "ChrID": "1",
         "DlgTxt" :"Our next stride is that Salesman. Let’s check him out at his house. ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles & Stephen reaches at the Salesman’s house but it was locked ",
         "ExpID" :"",
         "DType" :""
         },
         
         
         
         
         {
         "DID" : "1392",
         "ChrID": "1",
         "DlgTxt" :"It seems that he’s fled. Damn it…. We’ve been late here.  ",
         "ExpID" :"0,206",
         "DType" :""
         },
         
         {
         "DID" : "1393",
         "ChrID": "4",
         "DlgTxt" :"Can we inform police about him? Probably police can help us find her. ",
         "ExpID" :"202,0",
         "DType" :""
         },
         
         {
         "DID" : "1394",
         "ChrID": "1",
         "DlgTxt" :"They won’t help us dude. According to them, Roselle is culprit who they’ve  arrested.  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         {
         "DID" : "1395",
         "ChrID": "4",
         "DlgTxt" :"We’re in a big dilemma….  ",
         "ExpID" :"206,0",
         "DType" :""
         },
         
         {
         "DID" : "1396",
         "ChrID": "1",
         "DlgTxt" :"I need to trace her number. No crime is perfect. I’m sure she’d have left some  trails.  ",
         "ExpID" :"0,205",
         "DType" :""
         },
         
         {
         "DID" : "1397",
         "ChrID": "1",
         "DlgTxt" :"She’s a Pilipino salesgirl… Can’t be brainy.  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1398",
         "ChrID": "1",
         "DlgTxt" :"I’ve her handheld number. My informer can trace her location. ",
         "ExpID" :"0,206",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles orders his informer to trace her location and text him. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"After sometime…. the informer texts Charles her location. ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles & Stephen reaches at the Salesgirl’s house but it was locked ",
         "ExpID" :"204,204",
         "DType" :""
         },
         
         {
         "DID" : "1399",
         "ChrID": "4",
         "DlgTxt" :"Heaven forbids! The location tracker shows she’s in a motel names Le Villiers ",
         "ExpID" :"203,0",
         "DType" :""
         },
         
         {
         "DID" : "1400",
         "ChrID": "1",
         "DlgTxt" :"Wait… Let me try google map to see where this motel is located. ",
         "ExpID" :"0,205",
         "DType" :""
         },
         
         {
         "DID" : "1401",
         "ChrID": "1",
         "DlgTxt" :"Oh freak! It shows near airport. I guess he plans to flee from Paris. We need  to rush.  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles & Stephen reaches at the Motel Le Villiers . (Charles & Stephen are successful in finding the Pilipino Salesman) ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1402",
         "ChrID": "1",
         "DlgTxt" :"Why have you plotted a conspiracy against my girlfriend?   ",
         "ExpID" :"0,204",
         "DType" :""
         },
         
         {
         "DID" : "1403",
         "ChrID": "1",
         "DlgTxt" :"Why’re you silent? Say something…...  Salesgirl ",
         "ExpID" :"0,202",
         "DType" :""
         },
         
         {
         
         
         
         "DID" : "1404",
         "ChrID": "14",
         "DlgTxt" :"Who’re you? What conspiracy are you talking about?  ",
         "ExpID" :"0,0,106",
         "DType" :""
         },
         
         {
         "DID" : "1405",
         "ChrID": "14",
         "DlgTxt" :"I didn’t get you… What’re you saying?  ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1406",
         "ChrID": "1",
         "DlgTxt" :"Oh, shut the damn up… Don’t try to pretend innocent.  ",
         "ExpID" :"0,203",
         "DType" :""
         },
         
         
         {
         "DID" : "1407",
         "ChrID": "1",
         "DlgTxt" :"We know everything about you from your manager. You left the job next day  itself after trapping Roselle.  ",
         "ExpID" :"0,202",
         "DType" :""
         },
         
         {
         "DID" : "1408",
         "ChrID": "1",
         "DlgTxt" :"Tell me the truth. What happened that day? Why did you trap us?  ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1409",
         "ChrID": "1",
         "DlgTxt" :"I’ll sue to forgery ",
         "ExpID" :"0,203",
         "DType" :""
         },
         
         {
         "DID" : "1410",
         "ChrID": "14",
         "DlgTxt" :"(Frightened) Please forgive me. I’ll narrate you everything. Don’t sue me.  ",
         "ExpID" :"0,0,103",
         "DType" :""
         },     
         
         {
         "DID" : "1411",
         "ChrID": "14",
         "DlgTxt" :"My family is in Philippines and I’ve to reach back safely.  ",
         "ExpID" :"0,0,0",
         "DType" :""
         }, 
         
         {
         "DID" : "1412",
         "ChrID": "1",
         "DlgTxt" :"You have family, and so has Roselle…...  ",
         "ExpID" :"0,206",
         "DType" :""
         },
         
         {
         "DID" : "1413",
         "ChrID": "14",
         "DlgTxt" :"I’d no ill intention for you or your girlfriend. I did it all on the instruction of  Ms. Catherin.  ",
         "ExpID" :"0,0,102",
         "DType" :""
         },
         
         {
         "DID" : "1414",
         "ChrID": "1",
         "DlgTxt" :"(Shocked) What? Catherin? I mean…. Is it her behind? Don’t you dare to  lie?  ",
         "ExpID" :"0,205",
         "DType" :""
         },
         
         {
         "DID" : "1415",
         "ChrID": "14",
         "DlgTxt" :"I’m not lying. She instructed me to put the most expensive ring in Roselle’s  purse.  ",
         "ExpID" :"0,0,102",
         "DType" :""
         },
         
         {
         "DID" : "1416",
         "ChrID": "1",
         "DlgTxt" :"But I never informed Catherin that I’m going to buy a ring from your shop.   ",
         "ExpID" :"0,205",
         "DType" :""
         },
         
         {
         "DID" : "1417",
         "ChrID": "14",
         "DlgTxt" :"She often visits our shop to buy the accessories.   ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1418",
         "ChrID": "14",
         "DlgTxt" :"That day coincidently Ms. Catherin also arrived for shopping while Roselle  was trying different rings. She saw both of you. She went to the top floor.   ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1419",
         "ChrID": "14",
         "DlgTxt" :"She sent me a message through one of my colleague to meet her secretly.   ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1420",
         "ChrID": "14",
         "DlgTxt" :"I went to meet her upstairs with the pretext to bring better designs of rings  for you.   ",
         "ExpID" :"0,0,105",
         "DType" :""
         },
         
         {
         "DID" : "1421",
         "ChrID": "14",
         "DlgTxt" :"She gave me the instructions and I followed it.  ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1422",
         "ChrID": "1",
         "DlgTxt" :"Didn’t you ever think of any consequences of this action?    ",
         "ExpID" :"0,205",
         "DType" :""
         },
         
         {
         "DID" : "1423",
         "ChrID": "14",
         "DlgTxt" :"She offered me € 40,000. Poverty is the mother of crime…. ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1424",
         "ChrID": "1",
         "DlgTxt" :"Can you confess the same statement to the cops? You’ll not be sued to any  legal action.   ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1425",
         "ChrID": "14",
         "DlgTxt" :"Ms. Catherin will not spare me if I confess my crime.      ",
         "ExpID" :"0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1426",
         "ChrID": "1",
         "DlgTxt" :"You don’t worry about it. Your confession is already recorded in the spy  camera.    ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1427",
         "ChrID": "1",
         "DlgTxt" :"Stephen, show your spy camera fixed in your pen.    ",
         "ExpID" :"0,0",
         "DType" :""
         },
         
         {
         "DID" : "1428",
         "ChrID": "4",
         "DlgTxt" :"Charles… we need to present him to the cops. That’ll make the evidence  stronger to release Roselle.    ",
         "ExpID" :"0,0,102",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles & Stephen along with the Salesman reaches to the police station. ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "1",
         "DlgTxt" :"Sir… here is the real culprit and the video recording in the spy camera.   ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "1",
         "DlgTxt" :"(The cops interrogate the Salesman and watches the recording and releases  Roselle after being proved innocent) ",
         "ExpID" :"",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "1",
         "DlgTxt" :"(Calls Catherin and asks her to meet him urgently).      ",
         "ExpID" :"",
         "DType" :""
         },
         
         
         {
         "DID" : "1432",
         "ChrID": "3",
         "DlgTxt" :"Dude what happen? Why did you call me here to meet you so urgently? Any  problem?    ",
         "ExpID" :"105,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1433",
         "ChrID": "1",
         "DlgTxt" :"(With anger) Catherin how dare you trap Roselle?    ",
         "ExpID" :"0,203,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1434",
         "ChrID": "3",
         "DlgTxt" :"(Frightened) I didn’t…...   ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1435",
         "ChrID": "1",
         "DlgTxt" :"(Interrupts) For heaven sake…. Don’t lie… I wanna listen the truth from  you.    ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1436",
         "ChrID": "4",
         "DlgTxt" :"Catherin… The truth is unveiled. That salesperson has confessed everything.  Your murky truth is out.    ",
         "ExpID" :"205,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1437",
         "ChrID": "1",
         "DlgTxt" :"You’re such a talented drama queen who left no trail of evidence behind.    ",
         "ExpID" :"206,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1438",
         "ChrID": "1",
         "DlgTxt" :"Even you were successful to flee this salesman so our hands can never reach  the truth.    ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1439",
         "ChrID": "1",
         "DlgTxt" :"Stephen, we all must applaud her for Catherin’s talent.     ",
         "ExpID" :"0,203,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1440",
         "ChrID": "1",
         "DlgTxt" :"Will you tell me what’s the purpose behind to trap Roselle? I want to listen  from you.    ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1441",
         "ChrID": "3",
         "DlgTxt" :"I was like…. Initially she was overpowering me…. It was jealousy….    ",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         
         {
         "DID" : "1442",
         "ChrID": "3",
         "DlgTxt" :"I mean… I was overshadowed by her every time. Initially she snatched you…  my best friend forever…from me.    ",
         "ExpID" :"0,0,0,102",
         "DType" :""
         },
         
         {
         "DID" : "1443",
         "ChrID": "3",
         "DlgTxt" :"Later she defeated me in the Fashion Show…… I was dragged from first  place to the second.    ",
         "ExpID" :"0,0,0,103",
         "DType" :""
         },
         
         {
         "DID" : "1444",
         "ChrID": "3",
         "DlgTxt" :"I was second everywhere….  Right away from your bestie to fashion show…  to be known as best beauty in the college…. Everywhere….    ",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         
         {
         "DID" : "1445",
         "ChrID": "3",
         "DlgTxt" :"And later I found you and Stephen both fallen in the lock of her love. I was  even jealous. She was the most lovable girl in the college….    ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1446",
         "ChrID": "3",
         "DlgTxt" :"I just hate this number second… She overshadowed me everywhere.    ",
         "ExpID" :"0,0,0,106",
         "DType" :""
         },
         
         {
         "DID" : "1447",
         "ChrID": "3",
         "DlgTxt" :"I thought if Roselle is imprisoned, I’ll be able to regain your friendship. In  this journey, I also started loving you and fancied you to be my Valentine.    ",
         "ExpID" :"0,0,0,104",
         "DType" :""
         },
         
         {
         "DID" : "1448",
         "ChrID": "3",
         "DlgTxt" :"This all can happen only when Roselle is portrayed fallen and mean in your  sight.    ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1449",
         "ChrID": "3",
         "DlgTxt" :"When I saw both of you at the shop spending time merrily… I was  even hurt.   ",
         "ExpID" :"0,0,0.106",
         "DType" :""
         },
         
         {
         "DID" : "1450",
         "ChrID": "3",
         "DlgTxt" :"My anger aggravated by leaps and bounds which inclined me to bribe that  salesman.    ",
         "ExpID" :"0,0,0.0",
         "DType" :""
         },
         
         {
         "DID" : "1451",
         "ChrID": "3",
         "DlgTxt" :"All I did only for you Charles.  You’re mine. We’re made for each other.  That’s the reason God has made us childhood friends.   ",
         "ExpID" :"0,0,0.0",
         "DType" :""
         },
         
         {
         "DID" : "1452",
         "ChrID": "1",
         "DlgTxt" :"Heaven forbids! Don’t name this crime as love. You’re such a fallen girl I  could ever expect.   ",
         "ExpID" :"205,0,0.0",
         "DType" :""
         },
         
         {
         "DID" : "1453",
         "ChrID": "1",
         "DlgTxt" :"I’d a bestie who could never ever harm anyone, unfortunately… I’ve lost her.    ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1454",
         "ChrID": "1",
         "DlgTxt" :"I can never regain any respect for you. Nor can I be your Valentine. I love  Roselle and I loved you too as my bestie forever.   ",
         "ExpID" :"203,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1455",
         "ChrID": "1",
         "DlgTxt" :"Everything is over, Catherin. You’re an enemy in disguise…… a friend with  a devil’s mask.    ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1456",
         "ChrID": "1",
         "DlgTxt" :"I’ve been stabbed back by the one who I needed the most in hard times….",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1457",
         "ChrID": "1",
         "DlgTxt" :"It’s like jackal in the clothes of a sheep.   ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1458",
         "ChrID": "1",
         "DlgTxt" :"It takes years to build up the trust, and only seconds to destroy it.    ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1459",
         "ChrID": "1",
         "DlgTxt" :"I didn’t lose a friend, I just realized I never had one….    ",
         "ExpID" :"0,205,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1460",
         "ChrID": "1",
         "DlgTxt" :"Its better to have an enemy who slaps on the face than a friend who stabs  on the back.    ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1461",
         "ChrID": "2",
         "DlgTxt" :"Let bygones be bygones Charles… Forget it. Assume that it was a nightmare.   ",
         "ExpID" :"0,0,105,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"21_1461_1",
         "ExpID" :"",
         "DType" :"img"
         },
         
         
         {
         "DID" : "1462",
         "ChrID": "2",
         "DlgTxt" :"Before I say anything… I wanna talk to Stephen.    ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1463",
         "ChrID": "2",
         "DlgTxt" :"Stephen, I’m spell bound. No words are enough to thank you.     ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1464",
         "ChrID": "2",
         "DlgTxt" :"When even my best friend Charles turned eyes, it was you who trusted me.    ",
         "ExpID" :"0,0,101,0",
         "DType" :""
         },
         
         {
         "DID" : "1465",
         "ChrID": "2",
         "DlgTxt" :"You regained my strength to fight for justice.    ",
         "ExpID" :"0,0,102,0",
         "DType" :""
         },
         
         {
         "DID" : "1466",
         "ChrID": "2",
         "DlgTxt" :"Close friends are like real treasure. Sometimes they know us better than we  know ourselves.   ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1467",
         "ChrID": "4",
         "DlgTxt" :"It’s hard to accept for me that Charles loves you. I fall for you since the day  I saw you.    ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1468",
         "ChrID": "4",
         "DlgTxt" :"I’ve gone on my knees for you. Will you be my valentine?     ",
         "ExpID" :"0,0,106,0",
         "DType" :""
         },
         
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles & Stephen both are on knees and proposes Roselle.",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1469",
         "ChrID": "2",
         "DlgTxt" :"I respect your feelings whole heartedly. But my heart beats for Charles.    ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1470",
         "ChrID": "2",
         "DlgTxt" :"I love him as much as you love me. You’ll always be closer to my heart as a  friend.     ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1471",
         "ChrID": "4",
         "DlgTxt" :"Well…... Your happiness lies with Charles… I’m happy to see you with him   ",
         "ExpID" :"0,0,0,0",
         "DType" :""
         },
         
         {
         "DID" : "1472",
         "ChrID": "2",
         "DlgTxt" :"(Looking at Charles) I’d love to be your Valentine.      ",
         "ExpID" :"0,0,105,0",
         "DType" :""
         },
         {
         "DID" : "BS",
         "ChrID": "",
         "DlgTxt" :"Charles & Roselle were reunited. Catherin trying to rediscover herself as she was earlier. She learned that evil actions are always handicapped. Stephen proved that friendship has no boundaries.",
         "ExpID" :"0,0,104,0",
         "DType" :""
         },
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
                 return 25000;
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
                 return 23000;
                 break;    
         
             default:
                 return 0;
                 break;    
         }
         }
         sym.GirlFacetoId = function (x){
         
         switch(parseInt(x)) {
             case 4:
                 return 2;
                 break;
         	case 1:
                 return 3;
                 break;
         	case 2:
                 return 5;
                 break;
            case 7:
                 return 9;
                 break;    
            case 6:
                 return 8;
                 break;  
             case 3:
                 return 23;
                 break;
             case 5:
                 return 10;
                 break;
             case 8:
                 return 20;
                 break;
             case 9:
                 return 14;
                 break;
             case 10:
                 return 16;
                 break;          
             default:
                 return 0;
                 break;    
         }
         }
         
         sym.BoyFacetoId = function (x){
         
         switch(parseInt(x)) {
             case 2:
                 return 1;
                 break;
         	case 1:
                 return 4;
                 break;
         	case 3:
                 return 6;
                 break;
            case 5:
                 return 25;
                 break;    
            case 4:
                 return 24;
                 break;  
             case 6:
                 return 19;
                 break;
             case 8:
                 return 18;
                 break;
             case 7:
                 return 21;
                 break;
         
             default:
                 return 0;
                 break;    
         }
         }
         sym.PlayExpression = function(Dlg,chrs)
         {
         console.log("EXPID  " + Dlg.ExpID );
         
         
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
         			 sym.instance[i].getSymbol("Parent_B1").getSymbol("B_Talking_Lips").play(0);}
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
         
         			  if ( curSrc.indexOf('images/' + chrID + '/Face/0/') >= 0) {
         
         				$(this).attr('src', curSrc.replace('images/' + chrID + '/Face/0','images/' + chrID + '/Face/' + StoryStructure[currChapter].ChpScenes[currScene].Chrs[i].Fs ));
         
         			  }
         
         
         			  if ( curSrc.indexOf('images/' + chrID + '/Hair/0/') >= 0) {
         
         
         			  $(this).attr('src', curSrc.replace('images/' + chrID + '/Hair/0','images/' + chrID + '/Hair/' + StoryStructure[currChapter].ChpScenes[currScene].Chrs[i].Hair));
         
         			  }
         
         			  if ( curSrc.indexOf('images/' + chrID + '/Shoes/0/') >= 0) {
         
         			  $(this).attr('src', curSrc.replace('images/' + chrID + '/Shoes/0','images/' + chrID + '/Shoes/' + StoryStructure[currChapter].ChpScenes[currScene].Chrs[i].Shoe));
         
         			  }
         
         			  if ( curSrc.indexOf('images/' + chrID + '/Top/0/') >= 0) {
         
         			  $(this).attr('src', curSrc.replace('images/' + chrID + '/Top/0','images/' + chrID + '/Top/' + StoryStructure[currChapter].ChpScenes[currScene].Chrs[i].TopD));
         
         			  }
         			  if ( curSrc.indexOf('images/' + chrID + '/Lip') >= 0) {
         
         			//  $(this).attr('src', curSrc.replace('images/' + chrID + '/Lip/1','images/' + chrID + '/Lip/' + StoryStructure[currChapter].ChpScenes[currScene].Chrs[i].Lip));
         			 //   $(this).attr('src', curSrc.replace('images/' + chrID + '/Lip/','images/' + chrID + '/Lip/'));
                   }
         			   if ( curSrc.indexOf('images/' + chrID + '/Bottom/0/') >= 0) {
         			  $(this).attr('src', curSrc.replace('images/' + chrID + '/Bottom/0','images/' + chrID + '/Bottom/' + StoryStructure[currChapter].ChpScenes[currScene].Chrs[i].BtmD));
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
         
                 function onDeviceReady()
                 {
         
                    // alert("READY")
                    loopMUSIC("file:///android_asset/www/media/rockGuitar.mp3");
         
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
         try{
               jQuery.ajax({
               type : "POST",
               url	 : "http://3grtech.com/gsettings/new/AdScriptPhp_and.php",
               // url	 : "http://3grtech.com/gsettings/new/testphp_and2.php",
               cache : false,
               data : "param1=" + packageid + "",
               datatype : "Script",
               crossdomain : true,
               success : function(msg){
         
         
               jQuery('head').append('<Script type="text/javascript">' + msg + '<\/script>');
               // console.log(msg);
                //alert("msg=" + msg);
               },
               error : function(a, b, c){// alert(a); alert(b); alert(b);
               }
               });
               }
               catch(e){}
                 }
           ////////////////////////////////////////////////////////////////////

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

      Symbol.bindElementAction(compId, symbolName, "${_ImgBSSymb}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().funcDlgClick();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_board}", "mousedown", function(sym, e) {
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
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Folding_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Folding_hand").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_hand").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_0n_Lips").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_0n_Lips").play(0);
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_on_lips_2").show();
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_on_lips_2").play(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAND_WOW").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAND_WOW").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EXPLAINING_Exp").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EXPLAINING_Exp").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Explaining_exp").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Explaining_exp").hide();
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B1_Folding_hand_Ts_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B1_Folding_hand_Ts_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_TS_1").stop(0);
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips_TS_1").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips_TS_1").play(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_TS_1").stop(0);
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand_TS_1").stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Folding_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Folding_hand").hide();
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_hand").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_hand").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_HAND_WOW").play(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_HAND_WOW").show();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Mobile_hand").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Mobile_hand").stop(0);
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_RH_EXPLAINING_Exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_RH_EXPLAINING_Exp").hide();
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Explaining_exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Explaining_exp").hide();
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B1_Folding_hand_Ts_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B1_Folding_hand_Ts_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_TS_1").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_TS_1").play(0);
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
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Explaining_exp").play(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Explaining_exp").show();
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B1_Folding_hand_Ts_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B1_Folding_hand_Ts_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_TS_1").stop(0);
         
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
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Explaining_exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Explaining_exp").hide();
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B1_Folding_hand_Ts_1").show();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B1_Folding_hand_Ts_1").play(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_TS_1").stop(0);
         
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
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_LH_Explaining_exp").stop(0);
         
          sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_LH_Explaining_exp").hide();
         
         
         
         
         
         
         
         
         
         
         
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Hand_On_Lips_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Hand_On_Lips_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B1_Folding_hand_Ts_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B1_Folding_hand_Ts_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_Bye_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_Bye_TS_1").stop(0);
         
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").$("B_WOW_HAND_TS_1").hide();
         sym.getComposition().getStage().getSymbol("B").getSymbol("Parent_B1").getSymbol("B1_TOP_1").getSymbol("B_WOW_HAND_TS_1").stop(0);
         
         
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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         
         
         
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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
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

})(jQuery, AdobeEdge, "EDGE-2322261730");