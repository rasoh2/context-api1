import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <p>&copy; {new Date().getFullYear()} Photography </p>
      </div>
    </footer>
  );
};

export default Footer;
