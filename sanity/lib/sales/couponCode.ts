export const COUPON_CODES = {
  BFRIDAY: "BFRIDAY",
  CHRMSSD: "CHRMSSD",
  BFRINY2022: "BFRINY2022",
} as const;

export type couponCode = keyof typeof COUPON_CODES;
