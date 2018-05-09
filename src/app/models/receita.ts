import { Endereco } from 'app/models/endereco';
import { Chefe } from './chefe';

export class Receita {

    constructor(
        public _id?: string,
        public nome?: string,
        public descricao?: string,
        public fotos?: Array<string>,
        public chefe = new Chefe()
    ) {}
}
