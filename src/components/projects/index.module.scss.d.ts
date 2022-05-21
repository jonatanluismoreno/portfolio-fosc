import globalClassNames, {
  ClassNames as GlobalClassNames,
} from "./../../style";
declare const classNames: typeof globalClassNames & {
  readonly projects: "projects";
  readonly projects__title: "projects__title";
  readonly projects__container: "projects__container";
  readonly projects__buttoncontainer: "projects__buttoncontainer";
  readonly projects__button: "projects__button";
  readonly project: "project";
  readonly project__image: "project__image";
  readonly project__bottoncontainer: "project__bottoncontainer";
  readonly project__title: "project__title";
  readonly project__technologies: "project__technologies";
  readonly project__tech: "project__tech";
  readonly project__description: "project__description";
};
export default classNames;
export type ClassNames =
  | "projects"
  | "projects__title"
  | "projects__container"
  | "projects__buttoncontainer"
  | "projects__button"
  | "project"
  | "project__image"
  | "project__bottoncontainer"
  | "project__title"
  | "project__technologies"
  | "project__tech"
  | "project__description"
  | GlobalClassNames;
