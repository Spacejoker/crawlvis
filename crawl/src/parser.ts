export interface Run {
  characterName: string;
  race: string;
  class: string;
  title: string;
  turns: string;
}

export function parseRaw(raw:string) {
  let characterName, title, clazz, race, turns;
  for (const line of raw.split('\n')) {
    const matches = line.match(/^(\w+)\sthe\s(\w+)\s\((\w+)\).+Turns:\s(\d+),\sTime:\s(.+)$/);
    if (matches){
      characterName = matches[1];
      title = matches[2];
      race = matches[3].substring(0,2);
      clazz = matches[3].substring(2,4);
      turns = matches[4];
    }
  }
  return {characterName, title, class:clazz, race, turns};
}