import { FirstLetterUpperCase } from "./utils";

export const functionValidation = {
    plzEnter: (msg) => `Please enter ${msg}.`,
    minmum: (msg, num) => `${msg} should be at least £${num}.`,
    minmumNum: (msg, num) => `${FirstLetterUpperCase(msg)} should be at least ${num} mm.`,
    clickToImg: msg => `Click to ${msg}.`,
    minmumChar: (msg, num) => `${msg} should be at least ${num} character long.`,
    areYouSure: (msg, subject) => `Are you sure, you want to ${msg} this ${subject}?`,
}