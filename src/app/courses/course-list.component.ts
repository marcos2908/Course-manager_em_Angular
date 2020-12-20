import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

    @Component({
        selector:'app-course-list',
        templateUrl: './course-list.component.html',
        styleUrls: ['./course-list.component.css']
    })

    export class CourseListComponent implements OnInit {
        courses: Course[] = [];

        ngOnInit(): void{
            this.courses = [
                {
                    id: 1,
                    name: 'Angular Forms',
                    imageUrl: '/assets/images/forms.png',
                    price: 99.99,
                    code: 'XPS-9876',
                    duration: 120,
                    rating: 4.8,
                    releaseDate: 'December, 15, 2020'
                },
                {
                    id: 2,
                    name: '.NET Core',
                    imageUrl: '/assets/images/http.png',
                    price: 99.99,
                    code: 'NET-9876',
                    duration: 120,
                    rating: 4.0,
                    releaseDate: 'December, 20, 2020'
                }
            ]
        }
    }