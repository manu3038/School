import { NgModule } from '@angular/core';

import { SchoolSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SchoolSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SchoolSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SchoolSharedCommonModule {}
