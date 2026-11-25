// All site copy lives here.
// main: only confirmed content. dev: full placeholder content.
// A section renders only when its content exists.
// Items marked PLACEHOLDER are not confirmed yet.

export const site = {
  name: 'CJ Meyer',

  // PLACEHOLDER
  hero: {
    headline: "Hi, I'm CJ Meyer, a placeholder headline about what I do and who I do it for",
    cta: { label: 'Start a project with me', href: '#contact' },
    credentials: [
      'Placeholder: years of experience and focus area.',
      'Placeholder: industries, clients, or location.',
    ],
  },

  // PLACEHOLDER
  works: [
    {
      title: 'Project One',
      summary: 'Placeholder summary of the project and the outcome.',
      tags: ['Tag', 'Tag'],
    },
    {
      title: 'Project Two',
      summary: 'Placeholder summary of the project and the outcome.',
      tags: ['Tag', 'Tag'],
    },
    {
      title: 'Project Three',
      summary: 'Placeholder summary of the project and the outcome.',
      tags: ['Tag'],
    },
    {
      title: 'Project Four',
      summary: 'Placeholder summary of the project and the outcome.',
      tags: ['Tag', 'Tag', 'Tag'],
    },
  ],

  // PLACEHOLDER
  story: {
    lead: 'A placeholder line that sums up the story in one or two sentences.',
    paragraphs: [
      'Placeholder paragraph about background, where it started, and what led here.',
      'Placeholder paragraph about how I work, what I care about, and what I am doing now.',
    ],
  },

  // PLACEHOLDER
  contact: {
    headline: "Placeholder: let's build something together",
    label: 'Get in touch',
    href: '#contact',
  },

  // PLACEHOLDER
  links: [
    { label: 'Link one', href: '#' },
    { label: 'Link two', href: '#' },
  ],
};
