//Esta configuracion es asi cuando no se utiliza Standalone

//(módulos tradicionales y componentes no standalone)

  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Bootstrap de la aplicación usando AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
