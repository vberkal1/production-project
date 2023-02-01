type Mods = Record<string, string | boolean>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => value === true)
      .map(([className]) => className),
  ].join(" ");
}
