import Tooltip  from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';

const SignOut = () => {
    return (
        <Tooltip title="Encerrar" arrow>
            <IconButton>
                <Icon icon="majesticons:logout" color="darkred" />
            </IconButton>
        </Tooltip>
    );
};


export default SignOut;