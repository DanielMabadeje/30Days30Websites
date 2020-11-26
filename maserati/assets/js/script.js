// for experience and audio

function playAudio(params) {
    
}


function startEngine(params) {
    
}





// slick carousel
$('.center').slick(
    // {
    //     dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 3,
    //     centerMode: true,
    //     variableWidth: true
    // }


    {
        centerMode: true,
  centerPadding: '10',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
}
);