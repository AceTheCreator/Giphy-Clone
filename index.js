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
       <div class='row'>
       <div class='gifs'>
       <img src=${gifPreview} alt=${res.id}/>
       </div>
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
