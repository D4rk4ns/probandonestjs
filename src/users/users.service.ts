import { Injectable } from '@nestjs/common';
import { User } from './models/user';

@Injectable()   //Nos permite importar providers en el servicio
export class UsersService {
    private users: User[] = [];

    public createUser(): User {

    }

    public updateUser(): User {

    }

    public getUser(): User {

    }

    public getUsers(): User[] {

    }

    public deleteUser(): User {
        
    }
}