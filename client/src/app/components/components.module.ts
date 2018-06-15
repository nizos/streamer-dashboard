/*
 * @Author: Nizars
 * @Date: 2018-06-12 01:27:17
 * @Last Modified by: Nizars
 * @Last Modified time: 2018-06-15 14:55:18
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// MATERIALIZE
/// FORM CONTROL
import { MzButtonModule } from 'ngx-materialize';
import { MzCheckboxModule } from 'ngx-materialize';
import { MzChipModule } from 'ngx-materialize';
import { MzDatepickerModule } from 'ngx-materialize';
import { MzValidationModule } from 'ngx-materialize';
import { MzInputModule } from 'ngx-materialize';
import { MzRadioButtonModule } from 'ngx-materialize';
import { MzSelectModule } from 'ngx-materialize';
import { MzSwitchModule } from 'ngx-materialize';
import { MzTextareaModule } from 'ngx-materialize';
import { MzTimepickerModule } from 'ngx-materialize';
/// LAYOUT
import { MzCardModule } from 'ngx-materialize';
import { MzCollapsibleModule } from 'ngx-materialize';
import { MzCollectionModule } from 'ngx-materialize';
import { MzDropdownModule } from 'ngx-materialize';
import { MzModalModule } from 'ngx-materialize';
import { MzNavbarModule } from 'ngx-materialize';
import { MzPaginationModule } from 'ngx-materialize';
import { MzParallaxModule } from 'ngx-materialize';
import { MzSidenavModule } from 'ngx-materialize';
import { MzTabModule } from 'ngx-materialize';
/// LOADING
import { MzProgressModule } from 'ngx-materialize';
import { MzSpinnerModule } from 'ngx-materialize';
/// INDICATORS
import { MzBadgeModule } from 'ngx-materialize';
import { MzFeatureDiscoveryModule } from 'ngx-materialize';
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize';
import { MzToastModule } from 'ngx-materialize';
import { MzTooltipModule } from 'ngx-materialize';
/// SERVICES
import { MzMediaModule } from 'ngx-materialize';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,

    // MATERIALIZE
    /// FORM CONTROL
    MzButtonModule,
    MzCheckboxModule,
    MzChipModule,
    MzDatepickerModule,
    MzValidationModule,
    MzInputModule,
    MzRadioButtonModule,
    MzSelectModule,
    MzSwitchModule,
    MzTextareaModule,
    MzTimepickerModule,
    /// LAYOUT
    MzCardModule,
    MzCollapsibleModule,
    MzCollectionModule,
    MzDropdownModule,
    MzModalModule,
    MzNavbarModule,
    MzPaginationModule,
    MzParallaxModule,
    MzSidenavModule,
    MzTabModule,
    /// LOADING
    MzProgressModule,
    MzSpinnerModule,
    /// INDICATORS
    MzBadgeModule,
    MzFeatureDiscoveryModule,
    MzIconModule,
    MzIconMdiModule,
    MzToastModule,
    MzTooltipModule,
    /// SERVICES
    MzMediaModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule {}
