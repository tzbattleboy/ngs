import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';

const TransparentButton = styled(Button)({
    fontFamily: 'inherit',
    fontStyle: 'normal',
    fontSize: '24px',
    height: '48px',
    borderRadius: '28px',
    // backgroundColor: 'transparent',
    background: 'rgba(8, 46, 104, 0.24)',
    color: 'white',
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
export default TransparentButton
