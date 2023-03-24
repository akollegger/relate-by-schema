
import { make as makePerson } from '@relate-by/schema-person'
import { make as makeAddress } from '@relate-by/schema-postal-address';
import { IRI, LabelSet, ISO3166 } from '@relate-by/schema-brands';
import { makeHomeAddress, prettyHomeAddress } from './to-address'

describe('HomeAddress', () => {
  it('should work', () => {
    const person = makePerson({
      "@id": IRI("urn:relate:person:1234"),
      additionalName: '',
      additionalType: LabelSet(""),
      name: 'Delia'
    })
    const address = makeAddress({
      '@id': IRI("urn:relate:location:1234"),
      additionalType: LabelSet(""), // ABKTODO: optional, or have a emptyLabels() constuctor?
      addressCountry: ISO3166("GB"),
      addressLocality: 'Cambridge',
      addressRegion: 'East Anglia',
      postOfficeBoxNumber: '', // ABKTODO: this should be optional
      postalCode: '',
      streetAddress: ''
    })
    const personLivesAtAddress = makeHomeAddress(person, address, LabelSet("SUMMERTIME"))
    // console.log(prettyHomeAddress(personLivesAtAddress));
    expect(personLivesAtAddress.from.name).toEqual("Delia");
    expect(personLivesAtAddress.to.addressLocality).toEqual('Cambridge');

  });
});
