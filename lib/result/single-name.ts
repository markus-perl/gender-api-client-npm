import {ResultAbstract} from "./abstract";

export class ResultSingleName extends ResultAbstract{
    constructor(public name_sanitized: string,
                public country: string,
                public gender: string,
                public samples: number,
                public accuracy: number,
                public duration: string,
                public credits_used: number) {
        super();
    }
}
