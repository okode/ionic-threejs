import { Component, Input, ElementRef } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'scenegraph',
  template: '<div style="width:100%; height:100%"></div>'
})
export class SceneGraph {

  @Input()
  geometry: string;

  renderer: THREE.Renderer;
  scene: THREE.Scene;
  camera: THREE.Camera;
  mesh: THREE.Mesh;
  animating: boolean;

  constructor(private sceneGraphElement: ElementRef) {
  }

  ngAfterViewInit() {
    this.scene = new THREE.Scene();
 
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;
 
    let geometry;
    switch(this.geometry) {
      case 'box': geometry = new THREE.BoxGeometry(500, 500, 500); break;
      case 'cylinder': geometry = new THREE.CylinderGeometry(200, 200, 600); break;
      default:
      case 'sphere': geometry = new THREE.SphereGeometry(400);
    }

    let material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
 
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);
 
    this.renderer = new THREE.WebGLRenderer();
    this.sceneGraphElement.nativeElement.childNodes[0].appendChild(this.renderer.domElement);
  }

  startAnimation() {
    let width = this.sceneGraphElement.nativeElement.childNodes[0].clientWidth;
    let height = this.sceneGraphElement.nativeElement.childNodes[0].clientHeight;
    this.renderer.setSize(width, height);
    this.animating = true;
    this.render();
  }

  stopAnimation() {
    this.animating = false;
  }

  render() {
    this.mesh.rotation.x += 0.05;
    this.mesh.rotation.y += 0.05;
    this.renderer.render(this.scene, this.camera);
    if (this.animating) { requestAnimationFrame(() => { this.render() }); };
  }
  
}
