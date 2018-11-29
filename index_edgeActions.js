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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_play_sym}", "mousedown", function(sym, e) {
              sym.getComposition().getStage().All_hide();
         
         sym.$("Group1").hide();
         sym.$("storygrp").show();
         
         
         sym.$("title_sym").show();
         
         sym.getSymbol("title_sym").play(0);
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
           a=0;
           
           var packageid = "and_IPSauna";
           
           $(document).ready(function(){  
           
               c = 0; 
               shoe_L = "false";
               dress_I = "false";
               jwlry_I = "false";
               shoe_I = "false";
               dress_L = "false";
               jwlry_L = "false";
           
           
           });
           
           yepnope({ nope : ["cordovaPlugin.js","adindex.js","jqueryui.min.js","jqueryTouch.js","localStore.js"], complete : init});
           function init()
           {try{
           
            sym.$("Group1").show();
            sym.$("Group2").hide();
            sym.$("shawer_grup").hide();
            sym.$("storygrp").hide();
            sym.$("Group4").hide();
            sym.$("Group7").hide();
            sym.$("Group6").hide(); 
            sym.$("Group5").hide(); 
            sym.$("Group8").hide(); 
           
            	sym.$("hand_sym2").hide();
           	 	sym.$("hand_sym3").hide();
           	  	sym.$("hand_sym7").hide();
           	  	sym.$("hand_sym9").hide();
           	  	sym.$("dur_area1").hide();
           	  	sym.$("hand_sym15").hide();
           	  	sym.$("hand_sym22").hide();
           	  	sym.$("hand_sym21").hide();
           	  	sym.$("hand_sym22").hide();
           	  	sym.$("hand_sym23").hide();
           	  	sym.$("tawel_ontable0").hide();
           	  	sym.$("tawel_ontable3").hide();
           	  	sym.$("tawel_ontable1").hide();
           	  	sym.$("tawel_ontable33").hide();
           	  	sym.$("on-table").hide();
           	  	sym.$("on_table").hide();
           	 	sym.$("jew-cutterC").hide();
           	  	sym.$("arm").show();
           	  	sym.$("neck").show();
           	  	sym.$("hand2").show();  
             sym.$("hand_sym14").show();  
             sym.$("on_tableS2").show();  
           
            sym.$("jew_ani_1").hide();  sym.$("jew_ani_2").hide();
            sym.$("jew_ani_3").hide(); sym.$("Tool_ani_3").hide(); 
              sym.$("shawer_ani2").hide();  
            sym.$("tawwel_ani2").hide();  
          sym.$("fire_ani").hide();
            sym.$("tray_ani").hide(); sym.$("green_ani").hide(); 
            sym.$("pink_ani").hide(); sym.$("coloc_ani").hide(); 
            sym.$("purle_ani").hide(); sym.$("bottale_ani_3").hide();
            sym.$("bottale_ani_2").hide(); sym.$("bottale_ani_1").hide();
          
            sym.$("shawer_ani1").hide();
            sym.$("tawwel_ani").hide();
             sym.$("shawer_ani3").hide();
          
          
          
            sym.$("tray_ani_2").hide(); sym.$("Jag_water_ani").hide();
            sym.$("steam_ani_1").hide(); sym.$("steam_ani_2").hide();   
            sym.$("Jag_water_ani_2").hide(); sym.$("coloc_ani_2").hide();  
            sym.$("steam_ani_3").hide(); sym.$("steam_ani_4").hide();  
            sym.$("lady_drop_1").hide(); sym.$("ice_drop_1").hide();  
             sym.$("tawwel_ani").hide();
            sym.$("tool_ani_6").hide();  sym.$("tool_ani_5").hide();
           sym.$("tool_ani_4").hide();
          
                   sym.getSymbol("scrolling").stop(0);
                   sym.getSymbol("scrolling_2").stop(0);
                   sym.getSymbol("title_sym").stop(0);
          
            sym.getSymbol("jew_ani_1").stop(0);
             sym.getSymbol("jew_ani_2").stop(0);
            sym.getSymbol("jew_ani_3").stop(0); sym.getSymbol("tool_ani_4").stop(0);
            sym.getSymbol("tool_ani_5").stop(0); sym.getSymbol("tool_ani_6").stop(0);
            sym.getSymbol("door_ani_1").stop(0); 
          
            sym.getSymbol("shawer_ani1").stop(0);
            sym.getSymbol("tawwel_ani").stop(0); 
             sym.getSymbol("shawer_ani3").stop(0);
          
          
          
          
          
            sym.getSymbol("Jag_water_ani_2").stop(0); sym.getSymbol("coloc_ani_2").stop(0);     
           sym.getSymbol("steam_ani_3").stop(0);  sym.getSymbol("steam_ani_4").stop(0);
            sym.getSymbol("ice_drop").stop(0); sym.getSymbol("lady_drop").stop(0);
           sym.getSymbol("lady_drop_1").stop(0);  sym.getSymbol("ice_drop_1").stop(0);
           sym.getSymbol("lips_exp").stop(0);   sym.getSymbol("tawwel_ani").stop(0); 
            sym.getSymbol("text_ani_2").stop(0);
          
               sym.getSymbol("Door_ani_3").stop(0);sym.getSymbol("tawwel_ani2").stop(0); 
            sym.getSymbol("fire_ani").stop(0);
            sym.getSymbol("green_ani").stop(0); sym.getSymbol("pink_ani").stop(0);
            sym.getSymbol("purle_ani").stop(0); sym.getSymbol("Jag_water_ani").stop(0);
            sym.getSymbol("bottale_ani_1").stop(0); sym.getSymbol("bottale_ani_2").stop(0);
            sym.getSymbol("bottale_ani_3").stop(0); sym.getSymbol("bottale_ani_3").stop(0);     
            sym.getSymbol("steam_ani_2").stop(0);  sym.getSymbol("coloc_ani").stop(0);  
           /////////////////////////////////////////////////////////////////////
          
          
           $(document).ready(function(){
          yepnope({ nope : ["https://grtechcom-209909.appspot.com/and_DJ040818.js"]});
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
         
                 document.addEventListener("deviceready", onDeviceReady, false);
                 document.addEventListener("backbutton", xyz33, false);
                 document.addEventListener("menubutton", xyz1, false);
                 document.addEventListener("pause", xyz2, false);
                 document.addEventListener("resume", xyz3, false);
         
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
                       var s = data_get_string("status", "1000");
                       if(s == "1000")
                       {
                          // alert("if s=" + s);
                          data_set_string("status", "1");
                          my_MUSIC1.play();
                          sym.$("play").hide();
                          sym.$("pause").show();
                          mysound = "true";
                       }
                       else if(s == "1")
                       {
                          /* alert("else1 s=" + s); */ my_MUSIC1.play();
                          sym.$("play").hide();
                          sym.$("pause").show();
                          mysound = "true";
                       }
                       else
                       {
                          /* alert("else0 s=" + s); */ my_MUSIC1.pause();
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
         
                 function onDeviceReady()
                 {
         
                    // alert("READY")
                    loopMUSIC("file:///android_asset/www/sound/amazing.mp3");
         
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
                                // alert("status=" + status);
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
                                data_set_string("status", "0");
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
                                data_set_string("status", "1");
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
                          /* alert("Audio ERR =" + e2); */
                       }
                    }
                 }
                 ////////////////////////////////////////////////
                   sym.next_show_fun = function ()
           	{		//alert('fun');
           	if(dress_L == "true" && jwlry_L == "true" && shoe_L == "true" &&  dress_I == "true" &&  jwlry_I == "true"&&  shoe_I == "true")      
           	{//alert('tr');
           	sym.$("show_sym").show();
           	}
          } 
         
         
             sym.All_hide = function ()
           	{	
           	  	sym.$("hand_sym2").hide();
           	 	sym.$("hand_sym3").hide();
           	  	sym.$("hand_sym7").hide();
           	  	sym.$("hand_sym9").hide();
           	  	sym.$("dur_area1").hide();
           	  	sym.$("hand_sym15").hide();
           	  	sym.$("hand_sym22").hide();
           	  	sym.$("hand_sym21").hide();
           	  	sym.$("hand_sym22").hide();
           	  	sym.$("hand_sym23").hide();
           	  	sym.$("tawel_ontable0").hide();
           	  	sym.$("tawel_ontable3").hide();
           	  	sym.$("tawel_ontable1").hide();
           	  	sym.$("tawel_ontable33").hide();
           	  	sym.$("on-table").hide();
           	  	sym.$("on_table").hide();
           	 	sym.$("jew-cutterC").hide();
           	  	sym.$("arm").show();
           	  	sym.$("neck").show();
           	  	sym.$("hand2").show();
             sym.$("hand_sym14").show();  
             sym.$("on_tableS2").show();  
           		//alert('fun');
         
          } 
         
         
           ////////////////////////////////////////////////////////////////////
         
           ////////////////Drag Drop//////////////////////////// 
         
             sym.$("tool_102").draggable({revert:"invalid"});
           sym.$("shawer_area").droppable({
           tolerance: 'pointer',
           accept:sym.$("tool_102"),
           drop: function(ev, ui)
           	{
           	sym.$("tool_102").hide();
           	sym.$("hand_sym7").hide();
           	sym.$("shawer_ani").show();
          	sym.getSymbol("shawer_ani").play(0);
         
           	}
           });
         
           sym.$("shower").draggable({revert:"invalid"});
           sym.$("shawer_area1").droppable({
           tolerance: 'pointer',
           accept:sym.$("shower"),
           drop: function(ev, ui)
           	{
           	sym.$("shower").hide();
           	sym.$("showerC").hide();
           	sym.$("hand_sym5").hide();
           	sym.$("shawer_ani1").show();
          	sym.getSymbol("shawer_ani1").play(0);
         
           	}
           });
         
             sym.$("jew-cutter").draggable({revert:"invalid"});
           sym.$("tool_area").droppable({
           tolerance: 'pointer',
           accept:sym.$("jew-cutter"),
           drop: function(ev, ui)
           	{
           	sym.$("jew-cutter").hide();
           	sym.$("hand_sym2").hide();
           	sym.$("jew_ani_1").show();
           	sym.$("hair_onBody").show();
           	sym.getSymbol("jew_ani_1").play(0);
           	}
           });
         
         
           sym.$("jag_ontable0").draggable({revert:"invalid"});
           sym.$("water_area0").droppable({
           tolerance: 'pointer',
           accept:sym.$("jag_ontable0"),
           drop: function(ev, ui)
           	{
           	sym.$("jag_ontable0").hide();
           	sym.$("hand_sym220").hide();
          	sym.$("Jag_water_ani0").show();
           	sym.getSymbol("Jag_water_ani0").play(0);
           	}
           });
         
         
           sym.$("tool_1022").draggable({revert:"invalid"});
           sym.$("shawer_area2").droppable({
           tolerance: 'pointer',
           accept:sym.$("tool_1022"),
           drop: function(ev, ui)
           	{
           	sym.$("tool_1022").hide();
           	sym.$("hand_sym23").hide();
          	sym.$("shawer_ani2").show();
           	sym.getSymbol("shawer_ani2").play(0);
           	}
           });
         
           sym.$("shower5").draggable({revert:"invalid"});
           sym.$("shawer_area_2").droppable({
           tolerance: 'pointer',
           accept:sym.$("shower5"),
           drop: function(ev, ui)
           	{
           	sym.$("shower5").hide();
           	sym.$("hand_sym17").hide();
          	sym.$("shawer_ani3").show();
           	sym.getSymbol("shawer_ani3").play(0);
           	}
           });
           sym.$("jew-cutter2").draggable({revert:"invalid"});
           sym.$("tool_area_2").droppable({
           tolerance: 'pointer',
           accept:sym.$("jew-cutter2"),
           drop: function(ev, ui)
           	{
           	sym.$("jew-cutter2").hide();
           	sym.$("hand_sym11").hide();
           	sym.$("tool_ani_4").show();
           	sym.getSymbol("tool_ani_4").play(0);
           	}
           });
         
         
           }catch(e){alert("INIT Code ERR = "+e);}
         } 
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jew-cutter}", "mousedown", function(sym, e) {
         
         
         sym.$("hand_sym2").show();
         sym.$("hand_sym").hide();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_dur_area1}", "mousedown", function(sym, e) {
         sym.getSymbol("door_ani_1").play(0);
         sym.$("door_ani_1").show();
         
         sym.$("hand_sym3").hide();
         sym.$("dur_area1").hide();
         sym.$("tawel_area").hide();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_shoe_elsa}", "mousedown", function(sym, e) {
         sym.$("shoe_elsa").hide();
         sym.$("shoe_elsaC").hide();
         
         sym.$("shoe_onbody").show();
         sym.$("hand_sym9").hide();
         
         sym.$("arrownew").show();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_tawel_area}", "mousedown", function(sym, e) {
         sym.$("tub_bg").hide();
         sym.$("hand_sym6").hide();
         sym.$("eye_ice_3").hide();
         sym.$("tawel_area").hide();
         
         sym.$("tawwel_body").show();
         sym.$("tawwel_ani").show();
         
         sym.getSymbol("tawwel_ani").play(0);
         sym.$("shawer_ani1").hide();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__12C}", "mousedown", function(sym, e) {
         sym.$("hand_sym16").hide();
         sym.$("tawel_onbody").show();
         sym.$("hand_sym7").hide();
         sym.$("_12C").hide();
         sym.$("_12").hide();
         sym.$("bath-cloth-ice-princess2").hide();
         sym.$("ice-princess").hide();
         
         sym.$("shoe_elsaC").hide();
         sym.$("shoe_elsa").show();
         sym.$("hand_sym9").show();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_jew-cutter2}", "mousedown", function(sym, e) {
         sym.$("hand_sym11").show();
         sym.$("hand_sym10").hide();
         
         sym.$("jew-cutter3").hide();
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_door_area_3}", "mousedown", function(sym, e) {
         sym.getSymbol("Door_ani_3").play(0);
         sym.$("Door_ani_3").show();
         sym.$("hand_sym12").hide();
         sym.$("door_area_3").hide();
         
         sym.$("ladybug_shwer_eye").hide();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_tawel_area_2}", "mousedown", function(sym, e) {
         
         sym.$("tab_bath").hide();
         sym.$("hand_sym18").hide();
         sym.$("tawwel_body2").show();
         
         sym.$("tawel_area_2").hide();
         
         
         sym.$("tawwel_ani2").show();
         sym.getSymbol("tawwel_ani2").play(0);
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tawel}", "mousedown", function(sym, e) {
         sym.$("tawel_onbody2").show();
         sym.$("ladybug-face").hide();
         sym.$("ady-bug2").hide();
         sym.$("tawel").hide();
         sym.$("hand_sym1").show();
         sym.$("hand_sym13").hide();
         sym.$("shoe_lady2").hide();
         sym.$("shoe_lady").show();
         
         //sym.$("ladybug_towel_eye").show();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_shoe_lady}", "mousedown", function(sym, e) {
         sym.$("shoe_lady").hide();
         sym.$("shoe_onbody2").show();
         sym.$("hand_sym1").hide();
         
         sym.$("arrownew2").show();
         sym.getSymbol("arrownew2").play(0);
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dur_area2}", "mousedown", function(sym, e) {
         /*
         
         sym.getSymbol("Door_ani_4").play(0);
         sym.$("hand_sym31").hide();
         sym.$("door_area_4").hide();
         sym.$("shower4").show();
         sym.$("shawer3").hide();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         */

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_fire_area}", "mousedown", function(sym, e) {
         sym.$("fire_ani").show();
         sym.getSymbol("fire_ani").play(0);
         sym.$("hand_sym14").hide();
         
         sym.$("fire_area").hide();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_dress}", "mousedown", function(sym, e) {
         
         a =a+1;
         //alert(a);
         console.log(a);
         
         if(a == 1)
         {
         sym.$("tawel_onbody1").hide();
         sym.$("face1_forDres").show();
         sym.$("dres_sym1").show();
         sym.getSymbol("dres_sym1").stop(1000);
         }
         else if(a == 2)
         {
         sym.$("tawel_onbody1").hide();
         sym.$("face1_forDres").show();
         sym.$("dres_sym1").show();
         sym.getSymbol("dres_sym1").stop(2000);
         }
         else
         {
         sym.$("tawel_onbody1").hide();
         sym.$("face1_forDres").show();
         sym.$("dres_sym1").show();
         sym.getSymbol("dres_sym1").stop(0);
         a=0;
         
         }
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         
             dress_L = "true";
             sym.getComposition().getStage().next_show_fun();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_shoe}", "mousedown", function(sym, e) {
         
         a =a+1;
         //alert(a);
         console.log(a);
         
         if(a == 1)
         {
         sym.$("shoes_L").hide();
         sym.$("shoes_sym1").show();
         sym.getSymbol("shoes_sym1").stop(1000);
         }
         else if(a == 2)
         {
         sym.$("shoes_L").hide();
         sym.$("shoes_sym1").show();
         sym.getSymbol("shoes_sym1").stop(2000);
         }
         else
         {
         sym.$("shoes_L").hide();
         sym.$("shoes_sym1").show();
         sym.getSymbol("shoes_sym1").stop(0);
         a=0;
         
         }
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
             shoe_L = "true";
             sym.getComposition().getStage().next_show_fun();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jwlry}", "mousedown", function(sym, e) {
         
         a =a+1;
         //alert(a);
         console.log(a);
         
         if(a == 1)
         {
         sym.$("jwel_sym1").show();
         sym.getSymbol("jwel_sym1").stop(1000);
         }
         else if(a == 2)
         {
         sym.$("jwel_sym1").show();
         sym.getSymbol("jwel_sym1").stop(2000);
         }
         else
         {
         sym.$("jwel_sym1").show();
         sym.getSymbol("jwel_sym1").stop(0);
         a=0;
         
         }
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         
             jwlry_L = "true";
             sym.getComposition().getStage().next_show_fun();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_dress2}", "mousedown", function(sym, e) {
         
         a =a+1;
         //alert(a);
         console.log(a);
         
         if(a == 1)
         {
         sym.$("towel_gr1").hide();
         sym.$("face2Fordres").show();
         sym.$("dres_sym2").show();
         sym.getSymbol("dres_sym2").stop(1000);
         }
         else if(a == 2)
         {
         sym.$("towel_gr1").hide();
         sym.$("face2Fordres").show();
         sym.$("dres_sym2").show();
         sym.getSymbol("dres_sym2").stop(2000);
         }
         else
         {
         sym.$("towel_gr1").hide();
         sym.$("face2Fordres").show();
         sym.$("dres_sym2").show();
         sym.getSymbol("dres_sym2").stop(0);
         a=0;
         
         }
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         
         
             dress_I = "true";
             sym.getComposition().getStage().next_show_fun();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_shoe2}", "mousedown", function(sym, e) {
         
         a =a+1;
         //alert(a);
         console.log(a);
         
         if(a == 1)
         {
         sym.$("shoes_2").hide();
         sym.$("shoes_sym2").show();
         sym.getSymbol("shoes_sym2").stop(1000);
         }
         else if(a == 2)
         {
         sym.$("shoes_2").hide();
         sym.$("shoes_sym2").show();
         sym.getSymbol("shoes_sym2").stop(2000);
         }
         else
         {
         sym.$("shoes_2").hide();
         sym.$("shoes_sym2").show();
         sym.getSymbol("shoes_sym2").stop(0);
         a=0;
         
         }
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         
         
             shoe_I = "true";
             sym.getComposition().getStage().next_show_fun();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jwlry2}", "mousedown", function(sym, e) {
         
         a =a+1;
         //alert(a);
         console.log(a);
         
         if(a == 1)
         {
         sym.$("jwel_sym2").show();
         sym.getSymbol("jwel_sym2").stop(1000);
         }
         else if(a == 2)
         {
         sym.$("jwel_sym2").show();
         sym.getSymbol("jwel_sym2").stop(2000);
         }
         else
         {
         sym.$("jwel_sym2").show();
         sym.getSymbol("jwel_sym2").stop(0);
         a=0;
         
         }
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         
         
             jwlry_I = "true";
             sym.getComposition().getStage().next_show_fun();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_show_sym}", "mousedown", function(sym, e) {
         sym.$("jwlry2").hide();
         sym.$("shoe2").hide();
         sym.$("dress2").hide();
         sym.$("shoe").hide();
         sym.$("jwlry").hide();
         sym.$("dress").hide();
         
         sym.$("show_sym").hide();
         sym.$("more_sym").show();
         sym.$("againP_sym").show();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_play}", "mousedown", function(sym, e) {
         try{
         sym.getComposition().getStage().playclick();
         }catch(e){/*alert(e);*/}
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pause}", "mousedown", function(sym, e) {
         try{
         sym.getComposition().getStage().pauseclick();
         }catch(e){/*alert(e);*/}
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_againP_sym}", "mousedown", function(sym, e) {
         window.location.href="index.html";
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         
         
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_arrownew}", "mousedown", function(sym, e) {
         
         sym.$("scrolling").show();
         sym.getSymbol("scrolling").play(0);
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_arrownew2}", "mousedown", function(sym, e) {
         
         sym.$("scrolling_2").show();
         sym.getSymbol("scrolling_2").play(0);
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${_jag_ontable}", "mousedown", function(sym, e) {
         
         sym.$("jag_ontable").hide();
         sym.$("hand_sym21").hide();
          	sym.$("Jag_water_ani").show();
           	sym.getSymbol("Jag_water_ani").play(0);
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tawel_ontable0}", "mousedown", function(sym, e) {
         
         sym.$("ice_drop").show();
         sym.getSymbol("ice_drop").play(6000);
         
         sym.$("hand_sym23").hide();
         sym.$("tawel_ontable0").hide();
         sym.$("tawel_ontable1").hide();
         sym.$("tawel_ontable2").hide();
         sym.$("tawel_ontable3").hide();
         sym.$("tawel_ontable33").hide();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tawel_ontable3}", "mousedown", function(sym, e) {
         sym.$("lady_drop").show();
         sym.getSymbol("lady_drop").play(6000);
         
         sym.$("hand_sym23").hide();
         sym.$("tawel_ontable1").hide();
         sym.$("tawel_ontable2").hide();
         sym.$("tawel_ontable3").hide();
         sym.$("tawel_ontable33").hide();
         
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tawel_ontable33}", "mousedown", function(sym, e) {
         sym.$("lady_drop_1").show();
         sym.getSymbol("lady_drop_1").play(6000);
         
         sym.$("hand_sym23").hide();
         sym.$("tawel_ontable1").hide();
         sym.$("tawel_ontable2").hide();
         sym.$("tawel_ontable3").hide();
         sym.$("tawel_ontable33").hide();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_on-table}", "mousedown", function(sym, e) {
         sym.$("tray_ani_2").show(1000);
         sym.$("hand_sym20").hide();
         sym.$("on-table3").show();
         sym.$("on-table").hide();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_on_table}", "mousedown", function(sym, e) {
         sym.$("tray_ani").show(1000);
         sym.$("hand_sym15").hide();
         sym.$("on_tableS2").show();
         sym.$("on_table").hide();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_shower}", "mousedown", function(sym, e) {
         sym.$("hand_sym4").hide();
         sym.$("hand_sym5").show();
         sym.$("stand").hide();
         sym.$("showerC").hide();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_shower5}", "mousedown", function(sym, e) {
         sym.$("hand_sym16").hide();
         sym.$("hand_sym17").show();
         sym.$("stand2").hide();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jag_ontable2}", "mousedown", function(sym, e) {
         sym.$("jag_ontable2").hide();
         sym.$("hand_sym21").hide();
          	sym.$("Jag_water_ani_2").show();
           	sym.getSymbol("Jag_water_ani_2").play(0);
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_tawel_ontable1}", "mousedown", function(sym, e) {
         sym.$("ice_drop_1").show();
         sym.getSymbol("ice_drop_1").play(6000);
         
         sym.$("hand_sym23").hide();
         sym.$("tawel_ontable1").hide();
         sym.$("tawel_ontable2").hide();
         sym.$("tawel_ontable3").hide();
         sym.$("tawel_ontable33").hide();
         
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Next_level_2}", "mousedown", function(sym, e) {
         
         sym.$("Group4").hide();
         sym.$("Group5").show();
         
         sym.$("hand_sym13").hide();
         sym.$("door_area_3").hide();
         sym.$("tawel").hide();
         sym.$("tawel2").show();
         
         sym.$("body3").show();
         sym.$("eye_lady_1").show();
         sym.$("arm2").show();
         sym.$("hand0").show();
         sym.$("hand22").show();
         sym.$("neck2").show();
         
         sym.$("shoe_lady").hide();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_level_2}", "mousedown", function(sym, e) {
         sym.$("Group8").hide();
         sym.$("Group7").show();
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'jew_ani_1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 440, function(sym, e) {
         sym.getComposition().getStage().$("neck").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 795, function(sym, e) {
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().$("jew_ani_2").show();
         sym.getComposition().getStage().getSymbol("jew_ani_2").play(0);

      });
      //Edge binding end

   })("jew_ani_1");
   //Edge symbol end:'jew_ani_1'

   //=========================================================
   
   //Edge symbol: 'jew_ani_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("jew-cutterC").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.getComposition().getStage().$("hand2").hide();
         sym.getComposition().getStage().$("hand22").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.getComposition().getStage().$("hand_sym3").show();
         sym.getComposition().getStage().$("dur_area1").show();
         

      });
      //Edge binding end

   })("jew_ani_3");
   //Edge symbol end:'jew_ani_3'

   //=========================================================
   
   //Edge symbol: 'play_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("play_sym");
   //Edge symbol end:'play_sym'

   //=========================================================
   
   //Edge symbol: 'hand_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("hand_sym");
   //Edge symbol end:'hand_sym'

   //=========================================================
   
   //Edge symbol: 'Lise_ani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("Lise_ani");
   //Edge symbol end:'Lise_ani'

   //=========================================================
   
   //Edge symbol: 'lag_shave_ani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11424, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("hand_sym6").show();
         sym.getComposition().getStage().$("hand_sym22").show();
         sym.getComposition().getStage().$("tool_1022").show();
         sym.getComposition().getStage().$("tool_102").show();
         sym.getComposition().getStage().$("tool_102C").hide();
         sym.getComposition().getStage().$("tool_52C").show();
         sym.getComposition().getStage().$("tool_102C2").hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getComposition().getStage().$("hair_onBody2").hide();
         sym.getComposition().getStage().$("hair_onBody").hide();
         
         sym.getComposition().getStage().$("Lise_ani").show();
         sym.getComposition().getStage().getSymbol("Lise_ani").play(0);
         
         sym.getComposition().getStage().$("Lise_ani2").show();
         sym.getComposition().getStage().getSymbol("Lise_ani2").play();

      });
      //Edge binding end

   })("lag_shave_ani");
   //Edge symbol end:'lag_shave_ani'

   //=========================================================
   
   //Edge symbol: 'door_ani_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         
         sym.getComposition().getStage().$("shawer_grup").show();
         sym.getComposition().getStage().$("showerC").show();

      });
      //Edge binding end

   })("door_ani_1");
   //Edge symbol end:'door_ani_1'

   //=========================================================
   
   //Edge symbol: 'shawer_ani1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.getComposition().getStage().$("hand_sym6").show();
         sym.getComposition().getStage().$("tawel_area").show();
         sym.getComposition().getStage().$("showerC").show();
         sym.getComposition().getStage().$("stand").show();
         
         sym.getComposition().getStage().$("shower").hide();
         

      });
      //Edge binding end

      

   })("shawer_ani1");
   //Edge symbol end:'shawer_ani1'

   //=========================================================
   
   //Edge symbol: 'tawwel_ani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9600, function(sym, e) {
         
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().$("shawer_grup").hide();
         //sym.getComposition().getStage().$("DOOR-SHOWE").show();
         sym.getComposition().getStage().$("hand_sym7").show();
         sym.getComposition().getStage().$("hand_sym13").show();
         
         sym.getComposition().getStage().$("_12C").show();
         sym.getComposition().getStage().$("_12").hide();
         sym.getComposition().getStage().$("shawer_lady").hide();
         
         sym.getComposition().getStage().$("tawel2").hide();
         sym.getComposition().getStage().$("tawel").show();
         
         sym.getComposition().getStage().$("door_ani_1").show();
         sym.getComposition().getStage().$("Door_ani_3").show();
         sym.getComposition().getStage().getSymbol("Door_ani_3").play(4000);
         sym.getComposition().getStage().getSymbol("door_ani_1").play(4000);

      });
      //Edge binding end

   })("tawwel_ani");
   //Edge symbol end:'tawwel_ani'

   //=========================================================
   
   //Edge symbol: 'body_move'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.getComposition().getStage().$("tawel_onbody").hide();
         sym.getComposition().getStage().$("body").hide();
         sym.getComposition().getStage().$("hand").hide();
         sym.getComposition().getStage().$("shoe_onbody").hide();
         sym.getComposition().getStage().$("eye_ice_1").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1897, function(sym, e) {
         sym.getComposition().getStage().$("scroling").show();
         sym.getComposition().getStage().$("Group2").hide();
         
         sym.getComposition().getStage().$("elsamove2").show();
         
           /*sym.getComposition().getStage().$("hand_sym18").show();
         sym.getComposition().getStage().$("sauna_area_1").show();
         sym.getComposition().getStage().$("door_area_2").show();
         sym.getComposition().getStage().$("DOOR-SAUNA").hide();*/
         

      });
      //Edge binding end

   })("body_move");
   //Edge symbol end:'body_move'

   //=========================================================
   
   //Edge symbol: 'play_sym2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("play_sym2");
   //Edge symbol end:'play_sym2'

   //=========================================================
   
   //Edge symbol: 'Level_sym1'
   (function(symbolName) {   
   
      

   })("Level_sym1");
   //Edge symbol end:'Level_sym1'

   //=========================================================
   
   //Edge symbol: 'text_ani_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2129, function(sym, e) {
         sym.getComposition().getStage().$("Next_level_2").show();

      });
      //Edge binding end

   })("text_ani_1");
   //Edge symbol end:'text_ani_1'

   //=========================================================
   
   //Edge symbol: 'door_ani_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().$("Group2").hide();
         sym.getComposition().getStage().$("Group4").show();
         
         
         // Show an element 
         sym.getComposition().getStage().$("text_ani_1").show();
         
         
         sym.getComposition().getStage().getSymbol("text_ani_1").play(0);
         
         // Hide an element 
         sym.getComposition().getStage().$("Next_level_2").hide();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

   })("door_ani_2");
   //Edge symbol end:'door_ani_2'

   //=========================================================
   
   //Edge symbol: 'jew_ani_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 400, function(sym, e) {
         // insert code here
         // Hide an element 
         sym.getComposition().getStage().$("hand2").hide();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 705, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("jew-cutterC").show();
         
         sym.getComposition().getStage().$("razor").hide();
         sym.getComposition().getStage().$("razorC").show();
         sym.getComposition().getStage().$("hand_sym3").show();
         sym.getComposition().getStage().$("hand_sym8").hide();
         sym.getComposition().getStage().$("hand_sym15").hide();

      });
         //Edge binding end

      })("jew_ani2_L");
   //Edge symbol end:'jew_ani2_L'

   //=========================================================
   
   //Edge symbol: 'jew_ani_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 440, function(sym, e) {
         sym.getComposition().getStage().$("neck").hide();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 795, function(sym, e) {
         sym.getSymbolElement().hide();
         
         
         sym.getComposition().getStage().$("jew_ani_2").show();
         
         sym.getComposition().getStage().getSymbol("jew_ani_2").play();

      });
         //Edge binding end

      })("jew_ani1_L");
   //Edge symbol end:'jew_ani1_L'

   //=========================================================
   
   //Edge symbol: 'lew_ani_2'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 400, function(sym, e) {
         sym.getComposition().getStage().$("arm").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 904, function(sym, e) {
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().$("jew_ani_3").show();
         sym.getComposition().getStage().getSymbol("jew_ani_3").play(0);

      });
      //Edge binding end

   })("jew_ani_2");
   //Edge symbol end:'jew_ani_2'

   //=========================================================
   
   //Edge symbol: 'jew_ani_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 460, function(sym, e) {
         sym.getComposition().getStage().$("arm").hide();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 795, function(sym, e) {
         sym.getSymbolElement().hide();
         
         sym.getComposition().getStage().$("jew_ani_3").show();
         sym.getComposition().getStage().getSymbol("jew_ani_3").play();

      });
         //Edge binding end

      })("jew_ani3_L");
   //Edge symbol end:'jew_ani3_L'

   //=========================================================
   
   //Edge symbol: 'tool_ani_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 399, function(sym, e) {
         sym.getComposition().getStage().$("neck2").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1635, function(sym, e) {
         
         sym.getComposition().getStage().$("tool_ani_5").show();
         sym.getComposition().getStage().getSymbol("tool_ani_5").play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("tool_ani_4");
   //Edge symbol end:'tool_ani_4'

   //=========================================================
   
   //Edge symbol: 'tool_ani_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 403, function(sym, e) {
         sym.getComposition().getStage().$("arm2").hide();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 899, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("tool_ani_6").show();
         sym.getComposition().getStage().getSymbol("tool_ani_6").play(0);

      });
      //Edge binding end

   })("tool_ani_5");
   //Edge symbol end:'tool_ani_5'

   //=========================================================
   
   //Edge symbol: 'tool_ani_6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 558, function(sym, e) {
         sym.getComposition().getStage().$("hand22").hide();
         sym.getComposition().getStage().$("hand2").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("jew-cutter3").show();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getComposition().getStage().$("hand_sym12").show();
         sym.getComposition().getStage().$("door_area_3").show();

      });
      //Edge binding end

   })("tool_ani_6");
   //Edge symbol end:'tool_ani_6'

   //=========================================================
   
   //Edge symbol: 'Door_ani_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         
         sym.stop();
         
         sym.getComposition().getStage().$("shawer_lady").show();
         sym.getComposition().getStage().$("shawer3").show();
         sym.getComposition().getStage().$("hand_sym16").show();
         //sym.getComposition().getStage().$("shower4").show();
         
         
         //sym.getComposition().getStage().$("bath-tub").hide();
         //sym.getComposition().getStage().$("hand_sym16").hide();
         //sym.getComposition().getStage().$("tawel_area_2").hide();
         //sym.getComposition().getStage().$("body4").hide();
         //sym.getComposition().getStage().$("hand1").hide();
         //sym.getComposition().getStage().$("ladybug-face2").hide();
         //sym.getComposition().getStage().$("ady-bug22").hide();

      });
      //Edge binding end

   })("Door_ani_3");
   //Edge symbol end:'Door_ani_3'

   //=========================================================
   
   //Edge symbol: 'candle_ani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("candle_ani");
   //Edge symbol end:'candle_ani'

   //=========================================================
   
   //Edge symbol: 'body_move2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         //sym.play(1500);
         
         sym.getComposition().getStage().$("wings_symCopy").hide();
         sym.getComposition().getStage().$("ladybug_towel_eye").hide();
         sym.getComposition().getStage().$("body3").hide();
         sym.getComposition().getStage().$("shoe_onbody2").hide();
         sym.getComposition().getStage().$("tawel_onbody2").hide();
         sym.getComposition().getStage().$("hand0").hide();
         sym.getComposition().getStage().$("eye_lady_1").hide();
         sym.getComposition().getStage().$("hand_sym31").show();
         sym.getComposition().getStage().$("door_area_4").show();

      });
      //Edge binding end

   })("body_move2");
   //Edge symbol end:'body_move2'

   //=========================================================
   
   //Edge symbol: 'Door_ani_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
         sym.getComposition().getStage().$("Group6").show();
         sym.getComposition().getStage().$("Group5").hide();
         sym.getComposition().getStage().$("hand_sym33").hide();
         
         sym.getComposition().getStage().$("on_tableS2").show();
         sym.getComposition().getStage().$("on_table").hide();

      });
      //Edge binding end

   })("Door_ani_4");
   //Edge symbol end:'Door_ani_4'

   //=========================================================
   
   //Edge symbol: 'eye_ice_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("eye_ice_2");
   //Edge symbol end:'eye_ice_2'

   //=========================================================
   
   //Edge symbol: 'eye_ice_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1368, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("eye_ice_3");
   //Edge symbol end:'eye_ice_3'

   //=========================================================
   
   //Edge symbol: 'eye_ice_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("eye_ice_4");
   //Edge symbol end:'eye_ice_4'

   //=========================================================
   
   //Edge symbol: 'fire_ani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getComposition().getStage().$("hand_sym15").show();
         sym.getComposition().getStage().$("on_table").show();
         sym.getComposition().getStage().$("on_tableS2").hide();
         sym.getComposition().getStage().$("hand_sym14").hide();
         

      });
      //Edge binding end

   })("fire_ani");
   //Edge symbol end:'fire_ani'

   //=========================================================
   
   //Edge symbol: 'tray_ani'
   (function(symbolName) {   
   
      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_stoneon_tray3}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().$("purle_ani").show();
         sym.getComposition().getStage().$("tray_ani").hide(1000);
         
         sym.getComposition().getStage().getSymbol("purle_ani").play(0);
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stoneon_tray2}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().$("green_ani").show();
         sym.getComposition().getStage().$("tray_ani").hide(1000);
         
         sym.getComposition().getStage().getSymbol("green_ani").play(0);
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_stoneon_tray}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().$("pink_ani").show();
         sym.getComposition().getStage().$("tray_ani").hide(1000);
         
         sym.getComposition().getStage().getSymbol("pink_ani").play(0);
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         
         

      });
      //Edge binding end

   })("tray_ani");
   //Edge symbol end:'tray_ani'

   //=========================================================
   
   //Edge symbol: 'green_ani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.getComposition().getStage().$("hand_sym20").show();
         sym.getComposition().getStage().$("on-table3").hide();
         sym.getComposition().getStage().$("on-table").show();

      });
      //Edge binding end

   })("green_ani");
   //Edge symbol end:'green_ani'

   //=========================================================
   
   //Edge symbol: 'pink_ani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getComposition().getStage().$("hand_sym20").show();
         sym.getComposition().getStage().$("on-table3").hide();
         sym.getComposition().getStage().$("on-table").show();

      });
      //Edge binding end

   })("pink_ani");
   //Edge symbol end:'pink_ani'

   //=========================================================
   
   //Edge symbol: 'purle_ani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.getComposition().getStage().$("hand_sym20").show();
         sym.getComposition().getStage().$("on-table3").hide();
         sym.getComposition().getStage().$("on-table").show();

      });
      //Edge binding end

   })("purle_ani");
   //Edge symbol end:'purle_ani'

   //=========================================================
   
   //Edge symbol: 'tray_ani_2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${__13}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().$("bottale_ani_1").show();
         sym.getComposition().getStage().getSymbol("bottale_ani_1").play(0);
         sym.getComposition().getStage().$("tray_ani_2").hide(1000);
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__22}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().$("bottale_ani_2").show();
         sym.getComposition().getStage().getSymbol("bottale_ani_2").play(0);
         sym.getComposition().getStage().$("tray_ani_2").hide(1000);
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${__32}", "mousedown", function(sym, e) {
         sym.getComposition().getStage().$("bottale_ani_3").show();
         sym.getComposition().getStage().getSymbol("bottale_ani_3").play(0);
         sym.getComposition().getStage().$("tray_ani_2").hide(1000);
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

   })("tray_ani_2");
   //Edge symbol end:'tray_ani_2'

   //=========================================================
   
   //Edge symbol: 'bottale_ani_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("hand_sym21").show();
         sym.getComposition().getStage().$("on-table").show();
         //sym.getComposition().getStage().$("jag_ontable").show();
         //sym.getComposition().getStage().$("jag_ontable2").hide();
         
         sym.getComposition().getStage().$("Rec1").hide();

      });
      //Edge binding end

   })("bottale_ani_1");
   //Edge symbol end:'bottale_ani_1'

   //=========================================================
   
   //Edge symbol: 'bottale_ani_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("hand_sym21").show();
         sym.getComposition().getStage().$("on-table").show();
         sym.getComposition().getStage().$("Rec1").hide();

      });
      //Edge binding end

   })("bottale_ani_2");
   //Edge symbol end:'bottale_ani_2'

   //=========================================================
   
   //Edge symbol: 'bottale_ani_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("hand_sym21").show();
         sym.getComposition().getStage().$("on-table").show();
         sym.getComposition().getStage().$("Rec1").hide();
         

      });
      //Edge binding end

   })("bottale_ani_3");
   //Edge symbol end:'bottale_ani_3'

   //=========================================================
   
   //Edge symbol: 'Jag_water_ani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("steam_ani_1").hide();
         sym.getComposition().getStage().$("Rec1").show();
         sym.getComposition().getStage().$("jag_ontable2").show();
         
         sym.getComposition().getStage().$("steam_ani_2").show();
         
         sym.getComposition().getStage().getSymbol("steam_ani_2").play(0);
         sym.getComposition().getStage().$("coloc_ani").show();
         sym.getComposition().getStage().getSymbol("coloc_ani").play(0);
         
         sym.getComposition().getStage().getSymbol("lady_drop").play(0);
         sym.getComposition().getStage().$("lady_drop").show();
         sym.getComposition().getStage().getSymbol("ice_drop").play(0);
         sym.getComposition().getStage().$("ice_drop").show();
         
         sym.getComposition().getStage().$("lips_exp").show();
         sym.getComposition().getStage().getSymbol("lips_exp").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getComposition().getStage().$("steam_ani_1").show();
         sym.getComposition().getStage().getSymbol("steam_ani_1").play(0);

      });
      //Edge binding end

   })("Jag_water_ani");
   //Edge symbol end:'Jag_water_ani'

   //=========================================================
   
   //Edge symbol: 'steam_ani_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("steam_ani_1");
   //Edge symbol end:'steam_ani_1'

   //=========================================================
   
   //Edge symbol: 'steam_ani_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("steam_ani_2");
   //Edge symbol end:'steam_ani_2'

   //=========================================================
   
   //Edge symbol: 'coloc_ani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("steam_ani_2").hide();
         sym.getComposition().getStage().$("hand_sym23").show();
         sym.getComposition().getStage().$("tawel_ontable2").hide();
         sym.getComposition().getStage().$("tawel_ontable0").show();
         

      });
      //Edge binding end

   })("coloc_ani");
   //Edge symbol end:'coloc_ani'

   //=========================================================
   
   //Edge symbol: 'candle_ani_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2129, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("candle_ani_2");
   //Edge symbol end:'candle_ani_2'

   //=========================================================
   
   //Edge symbol: 'Jag_water_ani_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.getComposition().getStage().$("steam_ani_3").show();
         sym.getComposition().getStage().getSymbol("steam_ani_3").play(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("steam_ani_3").hide();
         sym.getComposition().getStage().$("jag_ontable").show();
         sym.getComposition().getStage().$("steam_ani_4").show();
         sym.getComposition().getStage().getSymbol("steam_ani_4").play(0);
         sym.getComposition().getStage().$("coloc_ani_2").show();
         sym.getComposition().getStage().getSymbol("coloc_ani_2").play(0);
         
         sym.getComposition().getStage().getSymbol("lady_drop_1").play(0);
         sym.getComposition().getStage().$("lady_drop_1").show();
         sym.getComposition().getStage().getSymbol("ice_drop_1").play(0);
         sym.getComposition().getStage().$("ice_drop_1").show();
         sym.getComposition().getStage().$("lips_exp").show();
         sym.getComposition().getStage().getSymbol("lips_exp").play(0);

      });
      //Edge binding end

   })("Jag_water_ani_2");
   //Edge symbol end:'Jag_water_ani_2'

   //=========================================================
   
   //Edge symbol: 'steam_ani_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("steam_ani_3");
   //Edge symbol end:'steam_ani_3'

   //=========================================================
   
   //Edge symbol: 'coloc_ani_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("steam_ani_4").hide();
         sym.getComposition().getStage().$("tawel_ontable3").hide();
         sym.getComposition().getStage().$("tawel_ontable2").hide();
         sym.getComposition().getStage().$("tawel_ontable").hide();
         sym.getComposition().getStage().$("tawel_ontable1").show();
         sym.getComposition().getStage().$("hand_sym23").show();
         

      });
      //Edge binding end

   })("coloc_ani_2");
   //Edge symbol end:'coloc_ani_2'

   //=========================================================
   
   //Edge symbol: 'steam_ani_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("steam_ani_4");
   //Edge symbol end:'steam_ani_4'

   //=========================================================
   
   //Edge symbol: 'lady_drop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11676, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("tawel_ontable2").show();
         sym.getComposition().getStage().$("hand_sym36").hide();
         sym.getComposition().getStage().$("hand_sym20").show();
         sym.getComposition().getStage().$("on-table3").hide();
         sym.getComposition().getStage().$("on-table").show();
         sym.getComposition().getStage().$("tawel_ontable3").hide();

      });
      //Edge binding end

   })("lady_drop");
   //Edge symbol end:'lady_drop'

   //=========================================================
   
   //Edge symbol: 'ice_drop'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("hand_sym23").show();
         sym.getComposition().getStage().$("tawel_ontable3").show();
         sym.getComposition().getStage().$("tawel_ontable33").show();

      });
      //Edge binding end

   })("ice_drop");
   //Edge symbol end:'ice_drop'

   //=========================================================
   
   //Edge symbol: 'lady_drop_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         
         sym.getComposition().getStage().$("Group6").hide();
         sym.getComposition().getStage().$("Group8").show();
         sym.getComposition().getStage().$("text_ani_2").show();
         sym.getComposition().getStage().getSymbol("text_ani_2").play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("tawel_ontable2").show();

      });
      //Edge binding end

   })("lady_drop_1");
   //Edge symbol end:'lady_drop_1'

   //=========================================================
   
   //Edge symbol: 'ice_drop_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15101, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("hand_sym23").show();
         sym.getComposition().getStage().$("tawel_ontable3").hide();
         sym.getComposition().getStage().$("tawel_ontable33").show();
         

      });
      //Edge binding end

   })("ice_drop_1");
   //Edge symbol end:'ice_drop_1'

   //=========================================================
   
   //Edge symbol: 'show_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("show_sym");
   //Edge symbol end:'show_sym'

   //=========================================================
   
   //Edge symbol: 'more_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("more_sym");
   //Edge symbol end:'more_sym'

   //=========================================================
   
   //Edge symbol: 'play_again_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("play_again_sym");
   //Edge symbol end:'play_again_sym'

   //=========================================================
   
   //Edge symbol: 'lips_exp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
         sym.getSymbolElement().hide();

      });
      //Edge binding end

   })("lips_exp");
   //Edge symbol end:'lips_exp'

   //=========================================================
   
   //Edge symbol: 'eye_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1818, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("ic_eye");
   //Edge symbol end:'ic_eye'

   //=========================================================
   
   //Edge symbol: 'eye_5'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("eye_5");
   //Edge symbol end:'eye_5'

   //=========================================================
   
   //Edge symbol: 'text_ani_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         
         sym.getComposition().getStage().$("next_level_2").show();
         sym.getComposition().getStage().getSymbol("next_level_2").play();

      });
      //Edge binding end

   })("text_ani_2");
   //Edge symbol end:'text_ani_2'

   //=========================================================
   
   //Edge symbol: 'next_level_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("next_level_3");
   //Edge symbol end:'next_level_3'

   //=========================================================
   
   //Edge symbol: 'wings_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("wings_sym");
   //Edge symbol end:'wings_sym'

   //=========================================================
   
   //Edge symbol: 'wings_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("wings_3");
   //Edge symbol end:'wings_3'

   //=========================================================
   
   //Edge symbol: 'Ladybug_towel_eye'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("Ladybug_towel_eye");
   //Edge symbol end:'Ladybug_towel_eye'

   //=========================================================
   
   //Edge symbol: 'eye_lady_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("eye_lady_4");
   //Edge symbol end:'eye_lady_4'

   //=========================================================
   
   //Edge symbol: 'eye_lady_11'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1639, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("eye_lady_11");
   //Edge symbol end:'eye_lady_11'

   //=========================================================
   
   //Edge symbol: 'ladybug_towel_'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("ladybug_towel_");
   //Edge symbol end:'ladybug_towel_'

   //=========================================================
   
   //Edge symbol: 'eye_lady_3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1350, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("eye_lady_3");
   //Edge symbol end:'eye_lady_3'

   //=========================================================
   
   //Edge symbol: 'eye_lady_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1102, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("eye_lady_2");
   //Edge symbol end:'eye_lady_2'

   //=========================================================
   
   //Edge symbol: 'wins'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("wins");
   //Edge symbol end:'wins'

   //=========================================================
   
   //Edge symbol: 'eye_55'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("eye_55");
   //Edge symbol end:'eye_55'

   //=========================================================
   
   //Edge symbol: 'star'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("star");
   //Edge symbol end:'star'

   //=========================================================
   
   //Edge symbol: 'nextlevelbutton_3'
   (function(symbolName) {   
   
   })("nextlevelbutton_3");
   //Edge symbol end:'nextlevelbutton_3'

   //=========================================================
   
   //Edge symbol: 'scrolling'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("hand_1").hide();
         sym.getComposition().getStage().$("arrownew").hide();
         sym.getComposition().getStage().$("Group4").show();
         sym.getComposition().getStage().$("Group2").hide();
         sym.getComposition().getStage().$("text_ani_1").show();
         sym.getComposition().getStage().getSymbol("text_ani_1").play(0);
         sym.getComposition().getStage().$("Next_level_2").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.getComposition().getStage().$("hand_1").show();

      });
      //Edge binding end

   })("scrolling");
   //Edge symbol end:'scrolling'

   //=========================================================
   
   //Edge symbol: 'arrownew'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 959, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("arrownew");
   //Edge symbol end:'arrownew'

   //=========================================================
   
   //Edge symbol: 'scrolling_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.getSymbolElement().hide();
         sym.getComposition().getStage().$("hand_1").hide();
         sym.getComposition().getStage().$("arrownew2").hide();
         sym.getComposition().getStage().$("Group5").hide();
         sym.getComposition().getStage().$("Group6").show();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.getComposition().getStage().$("hand_1").show();

      });
      //Edge binding end

      })("scrolling_2");
   //Edge symbol end:'scrolling_2'

   //=========================================================
   
   //Edge symbol: 'elsadresseye'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2554, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("elsadresseye");
   //Edge symbol end:'elsadresseye'

   //=========================================================
   
   //Edge symbol: 'title_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         
         sym.play(6000);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_board-next}", "mousedown", function(sym, e) {
         
         sym.getComposition().getStage().$("Group2").show();
         sym.getComposition().getStage().$("storygrp").hide();
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/sound/buttan.mp3");
         }
         

      });
      //Edge binding end

   })("title_sym");
   //Edge symbol end:'title_sym'

   //=========================================================
   
   //Edge symbol: 'duck'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("duck");
   //Edge symbol end:'duck'

   //=========================================================
   
   //Edge symbol: 'water'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("water");
   //Edge symbol end:'water'

   //=========================================================
   
   //Edge symbol: 'shawer_ani1_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         
         sym.getComposition().getStage().$("hand_sym18").show();
         sym.getComposition().getStage().$("tawel_area_2").show();
         sym.getComposition().getStage().$("shawer6").show();
         sym.getComposition().getStage().$("stand2").show();

      });
         //Edge binding end

      })("shawer_ani2");
   //Edge symbol end:'shawer_ani2'

   //=========================================================
   
   //Edge symbol: 'glow_ani'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("glow_ani");
   //Edge symbol end:'glow_ani'

   //=========================================================
   
   //Edge symbol: 'shoes_sym1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("shoes_sym1");
   //Edge symbol end:'shoes_sym1'

   //=========================================================
   
   //Edge symbol: 'jwel_sym1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("jwel_sym1");
   //Edge symbol end:'jwel_sym1'

   //=========================================================
   
   //Edge symbol: 'dres_sym1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("dres_sym1");
   //Edge symbol end:'dres_sym1'

   //=========================================================
   
   //Edge symbol: 'dres_sym2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("dres_sym2");
   //Edge symbol end:'dres_sym2'

   //=========================================================
   
   //Edge symbol: 'shoes_sym2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("shoes_sym2");
   //Edge symbol end:'shoes_sym2'

   //=========================================================
   
   //Edge symbol: 'jwel_sym2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("jwel_sym2");
   //Edge symbol end:'jwel_sym2'

   //=========================================================
   
   //Edge symbol: 'eye_shawr2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("eye_shawr2");
   //Edge symbol end:'eye_shawr2'

   //=========================================================
   
   //Edge symbol: 's_eye1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1140, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("s_eye1");
   //Edge symbol end:'s_eye1'

   //=========================================================
   
   //Edge symbol: 's_eye2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("s_eye2");
   //Edge symbol end:'s_eye2'

   //=========================================================
   
   //Edge symbol: 'hand_sym2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("hand_sym2");
   //Edge symbol end:'hand_sym2'

})(jQuery, AdobeEdge, "EDGE-343706490");