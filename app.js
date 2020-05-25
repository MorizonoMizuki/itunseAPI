

const Card = ({url,result,title,artistName}) =>`
<div class="col-4 mb-5">
        <a href="${url}"  target="_blank">
        <div class="card" >
            <img src="${result}" class="card-img-top" alt="">
            <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${artistName}</p>
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

            let src = response.results[i].artworkUrl30;
            let result = src.replace(/30x30/g, '300x300');





         $(".row").append(
            Card({ result:result ,title:response.results[i].collectionCensoredName, artistName:response.results[i].artistName,url:response.results[i].trackViewUrl})
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

