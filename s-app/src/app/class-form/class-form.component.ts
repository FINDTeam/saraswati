import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ClassService } from "app/services/class.service";
import { Klass } from "app/models/class";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.css']
})
export class ClassFormComponent implements OnInit {
  form: FormGroup;
  title: string;
  klass: Klass = new Klass();
  
  constructor(private formBuilder: FormBuilder,
    private classService: ClassService,
    private router: Router,
    private route: ActivatedRoute) {
    this.form = formBuilder.group({
      id: [''],
      name: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Edit' : 'New';

      if (!id)
        return;

      this.classService.getClass(id)
        .subscribe(
        klass => this.form.setValue({ id: klass.id, name: klass.name }),
        error => {
          console.log(error);

          //ToDo: need to correct this
          if (error.status == 404) {
            this.router.navigate(['NotFound']);
          }
        });
    });
  }

  onSave() {
    var result;
    const formModel = this.form.value;
    console.log(formModel);

    const klass: Klass = {
      id: formModel.id,
      name: formModel.name
    };

    if (klass.id) {
      result = this.classService.updateClass(klass);
    } else {
      klass.id = 0;
      result = this.classService.addClass(klass);
    }

    result.subscribe(data => {
      //this.notificationService.success('Success', 'Your changes have been saved successfully');
      this.router.navigate(['/classes']);
    },
      error => {
        console.log(error);
        //this.notificationService.error('Server Error', error);
      });
  }

  onCancel(): void {
    this.router.navigate(['/classes']);
  }
}
