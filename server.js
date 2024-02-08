const express = require('express');
const { HbysHastaBilgisiSorgulama, HbysDoktorOnayVerme } = require('./data/users');
const app = express();
const cors = require('cors');
const PORT = 8080

//JWT integration
const jwt = require('jsonwebtoken');
app.use(cors());



app.post('/api/Asos/HbysHastaBilgisiSorgulama', (req, res) => {
    res.json(HbysHastaBilgisiSorgulama);
});


app.post('/api/Asos/HbysDoktorOnayVerme', (req, res) => {
    res.json(HbysDoktorOnayVerme);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);




