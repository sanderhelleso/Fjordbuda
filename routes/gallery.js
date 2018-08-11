const readdir = require('fs-readdir-promise');

module.exports = app => {

    // fetch all gallery imgs
    app.post('/api/gallery/all', (req, res) => {

        const imgs = [];
        let galleryCount = 0;
        let folderCount = 0;
        const url = `./client/public/img/lookbook/`;
        readdir(url)
        .then(folders => {
            folders.forEach(folder => {
                folderCount++;
                const galleryPath = `${url}${folder}/gallery`;
                readdir(galleryPath)
                .then(files => {
                    // send along an object with brand and files
                    const obj = {
                        brand: folder,
                        files: files
                    }
                    imgs.push(obj);
                    galleryCount++;
                })
                .catch(err => {
                    // no folder is present, reduce count
                    folderCount--;
                    return;
                })
                .then(done => {

                    // send AFTER all data is loaded into array
                    if (galleryCount === folderCount) {
                        res.send({
                            galleryImgs: imgs
                        });
                    }
                });
            });
        })
    }); 

    // fetch brand specific gallery imgs
    app.post('/api/gallery', (req, res) => {
        const url = `./client/public/img/lookbook/${req.body.brand}/gallery`;
        readdir(url)
        .then(files => {
            res.send({
                galleryImgs: files
            });
        })
    });
}