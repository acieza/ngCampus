export class Usuario {
    constructor(
        public nombre:string,
        public email: string,
        public password: string,
        public img?:string,
        public role?: 'admin' | 'user' | 'profesor',
        public _id?: string,
        public cursos?: [any]
    ){}
  
    imprimirUsuario(){
        console.log(this.nombre)
        console.log(this.cursos)
    }

    get devuelveImagen(){
        if(this.img){
            return `http://localhost:3000/img/${this.img}`;
        }else{
            return `assets/img/user.png`;
        }
    }
}