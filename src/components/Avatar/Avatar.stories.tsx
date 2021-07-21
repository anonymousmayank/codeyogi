import Avatar from './Avatar';
import '../../index.css';
import image from '../../assets/authHero.webp';

export default {
    title:'Avatar',
    component: Avatar
}

export const main = (args:any)=><Avatar {...args} />

main.args={
    size:'xl',
    status:undefined,
    image:image
}