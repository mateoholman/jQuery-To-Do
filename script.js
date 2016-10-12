'use strict';


$(document).ready(function() {



    //SPEC 4: Make the list sortable
    $('ul').sortable();


    $('form').submit(function (event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
      event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)

      //SPEC 2:
      var todoText = $(this).find('#todo').val();

      //Append our new item to the current list.
      $('#todo-list').append('<li><i class="fa fa-times-circle" aria-hidden="true"></i>' + todoText + '</li>');
      //Clear the current text box text
      $('input[type="text"], textarea').val('');

    });//!('form').submit()

});//!(document).ready()
