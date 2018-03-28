import {ResultAbstract} from "./abstract";
import {ResultSingleName} from "./single-name";

export class ResultMultipleNames extends ResultAbstract{

    constructor(public names: ResultSingleName[]) {
        super();
    }

    /**
     * @returns {ResultSingleName[]}
     */
    public getNames() {
        return this.names;
    }
}
