class App{
    constructor(){
        this.getLocation(); // locatie opvragen
        this.latitude;
        this.longitude;

    }

    getLocation(){
        navigator.geolocation.getCurrentPosition(this.gotLocation.bind(this), this.errorLocation.bind(this));
        
    }

    gotLocation(result){
        this.latitude = result.coords.latitude;
        this.longitude = result.coords.longitude;
        this.getWeather();
    }

    getWeather(){
        //https://api.darksky.net/forecast/d145d0c7d1afd4308919998c4a684254/37.8267,-122.4233
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/d145d0c7d1afd4308919998c4a684254/${this.latitude},${this.longitude}?units=si`;
        fetch(url).then(response => {   //als er een respons is sturen we deze in een json formaat
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch(err => {
            console.log(err);
        })

        
    }

    errorLocation(error){
        console.log(error);
    }


}
let app = new App();