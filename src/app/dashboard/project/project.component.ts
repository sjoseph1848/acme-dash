import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  project = {};

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.projectSelected.subscribe(project => (this.project = project));
  }
}
