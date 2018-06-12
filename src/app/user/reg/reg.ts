export class Registration
{
    constructor(
        public $key?: string,
        public firstName?: string,
        public secondName?: string,
        public username?: string,
        public password?: string,
        public confirmPassword?: string,
        public email?: string,
    ){}
}