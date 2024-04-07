import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Puppy } from '../../../models/puppydata.model';
import { ShareDataService } from '../../servises/share-data.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule, 
    MatIconModule, 
    MatRadioModule, 
    MatDialogModule, 
    ModalComponent,
    ReactiveFormsModule
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  value = '';
  puppyTypeDesc = [
    {type: 1, description: "Perro"},
    {type: 2, description: "Gato"},
    {type: 3, description: "Hamster"},
  ];
  puppyType = new FormControl();
  private puppyService = inject(ShareDataService);
  puppyData: Puppy [] = [];

  constructor(public dialog: MatDialog) {}
  
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: "¿Desea agregar una nueva mascota?",
      enterAnimationDuration,
      exitAnimationDuration
    });

    dialogRef.afterClosed().subscribe(result => {
      /*console.log(`Dialog result: ${result}`);
      console.log(`Name result: ${this.value}`);
      console.log(`Type result: ${this.puppyType.value}`);*/

      if (result) {
        var typeDes = this.puppyTypeDesc[this.puppyType.value - 1].description
        var newPuppy = new Puppy(this.value, typeDes);
        this.puppyData.push(newPuppy);
        this.puppyService.changePuppy(newPuppy);
      } else {
        console.log("Mascota no fue agregada.");
      }
    });
  }
}
