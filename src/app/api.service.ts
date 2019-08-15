import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {
  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  private selectedProject = new Subject<any>();
  projectSelected = this.selectedProject.asObservable();

  constructor(private http: HttpClient) {}

  getQuestions(projectId) {
    return this.http.get(`http://localhost:60928/api/questions/${projectId}`);
  }

  getProjects() {
    return this.http.get('http://localhost:60928/api/projects');
  }

  postQuestion(question) {
    this.http
      .post('http://localhost:60928/api/questions', question)
      .subscribe(res => {
        console.log(res);
      });
  }

  putQuestion(question) {
    this.http
      .put(`http://localhost:60928/api/questions/${question.id}`, question)
      .subscribe(res => {
        console.log(res);
      });
  }

  postProject(project) {
    this.http
      .post('http://localhost:60928/api/projects', project)
      .subscribe(res => {
        console.log(res);
      });
  }

  putProject(project) {
    this.http
      .put(`http://localhost:60928/api/quizzes/${project.id}`, project)
      .subscribe(res => {
        console.log(res);
      });
  }

  selectQuestion(question) {
    this.selectedQuestion.next(question);
  }

  selectProject(project) {
    this.selectedProject.next(project);
  }
}
