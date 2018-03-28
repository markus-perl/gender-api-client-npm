import { ResultAbstract } from "./abstract";
export declare class ResultStats extends ResultAbstract {
    key: string;
    is_limit_reached: boolean;
    remaining_requests: Number;
    amount_month_start: Number;
    amount_month_bought: Number;
    duration: string;
    constructor(key: string, is_limit_reached: boolean, remaining_requests: Number, amount_month_start: Number, amount_month_bought: Number, duration: string);
}
