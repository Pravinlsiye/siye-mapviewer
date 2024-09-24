import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'siye-viewer',
  styleUrl: 'siye-viewer.css',
  shadow: true,
})
export class SiyeViewer {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
