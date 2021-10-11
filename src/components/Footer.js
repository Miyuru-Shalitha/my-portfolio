import React, { useEffect, useState } from "react";

function Footer() {
  const [currentYear, setCurrentYear] = useState(2021);

  useEffect(() => {
    const today = new Date();

    setCurrentYear(today.getFullYear());
  }, []);

  return (
    <footer className="footer">
      <p>Copyright {currentYear} &copy; by D.D.M.S.P.Gunawardhana.</p>
    </footer>
  );
}

export default Footer;
