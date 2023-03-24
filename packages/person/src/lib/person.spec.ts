import * as fc from "fast-check";

import * as PR from "@effect/schema/ParseResult"

import { make as makePerson, decode as decodePerson, Person, arbitrary as arbitraryPerson } from './person';
import { LabelSet, IRI, UrlString } from "@relate-by/schema-brands";

describe('Person construction', () => {

  it('make() with complete input', () => {
    const p:Person = makePerson({
      "@id": IRI("urn:relate:person:1234"),
      name: "Delia",
      additionalName: "Diamond",
      additionalType: LabelSet("Dog:Awesome")
    });
    expect(p.name).toBe("Delia");
    expect(p.additionalName).toBe("Diamond");
    expect(p.additionalType).toBe("Dog:Awesome");
  })

  it('decode() fails on null input', () => {
    const result = decodePerson(null);
    expect(PR.isFailure(result)).toBeTruthy()
  });

  it('decode() fails on partial input', () => {
    const result = decodePerson({ "@type":"Person", name: "Delia" });
    expect(PR.isFailure(result)).toBeTruthy()
  });

  it('decode() succeeds with complete, required input', () => {
    const result = decodePerson({
       "@type":"Person", 
       "@id": IRI("urn:relate:person:1234"),
       additionalType: LabelSet("Dog:Awesome"),
       name: "Delia",
       additionalName: "Diamond"
    });
    expect(PR.isSuccess(result)).toBeTruthy()
  });

  it("arbitrary", () => {
    const samples = fc.sample(arbitraryPerson(fc), 5);
    console.log(samples);
  })
});
