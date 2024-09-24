import { newSpecPage } from '@stencil/core/testing';
import { SiyeViewer } from '../siye-viewer';

describe('siye-viewer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SiyeViewer],
      html: `<siye-viewer></siye-viewer>`,
    });
    expect(page.root).toEqualHtml(`
      <siye-viewer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </siye-viewer>
    `);
  });
});
