'use strict';


$(document).ready(function() {

    //SPEC 4: Make the list sortable
    $('ul').sortable();


    $('form').submit(function (event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
      event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)

      //SPEC 2:
      var todoText = $(this).find('#todo').val();

      //Append our new item to the current list.
      $('#todo-list').append('<li><a href="#"><i class="fa fa-times-circle" aria-hidden="true"></i></a>' + todoText + '</li>');
      //Clear the current text box text
      $('input[type="text"], textarea').val('');

      //Create a hover event on the Font Awesome icon
      $('ul li a i').hover(
        function() {
          $(this).addClass('icon-hover');
        },
        function() {
          $(this).removeClass('icon-hover');
      });

      //Create a click event on the Font Awesome icon
      $('ul li a').click(function(event) {
        event.preventDefault();
        $(this).parent().remove();
      });

    });//!('form').submit()



});//!(document).ready()
