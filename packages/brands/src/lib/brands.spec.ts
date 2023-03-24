import { LabelSet, labelSetArray } from './brands';

describe('LabelSet', () => {
  it('can be one label', () => {
    const l = LabelSet("Eigh")
    const ls = labelSetArray(l);
    expect(l).toEqual('Eigh');
    expect(ls).toHaveLength(1);
  });
  it('can be multiple labels', () => {
    const l = LabelSet("Eigh:Bee:Sea")
    const ls = labelSetArray(l);
    expect(l).toEqual('Eigh:Bee:Sea');
    expect(ls).toHaveLength(3);
  });

});
