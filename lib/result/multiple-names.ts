import {ResultAbstract} from "./abstract";
import {ResultSingleName} from "./single-name";

export class ResultMultipleNames extends ResultAbstract implements Iterator<ResultSingleName> {

    private pointer = 0;

    public next(): IteratorResult<ResultSingleName> {
        if (this.pointer < this.names.length) {
            return {
                done: false,
                value: this.names[this.pointer++]
            }
        } else {
            return {
                done: true
            }
        }
    }

    constructor(public names: ResultSingleName[]) {
        super();
    }
}
