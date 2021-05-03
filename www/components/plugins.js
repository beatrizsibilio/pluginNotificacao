// This is a JavaScript file

$(document).on("click","#alerta",function(){
  function retorno(){

  }
  navigator.notification.alert("Minha mensagem",retorno,"Aviso!","Aceito");
});

/*$(document).on("click","#alerta",function(){
  navigator.notification.alert("Minha mensagem",null,"Aviso!","Aceito");
});*/

$(document).on("click","#confirm",function(){
  function confirma(buttonIndex){
    if(buttonIndex == 1){
      navigator.notification.alert("Esclheu a opção A");
    }
    else{
      navigator.notification.alert("Esclheu a opção B");
    }
  }
  navigator.notification.confirm("Escolha A ou B",confirma,"Escolha", ['A','B']);
});

$(document).on("click","#beep",function(){
  navigator.notification.beep(1);
});

$(document).on("click","#vibrar",function(){
  navigator.vibrate(300);
});

function mostraMapa(lat, long){
  L.mapquest.key = 'IlNTrerl9ooWxD3ZyqjG4eMqsfwxPgcT';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 16
        });

        map.addControl(L.mapquest.control());
}

$(document).on("click","#local",function(){
  var onSuccess = function(position) {
        mostraMapa(position.coords.latitude, position.coords.longitude);

        //Deixar apenas as coisas necessárias
        /*alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n');
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');*/
    };

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});