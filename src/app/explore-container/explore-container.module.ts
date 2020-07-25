import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingComponent } from "./listing/listing.component";
import { ProfileComponent } from "./profile/profile.component";
@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ListingComponent,ProfileComponent],
  exports: [ListingComponent,ProfileComponent]
})
export class ExploreContainerComponentModule {}
