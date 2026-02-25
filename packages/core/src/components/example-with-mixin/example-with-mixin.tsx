import { Component, h, Host, Mixin, Prop } from '@stencil/core';

import { exampleFactory } from '../../mixins/example';

@Component({
  tag: 'example-with-mixin',
  styleUrl: 'example-with-mixin.pcss'
})
export class ExampleWithMixin extends Mixin(exampleFactory) {
  @Prop() text: string = 'Default Text';

  render() {
    return (
      <Host>
        Default Prop (text): {this.text}
        <br />
        Mixin Prop (mixinText): {this.mixinText}
      </Host>
    );
  }
}
