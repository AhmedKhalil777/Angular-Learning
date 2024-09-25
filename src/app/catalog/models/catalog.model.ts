export class Catalog {
    Id : number;
    Name : string;
    Description : string;
    Price: string;
    Images : Resource[]
}


export class Resource {
    Path: string;
    Id : number;
    ResourceType : ResourceType
}

export enum ResourceType {
    Image = 0
}