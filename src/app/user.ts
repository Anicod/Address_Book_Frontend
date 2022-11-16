export class User {
    public firstName:string = ""
    public lastName:string = ""
    public address:string = ""
    public city:string = ""
    public state:string = ""
    public zipCode:number = 0
    public note:string = ""
    public phoneNumber:number = 0
    constructor(firstName: string, lastName: string, address: string, city: string, state: string, zipCode: number, note: string,phoneNumber: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.note = note;
        this.phoneNumber = phoneNumber;

    }
}


