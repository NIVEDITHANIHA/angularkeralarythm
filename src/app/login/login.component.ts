import { Component ,OnInit  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  loginClick(){
    this.router.navigate(["/nav/dashboard"])
  }
  setItem(){
    localStorage.setItem( 'id:1' , 'niveditha')
    localStorage.setItem( 'id:2' , 'athira')
  }
  getItem(){
  alert(localStorage.getItem("id:1"));
  }
  clear(){
    localStorage.clear();
  }


}
