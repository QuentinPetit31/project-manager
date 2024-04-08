# Angular
## How To
### Project
#### Generate a project

```console
ng new project-name
```
### Component
#### Generate a component

```console
ng genere component component-name

OR

ng g c component-name
```

### Use it

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'kamino-not-found',
  templateUrl: './not-found.component.html',
  standalone: true,
  imports: []
})
export class NotFoundComponent {
  variableOfComponent: string;
  variablesOfComponent: string[];


  constructor(){  }

  ngOnInit(){
    this.functionOfComponent();
  }

  functionOfComponent(){
    return 'bla bla'
  }
}

```


### Service
#### Generate a Service

```console
ng generate service service-name

OR

ng g s service-name
```

### Use it

#### service-name.service.ts
```typescript
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MeService {
  constructor() {}

 functionOfService(){
    return 'bla bla'
  }

```

#### component-name.component.ts
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'kamino-not-found',
  templateUrl: './not-found.component.html',
  standalone: true,
  imports: []
})
export class NotFoundComponent {
  variableOfComponent: string;
  variablesOfComponent: string[];

  constructor(private meService: MeService){  }

  ngOnInit(){
    this.meService.functionOfService();
  }

}

```















