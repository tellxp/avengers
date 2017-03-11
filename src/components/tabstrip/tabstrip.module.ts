import {NgModule} from '@angular/core';

import {Tabstrip} from './tabstrip.component';
import {TabstripPanel} from './tabstrip-panel.component';
import {TabstripTab} from './tabstrip-tab.component';
import {BrowserModule} from '@angular/platform-browser';
import {TabstripBar} from './tabstrip-bar.component';
import {TabstripPage} from './tabstrip-page.component';
import {TabstripToggle} from './tabstrip-toggle.component';
import {TabstripAddon} from './tabstrip-addon.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    Tabstrip,
    TabstripBar,
    TabstripTab,
    TabstripPanel,
    TabstripPage,
    TabstripToggle,
    TabstripAddon
  ],
  exports: [
    Tabstrip,
    TabstripBar,
    TabstripTab,
    TabstripPanel,
    TabstripPage,
    TabstripToggle,
    TabstripAddon
  ],
  providers: []
})
export class TabstripModule { }
