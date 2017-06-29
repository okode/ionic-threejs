import { ViewChild, Component } from '@angular/core';
import { SceneGraph } from '../../components/scenegraph/scenegraph'

@Component({
  templateUrl: 'box.html'
})
export class BoxPage {

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
