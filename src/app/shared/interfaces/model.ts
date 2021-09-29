import { CustomFields } from './custom-fields';



export interface Model { 
    id?: string;
    model_no: string;
    name: string;
    phone_no?: string;
    real_phone_no: string;
    dob: string;
    gender: string
    age: number;
    build: string
    country_name: string;
    city_name:string;
    preview_image: string;
    availability: string[];
    ethnicity: string;
    badges: string;
    about: string;
    services: string[];
    subscription: string;
}
