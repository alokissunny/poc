import {Node} from "./Node";

export class Section extends Node {
    public childs:Node[];// = [];


    constructor(id:Number){
        super(id);
        this.type = "SECTION";
        this.childs = [];
        
    }
    public addChild(child:Node,index:Number =-1)
        {
            this.childs.push(child);
        }

        public getChilds():Node[]
        {
            return this.childs;
        }
}