import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  project = {};
  projects;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getProjects().subscribe(res => {
      this.projects = res;
    });
  }
}
