
export const PlainLayouts = ({ children }) => {
  return (
    <>      
      <main className="site-main">
        <div className="container mx-auto">{children}</div>
      </main>
    </>
  );
};