const gifs = document.getElementById('gifs');
function GetTrendingGifs() {
  axios.get('http://api.giphy.com/v1/gifs/trending?api_key=TXA94dHSCPNErgABsutcebsDRHO6MBmM')
    .then((result) => {
      const { data } = result.data;
      let output = '<div class="result">';
      data.forEach((res) => {
        const gifPreview = res.images.preview_webp.url;
        console.log(gifPreview);
        console.log(res);
        output += `
        <div class='grid-sizer'></div>
       <div class='grid-item'>
       <img src=${gifPreview} alt=${res.id}/>
       </div>
        `;
        output += '</div>';
        gifs.innerHTML = output;
      });
    }).catch((err) => {
      console.log(err);
    });
}


GetTrendingGifs();

// const grid = document.querySelector('.grid');
// let msnry;

// imagesLoaded(grid, () => {
//   // init Isotope after all images have loaded
//   msnry = new Masonry(grid, {
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-sizer',
//     percentPosition: true,
//   });
// });
// console.log(msnry);
