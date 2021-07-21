import Alert from './Alert';
import '../../index.css';

export default{
    title:'Alert',
    component: Alert,
    argTypes:{
        type:{
            control:{type:'select'}
        }
    }
}

export const main = (args:any)=><Alert {...args}></Alert>
main.args={
    type:'Warning',
    children:''
}
