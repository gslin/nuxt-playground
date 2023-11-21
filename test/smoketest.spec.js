import { describe, test } from 'vitest';
import { setup, $fetch } from '@nuxt/test-utils';

describe('Smoke test', async () => {
  await setup({
  });

  test('test /', async () => {
    const html = await $fetch('/');
  });
});
