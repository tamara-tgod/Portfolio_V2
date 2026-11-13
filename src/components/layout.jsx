import { Routes, Route, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/cv" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </>
  );
}

export default Layout;