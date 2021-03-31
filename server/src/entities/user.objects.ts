import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class User {
  @Field()
  handle: string;

  @Field()
  fullName: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
