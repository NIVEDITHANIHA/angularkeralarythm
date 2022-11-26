import { Component, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
export interface PeriodicElement {
  name: string;
  position: number;
  popular: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Kannur', popular: 'Theyyam', symbol: 'kannur' },
  {
    position: 2,
    name: 'Kozhikode',
    popular: 'Mappilapattu',
    symbol: 'kozhilode',
  },
  {
    position: 3,
    name: 'Thiruvanthapurm',
    popular: 'Temple',
    symbol: 'thiruvanthapuram',
  },
  { position: 4, name: 'Thrissur', popular: 'Theyyam', symbol: 'thrissur' },
  {
    position: 10,
    name: 'Alapuzha',
    popular: 'vellamkalli',
    symbol: 'alapuzha',
  },
  { position: 5, name: 'Kollam', popular: 'Theyyam', symbol: 'kolam' },
  { position: 6, name: 'PalaKkad', popular: 'kathakali', symbol: 'palakad' },
  { position: 7, name: 'Malapuram', popular: 'Theyyam', symbol: 'malapuram' },
  { position: 8, name: 'Kottayam', popular: 'Theyyam', symbol: 'kottayam' },
  { position: 9, name: 'Ernakulam', popular: 'Theyyam', symbol: 'ernakulam' },
  { position: 11, name: 'Wayanad', popular: 'Theyyam', symbol: 'wayanad' },
  {
    position: 12,
    name: 'Pathnamthitta',
    popular: 'Theyyam',
    symbol: 'pathanamthita',
  },
  { position: 13, name: 'Idukki', popular: 'Theyyam', symbol: 'idukki' },
  { position: 14, name: 'Kasarkode', popular: 'Theyyam', symbol: 'kasarkode' },
];
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  displayedColumns: string[] = ['position', 'name', 'popular', 'symbol'];
  dataSource = ELEMENT_DATA;

}
