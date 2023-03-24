/* eslint-disable @typescript-eslint/no-empty-interface */

import { pipe } from '@effect/data/Function';
import * as S from '@effect/schema/Schema';
import * as P from "@effect/schema/Pretty";
import * as AST from "@effect/schema/AST";
import * as O from "@effect/data/Option";

import { LabelSet } from '@relate-by/schema-brands';
import { Person } from '@relate-by/schema-person';
import { PostalAddress } from '@relate-by/schema-postal-address';
import { relationship } from '@relate-by/schema-relationship';

/** HomeAddress is a relationship from a Person to a PostalAddress. */
export const HomeAddress = relationship(Person, S.literal('LIVES_AT'), PostalAddress)
export interface HomeAddress extends S.To<typeof HomeAddress> {}
export const decodeHomeAddress = S.decodeEither(HomeAddress);
export const makeHomeAddress = <From extends Person,To extends PostalAddress>(from:From, to:To, labeled:LabelSet):HomeAddress => ({
  "@type": "LIVES_AT",
  additionalType: labeled,
  from,
  to
})
export const prettyHomeAddress = P.to(HomeAddress)
