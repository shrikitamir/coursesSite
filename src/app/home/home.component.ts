import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  helloTitle = 'Some colored text';
  currentLesson = null;
  courseLessons = null;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.courseLessons = this.lessonsService.all();
  }

  selectLesson(lesson) {
    this.currentLesson = lesson;
  }
}
