export default class Services {
  async getLinkToImage() {
    const url =
      'https://api.unsplash.com/photos/random?query=morning&client_id=your id';

    const res = await fetch(url);

    const data = await res.json();

    return data.urls.regular;
  }

  async getIP() {
    const url = 'https://ipinfo.io/json?token=your token';

    const res = await fetch(url);

    const data = await res.json();

    return this.transformInfo(data);
  }

  async getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ua&units=metric&APPID=your id`;

    const res = await fetch(url);

    const data = await res.json();

    return this.transformWeather(data);
    // return console.log(data);
  }

  transformInfo(ip) {
    return {
      city: ip.city,
    };
  }

  transformWeather(body) {
    return {
      city: body.city.name,
      country: body.city.country,
      latitude: body.city.coord.lat,
      longitude: body.city.coord.lon,
      feelsLike: body.list[0].main.feels_like.toFixed(),
      humidity: body.list[0].main.humidity,
      temp: body.list[0].main.temp.toFixed(),
      wind: body.list[0].wind.speed,
      firstDay: body.list[6].main.temp.toFixed(),
      secondDay: body.list[14].main.temp.toFixed(),
      thirdDay: body.list[22].main.temp.toFixed(),
    };
  }
}
