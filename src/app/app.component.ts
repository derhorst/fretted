import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { first, map, skip } from 'rxjs';
@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent { 
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    this.githubPagesRedirect();
  }

  /**
   * Hacky redirect github pages 404 route
   * /?%2Fsettings= becomes /settings
   */
  private githubPagesRedirect() {
    this.activatedRoute.queryParamMap.pipe(skip(1), first()).subscribe((queryParams) => {
      if (queryParams.keys[0].startsWith('')) {
        this.router.navigate([queryParams.keys[0]], { replaceUrl: true });
      }
    });
  }
}
 