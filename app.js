
const Card = ({url,src,title,artist}) =>`
<div class="col-4 mb-5">
        <a href="${url}"  target="_blank">
        <div class="card" >
            <img src="${src}" class="card-img-top" alt="">
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${artist}</p>
            </div>
        </div> 
        </a>  
    </div>
`;

$("#button-addon2").on('click', () => {

    $('.row').empty();
    
    const ward = $(".form-control").val()

    $.ajax({
        url: 'https://itunes.apple.com/search',
        type: 'GET',
        dataType:'jsonp',
        data: {
            term: ward,
            country: 'jp',
            media: 'music',
            media: 'music',
            lang: 'ja_jp',
        }   
    }).done((response)  =>{

        for (let i = 0; i < response.results.length; i++) {


         $(".row").append(
            Card({ src: response.results[i].artworkUrl30,title:response.results[i].collectionCensoredName, artist:response.results[i].artistName,url:response.results[i].trackViewUrl})
            ); 
        }


        console.log(response)
        console.log(response.results[1].artworkUrl30)
        console.log(response.results[1].collectionCensoredName)
        console.log(response.results[1].artistName)
        console.log(response.results[1].trackViewUrl)

        



    }).fail((error) => {

    });

});