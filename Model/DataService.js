class DataService{
    constructor(){
        
    }
    getData(vegpont, callback, hibaCallback){
        axios.get(vegpont)
        .then(function (response) {
            // handle success
            console.log(response);
            console.log(response.data);
            console.log(response.data.nevek);
            console.log(response.status);
            console.log(response.statusText);
            callback(response.data.nevek)
        })
        .catch(function (error) {
            // handle error
            hibaCallback(error);
        })
        .finally(function () {
            // always executed
        });
    }

} export default DataService