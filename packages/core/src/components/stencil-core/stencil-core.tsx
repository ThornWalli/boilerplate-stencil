import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'stencil-core',
  styleUrl: 'stencil-core.pcss',
  shadow: true
})
export class StencilCore {
  render() {
    return (
      <Host>
        {/* <base-ckeditor />
        <my-component
          first="Stencil"
          middle="'Don't call me a framework'"
          last="JS"></my-component> */}
        <example-with-mixin text="Hello from prop!" mixinText="Hello from mixin!" />
        <hr />
        <example-with-pkg-mixin text="Hello from prop!" mixinText="Hello from mixin!"></example-with-pkg-mixin>
      </Host>
    );
  }
}
