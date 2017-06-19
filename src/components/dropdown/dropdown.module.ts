import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {PopupModule} from '../popup/popup.module';
import {DropdownGroupComponent} from './dropdown-group.component';
import {DropdownItemComponent} from './dropdown-item.component';
import {DropdownHeaderComponent} from './dropdown-header.component';
import {DropdownIconComponent} from './dropdown-icon.component';
import {AnimationModule} from '../animation/animation.module';
import {ArcylicModule} from '../acrylic/arcylic.module';
import {RippleModule} from '../ripple/ripple.module';

@NgModule({
  imports: [
    BrowserModule,
    PopupModule,
    AnimationModule,
    ArcylicModule,
    RippleModule,
  ],
  declarations: [
    DropdownComponent,

    DropdownGroupComponent,
    DropdownItemComponent,
    DropdownHeaderComponent,
    DropdownIconComponent,
  ],
  exports: [
    DropdownComponent,
    DropdownGroupComponent,
    DropdownItemComponent,
    DropdownHeaderComponent,
    DropdownIconComponent,
  ],
  providers: [],
})
export class DropdownModule {
}
