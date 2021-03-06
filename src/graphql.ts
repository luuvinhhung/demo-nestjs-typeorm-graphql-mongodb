
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class UserInput {
    email: string;
    password: string;
}

export abstract class IMutation {
    abstract createUser(input: UserInput): User | Promise<User>;

    abstract updateUser(_id: string, input: UserInput): boolean | Promise<boolean>;

    abstract deleteUser(_id: string): boolean | Promise<boolean>;

    abstract deleteAll(): boolean | Promise<boolean>;
}

export abstract class IQuery {
    abstract hello(): string | Promise<string>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(_id: string): User | Promise<User>;
}

export class User {
    _id: string;
    email: string;
    password: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
}
