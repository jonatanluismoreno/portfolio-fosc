import globalClassNames, { ClassNames as GlobalClassNames } from "....style.d";
declare const classNames: typeof globalClassNames & {
  readonly footer: "footer";
  readonly footer__socialmedia__container: "footer__socialmedia__container";
  readonly footer__socialmedia: "footer__socialmedia";
  readonly footer__socialmedia__image: "footer__socialmedia__image";
  readonly footer__socialmedia__title: "footer__socialmedia__title";
  readonly footer__links: "footer__links";
  readonly footer__link: "footer__link";
  readonly footer__title: "footer__title";
};
export default classNames;
export type ClassNames =
  | "footer"
  | "footer__socialmedia__container"
  | "footer__socialmedia"
  | "footer__socialmedia__image"
  | "footer__socialmedia__title"
  | "footer__links"
  | "footer__link"
  | "footer__title"
  | GlobalClassNames;
