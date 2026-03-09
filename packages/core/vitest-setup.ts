/**
 * Vitest setup for browser environment
 * Extends the base setup and loads Stencil components in the browser
 */

// Load the Stencil components for this project
await import('./dist/boilerplate-stencil-core/boilerplate-stencil-core.esm.js');

export default {};
