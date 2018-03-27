import {GenderApiClientResultAbstract} from "./abstract";

export class GenderApiClientResultEmailAddress extends GenderApiClientResultAbstract{
    constructor(public name_sanitized: string,
                public last_name: string,
                public email: string,
                public mail_provider: string,
                public country: string,
                public gender: string,
                public samples: number,
                public accuracy: number,
                public duration: string,
                public credits_used: number) {
        super();
    }
}
