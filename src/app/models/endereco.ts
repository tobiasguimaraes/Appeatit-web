export class Endereco {

    constructor(
        public rua?: string,
        public cep?: string,
        public cidade?: string,
        public bairro?: string,
        public estado?: string,
        public complemento?: string,
        public numero?: string
    ) { }
}
