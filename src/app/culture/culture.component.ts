import { Component ,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})




export class CultureComponent {
   Array:any = new Array();

  constructor(private router: Router ) { }

  data: any = [
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
 onSubmit(){
  this.router.navigate(['/nav/view'])
  console.log('data passed')
 }
 ngOnInit(){

  this.Array =this.data


 }

}
