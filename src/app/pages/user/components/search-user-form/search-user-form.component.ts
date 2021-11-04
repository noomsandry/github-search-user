import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-user-form',
  templateUrl: './search-user-form.component.html',
  styleUrls: ['./search-user-form.component.scss']
})
export class SearchUserFormComponent implements OnInit {
  username: FormControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

  search($event){
    console.log(this.username.value);
    $event.preventDefault();
  }

}
