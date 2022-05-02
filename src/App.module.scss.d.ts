import globalClassNames, { ClassNames as GlobalClassNames } from "./style.d";
declare const classNames: typeof globalClassNames & {
  readonly googleapis: "googleapis";
  readonly "com/css2?family=Montserrat": "com/css2?family=Montserrat";
};
export default classNames;
export type ClassNames =
  | "googleapis"
  | "com/css2?family=Montserrat"
  | GlobalClassNames;
