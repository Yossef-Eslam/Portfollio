const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-footer py-6 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary-foreground/90 text-base">
          © {currentYear} يوسف إسلام - جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};

export default Footer;
