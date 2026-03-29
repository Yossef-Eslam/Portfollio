import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Bot, MessageSquare, LayoutDashboard, Wrench, ChevronDown, Zap } from 'lucide-react';

interface Workflow {
  name: string;
  details?: string[];
  outcome?: string;
}

interface ProjectCategory {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  workflows?: Workflow[];
  advancedItems?: string[];
  advancedOutcome?: string;
  tools?: string[];
  outcome?: string;
}

const categories: ProjectCategory[] = [
  {
    id: 'zaps',
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    title: 'ZAPS',
    subtitle: 'Operational Workflows for Revenue Protection & Automation',
    description: 'Precision-built automation architectures designed to eliminate operational friction, synchronize data ecosystems, and protect revenue across marketing, sales, and finance.',
    workflows: [
      { name: 'Failed Payment Recovery Architecture', outcome: 'Reduced revenue leakage and improved collection rates.' },
      { name: 'New Lead → CRM → Slack Alert System', outcome: 'Immediate lead visibility and faster sales response.' },
      { name: 'Add New Subscribers to Google Sheets', outcome: 'Centralized list growth tracking.' },
      { name: 'Welcome Email Automation', outcome: 'Increased engagement and conversion momentum.' },
      { name: 'Save Gmail Attachments to Google Drive', outcome: 'Zero manual file handling.' },
      { name: 'Create Trello Cards from Client Forms', outcome: 'Seamless project initiation workflow.' },
      { name: 'Auto-Generate Invoices After Purchase', outcome: 'Automated financial documentation.' },
      { name: 'WhatsApp Booking Notifications', outcome: 'Faster booking coordination.' },
      { name: '24-Hour Survey Follow-Up System', outcome: 'Higher feedback collection rates.' },
      { name: 'Instagram Backup to Dropbox', outcome: 'Content redundancy and asset protection.' },
      { name: 'CRM Update on Email Link Click', outcome: 'Behavioral-based sales follow-up.' },
      { name: 'Auto-Publish YouTube Videos to Telegram', outcome: 'Cross-channel content amplification.' },
      { name: 'WordPress Blog → LinkedIn Distribution', outcome: 'Consistent professional visibility.' },
      { name: 'WhatsApp Itinerary Delivery After Payment', outcome: 'Instant value delivery.' },
    ],
    advancedItems: [
      'Auto-Tag Leads by Country Using Conditional Paths',
      'Validate Email Addresses Before CRM Entry',
      'Send Custom Emails Based on Purchase Value',
      'Create Google Calendar Events for VIP Bookings Only',
      'Generate Client PDFs and Email Automatically',
      'Parse Full Names & Format Phone Numbers',
      'Webhook Trigger → Parse JSON → Store in Airtable',
      'Sync Instagram Bio Data into CRM',
      'Mini Approval Flow via Email/Webhook',
      'Overdue Task Detection with Date Logic',
      'Push eBook Purchase Data into CRM via Webhook + Parser',
      'Generate Dynamic QR Codes for Bookings',
      'Alert if Instagram Follower Count Drops',
      'Update Notion or Coda with Sales Metrics',
      'Build Custom Lead Scoring Using Code Logic',
    ],
    advancedOutcome: 'Enterprise-grade workflow orchestration with conditional intelligence, parsing, validation, and decision layers.',
  },
  {
    id: 'ai-agents',
    icon: <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    title: 'AI Agents',
    subtitle: 'Autonomous Decision Systems Driving Intelligent Operations',
    description: 'AI-powered agents engineered to analyze, classify, respond, and execute workflows using contextual reasoning and structured business logic.',
    workflows: [
      { name: 'Medical Tourism Inquiry Intelligence Agent' },
      { name: 'Intelligent Payment Monitoring Agent' },
      { name: 'Daily Stripe Sales Intelligence Agent' },
      { name: 'Smart Digital Fulfillment Agent' },
      { name: 'Geo-Intent Lead Response Agent' },
      { name: 'Lead Classification Intelligence Agent' },
      { name: 'Email Routing Decision Agent' },
      { name: 'Course Onboarding Guidance Agent' },
      { name: 'Social Content Lifecycle Agent' },
      { name: 'Client Satisfaction Monitoring Agent' },
      { name: 'Daily Calendar Intelligence Agent' },
      { name: 'Pre-CRM Qualification Agent' },
    ],
    outcome: 'AI-driven operational acceleration, intelligent routing, and automated decision-making at scale.',
  },
  {
    id: 'chatbots',
    icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    title: 'Chatbots',
    subtitle: 'Conversational Intelligence for Qualification & Conversion',
    description: 'AI-powered chat systems integrated with backend platforms for real-time qualification, routing, and structured data capture.',
    workflows: [
      { name: 'Product Availability Verification (Airtable Integration)' },
      { name: 'Conversation Summary → Email/CRM Sync' },
      { name: 'AI Qualification & Smart Routing Engine' },
    ],
    outcome: 'Higher-quality leads, automated qualification, and optimized funnel efficiency.',
  },
  {
    id: 'canvas',
    icon: <LayoutDashboard className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    title: 'Canvas Systems',
    subtitle: 'End-to-End Automation Architectures for Scalable Growth',
    description: 'Structured system blueprints combining AI logic, workflow automation, engagement sequencing, and operational monitoring.',
    workflows: [
      { name: 'Dynamic Trip Itinerary Generation System' },
      { name: 'Full Client Onboarding Journey Architecture' },
      { name: '24-Hour Follow-Up & Re-Engagement Engine' },
      { name: 'Client Satisfaction Survey Analyzer' },
      { name: 'Daily Calendar Digest & Reminder Framework' },
      { name: '3-Question Email Qualification System' },
    ],
    outcome: 'Predictable, scalable, and intelligence-driven business systems.',
  },
  {
    id: 'tools',
    icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    title: 'Working With',
    subtitle: 'Platforms & Integrations',
    description: 'A comprehensive ecosystem of tools and platforms I integrate with to build powerful automation solutions.',
    tools: [
      'Calendly', 'Gmail', 'Google Drive', 'Webhooks by Zapier', 'LinkedIn', 'Instagram',
      'Facebook', 'Mailchimp', 'Google Sheets', 'Pipedrive', 'Stripe', 'Google Docs',
      'Webhook API', 'Trello', 'Twitter (X)', 'Typeform', 'Slack', 'YouTube',
      'Telegram', 'Airtable', 'Google Calendar', 'Microsoft Outlook CRM', 'Dropbox',
      'OneDrive', 'HubSpot', 'Shopify', 'Microsoft Excel', 'Microsoft Power BI',
      'Ring', 'Zendesk', 'Salesforce', 'Notion', 'Coda', 'WordPress',
      'WhatsApp', 'SMS', 'PhantomBuster', 'Pabbly', 'Flipsnack', 'Zapier',
    ],
  },
];

const websiteProjects = [
  {
    title: "Talksy CX",
    description: "An intelligent customer experience platform delivering seamless conversational solutions for businesses.",
    url: "https://www.talksy-cx.com/",
    tags: ["Web Development", "CX Platform", "Conversational AI"],
  },
  {
    title: "Brand Builders GCC",
    description: "A comprehensive branding and digital solutions platform serving businesses across the GCC region.",
    url: "https://www.brandbuildersgcc.com/",
    tags: ["Web Development", "Branding", "Digital Solutions"],
  },
];

const CategoryCard = ({ category, index }: { category: ProjectCategory; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      className="glass-card rounded-2xl sm:rounded-3xl border border-primary/8 shadow-card overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 sm:p-6 md:p-8 flex items-start gap-4 sm:gap-5 text-left group"
      >
        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          {category.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {category.title}
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">
            {category.subtitle}
          </p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 pt-0">
              <div className="border-t border-primary/8 pt-4 sm:pt-5">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {category.description}
                </p>

                {/* Workflows */}
                {category.workflows && (
                  <div className="space-y-2 mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-3">
                      {category.id === 'zaps' ? 'Core Workflows' : 'Systems'}
                    </h4>
                    <div className="grid gap-2">
                      {category.workflows.map((w) => (
                        <div key={w.name} className="flex items-start gap-2.5 group/item">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <span className="text-foreground/90 text-sm font-medium">{w.name}</span>
                            {w.outcome && (
                              <p className="text-muted-foreground text-xs mt-0.5">{w.outcome}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Advanced Items for ZAPS */}
                {category.advancedItems && (
                  <div className="mt-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-3">
                      Advanced Logic-Driven Automation
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {category.advancedItems.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-full bg-primary/6 text-foreground/70 text-xs border border-primary/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    {category.advancedOutcome && (
                      <p className="text-primary/70 text-xs mt-3 italic">{category.advancedOutcome}</p>
                    )}
                  </div>
                )}

                {/* Tools grid */}
                {category.tools && (
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-xl bg-primary/8 text-foreground/80 text-xs font-medium border border-primary/12 hover:bg-primary/15 hover:text-primary transition-colors duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                {/* Outcome */}
                {category.outcome && (
                  <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-primary text-xs sm:text-sm font-medium">
                      ✦ {category.outcome}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair mb-3 sm:mb-4">
            <span className="text-foreground">Projects & </span>
            <span className="text-gradient">Automation</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
            Systems engineered for intelligent execution & scalable growth
          </p>
        </motion.div>

        {/* Website Projects */}
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
          {websiteProjects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-primary/8 shadow-card group cursor-pointer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 sm:px-3 py-1 rounded-full bg-primary/8 text-primary text-xs font-medium border border-primary/12">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Category Cards */}
        <div className="space-y-3 sm:space-y-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
