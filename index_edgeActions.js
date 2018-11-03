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
           a=0;
           
           
         $(document).ready(function(){  
         
             c = 0;
             curr_cloth=0;
             type = 'dress';
             type2 = 'dress';
             type3 = 'dress';
         	 showcount = 0;
         
         	 girl1_dress = 0;
         	 girl1_shoe = 0;
         	 girl1_jwel = 0;
         	 var timer3;
         
         	 /////////g1 setting vars
         		i=0;				 
         		var_dress=0;
         		var_shoe=0;
         		var_jwel=0;				 
         
         	 /////g1 setting vars end
         
             /////////g2 setting vars	
         	 /////g2 setting vars end
         
         });
         // show an element 
         sym.$("start_screen").show(); 
         
         // Hide an element 
         sym.$("hand_sym").hide();
         sym.$("two_screen").hide();
         sym.$("Next_Screen").hide();
         
         sym.$("image_top").hide();
         sym.$("image_bottom").hide();
         sym.$("liquid").hide();
         sym.$("container").hide();
         
         sym.getComposition().getStage().$("greenbar").hide();
         sym.getComposition().getStage().$("redbar").hide();
         
         sym.$("Girl1_Wardrobe").hide();
         sym.$("Girl2_Wardrobe").hide();
         //2345678
         sym.$("Girl1_Dressup2").hide();
         sym.$("Girl2_Dressup2").hide();
         
         try{
         myshoe_co =[
         				 {"W":"110","H":"54","img":"images/gril_shoes/G1_Shoes/1ws1.png"},
         				 {"W":"58","H":"48","img":"images/gril_shoes/G1_Shoes/1ws2.png"},
         				 {"W":"51","H":"60","img":"images/gril_shoes/G1_Shoes/1ws3.png"},
         				 {"W":"54","H":"49","img":"images/gril_shoes/G1_Shoes/1ws4.png"},
         				 {"W":"61","H":"54","img":"images/gril_shoes/G1_Shoes/1ws5.png"},
         
         				 {"W":"54","H":"56","img":"images/gril_shoes/G2_Shoes/2ws1.png"},	
         				 {"W":"69","H":"61","img":"images/gril_shoes/G2_Shoes/2ws2.png"},	
         				 {"W":"51","H":"52","img":"images/gril_shoes/G2_Shoes/2ws3.png"},	
         				 {"W":"81","H":"60","img":"images/gril_shoes/G2_Shoes/2ws4.png"},	
         				 {"W":"59","H":"53","img":"images/gril_shoes/G2_Shoes/2ws5.png"}	
         				];
         
         myjwel_co =[
         				 {"W":"56","H":"44","img":"images/gril_Jewl/Gril1_jew/G1J1.png"},
         				 {"W":"61","H":"48","img":"images/gril_Jewl/Gril1_jew/G1J2.png"},
         				 {"W":"58","H":"57","img":"images/gril_Jewl/Gril1_jew/G1J3.png"},
         				 {"W":"60","H":"66","img":"images/gril_Jewl/Gril1_jew/G1J14.png"},
         				 {"W":"68","H":"87","img":"images/gril_Jewl/Gril1_jew/G1J15.png"},
         
         				 {"W":"49","H":"36","img":"images/gril_Jewl/Gril2_jew/GJ1.png"},	
         				 {"W":"59","H":"45","img":"images/gril_Jewl/Gril2_jew/GJ2.png"},	
         				 {"W":"60","H":"49","img":"images/gril_Jewl/Gril2_jew/GJ3.png"},	
         				 {"W":"61","H":"46","img":"images/gril_Jewl/Gril2_jew/GJ4.png"},	
         				 {"W":"57","H":"96","img":"images/gril_Jewl/Gril2_jew/GJ5.png"}	
         				];
         
         mydress_co =[
         				 {"W":"96","H":"188","img":"images/Gril_dress/Gril1/Sd1.png"},
         				 {"W":"110","H":"180","img":"images/Gril_dress/Gril1/Sd2.png"},
         				 {"W":"150","H":"250","img":"images/Gril_dress/Gril1/Sd3.png"},
         				 {"W":"53","H":"140","img":"images/Gril_dress/Gril1/Sd4.png"},
         				 {"W":"191","H":"396","img":"images/Gril_dress/Gril1/Sd5.png"},
         				 {"W":"135","H":"231","img":"images/Gril_dress/Gril1/Sd6.png"},
         
         				 {"W":"113","H":"212","img":"images/Gril_dress/Gril2/Gd1.png"},	
         				 {"W":"130","H":"131","img":"images/Gril_dress/Gril2/Gd2.png"},	
         				 {"W":"58","H":"179","img":"images/Gril_dress/Gril2/Gd3.png"},	
         				 {"W":"250","H":"450","img":"images/Gril_dress/Gril2/Gd4.png"},	
         				 {"W":"160","H":"250","img":"images/Gril_dress/Gril2/Gd5.png"},	
         				 {"W":"143","H":"233","img":"images/Gril_dress/Gril2/Gd6.png"}	
         				];
         	}
         //////////////////////////////////////////////
         
         catch(e){alert(e);}
         
           yepnope({ nope : ["jquery-ui.min.js","data_set_get.js","jquery.ui.touch-punch.js"], complete : init});
         function init()
         {
         sym.getComposition().getStage().$("brownbox").hide();
         sym.getComposition().getStage().$("Search_anim_1").show();
         sym.getComposition().getStage().getSymbol("Search_anim_1").play(0);
         
         ///// all stop and hide mark
         
         //////hide
         sym.$("start_screen").show(); 
         sym.$("two_screen").hide();
         sym.$("Next_Screen").hide();
         sym.$("wardrobe_set").hide();
         
         sym.$("Last_page").hide();
         sym.$("base_symbol").hide();
         sym.$("Search_anim_1").hide();
         
         
         sym.$("Girl1_Wardrobe").hide();
         sym.$("Girl2_Wardrobe").hide();
         
         sym.$("Girl1_Dressup1").hide();
         sym.$("Girl2_Dressup2").hide();
         
         sym.$("image_top").hide();
         sym.$("image_bottom").hide();
         
         sym.$("my_hand4").hide();
         
         sym.$("liquid").hide();
         sym.$("container").hide();
         
         // stop an element 
         
         sym.getSymbol("Girl1").stop(0);
         sym.getSymbol("Girl2").stop(0);
         sym.getSymbol("Search_anim_1").stop(0);
         
         
         /////////////////////////////////////////////////////
         //ad ajax call
         
         
         /////////////////////////////////////////////////////////////////////////////
         //sound
         var my_MUSIC;
         var effect;
         var flag1=0;
         
         
         
         sym.playeffect =function (url){ 
                      try{                               
                      effect = new Media(url,function () {},function (err3) {/*alert("ere3="+err3);*/},
                      function (status){
                                       if (status === Media.MEDIA_STOPPED){
                                          //alert("status="+status);
                                          //effect.play();
                                           effect.release();
                                           //alert('relesed');
                                          }
                                 });
                       effect.play();          
                      }catch(e40){/*alert("effect Audio ERR ="+e40);*/}
         }                  
         
         document.addEventListener("deviceready", onDeviceReady, false);
         document.addEventListener("backbutton", xyz33, false);
         document.addEventListener("menubutton", xyz1, false);
         document.addEventListener("pause", xyz2, false);
         document.addEventListener("resume", xyz3, false);
         
         function xyz1(e){myexitapp();navigator.app.exitApp();}
         
         
         function xyz2(e){myexitapp();
         my_MUSIC.pause();sym.$("pause").hide();sym.$("play").show();}
         
         
         function xyz3(e){onDeviceReady();usersoundstatus();}
         
         function xyz33(e){myexitapp();navigator.app.exitApp(); }
         
         function myexitapp(){
         my_MUSIC.pause();sym.$("pause").hide();sym.$("play").show();
                  //my_MUSIC.stop();
                  my_MUSIC.release();
                  delete my_MUSIC;
                   my_MUSIC = null;
                  delete my_MUSIC;
         }
         
          function usersoundstatus()
          { try{//0= no   1= yes 
          var s = data_get_string("status","1000");
         	if(s == "1000")
         	{ //alert("if s="+s);
         	  data_set_string("status","1");
         		my_MUSIC.play();sym.$("play").hide();sym.$("pause").show();
         	}
         	else if(s == "1"){/*alert("else1 s="+s);*/my_MUSIC.play();sym.$("play").hide();sym.$("pause").show();}
         	else{/*alert("else0 s="+s);*/my_MUSIC.pause();sym.$("pause").hide();sym.$("play").show();}
         
         }catch(ex){/*alert("usersoundstatus= "+ex);*/}
          }
          function onDeviceReady(){
         
          //alert("READ")
                 loopMUSIC("file:///android_asset/www/media/amazing.mp3");
         
             function loopMUSIC(url) { 
                                     try{                               
                                         my_MUSIC = new Media(url,function () {},function (err3) {/*alert("ere3="+err3);*/},
         
                                         function (status){
                                                     if (status === Media.MEDIA_STOPPED){
                                                        //alert("status="+status);
                                                         my_MUSIC.play();
                                                         }
         
                                             });
         
         //sym.$("play").hide();
         //sym.$("pause").show();
         //alert("Play");
         //my_MUSIC.play();
         
         sym.pauseclick = function(){try{
         data_set_string("status","0");
         my_MUSIC.pause();sym.$("pause").hide();sym.$("play").show();
         }catch(de){alert("sym.pauseclick ="+de);}
         }
         
         sym.playclick = function(){try{
         data_set_string("status","1");
         my_MUSIC.play();sym.$("play").hide();sym.$("pause").show();
         }catch(de1){alert("sym.playclick ="+de1);}
         }
         
         sym.pauseAudio4reload = function(){
                  my_MUSIC.pause();sym.$("pause").hide();sym.$("play").show();
                  my_MUSIC.release();
                  delete my_MUSIC;
                   my_MUSIC = null;
                  delete my_MUSIC;
         				}
         
         usersoundstatus();
         }catch(e2){alert("Audio ERR ="+e2);}
         }
         
         }
         /////////////////////// testing start mark end///////
         
         
         
         var myn;
         var myimgid;
            var tmylast=0;
         
         
         ////////////////////////////////////////////////////
         //Girl_1 wardrobe Setting dragdrop
         var mylast = 0;
         try{
         
         sym.$("G1_div1").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G1_div2").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G1_div3").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G1_div4").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G1_div5").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G1_div6").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G1_div7").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G1_div8").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G1_div9").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G1_div10").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G1_div11").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G1_div12").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G1_div13").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G1_div14").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G1_div15").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G1_div16").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");mylast = 1;/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         
          }catch(e){alert(" Girl1 wardrobe Setting dragg"+e)}
         
         
         try{
         sym.$("Dress_Drop1").droppable({ 
         snap: true,
         snapTolerance: 100,
         /*accept: function(dropElem) {
             if(myn == "dress"){
         		alert('accept');
         		//sym.$("g1div1").hide();
         		//var t = $(this).attr("id");
         		//alert(t);
         		//sym.$(t).hide();
         		}
         		else{alert('RETURN');return;}
           },*/
         drop: function(ev, ui)
         	{
         
         	//alert('girl1');
         	//alert("draggableId = "+ ui.draggable.attr("id"));
         	//alert("droppableId = "+ $(this).attr("id"));
            if(myn == "dress"){	 sym.getComposition().getStage().GirlOneSetting();	
         		//sym.$("g1div1").hide();
         		var t = ui.draggable.attr("id");
         		//alert(t);
         		sym.$("#"+t).hide();
         		sym.$(myimgid).show();   
               sym.$("my_hand1").hide();
               sym.$("my_hand2").show();
         
               sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		}
         		else{//alert('RETURN');
                   ui.draggable.draggable('option','revert',true);
                   }
             if(mylast == 1)
         		{ //alert('mylast dress_drop');
         
         		mylast == 0;
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("girl1_wardrobe_set").hide();
         		sym.getComposition().getStage().$("girl2").hide();
         		sym.getComposition().getStage().$("girl1").hide();
         		sym.getComposition().getStage().$("green_box").hide();
         		sym.getComposition().getStage().$("lower1").hide();
         		sym.getComposition().getStage().$("upper1").hide();
         		sym.getComposition().getStage().$("green_box2").hide();
         		sym.getComposition().getStage().$("my_hand3").hide();
         		sym.getComposition().getStage().$("my_hand2").hide();
         		sym.getComposition().getStage().$("Girl2_Wardrobe").show();		
         
         		sym.getComposition().getStage().$("s2_one").hide();
         		sym.getComposition().getStage().$("s2_two").hide();
         		sym.getComposition().getStage().$("s2_three").hide();
         		sym.getComposition().getStage().$("s2_four").hide();
         		sym.getComposition().getStage().$("s2_five").hide();
         
         		sym.getComposition().getStage().$("j2_one").hide();
         		sym.getComposition().getStage().$("j2_two").hide();
         		sym.getComposition().getStage().$("j2_three").hide();
         		sym.getComposition().getStage().$("j2_four").hide();
         		sym.getComposition().getStage().$("j2_five").hide();
         
         		sym.getComposition().getStage().$("d2_one").hide();
         		sym.getComposition().getStage().$("d2_two").hide();
         		sym.getComposition().getStage().$("d2_three").hide();
         		sym.getComposition().getStage().$("d2_four").hide();
         		sym.getComposition().getStage().$("d2_five").hide();
         		sym.getComposition().getStage().$("d2_six").hide();	
               sym.getComposition().getStage().$("my_hand44").hide()
         		sym.getComposition().getStage().getSymbol("MyTrigger22").play();
         
         		}          
         	}
         });
         }catch(e){alert(" Girl1 wardrobe Setting dress_drop"+e)}
         
         
         
         
         try{
         sym.$("Shoe_Drop1").droppable({ 
         snap: true,
         snapTolerance: 100,
         drop: function(ev, ui)
         	{
         
         	//alert("draggableId = "+ ui.draggable.attr("id"));
         	//alert("droppableId = "+ $(this).attr("id"));
         		if(myn == "shoe"){ sym.getComposition().getStage().GirlOneSetting();
         			var t = ui.draggable.attr("id");		
         			sym.$("#"+t).hide();
         			sym.$(myimgid).show();
                  //sym.$("my_hand2").hide();
                //  sym.$("my_hand3").hide();
         
         sym.getSymbol("my_hand3").stop(2000);
         sym.getSymbol("my_hand2").stop(2000);
         
         			sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		}
         		else{//alert('RETURN');
                   ui.draggable.draggable('option','revert',true);
                   }
              if(mylast == 1)
         		  {
         
         		  //alert('mylast shoe_drop');
         		  mylast == 0;
                 }	     
         
         	}
         });
         
         }catch(e){alert(" Girl1 wardrobe Setting shoe_drop"+e)}
         
         try{
         sym.$("Jwe_Drop1").droppable({ 
         snap: true,
         snapTolerance: 100,
         drop: function(ev, ui)
         	{
         	tolerance: "fit";	
         
         	//alert("draggableId = "+ ui.draggable.attr("id"));
         	//alert("droppableId = "+ $(this).attr("id"));
         		if(myn == "jwel"){	 sym.getComposition().getStage().GirlOneSetting();	
         			var t = ui.draggable.attr("id");		
         			sym.$("#"+t).hide();
         			sym.$(myimgid).show();
         	 sym.$("my_hand2").hide();
         	 sym.$("my_hand3").show();
         
         			sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		}
         		else{//alert('RETURN');
                   ui.draggable.draggable('option','revert',true);
                   }
                 if(mylast == 1)
         		  {	//alert('mylast jwel_drop');
         				mylast == 0;
         		   }		      
         	}
         });
         
         }catch(e){alert(" Girl1 wardrobe Setting jwel_drop"+e)}
         
         
         //Girl_2 wardrobe Setting dragdrop
         
         try{
         
         sym.$("G2_div1").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G2_div2").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G2_div3").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G2_div4").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G2_div5").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G2_div6").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G2_div7").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G2_div8").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G2_div9").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G2_div10").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G2_div11").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G2_div12").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G2_div13").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G2_div14").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G2_div15").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         sym.$("G2_div16").draggable({revert:"invalid",
         start: function( event, ui ){myn = $(this).attr("name");myimgid = $(this).attr("value");tmylast = 1;/*alert("myn = "+myn+"\nmyimgid = "+myimgid);*/}});
         
          }catch(e){alert(" Girl2 wardrobe Setting dragg"+e)}
         
         
         try{
         sym.$("dress_drop2").droppable({ 
         snap: true,
         snapTolerance: 100,
         drop: function(ev, ui)
         	{
            if(myn == "dress"){			sym.getComposition().getStage().GirlOneSetting22();	
         		var t = ui.draggable.attr("id");		
         		sym.$("#"+t).hide();
         		sym.$(myimgid).show();
         		sym.$("my_hand4").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/sound13.mp3");
         		}
         		else{//alert('RETURN');
                   ui.draggable.draggable('option','revert',true);
                   }
              if(tmylast == 1)
         		  {	//alert('tmylast dress_drop');
         				tmylast = 0;
         				sym.getComposition().getStage().$("Girl2_Wardrobe").hide();	
         		sym.getComposition().getStage().$("Girl1_Dressup1").show();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         
         		sym.getComposition().getStage().$("Girl2_Dressup2").hide();
         
         		sym.getComposition().getStage().$("next_sym").hide();				
         		sym.getComposition().getStage().getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres7").show();
         
         
         
         		sym.getComposition().getStage().getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres1").hide();
         		sym.getComposition().getStage().getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres2").hide();
         		sym.getComposition().getStage().getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres3").hide();
         		sym.getComposition().getStage().getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres4").hide();
         		sym.getComposition().getStage().getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres5").hide();
         		sym.getComposition().getStage().getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres6").hide();		
         
         		sym.getComposition().getStage().getSymbol("girl2_dresup").$("sw_default1").show();		
         		sym.getComposition().getStage().getSymbol("girl2_dresup").$("sw_one2").hide();
         		sym.getComposition().getStage().getSymbol("girl2_dresup").$("sw_two2").hide();
         		sym.getComposition().getStage().getSymbol("girl2_dresup").$("sw_three2").hide();
         		sym.getComposition().getStage().getSymbol("girl2_dresup").$("sw_four2").hide();
         		sym.getComposition().getStage().getSymbol("girl2_dresup").$("sw_five2").hide();
         
         	   sym.getComposition().getStage().$("jw_one1").hide();
         		sym.getComposition().getStage().$("jw_two1").hide();
         		sym.getComposition().getStage().$("jw_three1").hide();
         		sym.getComposition().getStage().$("jw_four1").hide();
         		sym.getComposition().getStage().$("jw_five1").hide();	
         		   }		       
         	}
         });
         }catch(e){alert(" Girl2 wardrobe Setting dress_drop"+e)}
         
         
         
         
         try{
         sym.$("Shoe_Drop_2").droppable({ 
         snap: true,
         snapTolerance: 100,
         drop: function(ev, ui)
         	{	
         		if(myn == "shoe"){ sym.getComposition().getStage().GirlOneSetting22();	
         			var t = ui.draggable.attr("id");		
         			sym.$("#"+t).hide();
         			sym.$(myimgid).show();
         			sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		}
         		else{//alert('RETURN');
                   ui.draggable.draggable('option','revert',true);
                   }
               if(tmylast == 1)
         		  {	//alert('tmylast shoe_drop');
         				tmylast = 0;
         		   }		     
         	}
         });
         
         }catch(e){alert(" Girl2 wardrobe Setting shoe_drop"+e)}
         
         try{
         sym.$("Jwe_Drop_2").droppable({ 
         snap: true,
         snapTolerance: 100,
         drop: function(ev, ui)
         	{ 
         	tolerance: "fit";	
         		if(myn == "jwel"){		sym.getComposition().getStage().GirlOneSetting22();	
         			var t = ui.draggable.attr("id");		
         			sym.$("#"+t).hide();
         			sym.$(myimgid).show();
         			sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		}
         		else{//alert('RETURN');
                   ui.draggable.draggable('option','revert',true);
                   }
               if(tmylast == 1)
         		  {	//alert('tmylast jwel_drop');
         				tmylast = 0;
         		   }
         
         	}
         });
         
         }catch(e){alert(" Girl2 wardrobe Setting jwel_drop"+e)}
         
         
         
         ////////////////////////////////////////////////////
         // Searching Drag Drop
         
         try{
         sym.$("div1").draggable({revert:"invalid",scope:"gear"});
         sym.$("div2").draggable({revert:"invalid",scope:"gear"});
         sym.$("div3").draggable({revert:"invalid",scope:"gear"});
         sym.$("div4").draggable({revert:"invalid",scope:"gear"});
         sym.$("div5").draggable({revert:"invalid",scope:"gear"});
         sym.$("div6").draggable({revert:"invalid",scope:"gear"});
         sym.$("div7").draggable({revert:"invalid",scope:"gear"});
         sym.$("div8").draggable({revert:"invalid",scope:"gear"});
         sym.$("div9").draggable({revert:"invalid",scope:"gear"});
         sym.$("div10").draggable({revert:"invalid",scope:"gear"});
         sym.$("div11").draggable({revert:"invalid",scope:"gear"});
         sym.$("div12").draggable({revert:"invalid",scope:"gear"});
         sym.$("div13").draggable({revert:"invalid",scope:"gear"});
         sym.$("div14").draggable({revert:"invalid",scope:"gear"});
         sym.$("div15").draggable({revert:"invalid",scope:"gear"});
         sym.$("div16").draggable({revert:"invalid",scope:"gear"});
         sym.$("div17").draggable({revert:"invalid",scope:"gear"});
         sym.$("div18").draggable({revert:"invalid",scope:"gear"});
         sym.$("div19").draggable({revert:"invalid",scope:"gear"});
         sym.$("div20").draggable({revert:"invalid",scope:"gear"});
         sym.$("div21").draggable({revert:"invalid",scope:"gear"});
         sym.$("div22").draggable({revert:"invalid",scope:"gear"});
         sym.$("div23").draggable({revert:"invalid",scope:"gear"});
         sym.$("div24").draggable({revert:"invalid",scope:"gear"});
         sym.$("div25").draggable({revert:"invalid",scope:"gear"});
         sym.$("div26").draggable({revert:"invalid",scope:"gear"});
         sym.$("div27").draggable({revert:"invalid",scope:"gear"});
         sym.$("div28").draggable({revert:"invalid",scope:"gear"});
         sym.$("div29").draggable({revert:"invalid",scope:"gear"});
         sym.$("div30").draggable({revert:"invalid",scope:"gear"});
         sym.$("div31").draggable({revert:"invalid",scope:"gear"});
         sym.$("div32").draggable({revert:"invalid",scope:"gear"});
         
         var topmgt = 0;
         var topcount = 0;
         sym.$("Rectangle").droppable({ 
         scope:"gear",
         //accept:'div2',
         snap: true,
         snapTolerance: 100,
         drop: function(ev, ui)
         	{
         	tolerance: "fit";	
         	//alert('accept1');
         	//alert("draggableId = "+ ui.draggable.attr("id"));
         	//alert("droppableId = "+ $(this).attr("id"));
         
         	if(ui.draggable.attr("id")=="Stage_div1")	
         		{
         		sym.$("div1").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
                test();
         		//alert($("#Stage_liquid").offset().top);
         		//sym.getComposition().getStage().$("greenbar").css('top',"80%");//80-5
         		//alert($("#Stage_liquid").offset().top);
         		sym.$("hand_sym").hide();
         		}
         	else if(ui.draggable.attr("id")=="Stage_div2")	
         		{
         		sym.$("div2").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("greenbar").css('top',"77.5%");	
         		test();	
         	   sym.$("hand_sym").hide();
         
         		}	
         
         	else if(ui.draggable.attr("id")=="Stage_div3")	
         		{
         		sym.$("div3").hide();	
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("greenbar").css('top',"75%");
         		test();
         		sym.$("hand_sym").hide();
         		}	
         
         	else if(ui.draggable.attr("id")=="Stage_div4")	
         		{
         		sym.$("div4").hide();	
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"72.50%");
         		test();
         		sym.$("hand_sym").hide();
         		}	
         
         	else if(ui.draggable.attr("id")=="Stage_div5")	
         		{
         		sym.$("div5").hide();	
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"70%");
         		test();
         		sym.$("hand_sym").hide();
         		}	
         
         	else if(ui.draggable.attr("id")=="Stage_div6")	
         		{
         		sym.$("div6").hide();	
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"67.5%");
         		test();
         		sym.$("hand_sym").hide();
         
         		}	
         
         	else if(ui.draggable.attr("id")=="Stage_div7")	
         		{
         		sym.$("div7").hide();	
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"65%");
         		test();
         		sym.$("hand_sym").hide();
         		}	
         
         	else if(ui.draggable.attr("id")=="Stage_div8")	
         		{
         		sym.$("div8").hide();	
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"62.5%");
         		test();
         		sym.$("hand_sym").hide();
         		}	
         
         	else if(ui.draggable.attr("id")=="Stage_div9")	
         		{
         		sym.$("div9").hide();	
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"60%");
         		test();
         		sym.$("hand_sym").hide();
         		}	
         
         	else if(ui.draggable.attr("id")=="Stage_div10")	
         		{
         		sym.$("div10").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		sym.$("image_bottom").show();
         		//sym.getComposition().getStage().$("liquid").css('top',"57.5%");
         		test();
         		sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div11")	
         		{
         		sym.$("div11").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"55%");
         		test();
         		sym.$("hand_sym").hide();
         		}
         	else if(ui.draggable.attr("id")=="Stage_div12")	
         		{
         		sym.$("div12").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"52.5%");
         		test();
         		sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div13")	
         		{
         		sym.$("div13").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"50%");
         		test();
         		sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div14")	
         		{
         		sym.$("div14").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"47.5%");
         		test();
         		sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div15")	
         		{
         		sym.$("div15").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"45%");
         		test();
         		sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div16")	
         		{
         		sym.$("div16").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"42.5%");
         		test();
         		sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div17")	
         		{
         		sym.$("div17").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"40%");
         		test();
         		sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div18")	
         		{
         		sym.$("div18").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"37.5%");
         		test();
         	sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div19")	
         		{
         		sym.$("div19").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"35%");
         		test();
         		sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div20")	
         		{sym.$("div20").hide();	
         		sym.$("image_top").show();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"32.5%");
         		test();
         		sym.$("hand_sym").hide();
         		}	
         
         	else if(ui.draggable.attr("id")=="Stage_div21")	
         		{
         		sym.$("div21").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"30%");
         		test();
         		sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div22")	
         		{
         		sym.$("div22").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"27.5%");
         		test();
         		sym.$("hand_sym").hide();
         		}	
         
         	else if(ui.draggable.attr("id")=="Stage_div23")	
         		{
         		sym.$("div23").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"25%");
         		test();
         		sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div24")	
         		{
         		sym.$("div24").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"22.5%");
         	    test();
         		sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div25")	
         		{
         		sym.$("div25").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"20%");
         		test();
         		sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div26")	
         		{
         		sym.$("div26").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"17.5%");
         		test();
         	   sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div27")	
         		{
         		sym.$("div27").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"15%");
         		test();
         	   sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div28")	
         		{
         		sym.$("div28").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"12.5%");
         		test();
         	   sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div29")	
         		{
         		sym.$("div29").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"10%");
         		test();
             	sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div30")	
         		{
         		sym.$("div30").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"7.5%");
         		test();
         	   sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div31")	
         		{
         		sym.$("div31").hide();
         		sym.getComposition().getStage().playeffect("file:///android_asset/www/media/comingout.mp3");
         		//sym.getComposition().getStage().$("liquid").css('top',"5%");
         		test();
         		// Show an element 
         		//sym.$("next_screen1").show();
         		  //alert('ok');		  
         
         	   sym.$("hand_sym").hide();
         		}		
         
         	else if(ui.draggable.attr("id")=="Stage_div32")	
         		{
         		sym.$("div32").hide();
         		sym.getComposition().getStage().$("liquid").css('height',"39%");
         		}	
         
         	else {alert('Cloth Collection err');
         			alert("draggableId = "+ ui.draggable.attr("id"));
         			alert("droppableId = "+ $(this).attr("id"));
         			}
         
         	}
         });
         
         }catch(e){alert("err stage "+e)}
         
         
         var h;
         var hpx;
         var dh;
         function test()
         { 
         
           try{
         	//alert("in test\n topcount = "+topcount+"\ntopmgt = "+topmgt);
         	if(topcount == 22){
         	clearInterval(timer3);
         		i=0;
         
         	sym.getComposition().getStage().$("greenbar").css('top',h);
         	sym.$("Next_Screen").show();
         	//alert('return');
            sym.$("brownbox").show();
            sym.$("dress3").hide();	
         	sym.$("dress2").hide();
         	sym.$("dres1").hide();	
         
         	// Hide an element 
         	sym.$("Search_anim_1").hide();
         
         	sym.$("Girl1").show();
         	sym.$("Girl2").show();
         
         	sym.getSymbol("Girl2").stop(0);
         	sym.getSymbol("Girl1").stop(0);
         
         
         	}
         
         	if(topmgt==0 && topcount==0)
         		{
         
         		//alert("#Stage_redbar = "+$("#Stage_redbar").height());
         		h = $("#Stage_border").height();
         		//alert('redbar height = '+h);
         		hpx = h/26;
         		//alert('redbar height / 31 = '+hpx);
         		dh = h - hpx;
         		//alert('desired height = '+dh);
         
         		sym.getComposition().getStage().$("greenbar").css('top',dh);		
         		topcount = 1;
         		}
         	else	
         		{
         		topcount++;
         		//alert($("#Stage_liquid").offset().top);
         		//$("#Stage_liquid").offset().top;	
         
         		var mytop2 = hpx * topcount;
         		var mytop = h - mytop2;
         
         		//alert("mytop = " + mytop);
         		//mytop = mytop - 20;
         		//var mt = 
         		//sym.getComposition().getStage().$("liquid").css('top',mytop);	
         		sym.getComposition().getStage().$("greenbar").css('top',mytop);	
         
         		}
         	}catch(e){alert("ERR test ="+mytop);}	
         }
         ////////////////////////////////////////////////////////////////////////////////
         sym.GirlOneSetting = function() {try{ //alert('from Stage ');
             //clearInterval(G1timer);
         		i++;
         		if(i==1)
         		{sym.getComposition().getStage().$("my_hand1").show();}
            if(i == 17)
            {	
         		i=0;
            }
         
            var myid = "G1_div"+i;
            if( type2 == 'dress' )
         		{	
         		if(var_dress < g1dress.length)	
         				{
         				//alert(" type = " + type);
         				//var rand = g1dress[Math.floor(Math.random() * g1dress.length)];
         				var rand = g1dress[var_dress];
         				//alert(var_dress);
         				type2 = 'jwel';
         				sym.getComposition().getStage().$(myid).show();
         				sym.getComposition().getStage().$(myid).css('background-image', 'url(' + rand.img + ')'); 		
         				sym.getComposition().getStage().$(myid).css('background-repeat', "no-repeat"); 
         				sym.getComposition().getStage().$(myid).css('height',"40%");
         				sym.getComposition().getStage().$(myid).css('width',"20%");
         				//sym.getComposition().getStage().$(myid).name="dress";
         				document.getElementById("Stage_"+myid).setAttribute("name","dress");
         				document.getElementById("Stage_"+myid).setAttribute("value",rand.imgid);
         				sym.getComposition().getStage().$(myid).css('background-size','contain');
         				var_dress++;
         				}
         		 else{/*alert("RETURN dress var_dress = " +var_dress);*/}		
               }
            else if(type2 == "jwel") 
         		{ 
         
         		if(var_jwel < g1jwel.length)	
         				{
         				// alert(" type = " + type);
         				type2 = 'shoe';
         				//var rand = g1jwel[Math.floor(Math.random() * g1jwel.length)];	
         				var rand = g1jwel[var_jwel];
         				sym.getComposition().getStage().$(myid).show();
         				sym.getComposition().getStage().$(myid).css('background-image', 'url(' + rand.img + ')'); 				
         				sym.getComposition().getStage().$(myid).css('background-repeat', "no-repeat"); 
         				sym.getComposition().getStage().$(myid).css('height',"10%");
         				//sym.getComposition().getStage().$("Stage_"+myid).css('width',"20%");
         				//sym.getComposition().getStage().$(myid).name="jwel";
         				document.getElementById("Stage_"+myid).setAttribute("name","jwel");
         				document.getElementById("Stage_"+myid).setAttribute("value",rand.imgid);
         				sym.getComposition().getStage().$(myid).css('background-size','contain');
         				var_jwel++;
         				}
         			else{/*alert("RETURN jwel var_jwel = " +var_jwel);*/}		
         			}	
            else if(type2 == "shoe")   
         		{			
         		if(var_shoe < g1shoe.length)	
         				{
         				//alert(" type = " + type);
         				type2 = 'dress';
         				//var rand = g1shoe[Math.floor(Math.random() * g1shoe.length)];	
         				var rand = g1shoe[var_shoe];			
         				sym.getComposition().getStage().$(myid).show();
         				sym.getComposition().getStage().$(myid).css('background-image', 'url(' + rand.img + ')'); 				
         				sym.getComposition().getStage().$(myid).css('background-repeat', "no-repeat");
         				sym.getComposition().getStage().$(myid).css('height',"10%");
         				//sym.getComposition().getStage().$(myid).css('width',"20%");
         				//sym.getComposition().getStage().$(myid).name="shoe";
         				document.getElementById("Stage_"+myid).setAttribute("name","shoe");
         				document.getElementById("Stage_"+myid).setAttribute("value",rand.imgid);
         				sym.getComposition().getStage().$(myid).css('background-size','contain');
         				var_shoe++;
         				}
         				else{/*alert("RETURN shoe var_shoe = " +var_shoe);*/}					
         		}
         	else {alert(' else g1 wardrobe setting ERROR');}
         }catch(e){ alert(" g1 wardrobe setting ERR = "+e); }
         } //function end
         ////////////////////////////////////////////////////////////////////////
         sym.GirlOneSetting22 = function() {try{ //alert('from stage');
         		i++;
         		if(i==1)
         		{sym.getComposition().getStage().$("my_hand4").show();}
            if(i == 17)
            {
         		//clearInterval(G2timer);
         		i=0;
         
            }
         
            var myid = "G2_div"+i;
            if( type3 == 'dress' )
         		{	
         		if(var_dress < g2dress.length)	
         				{
         				//alert(" type = " + type);
         				//var rand = g2dress[Math.floor(Math.random() * g2dress.length)];
         				var rand = g2dress[var_dress];
         
         				//alert("var_dress = "+var_dress);
         				//alert("myid = "+myid);
         				//alert("rand.img = "+rand.img);
         
         				type3 = 'jwel';
         				sym.getComposition().getStage().$(myid).show();
         				sym.getComposition().getStage().$(myid).css('background-image', 'url(' + rand.img + ')'); 		
         				sym.getComposition().getStage().$(myid).css('background-repeat', "no-repeat"); 
         				sym.getComposition().getStage().$(myid).css('height',"40%");
         				sym.getComposition().getStage().$(myid).css('width',"20%");
         				//sym.getComposition().getStage().$(myid).name="dress";
         				document.getElementById("Stage_"+myid).setAttribute("name","dress");
         				document.getElementById("Stage_"+myid).setAttribute("value",rand.imgid);
         				sym.getComposition().getStage().$(myid).css('background-size','contain');
         				var_dress++;
         				}
         		 else{/*alert("RETURN dress var_dress = " +var_dress);*/}		
               }
            else if(type3 == "jwel") 
         		{ 
         
         		if(var_jwel < g2jwel.length)	
         				{
         				// alert(" type = " + type);
         				type3 = 'shoe';
         				//var rand = g2jwel[Math.floor(Math.random() * g2jwel.length)];	
         				var rand = g2jwel[var_jwel];
         				sym.getComposition().getStage().$(myid).show();
         				sym.getComposition().getStage().$(myid).css('background-image', 'url(' + rand.img + ')'); 				
         				sym.getComposition().getStage().$(myid).css('background-repeat', "no-repeat"); 
         				sym.getComposition().getStage().$(myid).css('height',"10%");
         				//sym.getComposition().getStage().$("Stage_"+myid).css('width',"30%");
         				//sym.getComposition().getStage().$(myid).name="jwel";
         				document.getElementById("Stage_"+myid).setAttribute("name","jwel");
         				document.getElementById("Stage_"+myid).setAttribute("value",rand.imgid);
         				sym.getComposition().getStage().$(myid).css('background-size','contain');
         				var_jwel++;
         				}
         			else{/*alert("RETURN jwel var_jwel = " +var_jwel);*/}		
         			}	
            else if(type3 == "shoe")   
         		{			
         		if(var_shoe < g2shoe.length)	
         				{
         				//alert(" type = " + type);
         				type3 = 'dress';
         				//var rand = g1shoe[Math.floor(Math.random() * g1shoe.length)];	
         				var rand = g2shoe[var_shoe];			
         				sym.getComposition().getStage().$(myid).show();
         				sym.getComposition().getStage().$(myid).css('background-image', 'url(' + rand.img + ')'); 				
         				sym.getComposition().getStage().$(myid).css('background-repeat', "no-repeat");
         				sym.getComposition().getStage().$(myid).css('height',"10%");
         				//sym.getComposition().getStage().$(myid).css('width',"30%");
         				//sym.getComposition().getStage().$(myid).name="shoe";
         				document.getElementById("Stage_"+myid).setAttribute("name","shoe");
         				document.getElementById("Stage_"+myid).setAttribute("value",rand.imgid);
         				sym.getComposition().getStage().$(myid).css('background-size','contain');
         				var_shoe++;
         				}
         				else{/*alert("RETURN shoe var_shoe = " +var_shoe);*/}					
         		}
         	else {alert(' else g2 wardrobe setting ERROR');}	
         
         }catch(e){alert(" g2 wardrobe setting ERR = "+e); }
         
         } // function end
         } // functio init

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_play_sym}", "mousedown", function(sym, e) {
         
         
         sym.$("start_screen").hide();
         sym.$("two_screen").show();
         
         sym.$("Search_anim_1").hide();
         sym.$("brownbox").show();
         
         sym.getSymbol("Girl1").play(0);
         sym.getSymbol("Girl2").play(0);
         
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/SndParticles.wav");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_sym1}", "mousedown", function(sym, e) {
         
         sym.$("Next_Screen").hide();
         sym.$("wardrobe_set").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_carpet}", "mousedown", function(sym, e) {
         
         a =a+1;
         //alert(a);
         console.log(a);
         
         if(a == 1)
         {
         sym.getSymbol("carpet_sym").stop(1000);
         }
         else if(a == 2)
         {
         sym.getSymbol("carpet_sym").stop(2000);
         }
         else if(a == 3)
         {
         sym.getSymbol("carpet_sym").stop(3000);
         }
         else if(a == 4)
         {
         sym.getSymbol("carpet_sym").stop(4000);
         }
         else
         {
         sym.getSymbol("carpet_sym").stop(0);
         a=0;
         
         }
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         
             mirror_icon = "true";
             sym.getComposition().getStage().restartshow_show_fun();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_curtain}", "mousedown", function(sym, e) {
         
         a =a+1;
         //alert(a);
         console.log(a);
         
         if(a == 1)
         {
         sym.getSymbol("curtain_sym").stop(1000);
         }
         else if(a == 2)
         {
         sym.getSymbol("curtain_sym").stop(2000);
         }
         else if(a == 3)
         {
         sym.getSymbol("curtain_sym").stop(3000);
         }
         else if(a == 4)
         {
         sym.getSymbol("curtain_sym").stop(4000);
         }
         else
         {
         sym.getSymbol("curtain_sym").stop(0);
         a=0;
         
         }
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         
             mirror_icon = "true";
             sym.getComposition().getStage().restartshow_show_fun();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_jewellary_frame}", "mousedown", function(sym, e) {
         
         a =a+1;
         //alert(a);
         console.log(a);
         
         if(a == 1)
         {
         sym.getSymbol("jew_frame_sym").stop(1000);
         }
         else if(a == 2)
         {
         sym.getSymbol("jew_frame_sym").stop(2000);
         }
         else if(a == 3)
         {
         sym.getSymbol("jew_frame_sym").stop(3000);
         }
         else if(a == 4)
         {
         sym.getSymbol("jew_frame_sym").stop(4000);
         }
         else
         {
         sym.getSymbol("jew_frame_sym").stop(0);
         a=0;
         
         }
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         
             mirror_icon = "true";
             sym.getComposition().getStage().restartshow_show_fun();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_wardrobe}", "mousedown", function(sym, e) {
         
         a =a+1;
         //alert(a);
         console.log(a);
         
         if(a == 1)
         {
         sym.getSymbol("wardreobe_sym").stop(1000);
         }
         else if(a == 2)
         {
         sym.getSymbol("wardreobe_sym").stop(2000);
         }
         else if(a == 3)
         {
         sym.getSymbol("wardreobe_sym").stop(3000);
         }
         else if(a == 4)
         {
         sym.getSymbol("wardreobe_sym").stop(4000);
         }
         else
         {
         sym.getSymbol("wardreobe_sym").stop(0);
         a=0;
         
         }
         
         
         if( mysound =="true"){
         sym.getComposition().getStage().playeffect("file:///android_asset/www/media/btnclick.mp3");
         }
         
             mirror_icon = "true";
             sym.getComposition().getStage().restartshow_show_fun();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_sym2}", "mousedown", function(sym, e) {
           sym.$("wardrobe").hide();
           sym.$("jewellary_frame").hide();
           sym.$("curtain").hide();
           sym.$("carpet").hide();
           
           
         sym.$("my_hand1").hide();
         
         sym.$("next_sym2").hide();
         //sym.$("next_screen1").hide();
         sym.$("Girl1_Wardrobe").show();
         sym.getSymbol("MyTrigger1").play();
         
           //alert('ok');		  
           sym.$("s_one").hide();
           sym.$("s_two").hide();
           sym.$("s_three").hide();
           sym.$("s_four").hide();
           sym.$("s_five").hide();
         
           sym.$("j_one").hide();
           sym.$("j_two").hide();
           sym.$("j_three").hide();
           sym.$("j_four").hide();
           sym.$("j_five").hide();
         
           sym.$("d_one").hide();
           sym.$("d_two").hide();
           sym.$("d_three").hide();
           sym.$("d_four").hide();
           sym.$("d_five").hide();
           sym.$("d_six").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_d_six2}", "mousedown", function(sym, e) {
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres7").hide();
         
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres1").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres2").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres3").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres4").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres5").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres6").show();		
         
         girl1_dress=1;
         sym.$("hand_dresup").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_d_five2}", "mousedown", function(sym, e) {
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres7").hide();
         
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres1").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres2").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres3").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres4").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres5").show();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres6").hide();		
         
         
         girl1_dress=1;
         sym.$("hand_dresup").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_d_four2}", "mousedown", function(sym, e) {
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres7").hide();
         
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres1").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres2").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres3").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres4").show();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres5").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres6").hide();		
         
         
         girl1_dress=1;
         sym.$("hand_dresup").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_d_three2}", "mousedown", function(sym, e) {
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres7").hide();
         
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres1").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres2").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres3").show();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres4").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres5").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres6").hide();		
         
         
         girl1_dress=1;
         sym.$("hand_dresup").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_d_two2}", "mousedown", function(sym, e) {
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres7").hide();
         
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres1").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres2").show();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres3").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres4").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres5").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres6").hide();		
         
         
         girl1_dress=1;
         sym.$("hand_dresup").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_d_one2}", "mousedown", function(sym, e) {
         //alert('l');
         try{
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres7").hide();
         
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres1").show();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres2").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres3").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres4").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres5").hide();
         sym.getSymbol("girl2_dresup").getSymbol("dress_sym").$("dres6").hide();		
         }catch(e){alert(e);}
         
         
         girl1_dress=1;
         sym.$("hand_dresup").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s_five2}", "mousedown", function(sym, e) {
         sym.getSymbol("girl2_dresup").$("sw_default1").hide();
         
         sym.getSymbol("girl2_dresup").$("sw_one2").hide();
         sym.getSymbol("girl2_dresup").$("sw_two2").hide();
         sym.getSymbol("girl2_dresup").$("sw_three2").hide();
         sym.getSymbol("girl2_dresup").$("sw_four2").hide();
         sym.getSymbol("girl2_dresup").$("sw_five2").show();
         
         
         
         girl1_shoe=1;
         girl1_shoe=1;
         sym.$("nxt_pg").show();
         sym.$("hand_dresup").hide();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s_fou2}", "mousedown", function(sym, e) {
         sym.getSymbol("girl2_dresup").$("sw_default1").hide();
         
         sym.getSymbol("girl2_dresup").$("sw_one2").hide();
         sym.getSymbol("girl2_dresup").$("sw_two2").hide();
         sym.getSymbol("girl2_dresup").$("sw_three2").hide();
         sym.getSymbol("girl2_dresup").$("sw_four2").show();
         sym.getSymbol("girl2_dresup").$("sw_five2").hide();
         
         
         
         girl1_shoe=1;
         girl1_shoe=1;
         sym.$("nxt_pg").show();
         sym.$("hand_dresup").hide();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s_three2}", "mousedown", function(sym, e) {
         sym.getSymbol("girl2_dresup").$("sw_default1").hide();
         
         sym.getSymbol("girl2_dresup").$("sw_one2").hide();
         sym.getSymbol("girl2_dresup").$("sw_two2").hide();
         sym.getSymbol("girl2_dresup").$("sw_three2").show();
         sym.getSymbol("girl2_dresup").$("sw_four2").hide();
         sym.getSymbol("girl2_dresup").$("sw_five2").hide();
         
         
         girl1_shoe=1;
         girl1_shoe=1;
         sym.$("nxt_pg").show();
         sym.$("hand_dresup").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s_two2}", "mousedown", function(sym, e) {
         sym.getSymbol("girl2_dresup").$("sw_default1").hide();
         
         sym.getSymbol("girl2_dresup").$("sw_one2").hide();
         sym.getSymbol("girl2_dresup").$("sw_two2").show();
         sym.getSymbol("girl2_dresup").$("sw_three2").hide();
         sym.getSymbol("girl2_dresup").$("sw_four2").hide();
         sym.getSymbol("girl2_dresup").$("sw_five2").hide();
         
         girl1_shoe=1;
         sym.$("nxt_pg").show();
         sym.$("hand_dresup").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s_one2}", "mousedown", function(sym, e) {
         sym.getSymbol("girl2_dresup").$("sw_default1").hide();
         
         sym.getSymbol("girl2_dresup").$("sw_one2").show();
         sym.getSymbol("girl2_dresup").$("sw_two2").hide();
         sym.getSymbol("girl2_dresup").$("sw_three2").hide();
         sym.getSymbol("girl2_dresup").$("sw_four2").hide();
         sym.getSymbol("girl2_dresup").$("sw_five2").hide();
         
         girl1_shoe=1;
         sym.$("nxt_pg").show();
         sym.$("hand_dresup").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_sym}", "mousedown", function(sym, e) {
         
         sym.$("Girl2_Dressup2").show();
         
         // Hide an element 
         sym.$("girl1_dresup").hide();
         sym.$("girl2_dress_defaultCopy").hide();
         
         sym.$("shoe_one2").hide();
         sym.$("shoe_two2").hide();
         sym.$("shoe_three2").hide();
         sym.$("shoe_four2").hide();
         sym.$("shoe_five2").hide();
         
         sym.$("jwel_one2").hide();
         sym.$("jwel_two2").hide();
         sym.$("jwel_three2").hide();
         sym.$("jwel_four2").hide();
         sym.$("jwel_five2").hide();
         
         
         sym.$("dress_one2").hide();
         sym.$("dress_two2").hide();
         sym.$("dress_three2").hide();
         sym.$("dress_four2").hide();
         sym.$("dress_five2").hide();
         sym.$("dress_six2").hide();
         
         // Hide an element 
         sym.$("next_sym3").hide();
         
         // Hide an element 
         sym.$("next_sym").hide();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_j_five2}", "mousedown", function(sym, e) {
         
         
         sym.$("jw_one1").hide();
         sym.$("jw_two1").hide();
         sym.$("jw_three1").hide();
         sym.$("jw_four1").hide();
         sym.$("jw_five1").show();
         
         
         girl1_jwel=1;
         //sym.getComposition().getStage().check_girl1();
         sym.$("next_sym").show();
         sym.$("hand_dresup").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_j_four2}", "mousedown", function(sym, e) {
         
         sym.$("jw_one1").hide();
         sym.$("jw_two1").hide();
         sym.$("jw_three1").hide();
         sym.$("jw_four1").show();
         sym.$("jw_five1").hide();
         
         
         girl1_jwel=1;
         //sym.getComposition().getStage().check_girl1();
         sym.$("next_sym").show();
         sym.$("hand_dresup").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_j_three2}", "mousedown", function(sym, e) {
         
         
         sym.$("jw_one1").hide();
         sym.$("jw_two1").hide();
         sym.$("jw_three1").show();
         sym.$("jw_four1").hide();
         sym.$("jw_five1").hide();
         
         
         girl1_jwel=1;
         //sym.getComposition().getStage().check_girl1();
         sym.$("next_sym").show();
         sym.$("hand_dresup").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_j_two2}", "mousedown", function(sym, e) {
          
          
          sym.$("jw_one1").hide();
          sym.$("jw_two1").show();
          sym.$("jw_three1").hide();
          sym.$("jw_four1").hide();
          sym.$("jw_five1").hide();
          
          
          girl1_jwel=1;
         //sym.getComposition().getStage().check_girl1();
         sym.$("next_sym").show();
          sym.$("hand_dresup").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_j_one2}", "mousedown", function(sym, e) {
         
         
         sym.$("jw_one1").show();
         sym.$("jw_two1").hide();
         sym.$("jw_three1").hide();
         sym.$("jw_four1").hide();
         sym.$("jw_five1").hide();
         
         
         girl1_jwel=1;
         sym.$("next_sym").show();
         sym.$("hand_dresup").hide();
         
         /*
         //sym.getComposition().getStage().check_girl1();
          if(girl1_dress == 0){alert('Select Dress');}
         	 else if(girl1_shoe == 0) {alert('Select Shoe');}
         	 else if(girl1_jwel == 0) {alert('Select Jwel');}
         	 else{alert("All selected go to next GIRL"); sym.$("nxt_pg").show();}
         
         */
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s2_five2}", "mousedown", function(sym, e) {
         sym.$("G2_dress_shoes").hide();
         
         
         
         sym.$("shoe_one2").hide();
         sym.$("shoe_two2").hide();
         sym.$("shoe_three2").hide();
         sym.$("shoe_four2").hide();
         sym.$("shoe_five2").show();
         
         
         
         sym.$("nxt_pg2").show();
         sym.$("hand2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s2_four2}", "mousedown", function(sym, e) {
         sym.$("G2_dress_shoes").hide();
         
         
         sym.$("shoe_one2").hide();
         sym.$("shoe_two2").hide();
         sym.$("shoe_three2").hide();
         sym.$("shoe_four2").show();
         sym.$("shoe_five2").hide();
         
         
         
         sym.$("nxt_pg2").show();
         sym.$("hand2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s2_three2}", "mousedown", function(sym, e) {
         sym.$("G2_dress_shoes").hide();
         
         
         
         
         sym.$("shoe_one2").hide();
         sym.$("shoe_two2").hide();
         sym.$("shoe_three2").show();
         sym.$("shoe_four2").hide();
         sym.$("shoe_five2").hide();
         
         
         
         sym.$("nxt_pg2").show();
         
         sym.$("hand2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s2_two2}", "mousedown", function(sym, e) {
         sym.$("G2_dress_shoes").hide();
         
         
         
         sym.$("shoe_one2").hide();
         sym.$("shoe_two2").show();
         sym.$("shoe_three2").hide();
         sym.$("shoe_four2").hide();
         sym.$("shoe_five2").hide();
         
         
         
         sym.$("nxt_pg2").show();
         sym.$("hand2").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_s2_one2}", "mousedown", function(sym, e) {
         sym.$("G2_dress_shoes").hide();
         
         sym.$("shoe_one2").show();
         sym.$("shoe_two2").hide();
         sym.$("shoe_three2").hide();
         sym.$("shoe_four2").hide();
         sym.$("shoe_five2").hide();
         
         
         
         sym.$("nxt_pg2").show();
         sym.$("hand2").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_j2_five2}", "mousedown", function(sym, e) {
         
         sym.$("jwel_one2").hide();
         sym.$("jwel_two2").hide();
         sym.$("jwel_three2").hide();
         sym.$("jwel_four2").hide();
         sym.$("jwel_five2").show();
         
         
         
         sym.$("next_sym3").show();
         sym.$("hand2").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_j2_four2}", "mousedown", function(sym, e) {
         
         sym.$("jwel_one2").hide();
         sym.$("jwel_two2").hide();
         sym.$("jwel_three2").hide();
         sym.$("jwel_four2").show();
         sym.$("jwel_five2").hide();
         
         
         
         sym.$("next_sym3").show();
         sym.$("hand2").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_j2_three2}", "mousedown", function(sym, e) {
         
         sym.$("jwel_one2").hide();
         sym.$("jwel_two2").hide();
         sym.$("jwel_three2").show();
         sym.$("jwel_four2").hide();
         sym.$("jwel_five2").hide();
         
         
         
         sym.$("next_sym3").show();
         sym.$("hand2").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_j2_two2}", "mousedown", function(sym, e) {
         
         sym.$("jwel_one2").hide();
         sym.$("jwel_two2").show();
         sym.$("jwel_three2").hide();
         sym.$("jwel_four2").hide();
         sym.$("jwel_five2").hide();
         
         
         
         sym.$("next_sym3").show();
         sym.$("hand2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_j2_one2}", "mousedown", function(sym, e) {
         
         sym.$("jwel_one2").show();
         sym.$("jwel_two2").hide();
         sym.$("jwel_three2").hide();
         sym.$("jwel_four2").hide();
         sym.$("jwel_five2").hide();
         
         
         
         sym.$("next_sym3").show();
         sym.$("hand2").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_d2_six2}", "mousedown", function(sym, e) {
         sym.$("G2_dress_7").hide();
         sym.getSymbol("girl1_dresup").$("d77").hide();
         
         sym.$("dress_one2").hide();
         sym.$("dress_two2").hide();
         sym.$("dress_three2").hide();
         sym.$("dress_four2").hide();
         sym.$("dress_five2").hide();
         sym.$("dress_six2").show();
         
         
         sym.$("nxt_pg2").show();
         sym.$("hand2").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_d2_five2}", "mousedown", function(sym, e) {
         sym.$("G2_dress_7").hide();
         sym.getSymbol("girl1_dresup").$("d77").hide();
         
         sym.$("dress_one2").hide();
         sym.$("dress_two2").hide();
         sym.$("dress_three2").hide();
         sym.$("dress_four2").hide();
         sym.$("dress_five2").show();
         sym.$("dress_six2").hide();
         
         sym.$("nxt_pg2").show();
         sym.$("hand2").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_d2_four2}", "mousedown", function(sym, e) {
         sym.$("G2_dress_7").hide();
         
         // Hide an element 
         sym.getSymbol("girl1_dresup").$("d77").hide();
         
         sym.$("dress_one2").hide();
         sym.$("dress_two2").hide();
         sym.$("dress_three2").hide();
         sym.$("dress_four2").show();
         sym.$("dress_five2").hide();
         sym.$("dress_six2").hide();
         
         sym.$("nxt_pg2").show();
         sym.$("hand2").hide();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_d2_three2}", "mousedown", function(sym, e) {
         sym.$("G2_dress_7").hide();
         sym.getSymbol("girl1_dresup").$("d77").hide();
         
         sym.$("dress_one2").hide();
         sym.$("dress_two2").hide();
         sym.$("dress_three2").show();
         sym.$("dress_four2").hide();
         sym.$("dress_five2").hide();
         sym.$("dress_six2").hide();
         
         sym.$("nxt_pg2").show();
         sym.$("hand2").hide();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_d2_two2}", "mousedown", function(sym, e) {
         sym.getSymbol("girl1_dresup").$("d77").hide();
         
         sym.$("G2_dress_7").hide();
         
         sym.$("dress_one2").hide();
         sym.$("dress_two2").show();
         sym.$("dress_three2").hide();
         sym.$("dress_four2").hide();
         sym.$("dress_five2").hide();
         sym.$("dress_six2").hide();
         
         sym.$("nxt_pg2").show();
         sym.$("hand2").hide();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_d2_one2}", "mousedown", function(sym, e) {
         sym.$("G2_dress_7").hide();
         sym.getSymbol("girl1_dresup").$("d77").hide();
         
         sym.$("dress_one2").show();
         sym.$("dress_two2").hide();
         sym.$("dress_three2").hide();
         sym.$("dress_four2").hide();
         sym.$("dress_five2").hide();
         sym.$("dress_six2").hide();
         
         sym.$("nxt_pg2").show();
         sym.$("hand2").hide();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_next_sym3}", "mousedown", function(sym, e) {
         
         sym.$("next_sym3").hide();
         
         sym.$("Last_page").show();
         sym.$("hand2").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_replay_sym1}", "mousedown", function(sym, e) {
         try{
         window.location.href="index.html";
         
         }catch(e){alert("last"+e);}
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_more_sym2}", "mousedown", function(sym, e) {
         window.location.href='http://www.3grtech.com/aiandstore.html';
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_more_sym4}", "mousedown", function(sym, e) {
         window.location.href='http://www.3grtech.com/aiandstore.html';
         

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
   
   //Edge symbol: 'startbtn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("startbtn");
   //Edge symbol end:'startbtn'

   //=========================================================
   
   //Edge symbol: 'star_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4405, function(sym, e) {
         // insert code here
         sym.play();

      });
      //Edge binding end

   })("star_sym");
   //Edge symbol end:'star_sym'

   //=========================================================
   
   //Edge symbol: 'symhand1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("symhand1");
   //Edge symbol end:'symhand1'

   //=========================================================
   
   //Edge symbol: 'base_symbol'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         try{
         sym.stop();
         //alert('change');
         //$(sym.lookupSelector("Stage_base_symbol")).css('background-image', "images/image-44.png");
         //alert(document.getElementById("Stage_base_symbol"));
         //background-image
          //$('#Stage_base_symbol_image-110').css('background-image', "url(images/image-44.png)");
         //document.getElementById("Stage_base_symbol").css('background-image', "images/image-44.png");
         
         
         //sym.createChildSymbol();
         //This takes the parent element name and returns a single symbol object. For example:
         
         // Create a child symbol instance of "kittenpaw_sym" inside the
         // element "kitten".
         // Note: "kitten_sym" is the name as it appears in the symbol library,
         // not the elements panel.
         //sym.createChildSymbol("base_symbol", "base_symbol2");
         
         }catch(e){alert(e);}

      });
      //Edge binding end

   })("base_symbol");
   //Edge symbol end:'base_symbol'

   //=========================================================
   
   //Edge symbol: 'Search_anim'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         
         
         if(curr_cloth == 0)
         {
         	curr_cloth =1;
         }
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7333, function(sym, e) {
         try{
         sym.play(3000);
         }
         catch(e){alert("ERR="+e);}
         

      });
      //Edge binding end

   })("Search_anim");
   //Edge symbol end:'Search_anim'

   //=========================================================
   
   //Edge symbol: 'full_girl2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6132, function(sym, e) {
         
         
         sym.getComposition().getStage().$("Girl2").hide();
         sym.getComposition().getStage().$("Girl1").hide();
         sym.getComposition().getStage().$("image-528Copy2").hide();
         sym.getComposition().getStage().$("image-526Copy2").hide();
         sym.getComposition().getStage().$("brownbox").hide();
         sym.getComposition().getStage().$("Search_anim_1").show();
         sym.getComposition().getStage().getSymbol("Search_anim_1").play(0);
         
         
         
         
         sym.getComposition().getStage().$("greenbar").show();
         sym.getComposition().getStage().$("greenbar").css('top',"95%");
         
         timer3 = setInterval(onTimer3,2000);
         
         
         
         var i=0;
         
         function onTimer3() {try{  //alert(" timer type = " + type);
         		i++;
         		if(i == 1){sym.getComposition().getStage().$("hand_sym").show();}
         
            if(i == 31)
            {
         		clearInterval(timer3);
         		i=0;
         		//alert('fullGirl2 timer over');
         		//return;		
         
            }
         
            var myid = "div"+i;
            if( type == 'dress' )
         		{	
         
               //alert(" type = " + type);
         
         		var rand = mydress_co[Math.floor(Math.random() * mydress_co.length)];
         		type = 'jwel';
         
         
         		sym.getComposition().getStage().$(myid).show();
         		sym.getComposition().getStage().$(myid).css('background-image', 'url(' + rand.img + ')'); 		
         		sym.getComposition().getStage().$(myid).css('background-repeat', "no-repeat"); 
         		sym.getComposition().getStage().$(myid).css('height',"40%");
         		sym.getComposition().getStage().$(myid).css('width',"20%");
         		sym.getComposition().getStage().$(myid).css('background-size','contain');
         
               }
         
         
            else if(type == "jwel") 
         
         		{
         		// alert(" type = " + type);
         		type = 'shoe';
         		var rand = myjwel_co[Math.floor(Math.random() * myjwel_co.length)];		
         		sym.getComposition().getStage().$(myid).show();
         		sym.getComposition().getStage().$(myid).css('background-image', 'url(' + rand.img + ')'); 				
         		sym.getComposition().getStage().$(myid).css('background-repeat', "no-repeat"); 
         		sym.getComposition().getStage().$(myid).css('height',"10%");
         		//sym.getComposition().getStage().$(myid).css('width',"20%");
         		sym.getComposition().getStage().$(myid).css('background-size','contain');
         		}
         
            else if(type == "shoe")   
         		{
         
         		//alert(" type = " + type);
         
         		type = 'dress';
         		var rand = myshoe_co[Math.floor(Math.random() * myshoe_co.length)];		
         		sym.getComposition().getStage().$(myid).show();
         		sym.getComposition().getStage().$(myid).css('background-image', 'url(' + rand.img + ')'); 				
         		sym.getComposition().getStage().$(myid).css('background-repeat', "no-repeat");
         		sym.getComposition().getStage().$(myid).css('height',"10%");
         		//sym.getComposition().getStage().$(myid).css('width',"20%"); 
         		sym.getComposition().getStage().$(myid).css('background-size','contain');
         		}
         	else {alert(' else ERROR');}	
         
         }catch(e){ alert(" ERR = "+e); }
         }
         
         

      });
      //Edge binding end

   })("full_girl2");
   //Edge symbol end:'full_girl2'

   //=========================================================
   
   //Edge symbol: 'full_girl1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         

      });
      //Edge binding end

   })("full_girl1");
   //Edge symbol end:'full_girl1'

   //=========================================================
   
   //Edge symbol: 'my_handsym2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("my_handsym2");
   //Edge symbol end:'my_handsym2'

   //=========================================================
   
   //Edge symbol: 'girl22'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("girl22");
   //Edge symbol end:'girl22'

   //=========================================================
   
   //Edge symbol: 'girl11'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("girl11");
   //Edge symbol end:'girl11'

   //=========================================================
   
   //Edge symbol: 'mytrigger1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         try{
         //alert("mytrigger1");
         g1shoe =[
         				 {"W":"110","H":"54","img":"images/gril_shoes/G1_Shoes/1ws1.png","imgid":"s_one"},
         				 {"W":"58","H":"48","img":"images/gril_shoes/G1_Shoes/1ws2.png","imgid":"s_two"},
         				 {"W":"51","H":"60","img":"images/gril_shoes/G1_Shoes/1ws3.png","imgid":"s_three"},
         				 {"W":"54","H":"49","img":"images/gril_shoes/G1_Shoes/1ws4.png","imgid":"s_four"},
         				 {"W":"61","H":"54","img":"images/gril_shoes/G1_Shoes/1ws5.png","imgid":"s_five"}			
         		  ];
         g1jwel =[
         				 {"W":"56","H":"44","img":"images/gril_Jewl/Gril1_jew/G1J1.png","imgid":"j_one"},
         				 {"W":"61","H":"48","img":"images/gril_Jewl/Gril1_jew/G1J2.png","imgid":"j_two"},
         				 {"W":"58","H":"57","img":"images/gril_Jewl/Gril1_jew/G1J3.png","imgid":"j_three"},
         				 {"W":"60","H":"66","img":"images/gril_Jewl/Gril1_jew/G1J4.png","imgid":"j_four"},
         				 {"W":"68","H":"87","img":"images/gril_Jewl/Gril1_jew/G1J5.png","imgid":"j_five"}					 		
         			];
         g1dress =[
         				 {"W":"96","H":"188","img":"images/Gril_dress/Gril1/Sd1.png","imgid":"d_one"},
         				 {"W":"110","H":"180","img":"images/Gril_dress/Gril1/Sd2.png","imgid":"d_two"},
         				 {"W":"150","H":"250","img":"images/Gril_dress/Gril1/Sd3.png","imgid":"d_three"},
         				 {"W":"53","H":"140","img":"images/Gril_dress/Gril1/Sd4.png","imgid":"d_four"},
         				 {"W":"191","H":"396","img":"images/Gril_dress/Gril1/Sd5.png","imgid":"d_five"},
         				 {"W":"135","H":"231","img":"images/Gril_dress/Gril1/Sd6.png","imgid":"d_six"}	
         			];
         
         //var G1timer = setInterval(GirlOneSetting,4000);
         
         // function
         
          i=0;				 
          var_dress=0;
          var_shoe=0;
          var_jwel=0;				 
         
         g1dress.sort(function (g1dress, b) {return Math.random() - 0.5;});
         g1jwel.sort(function (g1jwel, b) {return Math.random() - 0.5;});
         g1shoe.sort(function (g1shoe, b) {return Math.random() - 0.5;});
         
         //GirlOneSetting();	
         sym.getComposition().getStage().GirlOneSetting();
         }catch(e){alert(e);}
         
         function GirlOneSetting2() {try{ alert('G1timer');
             //clearInterval(G1timer);
         		i++;
         		if(i==1)
         		{sym.getComposition().getStage().$("my_hand1").show();}
            if(i == 17)
            {
         		//clearInterval(G1timer);
         		i=0;
         		//alert('mytrigger1  OK GO TO NEXT PAGE');	
         
         
         		//return;s
            }
         
            var myid = "G1_div"+i;
            if( type2 == 'dress' )
         		{	
         		if(var_dress < g1dress.length)	
         				{
         				//alert(" type = " + type);
         				//var rand = g1dress[Math.floor(Math.random() * g1dress.length)];
         				var rand = g1dress[var_dress];
         				//alert(var_dress);
         				type2 = 'jwel';
         				sym.getComposition().getStage().$(myid).show();
         				sym.getComposition().getStage().$(myid).css('background-image', 'url(' + rand.img + ')'); 		
         				sym.getComposition().getStage().$(myid).css('background-repeat', "no-repeat"); 
         				sym.getComposition().getStage().$(myid).css('height',"40%");
         				sym.getComposition().getStage().$(myid).css('width',"20%");
         				//sym.getComposition().getStage().$(myid).name="dress";
         				document.getElementById("Stage_"+myid).setAttribute("name","dress");
         				document.getElementById("Stage_"+myid).setAttribute("value",rand.imgid);
         				sym.getComposition().getStage().$(myid).css('background-size','contain');
         				var_dress++;
         				}
         		 else{/*alert("RETURN dress var_dress = " +var_dress);*/}		
               }
            else if(type2 == "jwel") 
         		{ 
         
         		if(var_jwel < g1jwel.length)	
         				{
         				// alert(" type = " + type);
         				type2 = 'shoe';
         				//var rand = g1jwel[Math.floor(Math.random() * g1jwel.length)];	
         				var rand = g1jwel[var_jwel];
         				sym.getComposition().getStage().$(myid).show();
         				sym.getComposition().getStage().$(myid).css('background-image', 'url(' + rand.img + ')'); 				
         				sym.getComposition().getStage().$(myid).css('background-repeat', "no-repeat"); 
         				sym.getComposition().getStage().$(myid).css('height',"10%");
         				//sym.getComposition().getStage().$("Stage_"+myid).css('width',"20%");
         				//sym.getComposition().getStage().$(myid).name="jwel";
         				document.getElementById("Stage_"+myid).setAttribute("name","jwel");
         				document.getElementById("Stage_"+myid).setAttribute("value",rand.imgid);
         				sym.getComposition().getStage().$(myid).css('background-size','contain');
         				var_jwel++;
         				}
         			else{/*alert("RETURN jwel var_jwel = " +var_jwel);*/}		
         			}	
            else if(type2 == "shoe")   
         		{			
         		if(var_shoe < g1shoe.length)	
         				{
         				//alert(" type = " + type);
         				type2 = 'dress';
         				//var rand = g1shoe[Math.floor(Math.random() * g1shoe.length)];	
         				var rand = g1shoe[var_shoe];			
         				sym.getComposition().getStage().$(myid).show();
         				sym.getComposition().getStage().$(myid).css('background-image', 'url(' + rand.img + ')'); 				
         				sym.getComposition().getStage().$(myid).css('background-repeat', "no-repeat");
         				sym.getComposition().getStage().$(myid).css('height',"10%");
         				//sym.getComposition().getStage().$(myid).css('width',"20%");
         				//sym.getComposition().getStage().$(myid).name="shoe";
         				document.getElementById("Stage_"+myid).setAttribute("name","shoe");
         				document.getElementById("Stage_"+myid).setAttribute("value",rand.imgid);
         				sym.getComposition().getStage().$(myid).css('background-size','contain');
         				var_shoe++;
         				}
         				else{/*alert("RETURN shoe var_shoe = " +var_shoe);*/}					
         		}
         	else {alert(' else g1 wardrobe setting ERROR');}	
         
         }catch(e){ alert(" g1 wardrobe setting ERR = "+e); }
         
         }

      });
      //Edge binding end

   })("mytrigger1");
   //Edge symbol end:'mytrigger1'

   //=========================================================
   
   //Edge symbol: 'next_sym'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_image-158}", "mousedown", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("next_sym");
   //Edge symbol end:'next_sym'

   //=========================================================
   
   //Edge symbol: 'carpet_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

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

   })("carpet_sym");
   //Edge symbol end:'carpet_sym'

   //=========================================================
   
   //Edge symbol: 'curtain_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

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

   })("curtain_sym");
   //Edge symbol end:'curtain_sym'

   //=========================================================
   
   //Edge symbol: 'wardreobe_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

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

   })("wardreobe_sym");
   //Edge symbol end:'wardreobe_sym'

   //=========================================================
   
   //Edge symbol: 'jew_frame_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

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

   })("jew_frame_sym");
   //Edge symbol end:'jew_frame_sym'

   //=========================================================
   
   //Edge symbol: 'next_sym2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("next_sym2");
   //Edge symbol end:'next_sym2'

   //=========================================================
   
   //Edge symbol: 'my_handsym2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(0);

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      })("my_hand2");
   //Edge symbol end:'my_hand2'

   //=========================================================
   
   //Edge symbol: 'my_hand2_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play(0);

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      })("my_hand3");
   //Edge symbol end:'my_hand3'

   //=========================================================
   
   //Edge symbol: 'my_handsym3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("my_handsym3");
   //Edge symbol end:'my_handsym3'

   //=========================================================
   
   //Edge symbol: 'g222'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("g222");
   //Edge symbol end:'g222'

   //=========================================================
   
   //Edge symbol: 'g111'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2603, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("g111");
   //Edge symbol end:'g111'

   //=========================================================
   
   //Edge symbol: 'mytrigger2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         
         //alert("mytrigger2");
         g2shoe =[
         				 {"W":"110","H":"54","img":"images/gril_shoes/G2_Shoes/2ws1.png","imgid":"s2_one"},
         				 {"W":"58","H":"48","img":"images/gril_shoes/G2_Shoes/2ws2.png","imgid":"s2_two"},
         				 {"W":"51","H":"60","img":"images/gril_shoes/G2_Shoes/2ws3.png","imgid":"s2_three"},
         				 {"W":"54","H":"49","img":"images/gril_shoes/G2_Shoes/2ws4.png","imgid":"s2_four"},
         				 {"W":"61","H":"54","img":"images/gril_shoes/G2_Shoes/2ws5.png","imgid":"s2_five"}			
         		  ];
         g2jwel =[
         				 {"W":"56","H":"44","img":"images/gril_Jewl/Gril2_jew/GJ1.png","imgid":"j2_one"},
         				 {"W":"61","H":"48","img":"images/gril_Jewl/Gril2_jew/GJ2.png","imgid":"j2_two"},
         				 {"W":"58","H":"57","img":"images/gril_Jewl/Gril2_jew/GJ3.png","imgid":"j2_three"},
         				 {"W":"60","H":"66","img":"images/gril_Jewl/Gril2_jew/GJ4.png","imgid":"j2_four"},
         				 {"W":"68","H":"87","img":"images/gril_Jewl/Gril2_jew/GJ5.png","imgid":"j2_five"}					 		
         			];
         g2dress =[
         				 {"W":"96","H":"188","img":"images/Gril_dress/Gril2/Gd1.png","imgid":"d2_one"},
         				 {"W":"110","H":"180","img":"images/Gril_dress/Gril2/Gd2.png","imgid":"d2_two"},
         				 {"W":"150","H":"250","img":"images/Gril_dress/Gril2/Gd3.png","imgid":"d2_three"},
         				 {"W":"53","H":"140","img":"images/Gril_dress/Gril2/Gd4.png","imgid":"d2_four"},
         				 {"W":"191","H":"396","img":"images/Gril_dress/Gril2/Gd5.png","imgid":"d2_five"},
         				 {"W":"135","H":"231","img":"images/Gril_dress/Gril2/Gd6.png","imgid":"d2_six"}	
         			];
         
         //var G2timer = setInterval(GirlOneSetting2,4000);
         
         // function
          i=0;				 
          var_dress=0;
          var_shoe=0;
          var_jwel=0;				 
         
         g1dress.sort(function (g1dress, b) {return Math.random() - 0.5;});
         g1jwel.sort(function (g1jwel, b) {return Math.random() - 0.5;});
         g1shoe.sort(function (g1shoe, b) {return Math.random() - 0.5;});
         
         sym.getComposition().getStage().GirlOneSetting22();
         
         function GirlOneSetting2new2() {try{ //alert('G2timer');
         		i++;
         		if(i==1)
         		{sym.getComposition().getStage().$("my_hand4").show();}
            if(i == 17)
            {
         		clearInterval(G2timer);
         		i=0;
         
            }
         
            var myid = "G2_div"+i;
            if( type3 == 'dress' )
         		{	
         		if(var_dress < g2dress.length)	
         				{
         				//alert(" type = " + type);
         				//var rand = g2dress[Math.floor(Math.random() * g2dress.length)];
         				var rand = g2dress[var_dress];
         
         				//alert("var_dress = "+var_dress);
         				//alert("myid = "+myid);
         				//alert("rand.img = "+rand.img);
         
         				type3 = 'jwel';
         				sym.getComposition().getStage().$(myid).show();
         				sym.getComposition().getStage().$(myid).css('background-image', 'url(' + rand.img + ')'); 		
         				sym.getComposition().getStage().$(myid).css('background-repeat', "no-repeat"); 
         				sym.getComposition().getStage().$(myid).css('height',"40%");
         				sym.getComposition().getStage().$(myid).css('width',"20%");
         				//sym.getComposition().getStage().$(myid).name="dress";
         				document.getElementById("Stage_"+myid).setAttribute("name","dress");
         				document.getElementById("Stage_"+myid).setAttribute("value",rand.imgid);
         				sym.getComposition().getStage().$(myid).css('background-size','contain');
         				var_dress++;
         				}
         		 else{/*alert("RETURN dress var_dress = " +var_dress);*/}		
               }
            else if(type3 == "jwel") 
         		{ 
         
         		if(var_jwel < g2jwel.length)	
         				{
         				// alert(" type = " + type);
         				type3 = 'shoe';
         				//var rand = g2jwel[Math.floor(Math.random() * g2jwel.length)];	
         				var rand = g2jwel[var_jwel];
         				sym.getComposition().getStage().$(myid).show();
         				sym.getComposition().getStage().$(myid).css('background-image', 'url(' + rand.img + ')'); 				
         				sym.getComposition().getStage().$(myid).css('background-repeat', "no-repeat"); 
         				sym.getComposition().getStage().$(myid).css('height',"10%");
         				//sym.getComposition().getStage().$("Stage_"+myid).css('width',"30%");
         				//sym.getComposition().getStage().$(myid).name="jwel";
         				document.getElementById("Stage_"+myid).setAttribute("name","jwel");
         				document.getElementById("Stage_"+myid).setAttribute("value",rand.imgid);
         				sym.getComposition().getStage().$(myid).css('background-size','contain');
         				var_jwel++;
         				}
         			else{/*alert("RETURN jwel var_jwel = " +var_jwel);*/}		
         			}	
            else if(type3 == "shoe")   
         		{			
         		if(var_shoe < g2shoe.length)	
         				{
         				//alert(" type = " + type);
         				type3 = 'dress';
         				//var rand = g1shoe[Math.floor(Math.random() * g1shoe.length)];	
         				var rand = g2shoe[var_shoe];			
         				sym.getComposition().getStage().$(myid).show();
         				sym.getComposition().getStage().$(myid).css('background-image', 'url(' + rand.img + ')'); 				
         				sym.getComposition().getStage().$(myid).css('background-repeat', "no-repeat");
         				sym.getComposition().getStage().$(myid).css('height',"10%");
         				//sym.getComposition().getStage().$(myid).css('width',"30%");
         				//sym.getComposition().getStage().$(myid).name="shoe";
         				document.getElementById("Stage_"+myid).setAttribute("name","shoe");
         				document.getElementById("Stage_"+myid).setAttribute("value",rand.imgid);
         				sym.getComposition().getStage().$(myid).css('background-size','contain');
         				var_shoe++;
         				}
         				else{/*alert("RETURN shoe var_shoe = " +var_shoe);*/}					
         		}
         	else {/*alert(' else g2 wardrobe setting ERROR');*/}	
         
         }catch(e){ /*alert(" g2 wardrobe setting ERR = "+e);*/ }
         
         }
         // insert code here

      });
      //Edge binding end

   })("mytrigger2");
   //Edge symbol end:'mytrigger2'

   //=========================================================
   
   //Edge symbol: 'hand1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("hand1");
   //Edge symbol end:'hand1'

   //=========================================================
   
   //Edge symbol: 'girl2fyn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("girl2fyn");
   //Edge symbol end:'girl2fyn'

   //=========================================================
   
   //Edge symbol: 'dress_change_sym'
   (function(symbolName) {   
   
   })("dress_change_sym");
   //Edge symbol end:'dress_change_sym'

   //=========================================================
   
   //Edge symbol: 'girl1fyn'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("girl1fyn");
   //Edge symbol end:'girl1fyn'

   //=========================================================
   
   //Edge symbol: 'gril_1'
   (function(symbolName) {   
   
   })("gril_1");
   //Edge symbol end:'gril_1'

   //=========================================================
   
   //Edge symbol: 'gril_2'
   (function(symbolName) {   
   
   })("gril_2");
   //Edge symbol end:'gril_2'

   //=========================================================
   
   //Edge symbol: 'eye_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1646, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("eye_1");
   //Edge symbol end:'eye_1'

   //=========================================================
   
   //Edge symbol: 'exp_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("exp_1");
   //Edge symbol end:'exp_1'

   //=========================================================
   
   //Edge symbol: 'eye2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("eye2");
   //Edge symbol end:'eye2'

   //=========================================================
   
   //Edge symbol: 'exp_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2849, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("exp_2");
   //Edge symbol end:'exp_2'

   //=========================================================
   
   //Edge symbol: 'dress_change_sym1'
   (function(symbolName) {   
   
   })("dress_change_sym1");
   //Edge symbol end:'dress_change_sym1'

   //=========================================================
   
   //Edge symbol: 'hand2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("hand2");
   //Edge symbol end:'hand2'

   //=========================================================
   
   //Edge symbol: 'Symbol_1eyye1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("Symbol_1eyye1");
   //Edge symbol end:'Symbol_1eyye1'

   //=========================================================
   
   //Edge symbol: 'eye3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("eye3");
   //Edge symbol end:'eye3'

   //=========================================================
   
   //Edge symbol: 'replay_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("replay_sym");
   //Edge symbol end:'replay_sym'

   //=========================================================
   
   //Edge symbol: 'more_sym'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("more_sym");
   //Edge symbol end:'more_sym'

})(jQuery, AdobeEdge, "EDGE-2495312617");