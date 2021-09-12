import {parseRaw} from './parser';
import {NAGA_15_RUNES} from './test_data';

describe('parseRaw', () => {
  it('returns something', () => {
    const p = parseRaw(NAGA_15_RUNES);

    expect(p.characterName).toEqual('cykeltillsalu');
  });
});