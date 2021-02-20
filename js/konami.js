

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
              'display': 'none',
          }); 
          
          $('body').css ({
              'background-image' : "url('https://media4.giphy.com/media/eiGU1eOEoxIIYL4I42/giphy.gif')",
              'background-repeat' : 'no-repeat',
              
          })
          setTimeout(function(){
            location.reload();
           },5000);
            
          }
        } 
      });
    }
  }
  
  global.konami();