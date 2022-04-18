import * as React from 'react';

export interface ILogoProps {
  image?: string;
  text?: string;
  url?: string;
}

export default function Logo({ image, text, url }: ILogoProps) {
  return (
    <div className="logo">
      logo
    </div>
  );
}
