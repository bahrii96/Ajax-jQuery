$('.pokemon').click(addPockemon);
function addPockemon() {
   let id = $('.id_pokemon').val();

   $.ajax(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      success: function (data) {
         let name = data.forms.forEach(element => {
            let a = $('.test').after(`<span>${element.name}</span><br>`);
         });
         console.log(data);
      },
   });
}
