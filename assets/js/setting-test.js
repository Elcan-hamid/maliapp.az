$( document ).ready(function() {

  $('#click-premiuminput-btn').click(function (){
    $('#change-modal-header').text("Premium paketə keçmək istədiyinizə əminsiniz ?");
    $('#change-button-text').text("Bəli, əminəm");
    $('#change-premium-modal-text').text('Zəhmət olmasa ödəniş üçün  kart məlumatlarınızı daxil edin');


  })

  $('.click-simpleinput-btn').click(function (){
    $('#change-modal-header2').text("Bir sıra premimum funksiyalarından yararlanma imkanını itirəcəksiniz, pulsuz paketə keçmək istədiyinizə əminsiniz ?");
    $('#change-button-text2').text("Bəli, əminəm");


  })

});
