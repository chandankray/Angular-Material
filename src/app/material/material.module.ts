import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';

const MaterialComponents=[
  MatSliderModule,
  MatGridListModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule
];
@NgModule({  
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
