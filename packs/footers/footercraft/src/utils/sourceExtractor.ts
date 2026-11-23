export function extractComponentSource(rawFileContent: string, componentName: string): string {
  const marker = `export function ${componentName}(`;
  const startIndex = rawFileContent.indexOf(marker);
  if (startIndex === -1) {
    return `// Component ${componentName} source not found.`;
  }

  const nextMarkerRegex = /\nexport function Footer\d+\(/g;
  nextMarkerRegex.lastIndex = startIndex + marker.length;
  const nextMatch = nextMarkerRegex.exec(rawFileContent);
  const endIndex = nextMatch ? nextMatch.index : rawFileContent.length;

  const componentBody = rawFileContent.slice(startIndex, endIndex).trim();

  const usesState = componentBody.includes('useState');
  const reactImport = usesState
    ? "import React, { useState } from 'react';"
    : "import React from 'react';";

  return `${reactImport}\n\n${componentBody}\n`;
}
