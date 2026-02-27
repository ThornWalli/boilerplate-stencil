import type { MixedInCtor } from '@stencil/core';
import { Prop } from '@stencil/core';

export const exampleFactory = <B extends MixedInCtor>(Base: B) => {
  class Extend extends Base {
    @Prop() mixinText?: string;
  }
  return Extend;
};
