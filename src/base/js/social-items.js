import {faLinkedin, faGithub, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

let nick = '@jairyara';
let mail = 'e@jairyara.com'

const social = [
    {
        id: 1,
        name: 'GitHub',
        url: 'https://github.com/jairyara',
        icon: faGithub,
        nickname: nick
    },
    {
        id: 2,
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jairyara/',
        icon: faLinkedin,
        nickname: nick
    },
    {
        id: 3,
        name: 'Twitter',
        url: 'https://twitter.com/jairyara',
        icon: faTwitter,
        nickname: nick
    },
    {
        id: 4,
        name: 'Instagram',
        url: 'https://www.instagram.com/jairyara/',
        icon: faInstagram,
        nickname: nick
    },
    {
        id: 5,
        name: mail,
        url: `mailto:${ mail }`,
        icon: faEnvelope,
        nickname: mail
    },
    
    
]

export default social;