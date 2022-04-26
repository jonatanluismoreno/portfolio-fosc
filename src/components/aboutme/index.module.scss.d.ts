import globalClassNames, { ClassNames as GlobalClassNames } from "....style.d";
declare const classNames: typeof globalClassNames & {
  readonly aboutme: "aboutme";
  readonly aboutme__title: "aboutme__title";
  readonly aboutme__textcontainer: "aboutme__textcontainer";
  readonly aboutme__description: "aboutme__description";
  readonly aboutme__line: "aboutme__line";
};
export default classNames;
export type ClassNames =
  | "aboutme"
  | "aboutme__title"
  | "aboutme__textcontainer"
  | "aboutme__description"
  | "aboutme__line"
  | GlobalClassNames;
