// eslint-disable-next-line import-x/order
import { Component, h, Host, Mixin, Prop } from '@stencil/core';

// ✅ Works but is no extern external import
// import { exampleFactory } from '../../../../utilities/src/mixins/example';

// ⚠️ Works with warning Bundling Warning undefined Could not resolve import "#utilities/mixins/example" in
// Alias from relative path
// import { exampleFactory } from '#utilities/mixins/example';

// ❌ Does not work, no props from mixin available
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
