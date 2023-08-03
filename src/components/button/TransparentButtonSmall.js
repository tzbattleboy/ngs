import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';

const TransparentButtonSmall = styled(Button)({
    fontFamily: 'inherit',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    height: '28px',
    borderRadius: '28px',
    backgroundColor: 'transparent',
    color: 'white',
    borderColor: 'white',
    border: '1px solid',  
    minWidth: '100px',
    gap: '10px',
    justifyContent: 'center',
    boxShadow: 'none',
    textTransform: 'unset',
    '&:hover': {
        backgroundColor: 'white',
        borderColor: '#0A4197',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: 'white',
        borderColor: '#0A4197',
    },
})
export default TransparentButtonSmall
