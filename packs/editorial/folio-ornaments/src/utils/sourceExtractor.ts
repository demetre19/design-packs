/**
 * Extracts a single exported `export function OrnN(...) { ... }` block
 * (including its immediately preceding JSDoc comment if present) from a module source string.
 */
export function extractComponentSource(
  moduleSource: string,
  componentName: string
): string {
  const fnPattern = new RegExp(`export function ${componentName}\\b`);
  const fnMatch = fnPattern.exec(moduleSource);
  if (!fnMatch || fnMatch.index === undefined) {
    return `// Source for ${componentName} unavailable`;
  }

  let startIndex = fnMatch.index;

  // Check if there is a JSDoc comment immediately before `export function ...`
  const beforeFn = moduleSource.slice(0, fnMatch.index);
  const trimmedBefore = beforeFn.replace(/[ \t\r\n]+$/, '');
  if (trimmedBefore.endsWith('*/')) {
    const jsdocStart = trimmedBefore.lastIndexOf('/**');
    if (jsdocStart !== -1) {
      startIndex = jsdocStart;
    }
  }

  // Find the parameter list `(...)` and advance past its closing `)`
  const paramsOpen = moduleSource.indexOf('(', fnMatch.index);
  if (paramsOpen === -1) {
    return `// Source for ${componentName} unavailable`;
  }

  let parenDepth = 0;
  let paramsClose = -1;
  for (let i = paramsOpen; i < moduleSource.length; i += 1) {
    const ch = moduleSource[i];
    if (ch === '(') parenDepth += 1;
    else if (ch === ')') {
      parenDepth -= 1;
      if (parenDepth === 0) {
        paramsClose = i;
        break;
      }
    }
  }

  if (paramsClose === -1) {
    return `// Source for ${componentName} unavailable`;
  }

  const openBraceIndex = moduleSource.indexOf('{', paramsClose);
  if (openBraceIndex === -1) {
    return `// Source for ${componentName} unavailable`;
  }

  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let escaped = false;

  for (let i = openBraceIndex; i < moduleSource.length; i += 1) {
    const ch = moduleSource[i];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (ch === '\\') {
      escaped = true;
      continue;
    }

    if (inSingle) {
      if (ch === "'") inSingle = false;
      continue;
    }
    if (inDouble) {
      if (ch === '"') inDouble = false;
      continue;
    }
    if (inTemplate) {
      if (ch === '`') inTemplate = false;
      continue;
    }

    if (ch === "'") {
      inSingle = true;
    } else if (ch === '"') {
      inDouble = true;
    } else if (ch === '`') {
      inTemplate = true;
    } else if (ch === '{') {
      depth += 1;
    } else if (ch === '}') {
      depth -= 1;
      if (depth === 0) {
        return moduleSource.slice(startIndex, i + 1).trim();
      }
    }
  }

  return moduleSource.slice(startIndex).trim();
}
