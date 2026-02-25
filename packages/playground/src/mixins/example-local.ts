import type { MixedInCtor } from '@stencil/core';
import { Prop } from '@stencil/core';

export const exampleLocaleFactory = <B extends MixedInCtor>(Base: B) => {
  class Extend extends Base {
    @Prop() mixinLocalText?: string;
  }
  return Extend;
};
