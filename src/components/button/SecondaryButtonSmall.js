import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';

const SecondaryButtonSmall = styled(Button)({
    fontFamily: 'inherit',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    height: '28px',
    borderRadius: '28px',
    backgroundColor: 'white',
    color: '#005AAA',
    borderColor: '#005AAA',
    gap: '10px',
    justifyContent: 'center',
    boxShadow: 'none',
    textTransform: 'unset',
    '&:hover': {
        backgroundColor: 'white',
        borderColor: '#005AAA',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: 'white',
        borderColor: '#005AAA',
    },
})
export default SecondaryButtonSmall
