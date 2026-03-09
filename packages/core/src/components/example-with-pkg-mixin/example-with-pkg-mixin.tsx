// eslint-disable-next-line import-x/order
import { Component, h, Host, Mixin, Prop } from '@stencil/core';

import { exampleFactory } from '@boilerplate-stencil/utilities/mixins/example';

@Component({
  tag: 'example-with-pkg-mixin',
  styleUrl: 'example-with-pkg-mixin.pcss'
})
export class ExampleWithPkgMixin extends Mixin(exampleFactory) {
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
