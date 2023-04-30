export class Usuario{
    
    username: string = '';
    fullname: string = '';
    cc: number = 0;
    role: string = '';
    disabled: boolean = false;
    password: string = '';
    scope?: '';
    grant_type?: 'password';
}