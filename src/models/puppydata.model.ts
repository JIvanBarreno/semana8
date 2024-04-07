export class Puppy {
    private name: string = "";
    private type: string = "";

    constructor (nm: string, tp: string) {
        this.name = nm;
        this.type = tp;
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }
}