import React from 'react';
import { Shadow, useStyle } from '@morfeo/react';
import { Card } from '../../../Card';
import { useRouter } from '../../../../hooks';
import { RouteState } from '../../../../contexts';
import styles from './style.module.css';
import { DetailLabel } from '../../_shared/DetailLabel';

export const Detail: React.FC = () => {
  const { route } = useRouter();
  const { state = {} as RouteState } = route;
  const { detailKey } = state;
  const { boxShadow } = useStyle({ shadow: detailKey as Shadow });

  return (
    <div className={styles.container}>
      <Card className="morfeo-card-primary">
        <Card
          className="morfeo-card"
          style={
            {
              shadow: detailKey as Shadow,
              size: 'var(--sizes-2xl)',
              corner: 'var(--radii-2xs)',
              bg: 'var(--colors-primary)',
            } as any
          }
        />
      </Card>
      <DetailLabel label="box-shadow" value={boxShadow as string} />
    </div>
  );
};
