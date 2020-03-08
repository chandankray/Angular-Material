import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

const MaterialComponents=[
  MatSliderModule,
  MatGridListModule,
  MatButtonModule
];
@NgModule({  
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
