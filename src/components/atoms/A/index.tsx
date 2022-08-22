import React from 'react';
import Link from 'next/link';

import { useAmp } from 'next/amp';

import * as S from './style';

export type AProps = {
  externalLink?: boolean;
  to: string;
  target?: string;
  children?: React.ReactElement | React.ReactElement[] | string;
  lineType?: 'dotted' | 'dashed' | 'solid';
  rel?: 'noopener' | 'noreferrer' | 'nofollow';
  utm?: {
    source: string;
    medium: string;
    campaign: string;
  };
};

export function A({
  externalLink = false,
  to = '/',
  target = '_self',
  children,
  lineType = 'dashed',
  rel = 'nofollow',
  utm,
}: AProps) {
  // const { getColor, publicUrl } = useTheme();
  // const isAmp = useAmp();

  // const lineColorHex = underlineColor ? getColor(underlineColor) : 'transparent';

  const buildUtmParams = () => {
    if (!externalLink || !utm) return to;
    const additionalParameters = `${to}?utm_source=${utm.source}&utm_medium=${utm.medium}&utm_campaign=${utm.campaign}/`;
    return additionalParameters;
  };

  return (
    <>
      {externalLink ? (
        <S.Link
          lineType={lineType}
          href={buildUtmParams()}
          target={target}
          rel={rel || (externalLink ? 'noopener' : null)}
        >
          {children || ''}
        </S.Link>
      ) : (
        <Link href={to.replace('', '')}>
          <S.Link lineType={lineType} href={to} target={target}>
            {children || ''}
          </S.Link>
        </Link>
      )}
    </>
  );
}
