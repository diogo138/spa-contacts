import { Injectable } from '@angular/core';
import { ContactsModel } from "./contacts.model";


@Injectable({
    providedIn: 'root'
})

export class ContactsService{
    returnAll(): ContactsModel[] {
        return CONTACTS;
        }
}

const CONTACTS: ContactsModel[] = [
    {
        id: 1,
        image: '/assets/img/01.jpg',
        name: 'Marcio',
        email: 'marcio@gmail.com',
        date: '2021-01-01',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
        rating: 3,
        phone: '12-99136-1506',
        birthday: '1990-01-01',
        url: 'https://www.google.com',
        address: '123 Main St, City, State 12345',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.'
    },
    {
        id: 2,
        image: '/assets/img/02.jpg',
        name: 'maria',
        email: 'maria@gmail.com',
        date: '2021-01-01',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
        rating: 5,
        phone: '123-456-7890',
        birthday: '1990-01-01',
        url: 'https://www.google.com',
        address: '123 Main St, City, State 12345',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.'
    },
    {
        id: 3,
        image: '/assets/img/03.jpg',
        name: 'Julia Doe',
        email: 'julia@gmail.com',
        date: '2021-01-01',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
        rating: 4,
        phone: '123-456-7890',
        birthday: '1990-01-01',
        url: 'https://www.google.com',
        address: '123 Main St, City, State 12345',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.'
    },
    {
        id: 4,
        image: '/assets/img/04.jpg',
        name: 'goes Doe',
        email: 'goes@gmail.com ',
        date: '2021-01-01',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.',
        rating: 2,
        phone: '123-456-7890',
        birthday: '1990-01-01',
        url: 'https://www.google.com',
        address: '123 Main St, City, State 12345',
        notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.'
    },
]
