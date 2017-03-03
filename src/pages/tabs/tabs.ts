import {Component} from '@angular/core';
import {BoxPage} from '../box/box';
import {SpherePage} from '../sphere/sphere';
import {CylinderPage} from '../cylinder/cylinder';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  private tabBox: any;
  private tabSphere: any;
  private tabCylinder: any;

  constructor() {
    this.tabBox = BoxPage;
    this.tabSphere = SpherePage;
    this.tabCylinder = CylinderPage;
  }
}
