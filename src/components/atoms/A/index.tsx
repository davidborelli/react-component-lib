import React from 'react';
import Link from 'next/link';

import { useAmp } from 'next/amp';

import * as S from './style';

export type AProps = {
  externalLink: boolean;
  textColor: string;
  hoverColor: string;
  color: string;
  invertOnHover: boolean;
  as: string;
  to: string;
  target: string;
  title: string;
  children: React.ReactElement;
  underlineColor: string;
  lineType: 'dotted' | 'dashed' | 'solid';
  rel: 'noopener' | 'noreferrer' | 'nofollow';
  utm?: {
    source: string;
    medium: string;
    campaign: string;
  };
};

export function A({
  externalLink = false,
  as,
  to = '/',
  target = '_self',
  title,
  children,

  lineType,
  rel,
  utm,
}: AProps) {
  // const { getColor, publicUrl } = useTheme();
  const isAmp = useAmp();

  // const lineColorHex = underlineColor ? getColor(underlineColor) : 'transparent';

  const buildUtmParams = () => {
    if (!externalLink || !utm) return to;
    const additionalParameters = `${to}?utm_source=${utm.source}&utm_medium=${utm.medium}&utm_campaign=${utm.campaign}/`;
    return additionalParameters;
  };

  return (
    <>
      {externalLink || isAmp ? (
        <S.Link
          lineType={lineType}
          href={buildUtmParams()}
          target={target}
          title={title}
          rel={rel || (externalLink ? 'noopener' : null)}
        >
          {children}
        </S.Link>
      ) : (
        <Link href={to.replace('', '')} as={as}>
          <S.Link lineType={lineType} href={to} target={target} title={title}>
            {children}
          </S.Link>
        </Link>
      )}
    </>
  );
}
