import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';

const PrimaryButton = styled(Button)({
    fontFamily: 'inherit',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '24px',
    height: '48px',
    borderRadius: '28px',
    backgroundColor: 'rgba(0, 90, 170, 1)',
    color: 'white',
    minWidth: '100px',
    gap: '10px',
    justifyContent: 'center',
    boxShadow: 'none',
    textTransform: 'unset',
    '&:hover': {
        backgroundColor: 'rgba(0, 90, 170, 1)',
        borderColor: 'rgba(0, 90, 170, 1)',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: 'rgba(0, 90, 170, 1)',
        borderColor: 'rgba(0, 90, 170, 1)',
    },
})
export default PrimaryButton
