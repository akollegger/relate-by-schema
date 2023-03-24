/* eslint-disable @typescript-eslint/no-empty-interface */
import * as S from '@effect/schema/Schema';
import * as P from "@effect/schema/Pretty";

import { LabelSet } from '@relate-by/schema-brands';

import { relationship } from './relationship';

const TextToText = relationship(S.string, S.literal("TO"), S.string);
interface TextToText extends S.To<typeof TextToText> {}

const TextToTextPretty = P.to(TextToText);


/** Constructor. */
export const make = (a:string, b:string, labeled:LabelSet):TextToText => ({
  "@type": "TO",
  additionalType: labeled,
  from:a,
  to:b
})

describe('relationship', () => {
  it('(Text)-[:TO]->(Text)', () => {
    const a = "Hello";
    const b = "World";
    const aToB = make(a, b, LabelSet("TEST"))

    console.log(TextToTextPretty(aToB));

    expect(aToB.from).toEqual('Hello');
    expect(aToB.to).toEqual('World');
    expect(aToB.additionalType).toEqual("TEST")
  });
});
