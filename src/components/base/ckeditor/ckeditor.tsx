import type { EventEmitter } from '@stencil/core';
import { Component, Element, Event, Prop } from '@stencil/core';
import type { ClassicEditor, EditorConfig } from 'ckeditor5';

@Component({
  tag: 'base-ckeditor',
  styleUrl: './ckeditor.pcss',
  scoped: false
})
export class HelperCKEditor {
  @Element() host!: HTMLElement;

  @Prop() config: EditorConfig = {};

  async componentWillLoad() {
    await this.setup();
  }

  @Event() editor: EventEmitter<ClassicEditor>;

  async setup() {
    const { ClassicEditor, Essentials, Bold, Italic, Font, Paragraph } =
      await this.loadCkEditor();

    const editor = await ClassicEditor.create(this.host, {
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

    this.editor.emit(editor);
  }

  async loadCkEditor() {
    const { ClassicEditor, Essentials, Bold, Italic, Font, Paragraph } =
      await import('ckeditor5');

    return {
      ClassicEditor,
      Essentials,
      Bold,
      Italic,
      Font,
      Paragraph
    };
  }
}
