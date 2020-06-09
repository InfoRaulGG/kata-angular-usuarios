export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export class User implements IUser {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address: Address;
    public phone: string;
    public website: string;
    public company: Company;

    public constructor(init?: User) {
        Object.assign(this, init);
    }

}



