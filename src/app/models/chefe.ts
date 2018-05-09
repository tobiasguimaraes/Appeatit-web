import { Endereco } from 'app/models/endereco';

export class Chefe {

    constructor(
        public _id?: string,
        public nome?: string,
        public descricao?: string,
        public endereco = new Endereco()
    ) {}
}
