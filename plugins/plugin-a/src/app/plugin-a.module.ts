import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginAComponent } from './plugin-a.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'plugin-a', component: PluginAComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [PluginAComponent],
  entryComponents: [PluginAComponent],
  providers: [{
     provide: 'plugins',
     useValue: [{
       name: 'plugin-a-component',
       component: PluginAComponent
     }],
     multi: true
   }]
})
export class PluginAModule { }