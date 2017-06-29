import { ViewChild, Component } from '@angular/core';
import { SceneGraph } from '../../components/scenegraph/scenegraph'

@Component({
  templateUrl: 'sphere.html'
})
export class SpherePage {

  @ViewChild('scenegraph')
  sceneGraph: SceneGraph;

  constructor() {}

  ionViewDidEnter() {
    this.sceneGraph.startAnimation();
  }

  ionViewDidLeave() {
    this.sceneGraph.stopAnimation();
  }

}
