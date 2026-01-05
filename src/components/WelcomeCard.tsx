const WelcomeCard = () => {
  return (
    <section id="home" className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 animate-slide-up">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            مرحباً بك في موقعي الشخصي
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-center mb-4">
            أنا يوسف، مهندس في مجال تكنولوجيا المعلومات ومهتم بمجالات قواعد البيانات، البرمجة، والأمن السيبراني.
          </p>
          <p className="text-muted-foreground text-lg text-center">
            تصفح الموقع لتتعرف عليّ أكثر!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeCard;
