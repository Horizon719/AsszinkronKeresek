
import DataService from "../Model/DataService.js";
import DataView from "../View/DataView.js";
import HibaView from "../View/HibaView.js";

class DataController{
    constructor(){
        console.log('yíxdfvaídg');
        this.dataService = new DataService();
        this.dataService.getData("../adat.json", this.megjelenit, this.hibaMegjelenit);
    }
    
    megjelenit(lista){
        console.log(lista);
        new DataView(lista, $(".lista"));
    }

    hibaMegjelenit(error){
        new HibaView(error, $(".lista"));
    }

} export default DataController