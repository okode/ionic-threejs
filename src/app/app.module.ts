import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SceneGraph } from '../components/scenegraph/scenegraph';
import { BoxPage } from '../pages/box/box';
import { CylinderPage } from '../pages/cylinder/cylinder';
import { SpherePage } from '../pages/sphere/sphere';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    BoxPage,
    CylinderPage,
    SpherePage,
    TabsPage,
    SceneGraph
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BoxPage,
    CylinderPage,
    SpherePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
