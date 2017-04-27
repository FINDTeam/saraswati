import { Component, OnInit } from '@angular/core';
import { ClassService } from "app/services/class.service";
import { Klass } from "app/models/class";
import { Router } from "@angular/router";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  private classes: any[]=[];
  constructor(private classService: ClassService,
  private router: Router) { }

  ngOnInit() {
    this.classService.getClasses()
      .subscribe(classes => {
        this.classes = classes;
      },
      error => {
        console.log(error);
        //this.notificationService.error('Server Error', error);
      });
  }

  onAdd() {
    this.router.navigate(['/classes/new']);
  }

  onEdit(klass: Klass) {
    this.router.navigate(['/classes', klass.id]);
  }

  onDelete(klass: Klass) {
    if (confirm("Are you sure you want to delete " + klass.name + "?")) {
      var index = this.classes.indexOf(klass);
      this.classes.splice(index, 1);

      this.classService.deleteClass(klass.id)
        .subscribe(null,
        err => {
          alert("Could not delete car make.");
          // Revert the view back to its original state
          this.classes.splice(index, 0, klass);
        });
    }
  }

}
