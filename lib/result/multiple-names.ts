import {GenderApiClientResultAbstract} from "./abstract";
import {GenderApiClientResultSingleName} from "./single-name";

export class GenderApiClientResultMultipleNames extends GenderApiClientResultAbstract implements Iterator<GenderApiClientResultSingleName> {

    private pointer = 0;

    public next(): IteratorResult<GenderApiClientResultSingleName> {
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

    constructor(public names: GenderApiClientResultSingleName[]) {
        super();
    }
}
