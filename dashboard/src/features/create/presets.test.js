import { test, expect } from 'vitest';
import { PRESETS } from '../../lib/uiOptions';
import { captureOpts } from './presets';

test('gaming preset provides gaming-specific highlight instructions', () => {
  const gaming = PRESETS.find((preset) => preset.id === 'gaming');
  expect(gaming).toBeDefined();
  expect(gaming.title).toBe('Gaming highlights');
  expect(gaming.opts.detect).toBe(true);
  expect(gaming.opts.aspect).toBe('9:16');
  expect(gaming.opts.instructions).toContain('clutch wins');
  expect(gaming.opts.instructions).toContain('Do not invent game titles');
});

test('saved presets retain their AI instructions', () => {
  const instructions = 'Prioritize clean clutch plays and authentic reactions.';
  expect(captureOpts({ instructions })).toEqual({ instructions });
});
