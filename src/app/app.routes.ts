import { Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservaleComponent } from './observale/observale.component';
import { ListComponent } from './observale/list/list.component';
import { FromEventComponent } from './observale/from-event/from-event.component';
import { IntervalComponent } from './observale/interval/interval.component';
import { OfFromComponent } from './observale/of-from/of-from.component';
import { ToArrayComponent } from './observale/to-array/to-array.component';
import { CustomComponent } from './observale/custom/custom.component';

export const routes: Routes = [
    {path: 'promise', component: PromiseComponent},
    {path: 'observable', component: ObservaleComponent, children: [
        {path: '', component: ListComponent},
        {path: 'fromEvent', component: FromEventComponent},
        {path: 'interval', component: IntervalComponent},
        {path: 'of-from', component: OfFromComponent},
        {path: 'to-array', component: ToArrayComponent},
        {path: 'custom', component: CustomComponent}
    ]},
    {path: '**', redirectTo: '/promise', pathMatch: 'full'}
];
