const app = require('./app')

const port = process.env.PORT || 1000;

app.listen(port, () => {
    console.log('app running...')
})