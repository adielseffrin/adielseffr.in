import { CurrentLocale } from "./current-locales.enum";

export class OngoingProjectItem {

    image: string;
    cardText: string;
    contentDescription?:string;
    url?: string;
    locale: CurrentLocale;
    
    constructor({img, text, locale}: any){
        this.image = img;
        this.cardText = text;
        this.locale = locale;
    }

}
