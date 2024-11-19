export const EXP_NAV_OPTIONS = {
  WORK: "work",
  EDUCATION: "education",
} as const;

export type EXP_NAV_TYPE =
  (typeof EXP_NAV_OPTIONS)[keyof typeof EXP_NAV_OPTIONS];

export const API_KEY = "6655c3ef-0359-4c86-93ea-2ebfd37a0fbe";