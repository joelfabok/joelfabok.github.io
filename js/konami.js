

let global = {
  
  konami: function() {
    let konamikeys = [38,38,40,40,37,39,37,39,66,65], 
        started = false, 
        count = 0;
    
    $(document).keydown(function(e){
      let reset = function() {
        started = false; 
        count = 0;
        return;
      };
      
      key = e.keyCode;
      
      if(!started){
        if(key == 38){
          started = true;
        }
      }
      
      if (started){
        
        if (konamikeys[count] == key){
          count++;
        } else {
          reset();
        }
        if (count == 10){
           $('main').css({
            'animation': '5s hinge',
        }); 
        
        $('img').css ({
            'display' : 'block',
            'position' : 'absolute',
            'repeat' : 'no-repeat',
            'margin' : 'auto',
            'animation': '5s moving infinite',
            
        })


        setTimeout(function(){
          location.reload();
         },4600);
          
        }
      } 
    });
  }
}

global.konami();