/*

For this quiz, can you use this script, which is linked in the <head> of index.html,
to change the boring placeholder image to a picture of a cute animal?

Remember, you'll need to pass a function into the jQuery object to run
when the document is ready.

Unfortunately, placepuppy is no longer available. Here's a link to a random
animal image on lorempixel.com:
http://lorempixel.com/350/150/animals/

Good luck!


$(function(){
  $(img).attr("<img src="http://placekitten.it/350/150" alt="Placeholder Image">");
});
*/
$(function() {
    $('img').attr('src', 'https://media.newyorker.com/photos/59095c67ebe912338a37455d/master/w_649,c_limit/Stokes-Hello-Kitty2.jpg');
});
