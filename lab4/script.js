class App{
    constructor(){
        this.getLocation(); // locatie opvragen
        this.latitude;
        this.longitude;
        
        this.getHarryPotter();
       

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
       
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ebc82f2bff35c1505e89cb0d39b47c91/${this.latitude},${this.longitude}?units=si`;
        fetch(url).then(response => {   //als er een respons is sturen we deze in een json formaat
            return response.json();
        }).then(data => {
           
            let weather = Math.round(data.currently.temperature);
            document.querySelector("#summary").innerHTML = data.currently.summary;
            document.querySelector("#temperature").innerHTML = weather + " °C";
            
            this.getHarryPotter(weather);
            
        }).catch(error => {
            console.log("foutje");
        });
        
    }
    

    getHarryPotter(weather){

        let wizzardId;
        let temp;

       if (weather > 20){
           wizzarId = "5a12292a0f5ae10021650d7e";
           temp = "hot";
           document.querySelector("#weatherAd").style.backgroundImage = "url('harry_potter.jpg')";
           

       }else{
           wizzardId = "5a109af13dc2080021cd877a";
           temp = "cold";
           document.querySelector("#weatherAd").style.backgroundImage = "url('hermione.jpg')";
       }

        let urlPotter = `https://cors-anywhere.herokuapp.com/https://www.potterapi.com/v1/characters?key=$2a$10$rvk.8WbTjkOSWIaa0KpTWuyeUuXITm76LD4lga0L2riSwaIF0UXwu&_id=${wizzardId}` ;
        
        
        
        fetch(urlPotter).then(response => {   //als er een respons is sturen we deze in een json formaat
            return response.json();
        }).then(data => {
            console.log(data);
            document.querySelector("#person").innerHTML = data[0].name + " thinks it's too " + `${temp}` + ". Time for a weather spell!";
           
            
        }).catch(error => {
            console.log("foutje");
        });
    }

    errorLocation(error){
        console.log(error);
    }
}
let app = new App();