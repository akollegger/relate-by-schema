import * as S from "@effect/schema/Schema";
import * as AST from "@effect/schema/AST";
import { pipe } from "@effect/data/Function";
import * as O from "@effect/data/Option";


export const DeprecatedId = "some/unique/identifier/for/the/custom/annotation";

export const deprecated = <A>(self: S.Schema<A>): S.Schema<A> =>
  S.make(AST.setAnnotation(self.ast, DeprecatedId, true));

export const DeprecatedString = pipe(S.string, deprecated);

export const TypicalAnnotationId = "@relate-by/schema/typical/TypicalAnnotationId"

export const typical = (value:boolean) => <A>(self: S.Schema<A>): S.Schema<A> =>
  S.make(AST.setAnnotation(self.ast, TypicalAnnotationId, value));

export const getTypical = <A>(schema: S.Schema<A>): boolean => pipe(
    AST.getAnnotation<boolean>(TypicalAnnotationId)(schema.ast),
    O.getOrElse(() => false)
  );
