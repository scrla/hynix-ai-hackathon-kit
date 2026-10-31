export interface Task { id: string; title: string; done: boolean; }
export function normalizeTask(input: string): string { return input.trim().replace(/\s+/g, " ").slice(0, 100); }
