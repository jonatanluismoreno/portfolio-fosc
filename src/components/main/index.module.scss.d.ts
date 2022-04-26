import globalClassNames, { ClassNames as GlobalClassNames } from "....style.d";
declare const classNames: typeof globalClassNames & {
  readonly mainsection: "mainsection";
  readonly mainsection__leftSide: "mainsection__leftSide";
  readonly mainsection__subtitle: "mainsection__subtitle";
  readonly mainsection__title: "mainsection__title";
  readonly mainsection__description: "mainsection__description";
};
export default classNames;
export type ClassNames =
  | "mainsection"
  | "mainsection__leftSide"
  | "mainsection__subtitle"
  | "mainsection__title"
  | "mainsection__description"
  | GlobalClassNames;
