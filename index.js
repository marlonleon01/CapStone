const authorOfImg = document.getElementById("author-of-img")
const coinGeckoBaseUrl = "https://api.coingecko.com/api/v3"
const cryptoCurrencyName = document.getElementById("crypto-currency")
const cryptoPriceInfo = document.getElementById("crypto-currency-prices")

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
    
fetch(`${coinGeckoBaseUrl}/coins/bitcoin`)
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
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