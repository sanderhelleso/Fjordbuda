const readdir = require('fs-readdir-promise');

module.exports = app => {

    // fetch all gallery imgs
    app.post('/api/gallery/all', (req, res) => {
        res.send({
            galleryImgs: 123
        });
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