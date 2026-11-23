export interface LineItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  qty: number;
  monogram: string;
  gradient: [string, string];
}

export interface PromoResult {
  valid: boolean;
  code: string;
  discountAmount: number;
  freeShipping: boolean;
  label: string;
  error?: string;
}

export interface CartTotals {
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
}

export interface CatalogProduct {
  id: string;
  name: string;
  category: string;
  material: string;
  price: number;
  monogram: string;
  gradient: [string, string];
  inStock: boolean;
  rating: number;
  edition?: string;
}

export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export function evaluatePromoCode(rawCode: string, subtotal: number): PromoResult {
  const code = rawCode.trim().toUpperCase();
  if (!code) {
    return {
      valid: false,
      code: '',
      discountAmount: 0,
      freeShipping: false,
      label: '',
      error: 'Enter a promo code to apply.',
    };
  }

  if (code === 'WARM15' || code === 'ATELIER15') {
    const discountAmount = Math.round(subtotal * 0.15 * 100) / 100;
    return {
      valid: true,
      code,
      discountAmount,
      freeShipping: false,
      label: '15% off order',
    };
  }

  if (code === 'SAVE20') {
    const discountAmount = Math.min(subtotal, 20);
    return {
      valid: true,
      code,
      discountAmount,
      freeShipping: false,
      label: '$20 off order',
    };
  }

  if (code === 'SHIPFREE') {
    return {
      valid: true,
      code,
      discountAmount: 0,
      freeShipping: true,
      label: 'Complimentary shipping',
    };
  }

  return {
    valid: false,
    code,
    discountAmount: 0,
    freeShipping: false,
    label: '',
    error: `Code "${code}" is not recognized. Try WARM15, SAVE20, or SHIPFREE.`,
  };
}

export function calculateCartTotals(
  items: Pick<LineItem, 'price' | 'qty'>[],
  shippingBase: number,
  promo: PromoResult | null,
  taxRate = 0.08
): CartTotals {
  const subtotal = Math.round(items.reduce((sum, item) => sum + item.price * item.qty, 0) * 100) / 100;
  if (subtotal === 0) {
    return { subtotal: 0, discount: 0, shipping: 0, tax: 0, total: 0 };
  }
  const discount = promo?.valid
    ? Math.min(subtotal, promo.code === 'WARM15' || promo.code === 'ATELIER15' ? Math.round(subtotal * 0.15 * 100) / 100 : promo.discountAmount)
    : 0;
  const shipping = promo?.valid && promo.freeShipping ? 0 : shippingBase;
  const taxable = Math.max(0, subtotal - discount);
  const tax = Math.round(taxable * taxRate * 100) / 100;
  const total = Math.round((taxable + shipping + tax) * 100) / 100;

  return { subtotal, discount, shipping, tax, total };
}

export function formatCardNumber(input: string): string {
  const digits = input.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(.{4})/g, '$1 ').trim();
}

export function detectCardBrand(cardNumber: string): 'Visa' | 'Mastercard' | 'Amex' | 'Card' {
  const digits = cardNumber.replace(/\D/g, '');
  if (digits.startsWith('4')) return 'Visa';
  if (/^5[1-5]/.test(digits) || /^2[2-7]/.test(digits)) return 'Mastercard';
  if (/^3[47]/.test(digits)) return 'Amex';
  return 'Card';
}

export function validateShippingFields(fields: {
  fullName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
}): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!fields.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (fields.address.trim().length < 5) errors.address = 'Street address is required.';
  if (!fields.city.trim()) errors.city = 'City is required.';
  if (fields.postalCode.trim().length < 3) errors.postalCode = 'Postal code is required.';
  return errors;
}

export function validateCardFields(fields: {
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
}): Record<string, string> {
  const errors: Record<string, string> = {};
  const digits = fields.cardNumber.replace(/\D/g, '');
  if (!fields.cardName.trim()) errors.cardName = 'Name on card is required.';
  if (digits.length < 15) errors.cardNumber = 'Enter a valid 15–16 digit card number.';
  if (!/^(0[1-9]|1[0-2])\s?\/\s?\d{2}$/.test(fields.expiry.trim())) {
    errors.expiry = 'Use MM/YY format.';
  }
  if (!/^\d{3,4}$/.test(fields.cvc.trim())) errors.cvc = 'Enter 3 or 4 digit CVC.';
  return errors;
}

export function filterAndSortProducts(
  products: CatalogProduct[],
  opts: {
    categories: string[];
    materials: string[];
    maxPrice: number;
    inStockOnly: boolean;
    sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating';
  }
): CatalogProduct[] {
  const filtered = products.filter((p) => {
    if (opts.categories.length > 0 && !opts.categories.includes(p.category)) return false;
    if (opts.materials.length > 0 && !opts.materials.includes(p.material)) return false;
    if (p.price > opts.maxPrice) return false;
    if (opts.inStockOnly && !p.inStock) return false;
    return true;
  });

  const sorted = [...filtered];
  if (opts.sortBy === 'price-asc') sorted.sort((a, b) => a.price - b.price);
  else if (opts.sortBy === 'price-desc') sorted.sort((a, b) => b.price - a.price);
  else if (opts.sortBy === 'rating') sorted.sort((a, b) => b.rating - a.rating);
  return sorted;
}
