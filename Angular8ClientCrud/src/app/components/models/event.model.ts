export class Event {
    public id: number;
    public name: string;
    public description: string;
    public date: Date;
    public mode: string;
  
    constructor( name: string, description:string, date: Date,mode: string) {
      this.name = name;
      this.id = Math.random();
      this.description = description;
      this.date= date;
      this.mode= mode;
    }
  }