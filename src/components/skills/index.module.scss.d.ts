import globalClassNames, {
  ClassNames as GlobalClassNames,
} from "./../../style.d";
declare const classNames: typeof globalClassNames & {
  readonly skills: "skills";
  readonly skills__title: "skills__title";
  readonly skills__container: "skills__container";
  readonly skill: "skill";
  readonly skill__image: "skill__image";
  readonly skill__title: "skill__title";
};
export default classNames;
export type ClassNames =
  | "skills"
  | "skills__title"
  | "skills__container"
  | "skill"
  | "skill__image"
  | "skill__title"
  | GlobalClassNames;
