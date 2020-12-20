import { Component, OnInit } from "@angular/core";

import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {
    // O TypeScript ainda não tem os modificadores de acesso, portanto colocamos o '_' para indicar um campo privado
    private _courses: Course[] = [];
    private _filterBy: string;

    public filteredCourses: Course[] = [];
    // Criando o atributo courseService por meio da injeção de dependência.

    constructor(private courseService: CourseService) { };

    ngOnInit(): void {
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses;
    }

    public set filter(value: string) {
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }


    public get filter() {
        return this._filterBy;;
    }

}