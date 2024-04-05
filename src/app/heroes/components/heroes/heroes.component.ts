import { Hero } from './../../../core/models/hero';
import { HeroService } from '../../../core/services/hero.service';
import { Component, OnInit } from '@angular/core';
import { DialogData } from '../../../core/models/dialog-data.model';
import { ConfirmationDialogComponent } from '../../../core/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'actions'];
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    // subscribe -> quero ser noticado das mudaças da lista
    this.heroService.getAll().subscribe((heroes) =>
      (this.heroes = heroes));
  }

  delete(hero: Hero) {
    const dialogData: DialogData = {
      cancelText: 'Cancelar',
      confirmText: 'Excluir',
      context: `Excluir [${hero.name}]?`
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: dialogData,
      width: '300px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.heroService.delete(hero).subscribe(() =>
        // this.heroes = this.heroes.filter((h) => h !== hero)
        this.getAll());
      }
    })
  }
}
