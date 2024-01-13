import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt, FaMobile, FaLinkedin } from 'react-icons/fa';
import { FaSquareFacebook } from "react-icons/fa6";

export const MailAndPhones = [
  { id: 1, href: "biuro@interdom-nieruchomosci.pl", mail: "biuro@interdom-nieruchomosci.pl", icon: <IoMdMail /> },
  { id: 2, href: "+42 630 84 55", phone1: "+42 630 84 55", icon: <FaPhoneAlt /> },
  { id: 3, href: "+48 530 223 625", phone2: "+48 530 223 625", icon: <FaMobile /> },
  { id: 4, href: "https://www.facebook.com/", title: "sprawdź nasz Facebook", facebook: "Facebook", socIcon: <FaSquareFacebook /> },
  { id: 5, href: "https://www.linkedin.com/", title: "sprawdź nasz profil na LinkedIn", linkedin: "LinkedIn", socIcon: <FaLinkedin /> }
];