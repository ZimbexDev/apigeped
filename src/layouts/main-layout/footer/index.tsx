import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Typography
      mt={0.5}
      px={{ xs: 0, md: 3.75 }}
      py={3}
      color="text.secondary"
      variant="body2"
      sx={{ textAlign: { xs: 'center', md: 'right' } }}
      letterSpacing={0.5}
      fontWeight={500}
    >
      Desenvolvido por{' '}
      <Link href="www.m-zimba.weebly.com/" target="_blank" rel="noreferrer" fontWeight={600}>
        {'Martins Zimba'}
      </Link>
    </Typography>
  );
};

export default Footer;
