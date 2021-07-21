import Button from './Button';
import '../../index.css';

export default {
    title:'Buttons',
    component : Button,
    argTypes:{
        theme:{
            control:{type:'select'}
        }
    }
}

export const main = (args:any)=><Button {...args}></Button>

main.args={
    children:"Sign in",
    disabled:false

}