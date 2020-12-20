import { TFunction } from "next-i18next";

export default function (t: TFunction, keys: string[]) {
  var obj: { [key: string]: string } = {};

  for (let key of keys) obj[key] = t(key);

  return obj;
}
