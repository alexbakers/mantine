import { createUseStyles } from 'react-jss';
import { MantineTheme, getFocusStyles } from '@mantine/theme';

export default createUseStyles({
  item: {
    position: 'relative',
  },

  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },

  control: ({ theme }: { theme: MantineTheme }) => ({
    ...getFocusStyles(theme),
    height: 32,
    flex: 1,
    textAlign: 'left',
    padding: 0,
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    cursor: 'pointer',
    paddingLeft: 10,
    maxWidth: '80%',
  }),

  controlInner: {
    display: 'flex',
  },

  badge: {
    display: 'block !important',
    width: 'auto',
  },

  hovered: ({ theme }: { theme: MantineTheme }) => ({
    backgroundColor: theme.colors.gray[0],
  }),
});
