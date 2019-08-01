import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from '@test-app-environments/environment';

import { AppModule } from './app/app.module';

const isProduction = environment.production;

if (isProduction) enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
