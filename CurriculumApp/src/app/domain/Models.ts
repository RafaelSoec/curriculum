import { EducationalSituation, LanguageLevel } from "./Enums"
import { Color } from "./Interfaces";

export class KeyValue<T, R> {
    key: T | undefined;
    value: R | undefined;

    constructor(key: T, value: R){
        this.key = key;
        this.value = value;
    }
}

export class Personal {
    name: string | undefined = '';
    office: string | undefined = '';
    profile: string | undefined = '';
    birthday: Date | null = null;
    skills: KeyValue<string, number>[] = [];
    contacts: KeyValue<string, string>[] = [];
    knowledges: KeyValue<string, string[]>[] = [];
    languages: KeyValue<string, LanguageLevel>[] = [];

    constructor(){}
}

export class Education {
    institution: string = '';
    address: string = '';
    name: string = '';
    situation: EducationalSituation | undefined;
    startDate: Date | null = null;
    endDate: Date | null = null;

    constructor(){}
}


export class Experience {
    institution: string = '';
    address: string = '';
    description: string = '';
    office: string = '';
    startDate: Date | null = null;
    endDate: Date | null = null;

    constructor(){}
}


export class Certificate {
    name: string = '';
    address: string = '';
    description: string = '';
    startDate: Date | null = null;
    endDate: Date | null = null;

    constructor(){}
}


export class Configuration {
    color: Color | undefined;
    font: {name: string, sub: string, font: string};

    constructor(color: Color, font: {name: string, sub: string, font: string} ){
        this.color = color;
        this.font = font;
    }
}

export class Curriculum {
    personal: Personal | null = null;
    certificates: Certificate[] = [];
    experiences: Experience[] = [];
    educations: Education[] = [];
    configurations: Configuration | null = null;

    constructor(){}
}