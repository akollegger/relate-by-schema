import * as fc from "fast-check";
import { pipe } from "@effect/data/Function";
import * as Option from "@effect/data/Option";
import * as A from "@effect/schema/Arbitrary";
import * as S from "@effect/schema/Schema";
import * as AST from "@effect/schema/AST";

import { LabelSet, labelSetArray } from './brands';

const TypicalAnnotationId = "@relate-by/schema/brands/TypicalAnnotationId"

export const Surname = pipe(
  S.string,
  S.brand("Surname"),
  S.annotations({
    [TypicalAnnotationId]: (): A.Arbitrary<string> => (fc) => fc.constantFrom("A","B","C"),
  })
)
export type Surname = S.To<typeof Surname>

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

describe("Surname", () => {
  const getTypical = AST.getAnnotation<
        (...args: ReadonlyArray<A.Arbitrary<any>>) => A.Arbitrary<any>
      >(TypicalAnnotationId)

  it("annotations", () => {
    const samples = pipe(
      getTypical(Surname.ast),
      Option.map( lazyArb => lazyArb()),
      Option.map( arb => fc.sample(arb(fc), 5))
    )
    expect(Option.isSome(samples)).toBeTruthy()
    if (Option.isSome(samples)) {
      console.log(Option.getOrNull(samples))
    }
  })
  it("arbitrary", () => {
    const arbitrarySurname = A.from(Surname)
    const samples = fc.sample(arbitrarySurname(fc), 5);
    console.log(samples);
  })

})

describe("UUID", () => {
  it("arbitrary", () => {
    const arbitraryUUID = A.from(S.UUID)
    const samples = fc.sample(arbitraryUUID(fc), 5);
    console.log(samples);
  })
})