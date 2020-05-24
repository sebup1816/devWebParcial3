export class Event {
    public id: number;
    public name: string;
    public description: string;
    public date: Date;
  
    constructor( name: string, description:string, date: Date ) {
      this.name = name;
      this.id = Math.random();
      this.description = description;
      this.date= date;
    }
  }