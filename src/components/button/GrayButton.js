import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const grayButton = styled(Button)({
    fontFamily: 'inherit',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    height: '32px',
    borderRadius: '28px',
    backgroundColor: '#E1E8F2',
    border: 'none',
    color: '#005AAA',
    minWidth: '100px',
    gap: '10px',
    justifyContent: 'center',
    boxShadow: 'none',
    textTransform: 'unset',
    '&:hover': {
        backgroundColor: '#E1E8F2',
        borderColor: '#005AAA',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        color: '#E1E8F2',
        backgroundColor: '#005AAA',
        borderColor: '#005AAA',
    },
})

export default grayButton