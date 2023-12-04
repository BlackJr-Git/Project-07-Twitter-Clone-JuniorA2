function SvgFile({path, stroke}) {
  return (
    <svg
      width="18"
      height="17"
      stroke={stroke}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={path}
        fill="#F5F5F5"
      />
    </svg>
  );
}


export default SvgFile;
