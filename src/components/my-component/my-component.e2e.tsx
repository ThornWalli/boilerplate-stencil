import { render, h } from '@stencil/vitest';
import { describe, it, expect } from 'vitest';

describe('my-component', () => {
  it('renders', async () => {

    const { root } = await render(<my-component first='John' middle='Doe' last='Smith'></my-component>);

    // Check shadow DOM content
    const shadowSpan = root.shadowRoot?.querySelector('span');
    expect(shadowSpan).toBeTruthy();
    expect(shadowSpan?.innerText).toContain("Hello, World! I'm John Doe Smith");
   

  });

});
