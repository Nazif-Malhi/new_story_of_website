import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const RoundButton=styled(Link)`
background: ${({primary})=>(primary ? ' #FEDE17' :
'CD853F')};
white-space    : nowrap;
outline        : none;
border         : none;
min-width      : 100px;
max-width      : 200px;
cursor         : pointer;
text-decoration: none;
transition     : 0.3s;
display        : flex;
justify-content: center;
align-items    : center;
padding        : ${({big}) => (big ? '16px 40px' : '14px 24px')};
color          : ${({primary}) => (primary ?'#fff': ' #FEDE17')};
font-size      : ${({big}) => (big ? '20px' : '14px')};
border-radius: 10px;

&:hover{
    transform: translateY(-2px);
}
`;