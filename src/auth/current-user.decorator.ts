import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';


/**
 * Este decorador es para obtener el usuario que esta actualmente autenticado ya sea a través de
 * GraphQL o REST-API
 */
export const CurrentUser  = createParamDecorator(
    (_data: unknown, context: ExecutionContext) => {
        if(context.getType() === 'http'){
            return context.switchToHttp().getRequest().user;
        }

        const ctx = GqlExecutionContext.create(context);
        return ctx.getContext().req.user;
    }
)