import globalClassNames, {
  ClassNames as GlobalClassNames,
} from "./../../style";
declare const classNames: typeof globalClassNames & {
  readonly header: "header";
  readonly header__leftSide: "header__leftSide";
  readonly header__rightSide: "header__rightSide";
  readonly button__noBorder: "button__noBorder";
  readonly button__border: "button__border";
};
export default classNames;
export type ClassNames =
  | "header"
  | "header__leftSide"
  | "header__rightSide"
  | "button__noBorder"
  | "button__border"
  | GlobalClassNames;
