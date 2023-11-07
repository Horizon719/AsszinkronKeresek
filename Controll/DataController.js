
import DataService from "../Model/DataService.js";
import DataView from "../View/DataView.js";
import HibaView from "../View/HibaView.js";
import { ADATLEIRAS } from "../Model/adat.js";
import UrlapView from "../View/UrlapView.js";

class DataController{
    #lista = {};
    constructor(){
        this.#lista = ADATLEIRAS;
        new UrlapView(ADATLEIRAS, $(".urlap"));
        this.dataService = new DataService();
        this.dataService.getData("../adat.json", this.megjelenit, this.hibaMegjelenit);
        
    }
    
    megjelenit(lista){
        
        new DataView(lista, $(".lista"));
    }

    hibaMegjelenit(error){
        new HibaView(error, $(".lista"));
    }

} export default DataController