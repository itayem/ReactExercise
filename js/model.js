 $(document).ready(function(){
      $('.carousel').carousel({
            dist:0,
            shift:0,
            padding:50,
      });
	$Current = 1;
	function prev(){
		if($Current == 1)
			return 10;
		else{
			return $Current - 1;
		}
	}
	function next(){
		if($Current== 10){
			return 1;
		}
		else{
			return $Current + 1;
		}
	}  
	  $("#direction-left").on("click",function(){
		  $('.carousel').carousel('prev');
		  $('.active').addClass("not-active");
		  $('.active').removeClass("active");
		  $('#'+prev()).removeClass("not-active");
		  $('#'+prev()).addClass("active");
		  $Current = prev();
		  
	  });
	  $("#direction-right").click(function(){
		  $('.carousel').carousel('next');
		  $('.active').addClass("not-active");
		  $('.active').removeClass("active");
		  $('#'+next()).removeClass("not-active");
		  $('#'+next()).addClass("active");
		  $Current = next();
	  });
	  
	  $(".carousel-item").on("click", function(){
		  $('.active').addClass("not-active");
		  $('.active').removeClass("active");
		  $('#'+this.name).removeClass("not-active");
		  $('#'+this.name).addClass("active");
		  $Current = parseInt(this.name);
	  });

});
	



