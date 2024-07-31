import DSAservice from "../services/DSAservice.mjs";

export class DSAController {
    constructor( service ) {
        this.service = new DSAservice( service );
    }
}