export const EXP_NAV_OPTIONS = {
  WORK: "work",
  EDUCATION: "education",
} as const;

export type EXP_NAV_TYPE =
  (typeof EXP_NAV_OPTIONS)[keyof typeof EXP_NAV_OPTIONS];

export const hCaptchaSiteKey = "6c7b6d9c-0c2c-4a9c-9c2d-4c9c2d4c9c2d";
export const formSparkFormId = "dmODIpTiR";