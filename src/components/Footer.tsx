const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center text-muted-foreground">
          <p className="font-semibold text-foreground mb-2">Rellatech</p>
          <p className="text-sm mb-1">Smart Support. Real Results.</p>
          <p className="text-sm">© {new Date().getFullYear()} Rellatech. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
