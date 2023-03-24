import { pipe } from '@effect/data/Function';
import * as S from '@effect/schema/Schema';
import * as AST from "@effect/schema/AST";
import * as O from "@effect/data/Option";

import { LabelSet } from '@relate-by/schema-brands';


export const relationship = <From extends S.Schema<any, any>, Type extends S.Schema<any,any>, To extends S.Schema<any,any>>(from: From, type: Type, to: To) => S.struct({
  '@type': type,
  additionalType: LabelSet,   // Additional label set, colon separated: `LIVES_AT`, `KNOWS`, `ATTENDED`
  from,                       // Source of the relationship
  to                          // Target of the relationship
})

