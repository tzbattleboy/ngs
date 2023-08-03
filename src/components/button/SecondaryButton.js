import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';

const SecondaryButton = styled(Button)({
    fontFamily: 'inherit',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '24px',
    height: '48px',
    borderRadius: '28px',
    backgroundColor: 'white',
    color: '#0A4197',
    borderColor: '#0A4197',
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
    }
})
export default SecondaryButton
