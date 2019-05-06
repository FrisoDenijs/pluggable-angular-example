import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginBComponent } from './plugin-b.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'plugin-b', component: PluginBComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [PluginBComponent],
  entryComponents: [PluginBComponent],
  providers: [{
     provide: 'plugins',
     useValue: [{
       name: 'plugin-b-component',
       component: PluginBComponent
     }],
     multi: true
   }]
})
export class PluginAModule { }