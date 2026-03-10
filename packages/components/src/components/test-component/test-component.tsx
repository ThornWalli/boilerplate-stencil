import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.pcss',
  shadow: true
})
export class TestComponent {
  render() {
    return (
      <Host>
        <base-button label="Base Button from Core" />
      </Host>
    );
  }
}
