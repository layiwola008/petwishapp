// $(function(){

//   $('button').click(function(event){
//   $('ul').append(
//     "<li>" + ["dog", "cat", "parrot"][Math.floor(Math.random()*3)] + 
//     "</li>"
//   )
//   });

//   $('ul').on('click', 'li', function(event){
//     this.remove();
//   })
// });

$(function(){
  $('button').click(function(event){
    $('ul').append(
      "<li>" + ["dog", "cat", "parrot"][Math.floor(Math.random()*3)] + "</li>"
    )
  });

  $('ul').on('click', 'li', function(event){
    this.remove();
  });

});