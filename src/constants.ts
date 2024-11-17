export const EXP_NAV_OPTIONS = {
    WORK: "work",
    EDUCATION: "education"
} as const;

export type EXP_NAV_TYPE = typeof EXP_NAV_OPTIONS[keyof typeof EXP_NAV_OPTIONS];