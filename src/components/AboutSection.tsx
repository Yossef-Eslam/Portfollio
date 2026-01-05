import { Database, Shield, Code } from 'lucide-react';

const skills = [
  {
    icon: Database,
    title: 'قواعد البيانات',
    description: 'خبرة في تصميم وإدارة قواعد البيانات المختلفة',
  },
  {
    icon: Code,
    title: 'البرمجة',
    description: 'تطوير تطبيقات الويب والبرمجيات المتنوعة',
  },
  {
    icon: Shield,
    title: 'الأمن السيبراني',
    description: 'حماية الأنظمة والشبكات من التهديدات الإلكترونية',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          من أنا
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="bg-card rounded-xl shadow-card p-6 text-center hover:scale-105 transition-transform duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 gradient-button rounded-full flex items-center justify-center">
                <skill.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
