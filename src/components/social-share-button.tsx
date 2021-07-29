import React from "react";

interface ISocialShareButton {
  url: string;
  children: React.ReactNode;
}

export default function SocialShareButton({
  url,
  children,
}: ISocialShareButton) {
  return (
    <a target="_blank" rel="noopener noreferrer" href={url}>
      {children}
    </a>
  );
}
