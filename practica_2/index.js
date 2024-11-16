const axios = require('axios')
const API_URL = 'https://reclutamiento-dev-procontacto-default-rtdb.firebaseio.com/reclutier.json'

axios
    .get(API_URL)
    .then(console.log)