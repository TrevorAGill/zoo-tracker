import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { DisplayAnimalsComponent } from './display-animals.component';
import { EditAnimalComponent } from './edit-animal.component';
import { NewAnimalComponent } from './new-animal.component';
import { AgePipe } from './Age.pipe';

@NgModule({
  imports: [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent,
                  DisplayAnimalsComponent,
                  EditAnimalComponent,
                  NewAnimalComponent,
                  AgePipe
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
