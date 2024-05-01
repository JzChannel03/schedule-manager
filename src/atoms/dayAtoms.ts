import { atom } from "jotai";
import { getDateNow } from "../utils/dates-functions";
const { dayNow } = getDateNow();
export const selectedDayAtom = atom(dayNow);
