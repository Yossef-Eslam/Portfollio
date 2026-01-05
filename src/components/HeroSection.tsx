const HeroSection = () => {
  return (
    <section className="gradient-hero min-h-[45vh] flex flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in">
        يوسف إسلام الطوخي
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        يعمل في مجال تكنولوجيا المعلومات | مهتم بالأمن السيبراني
      </p>
    </section>
  );
};

export default HeroSection;
