import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';

const PrimaryButtonSmall = styled(Button)({
    fontFamily: 'inherit',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '16px',
    height: '28px',
    borderRadius: '28px',
    backgroundColor: '#0A4197',
    color: 'white',
    gap: '10px',
    justifyContent: 'center',
    boxShadow: 'none',
    textTransform: 'unset',
    '&:hover': {
        backgroundColor: '#0A4197',
        borderColor: '#0A4197',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0A4197',
        borderColor: '#0A4197',
    },
})
export default PrimaryButtonSmall
