const axios = require("axios");

const orthancQuery = async (queryUrl, method='GET', body={}) => {
    switch (method) {
        case 'GET':
            const res = await axios.get(`http://localhost:5000/orthanc/${encodeURIComponent(queryUrl)}`)
            return res.data
        case 'POST':
            axios.post(`http://localhost:5000/orthanc/${encodeURIComponent(queryUrl)}`, body)
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
            break;
        default:
            break;
    }
}

export { orthancQuery };