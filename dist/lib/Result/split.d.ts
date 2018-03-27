import { GenderApiClientResultAbstract } from "./abstract";
export declare class GenderApiClientResultSplit extends GenderApiClientResultAbstract {
    last_name: string;
    first_name: string;
    name: string;
    gender: string;
    samples: number;
    accuracy: number;
    duration: string;
    credits_used: number;
    constructor(last_name: string, first_name: string, name: string, gender: string, samples: number, accuracy: number, duration: string, credits_used: number);
}
