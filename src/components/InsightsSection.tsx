import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Tag, X, Link2, Linkedin, Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface ArticleSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: { label: string; text: string }[];
  code?: { language: string; snippet: string };
}

interface Article {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  excerpt: string;
  sections: ArticleSection[];
}

const articles: Article[] = [
  {
    slug: 'security-first-development',
    title: 'Security-First Development: Why a "Working" Site Isn\'t Enough',
    category: 'Cybersecurity / Engineering',
    readingTime: '4 min read',
    excerpt:
      'In the modern threat landscape, functionality without security is a liability. A look at the "Secure by Design" philosophy through the lens of a Red Teamer.',
    sections: [
      {
        paragraphs: [
          'In the modern threat landscape, functionality without security is a liability. Drawing from my experience in Red Teaming and penetration testing, I advocate for the "Secure by Design" philosophy — security is not a feature you bolt on, it is the foundation you build on.',
        ],
      },
      {
        heading: 'Key Takeaways',
        bullets: [
          {
            label: 'Beyond the OWASP Top 10',
            text: 'While protecting against SQLi and XSS is fundamental, modern apps must address complex business logic vulnerabilities and API security.',
          },
          {
            label: "The Attacker's Perspective",
            text: 'My approach to development involves constant self-auditing. Before a feature goes live, I analyze it through the lens of an exploit developer.',
          },
          {
            label: 'Privacy as a Feature',
            text: "Encryption and data integrity aren't 'extras' — they are the foundation of user trust, especially in automated communication platforms like Talksy CX.",
          },
        ],
      },
      {
        heading: 'Example: Hardening an API Endpoint',
        paragraphs: [
          'A simple authorization check that validates ownership before responding can prevent an entire class of IDOR vulnerabilities:',
        ],
        code: {
          language: 'typescript',
          snippet: `// Always validate ownership server-side
app.get('/api/orders/:id', requireAuth, async (req, res) => {
  const order = await db.orders.findById(req.params.id);
  if (!order || order.userId !== req.user.id) {
    return res.status(404).json({ error: 'Not found' });
  }
  return res.json(order);
});`,
        },
      },
    ],
  },
  {
    slug: 'automation-alpha',
    title: 'The Automation Alpha: Architecting 24/7 Operations',
    category: 'Automation / AI',
    readingTime: '4 min read',
    excerpt:
      'Automation is more than connecting apps — it is creating an Autonomous Digital Workforce that runs around the clock.',
    sections: [
      {
        paragraphs: [
          'Automation is more than just connecting apps; it\'s about creating an "Autonomous Digital Workforce." By leveraging Zapier, Make, and custom-built API bridges, I transform fragmented manual tasks into seamless, error-free workflows.',
        ],
      },
      {
        heading: 'Why it matters',
        bullets: [
          {
            label: 'Operational Efficiency',
            text: 'Redirecting human talent from data entry to creative strategy saves businesses 20+ hours per week on average.',
          },
          {
            label: 'Real-time Synchronization',
            text: 'In projects like Talksy CX, automation ensures that customer data flows instantly between CRM, AI agents, and communication channels.',
          },
          {
            label: 'Revenue Protection',
            text: 'Automated lead routing and follow-ups ensure no opportunity is lost to human delay.',
          },
        ],
      },
      {
        heading: 'Example: Webhook → CRM Sync',
        code: {
          language: 'javascript',
          snippet: `// Normalize an incoming lead and push it into the CRM
export async function handleLead(payload) {
  const lead = {
    name: payload.full_name?.trim(),
    email: payload.email?.toLowerCase(),
    source: payload.utm_source ?? 'organic',
  };
  await crm.contacts.upsert(lead);
  await slack.notify('#sales', \`New lead: \${lead.name}\`);
}`,
        },
      },
    ],
  },
  {
    slug: 'flamingo-case-study',
    title: 'Scale & Aesthetics: A Case Study on Flamingo Natural Cosmetics',
    category: 'Web Development / Case Study',
    readingTime: '3 min read',
    excerpt:
      'Building a luxury e-commerce platform required a delicate balance between high-end visual branding and technical performance.',
    sections: [
      {
        paragraphs: [
          'Building a luxury e-commerce platform like Flamingo required a delicate balance between high-end visual branding and technical performance.',
        ],
      },
      {
        heading: 'Technical Highlights',
        bullets: [
          {
            label: 'Performance Optimization',
            text: 'Implemented advanced lazy-loading and image optimization to ensure lightning-fast load times without compromising visual fidelity.',
          },
          {
            label: 'Mobile-First UX',
            text: 'With over 80% of retail traffic coming from mobile devices, the interface was engineered for thumb-friendly navigation and a frictionless checkout flow.',
          },
          {
            label: 'Scalable Infrastructure',
            text: 'The architecture was built to handle sudden traffic spikes during marketing campaigns, ensuring stability under heavy load.',
          },
        ],
      },
      {
        heading: 'Snippet: Responsive Image Loading',
        code: {
          language: 'tsx',
          snippet: `<img
  src={product.image}
  srcSet={\`\${product.image_sm} 480w, \${product.image_md} 1024w\`}
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"
  decoding="async"
  alt={product.name}
/>`,
        },
      },
    ],
  },
];

const CATEGORIES = ['All', ...Array.from(new Set(articles.map((a) => a.category)))];

const CodeBlock = ({ language, snippet }: { language: string; snippet: string }) => (
  <div className="my-4 rounded-xl overflow-hidden border border-gold-subtle bg-[hsl(30,10%,4%)]">
    <div className="flex items-center justify-between px-4 py-2 border-b border-gold-subtle bg-[hsl(30,10%,6%)]">
      <span className="text-[10px] uppercase tracking-widest text-primary/70 font-mono">{language}</span>
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
      </div>
    </div>
    <pre className="p-4 overflow-x-auto text-xs sm:text-sm leading-relaxed">
      <code className="font-mono text-foreground/90 whitespace-pre">{snippet}</code>
    </pre>
  </div>
);

const InsightsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openArticle, setOpenArticle] = useState<Article | null>(null);
  const [copied, setCopied] = useState(false);

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? articles
        : articles.filter((a) => a.category === activeCategory),
    [activeCategory],
  );

  const buildShareUrl = (slug: string) => {
    if (typeof window === 'undefined') return '';
    return `${window.location.origin}${window.location.pathname}#insights/${slug}`;
  };

  const handleCopy = async (slug: string) => {
    try {
      await navigator.clipboard.writeText(buildShareUrl(slug));
      setCopied(true);
      toast({ title: 'Link copied', description: 'Article link copied to clipboard.' });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: 'Copy failed', description: 'Please copy manually.' });
    }
  };

  const handleLinkedIn = (article: Article) => {
    const url = encodeURIComponent(buildShareUrl(article.slug));
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <section id="insights" className="py-16 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-3 text-gradient">
            Insights & Case Studies
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-sm sm:text-base">
            Field notes from the intersection of cybersecurity, automation, and scalable software architecture.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground border-primary shadow-button'
                  : 'bg-card/40 text-foreground/70 border-gold-subtle hover:border-gold hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((article, idx) => (
              <motion.article
                key={article.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group glass-card rounded-2xl p-6 flex flex-col cursor-pointer shadow-card hover:-translate-y-1 transition-transform"
                onClick={() => setOpenArticle(article)}
              >
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  <Badge
                    variant="outline"
                    className="border-gold text-primary bg-primary/5 gap-1"
                  >
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </Badge>
                  <span className="inline-flex items-center gap-1 text-[11px] text-foreground/50">
                    <Clock className="w-3 h-3" />
                    {article.readingTime}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 leading-snug group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed flex-1">
                  {article.excerpt}
                </p>
                <span className="mt-5 text-sm font-medium text-primary inline-flex items-center gap-1">
                  Read article →
                </span>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Article Dialog */}
      <Dialog open={!!openArticle} onOpenChange={(o) => !o && setOpenArticle(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-gold-subtle">
          {openArticle && (
            <>
              <DialogHeader className="text-left">
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <Badge variant="outline" className="border-gold text-primary bg-primary/5 gap-1">
                    <Tag className="w-3 h-3" />
                    {openArticle.category}
                  </Badge>
                  <span className="inline-flex items-center gap-1 text-xs text-foreground/50">
                    <Clock className="w-3 h-3" />
                    {openArticle.readingTime}
                  </span>
                </div>
                <DialogTitle className="text-2xl sm:text-3xl font-bold leading-tight text-gradient">
                  {openArticle.title}
                </DialogTitle>
                <DialogDescription className="sr-only">{openArticle.excerpt}</DialogDescription>
              </DialogHeader>

              <article className="mt-4 space-y-6">
                {openArticle.sections.map((sec, i) => (
                  <div key={i}>
                    {sec.heading && (
                      <h4 className="text-lg font-semibold mb-3 text-primary">{sec.heading}</h4>
                    )}
                    {sec.paragraphs?.map((p, j) => (
                      <p key={j} className="text-foreground/75 leading-relaxed mb-3 text-sm sm:text-base">
                        {p}
                      </p>
                    ))}
                    {sec.bullets && (
                      <ul className="space-y-3 mt-2">
                        {sec.bullets.map((b, j) => (
                          <li key={j} className="flex gap-3 text-sm sm:text-base">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span className="text-foreground/75 leading-relaxed">
                              <strong className="text-foreground">{b.label}:</strong> {b.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {sec.code && <CodeBlock language={sec.code.language} snippet={sec.code.snippet} />}
                  </div>
                ))}
              </article>

              <div className="mt-8 pt-6 border-t border-gold-subtle flex flex-wrap items-center gap-3">
                <span className="text-xs text-foreground/50 mr-auto">Share this article</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCopy(openArticle.slug)}
                  className="border-gold-subtle gap-2"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                  {copied ? 'Copied' : 'Copy Link'}
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleLinkedIn(openArticle)}
                  className="gap-2 gradient-button text-primary-foreground border-0"
                >
                  <Linkedin className="w-4 h-4" />
                  Share on LinkedIn
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InsightsSection;