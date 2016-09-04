import {ViewChild, Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SceneGraph} from '../../components/scenegraph/scenegraph'

@Component({
  templateUrl: 'build/pages/sphere/sphere.html',
    directives: [SceneGraph]
})
export class SpherePage {

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
