import { Component, h, Mixin, Prop } from '@stencil/core';
import { exampleFactory } from '@boilerplate-stencil/utilities/mixins/example';

@Component({
  tag: 'base-button',
  styleUrl: 'button.pcss',
  scoped: true
})
export class BaseButton extends Mixin(exampleFactory) {
  @Prop() label: string = 'Click me';
  render() {
    return <button>{this.label}</button>;
  }
}
