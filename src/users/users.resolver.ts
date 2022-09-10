import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

import { User } from "./models/user";
import { UsersService } from './users.service';
import { GetUserArgs } from './dto/args/get-user.args';

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService){}
    
    @Query(() => User, {name: 'user', nullable: true})
    getUser(@Args() getUserArgs: GetUserArgs): User {
        return this.usersService.getUser();
    }

    @Query(() => [User], {name:'users', nullable: 'items'})
    getUsers(@Args() getUsersArgs: GetUserArgs): User[]{
        return this.usersService.getUsers();
    }

    @Mutation(() => User)
    createUser(): User {
        return this.usersService.createUser();
    }

}