import { FunctionComponent } from "react";

export const Facebook: FunctionComponent<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 64 64"
    {...props}
    className="fill-white hover:fill-amber-500"
  >
    <path d="M48,7H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h17V38h-6v-7h6v-5c0-7,4-11,10-11c3.133,0,5,1,5,1v6h-4 c-2.86,0-4,2.093-4,4v5h7l-1,7h-6v17h8c4.418,0,8-3.582,8-8V15C56,10.582,52.418,7,48,7z"></path>
  </svg>
);
