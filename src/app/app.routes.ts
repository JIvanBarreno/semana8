import { Routes } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormsComponent } from './components/forms/forms.component';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';

export const routes: Routes = [
    { path: 'myapp', component: CardComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'table', component: TableComponent }
];
