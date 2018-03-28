import { ResultAbstract } from "./abstract";
export declare class ResultSingleName extends ResultAbstract {
    name_sanitized: string;
    country: string;
    gender: string;
    samples: number;
    accuracy: number;
    duration: string;
    credits_used: number;
    constructor(name_sanitized: string, country: string, gender: string, samples: number, accuracy: number, duration: string, credits_used: number);
}
