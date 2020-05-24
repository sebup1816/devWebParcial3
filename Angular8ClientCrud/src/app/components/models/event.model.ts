export class Event {
    public id: number;
    public name: string;
    public description: string;
  
    constructor( name: string, description:string ) {
      this.name = name;
      this.id = Math.random();
      this.description = description;
    }
  }