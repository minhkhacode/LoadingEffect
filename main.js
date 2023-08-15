fetch('https://jsonplaceholder.typicode.com/photos')
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res);
    })
    .then(function(){
        const loadingElements = document.querySelectorAll('.loading');
        loadingElements.forEach(el => {
            el.classList.remove('loading')
        })

        const image = document.querySelector('.image');
        const title = document.querySelector('.title');
        const description = document.querySelector('.description');
        const readmoreBtn = document.querySelector('.readmore');

        image.innerHTML = `
            <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt="">
        `

        title.innerHTML = `
            Nguyen Minh Kha
        `

        description.innerHTML = `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta qui repudiandae, maxime optio voluptatem eius eveniet officiis
        `

        readmoreBtn.innerHTML = `Read More`
    })