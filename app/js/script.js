/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event)
{
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++)
    {
      var openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show'))  {
        openDropdown.classList.remove('show');
      }
    }
  }
}



/*

function(){
  ('.element').hover(function(){
    (this).children('li').stop(false,true).fadeIn(300);},
      function() {
        (this).children('li').stop(false, true).fadeOut(300);
      }
  }
*/





/*
function myFunction2() {
  document.getElementById("myElements").classList.toggle("show");
}

window.onclick = function(event)
{
  if (!event.target.matches('.Elements')) {

    var elem = document.getElementsByClassName("element-content");
    var i;
    for (i = 0; i < elem.length; i++)
    {
      var openEl = elem[i];

      if (openEl.classList.contains('show'))  {
        openEl.classList.remove('show');
      }
    }
  }
}
/*/

/*
$(document).ready(function (){
  $('.element').click(function(event){
    $('.invoice, .charts, .snippets, .widgets, .offers, .forms, .plugin, .email, .message, .notification'
  ).toggleClass('active');
  });
});
*/
