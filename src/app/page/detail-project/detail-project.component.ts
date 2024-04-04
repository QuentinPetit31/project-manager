import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-project',
  standalone: true,
  imports: [],
  templateUrl: './detail-project.component.html',
  styleUrl: './detail-project.component.scss',
})
export class DetailProjectComponent implements OnInit {
  personnes = '';

  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params);
  }
  ngOnInit(): void {
    this.route.snapshot.params;
  }
}
//  Quand tu fais un route avec
// :nomDuParam
// Tu peux récup le nomDuParam dans le compo ts avec
// Dans le constructeur:
// private route : ActivatedRoute
// Et dans le conducteur:
// const id = this.route.snapshot.params['nomDuParam'];

// }
