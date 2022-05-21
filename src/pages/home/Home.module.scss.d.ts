import globalClassNames, {
  ClassNames as GlobalClassNames,
} from "./../../style";
declare const classNames: typeof globalClassNames & {
  readonly app: "app";
  readonly app__arrowscroll: "app__arrowscroll";
};
export default classNames;
export type ClassNames = "app" | "app__arrowscroll" | GlobalClassNames;
