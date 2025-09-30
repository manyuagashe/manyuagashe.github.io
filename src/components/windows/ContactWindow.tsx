import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const ContactWindow = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manyu@unc.edu",
      href: "mailto:manyu@unc.edu",
      color: "text-red-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/manyu",
      href: "https://github.com/manyu",
      color: "text-gray-700"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/manyu",
      href: "https://linkedin.com/in/manyu",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chapel Hill, NC",
      href: null,
      color: "text-green-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "text-blue-500"
    }
  ];

  return (
    <div className="p-6 h-full overflow-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-bold text-blue-navy mb-6"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-black mb-6"
        >
          I'm always interested in new opportunities, collaborations, and conversations about technology. 
          Feel free to reach out through any of the channels below!
        </motion.p>

        <div className="space-y-4">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg p-4 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg bg-white/50 ${contact.color}`}>
                  <contact.icon size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-navy group-hover:text-blue-deep transition-colors">
                    {contact.label}
                  </h3>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-black hover:text-carolina-blue transition-colors underline decoration-transparent hover:decoration-carolina-blue"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-black">{contact.value}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 p-4 bg-glass-bg backdrop-blur-glass border border-glass-border rounded-lg"
        >
          <h3 className="text-lg font-semibold text-blue-navy mb-2">Let's Connect!</h3>
          <p className="text-sm text-black mb-3">
            Whether you want to discuss a project, share ideas about technology, or just say hello, 
            I'd love to hear from you.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-carolina-blue text-white px-4 py-2 rounded-lg hover:bg-blue-deep transition-colors duration-300 text-sm font-medium"
            onClick={() => window.open('mailto:manyu@unc.edu', '_blank')}
          >
            Send Email
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactWindow;