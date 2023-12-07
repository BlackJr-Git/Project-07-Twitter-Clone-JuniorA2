function SvgFile({ path, path2 }) {
  return (
    <svg
      width="34"
      height="35"
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect y="0.5" width="34" height="34" rx="17" fill="" />
      <path
        d={path}
        fill="#6E767D"
      />
      <path
        d={path2}
        fill="#6E767D"
      />
    </svg>
  );
}

export default SvgFile;
