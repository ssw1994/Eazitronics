import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxWebsocketModule } from "ngx-websocket";


import { ListingComponent } from "./listing/listing.component";
import { ProfileComponent } from "./profile/profile.component";
import { DeviceContainerComponent } from "./device-container/device-container.component";
import { FilterPipe } from '../libs/pipes';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,NgxWebsocketModule],
  declarations: [ListingComponent,ProfileComponent,DeviceContainerComponent,FilterPipe],
  exports: [ListingComponent,ProfileComponent,DeviceContainerComponent]
})
export class ExploreContainerComponentModule {}
