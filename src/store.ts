import { atom } from "nanostores";

export const isMenuOpen = atom(false);
export const currentRoute = atom<string | null>(null);
