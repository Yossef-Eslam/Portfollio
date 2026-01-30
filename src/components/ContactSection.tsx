import { motion } from 'framer-motion';
import { Mail, Send, User, MessageSquare, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mrbqqqaq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-3.5 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl border border-primary/8 bg-card/40 backdrop-blur-sm text-foreground focus:ring-2 focus:ring-primary/15 focus:border-primary/25 transition-all duration-500 ease-out placeholder:text-muted-foreground/40 text-sm sm:text-base touch-manipulation";

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-to-t from-primary/6 to-transparent rounded-full blur-[60px] sm:blur-[80px] md:blur-[120px]" />
      </div>

      <div className="max-w-xl sm:max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-primary/6 text-primary text-[10px] sm:text-xs md:text-sm font-medium mb-3 sm:mb-4 border border-primary/12"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-playfair"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-foreground">Contact </span>
            <span className="text-gradient">Me</span>
          </motion.h2>
        </motion.div>

        <motion.div 
          className="glass-card rounded-xl sm:rounded-2xl md:rounded-3xl shadow-card p-5 sm:p-6 md:p-8 lg:p-10 border border-primary/6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6" dir="ltr">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <label htmlFor="name" className="flex items-center gap-1.5 sm:gap-2 text-foreground/85 font-medium mb-2 sm:mb-2.5 md:mb-3 text-xs sm:text-sm md:text-base">
                <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary/70" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClasses}
                placeholder="Enter your name"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              <label htmlFor="email" className="flex items-center gap-1.5 sm:gap-2 text-foreground/85 font-medium mb-2 sm:mb-2.5 md:mb-3 text-xs sm:text-sm md:text-base">
                <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary/70" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClasses}
                placeholder="Enter your email"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              <label htmlFor="message" className="flex items-center gap-1.5 sm:gap-2 text-foreground/85 font-medium mb-2 sm:mb-2.5 md:mb-3 text-xs sm:text-sm md:text-base">
                <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary/70" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClasses} resize-none`}
                placeholder="Write your message here..."
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              className="pt-1 sm:pt-2"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl gradient-button text-primary-foreground font-semibold text-sm sm:text-base shadow-button flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-70 transition-all duration-500 touch-manipulation"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : isSuccess ? (
                  <>
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Sent Successfully
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    Send Mail
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
