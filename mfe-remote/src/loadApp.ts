import 'zone.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ExternalModule } from './app/external/external.module';

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

export { mount, mountExt };
