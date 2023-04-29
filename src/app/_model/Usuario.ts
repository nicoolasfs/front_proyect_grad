export class Usuario{
    
    username: string = '';
    name: string = '';
    cc: number = 0;
    role: string = '';
    disabled: boolean = false;
    password: string = '';
    scope?: '';
    grant_type?: 'password';
}