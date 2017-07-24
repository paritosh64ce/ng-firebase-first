export class Hero {
    name: string;
    description: string;
    id?: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
