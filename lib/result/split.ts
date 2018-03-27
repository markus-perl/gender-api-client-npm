import {GenderApiClientResultAbstract} from "./abstract";

export class GenderApiClientResultSplit extends GenderApiClientResultAbstract{
    constructor(public last_name: string,
                public first_name: string,
                public name: string,
                public gender: string,
                public samples: number,
                public accuracy: number,
                public duration: string,
                public credits_used: number) {
        super();
    }
}
