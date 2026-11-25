// Content for the /profile page. Edit this file to update it.

export const ABOUT = [
  "I'm Diego Mora, a Software Engineering student at Universidad Peruana de Ciencias Aplicadas (UPC), in Lima, Peru.",
  'What hooks me most is understanding how software works at the lowest level: opening a binary in a disassembler, following execution in a debugger and reconstructing the original logic. That curiosity runs through everything I focus on: reverse engineering, game hacking, malware development and Windows internals, which I sharpen mostly by playing CTFs.',
  'I also write some backend code in TypeScript when a project calls for it, but low-level security research is where I spend most of my time.',
];

export const INTERESTS = [
  { title: 'Reverse engineering', text: 'Static and dynamic analysis of binaries, disassembly and recovering program logic.' },
  { title: 'Game hacking', text: 'Game memory, anti-cheat internals and how game clients can be analyzed and modified.' },
  { title: 'Malware development', text: 'Offensive tooling and techniques (loaders, injection, evasion) studied in isolated labs.' },
  { title: 'Windows internals', text: 'Processes, the PE format, the Win32/NT API and how Windows works under the hood.' },
  { title: 'Binary exploitation', text: 'Stack/heap overflows, ROP, format strings and modern mitigations.' },
  { title: 'CTFs', text: 'Competing, learning and documenting reversing and pwn writeups.' },
];

export const SKILLS = {
  reversing: {
    title: 'Reversing & security',
    groups: [
      { label: 'Tools', items: ['Ghidra', 'IDA Free', 'x64dbg', 'WinDbg', 'GDB + pwndbg', 'Cheat Engine'] },
      { label: 'Windows / malware', items: ['PE format', 'Win32 / NT API', 'process injection', 'System Informer', 'Detect It Easy'] },
      { label: 'Languages', items: ['C', 'C++', 'x86/x64 assembly', 'Python'] },
      { label: 'Pwn', items: ['pwntools', 'ROPgadget', 'checksec', 'one_gadget'] },
      { label: 'Concepts', items: ['ELF / PE', 'calling conventions', 'ASLR / NX / PIE / canaries'] },
    ],
  },
  backend: {
    title: 'Backend (secondary)',
    groups: [
      { label: 'Stack', items: ['TypeScript', 'Node.js', 'Express', 'Prisma'] },
      { label: 'Tools', items: ['PostgreSQL', 'Git', 'Docker', 'Linux'] },
    ],
  },
} as const;

// Replace these projects with your own (the link can point to a repo or a post).
export const PROJECTS = [
  {
    name: 'crackmes-writeups',
    description: 'A collection of solutions to crackmes and reversing challenges, with analysis notes and scripts.',
    tags: ['reversing', 'python', 'ghidra'],
    href: 'https://github.com/billyelcalvo',
  },
  {
    name: 'win-internals-notes',
    description: 'Notes and small PoCs while learning Windows internals: processes, PE loading and the NT API.',
    tags: ['windows', 'c', 'malware-dev'],
    href: 'https://github.com/billyelcalvo',
  },
  {
    name: 'ctf-toolkit',
    description: 'pwntools templates, GDB helpers and scripts I reuse in every CTF.',
    tags: ['pwn', 'python', 'bash'],
    href: 'https://github.com/billyelcalvo',
  },
];
