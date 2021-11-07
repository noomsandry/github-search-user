import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-user-form',
  templateUrl: './search-user-form.component.html',
  styleUrls: ['./search-user-form.component.scss']
})
export class SearchUserFormComponent implements OnInit {
  public login: FormControl = new FormControl('', Validators.required);
  public submited: boolean = false;

  @Output() onSubmit = new EventEmitter();
  @Output() onReset = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  search($event){
    this.submited = true;
    $event.preventDefault();
    if(this.login.valid){
      this.onSubmit.emit(this.login.value);
    }
  }

  reset($event){
    this.login.setValue('');
    this.submited = false;
    $event.preventDefault();
    this.onReset.emit();
  }
}
