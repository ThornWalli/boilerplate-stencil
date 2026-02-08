import {Component, h, Host} from '@stencil/core';

@Component({
    tag: 'stencil-playground',
    styleUrl: 'stencil-playground.pcss',
    shadow: true,
})
export class StencilPlayground {
    render() {
        return <Host>
            <base-ckeditor/>
            <my-component first="Stencil" middle="'Don't call me a framework'" last="JS"></my-component>
        </Host>;
    }
}
