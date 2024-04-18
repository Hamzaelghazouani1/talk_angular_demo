import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComponentComponent } from './components/component/component.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { ToowayDataBindingComponent } from './components/tooway-data-binding/tooway-data-binding.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'component', component: ComponentComponent},
    {path:'dataBinding', children:[
        {path:'', component: DataBindingComponent},
        {path:'propertyBinding', component: PropertyBindingComponent},
        {path:'eventBinding', component: EventBindingComponent},
        {path:'toowayDataBinding', component: ToowayDataBindingComponent},
    ]},
    {path:'pipe', component: PipeComponent},
    {path:'directive', component: DirectiveComponent},
    {path:'workflow', component: ControlFlowComponent},
    {path:'**', component: HomeComponent}
];
