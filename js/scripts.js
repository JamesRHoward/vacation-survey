$(document).ready(function() {
  $("#vacation").submit(function(event) {
    event.preventDefault();
    var weather =parseInt($('#weather option:selected').val());
    var activites =parseInt($('#activites option:selected').val());
    var active =parseInt($('#active option:selected').val());
    var fun =parseInt($('#fun option:selected').val());
    var color =parseInt($('#color option:selected').val());
    var season =parseInt($('#season option:selected').val());
    var destination;
    var total = weather + activites + active + fun + color + season
debugger;
    if ("!season"){
      if (total >= 6 && total <15) {
        $('#italy').show();
      }
       if (total >=15 && total <23) {
        $('#vegas').show();
     }
      if (total >=23 && total <31) {
        $('#germany').show();
        }
      }
    });
  });
