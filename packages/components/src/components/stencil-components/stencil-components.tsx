import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'stencil-components',
  styleUrl: 'stencil-components.pcss',
  shadow: true
})
export class StencilComponents {
  render() {
    return (
      <Host>
        <fieldset>
          <legend>External Mixin</legend>
          <mixin-external mixin-text="Example Text" />
        </fieldset>
        <fieldset>
          <legend>Local Mixin</legend>
          <mixin-local mixin-local-text="Example Text" />
        </fieldset>
        <fieldset>
          <legend>Mixin in External Component</legend>
          <example-with-mixin text="Hello from prop!" mixinText="Hello from mixin!" />
        </fieldset>
        <test-component></test-component>
      </Host>
    );
  }
}
