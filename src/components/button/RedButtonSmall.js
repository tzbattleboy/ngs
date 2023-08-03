import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';

const RedButtonSmall = styled(Button)({
    fontFamily: 'inherit',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    height: '28px',
    borderRadius: '28px',
    backgroundColor: 'white',
    color: 'rgba(255, 43, 30, 1)',
    borderColor: 'rgba(255, 43, 30, 1)',
    gap: '10px',
    justifyContent: 'center',
    boxShadow: 'none',
    textTransform: 'unset',
    '&:hover': {
        backgroundColor: 'white',
        borderColor: 'rgba(255, 43, 30, 1)',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: 'white',
        borderColor: 'rgba(255, 43, 30, 1)',
    },
})
export default RedButtonSmall
