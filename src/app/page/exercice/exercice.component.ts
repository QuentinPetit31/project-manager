import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-exercice',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './exercice.component.html',
})
export class ExerciceComponent {
  constructor() {
    console.log('coucou exercice');
    this.exercice1to4();
    console.log('--------------------------------');
    this.exercice5();
    console.log('--------------------------------');
    this.exercice6();
    console.log('--------------------------------');
    this.exercice9();
    console.log('--------------------------------');
    this.exercice10();
    console.log('--------------------------------');
    this.exercice11();
    console.log('--------------------------------');
  }

  exercice1to4() {
    const toto = 'tata';

    const nb = 5;

    const tableauDeMot: string[] = ['titi', toto, 'toto'];

    tableauDeMot.push('blabla');

    const tttt = ['too', 'ziiiii', 'patate'];
    console.log(tttt[0]);
    // 'too'

    const motReference = 'ziiiii2';

    let tttContainMotReference = false;
    // je veux verifier, si dans le tableau const tttt on peut retrouver le motReference, si oui return true, si faux return false
    for (let index = 0; index < tttt.length; index++) {
      const element = tttt[index];
      console.log('index = ' + index);
      console.log('element = ' + element);
    }

    console.log('tttContainMotReference  ==> ', tttContainMotReference);

    // need to return ['chiba', 'chat']  "chiba, chat"

    //     Exercice 1 variable :
    // Ecrivez un algorithme qui va interchanger la valeur de 2 variables nb1 et nb2
    let nbr1 = 2;
    let nbr2 = 4;
    let inter = nbr1;
    nbr1 = nbr2;
    nbr2 = inter;
    console.log(nbr1, nbr2);

    /* Exercice 2 : Les tests :
    Ecrire un algorithme qui prend un nombre (variable nbr1) en entrée affiche dans la console si le nombre est positif ou négatif.*/

    if (nbr1 > 0) {
      console.log('positive');
    } else {
      console.log('negative');
    }

    /* Exercice 3 : Les tests :
  Ecrire un algorithme qui prend deux nombres en entrée (variable nbr1 et nbr2) affiche dans la console si la somme des deux nombres 
  (addition) est positive ou négative. */
    function tototo(nbr1: number, nbr2: number) {
      if (nbr1 + nbr2 > 0) {
        console.log('positive');
      } else {
        console.log('negative');
      }
    }
    tototo(nbr1, nbr2);
    tototo(5, 8);
    /*Exercice 4  : Tests :
    Ecrire un algorithme qui demande deux nombres à l’utilisateur et l’informe ensuite si le produit (multiplication) est négatif ou positif 
    (on inclut cette fois le traitement du cas où le produit peut-être nul). Attention toutefois, on ne doit pas calculer le produit ! (multiplication) 
    NB : si on multiplie 2 nombres négatif le résultat est un nombre positif.
    */
    const resultProduit = nbr1 * nbr2;
    if (nbr1 > 0 && nbr2 > 0) {
      console.log('Le produit est positif');
    } else if (nbr1 < 0 && nbr2 < 0) {
      console.log('Le produit est positif');
    } else if (nbr1 === 0 || nbr2 === 0) {
      console.log('Le produit est neutre');
    } else {
      console.log('Le produit est negatif');
    }

    // Exercice 5 :
    // Faire une fonction qui prend en entrée l'age et si -18ans ça retourne mineur sinon 18/30 ans jeune et 30/45 bientôt vieux , +45 vieux.

    function determinerAge(age: number) {
      if (age < 0) {
        return 'negatif';
      } else if (age < 18) {
        return 'Mineur';
      } else if (age < 30) {
        return 'jeune';
      } else if (age < 45) {
        return 'bientôt vieux';
      } else {
        return 'vieux';
      }
    }
    console.log(determinerAge(15) + ' = mineur'); // mineur
    console.log(determinerAge(22) + ' = jeune'); // jeune
    console.log(determinerAge(33) + ' = bientôt vieux'); // bientôt vieux
    console.log(determinerAge(50) + ' = vieux'); // vieux

    //

    // Exercice 7
    // Creer un tabeau de 5 noms
    let prenoms = ['Quentin', 'Thomas', 'Amélie', 'Isabel', 'Oliv'];
    console.log(prenoms);
    // Rajouter un nom dans le tableau
    prenoms.push('Momo');

    console.log('==>', [1, 1, 1].length);
    console.log('==> prenoms.length', prenoms.length);

    console.log('Avec prénom ajouté (momo)+', prenoms);
    // Parcourir le tableau et pour chaque élement tu fait un conslole log qui doit dire bonjour prénom 1 a 3 et au suivants aurevoir
    for (let parcourir = 0; parcourir < prenoms.length; parcourir++) {
      if (parcourir < 3) {
        console.log('bonjour', prenoms[parcourir]);
      } else {
        console.log('aurevoir', prenoms[parcourir]);
      }
    }
    // Supprimer le prenom a l'index 1 et 5
    let prenoms2 = [];
    for (let parcourir = 0; parcourir < prenoms.length; parcourir++) {
      const parcPre = prenoms[parcourir];
      console.log(parcPre);
      if (parcourir !== 1 && parcourir !== 5) {
        prenoms2.push(parcPre);
      }
    }
    prenoms = prenoms2;
    console.log('prenoms after delete item 2 and 6', prenoms);

    //Rajouter Tyla entre Isabel et Amélie
    // [    "Quentin",    "Amélie",    "Isabel",    "Oliv"]
    prenoms2 = [];
    for (let parcourir = 0; parcourir < prenoms.length; parcourir++) {
      const prenom = prenoms[parcourir];
      console.log(prenom);

      // if (parcourir === 2 || prenom === 'Isabel') {
      //   prenoms2.push('Tyla');
      // }

      prenoms2.push(prenom);

      if (parcourir === 1 || prenom === 'Amélie') {
        prenoms2.push('Tyla');
      }
    }
    prenoms = prenoms2;
    console.log('prenoms after added Tyla after Amelie', prenoms);

    // --------------------------------------
    console.log('----------------------------');

    const quentin = {
      age: 28,
      prenom: 'Quentin',
      nom: 'Petit',
      chiens: ['Momo'],
    };

    console.log(
      'Bonjour ' +
        quentin.nom +
        ' ' +
        quentin.prenom +
        ', tu as ' +
        quentin.age +
        ' ans et un chien appelé ' +
        quentin.chiens
    );

    const personnes = [
      quentin,
      { age: 57, prenom: 'Isabel', nom: 'Herrera', chiens: ['jiji'] },
    ];
    personnes.push({
      age: 24,
      prenom: 'Amélie',
      nom: 'Petit',
      chiens: ['tyla', 'jinx'],
    });

    const chiens: string[] = [];

    for (let parcourir = 0; parcourir < personnes.length; parcourir++) {
      let nbChien = 'un chien appelé ';
      // si on a plus de 1 chien alors modifier la valeur de nbChien
      if (personnes[parcourir].chiens.length > 1) {
        nbChien = 'des chiens appelés ';
      }

      const chienDeLePersonne = personnes[parcourir].chiens;

      // for chien
      // console chien 1 par 1
      // push chien
      for (
        let indexChien = 0;
        indexChien < chienDeLePersonne.length;
        indexChien++
      ) {
        console.log(
          'bonjour 1 chien par bonjour ',
          chienDeLePersonne[indexChien]
        );

        chiens.push(chienDeLePersonne[indexChien]);
      }

      console.log('bonjour ', personnes[parcourir].prenom);
      console.log(
        'Bonjour ' +
          personnes[parcourir].nom +
          ' ' +
          personnes[parcourir].prenom +
          ', tu as ' +
          personnes[parcourir].age +
          ' ans et ' +
          nbChien +
          personnes[parcourir].chiens
      );
    }

    console.log('tous les chien de la famille = ', chiens);

    //////// -----------------------
    const mots = ['toto', 'ttt', 'cccc', 'vvvv'];
    const mot = 'toto';
    let contient = false;

    // Est ce que mots contient mot
    for (let indexmot = 0; indexmot < mots.length; indexmot++) {
      if (mots[indexmot] === mot) {
        console.log(mots[indexmot], ' du tableau mots egale a toto');
        contient = true;
      } else {
        console.log(
          mots[indexmot],
          'du tableau mots est different du mot toto'
        );
      }
    }
    console.log('contient = ', contient);

    //////// -----------------------

    function estCeQueLeTableauDeMotsContientCeMot(
      tableauDeMot: string[],
      motCible: string
    ): boolean {
      let contient = false;
      for (let i = 0; i < tableauDeMot.length; i++) {
        if (tableauDeMot[i] === motCible) {
          contient = true;
        }
      }
      return contient;
    }

    console.log(
      'estCeQueLeTableauDeMotsContientCeMot (true) mots = ',
      estCeQueLeTableauDeMotsContientCeMot(mots, mot)
    );

    console.log(
      'estCeQueLeTableauDeMotsContientCeMot (??)  mots = ',
      estCeQueLeTableauDeMotsContientCeMot(prenoms, 'Isabel')
    );

    console.log(
      'estCeQueLeTableauDeMotsContientCeMot (false)  mots = ',
      estCeQueLeTableauDeMotsContientCeMot(['aaaa', 'bbb', 'ccv'], 'Isabel')
    );

    // faire un fonction qui prendtableau en entrée et qui en sort 1 seule en sorti
    // tab1 = ['toto','titi']
    // tab2 = ['coucou','kiki']
    // result = ['toto','titi','coucou','kiki']

    function combineTableau(tab1: string[], tab2: string[]): string[] {
      const resultTab: string[] = [];
      //viens ajouter les élements  par 1 du tab2 dans resulTab
      for (let i = 0; i < tab1.length; i++) {
        const element = tab1[i];
        resultTab.push(element);
      }
      for (let i = 0; i < tab2.length; i++) {
        const element = tab2[i];
        resultTab.push(element);
      }
      return resultTab;
    }

    console.log('combineTableau  mots + chiens', combineTableau(mots, chiens));
    console.log('combineTableau  chiens + mots', combineTableau(chiens, mots));
    console.log(
      'combineTableau  prenoms + chiens',
      combineTableau(prenoms, chiens)
    );
    console.log(
      'combineTableau  mots + prenoms',
      combineTableau(mots, prenoms)
    );
  }
  exercice5() {
    function additionNumber(nb1: number, nb2: number): number {
      return nb1 + nb2;
    }

    console.log('additionNumber  5+5', additionNumber(5, 5));
    console.log('additionNumber  1+2', additionNumber(1, 2));
    console.log('additionNumber  10+50', additionNumber(10, 50));
    console.log('additionNumber  50+50', additionNumber(50, 50));

    function additionTabNumber(tabNbr: number[]): number {
      let resultTab = 0;
      for (let i = 0; i < tabNbr.length; i++) {
        resultTab = additionNumber(tabNbr[i], resultTab);
      }
      return resultTab;
    }

    console.log(
      'additionTabNumber  10+20+30+40',
      additionTabNumber([10, 20, 30, 40])
    );
    //
    // result = 0

    // iteration element = 10
    // result = 10 + result
    // 10 = 10 + 0

    // iteration 2 element = 20
    // result = 20 + result
    // 30 = 20 +10

    // iteration 3 element = 30
    // result = 30 + result
    // 60 = 30 + 30

    // return result
  }

  exercice6() {
    /*     Exercice 6:
    Créer un tableau qui contient 5 élèments, faire un console log du 2ème élément, rajouter en faisant un push un nouvel élement, remplacer 
    le 1er élèment du tableau par une autre valeur.
    Supprimer le 3ème élement du tableau (créer un tableau vide, puis faire une copie du tableau plein dans le tableau vide (la copie) 
    sauf le troisième élement).

    - Parcourir le tableau original
    - Copier les élements originaux du vieux tab dans le nouveau tab sauf le 3ème element (2), utiliser for */

    let tab = ['0', '1', '2', '3', '4', '5'];
    console.log('original tab=', tab);
    // consulter un element du tableau
    console.log('original tab 2eme element=', tab[1]);
    // ajouter un element dans le tableau
    tab.push('6');
    console.log('original tab +6=', tab);
    // modifié l'element 0 du tableau
    tab[0] = '6';
    console.log('remplacement 0 par 6', tab);
    //Supprimer un élement d'un tableau
    let tab2 = [];
    for (let test = 0; test < tab.length; test++) {
      const element = tab[test];
      console.log(element);
      if (test !== 2 && test !== 3) {
        tab2.push(element);
      }
    }
    tab = tab2;
    console.log('tab =', tab);
  }

  exercice9() {
    /*   Exercice 9 Tableau et boucle :
Créer un algorithme qui va ajouter à un tableau users (tableau indexé) :
à chaques tours de la boucle : 
-un utilisateur (user) (tableau associatif)  qui va contenir : 
                -> nom, prénom, age et un numéro de téléphone,
                (les valeurs seront récupérés avec des prompts)
-La boucle va tourner 5 fois,
Afficher dans la console le nom et le prénom de l'utilisateur qui est le plus jeune (tableau users).
Bonus : afficher dans les prompts (le numéro de l'utilisateur que vous ajoutez)  */
    let classement = [];
    const users: { age: number; prenom: string; nom: string; tel: string }[] =
      [];
    for (let i = 0; i < 5; i++) {
      const age = Math.random() * 100;
      const user = {
        age: age,
        prenom: 'prenom' + i,
        nom: 'nom' + i,
        tel: '06',
      };
      users.push(user);
    }
    console.log(users);

    let plusJeune = { ...users[0] };
    for (let i = 0; i < 5; i++) {
      if (users[i].age < plusJeune.age) {
        plusJeune = users[i];
      }
    }

    console.log('le plus jeune à ', plusJeune);
  }

  exercice10() {
    console.log('exercice10');
    // ---------------------------------------------------------
    //Exercise 10: Remplir la const et faire un log de la const
    // Créer un tableau de 6 personnes (prenom age(5,10,20,30,50) budget(10,30,20,5,50))
    const personnesAndBudget = [
      { prenom: 'Quentin', age: 30, budget: 30 },
      { prenom: 'Thomas', age: 40, budget: 50 },
      { prenom: 'Romaric', age: 20, budget: 5 },
      { prenom: 'Victor', age: 50, budget: 20 },
      { prenom: 'Farid', age: 60, budget: 40 },
      { prenom: 'Théo', age: 10, budget: 20 },
      { prenom: 'Maxime', age: 25, budget: 15 },
    ];

    console.log('personnesAndBudget = ', personnesAndBudget);

    // Calculer le budget total
    let totalBudget = 0;
    for (let i = 0; i < personnesAndBudget.length; i++) {
      totalBudget = personnesAndBudget[i].budget + totalBudget;
    }
    console.log(totalBudget);

    // Calculer le budget des personnes mineur
    let mineurTotalBudget = 0;
    for (let i = 0; i < personnesAndBudget.length; i++) {
      if (personnesAndBudget[i].age < 18) {
        mineurTotalBudget = personnesAndBudget[i].budget + mineurTotalBudget;
      }
    }
    console.log(mineurTotalBudget);

    // Calculer le budget des personnes majeur
    let majeurTotalBudget = 0;
    for (let i = 0; i < personnesAndBudget.length; i++) {
      if (personnesAndBudget[i].age >= 18) {
        majeurTotalBudget = personnesAndBudget[i].budget + majeurTotalBudget;
      }
    }
    console.log(majeurTotalBudget);

    // Il faut un minimum de 12 euro de budget pour aller au cinéma, qui peut y aller ? Sortir un tableau de prénom
    function whoCanGoToCinema(
      personnesAndBudget: { prenom: string; budget: number }[]
    ): string[] {
      let canGoToCinema: string[] = [];
      for (let i = 0; i < personnesAndBudget.length; i++) {
        if (personnesAndBudget[i].budget >= 12) {
          canGoToCinema.push(personnesAndBudget[i].prenom);
        }
      }
      return canGoToCinema;
    }

    console.log(
      'peuvent aller au cinema ->',
      whoCanGoToCinema(personnesAndBudget)
    );

    // Il faut un minimum de 20 euro de budget et 18 ans pour aller au strip club, qui peut y aller ? Sortir un tableau de prenom

    function whoCanGoToStripClub(
      personnesAndBudget: { prenom: string; age: number; budget: number }[]
    ): string[] {
      let canGoToStripClub: string[] = [];
      for (let i = 0; i < personnesAndBudget.length; i++) {
        if (
          personnesAndBudget[i].budget >= 20 &&
          personnesAndBudget[i].age >= 18
        ) {
          canGoToStripClub.push(personnesAndBudget[i].prenom);
        }
      }
      return canGoToStripClub;
    }
    console.log(
      'peuvent aller au strip club ->',
      whoCanGoToStripClub(personnesAndBudget)
    );

    // // Il faut un maximum de 20 euro de budget et 18 ans pour recevoir la caf, qui peut y aller ? Sortir un tableau de prenom
    function whoCanGoToCaf(
      personnesAndBudget: { prenom: string; age: number; budget: number }[]
    ): string[] {
      let canGoToCaf: string[] = [];
      for (let i = 0; i < personnesAndBudget.length; i++) {
        if (
          personnesAndBudget[i].budget <= 20 &&
          personnesAndBudget[i].age <= 18
        ) {
          canGoToCaf.push(personnesAndBudget[i].prenom);
        }
      }
      return canGoToCaf;
    }
    console.log(
      'peuvent toucher les aides de la CAF ->',
      whoCanGoToCaf(personnesAndBudget)
    );
  }

  exercice11() {
    // Exercice 11 : Creer un tableau de personne et de droit
    // remplir avec 5 personnes, et voir qui a les droits admin ou d'écriture
    const personnesEtDroits: {
      prenom: string;
      droits: { admin: boolean; lecture: boolean; ecriture: boolean };
    }[] = [
      {
        prenom: 'Quentin',
        droits: { admin: true, lecture: true, ecriture: true },
      },
      {
        prenom: 'Thomas',
        droits: { admin: true, lecture: true, ecriture: true },
      },
      {
        prenom: 'Romaric',
        droits: { admin: false, lecture: true, ecriture: true },
      },

      {
        prenom: 'Victor',
        droits: { admin: false, lecture: true, ecriture: true },
      },

      {
        prenom: 'Farid',
        droits: { admin: false, lecture: true, ecriture: true },
      },
    ];

    // sortir les prénoms des admins
    function whoAreAdmin(
      personnesEtDroits: {
        prenom: string;
        droits: { admin: boolean; lecture: boolean; ecriture: boolean };
      }[]
    ): string[] {
      let adminsNames: string[] = [];
      for (let i = 0; i < personnesEtDroits.length; i++) {
        if (personnesEtDroits[i].droits.admin === true) {
          adminsNames.push(personnesEtDroits[i].prenom);
        }
      }

      return adminsNames;
    }
    console.log(
      'les prénoms des admins sont ->',
      whoAreAdmin(personnesEtDroits)
    );

    //sortir les personnes qui ont le droit d'écriture
    // function whoGotWritePermission(
    //   personnesEtDroit: {
    //     prenom: string;
    //     droits: { admin: boolean; lecture: boolean; ecriture: boolean };
    //   }[]
    // ): string[] {
    //   let whoCanWrite: string[] = [];
    //   for (let i = 0; i < personnesEtDroits.length; i++) {
    //     if (personnesEtDroits[i].droits.ecriture === true) {
    //       whoCanWrite.push(personnesEtDroits[i].prenom);
    //     }
    //   }
    //   return whoCanWrite;
    // }
    // console.log(
    //   "Les personnes bénéficiants des droits d'écritures sont -> ",
    //   whoGotWritePermission(personnesEtDroits)
    // );

    let whoCanWrite: string[] = [];
    for (let i = 0; i < personnesEtDroits.length; i++) {
      if (personnesEtDroits[i].droits.ecriture === true) {
        whoCanWrite.push(personnesEtDroits[i].prenom);
      }
    }
    console.log(
      "Les personnes bénéficiants des droits d'écritures sont -> ",
      whoCanWrite
    );
  }
}
