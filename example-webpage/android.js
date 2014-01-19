if (window.innerWidth && window.innerHeight <= 600){
    $(document).ready(function(){
        $('#header ul').addClass('hide');
        $('#header').append('<div class="leftButton" onclick="toggleMenu()">Menu</div>');
    });
    
    function toggleMenu(){
        $('#header ul').toggleClass('hide');
        $('#header .leftButton').toggleClass('pressed');
    }
}