import { fileURLToPath } from 'node:url';
import { apply as applyFilesystemProvider } from '@deepseek-ai/dsh-skill-filesystem';
export const name = 'mechanical-drawing-workflow';
export const inject = ['skills'];
export function apply(ctx) {
  applyFilesystemProvider(ctx, { providerName: 'mechanical-drawing-workflow', includeDefaultRoots: false, bundledSkillDir: fileURLToPath(new URL('./skills/', import.meta.url)), watch: false });
}
