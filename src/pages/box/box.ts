import { ViewChild, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SceneGraph } from '../../components/scenegraph/scenegraph'

@Component({
  templateUrl: 'box.html'
})
export class BoxPage {

  @ViewChild('scenegraph')
  sceneGraph: SceneGraph;

  constructor(private navCtrl: NavController) {
  }

  ionViewDidEnter() {
    this.sceneGraph.startAnimation();
  }

  ionViewDidLeave() {
    this.sceneGraph.stopAnimation();
  }

}
