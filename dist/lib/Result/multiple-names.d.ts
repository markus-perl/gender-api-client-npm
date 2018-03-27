/// <reference types="node" />
import { GenderApiClientResultAbstract } from "./abstract";
import { GenderApiClientResultSingleName } from "./single-name";
export declare class GenderApiClientResultMultipleNames extends GenderApiClientResultAbstract implements Iterator<GenderApiClientResultSingleName> {
    names: GenderApiClientResultSingleName[];
    private pointer;
    next(): IteratorResult<GenderApiClientResultSingleName>;
    constructor(names: GenderApiClientResultSingleName[]);
}
