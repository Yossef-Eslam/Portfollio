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

  const inputClasses = "w-full px-4 sm:px-5 py-3 sm:py-4 rounded-2xl border border-primary/10 bg-card/50 backdrop-blur-sm text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all duration-500 ease-out placeholder:text-muted-foreground/50 text-sm sm:text-base";

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-gradient-to-t from-primary/8 to-transparent rounded-full blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-xs sm:text-sm font-medium mb-4 border border-primary/15"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-foreground">Contact </span>
            <span className="text-gradient">Me</span>
          </motion.h2>
        </motion.div>

        <motion.div 
          className="glass-card rounded-2xl sm:rounded-3xl shadow-card p-6 sm:p-8 md:p-10 border border-primary/8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" dir="ltr">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            >
              <label htmlFor="name" className="flex items-center gap-2 text-foreground/90 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary/80" />
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            >
              <label htmlFor="email" className="flex items-center gap-2 text-foreground/90 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary/80" />
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            >
              <label htmlFor="message" className="flex items-center gap-2 text-foreground/90 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary/80" />
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="pt-2"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full py-3 sm:py-4 rounded-2xl gradient-button text-primary-foreground font-semibold text-sm sm:text-base shadow-button flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-70 transition-all duration-500"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
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