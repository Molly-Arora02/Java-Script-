// Promise States
// 1. Pending
// 2. Fulfilled
// 3. Rejected
// 4. Settled

function download(url) {
    console.log("Download started...");

    return new Promise((resolve, reject) => {

        let downloadedFile = url.split('/').pop();

        setTimeout(() => {

            if (downloadedFile) {
                resolve(downloadedFile);
            } else {
                reject("Download failed");
            }

        }, 3000);

    });
}

// Example Usage
download("https://example.com/Asynchronous.js")
    .then((file) => {
        console.log("Downloaded:", file);
    })
    .catch((err) => {
        console.log(err);
    });