import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-user-form',
  templateUrl: './search-user-form.component.html',
  styleUrls: ['./search-user-form.component.scss']
})
export class SearchUserFormComponent implements OnInit {
  public username: FormControl = new FormControl('', Validators.required);
  public submited: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  search($event){
    this.submited = true;
    console.log(this.username.value);
    $event.preventDefault();
  }

}
