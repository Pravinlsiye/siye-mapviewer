import { newE2EPage } from '@stencil/core/testing';

describe('siye-viewer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<siye-viewer></siye-viewer>');

    const element = await page.find('siye-viewer');
    expect(element).toHaveClass('hydrated');
  });
});
