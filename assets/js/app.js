const thumbImg = document.querySelector('#thumbImg');
const images = document.querySelector('.avatar-images');

class pixabayImages {
    constructor() {
        // pixabay fetch api key
        this.appKey = '19248854-020916b155564a931c978dfce';

        // pixabay fetch api Query

        this.query = 'yellow+flowers';
        // this.query = 'red+roses';
    }

    //Fetch api Pixabay
    async avatarImgs() {
        const res = await (await fetch(`https://pixabay.com/api/?key=${this.appKey}&q=${this.query}&image_type=photo&pretty=true`)).json();
        return res;
    }
}

// Init Pixabay Class
const allImages = new pixabayImages();

allImages.avatarImgs().then(data => {
    console.log(data.hits)
    data.hits.forEach(e => {
        console.log(e.largeImageURL)

        // Craete Element in Avatar Images
        const img = document.createElement('img');

        // All Images Source from API
        img.src = e.largeImageURL;

        // Every Single images Clicked
        img.addEventListener('click', (e) => {
            thumbImg.src = e.target.src;
        });

        images.appendChild(img);
    })

    // Thumbnail image Initially Show
    thumbImg.src = data.hits[0].largeImageURL;
});

