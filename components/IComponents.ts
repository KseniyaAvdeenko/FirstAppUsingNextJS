export interface IContact {
    id: string
    name: string,
    email: string,
    address: { street: string, suite: string, city: string }
}

export interface IPost {
    id: number;
    title: string;
    body: string;
}

export interface ISocial {
    id: number;
    icon: string;
    path: string;
}