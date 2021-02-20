$(document).ready(
    function(){
        $('.textBox').keyup(function() {
            toUpper(this);
            });

        // *********************************** //
        // This Will Add Item To List On Enter //
        // *********************************** //
        
        $('input').keydown(function(e) {
            if (e.which === 13) {
                if (!$('input').val()) {                
                    swal('Please Add Item In Text Box');           
                  }                                     
                  
                  else {
                    $('.undone').append('<li>' + this.value + '<button class="close"><i class="fas fa-trash"></i></button>' + '</li>');
                  }
                this.value = "";
                
            }
        });

        // ********************************************** //
        // This Will Add Item To List When Add Is Clicked //
        // ********************************************** //
        $('.addButton').click(
            function(){
                let toAdd = $('input[name=item]').val();
                if (!$('input').val()) {
                    swal('Please Add Item In Text Box');
                  }
                  
                  else {
                    $('.undone').append('<li id="move">' + toAdd + '<button class="close"><i class="fa fa-trash"></i></button>' + '</li>');
                  }
        
            });
            
            $('.addButton').click(function(){				 
                $('input[name=item]').val('');
            });

        // ******************************************************************* //
        // This Will Check Off And Put A Line Through Item And Move It To Done //
        // ******************************************************************* //
          
        $(document).on('click','.undone li', function(){
        $(this).toggleClass('checked').toggleClass('strike').appendTo('.done');
        });

        // ***************************************************************** //
        // This Will Remove Line A Checkmark From Item And Move It To Undone //
        // ***************************************************************** //

        $(document).on('click','.done li', function(){
            $(this).toggleClass('checked').toggleClass('strike').appendTo('.undone');
            });
        
        $('ul').on('click', '.close', function(e) {
            e.preventDefault();
            $(this).parent().remove();
        });

        // Makes It So That When I Start Up The Page You Are Typing In The Text Box //
        $('.textBox').focus(); 

        // Makes List Items Sortable. //
        $('h3').sortable();
        
    }
);









