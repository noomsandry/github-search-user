import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-user-form',
  templateUrl: './search-user-form.component.html',
  styleUrls: ['./search-user-form.component.scss']
})
export class SearchUserFormComponent implements OnInit {
  public username: FormControl = new FormControl('', Validators.required);
  public submited: boolean = false;

  @Output() onSubmit = new EventEmitter();
  @Output() onReset = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  search($event){
    this.submited = true;
    $event.preventDefault();
    this.onSubmit.emit(this.username.value);
  }

  reset($event){
    this.username.setValue('');
    this.submited = false;
    $event.preventDefault();
    this.onReset.emit();
  }
}
