import { ResultAbstract } from "./abstract";
import { ResultSingleName } from "./single-name";
export declare class ResultMultipleNames extends ResultAbstract {
    names: ResultSingleName[];
    constructor(names: ResultSingleName[]);
    /**
     * @returns {ResultSingleName[]}
     */
    getNames(): ResultSingleName[];
}
