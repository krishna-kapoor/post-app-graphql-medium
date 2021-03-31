import { Query, Resolver } from "type-graphql";

@Resolver()
export default class UserResolver {
  @Query(() => String)
  hi() {
    return "hi";
  }
}
