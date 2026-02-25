import { Component, h, Host, Mixin } from '@stencil/core';

import { exampleLocaleFactory } from '../../mixins/example-local';

@Component({
  tag: 'mixin-local',
  styleUrl: 'mixin-local.pcss',
  shadow: true
})
export class MixinLocal extends Mixin(exampleLocaleFactory) {
  render() {
    return <Host>Mixin Prop (mixinLocalText): {this.mixinLocalText}</Host>;
  }
}
