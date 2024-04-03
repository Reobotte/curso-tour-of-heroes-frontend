import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Hero } from "../../../core/models/hero";
import { HeroService } from "../../../core/services/hero.service";
import { FormBuilder, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero!: Hero;
  isEditing = false;

  form = this.fb.group({
    id: [{value: 0, disabled: true}],
    name: ['', [
      Validators.required,
      Validators.minLength(3)]]
  });

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }

    ngOnInit(): void {
      this.get();
    }

    get() {
      const paramId = this.route.snapshot.paramMap.get('id');

      if (paramId !== 'new') {
          this.isEditing = true;
          const id = Number(paramId);
          this.heroService
          .get(id)
          .subscribe((hero) => {
            this.hero = hero;
            this.form.controls['id'].setValue(hero.id);
            this.form.controls['name'].setValue(hero.name);
          });
      }
    }

    goBack() {
      this.location.back();
    }

    create() {
      const {valid, value } = this.form;

      if (valid) {
        const hero: Hero = {
          name: value.name!
        } as Hero;

        this.heroService
          .create(hero)
          .subscribe(() => this.goBack());
      }  else {
        this.showErrorMsg();
      }
    }

    update() {
      const {valid, value } = this.form;

      if (valid) {
        const hero: Hero = {
          id: this.hero.id,
          name: value.name!
        }

        this.heroService
          .updateHero(hero)
          .subscribe(() => this.goBack());
      } else {
        this.showErrorMsg();
      }
    }

    private showErrorMsg() {
      this.snackBar.open('Favor checar os erros encontrados!', 'Ok', {
        duration: 5000,
        verticalPosition: 'top'
      });
    }
}
