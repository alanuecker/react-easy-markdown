// @flow

export const cleanTemplate = (string: string) => {
  const lines = string.split('\n');
  let minIndent = 0;

  // get min number of indentations
  lines.forEach(l => {
    const m = l.match(/^(\s+)\S+/);
    if (m) {
      const indent = m[1].length;
      if (!minIndent) minIndent = indent;
      else minIndent = Math.min(minIndent, indent);
    }
  });

  // create string for regex
  let whiteSpace = '';
  for (let i = 0; i < minIndent; i += 1) {
    whiteSpace += '\\s';
  }

  // remove white space and join strings
  const result = lines.map(l => l.replace(new RegExp(whiteSpace, 'g'), '')).join('\n');
  // replace specific strings and clean up
  return result
    .trim()
    .replace(/-code-/g, '```')
    .replace(/\\`/g, '`')
    .replace(/\\\$/g, '$');
};
