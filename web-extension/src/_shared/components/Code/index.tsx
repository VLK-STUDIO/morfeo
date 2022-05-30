import React, { useEffect } from 'react';
import clsx from 'clsx';
import Prism from 'prismjs';
import { t } from '../../utils';
import { Card } from '../Card';

import 'prismjs/themes/prism-tomorrow.css';
import styles from './style.module.css';

type Props = {
  children: string;
  language?: string;
  className?: string;
};

export const Code: React.FC<Props> = ({
  children,
  language = 'javascript',
  className,
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Card
      className={clsx(styles.container, className)}
      copyText={children}
      copyLabel={t('copyCode')}
      copiedLabel={t('codeCopied')}
    >
      <pre className={styles.pre}>
        <code className={clsx(styles.code, `language-${language}`)}>
          {children}
        </code>
      </pre>
    </Card>
  );
};
