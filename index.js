const authorOfImg = document.getElementById("author-of-img")
const coinGeckoBaseUrl = "https://api.coingecko.com/api/v3"

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
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))