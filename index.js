const authorOfImg = document.getElementById("author-of-img")

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        authorOfImg.textContent = data.user.name
        document.body.style.backgroundImage= `url(${data.urls.full})`
    })