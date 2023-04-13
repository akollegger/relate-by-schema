import * as S from "@effect/schema/Schema";
import * as AST from "@effect/schema/AST";
import { pipe } from "@effect/data/Function";


import { typical, getTypical } from './typical';

describe('typical', () => {
  it('should work', () => {
    const schema = pipe(
      S.string,
      typical(true)
    )
    expect(getTypical(schema)).toBeTruthy()
  });
});
