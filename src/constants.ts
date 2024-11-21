export const EXP_NAV_OPTIONS = {
  WORK: "work",
  EDUCATION: "education",
} as const;

export type EXP_NAV_TYPE =
  (typeof EXP_NAV_OPTIONS)[keyof typeof EXP_NAV_OPTIONS];

export const hCaptchaSiteKey = "660e64f8-580c-4044-bbf8-de36b50876bc";
export const formSparkFormId = "dmODIpTiR";