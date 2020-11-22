$(document).ready(function(){
    
    
    $(".barraMenu  a").click(function(e){
        
        e.preventDefault();
        
        $("nav a").removeClass("selected");
        $(this).addClass("selected");
        
        /*var link=$(this);*/
        var div=$(this.hash);
        /*
        console.log($(this).html());
        console.log($(this.hash).html())
        */
        
        console.log(div.offset().top)
                
       // $("html,body").scrollTop(div.offset().top);
        
        $("html,body").stop().animate({scrollTop:div.offset().top},1000);

    }); //.click
    
    
    $(".top").click(function(){
        $("html,body").stop().animate({scrollTop:0},1000);    
    });  
        
    
    $(document).scroll(function(){
        console.log($(document).scrollTop());
        if($(document).scrollTop()>400)
        {
            $(".top").css("bottom","35px");
        }
        else{
            $(".top").css("bottom","-100px");
        }
        
        
        
        
    });
    
    
    
    var words = ['web design addicted', 'content creator', 'studentessa di Digital','customer care specialist', 'viaggiatrice','lettrice appasionata','cinefila', 'techFan','grifondoro' ];
    var counter = 0;
    var word = document.getElementById("carousel-words");
    
    setInterval(update_carousel_words,1500);
    
    function update_carousel_words(){
        
        word.innerHTML = words [counter];
        counter++;
        if(counter >=words.length){counter = 0}
    }
    
    
    
    
    
});//.ready