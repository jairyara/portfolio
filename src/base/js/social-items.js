import {faLinkedin, faGithub, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

let nick = '@jairyara';

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
        nickname: 'https://www.linkedin.com/in/jairyara/'
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
        name: 'jair.yara11@gmail.com',
        url: 'mailto:jair.yara11@gmail.com',
        icon: faEnvelope,
        nickname: 'jair.yara11@gmail.com'
    }
]

export default social;