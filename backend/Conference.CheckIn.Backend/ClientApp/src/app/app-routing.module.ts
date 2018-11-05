import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealTimeViewer } from './pages/realtime-viewer/realtime-viewer';
import { AttendeeList } from './pages/attendee-list/attendee-list';

const routes: Routes = [
  {path: '', redirectTo: 'live', pathMatch: 'full'},
  {path: 'live', component: RealTimeViewer},
  {path: 'attendees', component: AttendeeList},
  {path: '**', redirectTo: 'live'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
