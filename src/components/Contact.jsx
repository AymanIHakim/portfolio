import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '216d300f-57bc-416e-b711-699409cf0260',
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `Portfolio Contact from ${formState.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aymanibnehakim@gmail.com',
      href: 'mailto:aymanibnehakim@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+88 01971742000',
      href: 'tel:+8801971742000',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/AymanIHakim',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ayman-ibne-hakim',
    },
  ];

  return (
    <section id="contact" className="py-32 bg-obsidian/50" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="section-title text-3xl md:text-4xl text-white mb-6">
              Get In Touch
            </h2>
            <p className="font-body text-lg text-zinc-400 max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll do my 
              best to get back to you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:border-accent/30 transition-all group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <item.icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-zinc-500">{item.label}</p>
                      <p className="font-body text-white group-hover:text-accent transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-zinc-800">
                <p className="font-mono text-sm text-zinc-500 mb-4">
                  Find me on
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-lg glass hover:bg-accent/10 hover:border-accent/30 transition-all group"
                    >
                      <social.icon
                        size={22}
                        className="text-zinc-400 group-hover:text-accent transition-colors"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-sm text-zinc-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-midnight border border-zinc-800 text-white font-body focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                    placeholder="Your name"
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-sm text-zinc-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-midnight border border-zinc-800 text-white font-body focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                    placeholder="your@email.com"
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-sm text-zinc-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-midnight border border-zinc-800 text-white font-body focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                    placeholder="Your message..."
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400"
                  >
                    <CheckCircle size={20} />
                    <span className="font-body">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400"
                  >
                    <AlertCircle size={20} />
                    <span className="font-body">Something went wrong. Please try again or email me directly.</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-accent text-midnight font-body font-medium hover:bg-accent-glow transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
