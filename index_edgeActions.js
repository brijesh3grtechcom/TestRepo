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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var rndTotalCust = 0; 
         sym.pizzaArr =[];
         sym.preparedpizzaArr =[];
         sym.preparedpizzaArrGrill =[];
         sym.preparedpizzaArrCutPlate = [];
         sym.preparedpizzaArrHandPlate = [];
         var custTimeArr = [];
         var custSeatArr = ["NO","NO","NO"];
         var custTime = [];
         var pizzaTime = [];
         var basepizzatime = 200; // base time for 4 ingredients
         var currCustCnt = 60;
         //var setCurrentIngOnPlate ;
         var custArr = [];
         sym.cutFoodItem ="";
         sym.PizzaonPlateState ="";
         var SeatpizzaArr;
         sym.currPizzaArr;
         sym.ongrill = "";
         
         sym.flg7 = "";
         sym.flg9 = "";
         sym.flg11 = "";
         sym.flg10 = "";
         sym.flg8 = "";
         sym.flg5 = "";
         sym.flg6 = "";
         
          a=0;
         
         sym.GirlleftPosition = "45%";
         sym.GirlTopPosition = "45%";
         
         
         
         
         
          sym.CutItemAnimClick = function(CFI)
            { 
         
            if (!(sym.cutFoodItem =="") && isNaN(sym.cutFoodItem))	
         {
         
         		sym.$("hand_2").hide();
         		sym.MoveBody("60%","40%", "right");
         		sym.MoveBodyPlate("60%","40%", "rightdown", "ToCutItem");
         
         		/// movebody here 
         		return;
         	}
         
         
         	//sym.getComposition().getStage().setCurrentIngOnPlate = 6;
         	//cutFoodItem = "";
         		sym.cutFoodItem = CFI;
            if (sym.PizzaonPlateState ==""){
            sym.MoveBody("60%","40%", "right");
         	sym.MoveBodyPlate("60%","40%", "rightdown", "CutItemClick");
         
         		}
         }
         
         
         
          sym.MoveBody = function(l,t,d)
            { 
         
         
           if (d == "left")
         		sym.getSymbol("body_ani").play(1000);
           else if (d == "lefttop")
         		sym.getSymbol("body_ani").play(1750);
           else if (d == "right")
         		sym.getSymbol("body_ani").play(1000);
           else if (d == "righttop")
           		sym.getSymbol("body_ani").play(1000);
         	else if (d == "rightdown")
         		sym.getSymbol("body_ani").play(1000);
         	else if (d == "leftdown")
         		sym.getSymbol("body_ani").play(250);			
           else if (d == "top")
         		sym.getSymbol("body_ani").play(1750);
           else if (d == "down"){
         		sym.getSymbol("body_ani").play(250);
         
           }
           sym.$("body_ani").animate({
         							left: l,
         							top: t,
         							direction: d,
         					  },1000 );
         
         }
         
         
         
          sym.MoveBodyPlate = function(l,t,d,ClickCode,para1)
            { 
         
         
         	if ( ClickCode =="IngClick")
         {
         	sym.Sounds[0].play();
           sym.SoundsStatus[0] = "1";
         
         }
         else if (ClickCode =="CutItemClick")
         {
         
         }
            var aniTime = 1000;
           // return;
         if (sym.PizzaonPlateState =="plate"){
         	for (i=0; i< sym.getComposition().getStage().IngMasterArr.length; i++){
         
         									if (sym.preparedpizzaArrHandPlate.indexOf(i) >= 0){
         							      sym.getSymbol("body_ani_plate").$("PH2_" + i).attr('src',"images/cut_all/Cut_" + sym.getComposition().getStage().IngMasterArr[i] + ".png")
         
         									sym.getSymbol("body_ani_plate").$("PH2_" + i ).show();
         							}
         								sym.PizzaonPlateState ="plate";
         								sym.$("body_ani_plate").show();
         								sym.$("body_ani").hide();
         								cutFoodItem = "";
         
         					}
         
         }
         
         		if (!(l == sym.GirlleftPosition) || !(t==sym.GirlTopPosition) )
         		{
         
         		sym.$("body_ani_plate").show();
         		sym.$("body_ani").hide();
         
          // alert(sym.cutFoodItem);
         
         		 if (d == "left")
         			   sym.getSymbol("body_ani_plate").play(2001);	
         		  else if (d == "lefttop")
         				sym.getSymbol("body_ani_plate").play(2001);
         		  else if (d == "right")
         				sym.getSymbol("body_ani_plate").play(1001);
         		  else if (d == "righttop")
         				sym.getSymbol("body_ani_plate").play(1001);
         			else if (d == "rightdown")
         				sym.getSymbol("body_ani_plate").play(4001);
         			else if (d == "leftdown")
         				sym.getSymbol("body_ani_plate").play(3001);			
         		  else if (d == "top")
         				sym.getSymbol("body_ani_plate").play(1001);
         		  else if (d == "down"){
         				sym.getSymbol("body_ani_plate").play(4001);
         
         		  }
         }
         
         if (l == sym.GirlleftPosition && t==sym.GirlTopPosition )
         		{aniTime = 10;}
         		  sym.$("body_ani_plate").animate({
         									left: l,
         									top: t,
         									direction: d,
         							  },aniTime, function() {
         
         
         if ( ClickCode =="IngClick")
         {
         
               if (sym.PizzaonPlateState =="")
         		{
         		sym.getSymbol("body_ani_plate").$("blankimageonplate").attr('src',"images/plate_img/" + sym.cutFoodItem  + ".png")
         		sym.$("body_ani_plate").show();
         		sym.$("body_ani").hide();
         		}
         	//	else
         	//	 sym.cutFoodItem = "";
         }
         else if (ClickCode =="CutItemClick")
         {
         		sym.getSymbol("body_ani_plate").$("blankimageonplate").attr('src',"images/plate_img/" + sym.cutFoodItem  + ".png")
         		sym.$("I" + sym.cutFoodItem).hide();
         		sym.$("body_ani_plate").show();
         		sym.$("body_ani").hide();
         
         
         }
         else if (ClickCode =="ToCutItem")
         {
         
         		sym.$(sym.cutFoodItem).show();
         		sym.getSymbol(sym.cutFoodItem).play(0);
         		sym.$("knife").hide();
         		sym.$("body_ani_plate").hide();
         		sym.$("body_ani").show();
         		sym.cutFoodItem ="";
         		sym.getSymbol("body_ani_plate").$("blankimageonplate").attr('src',"images/ing/bankimage.png")
         		sym.Sounds[1].play();
             sym.SoundsStatus[1] = "1";
         
         }
         
         else if (ClickCode =="PlateClick")
         {
         var tmpForBread ;
         tmpForBread = sym.cutFoodItem.toString();
         //alert(sym.cutFoodItem.toString())
         				if (tmpForBread =="" && sym.preparedpizzaArr.length > 0 && sym.PizzaonPlateState =="")
         				{
         							//sym.Hide_PizzaOnPlate();
         							sym.preparedpizzaArrHandPlate = sym.preparedpizzaArr;
         						   sym.preparedpizzaArr=[];
         							sym.getSymbol("body_ani_plate").$("blankimageonplate").attr('src',"images/ing/bankimage.png")
         							 for (i=0; i< sym.getComposition().getStage().IngMasterArr.length; i++){
         
         									if (sym.preparedpizzaArrHandPlate.indexOf(i) >= 0){
         							      sym.getSymbol("body_ani_plate").$("PH2_" + i).attr('src',"images/cut_all/Cut_" + sym.getComposition().getStage().IngMasterArr[i] + ".png")
         
         									sym.getSymbol("body_ani_plate").$("PH2_" + i ).show();
         
         									//sym.$("PP_" + i ).hide();
         									sym.$("PP_" + i ).hide();
         								}
         								sym.PizzaonPlateState ="plate";
         								sym.$("body_ani_plate").show();
         								sym.$("body_ani").hide();
         								cutFoodItem = "";
         
         					}
         
         
         				}
         				else if ( sym.preparedpizzaArrHandPlate.length > 0 && sym.PizzaonPlateState =="plate" )
         				{
         							//sym.Hide_PizzaOnHandPlate();
         							sym.preparedpizzaArr = sym.preparedpizzaArrHandPlate;
         							sym.preparedpizzaArrHandPlate=[];
         							cutFoodItem = "";
         							 for (i=0; i< sym.getComposition().getStage().IngMasterArr.length; i++){
         									if (sym.preparedpizzaArr.indexOf(i) >= 0){
         									sym.$("PP_" + i ).show();
         							      sym.getSymbol("body_ani_plate").$("PH2_" + i).attr('src',"images/ing/bankimage.png")
         									sym.getSymbol("body_ani_plate").$("PH2_" + i ).hide();
         
         								}
         
         							}
         							sym.PizzaonPlateState ="";
         							sym.$("body_ani_plate").hide();
         							sym.$("body_ani").show();
         
         				}
         				else if (sym.preparedpizzaArr.indexOf(parseInt(sym.cutFoodItem)) == -1 && sym.PizzaonPlateState == "") {
         
         				try{
         					if (isNaN(tmpForBread))
         						{
         								sym.$("hand_2").show();
         								sym.$("wrong_ing").show();
                                 sym.getSymbol("wrong_ing").play(0);
         
         						}
         					 else if (SeatpizzaArr.indexOf(parseInt(sym.cutFoodItem)) == -1){
         								///play animation 
         									sym.cutFoodItem ="";
         									sym.$("body_ani_plate").hide();
         									sym.$("body_ani").show();
         									sym.getSymbol("body_ani_plate").$("blankimageonplate").attr('src',"images/ing/bankimage.png")
         									sym.$("wrong_ing").show();
                                 sym.getSymbol("wrong_ing").play(0);
         									return;
         							}
         
         					else
         						{
         							sym.getComposition().getStage().buildPrepareArray(sym.cutFoodItem);
         							sym.ShowIngredients(10);
         							sym.$("PP_" + sym.cutFoodItem).show();
         							sym.cutFoodItem ="";
         							sym.$("body_ani_plate").hide();
         							sym.$("body_ani").show();
         							sym.getSymbol("body_ani_plate").$("blankimageonplate").attr('src',"images/ing/bankimage.png")
         
         							}
         								}catch(e){}
         						}
         
         }
         else if ( ClickCode =="SauceIngClick" )
         {
         //alert(SeatpizzaArr.indexOf(1))
         		if (sym.preparedpizzaArr.indexOf(1) == -1){
         			if (sym.preparedpizzaArr.indexOf(0) >= 0){
         
         				sym.getComposition().getStage().buildPrepareArray(1);
         				sym.getSymbol("tomato_sauace").play(0);
         				sym.$("PP_1").show();
         				sym.ShowIngredients(10);
         			}
         			else {
         				sym.$("hand_1").show();
         			}
         		}
         
         }
         else if ( ClickCode =="DustBinClick")
         {
         
         		sym.$("dustbin_ani").show();
         		sym.getSymbol("dustbin_ani").play(0);
         		sym.getSymbol("body_ani_plate").$("blankimageonplate").attr('src',"images/ing/bankimage.png")
         		for (i=0; i< sym.getComposition().getStage().IngMasterArr.length; i++){
               sym.getSymbol("body_ani_plate").$("PH2_" + i).attr('src',"images/ing/bankimage.png")
               sym.preparedpizzaArrHandPlate=[];
         		}
         		sym.$("body_ani_plate").hide();
         		sym.$("body_ani").show();
         		sym.cutFoodItem ="";
         		sym.PizzaonPlateState ="";
         		sym.ShowIngredients(11);
         
         
         
         
         }
         
         else if (ClickCode =="CustomerClick")
         {
         		try
         			{
         			sym.getSymbol("TotalEar_ani").$("TotalEarningText").html("$" + sym.TotalEarning);
         			sym.$("Earning_ani").show();
         			sym.Sounds[5].play();
                sym.SoundsStatus[5] = "1";
         			sym.getSymbol("Earning_ani").$("EarningText").html("$" + sym.pizzaPriceArr [para1]);
         	   	sym.getSymbol("Earning_ani").play(0);
         	   	sym.getSymbol("TotalEar_ani").play(0);
         			sym.$("cust_" + custSeatArr[para1]).hide(); //hide 
         
         
         			sym.$("Quction_ani" + para1).hide();
         			custSeatArr[para1] = "NO";
         			Cust_tm = 0 ;
         			//sym.preparedpizzaArrCutPlate = [];
         			sym.pizzaArr[para1] = [];
         			//custSeatArr[seatNo] = "NO";
         			//rndTotalCust = rndTotalCust - 1;
         			custTime[para1] = 0;
         			pizzaTime[para1] = 0;
         		sym.getSymbol("body_ani_plate").$("blankimageonplate").attr('src',"images/ing/bankimage.png")
         		for (i=0; i< sym.getComposition().getStage().IngMasterArr.length; i++){
         			sym.getSymbol("body_ani_plate").$("PH2_" + i).attr('src',"images/ing/bankimage.png")
         			//alert("PH2_" + i);
         		}
         
         			sym.cutFoodItem ="";
         			sym.PizzaonPlateState ="";
         			sym.$("body_ani_plate").hide();
         		   sym.$("body_ani").show();
         		   sym.preparedpizzaArrHandPlate=[];
         
         
         			if(sym.pizzaArr[0].length >0)
         			sym.ShowIngredients(0);}
         			catch(e){}
         			try{
         			if(sym.pizzaArr[1].length >0)
         			sym.ShowIngredients(1);}
         			catch(e){}
         			try{
         			if(sym.pizzaArr[2].length >0)
         			sym.ShowIngredients(2);
         			}
         			catch(e){alert(e);}
         
         
         
         }
         
         else if (ClickCode =="GrillClick")
         {
         
         //check here for pizza array
         
         
         
         }
         
         else if (ClickCode =="CutPizzaClick")
         {
         
         //var tpseatno = parseInt(sym.$("IngSeatNo").text()) -1 
         	//			sym.preparedpizzaArrGrill = sym.pizzaArr[tpseatno];
         //alert("here");
         		if (sym.preparedpizzaArrGrill.length > 0 && sym.preparedpizzaArrCutPlate.length == 0 )
         				{
         							sym.preparedpizzaArrCutPlate = sym.preparedpizzaArrGrill;
         							 for (i=0; i< sym.getComposition().getStage().IngMasterArr.length; i++){
         
         									if (sym.preparedpizzaArrCutPlate.indexOf(i) >= 0){
         
         								//	alert(sym.getSymbol("body_ani_plate").$("PHL_" + i ));
         									sym.$("PC_" + i ).show();
         									sym.$("GR_" + i ).hide();
         								}
         
         					}
         						sym.preparedpizzaArrCutPlate.push(17);
         						sym.ShowIngredients(10);
         						sym.$("cutter1").hide();
         					   sym.$("red_ani").hide();					
         					   sym.getSymbol("red_ani").stop(0);
         					   sym.getSymbol("time_bar").stop(0);
         					   sym.getSymbol("hotgrll").stop(0);
         						sym.$("pizza_cut").show();
         						sym.getSymbol("pizza_cut").play(0);
         						sym.preparedpizzaArrGrill  = [];
         						sym.Sounds[7].play();
         						sym.SoundsStatus[7] = "1";
         
         					}
         
         
         		else if (sym.preparedpizzaArrCutPlate.length  > 0 && sym.PizzaonPlateState =="" )
         				{
         				//	alert("eCutPLate Back to Plate  --" + sym.PizzaonPlateState)
         							//sym.Hide_PizzaOnHandPlate();
         							sym.preparedpizzaArrHandPlate = sym.preparedpizzaArrCutPlate;
         							cutFoodItem = "";
         							sym.getSymbol("body_ani_plate").$("blankimageonplate").attr('src',"images/ing/bankimage.png")
            						for (i=0; i< sym.getComposition().getStage().IngMasterArr.length; i++){
         									if (sym.preparedpizzaArrHandPlate.indexOf(i) >= 0){
         									sym.$("PC_" + i ).hide();
         									sym.$("cut_pizzaOut").hide();
         									sym.$("hand_4").hide();	
         								   sym.getSymbol("body_ani_plate").$("PH2_" + i).attr('src',"images/cut_all/Cut_" + sym.getComposition().getStage().IngMasterArr[i] + ".png")
         									sym.getSymbol("body_ani_plate").$("PH2_" + i ).show();
         								}
         
         							}
         							sym.PizzaonPlateState ="cut";
         							sym.$("body_ani_plate").show();
         							sym.$("body_ani").hide();
         						   sym.ShowIngredients(11);
           							sym.preparedpizzaArrCutPlate=[];
         
         				}
         
         
         
         
         }
         sym.GirlleftPosition = l;
         sym.GirlTopPosition = t;
         
         ClickCode = "";
           });
         		sym.GirlleftPosition = l;
         		sym.GirlTopPosition = t;
         
         
         }
         
            sym.getSymbol("body_ani").stop();
           // sym.getSymbol("body_ani_plate").stop(1000);
         
         //////////////////////////"cordova.js",
           yepnope({ nope : ["loading-bar.js","jquery-ui.min.js","jqueryuitouchpunch.js","localS.js"], complete : init});
           function init()
           {
           //try{
         
         
           	sym.$("stage_start").show();
         	sym.$("Fist_screen").hide();
         	sym.$("Scend_screen").hide();
         	sym.$("stage_end").hide();
         
         
             sym.$("red_ani").hide();
             sym.$("body_ani_plate").hide();
         
             sym.$("strar_3").hide();
             sym.$("strar_2").hide();
             sym.$("strar_1").hide();
         
             sym.$("stage_scr").hide();
             sym.$("pizza_cut").hide();
         
          sym.getSymbol("R_chilli").stop(0);
          sym.getSymbol("G_chilli").stop(0);
         
          sym.getSymbol("red_ani").stop(0);
          sym.getSymbol("time_bar").stop(0);
         
         
         
            sym.getSymbol("StageNoAnim_1").stop(0);
            sym.getSymbol("StageNoAnim_2").stop(0);
            sym.getSymbol("StageNoAnim_3").stop(0);
            sym.getSymbol("StageNoAnim_4").stop(0);
            sym.getSymbol("StageNoAnim_5").stop(0);
            sym.getSymbol("StageNoAnim_6").stop(0);
            sym.getSymbol("StageNoAnim_7").stop(0);
            sym.getSymbol("StageNoAnim_8").stop(0);
            sym.getSymbol("StageNoAnim_9").stop(0);
            sym.getSymbol("StageNoAnim_10").stop(0);
            sym.getSymbol("StageNoAnim_11").stop(0);
            sym.getSymbol("StageNoAnim_12").stop(0);
            sym.getSymbol("StageNoAnim_13").stop(0);
            sym.getSymbol("StageNoAnim_14").stop(0);
            sym.getSymbol("StageNoAnim_15").stop(0);
         
         
            sym.getSymbol("cust_1").stop(0);
            sym.getSymbol("cust_2").stop(0);
            sym.getSymbol("cust_3").stop(0);
            sym.getSymbol("cust_4").stop(0);
            sym.getSymbol("cust_5").stop(0);
            sym.getSymbol("cust_6").stop(0);
            sym.getSymbol("cust_7").stop(0);
            sym.getSymbol("cust_8").stop(0);
         
            sym.getSymbol("pizza_cut").stop(0);
         
            sym.getSymbol("I9").stop(0);
            sym.getSymbol("I11").stop(0);
            sym.getSymbol("I10").stop(0);
            sym.getSymbol("I8").stop(0);
            sym.getSymbol("dustbin_ani").stop(0);
            sym.getSymbol("I7").stop(0);
            sym.getSymbol("I5").stop(0);
            sym.getSymbol("I6").stop(0);
            sym.getSymbol("tomato_sauace").stop(0);
            sym.getSymbol("body_ani").stop(0);
            sym.getSymbol("hotgrll").stop(0);
         
            sym.getSymbol("strar_1").stop(0);
            sym.getSymbol("strar_2").stop(0);
            sym.getSymbol("strar_3").stop(0);
            sym.getSymbol("No_strar").stop(0);
         
            sym.getSymbol("stage_scr").stop(0);
         
           /////////////////////////////////////////////////////////////////////
           // ad ajax call
           ////////////////////////////////////////////////////
         
         var mysound;
         sym.Sounds = [];
         sym.SoundsStatus = [];
          // sym.btnclick ;
           //sym.babycry ;
          // sym.background ;
          // sym.bigbabycry ;
          // sym.babysong1 ;
         
         
         
         sym.initSound = function (){
         
         try{
           sym.Sounds[0] = sym.playeffect("file:///android_asset/www/media/ingClick.mp3","");
           sym.Sounds[1] = sym.playeffect("file:///android_asset/www/media/ingCut.mp3","");
           sym.Sounds[2] = sym.playeffect("file:///android_asset/www/media/pizzabkg.mp3","loop");
           sym.Sounds[3] = sym.playeffect("file:///android_asset/www/media/NewCust.mp3","");
           sym.Sounds[4] = sym.playeffect("file:///android_asset/www/media/Oven.mp3","");
           sym.Sounds[5] = sym.playeffect("file:///android_asset/www/media/Coin.mp3","");
           sym.Sounds[6] = sym.playeffect("file:///android_asset/www/media/pizzaPlate.mp3","");
           sym.Sounds[7] = sym.playeffect("file:///android_asset/www/media/Oven2.mp3","");
         
           sym.SoundsStatus[0] = "0";
           sym.SoundsStatus[1] = "0";
           sym.SoundsStatus[2] = "0";
           sym.SoundsStatus[3] = "0";
           sym.SoundsStatus[4] = "0";
           sym.SoundsStatus[5] = "0";
           sym.SoundsStatus[6] = "0";
           sym.SoundsStatus[7] = "0";
         
         }
         catch (e) {alert("SoundErr" + e)}
         }
         
         	sym.spause = function()
         		{
         			for (i=0 ; i < sym.Sounds.length ; i ++)
         			sym.Sounds[i].pause() ;
         
         		}
         	sym.srelease = function (){
         
         		 for (i=0 ; i < sym.Sounds.length ; i ++)
         			sym.Sounds[i].release() ;
         
         
         		 }
            sym.deleteSound = function (){
         			for (i=0 ; i < sym.Sounds.length ; i ++){
         			sym.Sounds[i] = null;
         			delete sym.Sounds[i] ;
         			}
         
                 }
         
         
         
         
                 sym.playeffect = function (url,loopVal)
                 {
                    var effect;
                    try
                    {
                       effect = new Media(url, function ()
                       {
                       }
                       , function (err3)
                       {
                          // alert("ere3=" + err3); 
                       }
                       ,
                       function (status)
                       {
                          if (status === Media.MEDIA_STOPPED)
                          {
                             // alert("status=" + status);
                             if (loopVal == "loop")
         							effect.play();
                             else
         							effect.release();
                             // alert('relesed');
                          }
         
                       }
                       );
                       //effect.play();
                      return effect;
                    }
                    catch(e40)
                    {
                        alert("effect Audio ERR =" + e40); 
                    }
                 }
         
         
                 document.addEventListener("deviceready", onDeviceReady, false);
                 document.addEventListener("backbutton", xyz33, false);
                 document.addEventListener("menubutton", xyz1, false);
                 document.addEventListener("pause", xyz2, false);
                 document.addEventListener("resume", xyz3, false);
         
                 function xyz1(e)
                 {
                 // alert("2");
                    myexitapp();
                    navigator.app.exitApp();
                 }
         
                 function xyz2(e)
                 {
                 // alert("3");
                 sym.spause();
         
                //    myexitapp();
         
                   // sym.spause();
                    sym.$("pause").hide();
                    sym.$("play").show();
                 }
         
                 function xyz3(e)
                 {
         			//  alert("1");
                  //  onDeviceReady();
                    usersoundstatus();
                 }
         
                 function xyz33(e)
                 {
                    myexitapp();
                    navigator.app.exitApp();  
                 }
         
                 function myexitapp()
                 {
         
                      sym.spause();
                       sym.$("pause").hide();
                       sym.$("play").show();
                       // my_MUSIC1.stop();
                       sym.srelease();
                       sym.deleteSound();
                       //my_MUSIC1 = null;
                     //  delete my_MUSIC1;
         
                   }
         
         
                 function usersoundstatus()
                 {
                    try
                    {
                       // 0 = no   1 = yes
                       var s = data_get_string("status", "1000");
                       if(s == "1000")
                       {
                      //     alert("if s=" + s);
                          data_set_string("status", "1");
                          sym.Sounds[2].play();
                          sym.$("play").hide();
                          sym.$("pause").show();
                          mysound = "true";
                       }
                       else if(s == "1")
                       {
         
                         //  alert("else1 s=" + s);
                           sym.Sounds[2].stop();
                         sym.Sounds[2].play();
                          sym.$("play").hide();
                          sym.$("pause").show();
                          mysound = "true";
                       }
                       else
                       {
                       //    alert("else0 s=" + s);
                          sym.spause();
                          sym.$("pause").hide();
                          sym.$("play").show();
                          mysound = "false";
                       }
         
                    }
                    catch(ex)
                    {
                       /* alert("usersoundstatus= " + ex); */
                    }
                 }
         
         		  sym.onlyBackgroundPause = function (){
         
         
         		  }
         
                 function onDeviceReady()
                 {
         try{sym.initSound();
         	}catch(e){}
         
                        //-------------------  sym.Sounds[2].play();
                          usersoundstatus();
                    // alert("READY")
                  //  loopMUSIC ;
            sym.pauseclick = function()
                          {
         
                             try
                             {
                                data_set_string("status", "0");
                                sym.spause();
                               sym.SoundsStatus[2] ="1";
                                sym.$("pause").hide();
                                sym.$("play").show();
                                mysound = "false";
                             }
                             catch(de)
                             {
                                 alert("sym.pauseclick =" + de); 
                             }
                          }
         
                          sym.playclick = function()
                          {
         
         
                             try
                             {
                                data_set_string("status", "1");
                              //  for (i=0 ; i < sym.Sounds.length ; i ++)
         								sym.getMediaStatus();
         								sym.Sounds[2].play();
                                sym.$("play").hide();
                                sym.$("pause").show();
                                mysound = "true";
                             }
                             catch(de1)
                             {
                                 alert("sym.playclick =" + de1); 
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
         
                       }
         sym.getMediaStatus = function (md){
         
         try{
         
         for (i=0 ; i < sym.Sounds.length ; i ++)
           if(sym.SoundsStatus[i] == "1") sym.Sounds[i].play();
         }
         catch(e) { alert("Stat   " + e);}
         
         	}
         
           ////////////////////////////////////////////////////////////////////
         
         //sym.initSound ();
         
              sym.hand_hide = function ()
           	{		//alert('fun');
         
             sym.$("hand_1").hide();
             sym.$("hand_2").hide();
             sym.$("hand_3").hide();
             sym.$("hand_4").hide();
             sym.$("hand_5").hide();
             sym.$("hand_6").hide();
         
           }
         
         
         
              sym.Hide_PizzaOnPlate = function ()
           	{		//alert('fun');
         
         			for (i=0; i< sym.IngMasterArr; i++)
         
         			{
         				sym.$("PP_"+ i).hide();
         			}
         
         
         
           }
         
           		sym.Hide_PizzaOnGrill = function ()
           	{
         				for (i=0; i< sym.IngMasterArr; i++)
         
         				{
         					sym.$("GR_"+ i).hide();
         				}
         
         	}
         
         		sym.Hide_Pizza_ForCut = function ()
         	{
         			for (i=0; i< sym.IngMasterArr; i++)
         
         			{
         				sym.$("CP_"+ i).hide();
         			}
         
         	}
         
         
         
              sym.PizzaOnPlate_show = function ()
           	{		//alert('fun');
         
         			for (i=0; i< sym.IngMasterArr; i++)
         
         			{
         				sym.$("PP_"+ i).show();
         			}
         
           }
         
           		sym.PizzaOnGrill_show = function ()
           	{
         			for (i=0; i< sym.IngMasterArr; i++)
         
         					{
         						sym.$("GR_"+ i).show();
         					}
         
         	}
         
         		sym.Pizza_ForCut_show = function ()
         	{
         
         			for (i=0; i< sym.IngMasterArr; i++)
         
         				{
         					sym.$("CP_"+ i).show();
         				}
         
         	}
         
                  /*
         
                  "bread" = 0
         		Tsauce = 1
                  ,"cheese" =2
         
                  ,"L1" =3
                  ,"L2" =4
                  ,"RC"=5
                  ,"GC"=6
                  ,"TMT" =7
                  ,"olive"=8
                  ,"ham"=9
                  ,"mush"=10
                  ,"steak"=11
                  ,"rsuace"=12
                  ,"gsauce"=13
                  ,"tuna"=14
                  ,"shrimp"=15
         
                  */
         
         sym.IngMasterArr = ["bread","Tsauce","cheese","L1","L2","RC","GC","TMT","olive","ham","mush","steak","rsuace","gsauce","tuna","shrimp","grill","cut"];
         var IngredientsPrice = [1,1,1,2,2,2,3,2,2,3,2,3,0,0,2,2];
         
         sym.TotalEarning = 0;
         sym.TotalExpectedEarning = 0;
         sym.PizzaPrice =0;
         sym.pizzaPriceArr =[];
         
         
         sym.TempHint = function (){
         	flgLastcustServed = "true";
         
         }
         sym.StageNoAnim = function (){
         
         	sym.getSymbol("StageNoAnim_" + (sym.stagecnt + 1)).play(0);
         
         }
         var Cust_tm = 0;
         var Stage_tm = 0;
         var flgLastcustServed ="";
         var LastcustSeatNo ="";
         sym.gameState ="pause";
         sym.starArr =[];
         
         //////setinterval -------------------------------------
         setInterval(function (){
         
         if (sym.gameState == "pause")
         return;
         	try{
         
         //	console.log("Cus_Tm " +  Cust_tm);
         //	console.log("stage_tm " +  Stage_tm);
         //	console.log("stageTotaltime " +  stageTotalTime);
         //	console.log("custArr[currCustCnt] " +  custArr[currCustCnt]);
         //	console.log("currCustCnt -- " + currCustCnt + " -- rndTotalCust --" + rndTotalCust);
         //	console.log("custTime[0]  " + custTime[0]);
         //	console.log("custTime[1]  " + custTime[1]);
         	//console.log("custTime[2]  " + custTime[2]);
         	//console.log("pizzaTime[0]  " + pizzaTime[0]);
         	//console.log("pizzaTime[1]  " + pizzaTime[1]);
         	//console.log("pizzaTime[2]  " + pizzaTime[2]);
         	test();
         
         		Cust_tm = Cust_tm + 1 ;
         		Stage_tm = Stage_tm + 1 ;
         		sym.getSymbol("StageTmTxt").$("StageTimeTxt").html(stageTotalTime - Stage_tm);  
         	if (custSeatArr[0] != "NO")
         	custTime[0] = custTime[0] + 1 ;
         	if (custSeatArr[1] != "NO")
         	custTime[1] = custTime[1] + 1 ;
         	if (custSeatArr[2] != "NO")
         	custTime[2] = custTime[2] + 1 ;
         
         if (currCustCnt == rndTotalCust && custSeatArr[rndCustSeat] =="NO")
         {
         	flgLastcustServed ="true"
         }
         //Stage_tm = 2000;
         	if (Stage_tm > stageTotalTime  || flgLastcustServed == "true"  )
         	{
         	//show the stage screen
         		sym.gameState = "pause";
         		flgLastcustServed ="";
         		sym.$("stage_end").show();
         		sym.$("stage_scr").show();
         		sym.getSymbol("stage_scr").play(0);
         	//	sym.TotalEarning = sym.TotalExpectedEarning * 55/100;
         			if (sym.TotalExpectedEarning/sym.TotalEarning <1.26)
         		{
         			// Show all stars
         				sym.$("strar_3").show();
         				sym.getSymbol("strar_3").play(0);
         				sym.starArr[sym.stagecnt] = 3;
         				localStorage.setItem("stageStar", JSON.stringify(sym.starArr));
         
         		}
         			else if (sym.TotalExpectedEarning/sym.TotalEarning <2.01 && sym.TotalExpectedEarning/sym.TotalEarning > 1.25 )
         		{	// Show 2   stars
         
         				sym.$("strar_2").show();
         				sym.getSymbol("strar_2").play(0);
         				sym.starArr[sym.stagecnt] = 2;
         				localStorage.setItem("stageStar", JSON.stringify(sym.starArr));
         
         
         		}
         			else if (sym.TotalExpectedEarning/sym.TotalEarning <3.01 && sym.TotalExpectedEarning/sym.TotalEarning > 2.01 )
         		{	// Show 1 stars
         
         				 sym.$("strar_1").show();
         				sym.getSymbol("strar_1").play(0);
         				sym.starArr[sym.stagecnt] = 1;
         				localStorage.setItem("stageStar",JSON.stringify(sym.starArr));
         
         				}
         
         			else
         		{
         
         			sym.$("No_strar").show();
         			sym.getSymbol("No_strar").play(0);
         			sym.starArr[sym.stagecnt] = 0;
         			localStorage.setItem("stageStar", JSON.stringify(sym.starArr));
         
         	}
         
         		sym.$("StageEarnings").html(sym.TotalEarning);
         		sym.$("stage_end").show();
         		sym.$("StagenoTxt").html(sym.stagecnt);
         //		sym.$("TotalEarningTxt").html(TotalEarning);
         		sym.StageChangeClear();
         	}
         	else if (custSeatArr.indexOf("NO") >= 0 && currCustCnt < rndTotalCust){
         
         			if (parseInt(Cust_tm) > parseInt(custArr[currCustCnt])){
         				 generateCust();
         				 Cust_tm = 0;
         				 console.log("GenCust");}
         		}
         	else if (custTime[0] == pizzaTime[0] - 10 && custSeatArr[0] != "NO" )
         		{
         		console.log("Cust1");
         		 //show expression here of sadnneesss
         		 sym.$("cust_" + custSeatArr[0]).show();
         	    sym.getSymbol("cust_" + custSeatArr[0]).play(1000);
         	   sym.Sounds[4].play();
              sym.SoundsStatus[4] = "1";
         
         		}
         		else if (custTime[1] == pizzaTime[1] - 10 && custSeatArr[1] != "NO" )
         		{
         		console.log("Cust2");
         		 //show expression here of sadnneesss
         		 sym.$("cust_" + custSeatArr[1]).show();
               sym.getSymbol("cust_" + custSeatArr[1]).play(1000);
               sym.Sounds[4].play();
             sym.SoundsStatus[4] = "1";
         
         
         		}
         		else if (custTime[2] == pizzaTime[2] - 10 && custSeatArr[2] != "NO" )
         		{
         		console.log("Cust3");
         		 //show expression here of sadnneesss
         		 sym.$("cust_" + custSeatArr[2]).show();
               sym.getSymbol("cust_" + custSeatArr[2]).play(1000);
               sym.Sounds[4].play();
               sym.SoundsStatus[4] = "1";
         
         		}
         	else if (custTime[0] > pizzaTime[0])
         			{
         				if (currCustCnt == rndTotalCust)
         
         				Cust_tm = 0;
         				custTime[0] = 0; 
         				 // hide customer here			  // i.e. Show happy expression & then hide
                     sym.$("cust_" + custSeatArr[0]).hide(); 
                     sym.getSymbol("cust_" + custSeatArr[0]).stop(0);
         
         
         
         				custSeatArr[0] = "NO"; 
         
         				}
         	else if (custTime[1] > pizzaTime[1] && custSeatArr[1] != "NO" )
         	{
         				Cust_tm = 0;
         				custTime[1] = 0;
         				 // hide customer here
                    sym.$("cust_" + custSeatArr[1]).hide(); 
                    sym.getSymbol("cust_" + custSeatArr[1]).stop(0);
         
         
         				custSeatArr[1] = "NO";
         				}
         	else if (custTime[2] > pizzaTime[2] && custSeatArr[2] != "NO"  )
         	{
         				Cust_tm = 0;
         				custTime[2] = 0;
         				 // hide customer here
                     sym.$("cust_" + custSeatArr[2]).hide(); 
                     sym.getSymbol("cust_" + custSeatArr[2]).stop(0);
         
         
         				custSeatArr[2] = "NO";
         				}
         
         				}catch(e){alert(e);}
         
         }
         , 1000);
         
         sym.StageChangeClear = function () {
         
         //alert("GS");
         		gamestate = "pause";
         		//StageChange();
         		Stage_tm = 0 ;
         		//console.log("here");
         		custArr = [];
         		sym.getComposition().getStage().hand_hide(); 
         		sym.$("cust_" + custSeatArr[0]).hide(); //hide
         		sym.$("cust_" + custSeatArr[1]).hide(); //hide 
         		sym.$("cust_" + custSeatArr[2]).hide(); //hide
         		custTimeArr = [];
         		sym.pizzaArr =[];
         		Cust_tm = 0 ;
         		Stage_tm = 0;
         		rndTotalCust = 0 ;
         		currCustCnt = 100;
         		pizzaTime = [] ;
         		custTime = [];
         		sym.preparedpizzaArr = [];
         		sym.preparedpizzaArrGrill = [];
         		sym.preparedpizzaArrCutPlate = [];
         		custSeatArr = ["NO","NO","NO"];
         		sym.MoveBody("40%","45%", "right");
         		sym.MoveBodyPlate("40%","45%", "right");
         		sym.$("body_ani_plate").hide();
         		sym.$("red_ani").hide();
         		cutFoodItem = "";
         		SeatpizzaArr =[];
         		sym.TotalEarning = 0;
         
         
         		localStorage.setItem("stage", sym.stagecnt);
         					for (i=0; i< sym.getComposition().getStage().IngMasterArr.length; i++){
         
         								//	if (sym.preparedpizzaArrHandPlate.indexOf(i) >= 0){
         							      sym.getSymbol("body_ani_plate").$("PH2_" + i).attr('src',"images/ing/bankimage.png")
         									sym.$("GR_" + i ).hide();
         									sym.$("PC_" + i ).hide();
         									sym.$("PP_" + i ).hide();
         								//}
         
         								}
         
         		}
         var stageTotalTime =0;
         sym.stagecnt  = 1;
         //StageChange(1);
         	sym.StageChange = function (a) {
         	if (a > (parseInt(sym.stagecnt) + 1))
         	{return;}
         	sym.$("Fist_screen").hide();
         	sym.$("Scend_screen").show();
         	sym.stagecnt = a;
         			if (sym.stagecnt < 3){ // stage from 1-5 
         				rndTotalCust = Math.floor((Math.random() * 4) + 3); //generateTotalCust
         
         				}
         		else if (sym.stagecnt < 5){ // stage from 1-5 
         				rndTotalCust = Math.floor((Math.random() * 6) + 4); //generateTotalCust
         
         				}
         			else if (sym.stagecnt < 7){ // stage from 1-5 
         				rndTotalCust = Math.floor((Math.random() * 7) + 5); //generateTotalCust
         
         				}
         			else if (sym.stagecnt < 11){ // stage from 1-5 
         				rndTotalCust = Math.floor((Math.random() * 8) + 6); //generateTotalCust
         
         				}
         			else if (sym.stagecnt < 16){ // stage from 1-5 
         				rndTotalCust = Math.floor((Math.random() * 10) + 6); //generateTotalCust
         
         			}
         
         
         			custArr[0]= 0; 
         			for (i=1; i < rndTotalCust ; i++)
         				{
         				custArr[i]= Math.floor((Math.random() * 12) + 3);
         				//custTime[i]
         				}
         				//alert(sym.stagecnt);
         			//	stageTotalTime = rndTotalCust * 1000;
         				stageTotalTime = rndTotalCust * 100;
         				//stageTotalTime = 5;
         				currCustCnt = 0 ;
         			//rndTotalCust = 4;
         		sym.gameState = "";
         		sym.$("body_ani").show();
         		sym.getComposition().getStage().Hide_PizzaOnPlate(); 
         		sym.getComposition().getStage().Hide_PizzaOnGrill(); 
         		sym.getComposition().getStage().Hide_Pizza_ForCut(); 		
         		sym.getComposition().getStage().hand_hide(); 
         		sym.$("body_ani_plate").hide();
         
         
         }
         
         
         sym.arraysEqual = function(_arr1, _arr2) {
             if (!Array.isArray(_arr1) || ! Array.isArray(_arr2) || _arr1.length !== _arr2.length)
               return false;
         
             var arr1 = _arr1.concat().sort();
             var arr2 = _arr2.concat().sort();
         
             for (var i = 0; i < arr1.length; i++) {
         
                 if (arr1[i] !== arr2[i])
                     return false;
         
             }
         
             return true;
         
         }
         //var TotalPrice = 0;
         
         //sym.getComposition().getStage().buildPrepareArray(no. of ing); call on ing on pizza
         sym.buildPrice = function(ing){
         	preparedPriceArr.push(ing);
         }
         
         sym.buildPrepareArray = function(ing){
         	sym.preparedpizzaArr.push(ing);
         	//TotalPrice = TotalPrice + IngredientsPrice[ing]
         }
         //sym.getComposition().getStage().clearPrepareArray(); //call on dustbin
         
         sym.clearPrepareArray = function(v){
         sym.preparedpizzaArrHandPlate =[];
         }
         sym.foodServe = function (CustNo){
         
         
         try{
         
         	var seatNo = custSeatArr.indexOf(CustNo)
         
         
         //	if (1==1)
         if (sym.arraysEqual (sym.pizzaArr[seatNo],sym.preparedpizzaArrHandPlate))
         		{
         		if (currCustCnt == rndTotalCust && CustNo==rndCustSeat )
         			flgLastcustServed ="true"
         		else
         			flgLastcustServed =""
         			sym.TotalEarning = sym.TotalEarning + sym.pizzaPriceArr [seatNo] ;
         			var lft;
         			var tp; 
         
         			if (seatNo == 0){
         			lft = "45%" ; tp = "5%";}
         			else if (seatNo == 1){
         			lft = "50%" ; tp = "20%";}
         			else if (seatNo == 2){
         			lft = "65%" ; tp = "25%";}
         			sym.MoveBody(lft,tp, "lefttop");
         			sym.MoveBodyPlate(lft,tp, "lefttop", "CustomerClick",seatNo);
         
         
         			//alert("RndTOTALCust  -- "  + rndTotalCust);
         		//if (rndTotalCust == 0){
         		//		StageChange(); }
         		//else
         	//	{
         		//	alert("NewCustomer");
         		//	generateCust();
         		//}
         
         
         		//sym.clearPrepareArray();
         	// customer exit
         	return true;
         
         	}
         
         
         
         else //Fail
         {
         
         	if (seatNo == 0){
         
         		sym.$("cust_X").show();
         		sym.getSymbol("cust_X").play();
         		//percent = ($("cust_X") / $("cust_X").width()) * 100
         	//	sym.$("cust_X").css({top: "10%", left: "70%", position:'absolute'}); //hide 
         	}
         	else if (seatNo == 1){
         		sym.$("cust_X2").show();
         		sym.getSymbol("cust_X2").play();
         	//	sym.$("cust_X").css({top: "15%", left: "80%", position:'absolute'}); //hide 
         	}
         	else if (seatNo == 2){
         		sym.$("cust_X3").show();
         		sym.getSymbol("cust_X3").play();
         		//sym.$("cust_X").css({top: "20%", left: "90%", position:'absolute'}); //hide 
         	}
         	//sym.preparedpizzaArr = [];
          //  sym.$("hand_3").show();
            sym.$("dustbin_area2").show();
         
         	return false;
         }
         }
         catch(e){
         	//alert("Foodserver -- " + e);
         	}
         
         }
         var rndCustSeat;
         function generateCust (){
         
         try{
         	var custFnd ="true";
         	var custSeatFnd ="true";
         	var custIndex = 0;
         	var custSeatIndex = 0;
         	while (custFnd =="true"){
         		var rndCust = Math.floor((Math.random() * 8) + 1);
         			if (custSeatArr.indexOf(rndCust) == -1) {
         			 	custFnd = ""
         			}
         
         		}
         	while (custSeatFnd =="true"){
         		rndCustSeat = Math.floor((Math.random() * 3) + 0);
         	//	alert(rndCustSeat);
         			if (custSeatArr[rndCustSeat] == "NO") {
         				custSeatArr[rndCustSeat] = rndCust;
         				custSeatFnd = ""
         			}
         		}
         	//alert("your Customer - " + custArr[custIndex]);
         	sym.pizzaArr[rndCustSeat] = sym.randomPizzaIng();
         	sym.pizzaPriceArr[rndCustSeat] = sym.PizzaPrice ;
         	sym.TotalExpectedEarning = sym.TotalExpectedEarning + sym.PizzaPrice;
         	pizzaTime[rndCustSeat] = (sym.pizzaArr[rndCustSeat].length * 5)  + basepizzatime; // change time here for each ingredient
         	custTime [rndCustSeat] = 0;
         	sym.PizzaPrice = 0;
         	currCustCnt ++;
         	if (currCustCnt == 1)
         	sym.ShowIngredients(rndCustSeat);
         
         	//custTime[rndCustSeat]= pizzaArr[rndCustSeat].length * 10000 ;
         
         	//if (rndCustSeat >2)
         
         	//	sym.$("cust_" + custSeatArr[1]).show(); 
         	//	sym.$("cust_" + custSeatArr[2]).show(); 
         	//sym.$("cust_" + custSeatArr[0]).show(); 
         	//	sym.$("cust_" + custSeatArr[3]).show(); 
         
         	//alert(custArr[custIndex]);
         	if (rndCustSeat == 0){
         //	alert("1 --" + "cust_" + rndCust);
         		sym.$("cust_" + rndCust).css({top: '18%', left: '10%', position:'absolute'});}
         	if (rndCustSeat == 1){
         //	alert("2 --" + "cust_" + rndCust);
         		sym.$("cust_" + rndCust).css({top: '30%', left: '40%', position:'absolute'});}
         	if (rndCustSeat == 2){
         	//alert( "3 --" + "cust_" + rndCust);
         		sym.$("cust_" + rndCust).css({top: '43%', left: '70%', position:'absolute'});}
         		 sym.$("cust_" + (rndCust)).show();
         
         		sym.Sounds[3].play();
         		sym.SoundsStatus[3] = "1";
         	// custTime[custIndex] = sym.randomPizzaIng();
         	// for fixed ingedrients
         	/* var rndIng = Math.floor((Math.random() * 6) + 2);
         	pizzaArr[custIndex] =  fixedpizzaIngs[rndIng];
         */	
         
         		}
         	catch(e){alert("GenCust - " + e);}
         }
         
         sym.randomPizzaIng = function ()
           {
           try{
         	  var ingFnd ="true";
         	  var ingArr =[];
         	  ingArr.push(0);
         	  ingArr.push(1);
         	  ingArr.push(2);
         	  var ingCnt = 0;
         	  while (ingFnd =="true" && ingCnt < Math.floor((Math.random() * 7) + 5) ){ // change number of ingredients here from 4-6or more
         			var rndIng = Math.floor((Math.random() * 15) + 0);
         				if (ingArr.indexOf(rndIng) == -1) {
         					ingArr.push(rndIng);
         					sym.PizzaPrice = sym.PizzaPrice + IngredientsPrice[rndIng]
         					ingCnt++;
         					//alert (ingCnt);
         					if (ingCnt == 4) ingFnd = ""; 
         			}
         		}
         		ingArr.push(16);
         		ingArr.push(17);
         		//alert (JSON.stringify(ingArr));
         		return ingArr ;
         		}
         	catch(e){alert("GenPizzaIng - " + e);}
           }
         
         
         
           sym.cutFoodItemSelection = function (x)
         		{		
         
               }
         
         
           sym.ChoppertoPlate = function ()
         		{		
               }
         
         ////////
         
         
                  $(document).ready(function(){  
         
                  try{
                  //sym.getComposition().getStage().StageChange(1);
                  if (localStorage.getItem("stage") == null)
                  	{localStorage.setItem("stage", 0) ;sym.stagecnt = 0;
                  	sym.starArr = ["null"];
                  	localStorage.setItem("stageStar",JSON.stringify(sym.starArr));
         
                  }
                  	else {
                  	//alert(localStorage.getItem("stage"));
                  	sym.stagecnt = localStorage.getItem("stage");
                  	sym.starArr = JSON.parse(localStorage.getItem("stageStar"));
         
                  	}
         
                  		if (sym.stagecnt == 15){
         						sym.starArr = ["null"];
         						localStorage.setItem("stage", 0) ;
         						localStorage.setItem("stageStar",JSON.stringify(sym.starArr)) ;
         						sym.stagecnt = 0;
         						sym.starArr = [];}
         
         
         				var tempStageCNT = 0;
                  		for ( i=1; i <= sym.stagecnt; i ++)
                  		{
         
                  			tempStageCNT ++ ;
                  			sym.$("b_bur" + i).hide(); 
                  			sym.$("burger" + i).show();
                  			if (sym.starArr[i] == 1)
                  			sym.$("star1" + i).show();
                  			else if (sym.starArr[i] == 2)
                  			sym.$("star2" + i).show();
                  			if (sym.starArr[i] == 3)
                  			sym.$("star3" + i).show();
         
                  		}
                  		sym.getSymbol("StageNoAnim_" + (tempStageCNT + 1)).play(0);
         
         
                  			c = 0; 
                  			anna_bag = "false";
                  			anna_shoes = "false";
         	 }catch(e){//alert("Ready = "+e);
         	 }
                  	  });
         
         
         
         
         sym.OnGrillPizzaBurn = function()
            { 
           // alert("Here");
             for (i=0; i< sym.getComposition().getStage().IngMasterArr.length; i++){
         									sym.$("GR_" + i ).hide();
         									sym.$("hand_4").hide();
         
         					}
         
         		sym.preparedpizzaArrGrill =[];
         		sym.ShowIngredients[10];
         
            }
         
         sym.pizzaState = "";
         sym.ShowIngredients = function(seatno)
            { 
         
         
            try{
            var tempID = "";
         	if (seatno == 11)
         	tempID = "true";
         	if (seatno == 10 || seatno == 11)
         	seatno = parseInt(sym.getSymbol("IngSeatNo").$("IngSeatNo").text()) -1 ;
         		if (sym.pizzaArr[parseInt(seatno)].length ==0)
         		{return;}
         
         			SeatpizzaArr = sym.pizzaArr[seatno];
         		if (sym.preparedpizzaArrCutPlate.length > 0)
         		{
         
         			sym.currPizzaArr = sym.preparedpizzaArrCutPlate;
         			sym.pizzaState = "cut";
         
         		}
         		else if (sym.preparedpizzaArrGrill.length > 0)
         		{
         
         			sym.currPizzaArr = sym.preparedpizzaArrGrill;
         			sym.pizzaState = "grill";
         
         
         		}
         		else if (sym.preparedpizzaArr.length > 0)
         		{
         
         			sym.currPizzaArr = sym.preparedpizzaArr;
         			sym.pizzaState = "plate";
         
         		}
         		else if(tempID == "true")
         		{
         			sym.preparedpizzaArrHandPlate = [];
         			sym.currPizzaArr = sym.preparedpizzaArrHandPlate;
         			sym.pizzaState = "hand";
         
         
         		}
         		else 
         		{
         
         			sym.currPizzaArr = [];
         			sym.pizzaState = "none";
         		}
         
         
         			for (i=0; i < SeatpizzaArr.length ; i++)
         				{
         
         
         					sym.$("ing_" + (i + 1)).attr('src',"images/ing/" + sym.IngMasterArr[SeatpizzaArr[i]] + ".png");
         //alert(SeatpizzaArr[i])
         
         					if (sym.currPizzaArr.indexOf(parseInt(SeatpizzaArr[i])) >=0){
         
         						sym.$("i_" + (i + 1)).show();
         						}
         						else{
         						sym.$("i_" + (i + 1)).hide();}
         				}
         /*
         									sym.$("ing_" + SeatpizzaArr.length).attr('src',"images/ing/grill.png");
         									sym.$("ing_" + (SeatpizzaArr.length + 1)).attr('src',"images/ing/cut.png");
         
         
         
         				if (sym.currPizzaArr.indexOf(parseInt(SeatpizzaArr[i])) >=0){
         
         						sym.$("i_" + (i + 1)).show();
         						}
         						else{
         						sym.$("i_" + (i + 1)).hide();}
         
         
         		if (sym.preparedpizzaArrCutPlate.length > 0)
         		{
         		//	sym.$("i_" + (SeatpizzaArr.length)).attr('src',"images/false_icon/crrect.png");
         			sym.$("i_" + (SeatpizzaArr.length)).show();
         		//	sym.$("i_" + (SeatpizzaArr.length + 1)).attr('src',"images/false_icon/crrect.png");
         			sym.$("i_" + (SeatpizzaArr.length + 1)).show();
         
         		}
         		else if (sym.preparedpizzaArrGrill.length > 0)
         		{
         		//	sym.$("i_" + (SeatpizzaArr.length)).attr('src',"images/false_icon/crrect.png");
         			sym.$("i_" + (SeatpizzaArr.length)).show();
         		}
         		*/
         				sym.getSymbol("IngSeatNo").$("IngSeatNo").html(seatno + 1);
         	 }catch(e){alert("INIT Err = "+e);}
         			}
         
         			//	 }catch(e){alert("INIT Err = "+e);}
         } 
         
         
         //// progress bar
         var h;
         h = $("#Stage_border1").height()  ;
         w = $("#line1").width()  ;
         
         function test()
         { 
           try{
         		sym.getComposition().getStage().$("pro1").css('top',h - (h/parseInt(pizzaTime[0]) * custTime[0]));	
         		sym.getComposition().getStage().$("pro2").css('top',h - (h/parseInt(pizzaTime[1]) * custTime[1]));	
         		sym.getComposition().getStage().$("pro3").css('top',h - (h/parseInt(pizzaTime[2]) * custTime[2]));	
         
         	//	if (sym.ongrill == "true")
         	//		sym.getComposition().getStage().$("line2").css('left',w - (w/parseInt(pizzaTime[0]) * custTime[0]));	
         
         	}catch(e){}	
         }
         
         
          //from Full_Girl2 --- after Finger on cheek ends
         
         sym.getComposition().getStage().$("pro1").show();
         //sym.getComposition().getStage().$("redbar").show();
         sym.getComposition().getStage().$("pro1").css('top',"95%");
         sym.getComposition().getStage().$("pro2").css('top',"95%");
         sym.getComposition().getStage().$("pro3").css('top',"95%");
         
         
         //////////////////////////////////- Progress Bar End

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_tomato}", "mousedown", function(sym, e) {
         
         sym.cutFoodItem = "I7";
         sym.MoveBody("10%","5%", "lefttop");
         sym.MoveBodyPlate("10%","5%", "lefttop", "IngClick");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_red_cap}", "mousedown", function(sym, e) {
         
         sym.cutFoodItem = "I5";
         sym.MoveBody("10%","5%", "lefttop");
         sym.MoveBodyPlate("10%","5%", "lefttop", "IngClick");
         
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_pizzas}", "mousedown", function(sym, e) {
         
         
         sym.$("hand_1").hide();
         
         sym.cutFoodItem = 0;
         sym.MoveBody("12%","40%", "left");
         sym.MoveBodyPlate("12%","40%", "left","IngClick");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_ham2}", "mousedown", function(sym, e) {
         
         sym.cutFoodItem = "I9";
         
         sym.MoveBody("30%","10%", "top");
         sym.MoveBodyPlate("30%","10%", "righttop", "IngClick");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rawshrimp_area}", "mousedown", function(sym, e) {
         
         sym.cutFoodItem = 15;
         sym.MoveBody("20%","10%", "left");
         sym.MoveBodyPlate("20%","10%", "left", "IngClick");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tuna_area}", "mousedown", function(sym, e) {
         
         sym.cutFoodItem = 14;
         sym.MoveBody("20%","10%", "left");
         sym.MoveBodyPlate("20%","10%", "left", "IngClick");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_glass}", "mousedown", function(sym, e) {
         sym.cutFoodItem = "glass_p";
         
         sym.MoveBody("45%","5%", "top");
         sym.MoveBodyPlate("45%","5%", "top");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mush1_area}", "mousedown", function(sym, e) {
         
         sym.cutFoodItem = "I10";
         sym.MoveBody("45%","10%", "left");
         sym.MoveBodyPlate("45%","10%", "left", "IngClick");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stick_area}", "mousedown", function(sym, e) {
         
         sym.cutFoodItem = "I11";
         sym.MoveBody("45%","10%", "top");
         sym.MoveBodyPlate("45%","10%", "righttop", "IngClick");
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cheese}", "mousedown", function(sym, e) {
         
         sym.cutFoodItem = 2;
         sym.MoveBody("30%","10%", "left");
         sym.MoveBodyPlate("30%","10%", "left", "IngClick");
         
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_leaves1_area}", "mousedown", function(sym, e) {
         
         sym.cutFoodItem = 3;
         
         sym.MoveBody("45%","10%", "top");
         sym.MoveBodyPlate("45%","10%", "righttop", "IngClick");
         
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_olive_aera}", "mousedown", function(sym, e) {
         sym.cutFoodItem = "I8";
         
         sym.MoveBody("10%","5%", "left");
         sym.MoveBodyPlate("10%","5%", "left", "IngClick");
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_green_cap_area}", "mousedown", function(sym, e) {
         
         
         sym.cutFoodItem = "I6";
         sym.MoveBody("10%","5%", "left");
         sym.MoveBodyPlate("10%","5%", "left", "IngClick");
         
         

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_cut_area}", "mousedown", function(sym, e) {
           	
           	if (isNaN(sym.cutFoodItem) && !(sym.cutFoodItem=="") ){
         		sym.$("hand_2").hide();
         		sym.MoveBody("60%","25%", "right");
         		sym.MoveBodyPlate("60%","25%", "rightdown","ToCutItem");
         	}
         
         
         
          //  sym.$(sym.cutFoodItem).show();
         	//sym.getSymbol(sym.cutFoodItem).play(0);
         
         	//sym.getComposition().getStage().setCurrentIngOnPlate = 6;
         	//sym.cutFoodItem = "";
         	//sym.$("body_ani_plate").hide();
         	//sym.$("body_ani").show();
         /*
         	try{
         if ( sym.cutFoodItem == "redC"){
         	sym.$("body_ani_plate").hide();
         	sym.$("body_ani").show();
            sym.$("red_cut").show();
         	sym.getSymbol("red_cut").play(0);
         	sym.getComposition().getStage().setCurrentIngOnPlate = 6;
         	cutFoodItem = "";
         	//alert(sym.getComposition().getStage().setCurrentIngOnPlate);
         //	sym.getComposition().getStage().setCurrentIngOnPlate1();
         }
         if ( sym.cutFoodItem == "tomato"){
         	sym.$("body_ani_plate").hide();
         	sym.$("body_ani").show();
            sym.$("tomoto_cut").show();
         	sym.getSymbol("tomoto_cut").play(0);
         	sym.getComposition().getStage().setCurrentIngOnPlate = 7;
         	cutFoodItem = "";
         	//alert(sym.getComposition().getStage().setCurrentIngOnPlate);
         //	sym.getComposition().getStage().setCurrentIngOnPlate1();
         }
         
         if ( sym.cutFoodItem == "greenC")
         {
         	sym.$("body_ani_plate").hide();
         	sym.$("body_ani").show();
            sym.$("green_cut").show();
         	sym.getSymbol("green_cut").play(0);
         	sym.getComposition().getStage().setCurrentIngOnPlate = 6;
         	cutFoodItem = "";
         }
         if ( sym.cutFoodItem == "oliv")
         {
         	sym.$("body_ani_plate").hide();
         	sym.$("body_ani").show();
            sym.$("oliver_cut").show();
         	sym.getSymbol("oliver_cut").play(0);
         	sym.getComposition().getStage().setCurrentIngOnPlate = 8;
         	cutFoodItem = "";
         }
         if ( sym.cutFoodItem == "hum"){
         	sym.$("body_ani_plate").hide();
         	sym.$("body_ani").show();
            sym.$("ham_cut").show();
         	sym.getSymbol("ham_cut").play(0);
         	sym.getComposition().getStage().setCurrentIngOnPlate = 9;
         	cutFoodItem = "";
         
         	}
         if ( sym.cutFoodItem == "mush"){
         	sym.$("body_ani_plate").hide();
         	sym.$("body_ani").show();
            sym.$("mush_cut").show();
         	sym.getSymbol("mush_cut").play(0);
         	sym.getComposition().getStage().setCurrentIngOnPlate = 10;
         	cutFoodItem = "";
         	}
         if ( sym.cutFoodItem == "stick"){
         	sym.$("body_ani_plate").hide();
         	sym.$("body_ani").show();
            sym.$("stick_cut").show();
         	sym.getSymbol("stick_cut").play(0);
         	sym.getComposition().getStage().setCurrentIngOnPlate = 11;
         	cutFoodItem = "";
         }
         }catch(e){alert(e);}
         
         */

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_leaves2_area}", "mousedown", function(sym, e) {
         
         sym.cutFoodItem = 4;
         sym.MoveBody("45%","10%", "top");
         sym.MoveBodyPlate("45%","10%", "righttop", "IngClick");
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stege1}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().StageChange(1);

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_I6}", "mousedown", function(sym, e) {
         
         if (sym.getComposition().getStage().flg6 =="true" && (!isNaN(sym.cutFoodItem) || sym.cutFoodItem =="")){
         sym.getComposition().getStage().CutItemAnimClick(6);
         sym.flg6 ="";
         //sym.$("knife").show();
         }
         else if(isNaN(sym.cutFoodItem) && sym.cutFoodItem.length>0)
         {
         
         		sym.$("hand_2").hide();
         		sym.MoveBody("60%","25%", "right");
         		sym.MoveBodyPlate("60%","25%", "rightdown","ToCutItem");
         //play anim here
         }
         
         
         
         
         
         /*
         
         alert("flg6 --" + sym.getComposition().getStage().flg6);
         if (sym.getComposition().getStage().flg6 =="true"){
         sym.getComposition().getStage().CutItemAnimClick(6);
         sym.flg6 ="";
         //sym.$("knife").show();
         }
         else
         {
         //play anim here
         }
         */

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stege2}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().StageChange(2);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stege3}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().StageChange(3);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stege4}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().StageChange(4);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stege5}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().StageChange(5);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stege6}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().StageChange(6);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stege7}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().StageChange(7);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stege8}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().StageChange(8);
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_plate_area}", "mousedown", function(sym, e) {
         			sym.MoveBody("37%","40%", "right");
         			sym.MoveBodyPlate("37%","40%", "leftdown","PlateClick");
         			sym.$("hand_5").hide();
         			
         		sym.Sounds[6].play();
               sym.SoundsStatus[6] = "1";
         
         
         
         
         
         		//sym.getComposition().getStage().PizzaOnPlate_show(); 
         //var indexElement =  sym.IngMasterArr.indexOf(sym.cutFoodItem) ;
         //sym.preparedpizzaArr=[0,1,2,4,6];
         //alert(JSON.stringify(sym.preparedpizzaArr));
         
         /*
         if (sym.cutFoodItem =="" && sym.preparedpizzaArr.length > 0 && sym.PizzaonPlateState =="")
         {
         alert("ehere " +  sym.cutFoodItem);
         			//sym.Hide_PizzaOnPlate();
                  sym.preparedpizzaArrHandPlate = sym.preparedpizzaArr;
                 // sym.preparedpizzaArr=[];
                   for (i=0; i< sym.getComposition().getStage().IngMasterArr.length; i++){
         
         					if (sym.preparedpizzaArrHandPlate.indexOf(i) >= 0){
         
         				//	alert(sym.getSymbol("body_ani_plate").$("PHL_" + i ));
         					sym.getSymbol("body_ani_plate").$("PH2_" + i ).show();
         
         					sym.$("PP_" + i ).hide();
         				}
         				sym.PizzaonPlateState ="true";
         				sym.$("body_ani_plate").show();
         				sym.$("body_ani").hide();
         
         	}
         
         
         }
         else if (sym.cutFoodItem =="" && sym.preparedpizzaArrHandPlate.length > 0 && sym.PizzaonPlateState =="true" )
         {
         alert("Back to Plate --" + sym.PizzaonPlateState)
         			//sym.Hide_PizzaOnHandPlate();
                  sym.preparedpizzaArr = sym.preparedpizzaArrHandPlate;
                  sym.preparedpizzaArrHandPlate=[];
                  cutFoodItem = "";
                   for (i=0; i< sym.getComposition().getStage().IngMasterArr.length; i++){
         					if (sym.preparedpizzaArr.indexOf(i) >= 0){
         					sym.$("PP_" + i ).show();
         					sym.getSymbol("body_ani_plate").$("PH2_" + i ).hide();
         				}
         
         			}
         							sym.PizzaonPlateState ="";
         			sym.$("body_ani_plate").hide();
         			sym.$("body_ani").show();
         
         }
         else if (sym.preparedpizzaArr.indexOf(sym.cutFoodItem) == -1) {
         alert(sym.cutFoodItem)
         		if (isNaN(sym.cutFoodItem))
         		{
         				sym.$("hand_2").show();
         		}
         		else
         		{
         			sym.getComposition().getStage().buildPrepareArray(sym.cutFoodItem);
         			sym.MoveBody("45%","45%", "right");
         			sym.MoveBodyPlate("45%","45%", "rightdown");
         			sym.$("PP_" + sym.cutFoodItem).show();
         			sym.cutFoodItem ="";
         			sym.$("body_ani_plate").hide();
         			sym.$("body_ani").show();
         			}
         		}
         
         
         //}
         */
         //alert(sym.cutFoodItem);
         
         		/*
         if ( sym.cutFoodItem =="piza"){
         
         		if (sym.preparedpizzaArr.indexOf(0) == -1) {
         			sym.$("body_ani_plate").hide();
         			sym.$("body_ani").show();
         			sym.$("piza_bread").show();
         			sym.getComposition().getStage().buildPrepareArray(0);
         			sym.$("tomato_sauace_a").show();
         			sym.$("grill_area2").show();
         
         			//sym.$("i_1").show();
         
         		}
         	}
         if ( sym.cutFoodItem =="CHE"){
         		if (sym.preparedpizzaArr.indexOf(1) == -1)
         		{
         		 sym.$("body_ani_plate").hide();
         		 sym.$("body_ani").show();
         		 sym.$("chse2").show();
         		 sym.getComposition().getStage().buildPrepareArray(1);
         		 }
         	} //call on ing on pizza
         if ( sym.cutFoodItem =="gren_cap"){
         		if (sym.preparedpizzaArr.indexOf(5) == -1) {
         		  sym.$("body_ani_plate").hide();
         		  sym.$("body_ani").show();
                 sym.$("gren_cap").show();
          		  sym.getComposition().getStage().buildPrepareArray(5);
         		  }
           }
         if ( sym.cutFoodItem =="red_cap"){
         	if (sym.preparedpizzaArr.indexOf(4) == -1) {
         		sym.$("body_ani_plate").hide();
         		sym.$("body_ani").show();
         		sym.$("red_caps").show();
         		sym.getComposition().getStage().buildPrepareArray(4);
         		}
            }
         if ( sym.cutFoodItem =="ham"){
         	if (sym.preparedpizzaArr.indexOf(8) == -1) {
         		sym.$("body_ani_plate").hide();
         		sym.$("body_ani").show();
         		sym.$("ham3").show();
         		sym.getComposition().getStage().buildPrepareArray(8);
         		}
            }
         if ( sym.cutFoodItem =="lea1"){
         		if (sym.preparedpizzaArr.indexOf(2) == -1) {
         			sym.$("body_ani_plate").hide();
         			sym.$("body_ani").show();
         			sym.$("lea1").show();
         			sym.getComposition().getStage().buildPrepareArray(2);
         			}
            }
         if ( sym.cutFoodItem =="lea2"){
         		if (sym.preparedpizzaArr.indexOf(3) == -1) {
         			sym.$("body_ani_plate").hide();
         			sym.$("body_ani").show();
         			sym.$("lea2").show();
         			sym.getComposition().getStage().buildPrepareArray(3);
         			}
            }
         if ( sym.cutFoodItem =="MUS"){
         	if (sym.preparedpizzaArr.indexOf(9) == -1) {
         		sym.$("body_ani_plate").hide();
         		sym.$("body_ani").show();
         		sym.$("mus").show();
         		sym.getComposition().getStage().buildPrepareArray(9);
         		}
            }
         if ( sym.cutFoodItem =="oli"){
         	if (sym.preparedpizzaArr.indexOf(7) == -1) {
         		sym.$("body_ani_plate").hide();
         		sym.$("body_ani").show();
         		sym.$("oli").show();
         		sym.getComposition().getStage().buildPrepareArray(7);
         		}
            }
         if ( sym.cutFoodItem =="toma"){
         if (sym.preparedpizzaArr.indexOf(6) == -1) {
         	sym.$("body_ani_plate").hide();
         	sym.$("body_ani").show();
            sym.$("toma").show();
            sym.getComposition().getStage().buildPrepareArray(6);
            }
            }
         if ( sym.cutFoodItem =="shri"){
         		if (sym.preparedpizzaArr.indexOf(14) == -1) {
         			sym.$("body_ani_plate").hide();
         			sym.$("body_ani").show();
         			sym.$("shrimp").show();
         			sym.getComposition().getStage().buildPrepareArray(14);}
            }
         if ( sym.cutFoodItem =="stic"){
         		if (sym.preparedpizzaArr.indexOf(10) == -1) {
         		sym.$("body_ani_plate").hide();
         		sym.$("body_ani").show();
         		sym.$("stick2").show();
         		sym.getComposition().getStage().buildPrepareArray(10);}
            }
         
         if (sym.cutFoodItem =="tuna"){
         		if (sym.preparedpizzaArr.indexOf(13) == -1) {
         		sym.$("body_ani_plate").hide();
         		sym.$("body_ani").show();
         			sym.$("tuna2").show();
         			sym.getComposition().getStage().buildPrepareArray(13);}
            }
         */
         //sym.getSymbol("body_ani_plate").$("blankimageonplate").hide();
         //sym.getSymbol("body_ani_plate").$("blankimageonplate2").hide();
         
         //sym.getSymbol("body_ani_plate").$("plate3").hide();
         //sym.getSymbol("body_ani_plate").$("plate33").hide();
         
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_hint_sym}", "mousedown", function(sym, e) {
         
         //sym.getComposition().getStage().TempHint();
         
         
         //sym.ShowIngredients(0);
         
         //sym.getSymbol("body_ani_plate").play();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_cust_5}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.getComposition().getStage().foodServe(5);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cust_4}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.getComposition().getStage().foodServe(4);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cust_3}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.getComposition().getStage().foodServe(3);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cust_2}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().foodServe(2);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cust_1}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.getComposition().getStage().foodServe(1);

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_game}", "mousedown", function(sym, e) {
         	
         	if (sym.stagecnt == 15){
         						sym.starArr = ["null"];
         						localStorage.setItem("stage", 0) ;
         						localStorage.setItem("stageStar",JSON.stringify(sym.starArr)) ;
         						sym.stagecnt = 0;
         	  					sym.getSymbol("StageNoAnim_15").stop(0);
         	
         						for ( i=1; i <= 15; i ++)
                  		{
         						sym.$("star1" + i).hide();
         						sym.$("star2" + i).hide();
         						sym.$("star3" + i).hide();
         						sym.$("b_bur" + i).show(); 
                  			sym.$("burger" + i).hide();
                  		}
         
         						}
         
         sym.$("Fist_screen").show();
         sym.getComposition().getStage().StageNoAnim();
         
         sym.$("Scend_screen").hide();
         sym.$("stage_end").hide();
         sym.$("game").hide();
         
         	var tempStageCNT1 = 0;
                  		for ( i=1; i <= sym.stagecnt; i ++)
                  		{
                  			tempStageCNT1 ++ ;
                  			sym.$("b_bur" + i).hide(); 
                  			sym.$("burger" + i).show();
                  			if (sym.starArr[i] == 1)
                  			sym.$("star1" + i).show();
                  			else if (sym.starArr[i] == 2)
                  			sym.$("star2" + i).show();
                  			if (sym.starArr[i] == 3)
                  			sym.$("star3" + i).show();
           					  	sym.getSymbol("StageNoAnim_" + (tempStageCNT1)).stop(0);
         
         
                  		}
                  		sym.getSymbol("StageNoAnim_" + (tempStageCNT1 + 1)).play(0);
         /*
         
         
         var tempStageCNT1 = 0;
         		for ( i=1; i <= sym.stagecnt; i ++)
         		{
         			tempStageCNT1 ++ ;
         			sym.$("b_bur" + i).hide(); 
         			sym.$("burger" + i).show();
         		  	sym.getSymbol("StageNoAnim_" + (tempStageCNT1)).stop(0);
         
         
         		}
         		sym.getSymbol("StageNoAnim_" + (tempStageCNT1 + 1)).play(0);
         */

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_stege15}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().StageChange(15);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stege14}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().StageChange(14);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stege13}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().StageChange(13);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stege12}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().StageChange(12);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stege11}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().StageChange(11);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stege10}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().StageChange(10);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stege9}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().StageChange(9);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cutter1}", "mousedown", function(sym, e) {
         	/*
         	sym.MoveBody("60%","40%", "right");
         	sym.MoveBodyPlate("60%","40%", "rightdown");
         	
         if ( sym.cutFoodItem =="pizzaforcut")
         {
         sym.$("cutter1").hide();
         sym.$("pizza_cut").show();
         sym.getSymbol("pizza_cut").play(0);
         
         }
         sym.cutFoodItem = "pizzaforcut";
         */

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_burger1}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().StageChange(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_R_chilli}", "mousedown", function(sym, e) {
         	sym.cutFoodItem = 12;
         sym.MoveBody(sym.GirlleftPosition,sym.GirlTopPosition, "");
         sym.MoveBodyPlate(sym.GirlleftPosition,sym.GirlTopPosition, "","PlateClick");
         	
         sym.getSymbol("R_chilli").play(0);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_G_chilli}", "mousedown", function(sym, e) {
         	sym.cutFoodItem = 13;
         	
         sym.getSymbol("G_chilli").play(0);
         
         
         sym.MoveBody(sym.GirlleftPosition,sym.GirlTopPosition, "");
         sym.MoveBodyPlate(sym.GirlleftPosition,sym.GirlTopPosition, "","PlateClick");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_grill_area}", "mousedown", function(sym, e) {
         
         //sym.MoveBody("12%","40%", "left");
         //sym.MoveBodyPlate("12%","40%", "left");
         sym.MoveBody(sym.GirlleftPosition,sym.GirlTopPosition);
         sym.MoveBodyPlate(sym.GirlleftPosition,sym.GirlTopPosition);
         
         
         try{
         var tmppreparedpizzaArr = JSON.stringify(sym.preparedpizzaArr);
         tmppreparedpizzaArr = JSON.parse(tmppreparedpizzaArr);
         tmppreparedpizzaArr.push(16);
         tmppreparedpizzaArr.push(17);
         //sym.preparedpizzaArr =[0,1,2,4,6,7,5];
         
         var seatNo = parseInt(sym.$("IngSeatNo").text()) -1 ;
         //if (1==1)
         if (sym.preparedpizzaArr.length > 0  && (sym.getComposition().getStage().arraysEqual(sym.pizzaArr[seatNo],tmppreparedpizzaArr)))
         				{
         							//sym.Hide_PizzaOnPlate();
         
         							sym.preparedpizzaArrGrill = sym.preparedpizzaArr;
         							sym.preparedpizzaArrGrill.push(16);
         						   sym.preparedpizzaArr=[];
         							 for (i=0; i< sym.getComposition().getStage().IngMasterArr.length; i++){
         
         									if (sym.preparedpizzaArrGrill.indexOf(i) >= 0){
         
         									sym.$("GR_" + i ).show();
         									sym.$("PP_" + i ).hide();
         								}
         					}
         						sym.$("red_ani").show();
         						sym.getSymbol("red_ani").play(0);
         						sym.$("time_bar").show();
         						sym.getSymbol("time_bar").play(0);
         						sym.$("hotgrll").show();
         						sym.getSymbol("hotgrll").play(0);
         						//sym.PizzaonPlateState ="";
         
           					sym.ShowIngredients(seatNo);
         
         						sym.Sounds[4].play();
         						sym.SoundsStatus[4] = "1";
         					//sym.ongrill = "true";
         
         				}
         
         else
         {
         sym.$("hand_5").show();
         
         //alert("Put All Animation here");
         }
         }
         catch(e){alert(e);}
         
         
         //sym.Sounds[6].play();
         //sym.SoundsStatus[6] = "1";
         //alert ("qqq  " + e);}

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cut_pizza}", "mousedown", function(sym, e) {
         
         //sym.grillFlg = "true";
         if (sym.grillFlg == "true") 
         {
         sym.$("hand_4").hide();	
         sym.MoveBody("60%","25%", "right");
         sym.MoveBodyPlate("60%","25%", "rightdown","CutPizzaClick");
         }
         else 
         {
         //play bar anim here
         
         }
         
         
         //sym.Sounds[4].pause();
         //sym.SoundsStatus[4] = "0";
         
         
         
         //sym.getComposition().getStage().Hide_PizzaOnGrill(); 
         //sym.$("cut_pizza").hide();
         //sym.$("red_ani").hide();	
         ///sym.$("chilli_area").hide();
         
         
         //sym.preparedpizzaArrCutPlate = preparedpizzaArrHandPlate;
         //preparedpizzaArrHandPlate = [];

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dustbin_area}", "mousedown", function(sym, e) {
         
         //sym.getComposition().getStage().clearPrepareArray();
         
         sym.$("hand_3").hide();
         sym.MoveBody("45%","20%", "top");
         sym.MoveBodyPlate("45%","20%", "top", "DustBinClick");

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_play1}", "mousedown", function(sym, e) {
         sym.$("stage_start").hide();
         sym.$("Fist_screen").show();

         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_home}", "mousedown", function(sym, e) {
         sym.$("pause_gup").hide();
         sym.$("Scend_screen").hide();
         sym.$("Fist_screen").show();
         
         sym.getComposition().getStage().StageChangeClear();
         
         sym.gameState = "";

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_play2}", "mousedown", function(sym, e) {
         sym.$("pause_gup").hide();
         //sym.$("Scend_screen").show();
         
         sym.getComposition().getStage().StageChange();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Pause}", "mousedown", function(sym, e) {
         sym.gameState ="pause";
         sym.$("pause_gup").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group16}", "mousedown", function(sym, e) {
         
         
         sym.getComposition().getStage().ShowIngredients(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_red_cap}", "mousedown", function(sym, e) {
         sym.getSymbol("body_ani_plate").getSymbol("Left_down_p").$("blankimageonplate").attr('src',"images/plate_img/red_cap_p.png")
         sym.getSymbol("body_ani_plate").getSymbol("Right_down_p").$("blankimageonplate").attr('src',"images/plate_img/red_cap_p.png")
         sym.getSymbol("body_ani_plate").getSymbol("Left_backUp_p").$("blankimageonplate").attr('src',"images/plate_img/red_cap_p.png")
         sym.getSymbol("body_ani_plate").getSymbol("Right_backUp_p").$("blankimageonplate").attr('src',"images/plate_img/red_cap_p.png")
         sym.getSymbol("body_ani_plate").$("blankimageonplate").attr('src',"images/plate_img/red_cap_p.png")
         sym.getSymbol("body_ani_plate").$("blankimageonplate2").attr('src',"images/plate_img/red_cap_p.png")
         
         
         sym.$("body_ani_plate").show();
         sym.$("body_ani").hide();
         sym.$("hand_2").show();
        // sym.cutFoodItem = 5;
         
         sym.$("plate_area").show();
         
         sym.getSymbol("body_ani_plate").$("b25").show();
         sym.getSymbol("body_ani_plate").$("plate4").show();
         sym.getSymbol("body_ani_plate").play(6000);
         sym.getSymbol("body_ani_plate").$("olive2").hide();
         sym.getSymbol("body_ani_plate").$("tomato2").hide();
         sym.getSymbol("body_ani_plate").$("red_cap2").show();
         sym.getSymbol("body_ani_plate").$("green_cap2").hide();
         sym.getSymbol("body_ani_plate").$("pizzabase").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_green_cap_area}", "mousedown", function(sym, e) {
         
         
         sym.getSymbol("body_ani_plate").getSymbol("Left_down_p").$("blankimageonplate").attr('src',"images/plate_img/green_cap_p.png")
         sym.getSymbol("body_ani_plate").getSymbol("Right_down_p").$("blankimageonplate").attr('src',"images/plate_img/green_cap_p.png")
         sym.getSymbol("body_ani_plate").getSymbol("Left_backUp_p").$("blankimageonplate").attr('src',"images/plate_img/green_cap_p.png")
         sym.getSymbol("body_ani_plate").getSymbol("Right_backUp_p").$("blankimageonplate").attr('src',"images/plate_img/green_cap_p.png")
         sym.getSymbol("body_ani_plate").$("blankimageonplate").attr('src',"images/plate_img/green_cap_p.png")
         sym.getSymbol("body_ani_plate").$("blankimageonplate2").attr('src',"images/plate_img/green_cap_p.png")
         
         sym.getSymbol("body_ani_plate").$("blankimageonplate").hide();
         sym.getSymbol("body_ani_plate").$("blankimageonplate2").hide();
         
      //   sym.cutFoodItem = 6;
         
         sym.$("body_ani_plate").show();
         sym.$("body_ani").hide();
         sym.$("hand_2").show();
         sym.$("plate_area").show();
         
         
         
         sym.getSymbol("body_ani_plate").$("b25").show();
         sym.getSymbol("body_ani_plate").$("plate4").show();
         sym.getSymbol("body_ani_plate").play(6000);
         sym.getSymbol("body_ani_plate").$("olive2").hide();
         sym.getSymbol("body_ani_plate").$("tomato2").hide();
         sym.getSymbol("body_ani_plate").$("red_cap2").hide();
         sym.getSymbol("body_ani_plate").$("green_cap2").show();
         sym.getSymbol("body_ani_plate").$("pizzabase").hide();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group17}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().ShowIngredients(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Group18}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().ShowIngredients(2);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pizzacuttingplate}", "mousedown", function(sym, e) {
         
         //if (sym.preparedpizzaArrCutPlate.length > 0)

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_platform_1}", "mousedown", function(sym, e) {
         sym.MoveBody("45%","45%", "right");
         sym.MoveBodyPlate("45%","45%", "rightdown");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_I5}", "mousedown", function(sym, e) {
         
         if (sym.getComposition().getStage().flg5 =="true" && (!isNaN(sym.cutFoodItem) || sym.cutFoodItem =="")){
         sym.getComposition().getStage().CutItemAnimClick(5);
         sym.flg5 ="";
         //sym.$("knife").show();
         }
         else if(isNaN(sym.cutFoodItem) && sym.cutFoodItem.length>0)
         {
         		sym.$("hand_2").hide();
         		sym.MoveBody("60%","25%", "right");
         		sym.MoveBodyPlate("60%","25%", "rightdown","ToCutItem");
         //play anim here
         }
         
         
         
         /*
         
         alert("flg5 --" + sym.getComposition().getStage().flg5);
         if (sym.getComposition().getStage().flg5 =="true"){
         sym.getComposition().getStage().CutItemAnimClick(5);
         sym.flg5 ="";
         //sym.$("knife").show();
         }
         else
         {
         //play anim here
         }
         
         */

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_I7}", "mousedown", function(sym, e) {
         
         if (sym.getComposition().getStage().flg7 =="true" && (!isNaN(sym.cutFoodItem) || sym.cutFoodItem =="")){
         sym.getComposition().getStage().CutItemAnimClick(7);
         sym.flg7 ="";
         //sym.$("knife").show();
         }
         else if(isNaN(sym.cutFoodItem) && sym.cutFoodItem.length>0)
         {
         		sym.$("hand_2").hide();
         		sym.MoveBody("60%","25%", "right");
         		sym.MoveBodyPlate("60%","25%", "rightdown","ToCutItem");
         //play anim here
         }
         
         
         
         /*
         
         alert("flg7 --" + sym.getComposition().getStage().flg7);
         if (sym.getComposition().getStage().flg7 =="true"){
         sym.getComposition().getStage().CutItemAnimClick(7);
         sym.flg7 ="";
         //sym.$("knife").show();
         }
         else
         {
         //play anim here
         }
         
         */

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_I8}", "mousedown", function(sym, e) {
         
         if (sym.getComposition().getStage().flg8 =="true" && (!isNaN(sym.cutFoodItem) || sym.cutFoodItem =="")){
         sym.getComposition().getStage().CutItemAnimClick(8);
         sym.flg8 ="";
         //sym.$("knife").show();
         }
         else if(isNaN(sym.cutFoodItem) && sym.cutFoodItem.length>0)
         {
         		sym.$("hand_2").hide();
         		sym.MoveBody("60%","25%", "right");
         		sym.MoveBodyPlate("60%","25%", "rightdown","ToCutItem");
         //play anim here
         }
         
         
         
         
         /*
         
         alert("flg8 --" + sym.getComposition().getStage().flg8);
         if (sym.getComposition().getStage().flg8 =="true"){
         sym.getComposition().getStage().CutItemAnimClick(8);
         sym.flg8 ="";
         //sym.$("knife").show();
         }
         else
         {
         //play anim here
         }
         
         */

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_I10}", "mousedown", function(sym, e) {
         
         if (sym.getComposition().getStage().flg10 =="true" && (!isNaN(sym.cutFoodItem) || sym.cutFoodItem =="")){
         sym.getComposition().getStage().CutItemAnimClick(10);
         sym.flg10 ="";
         //sym.$("knife").show();
         }
         else if(isNaN(sym.cutFoodItem) && sym.cutFoodItem.length>0)
         {
         		sym.$("hand_2").hide();
         		sym.MoveBody("60%","25%", "right");
         		sym.MoveBodyPlate("60%","25%", "rightdown","ToCutItem");
         //play anim here
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_I11}", "mousedown", function(sym, e) {
         
         if (sym.getComposition().getStage().flg11 =="true" && (!isNaN(sym.cutFoodItem) || sym.cutFoodItem =="")){
         sym.getComposition().getStage().CutItemAnimClick(11);
         sym.flg11 ="";
         //sym.$("knife").show();
         }
         else if(isNaN(sym.cutFoodItem) && sym.cutFoodItem.length>0)
         {
         		sym.$("hand_2").hide();
         		sym.MoveBody("60%","25%", "right");
         		sym.MoveBodyPlate("60%","25%", "rightdown","ToCutItem");
         //play anim here
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_I9}", "mousedown", function(sym, e) {
         
         if (sym.getComposition().getStage().flg9 =="true" && (!isNaN(sym.cutFoodItem) || sym.cutFoodItem =="")){
         sym.getComposition().getStage().CutItemAnimClick(9);
         sym.flg9 ="";
         //sym.$("knife").show();
         }
         else if(isNaN(sym.cutFoodItem) && sym.cutFoodItem.length>0)
         {
         		sym.$("hand_2").hide();
         		sym.MoveBody("60%","25%", "right");
         		sym.MoveBodyPlate("60%","25%", "rightdown","ToCutItem");
         //play anim here
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cust_6}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().foodServe(6);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cust_7}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().foodServe(7);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_cust_8}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().foodServe(8);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tomato_sauace}", "mousedown", function(sym, e) {
         sym.MoveBody(sym.GirlleftPosition,sym.GirlTopPosition, "");
         sym.MoveBodyPlate(sym.GirlleftPosition,sym.GirlTopPosition, "","SauceIngClick");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pause}", "mousedown", function(sym, e) {
         try{
         sym.getComposition().getStage().pauseclick();
         }catch(e){/*alert(e);*/}
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/ingClick.mp3");
         }
         

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

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'green_cyt'
   (function(symbolName) {   
   
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().flg6 ="";
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3858, function(sym, e) {
         
         sym.getComposition().getStage().flg6 ="true";
         sym.getComposition().getStage().$("knife").show();

      });
      //Edge binding end

   })("I6");
   //Edge symbol end:'I6'

   //=========================================================
   
   //Edge symbol: 'green_cyt_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.getComposition().getStage().$("knife").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.getComposition().getStage().$("cut_area2").hide();

      });
      //Edge binding end

   })("red_cut");
   //Edge symbol end:'red_cut'

   //=========================================================
   
   //Edge symbol: 'dustbin'
   (function(symbolName) {   
   
   })("dustbin");
   //Edge symbol end:'dustbin'

   //=========================================================
   
   //Edge symbol: 'tomoto_cut_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.getComposition().getStage().$("knife").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.getComposition().getStage().$("cut_area2").hide();

      });
      //Edge binding end

   })("stick_cut");
   //Edge symbol end:'stick_cut'

   //=========================================================
   
   //Edge symbol: 'tomoto_cut_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.getComposition().getStage().$("knife").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.getComposition().getStage().$("cut_area2").hide();

      });
      //Edge binding end

   })("ham_cut");
   //Edge symbol end:'ham_cut'

   //=========================================================
   
   //Edge symbol: 'tomato_sauace'
   (function(symbolName) {   
   
      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         //sym.getComposition().getStage().$("PP_1").show();

      });
      //Edge binding end

   })("tomato_sauace");
   //Edge symbol end:'tomato_sauace'

   //=========================================================
   
   //Edge symbol: 'sauce_pizza'
   (function(symbolName) {   
   
   })("sauce_pizza");
   //Edge symbol end:'sauce_pizza'

   //=========================================================
   
   //Edge symbol: 'body_ani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 861, function(sym, e) {
         sym.stop();
         
         //sym.getComposition().getStage().getSymbol("body_ani").getSymbol("Left_down_p").stop(500);
         //sym.getComposition().getStage().getSymbol("body_ani").getSymbol("Left_down").stop(500);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1713, function(sym, e) {
         sym.stop();
         //sym.getComposition().getStage().getSymbol("body_ani").getSymbol("Right_down_p").stop(500);
         //sym.getComposition().getStage().getSymbol("body_ani").getSymbol("Right_down").stop(500);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2334, function(sym, e) {
         sym.stop();
         //sym.getComposition().getStage().getSymbol("body_ani").getSymbol("Left_backUp_p").stop(500);
         //sym.getComposition().getStage().getSymbol("body_ani").getSymbol("Left_backUp").stop(500);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3149, function(sym, e) {
         sym.stop();
         //sym.getComposition().getStage().getSymbol("body_ani").getSymbol("Right_backUp").stop(500);
         //sym.getComposition().getStage().getSymbol("body_ani").getSymbol("Right_backUp_p").stop(500);

      });
      //Edge binding end

      

      

      

      

   })("body_ani");
   //Edge symbol end:'body_ani'

   //=========================================================
   
   //Edge symbol: 'b17and16'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 631, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("b17and16");
   //Edge symbol end:'b17and16'

   //=========================================================
   
   //Edge symbol: 'back_up_R'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 423, function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 147, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

   })("back_up_R");
   //Edge symbol end:'back_up_R'

   //=========================================================
   
   //Edge symbol: 'back_up_W'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 403, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("back_up_W");
   //Edge symbol end:'back_up_W'

   //=========================================================
   
   //Edge symbol: 'b18andb19_F'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 647, function(sym, e) {
         sym.play(250);
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 154, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("b18andb19_F");
   //Edge symbol end:'b18andb19_F'

   //=========================================================
   
   //Edge symbol: 'back_up_L'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 402, function(sym, e) {
         sym.play(250);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 125, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("back_up_L");
   //Edge symbol end:'back_up_L'

   //=========================================================
   
   //Edge symbol: 'b17and16_F'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 394, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("b17and16_F");
   //Edge symbol end:'b17and16_F'

   //=========================================================
   
   //Edge symbol: 'b18andb19'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 450, function(sym, e) {
         sym.play(250);
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 112, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("b18andb19");
   //Edge symbol end:'b18andb19'

   //=========================================================
   
   //Edge symbol: 'eye2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("eye2");
   //Edge symbol end:'eye2'

   //=========================================================
   
   //Edge symbol: 'cust_2'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(2000);

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("cust_2");
   //Edge symbol end:'cust_2'

   //=========================================================
   
   //Edge symbol: 'cust_4'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(2000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("cust_4");
   //Edge symbol end:'cust_4'

   //=========================================================
   
   //Edge symbol: 'eye4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2392, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("eye4");
   //Edge symbol end:'eye4'

   //=========================================================
   
   //Edge symbol: 'cust_1'
   (function(symbolName) {   
   
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(2000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("cust_1");
   //Edge symbol end:'cust_1'

   //=========================================================
   
   //Edge symbol: 'body_ani_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         
         //sym.$("PizzaOnHendGrp1").show();
         
         sym.$("blankimageonplate").show();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();
         sym.$("PizzaOnHendGrp2").show();
         
         sym.$("blankimageonplate2").show();

      });
         //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();
         sym.$("PizzaOnHendGrp1").show();
         
         sym.$("blankimageonplate").show();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         sym.stop();
         sym.$("PizzaOnHendGrp1").show();
         
         sym.$("blankimageonplate").show();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6121, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      })("body_ani_plate");
   //Edge symbol end:'body_ani_plate'

   //=========================================================
   
   //Edge symbol: 'hand_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("hand_1");
   //Edge symbol end:'hand_1'

   //=========================================================
   
   //Edge symbol: 'eye1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("eye1");
   //Edge symbol end:'eye1'

   //=========================================================
   
   //Edge symbol: 'hotgrll'
   (function(symbolName) {   
   
      

   })("hotgrll");
   //Edge symbol end:'hotgrll'

   //=========================================================
   
   //Edge symbol: 'hint_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("hint_sym");
   //Edge symbol end:'hint_sym'

   //=========================================================
   
   //Edge symbol: 'Wrong'
   (function(symbolName) {   
   
      

   })("Wrong");
   //Edge symbol end:'Wrong'

   //=========================================================
   
   //Edge symbol: 'cust_5'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(2000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      })("cust_5");
   //Edge symbol end:'cust_5'

   //=========================================================
   
   //Edge symbol: 'cust_3'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(2000);

      });
      //Edge binding end

      })("cust_3");
   //Edge symbol end:'cust_3'

   //=========================================================
   
   //Edge symbol: 'Earning_ani'
   (function(symbolName) {   
   
   })("Earning_ani");
   //Edge symbol end:'Earning_ani'

   //=========================================================
   
   //Edge symbol: 'TotalEar_ani'
   (function(symbolName) {   
   
   })("TotalEar_ani");
   //Edge symbol end:'TotalEar_ani'

   //=========================================================
   
   //Edge symbol: 'Quction_ani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Quction_ani");
   //Edge symbol end:'Quction_ani'

   //=========================================================
   
   //Edge symbol: 'strar_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().$("game").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         	   //------------ sym.Sounds[5].play();
                //---------------sym.SoundsStatus[5] = "1";

      });
      //Edge binding end

   })("strar_1");
   //Edge symbol end:'strar_1'

   //=========================================================
   
   //Edge symbol: 'stage_scr'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.getComposition().getStage().$("StagenoTxt").show();
         //sym.getComposition().getStage().$("game").show();
         
         //sym.getComposition().getStage().$("back2").show();

      });
      //Edge binding end

   })("stage_scr");
   //Edge symbol end:'stage_scr'

   //=========================================================
   
   //Edge symbol: 'pizza_cut'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         
         
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().$("cutter1").show();
         sym.getComposition().getStage().$("cut_pizzaOut").show();
         sym.getComposition().getStage().$("hand_4").show();

      });
      //Edge binding end

   })("pizza_cut");
   //Edge symbol end:'pizza_cut'

   //=========================================================
   
   //Edge symbol: 'StageNoAnim_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("StageNoAnim_1");
   //Edge symbol end:'StageNoAnim_1'

   //=========================================================
   
   //Edge symbol: 'StageNoAnim_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("StageNoAnim_2");
   //Edge symbol end:'StageNoAnim_2'

   //=========================================================
   
   //Edge symbol: 'StageNoAnim_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("StageNoAnim_3");
   //Edge symbol end:'StageNoAnim_3'

   //=========================================================
   
   //Edge symbol: 'StageNoAnim_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("StageNoAnim_4");
   //Edge symbol end:'StageNoAnim_4'

   //=========================================================
   
   //Edge symbol: 'StageNoAnim_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("StageNoAnim_5");
   //Edge symbol end:'StageNoAnim_5'

   //=========================================================
   
   //Edge symbol: 'StageNoAnim_6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("StageNoAnim_6");
   //Edge symbol end:'StageNoAnim_6'

   //=========================================================
   
   //Edge symbol: 'StageNoAnim_7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("StageNoAnim_7");
   //Edge symbol end:'StageNoAnim_7'

   //=========================================================
   
   //Edge symbol: 'StageNoAnim_8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("StageNoAnim_8");
   //Edge symbol end:'StageNoAnim_8'

   //=========================================================
   
   //Edge symbol: 'StageNoAnim_9'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("StageNoAnim_9");
   //Edge symbol end:'StageNoAnim_9'

   //=========================================================
   
   //Edge symbol: 'StageNoAnim_10'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("StageNoAnim_10");
   //Edge symbol end:'StageNoAnim_10'

   //=========================================================
   
   //Edge symbol: 'StageNoAnim_11'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("StageNoAnim_11");
   //Edge symbol end:'StageNoAnim_11'

   //=========================================================
   
   //Edge symbol: 'StageNoAnim_12'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("StageNoAnim_12");
   //Edge symbol end:'StageNoAnim_12'

   //=========================================================
   
   //Edge symbol: 'StageNoAnim_13'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("StageNoAnim_13");
   //Edge symbol end:'StageNoAnim_13'

   //=========================================================
   
   //Edge symbol: 'StageNoAnim_14'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("StageNoAnim_14");
   //Edge symbol end:'StageNoAnim_14'

   //=========================================================
   
   //Edge symbol: 'StageNoAnim_15'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1660, function(sym, e) {
         sym.play(1000);

      });
      //Edge binding end

   })("StageNoAnim_15");
   //Edge symbol end:'StageNoAnim_15'

   //=========================================================
   
   //Edge symbol: 'R_chilli'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1082, function(sym, e) {
         sym.getComposition().getStage().$("Red_chili").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("R_chilli");
   //Edge symbol end:'R_chilli'

   //=========================================================
   
   //Edge symbol: 'R_chilli_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1082, function(sym, e) {
         sym.getComposition().getStage().$("Green_chilli").show();

      });
      //Edge binding end

   })("G_chilli");
   //Edge symbol end:'G_chilli'

   //=========================================================
   
   //Edge symbol: 'strar_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().$("game").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         	   //------------- sym.Sounds[5].play();
              //----------------  sym.SoundsStatus[5] = "1";

      });
      //Edge binding end

      })("strar_2");
   //Edge symbol end:'strar_2'

   //=========================================================
   
   //Edge symbol: 'strar_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().$("game").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         	  //----------  sym.Sounds[5].play();
             //----------------   sym.SoundsStatus[5] = "1";

      });
      //Edge binding end

      })("strar_3");
   //Edge symbol end:'strar_3'

   //=========================================================
   
   //Edge symbol: 'red_ani'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         
         sym.getComposition().getStage().OnGrillPizzaBurn();

      });
      //Edge binding end

      

   })("red_ani");
   //Edge symbol end:'red_ani'

   //=========================================================
   
   //Edge symbol: 'time_bar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         
         
         sym.getComposition().getStage().grillFlg = "true";
         sym.getComposition().getStage().$("hand_4").show();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.getComposition().getStage().grillFlg ="";

      });
      //Edge binding end

   })("time_bar");
   //Edge symbol end:'time_bar'

   //=========================================================
   
   //Edge symbol: 'play'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("play");
   //Edge symbol end:'play'

   //=========================================================
   
   //Edge symbol: 'strar_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().$("game").show();
         

      });
         //Edge binding end

      })("No_strar");
   //Edge symbol end:'No_strar'

   //=========================================================
   
   //Edge symbol: 'back_up_R_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 302, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("back_up_R_1");
   //Edge symbol end:'back_up_R_1'

   //=========================================================
   
   //Edge symbol: 'b18andb19_F_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 605, function(sym, e) {
         sym.play();
         
         

      });
      //Edge binding end

   })("b18andb19_F_1");
   //Edge symbol end:'b18andb19_F_1'

   //=========================================================
   
   //Edge symbol: 'back_up_L_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 293, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("back_up_L_1");
   //Edge symbol end:'back_up_L_1'

   //=========================================================
   
   //Edge symbol: 'body_ani_plate_1'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         
         
         
                          

      });
      //Edge binding end

   })("body_ani_plate_1");
   //Edge symbol end:'body_ani_plate_1'

   //=========================================================
   
   //Edge symbol: 'b18andb19_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 397, function(sym, e) {
         sym.play(0);
         
         

      });
      //Edge binding end

   })("b18andb19_1");
   //Edge symbol end:'b18andb19_1'

   //=========================================================
   
   //Edge symbol: 'cust_6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(2000);

      });
         //Edge binding end

      })("cust_6");
   //Edge symbol end:'cust_6'

   //=========================================================
   
   //Edge symbol: 'cust_7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(2000);

      });
         //Edge binding end

      })("cust_7");
   //Edge symbol end:'cust_7'

   //=========================================================
   
   //Edge symbol: 'cust_8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.play(2000);

      });
         //Edge binding end

      })("cust_8");
   //Edge symbol end:'cust_8'

   //=========================================================
   
   //Edge symbol: 'I6_1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().flg5 ="";
        //------------ sym.Sounds[1].play();
        //--------------- sym.SoundsStatus[1] = "1";
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3858, function(sym, e) {
         
         sym.getComposition().getStage().flg5 ="true";
         sym.getComposition().getStage().$("knife").show();

      });
      //Edge binding end

      })("I5");
   //Edge symbol end:'I5'

   //=========================================================
   
   //Edge symbol: 'I6_1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().flg7 ="";
      //-------------   sym.Sounds[1].play();
       //--------------------  sym.SoundsStatus[1] = "1";
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3858, function(sym, e) {
         
         sym.getComposition().getStage().flg7 ="true";
         sym.getComposition().getStage().$("knife").show();

      });
      //Edge binding end

      })("I7");
   //Edge symbol end:'I7'

   //=========================================================
   
   //Edge symbol: 'I6_1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().flg8 ="";
        //--------------- sym.Sounds[1].play();
        //------------------ sym.SoundsStatus[1] = "1";
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3858, function(sym, e) {
         
         sym.getComposition().getStage().flg8 ="true";
         sym.getComposition().getStage().$("knife").show();

      });
      //Edge binding end

      })("I8");
   //Edge symbol end:'I8'

   //=========================================================
   
   //Edge symbol: 'I6_1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().flg10 ="";
         
         
      //-------------------   sym.Sounds[1].play();
      //----------------------   sym.SoundsStatus[1] = "1";
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3858, function(sym, e) {
         
         sym.getComposition().getStage().flg10 ="true";
         sym.getComposition().getStage().$("knife").show();

      });
      //Edge binding end

      })("I10");
   //Edge symbol end:'I10'

   //=========================================================
   
   //Edge symbol: 'I10_1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().flg11 ="";
         
         
       //--------------------  sym.Sounds[1].play();
        //--------------------- sym.SoundsStatus[1] = "1";
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3858, function(sym, e) {
         
         sym.getComposition().getStage().flg11 ="true";
         sym.getComposition().getStage().$("knife").show();

      });
      //Edge binding end

      })("I11");
   //Edge symbol end:'I11'

   //=========================================================
   
   //Edge symbol: 'I8_1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().flg9 ="";
         
         
        //----- sym.Sounds[1].play();
        //----- sym.SoundsStatus[1] = "1";
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3858, function(sym, e) {
         
         sym.getComposition().getStage().flg9 ="true";
         sym.getComposition().getStage().$("knife").show();

      });
      //Edge binding end

      })("I9");
   //Edge symbol end:'I9'

   //=========================================================
   
   //Edge symbol: 'eye8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("eye8");
   //Edge symbol end:'eye8'

   //=========================================================
   
   //Edge symbol: 'eye7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2184, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("eye7");
   //Edge symbol end:'eye7'

   //=========================================================
   
   //Edge symbol: 'eye8g'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("eye8g");
   //Edge symbol end:'eye8g'

   //=========================================================
   
   //Edge symbol: 'pendui_ani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("pendui_ani");
   //Edge symbol end:'pendui_ani'

   //=========================================================
   
   //Edge symbol: 'wrong_ing'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("wrong_ing");
   //Edge symbol end:'wrong_ing'

   //=========================================================
   
   //Edge symbol: 'line_shado'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("line_shado");
   //Edge symbol end:'line_shado'

   //=========================================================
   
   //Edge symbol: 'StageTimeTxt'
   (function(symbolName) {   
   
   })("StageTimeTxt");
   //Edge symbol end:'StageTimeTxt'

   //=========================================================
   
   //Edge symbol: 'IngSeatNo'
   (function(symbolName) {   
   
   })("IngSeatNo");
   //Edge symbol end:'IngSeatNo'

   //=========================================================
   
   //Edge symbol: 'dustbin_ani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("dustbin_ani");
   //Edge symbol end:'dustbin_ani'

})(jQuery, AdobeEdge, "EDGE-2233007131");