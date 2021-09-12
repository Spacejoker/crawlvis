export interface Run {
  characterName: string;
}

export function parseRaw(raw:string) {
  let characterName;
  for (const line of raw.split('\n')) {
    const matches = line.match(/^\d+\s(\w+).*level/)
    if (matches){
      characterName = matches[1];
    }
  }
  return {characterName};
}