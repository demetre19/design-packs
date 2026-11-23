export function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed);
}

export function isValidUrl(value: string, requireHttps = false): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  try {
    const parsed = new URL(trimmed);
    if (requireHttps) {
      return parsed.protocol === 'https:';
    }
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

export function isValidSlug(value: string): boolean {
  const trimmed = value.trim();
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(trimmed) && trimmed.length >= 3 && trimmed.length <= 40;
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

export function isValidPostalCode(value: string, country: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  switch (country) {
    case 'US':
      return /^\d{5}(?:-\d{4})?$/.test(trimmed);
    case 'CA':
      return /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(trimmed);
    case 'UK':
      return /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s?\d[A-Za-z]{2}$/.test(trimmed);
    default:
      return trimmed.length >= 3 && trimmed.length <= 12;
  }
}

export function validateNumberRange(
  minRaw: string,
  maxRaw: string,
  options: { minAllowed?: number; maxAllowed?: number; label?: string } = {}
): { minError?: string; maxError?: string } {
  const { minAllowed = 0, maxAllowed = Number.MAX_SAFE_INTEGER, label = 'Value' } = options;
  const errors: { minError?: string; maxError?: string } = {};

  const hasMin = minRaw.trim() !== '';
  const hasMax = maxRaw.trim() !== '';
  const minVal = hasMin ? Number(minRaw) : undefined;
  const maxVal = hasMax ? Number(maxRaw) : undefined;

  if (minVal !== undefined && (Number.isNaN(minVal) || minVal < minAllowed || minVal > maxAllowed)) {
    errors.minError = `${label} min must be between ${minAllowed} and ${maxAllowed}.`;
  }
  if (maxVal !== undefined && (Number.isNaN(maxVal) || maxVal < minAllowed || maxVal > maxAllowed)) {
    errors.maxError = `${label} max must be between ${minAllowed} and ${maxAllowed}.`;
  }
  if (
    minVal !== undefined &&
    maxVal !== undefined &&
    !errors.minError &&
    !errors.maxError &&
    minVal > maxVal
  ) {
    errors.maxError = `Maximum must be greater than or equal to minimum (${minVal}).`;
  }

  return errors;
}

export function isDateOnOrAfter(dateStr: string, referenceDateStr: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  return dateStr >= referenceDateStr;
}

export function validateDateTimeWindow(
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string
): { valid: boolean; durationMinutes: number; error?: string } {
  if (!startDate || !startTime || !endDate || !endTime) {
    return { valid: false, durationMinutes: 0, error: 'All start and end date/time fields are required.' };
  }
  const startMs = Date.parse(`${startDate}T${startTime}:00`);
  const endMs = Date.parse(`${endDate}T${endTime}:00`);
  if (Number.isNaN(startMs) || Number.isNaN(endMs)) {
    return { valid: false, durationMinutes: 0, error: 'Please enter valid date and time values.' };
  }
  const diffMinutes = Math.round((endMs - startMs) / 60000);
  if (diffMinutes <= 0) {
    return { valid: false, durationMinutes: 0, error: 'End date & time must be strictly after start date & time.' };
  }
  return { valid: true, durationMinutes: diffMinutes };
}

export interface FileCheckInput {
  name: string;
  size: number;
}

export function validateFileCandidate(
  file: FileCheckInput,
  allowedExtensions: string[],
  maxBytes: number
): string | null {
  const lower = file.name.toLowerCase();
  const hasAllowedExt = allowedExtensions.some((ext) => lower.endsWith(ext.toLowerCase()));
  if (!hasAllowedExt) {
    return `"${file.name}" has an unsupported format. Allowed: ${allowedExtensions.join(', ')}.`;
  }
  if (file.size <= 0) {
    return `"${file.name}" appears to be empty.`;
  }
  if (file.size > maxBytes) {
    return `"${file.name}" exceeds the ${formatFileSize(maxBytes)} limit.`;
  }
  return null;
}

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export interface SuggestionItem {
  id: string;
  title: string;
  category: string;
  description: string;
}

export function filterSuggestions(
  items: SuggestionItem[],
  query: string,
  categoryFilter = 'All'
): SuggestionItem[] {
  const q = query.trim().toLowerCase();
  return items.filter((item) => {
    const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;
    if (!matchesCategory) return false;
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  });
}
