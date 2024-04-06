import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { ExternalModule } from './app/external/external.module';
import { StandaloneComponent } from './app/standalone/standalone.component';

const mount = () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
};

const mountExt = () => {
  platformBrowserDynamic()
    .bootstrapModule(ExternalModule)
    .catch((err) => console.error(err));
};

const mountStandalone = async ({myvari}: any) => {
  var a =await bootstrapApplication(StandaloneComponent);
  (a.components[0].instance as StandaloneComponent).myvari = myvari;
  (a.components[0].instance as StandaloneComponent).cdRef.detectChanges();
  return (a.components[0].instance as StandaloneComponent);
};

export { mount, mountExt, mountStandalone };
