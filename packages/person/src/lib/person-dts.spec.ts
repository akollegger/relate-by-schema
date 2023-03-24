
import * as S from "@effect/schema/Schema";
import * as PR from "@effect/schema/ParseResult"

import { decode as decodePerson } from './person';
import { Person as PersonDTS } from 'schema-dts'

describe('PersonDTS', () => {
  it('construct with all fields', () => {
    // A person (alive, dead, undead, or fictional).
    const p:PersonDTS = {
      "@type": "Person", // "Patient" or "Person"
      "@id":"urn:relate:delia:1234", // IRI (internationalized URI) identifying the canonical address of this object.
      "additionalName":"Diamond", // An additional name for a Person, can be used for a middle name.
      "additionalType":"Dog",  // An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
      "address":"1609 Lancaster Street, Baltimore MD 21231", // Physical address of the item.
      "affiliation":"", // An organization that this person is affiliated with. For example, a school/university, a club, or a team.
      "name":"Delia", // The name of the person
    }
    expect(p.name).toEqual("Delia");
  });

});
