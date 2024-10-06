import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { catchError, map, of } from 'rxjs';
import {AccesoService} from "../services/accesso.service";

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem("token") || "";
  const router = inject(Router);

  const accesoService = inject(AccesoService)
  if(token != ""){
    return true
  }else {
    const url = router.createUrlTree([""])
    return url;
  }

};
