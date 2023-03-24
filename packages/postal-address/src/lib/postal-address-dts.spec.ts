
import * as S from "@effect/schema/Schema";
import * as PR from "@effect/schema/ParseResult"

import { decode as decodeAddress } from './postal-address';
import { PostalAddress as PostalAddressDTS } from 'schema-dts'

describe('PostalAddressDTS', () => {
  it('construct with all fields', () => {
    // A mailing address
    const pa:PostalAddressDTS = {
      "@type": "PostalAddress",           // type literal
      "@id":"urn:relate:location:32",     // IRI (internationalized URI) identifying the canonical address of this object. 
      additionalType:"Residential",       // An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
      addressCountry:"GB",                // The two-letter ISO 3166-1 alpha-2 country code. (deviation)
      addressLocality:"Cambridgeshrire",  // The locality in which the street address is, and which is in the region. For example, Mountain View
      addressRegion:"East Anglia",        // The region in which the locality is, and which is in the country. For example, California or another appropriate first-level Administrative division.
      postOfficeBoxNumber:"",             // The post office box number for PO box addresses.
      postalCode:"CB2 9BE",               // The postal code. For example, "CB2 9BE"
      streetAddress:"110 Hobson Ave"      // The street address
    }
    expect(pa.additionalType).toEqual("Residential");
  });

});
