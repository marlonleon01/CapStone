function getBackground() {
    const authorOfImg = document.getElementById("author-of-img")

    fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        authorOfImg.textContent = `By: ${data.user.name}`
        document.body.style.backgroundImage= `url(${data.urls.full})`
    })
    .catch(err => {
        authorOfImg.textContent = `By: Jeremy Bishop`
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1494564605686-2e931f77a8e2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzcxMjY5NjY&ixlib=rb-4.0.3&q=80')"
    })
}
getBackground()

function getCoinInfo() {
    const coinGeckoBaseUrl = "https://api.coingecko.com/api/v3"

    fetch(`${coinGeckoBaseUrl}/coins/bitcoin`)
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        const cryptoCurrencyName = document.getElementById("crypto-currency")
        const cryptoPriceInfo = document.getElementById("crypto-currency-prices")

        cryptoCurrencyName.innerHTML = `
                <img src="${data.image.small}"> <span>${data.name}</span>
            `
        cryptoPriceInfo.innerHTML = `
                <p>🎯: $${data.market_data.current_price.usd}</p>
                <p>👆: $${data.market_data.high_24h.usd}</p>
                <p>👇: $${data.market_data.low_24h.usd}</p>
            `
    })
    .catch(err => alert(err))
}
getCoinInfo()

function updateTime() {
    const date = new Date()
    const time = document.getElementById("time")
    time.textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}
setInterval(updateTime, 1000)

function getLocationAndWeather() {
    const weatherBaseUrl = "https://apis.scrimba.com/openweathermap/data/2.5/weather"
    const weather = document.getElementById("weather")

    navigator.geolocation.getCurrentPosition(position => {
        const longitude = position.coords.longitude
        const latitude = position.coords.latitude
        
        fetch(`${weatherBaseUrl}?lat=${latitude}&lon=${longitude}&units=imperial`)
            .then(res => {
                if (!res.ok) {
                    throw Error("Weather data not available")
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                weather.innerHTML = `
                        <div>
                            <img src="${iconUrl}" />
                            <h2>${Math.round(data.main.temp)}º</h2>
                        </div>
                        <p>${data.name}</p>
                    `
            })
            .catch(err => alert(err))
    })
}
getLocationAndWeather()
