function SectionContainer({ children }) {
  return (
    <section className="container min-vh-100 p-3 d-flex flex-column justify-content-center">
      {children}
    </section>
  );
}

export default SectionContainer;
