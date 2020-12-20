import { Component, OnInit } from "@angular/core";

import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    // Criando o atributo courseService por meio da injeção de dependência.
    constructor(private courseService: CourseService) { };

    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll();
    }
}