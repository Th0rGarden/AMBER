export type { Theme } from './types';

export { terminal } from './terminal';
export { phosphor } from './phosphor';
export { darkroom } from './darkroom';
export { blueprint } from './blueprint';
export { parchment } from './parchment';
export { void_ } from './void';

import { terminal } from './terminal';
import { phosphor } from './phosphor';
import { darkroom } from './darkroom';
import { blueprint } from './blueprint';
import { parchment } from './parchment';
import { void_ } from './void';
import type { Theme } from './types';

export const themes: Theme[] = [
  terminal,
  phosphor,
  darkroom,
  blueprint,
  parchment,
  void_,
];

export const defaultTheme = terminal;
