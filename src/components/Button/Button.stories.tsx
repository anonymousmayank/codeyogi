import Button from './Button';
import '../../index.css';

export default {
    title:'Buttons',
    component : Button
}

export const main = (args:any)=><Button {...args}>Sign in</Button>