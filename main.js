

const KEY = 'ee84d96a9b4a916fa42d12dd798db0da';
        $('#btn').click(function(){
            let city = $('#inp').val();
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`)

                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    let cloudy = data.clouds.all;
                    $('#degrees').empty();
                    $('#feelsLike').empty();
                    $('#city').empty();
                    $('#country').empty();
                    $('#imgCloudy').empty();
                    $('#textCloud').empty();
                    $('#degrees').append((data.main.temp - 273).toFixed(1));
                    $('#feelsLike').append((data.main.feels_like - 273).toFixed(1));
                    $('#city').append((data.name));
                    $('#country').append((data.sys.country));
                    $('#inp').val('');
                    $('#info').css('display','flex')
                    if(cloudy < 50){
                        $('#imgCloudy').css('background-image','url(./sunny.png)')
                        $('#wrap').addClass('red')
                        $('#textCloud').append('Sunny');
                    }if(cloudy > 50 && cloudy < 70){
                        $('#wrap').addClass("blue")
                        $('#imgCloudy').css('background-image','url(./middle-cloud.png)')
                        $('#textCloud').append('Middle-cloud');
                    }if(cloudy > 70){
                        $('#wrap').addClass("grey")
                        $('#imgCloudy').css('background-image','url(./cloudy.png)')
                        $('#textCloud').append('Cloudy');
                    }
                    console.log(data)
                    console.log(cloudy)


                });
                
        });
