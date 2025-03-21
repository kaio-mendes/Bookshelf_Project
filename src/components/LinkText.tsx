import Link from "next/link";
import React from "react";

interface LinkText {
  href: string;
  text: string;
}

const LinkText = ({ href, text }: LinkText) => {
  return (
    <Link href={href}>
      {text}
    </Link>
  );
};

export default LinkText;
