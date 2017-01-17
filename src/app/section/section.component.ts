import { Component, OnInit,Input,Output } from '@angular/core';
import {StepComponent} from "../step/step.component";
import {Section} from "../dataModel/Section";
import {Step} from "../dataModel/Step";
import {Node} from "../dataModel/Node";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  public nodes:Node[];
_dataModel:Section
  @Input()
  set dataModel(data:Section)
  {
    this._dataModel = data;
  }
  get dataModel():Section{
    return this._dataModel;
  }

  constructor() { }

  ngOnInit() {
  }

}
