import { Stack, Typography } from '@mui/material';

type Props = {
  title?: string;
  subtitle?: string;
};

function Title({ title, subtitle }: Props) {
  return (
    <Stack direction="column" sx={{ textAlign: 'center' }} spacing={2}>
      <Typography variant="h3" component="h2">
        {title}
      </Typography>
      <Typography variant="body2">{subtitle}</Typography>
    </Stack>
  );
}

export default Title;
