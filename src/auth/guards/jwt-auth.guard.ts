import { AuthGuard } from '@nestjs/passport';


//Este Guard lo usaremos cuando queramos usar una REST-API
export class JwtAuthGuard extends AuthGuard('jwt'){
    
}