import { pipe } from "@effect/data/Function";
import { Arbitrary, ArbitraryHookId } from "@effect/schema/Arbitrary";
import * as S from "@effect/schema/Schema";

/** A colon separated set of labels. */
export const LabelSet = pipe(S.string, S.brand("LabelSet"))
export type LabelSet = S.To<typeof LabelSet>;
export const labelSetArray = (l:LabelSet) => l.split(":")

/** An international character set URI. */
export const IRI = pipe(S.string, S.brand("IRI"))
export type IRI = S.To<typeof IRI>;

/** A URL string. */
export const UrlString = pipe(S.string, S.brand("UrlString"))
export type UrlString = S.To<typeof UrlString>;

/** ISO-3166 Country Code */
export const ISO3166 = pipe(S.string, S.brand("Iso3166"))
export type ISO3166 = S.To<typeof ISO3166>;
