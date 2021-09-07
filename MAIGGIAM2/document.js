
    var colors = ["red", "blue", "green"];
    var colorIndex = 0;
    function changeColor() {
        var col = document.getElementById("body");
        if( colorIndex >= colors.length ) {
            colorIndex = 0;
        }
        col.style.backgroundColor = colors[colorIndex];
        colorIndex++;  }
        var player;

              function onYouTubeIframeAPIReady() {
                player = new YT.Player('player', {
                  height: '350',
                  width: '615',
                  videoId: '3-aM0DrLuuw?rel=0&amp;controls=0&amp;showinfo=0&modestbranding=1',
                  events: {
                    'onStateChange': function(event) {
                      if (event.data == YT.PlayerState.PLAYING) {
                         $('.vid').removeClass('isAngled');
                      } else {
                         $('.vid').addClass('isAngled');
                      }
                    }
                  }
                });
              }











let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

















    //button function for Example 1 below - changing CSS styling (colors and font sizes) using JS
    function myFunction1(){

        document.body.style.backgroundColor="yellow";
        document.getElementById("heading1").style.color="green";
    }
        function myFunction2(){
            document.body.style.backgroundColor="#ffb3b3";
            document.getElementById("heading1").style.color="white";
        }

        function textSize1(){
            document.getElementById("heading1").style.fontSize="1vw";
        }
        function textSize2(){
            document.getElementById("heading1").style.fontSize="3vw";

        }
        function textSize3(){
            document.getElementById("heading1").style.fontSize="5vw";
        }

  
