// $('.pokemon').click(addPockemon);
// function addPockemon() {
//    let id = $('.id_pokemon').val();

//    $.ajax(`https://pokeapi.co/api/v2/pokemon/${id}`, {
//       success: function (data) {
//          let name = data.forms.forEach(element => {
//             let a = $('.test').after(`<span>${element.name}</span><br>`);
//          });
//          console.log(data);
//       },
//    });
// }
(function ($) {
   $('.btn-one').click(addclassone);

   function addclassone() {
      console.log('qqq');
      $('p.text').addClass('active');
      $('.btn-one').css('display', 'none');
   }

   $('.btn-two').click(addclasstwo);

   function addclasstwo() {
      $('img').addClass('active');
      $('.btn-two').css('display', 'none');
   }
})(jQuery);
