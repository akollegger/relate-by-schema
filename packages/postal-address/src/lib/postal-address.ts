import { pipe } from "@effect/data/Function";
import * as S from "@effect/schema/Schema";
import { LabelSet, IRI, ISO3166 } from "@relate-by/schema-brands";
import { Thing } from "@relate-by/schema-thing"


export const PostalAddressProperties = S.struct({
  "@type": S.literal("PostalAddress"),
  addressCountry: ISO3166,      // The two-letter ISO 3166-1 alpha-2 country code. (deviation)
  addressLocality:S.string,     // The locality in which the street address is, and which is in the region. For example, Cambridge
  addressRegion:S.string,       // The region in which the locality is, and which is in the country. For example, California or another appropriate first-level Administrative division.
  postOfficeBoxNumber:S.optional(S.string), // The post office box number for PO box addresses. ABKTODO: this should be an XOR with streetAddress
  postalCode:S.string,          // The postal code. For example, "CB2 9BE"
  streetAddress:S.string        // The street address
});

export const PostalAddress = pipe(
  Thing,
  S.extend(PostalAddressProperties)
)

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PostalAddress extends S.To<typeof PostalAddress> {}

/** Decode from unknown input. */
export const decode = S.decodeEither(PostalAddress);

/** Constructor. */
export const make = (input:Omit<PostalAddress, "@type">):PostalAddress => ({
  "@type": "PostalAddress",
  ...input
})