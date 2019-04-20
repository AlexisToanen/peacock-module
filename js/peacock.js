// French Peacock Module create by ALexis TOANEN.
var app = {
    init: function(){

        window.addEventListener('scroll', app.launchScrollAppear);
    },
    launchScrollAppear: function(){
    
        var peacockTopBottom = document.querySelectorAll('.peacock-frm-top, .peacock-frm-bottom');
        var peacockLeftRight = document.querySelectorAll('.peacock-frm-left, .peacock-frm-right');

        for (index = 0; index < peacockTopBottom.length; index +=1) {
            app.scrollAppear(peacockTopBottom[index], 'y');
        }

        for (index = 0; index < peacockLeftRight.length; index +=1) {
            app.scrollAppear(peacockLeftRight[index], 'x');
        }

    },
    scrollAppear: function(domElement, direction){
   
        var peacockPositionTopBottom = domElement.getBoundingClientRect().top;
        var screenPositionTopBottom = window.innerHeight / 2;

        var peacockPositionLeftRight = domElement.getBoundingClientRect().top;
        var screenPositionLeftRight = window.innerHeight / 2;
        
        if(peacockPositionTopBottom < screenPositionTopBottom && direction == 'y'){
            domElement.classList.add('peacock-appear-' + direction);
        }

        if(peacockPositionLeftRight < screenPositionLeftRight && direction == 'x'){
            domElement.classList.add('peacock-appear-' + direction);
        }
        
    },

};

document.addEventListener('DOMContentLoaded', app.init);
