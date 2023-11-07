import UrlapModel from "../Model/UrlapModel.js"
import UrlapView from "../View/UrlapView.js"

class UrlapController{
    constructor(){
        const URLAPMODEL = new UrlapModel();
        new UrlapView($(".urlap"), URLAPMODEL.leiro);
        $(window).on("valid", function(event){
            console.log(event.detail);
        })
    }

} export default UrlapController