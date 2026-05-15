const lang = "en"
const lat_lon = "21.14603996377535,106.073258917024"
const api = "d61d56e7025c803083cb4e4d4513d1a3"
async function launch() {
    await weather();
    $done();
}

launch()

function weather() {
    let info = {
        url: "https://api.darksky.net/forecast/" + api + "/" + lat_lon + "?lang=" + lang + "&units=si&exclude=currently,minutely",  //?lang=en&units=si
        headers: {},
    }
    $httpClient.get(info, async function (error, response, data) {
        if (error) {
            console.log(error);
            $notification.post("Dark Sky", lat_lon + 'bad connection', error);
        } else {
            try {
                const obj = JSON.parse(data);
                console.log(obj);
                const hour_summary = obj.hourly.summary;
                const icon_text = obj.hourly.icon;
                let icon = "❓"
                if (icon_text == "clear-day") icon = "☀️";
                if (icon_text == "partly-cloudy-day") icon = "🌤";
                if (icon_text == "cloudy") icon = "☁️";
                if (icon_text == "rain") icon = "🌧";
                if (icon_text == "snow") icon = "☃️";
                if (icon_text == "sleet") icon = "🌨";
                if (icon_text == "wind") icon = "🌬";
                if (icon_text == "fog") icon = "🌫";
                if (icon_text == "partly-cloudy-night") icon = "🌑";
                if (icon_text == "clear-night") icon = "🌑";
                const daily_prec_chance = obj.daily.data[0].precipProbability;
                const daily_maxtemp = obj.daily.data[0].temperatureMax;
                const daily_mintemp = obj.daily.data[0].temperatureMin;
                $notification.post("Tp. Bắc Ninh", icon + " " +Math.round(daily_mintemp) + " - " + Math.round(daily_maxtemp) + "  ☔️ " + (Number(daily_prec_chance) * 100).toFixed(1)+ "%", hour_summary);
            } catch (e) {
                console.log(e);
            }
        }
    });
}
