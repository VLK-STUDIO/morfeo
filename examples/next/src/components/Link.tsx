import { morfeo } from '@morfeo/css';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

type LinkProps = NextLinkProps & {
  children?: string;
};

const classes = morfeo.css({
  link: {
    componentName: 'Typography',
    variant: 'link',
  },
});

export const Link: React.FC<LinkProps> = props => {
  return <NextLink {...props} className={classes('link')} />;
};
