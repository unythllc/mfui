import { IconProps } from "@/types/iconType";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(235, 86, 84, 1)",
  },
};

export const MFUILogo = ({ className }: IconProps) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    className={"fill-current " + className}
    viewBox="0 0 25.73 49.53"
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1, ease: "easeInOut" },
            fill: { duration: 1, ease: [1, 0, 0.8, 1] },
          }}
          className="cls-1"
          d="M21.21,8.17V21.75L7.11,4.42,3.6,7.28l.73.89H1V29.08H25.73V8.17ZM5.51,9.62,17.66,24.56H5.51Zm7.85,34.86,12.37-6.15v11.2H21.21v-3.9l-7.85,3.9-7.85-3.9v3.9H1V38.33ZM2.49,5.92,0,2.85,3.51,0,6,3.06ZM10,33.24l-.71,1.59,1.77.87V34.26h4.52V35.7l3.7-1.83,2,4.05-8,3.95L3.44,37,5.9,31.41Z"
        />
      </g>
    </g>
  </motion.svg>
);

export const CartIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={"fill-current " + className}
    viewBox="0 0 49.49 40.47"
  >
    {/* <defs><style>.cls-1{fill:#010203;}</style></defs> */}
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          className="cls-1"
          d="M48,6H9.23L7.12.94A1.51,1.51,0,0,0,5.72,0h-4A1.73,1.73,0,0,0,0,1.63,1.68,1.68,0,0,0,1.68,3.36H4.49l12,28.81a1.51,1.51,0,0,0,1.4.94H42a1.73,1.73,0,0,0,1.75-1.63,1.69,1.69,0,0,0-1.68-1.73H19.11L18,27,43.3,23.51a1.54,1.54,0,0,0,1.24-1L49.41,8A1.52,1.52,0,0,0,48,6Z"
        />
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          className="cls-1"
          cx="39.61"
          cy="37.44"
          r="3.03"
          transform="translate(-13.77 26.42) rotate(-31.72)"
        />
        <motion.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          className="cls-1"
          cx="21.69"
          cy="37.44"
          r="3.03"
        />
      </g>
    </g>
  </svg>
);

// React Icon
export const ReactIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={"fill-current " + className}
    viewBox="0 0 49.49 44.08"
  >
    {/* <defs><style>.cls-1{fill:#010203;}</style></defs> */}
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <circle className="cls-1" cx="24.75" cy="22.04" r="4.56" />
        <path
          className="cls-1"
          d="M49.49,22c0-3.41-4.12-6.44-10.43-8.27,1.56-6.39,1-11.47-2-13.18S29.48.94,24.75,5.48C20,.94,15.36-1.11,12.4.59s-3.52,6.79-2,13.18C4.12,15.6,0,18.63,0,22s4.12,6.44,10.43,8.28c-1.55,6.39-1,11.47,2,13.17s7.62-.35,12.35-4.88c4.73,4.53,9.39,6.58,12.34,4.88s3.53-6.78,2-13.17C45.37,28.48,49.49,25.46,49.49,22ZM28.68,5.13c3.06-2.37,5.84-3.34,7.25-2.52s2,3.7,1.46,7.54a28.17,28.17,0,0,1-.58,3,50.84,50.84,0,0,0-6.35-1,50.21,50.21,0,0,0-4.09-5C27.15,6.4,27.92,5.73,28.68,5.13Zm-14,19.66c.4.77.82,1.54,1.27,2.31s.9,1.54,1.37,2.28c-.61-.08-1.22-.18-1.82-.28-.76-.13-1.49-.28-2.21-.44q.33-1.05.72-2.13C14.23,26,14.46,25.37,14.69,24.79ZM13.3,15.42c.72-.16,1.45-.31,2.21-.44l1.82-.28c-.47.74-.93,1.5-1.37,2.28s-.87,1.54-1.27,2.31c-.23-.58-.46-1.16-.67-1.73C13.76,16.83,13.52,16.12,13.3,15.42ZM15.91,22c.63-1.3,1.31-2.61,2.06-3.9s1.53-2.55,2.35-3.75c1.45-.11,2.93-.17,4.43-.17s3,.06,4.42.17q1.23,1.8,2.36,3.75c.74,1.29,1.43,2.6,2,3.9-.62,1.31-1.31,2.61-2,3.9S30,28.5,29.17,29.69c-1.45.12-2.92.17-4.42.17s-3-.05-4.43-.17c-.82-1.19-1.6-2.45-2.35-3.75S16.54,23.35,15.91,22ZM33.54,27.1q.66-1.16,1.26-2.31c.24.58.46,1.16.67,1.74s.51,1.43.72,2.13c-.71.16-1.45.31-2.21.44-.6.1-1.21.2-1.82.28Q32.87,28.27,33.54,27.1Zm1.26-7.81q-.6-1.16-1.26-2.31T32.16,14.7L34,15c.76.13,1.5.28,2.21.44-.21.7-.45,1.41-.72,2.14C35.26,18.13,35,18.71,34.8,19.29Zm-10-10.5c.5.55,1,1.12,1.51,1.73s.77.94,1.15,1.44c-.88,0-1.76-.06-2.66-.06s-1.79,0-2.66.06c.37-.5.76-1,1.15-1.44S24.24,9.34,24.75,8.79ZM13.56,2.61c1.41-.82,4.19.15,7.25,2.52.77.6,1.54,1.27,2.31,2a50.17,50.17,0,0,0-4.08,5,51,51,0,0,0-6.36,1c-.25-1-.45-2.06-.58-3C11.59,6.31,12.15,3.42,13.56,2.61ZM11.05,28.08a29.29,29.29,0,0,1-2.92-1c-3.58-1.47-5.81-3.4-5.81-5s2.23-3.55,5.81-5c.91-.37,1.88-.71,2.92-1a49.59,49.59,0,0,0,2.3,6A49.59,49.59,0,0,0,11.05,28.08ZM20.81,39c-3.06,2.37-5.84,3.34-7.25,2.53s-2-3.71-1.46-7.54c.13-1,.33-2,.58-3a49.22,49.22,0,0,0,6.36,1,50.17,50.17,0,0,0,4.08,5A27.45,27.45,0,0,1,20.81,39Zm3.94-3.66c-.51-.55-1-1.12-1.51-1.72s-.78-1-1.15-1.44c.87,0,1.76.06,2.66.06s1.78,0,2.66-.06c-.38.49-.76,1-1.15,1.44S25.25,34.74,24.75,35.29Zm11.18,6.19c-1.41.81-4.19-.16-7.25-2.53-.76-.59-1.53-1.26-2.31-2a50.21,50.21,0,0,0,4.09-5,49.06,49.06,0,0,0,6.35-1,28.33,28.33,0,0,1,.58,3C37.91,37.77,37.35,40.66,35.93,41.48Zm5.44-14.41a29.5,29.5,0,0,1-2.93,1,49.59,49.59,0,0,0-2.3-6,49.59,49.59,0,0,0,2.3-6c1,.31,2,.65,2.93,1,3.58,1.47,5.8,3.39,5.8,5S45,25.6,41.37,27.07Z"
        />
      </g>
    </g>
  </svg>
);

// HTML Icon
export const HtmlIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={"fill-current " + className}
    viewBox="0 0 43.7 49.49"
  >
    {/* <defs><style>.cls-1{fill:#010203;}</style></defs> */}
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          className="cls-1"
          d="M8.2,9.07H35.49L35,14.76H14.16l.46,5.48H34.56L33.14,37.08l-11.29,3-11.29-3-.73-8.67h5.48l.37,4.38,6.17,1.66L28,32.79l.58-6.87h-19ZM21.85,0H0L3.91,44.55l17.94,4.94,17.93-4.94L43.7,0ZM36.31,41.66l-14.46,4-14.47-4L4.05,3.71h35.6Z"
        />
      </g>
    </g>
  </svg>
);

// TAILWIND Icon
export const TailwindIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={"fill-current " + className}
    viewBox="0 0 49.49 29.65"
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          className="cls-1"
          d="M30.35,23.52c-7.26,0-6.56-8.75-18.23-8.75A11.76,11.76,0,0,0,0,24.53s2.57-3.94,6.46-3.94c7,0,8.17,9.06,18.29,9.06a12,12,0,0,0,12.37-10S34.77,23.52,30.35,23.52Z"
        />
        <path
          className="cls-1"
          d="M42.72,8.75C35.46,8.75,36.16,0,24.5,0A11.75,11.75,0,0,0,12.38,9.76S15,5.82,18.83,5.82c7,0,8.17,9.07,18.29,9.07a12,12,0,0,0,12.37-10A8.49,8.49,0,0,1,42.72,8.75Z"
        />
      </g>
    </g>
  </svg>
);

// Info Icon
export const InfoIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={"fill-current " + className}
    viewBox="0 0 18.51 49.49"
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <circle className="cls-1" cx="11.72" cy="5.93" r="5.93" />
        <path
          className="cls-1"
          d="M13.55,45.06,17,19.74a3.92,3.92,0,0,0-3.89-4.46H1.7A1.7,1.7,0,0,0,0,17H0a1.08,1.08,0,0,0,1.08,1.08H3.52A1.46,1.46,0,0,1,5,19.72L1.48,45a3.92,3.92,0,0,0,3.89,4.46H16.81a1.7,1.7,0,0,0,1.7-1.7h0a1.07,1.07,0,0,0-1.08-1.07H15A1.46,1.46,0,0,1,13.55,45.06Z"
        />
      </g>
    </g>
  </svg>
);

// User Icon
export const UserIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={"fill-current " + className}
    viewBox="0 0 49.49 49.49"
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          className="cls-1"
          d="M24.75,0A24.75,24.75,0,1,0,49.49,24.75,24.75,24.75,0,0,0,24.75,0Zm0,9.45A9.53,9.53,0,1,1,15.21,19,9.53,9.53,0,0,1,24.75,9.45Zm0,37A21.62,21.62,0,0,1,9.12,39.8c1.65-4,6-8,15.63-8s14,4.05,15.62,8A21.62,21.62,0,0,1,24.75,46.44Z"
        />
      </g>
    </g>
  </svg>
);

// Close Icon
export const CloseIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={"fill-current " + className}
    viewBox="0 0 47.87 49.49"
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <path
          // class="cls-1"
          d="M46.53,41.74l-17-17a.06.06,0,0,1,0-.06L46.19,8a4.77,4.77,0,0,0,.45-6.36,4.61,4.61,0,0,0-6.78-.31L24,17.24s0,0-.06,0L8.18,1.51a4.75,4.75,0,0,0-6.36-.44,4.59,4.59,0,0,0-.3,6.77L18.35,24.67s0,0,0,.06l-17,17A4.55,4.55,0,0,0,0,45a4.6,4.6,0,0,0,1.2,3.1,4.78,4.78,0,0,0,6.82,0L23.91,32.16H24L39.85,48.05a4.78,4.78,0,0,0,6.82,0,4.6,4.6,0,0,0,1.2-3.1A4.54,4.54,0,0,0,46.53,41.74Z"
        />
      </g>
    </g>
  </svg>
);
