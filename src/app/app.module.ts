import { NgModule} from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavVarComponent } from './components/nav-var/nav-var.component';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { AccordionTemplate } from './components/home/child/accordion/accordion.component';
import { CardComponent } from './components/home/child/card/card.component';
import { InfoComplementComponent } from './components/home/child/info-complement/info-complement.component';
import { DialogModule } from 'primeng/dialog';
import { HammerModule, BrowserModule} from '@angular/platform-browser';
import { CarouselComponent } from './components/home/child/carousel/carousel.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AutoFocusModule } from 'primeng/autofocus';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { UploadComponent } from './components/upload/upload.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SublevelMenuComponent } from './components/nav-var/sublevel-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/calendario/modal/modal.component';
import { CopasoComponent } from './components/home/child/copaso/copaso.component';
import { ImageModule } from 'primeng/image';
import { InformacionComponent } from './components/home/child/informacion/informacion.component';
import { MatInputModule } from '@angular/material/input';
import { FieldsetModule } from 'primeng/fieldset';
import { TabViewModule } from 'primeng/tabview';
import { CocolaComponent } from './components/home/child/cocola/cocola.component';
import { BrigadaComponent } from './components/home/child/brigada/brigada.component';

@NgModule({

  declarations: [
    AppComponent,
    NavVarComponent,
    BodyComponent,
    HomeComponent,
    LoginComponent,
    SolicitudesComponent,
    CalendarioComponent,
    AccordionTemplate,
    CardComponent,
    InfoComplementComponent,
    CarouselComponent,
    UploadComponent,
    SublevelMenuComponent,
    ModalComponent,
    CopasoComponent,
    InformacionComponent,
    CocolaComponent,
    BrigadaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    AccordionModule,
    DialogModule,
    HammerModule,
    FullCalendarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    DropdownModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    AutoFocusModule,
    FontAwesomeModule,
    InputTextModule,
    CalendarModule,
    MatProgressBarModule,
    NgbModule,
    DatePipe,
    ImageModule,
    FieldsetModule,
    TabViewModule
  ],

  providers: [ 
            Validators, 
  ],
            
  bootstrap: [AppComponent]
})
export class AppModule { }
