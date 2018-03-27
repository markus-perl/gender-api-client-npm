import { GenderApiClientResultAbstract } from "./abstract";
export declare class GenderApiClientResultStats extends GenderApiClientResultAbstract {
    key: string;
    is_limit_reached: boolean;
    remaining_requests: Number;
    amount_month_start: Number;
    amount_month_bought: Number;
    duration: string;
    constructor(key: string, is_limit_reached: boolean, remaining_requests: Number, amount_month_start: Number, amount_month_bought: Number, duration: string);
}
