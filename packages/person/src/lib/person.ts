import { pipe } from "@effect/data/Function";
import * as S from "@effect/schema/Schema";
import * as A from "@effect/schema/Arbitrary";

import { Thing } from "@relate-by/schema-thing"

export const PersonProperties = S.struct({
  "@type": S.literal("Person"),
  additionalName: S.string,    // An additional name for a Person, can be used for a middle name
  name: S.string,
})

export const Person = pipe(
  Thing,
  S.extend(PersonProperties)
)

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Person extends S.To<typeof Person> {}

/** Decode from unknown input. */
export const decode = S.decodeEither(Person);

/** Constructor. */
export const make = (input:Omit<Person, "@type">):Person => ({
  "@type": "Person",
  ...input
})

export const arbitrary = A.to(Person)