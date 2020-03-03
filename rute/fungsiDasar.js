module.exports = app => {
    // Selamat datang di project-alpha
    app.get('/', (req, res) => {
        res.send('Selamat datang di project-alpha!')
    })
}