import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactWidgets = [
    {
      icon: 'icon_phone',
      title: 'Phone Number',
      text: '+4073521412',
    },
    {
      icon: 'icon_pin_alt',
      title: 'Address',
      text: '190, Baleni ,Dambovita, Romania',
    },
    {
      icon: 'icon_clock_alt',
      title: 'Opening Hours',
      text: 'Mon - Fri: 9:00 - 18:00',
    },
    {
      icon: 'icon_mail_alt',
      title: 'Email Address',
      text: 'info@gmail.com',
    },
  ];
}
