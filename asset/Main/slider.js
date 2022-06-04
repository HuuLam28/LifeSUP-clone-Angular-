
$(document).ready(function() {

// Suggest Slider 
$('#suggest-slider').owlCarousel({
  items:2,
  loop: true,
  margin: 16,
  nav : true,
  navText:[
        "<button> < </button>",
        "<button> > </button>"
        ],
  responsive:{
      0:{
          items:0
      },
      600:{
        items:1
      },
      768:{
          items:1
      },
      1024:{
        items:2        
      },
      1239:{
          items:2
      }
  }
});
});