import globalClassNames, { ClassNames as GlobalClassNames } from "....style.d";
declare const classNames: typeof globalClassNames & {
  readonly button__small: "button__small";
  readonly button__large: "button__large";
};
export default classNames;
export type ClassNames = "button__small" | "button__large" | GlobalClassNames;
