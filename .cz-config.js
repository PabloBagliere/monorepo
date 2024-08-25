module.exports = {
  types: [
    {
      value: '🚀 feat',
      name: '🚀 feat:      A new feature',
    },
    {
      value: '🐛 fix',
      name: '🐛 fix:       A bug fix',
    },
    {
      value: '📝 docs',
      name: '📝 docs:      Documentation only changes',
    },
    {
      value: '👷 ci',
      name: "👷 ci:        CI related changes'",
    },
    {
      value: '💄 style',
      name: '💄 style:     Markup, white-space, formatting, missing semi-colons...',
    },
    {
      value: '♻️ refactor',
      name: '♻️ refactor:  A code change that neither fixes a bug or adds a feature',
    },
    {
      value: '⚡️ perf',
      name: '⚡️ perf:      A code change that improves performance',
    },
    {
      value: '🧪 test',
      name: '🧪 test:      Adding missing tests',
    },
    {
      value: '🔧 chore',
      name: '🔧 chore:     Build process or auxiliary tool changes',
    },
    {
      value: '⏪ revert',
      name: '⏪ revert:    Revert a previous commit',
    },
  ],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 72,
  breaklineChar: '|',
  footerPrefix: 'META:',
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nIn what area are the changes? (optional):',
    customScope: 'Indicates the scope of the changes (optional):',
    subject: 'Write a short, imperative mood description of the change:\n',
    body: "Provides a more detailed context of the change (optional). Use '|' to make line breaks:\n",
    breaking: 'List any breaking changes:\n',
    footer: 'META: Ticket this commit closes, e.g #123456789 (optional):\n',
    confirmCommit:
      'Are you sure you want to continue with the previous commit?',
  },
};
