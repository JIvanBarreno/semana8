import { Component, Input, OnInit, inject } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Puppy } from '../../../models/puppydata.model';
import { ShareDataService } from '../../servises/share-data.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  puppyData: Puppy [] = [];
  displayedColumns: string[] = ['name', 'type'];
  dataSource = new MatTableDataSource(this.puppyData);
  private puppyService = inject(ShareDataService);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.puppyService.currentPuppy.subscribe(pp => {
      this.puppyData.push(pp);
      this.dataSource = new MatTableDataSource(this.puppyData);
      //console.log("from my table component " + pp.getName());
    });
}
}
