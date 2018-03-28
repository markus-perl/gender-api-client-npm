import { ResultAbstract } from "./abstract";
export declare class ResultSplit extends ResultAbstract {
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
