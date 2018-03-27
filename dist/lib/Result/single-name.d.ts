import { GenderApiClientResultAbstract } from "./abstract";
export declare class GenderApiClientResultSingleName extends GenderApiClientResultAbstract {
    name_sanitized: string;
    country: string;
    gender: string;
    samples: number;
    accuracy: number;
    duration: string;
    credits_used: number;
    constructor(name_sanitized: string, country: string, gender: string, samples: number, accuracy: number, duration: string, credits_used: number);
}
