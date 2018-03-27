import { GenderApiClientResultAbstract } from "./abstract";
export declare class GenderApiClientResultEmailAddress extends GenderApiClientResultAbstract {
    name_sanitized: string;
    last_name: string;
    email: string;
    mail_provider: string;
    country: string;
    gender: string;
    samples: number;
    accuracy: number;
    duration: string;
    credits_used: number;
    constructor(name_sanitized: string, last_name: string, email: string, mail_provider: string, country: string, gender: string, samples: number, accuracy: number, duration: string, credits_used: number);
}
