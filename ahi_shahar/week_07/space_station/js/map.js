var map;

var initMap = function( data ) {
    console.log(data);
    lat = Number.parseFloat(data.iss_position.latitude);
    lon = Number.parseFloat(data.iss_position.longitude);
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: new google.maps.LatLng(lat, lon),
        mapTypeId: 'roadmap'
    });
};

var getCurrentLocation = function () {
    $.ajax({
          url: locationURL,
          type: "GET",
          dataType: "JSONP"
      }).done( initMap );
};


$(document).ready(function(){

    getCurrentLocation();


window.setInterval( function() {
  $(".location p").html("");
  getCurrentLocation();
} , 5000);

});
