// async programming

// //define a promise (producing code)
// let promise = new Promise((resolve, reject) => { 
//     let isOk = false;

//     if (isOk) {
//         resolve('Success')
//     } else {
//         reject('Error')
//     }
// })
 
// //consume the promise
// promise
//     .then((result) => { console.log('Success Result:', result) })
//     .catch((failur) => { console.log('Failed Result:', failur) })



/* ---------------------------------------------------------------- */
/*                               fetch                              */
/* ---------------------------------------------------------------- */


    


function getData (number) {
    
    const url = `https://randomuser.me/api/?results=${number}&&nat=DE&&gender=male`;
    let users = [];
    fetch(url)
        .then((response) => { 
            console.log(response)
            return response.json()
        })
        .then((resp) => {
            users = resp.results;
            console.log(resp);
            users.forEach(user => {
                
                let card = `
                            <div class="card">
                                <img src="${
                                    user.picture.large
                                }" alt="Profile Picture" />
                                <div class="card-info">
                                    <p class="card-title">Title: ${user.name.title}</p>
                                    <h3 class="card-title">${
                                        user.name.first + " " + user.name.last
                                    }</h3>
                                    <p class="card-email">Email: ${user.email}</p>
                                    <p class="card-address">Address: ${
                                        user.location.street.name +
                                        " " +
                                        user.location.street.number +
                                        " " +
                                        user.location.city
                                    }</p>
                                    <p class="card-phone">Phone: ${user.phone}</p>
                                </div>
                            </div>
                `;
            
                document.body.innerHTML += card;
            })
        })
        .catch((err) => { console.log(err) })
    console.log('btn clicked')
}


let btn = document.querySelector("input[type='button']");
let textField = document.querySelector("input[type='text']");

btn.addEventListener('click', ()=>{getData(document.querySelector("input[type='text']").value)});