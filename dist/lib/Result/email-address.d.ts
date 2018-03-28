import { ResultAbstract } from "./abstract";
export declare class ResultEmailAddress extends ResultAbstract {
    name_sanitized: string;
    first_name: string;
    last_name: string;
    email: string;
    mail_provider: string;
    country: string;
    gender: string;
    samples: number;
    accuracy: number;
    duration: string;
    credits_used: number;
    constructor(name_sanitized: string, first_name: string, last_name: string, email: string, mail_provider: string, country: string, gender: string, samples: number, accuracy: number, duration: string, credits_used: number);
}
