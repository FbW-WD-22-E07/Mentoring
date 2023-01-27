// define promise
const myPromise = new Promise((resolve, reject) => {

    let isFileReady = false;

    setTimeout(() => {
        //some processes
        isFileReady = false;

        if (isFileReady) {
            
            resolve('success');
        } else {
            reject('failure')
        }
    }, 3000);
});

//consuming promise
myPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

console.log('second statement');
console.log('third statement');


//consume promise
fetch()
    .then()
    .catch()