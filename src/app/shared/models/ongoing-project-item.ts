export class OngoingProjectItem {

    image: string;
    cardText: string;
    contentDescription?:string;
    url?: string;

    constructor({img, text}: any){
        this.image = img;
        this.cardText = text;
    }

}
