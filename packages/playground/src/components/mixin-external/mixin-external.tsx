import { Component, h, Host, Mixin } from '@stencil/core';
import { exampleFactory } from '@boilerplate-stencil/core/collection/mixins/example';

@Component({
  tag: 'mixin-external',
  styleUrl: 'mixin-external.pcss',
  shadow: true
})
export class MixinExternal extends Mixin(exampleFactory) {
  render() {
    return <Host>Mixin Prop (mixinText): {this.mixinText}</Host>;
  }
}
