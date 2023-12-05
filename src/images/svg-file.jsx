function SvgFile({ path, stroke }) {
  return (
    // <svg
    //   width="18"
    //   height="17"
    //   stroke={stroke}
    //   viewBox="0 0 18 17"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d={path}
    //     fill="#F5F5F5"
    //   />
    // </svg>

    <svg
      width="34"
      height="35"
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="34" height="34" rx="17" fill="" />
      <path
        d={path}
        fill="#6E767D"
      />
    </svg>
  );
}

export default SvgFile;
