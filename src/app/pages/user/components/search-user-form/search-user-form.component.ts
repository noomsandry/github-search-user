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
  public resetBtn = false;
  @Output() onSubmit = new EventEmitter();
  @Output() onReset = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  search($event){
    $event.preventDefault();
    this.submited = true;
    if(this.login.valid){
      this.onSubmit.emit(this.login.value);
      this.login.disable();
      this.resetBtn = true;
    }
  }

  reset($event){
    $event.preventDefault();
    this.login.enable();
    this.login.setValue('');
    this.onReset.emit();
    this.submited = false;
    this.resetBtn = false;
  }
}
