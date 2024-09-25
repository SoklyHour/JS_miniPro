// Weather Object
const weather = {
    city: "New York",
    Temperature: 25,
    Condition:"Sunny",
    getWeather: function (){
        const randomTemperature = Math.floor(Math.random()*35); // ramdom temperature between 0 to 35
        const conditions = ["Sunny", 'Cloudy', "Rainy", "Snowy", "Windy"];
        const randomCondition = [Math.floor(Math.random() * conditions.length)]

        // Update the object with new values
        this.Temperature = randomTemperature;
        this.conditions = randomCondition;

        return `Weather updated: ${this.city}, ${this.Temperature}°C, ${this.Condition}`;

    }
}


