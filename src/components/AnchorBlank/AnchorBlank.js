function AnchorBlank({ href, children, ...props }) {
  return (
    <a
      className="nav-link"
      href={href}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

export default AnchorBlank;
