import type {EventEmitter} from '@stencil/core';
import {Component, Element, Event, Prop} from '@stencil/core';

@Component({
  tag: 'base-ckeditor',
  styleUrl: './ckeditor.pcss',
  scoped: false
})
export class HelperCKEditor {
  @Element() host!: HTMLElement;

  @Prop() config: any = {};

  async componentWillLoad() {
    await this.setup();
  }

  @Event() editor: EventEmitter;

  private editorInstance: any;

  disconnectedCallback() {
    this.editorInstance?.destroy?.();
    this.editorInstance = undefined;
  }

  private async loadCkEditor() {
    return import('ckeditor5');
  }

  async setup() {

    if (this.editorInstance) return;

    const { ClassicEditor, Essentials, Bold, Italic, Font, Paragraph } = await this.loadCkEditor();

    this.editorInstance = await ClassicEditor.create(this.host, {
      ...this.config,
      placeholder: this.config.placeholder ?? 'Inhalt hier bearbeiten...',
      plugins: [Essentials, Bold, Italic, Font, Paragraph],
      toolbar: this.config.toolbar ?? [
        'bold',
        'italic',
        'fontFamily',
        'undo',
        'redo'
      ],
      licenseKey: 'GPL'
    });

    this.editor.emit(this.editorInstance);
  }
}
