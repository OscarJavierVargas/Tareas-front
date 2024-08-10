export class tarea{

    constructor(id:number,   title:string,    description: string,  createdAt: Date,  estatus:string){
    
        this.id=id;
        this.title=title;
        this.description=description;
        this.createdAt=createdAt;
        this.estatus=estatus;
    }
    
      id:number=0;
      title:string='';
      description: string='';
      createdAt: Date=new Date();  
      estatus:string='';
    
    

    
    
    }