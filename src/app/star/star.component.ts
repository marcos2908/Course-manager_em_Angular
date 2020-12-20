import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: "app-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})

export class StarComponent implements OnChanges {
    @Input()
    rating: number = 0;

    starWidth: number;

    ngOnChanges(): void {
        //Cálculo do font awesome para esconder as estrelas restantes (94 ou 74)
        this.starWidth = this.rating * 74 / 5;
    }
}