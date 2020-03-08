import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';

const MaterialComponents=[
  MatSliderModule,
  MatGridListModule
];
@NgModule({  
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
