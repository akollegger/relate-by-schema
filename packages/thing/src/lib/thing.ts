import { pipe } from "@effect/data/Function";
import * as S from "@effect/schema/Schema";
import { LabelSet, IRI, UrlString } from "@relate-by/schema-brands";

export const Thing = S.struct({
  "@id": IRI,                   // IRI (internationalized URI) identifying the canonical address of this object
  additionalType: LabelSet,     // Additional label set, colon separated: `Famous:Pending`
});


