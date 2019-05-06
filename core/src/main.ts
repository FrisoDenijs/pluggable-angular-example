import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare const SystemJS: any;

import * as angularCore from '@angular/core';
import * as angularCommon from '@angular/common';
import * as angularRouter from '@angular/router';
import * as angularPlatformBrowser from '@angular/platform-browser';

SystemJS.set('@angular/core', SystemJS.newModule(angularCore));
SystemJS.set('@angular/common', SystemJS.newModule(angularCommon));
SystemJS.set('@angular/router', SystemJS.newModule(angularRouter));
SystemJS.set('@angular/platform-browser', SystemJS.newModule(angularPlatformBrowser));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
