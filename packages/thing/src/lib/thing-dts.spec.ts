
import * as S from "@effect/schema/Schema";
import * as PR from "@effect/schema/ParseResult"

import { Thing as ThingDTS } from 'schema-dts'

describe('ThingDTS', () => {
  it('construct with all fields', () => {
    // A thing is any identified item
    const x:ThingDTS = {
      "@type": "Intangible", 
      "@id":"urn:relate:thing:999",  // IRI (internationalized URI) identifying the canonical address of this object.
      "name":"Cthulhu",               // The name of the item
    }
    expect(x.name).toEqual("Cthulhu");
  });

});
