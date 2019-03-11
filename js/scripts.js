

// use AJAX to call the Random User Generator API and receive a randomly generated user in return
$.ajax({
    // the results should contain 12 users and they should all be from the US  
    url: "https://randomuser.me/api/?results=12&nat=us",
    dataType: "json",
    success: function (data) {
    // console.log to see the data that is returned  
    console.log(data);

    // search HTML markup
    const form = `<form action="#" method="get">
                        <input type="search" id="search-input" class="search-input" placeholder="Search...">
                        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
                </form>`;
        
    // append the search box and submit button to the page      
    document.querySelector('.search-container').innerHTML = form;

    // loop through 12 random users      
    for (let i= 0; i < data.results.length; i++){
        // gallery HTML markup
        const gallery = `<div class="card">
                            <div class="card-img-container">
                                <img class="card-img" src="${data.results[i].picture.large}" alt="profile picture">
                            </div>
                            <div class="card-info-container">
                            <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
                            <p class="card-text">${data.results[i].email}</p>
                            <p class="card-text cap">${data.results[i].location.city}, ${data.results[i].location.state}</p>
                            </div>
                        </div >`;
        
        // append each gallery card to the page
        document.querySelector("#gallery").innerHTML += gallery;            
        }   
        
        // when anything that has the class of "card" is clicked, show the appropriate information
        $(".card").on("click", function () {
            // get the index of a specific card
            let cardIndex = $('.card').index(this);
            // modal HTML markup
            const modal = `<div class="modal-container">
                                <div class="modal">
                                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                                    <div class="modal-info-container">
                                        <img class="modal-img" src="${data.results[cardIndex].picture.large}" alt="profile picture">
                                        <h3 id="name" class="modal-name cap">${data.results[cardIndex].name.first} ${data.results[cardIndex].name.last}</h3>
                                        <p class="modal-text">${data.results[cardIndex].email}</p>
                                        <p class="modal-text cap">${data.results[cardIndex].location.city}</p>
                                        <hr>
                                        <p class="modal-text">${data.results[cardIndex].cell}</p>
                                        <p class="modal-text cap">${data.results[cardIndex].location.street}, ${data.results[cardIndex].location.state}, ${data.results[cardIndex].nat} ${data.results[cardIndex].location.postcode}</p>
                                        <p class="modal-text">Birthday: ${data.results[cardIndex].dob.date.slice(0,10)}</p>
                                    </div>
                                </div>
                            </div>`;
            // append the modal the the body of the page
            document.querySelector("body").innerHTML = modal;
      })
    }
});
                