export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service:
    | 'home-cleaning'
    | 'office-cleaning'
    | 'furniture-cleaning'
    | 'window-cleaning'
    | 'carpet-cleaning'
    | 'laundry-services';
  date: string;
  time: string;
  message: string;
  orderId: string;
};
