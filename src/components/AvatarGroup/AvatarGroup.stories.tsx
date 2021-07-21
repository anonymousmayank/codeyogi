import Avatar from '../Avatar/Avatar';
import AvatarGroup from './AvatarGroup';
import image from '../../assets/authHero.webp';

export default{
    title:'Avatar Group',
    component: AvatarGroup
}

export const main = (args:any)=><AvatarGroup {...args} >
    <Avatar size='md' image={image}></Avatar>
    <Avatar size='md' image={image}></Avatar>
    <Avatar size='md' image={image}></Avatar>
    <Avatar size='md' image={image}></Avatar>
    <Avatar size='md' image={image}></Avatar>
    <Avatar size='md' image={image}></Avatar>
    <Avatar size='md' image={image}></Avatar>
</AvatarGroup>
// main.args={
// children:avatars
// }