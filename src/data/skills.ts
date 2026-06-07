export type Level = 'strong' | 'medium';

export const levels: Record<Level, { label: string; badge: string; dot: string }> = {
  strong: {
    label: 'Maîtrisé',
    badge: 'bg-sky-200 text-sky-900',
    dot:   'bg-sky-200',
  },
  medium: {
    label: 'Intermédiaire',
    badge: 'bg-sky-100 text-sky-700',
    dot:   'bg-sky-100',
  },
};

export const skills: { name: string; level: Level }[] = [
  { name: 'PHP', level: 'strong' },
  { name: 'Laravel', level: 'strong' },
  { name: 'Symfony', level: 'strong' },
  { name: 'Java', level: 'strong' },
  { name: 'HTML/CSS', level: 'strong' },
  { name: 'Python', level: 'strong' },
  { name: 'PGSQL/MYSQL', level: 'strong' },
  { name: 'Claude', level: 'strong' },
  { name: 'Codex', level: 'strong' },
  { name: 'MacOS', level: 'strong' },
  { name: 'Git', level: 'strong' },
  { name: 'Bash', level: 'strong' },
  { name: 'Infrastructure', level: 'strong' },
  { name: 'Linux', level: 'strong'  },
  { name: 'Kotlin', level: 'medium'  },
  { name: 'VueJS', level: 'medium'  },
  { name: 'Tailwind CSS', level: 'medium'  },
  { name: 'Go', level: 'medium'  },
  { name: 'Javascript', level: 'medium'  },
  { name: 'C', level: 'medium'  },
  { name: 'C++', level: 'medium'  },
  { name: 'Flutter', level: 'medium'  },
];
