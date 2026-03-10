import { Component } from '@angular/core';
// eslint-disable-next-line import-x/no-unresolved
import { ExampleWithMixin } from 'core-library';
// eslint-disable-next-line import-x/no-unresolved
import { MixinExternal, TestComponent } from 'component-library';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [ExampleWithMixin, MixinExternal, TestComponent]
})
export class HomeComponent {
  // Add your component logic here

  onClick() {
    alert('test');
  }
}
