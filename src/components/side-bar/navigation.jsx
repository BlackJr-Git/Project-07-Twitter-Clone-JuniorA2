// import { NavigationLink } from "./navigation-link";
import Logo from "./logo";
import NavigationLink from "./navigation-link";

function Navigation() {
  return (
    <aside>
    <div className="navbar">
        <Logo />

      <NavigationLink
        path={
          "M22.58 6.34998L12.475 0.896978C12.178 0.736978 11.821 0.736978 11.525 0.896978L1.42502 6.34998C0.939018 6.61398 0.758018 7.21998 1.02002 7.70598C1.20002 8.04098 1.54502 8.23098 1.90002 8.23098C2.06002 8.23098 2.22402 8.19298 2.37502 8.11098L3.10902 7.71498L4.69902 18.965C4.91502 20.179 6.00902 21.027 7.35902 21.027H16.641C17.991 21.027 19.085 20.179 19.303 18.939L20.891 7.71398L21.628 8.11198C22.113 8.37498 22.72 8.19398 22.982 7.70798C23.245 7.22198 23.062 6.61498 22.578 6.35298L22.58 6.34998ZM12 14.435C10.205 14.435 8.75002 12.98 8.75002 11.185C8.75002 9.38998 10.205 7.93498 12 7.93498C13.795 7.93498 15.25 9.38998 15.25 11.185C15.25 12.98 13.795 14.435 12 14.435Z"
        }
        linkTexte={"Home"}
      />
      <NavigationLink
        path={
          "M19 5.33698H15.07L15.442 1.06498C15.478 0.652982 15.172 0.289982 14.76 0.252982C14.343 0.222982 13.984 0.522982 13.948 0.935982L13.565 5.33598H7.245L7.615 1.06598C7.652 0.652982 7.345 0.289982 6.935 0.252982C6.515 0.222982 6.158 0.522982 6.122 0.935982L5.74 5.33598H1.782C1.368 5.33598 1.032 5.67298 1.032 6.08598C1.032 6.49898 1.368 6.83598 1.782 6.83598H5.61L5.06 13.163H1C0.586 13.163 0.25 13.499 0.25 13.913C0.25 14.327 0.586 14.663 1 14.663H4.93L4.558 18.935C4.522 19.347 4.828 19.71 5.24 19.747L5.306 19.75C5.691 19.75 6.018 19.455 6.052 19.064L6.435 14.664H12.755L12.385 18.934C12.349 19.347 12.655 19.71 13.067 19.747L13.133 19.75C13.518 19.75 13.845 19.455 13.879 19.064L14.261 14.664H18.218C18.631 14.664 18.968 14.327 18.968 13.914C18.968 13.501 18.631 13.164 18.218 13.164H14.39L14.94 6.83698H19C19.414 6.83698 19.75 6.50098 19.75 6.08698C19.75 5.67298 19.414 5.33698 19 5.33698ZM12.885 13.163H6.565L7.115 6.83698H13.435L12.885 13.163Z"
        }
        linkTexte={"Explore"}
      />
      <NavigationLink
        path={
          "M19.697 15.468C19.677 15.452 17.557 13.828 17.594 9.43799C17.614 6.90599 16.782 4.65599 15.247 3.10299C13.872 1.70999 12.01 0.939993 10.005 0.929993H9.99197C7.98798 0.939993 6.12597 1.70999 4.74997 3.10399C3.21597 4.65699 2.38197 6.90599 2.40397 9.43799C2.44097 13.768 0.383975 15.405 0.301975 15.468C0.0419748 15.661 -0.0640253 15.998 0.0369747 16.306C0.138975 16.614 0.426975 16.821 0.748975 16.821H5.66897C5.77098 19.131 7.66597 20.981 9.99897 20.981C12.332 20.981 14.225 19.131 14.326 16.821H19.248C19.57 16.821 19.858 16.615 19.958 16.307C20.061 16 19.955 15.662 19.695 15.469L19.697 15.468ZM9.99998 19.478C8.49498 19.478 7.26997 18.301 7.17197 16.82H12.828C12.728 18.3 11.505 19.48 9.99998 19.48V19.478ZM2.37997 15.32C3.11997 14.188 3.92797 12.292 3.90397 9.42399C3.88597 7.26399 4.54797 5.44199 5.81697 4.15699C6.90997 3.04999 8.39698 2.43699 9.99998 2.42999C11.603 2.43799 13.087 3.04999 14.18 4.15799C15.45 5.44299 16.113 7.26399 16.095 9.42499C16.071 12.293 16.88 14.19 17.62 15.321H2.37997V15.32Z"
        }
        linkTexte={"Notifications"}
      />
      <NavigationLink
        path={
          "M17.25 0.0180054H2.75C1.233 0.0180054 0 1.25201 0 2.77001V15.265C0 16.783 1.233 18.018 2.75 18.018H17.25C18.767 18.018 20 16.783 20 15.265V2.77001C20 1.25201 18.767 0.0180054 17.25 0.0180054ZM2.75 1.51801H17.25C17.94 1.51801 18.5 2.07801 18.5 2.76801V3.48201L10.45 8.84901C10.177 9.02901 9.824 9.03101 9.55 8.84701L1.5 3.48201V2.76801C1.5 2.07801 2.06 1.51801 2.75 1.51801ZM17.25 16.516H2.75C2.06 16.516 1.5 15.956 1.5 15.266V5.24001L8.74 10.07C9.123 10.326 9.562 10.454 10 10.454C10.44 10.454 10.877 10.326 11.26 10.071L18.5 5.24101V15.263C18.5 15.953 17.94 16.513 17.25 16.513V16.516Z"
        }
        linkTexte={"Messages"}
      />
      <NavigationLink
        path={
          "M16.9 20.5C16.743 20.5 16.588 20.45 16.458 20.356L8.99998 14.928L1.54198 20.358C1.31398 20.522 1.01198 20.548 0.759976 20.418C0.509976 20.291 0.349976 20.033 0.349976 19.751V2.60001C0.349976 1.36001 1.35998 0.350006 2.59998 0.350006H15.398C16.638 0.350006 17.648 1.36001 17.648 2.60001V19.75C17.648 20.032 17.49 20.29 17.238 20.418C17.132 20.473 17.015 20.5 16.898 20.5H16.9ZM8.99998 13.25C9.15497 13.25 9.30998 13.298 9.43998 13.394L16.15 18.277V2.60001C16.15 2.18801 15.813 1.85001 15.4 1.85001H2.59998C2.18698 1.85001 1.84998 2.18801 1.84998 2.60001V18.277L8.55998 13.394C8.68998 13.298 8.84498 13.25 8.99998 13.25Z"
        }
        linkTexte={"Bookmarks"}
      />
      <NavigationLink
        path2={
          "M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2H19.75C20.99 2 22 3.01 22 4.25V19.75C22 20.99 20.99 22 19.75 22ZM4.25 3.5C3.836 3.5 3.5 3.837 3.5 4.25V19.75C3.5 20.163 3.836 20.5 4.25 20.5H19.75C20.164 20.5 20.5 20.163 20.5 19.75V4.25C20.5 3.837 20.164 3.5 19.75 3.5H4.25Z"
        }
        path={
          "M17 8.64002H7C6.586 8.64002 6.25 8.30301 6.25 7.89001C6.25 7.47701 6.586 7.14001 7 7.14001H17C17.414 7.14001 17.75 7.47501 17.75 7.89001C17.75 8.30501 17.414 8.64002 17 8.64002ZM17 12.75H7C6.586 12.75 6.25 12.414 6.25 12C6.25 11.586 6.586 11.25 7 11.25H17C17.414 11.25 17.75 11.586 17.75 12C17.75 12.414 17.414 12.75 17 12.75ZM12 16.86H7C6.586 16.86 6.25 16.525 6.25 16.11C6.25 15.695 6.586 15.36 7 15.36H12C12.414 15.36 12.75 15.697 12.75 16.11C12.75 16.523 12.414 16.86 12 16.86Z"
        }
        linkTexte={"Lists"}
      />
      <NavigationLink
        path={
          "M9.00003 10.816C10.355 10.816 11.872 10.666 12.84 9.56001C13.654 8.63001 13.918 7.19201 13.646 5.16801C13.266 2.34301 11.529 0.656006 9.00003 0.656006C6.47103 0.656006 4.73403 2.34301 4.35403 5.17001C4.08203 7.19201 4.34603 8.63001 5.16003 9.56001C6.12803 10.667 7.64503 10.816 9.00003 10.816ZM5.84003 5.36801C6.00203 4.16801 6.62703 2.15601 9.00003 2.15601C11.373 2.15601 11.998 4.16901 12.16 5.36801C12.367 6.91801 12.217 7.99501 11.71 8.57301C11.255 9.09301 10.444 9.31601 9.00003 9.31601C7.55603 9.31601 6.74503 9.09301 6.29003 8.57301C5.78303 7.99501 5.63303 6.91701 5.84003 5.36801ZM17.28 18.236C16.403 14.71 12.998 12.246 9.00003 12.246C5.00203 12.246 1.59703 14.71 0.720027 18.236C0.548027 18.928 0.692027 19.636 1.11503 20.176C1.52303 20.696 2.15503 20.996 2.84803 20.996H15.152C15.845 20.996 16.477 20.696 16.885 20.176C17.309 19.636 17.452 18.929 17.279 18.236H17.28ZM15.704 19.252C15.578 19.412 15.388 19.498 15.152 19.498H2.84803C2.61303 19.498 2.42203 19.413 2.29603 19.252C2.15903 19.078 2.11603 18.84 2.17603 18.598C2.88603 15.743 5.69303 13.748 9.00003 13.748C12.307 13.748 15.114 15.742 15.824 18.598C15.884 18.84 15.841 19.078 15.704 19.252Z"
        }
        linkTexte={"Profile"}
      />
      <NavigationLink linkTexte={"More"} />
    </div>
    </aside>
  );
}

export default Navigation;
