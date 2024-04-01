import { Component, OnInit } from "@angular/core";
import { HeroService } from "../../../core/services/hero.service";
import { ActivatedRoute } from "@angular/router";
import { Hero } from "../../../core/models/hero";
import { Location } from "@angular/common";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero!: Hero;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.get();
    }

    get() {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.heroService
        .get(id)
        .subscribe((hero) => (this.hero = hero));
    }

    goBack() {
      this.location.back();
    }

    salvar() {
      this.heroService
        .updateHero(this.hero)
        .subscribe(() => this.goBack());
    }

    isFormValid(): boolean {
      return !! this.hero.name.trim();
    }

}
