import {ResultAbstract} from "./abstract";

export class ResultStats extends ResultAbstract{
    constructor(public key: string,
                public is_limit_reached: boolean,
                public remaining_requests: Number,
                public amount_month_start: Number,
                public amount_month_bought: Number,
                public duration: string) {
        super();
    }
}
