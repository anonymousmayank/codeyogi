import Input from './Input';
import '../../index.css';
import { FiLock, FiUser } from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';

const icons = { FiUser, HiOutlineMail, FiLock};
export default {
    title:'Input',
    component:Input,
    argTypes:{
        type:{
            control:{type:'select'}
        },
        Icon: {
            options: Object.keys(icons),
            mapping: icons,
            control: {
              type: 'select',
              labels: {
                FiUser: 'Username',
                HiOutlineMail: 'E-mail',
                FiLock: 'Password',
              }
            }
          },
    }
}

export const main = (args:any)=><Input {...args}></Input>

main.args={
    touched:true,
    error:'',
    Icon: undefined
}