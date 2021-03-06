import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Note } from '../../model/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @ViewChild(MatSort) protected sort: MatSort;
  @ViewChild(MatPaginator) protected paginator: MatPaginator;
  @Input() protected notes: Note[];
  protected dataSource: MatTableDataSource<Note>;
  protected displayedColumns: string[] = ['id', 'title', 'date'];

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
