const readdir = require('fs-readdir-promise');

module.exports = app => {

    // fetch gallery imgs
    app.post('/api/gallery', (req, res) => {
        const url = `./client/public/img/lookbook/${req.body.brand}/gallery`;
        readdir(url)
        .then(files => {
            res.send({
                galleryImgs: files
            });
        })
    })
}