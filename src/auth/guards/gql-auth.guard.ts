import { ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";

//Este Guard lo usaremos cuando queramos usar un GraphQL
export class GqlAuthGuard extends AuthGuard('jwt'){
    getRequest(context: ExecutionContext): any {
        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req;    //Devuelve el objeto de la peticion actual en un contexto de GQL
    }
}