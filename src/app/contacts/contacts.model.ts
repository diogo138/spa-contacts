export class ContactsModel {
    constructor(
        public id: number,
        public image: string,
        public name: string,
        public email: string,
        public date: string,
        public description: string,
        public rating: number,
        public phone: string,
        public birthday: string,
        public url: string,
        public address: string,
        public notes: string
    ) {}
}