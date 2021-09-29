import { MobileMenuItem } from "src/app/shared/interfaces/mobile-menu-items";


export const mobileMenu: MobileMenuItem[] = [
   
    {type: 'link', label: 'Dashboard', url: '/'},
 

    {type: 'link', label: 'Account', url: '/account', children: [
        {type: 'link', label: 'Dashboard',       url: '/account/dashboard'},
        {type: 'link', label: 'Edit Profile',    url: '/account/profile'},
        {type: 'link', label: 'Change Password', url: '/account/password'}
    ]},

];
