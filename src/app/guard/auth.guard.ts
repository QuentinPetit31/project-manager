import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

export const AuthGuard = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (!userService.getUser()) {
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
// se servir de ça pour naviguer vers une route
// router.navigateByUrl('/toto');
// creer composant détail-proj après brancher a une route projet/:name
// dans mon composant route.snapshot -> récupérer name
// taper dans l'url project/toto voir si la récupération se fait (voir console log)
// me faut une méthode qui permet de le trouver dans la liste du projet-service
// for if name correspond go else affcher unknow projet (afficher ça sur page détail)
// h1 detail projet titre personnes ect dans html
// une fois que la page detail fonctionne correctement
// sur le tableau la ligne doit rediriger la page detail
// capter clic pour rediriger , capter name (voir alert)
// bosser sur le create-project
// créer composant create-update-project
// le brancher a la route project/create
// faire comme le enroll en mobile a l'horizontal
// et sur le pc comme la version pc de enroll
// tableau vide pour personne
//  nom1, nom2, nom3, nom4 element du tableau a voir plus tard

//  Quand tu fais un route avec
// :nomDuParam
// Tu peux récup le nomDuParam dans le compo ts avec
// Dans le constructeur:
// private route : ActivatedRoute
// Et dans le conducteur:
// const id = this.route.snapshot.params['nomDuParam'];
// }

// j'aimerasi faire en sorte de pouvoir cliquer sur une ligne de mon tableau pour
// que ça me redirige vers detail-project qui correspond à cette page

// create composant create updrate project le brancher a la route
// formulaire
// arriver a l'afficher s'inspirer du enroll dans route ** a la fin
