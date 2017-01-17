import {Node} from "./Node";

export class Step extends Node {
    
public step_data:any = {};
    constructor(id:Number){
        super(id);
        this.type = "STEP";

    }
}