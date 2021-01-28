export class Usuario {
    constructor(
        public nombre:string,
        public email: string,
        public password: string,
        public img?:string,
        public role?: string,
        public _id?: string,
    ){}
  
    imprimirUsuario(){
        console.log(this.nombre)
    }

    get devuelveImagen(){
        if(this.img){
            return `http://localhost:3000/img/${this.img}`;
        }else{
            return `assets/img/user.png`;
        }
    }
}