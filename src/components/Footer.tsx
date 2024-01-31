import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-3 bg-primary text-primary-foreground flex flex-col items-center justify-center font-light text-sm">
      <Link to="/">
        <img src="./images/logo.webp" className="h-12 object-cover" />
      </Link>
      &copy; 2024 みずまんま
    </footer>
  );
};

export default Footer;
