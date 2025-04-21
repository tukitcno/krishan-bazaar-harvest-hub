
import React from "react";

export const AppleIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M12 13.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" />
      <path d="M19.071 19.071c3.504-3.504 3.504-9.639 0-13.142-3.503-3.504-9.638-3.504-13.141 0-3.504 3.503-3.504 9.638 0 13.142 3.503 3.504 9.638 3.504 13.141 0z" />
      <path d="M12 7.5V9" />
      <path d="M16 7.5l-1 1.732" />
      <path d="M8 7.5l1 1.732" />
    </svg>
  );
};

export const PlayIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
};
