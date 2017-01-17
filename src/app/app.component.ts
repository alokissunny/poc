import { Component } from '@angular/core';
import {Section} from "./dataModel/Section";
import {Step} from "./dataModel/Step";
import {Node} from "./dataModel/Node";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Guide page';
  data:Section;
  constructor(){
this.createDummydata()
  }
  public createDummydata(){
    this.data = new Section(1);
    var csection = new Section (2);
    csection.addChild(new Step(3));
    csection.addChild(new Step(4));
      this.data.addChild(csection);
    this.data.addChild(new Step(1));
        this.data.addChild(new Step(2));
  }
  public addStep(){
    this.data.addChild(new Step(0));
  }
  public addSection(){
    this.data.addChild(new Section(0));
  }
}
