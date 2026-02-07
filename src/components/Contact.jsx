import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLocationMarker, HiUser } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaYoutube, FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: "error", message: "Please fill in all required fields." });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ type: "error", message: "Please enter a valid email address." });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with actual email service like EmailJS)
    try {
      // For now, we'll use mailto as fallback
      const mailtoLink = `mailto:nittalaphaneendhar@gmail.com?subject=${encodeURIComponent(formData.subject || "Contact Form Submission")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      setFormStatus({ type: "success", message: "Opening your email client..." });
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFormStatus({ type: "", message: "" });
      }, 3000);
    } catch (error) {
      setFormStatus({ type: "error", message: "Something went wrong. Please try again." });
    }
    
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "160px 8% 120px",
        background: "linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Ambient gradient orbs - Windows 11 "Bloom" style */}
      <div style={{
        position: "absolute",
        top: "5%",
        left: "10%",
        width: "800px",
        height: "800px",
        background: "radial-gradient(circle, rgba(0, 188, 242, 0.1) 0%, transparent 70%)",
        filter: "blur(100px)",
        pointerEvents: "none",
        opacity: 0.5
      }} />
      <div style={{
        position: "absolute",
        bottom: "0%",
        right: "0%",
        width: "700px",
        height: "700px",
        background: "radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%)",
        filter: "blur(100px)",
        pointerEvents: "none",
        opacity: 0.4
      }} />

      <ScrollReveal direction="up" duration={1}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Header Section */}
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span style={{ 
                color: "#86868b", 
                fontSize: "13px", 
                fontWeight: "600", 
                letterSpacing: "3px", 
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "20px"
              }}>
                Connect
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              style={{ 
                fontSize: "clamp(40px, 6vw, 64px)", 
                color: "white", 
                marginTop: "0", 
                fontWeight: "700",
                letterSpacing: "-2px",
                lineHeight: "1.1",
                marginBottom: "24px"
              }}
            >
              Let's collaborate on the<br />
              <span style={{ 
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                future of digital integrity.
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ 
                color: "#86868b", 
                fontSize: "17px", 
                lineHeight: "1.5", 
                maxWidth: "600px", 
                margin: "0 auto",
                fontWeight: "400"
              }}
            >
              Ready to bring your vision to life with cutting-edge technology and design excellence.
            </motion.p>
          </div>

          {/* Main Content Grid - Form + Contact Info */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
            gap: "40px",
            marginBottom: "60px"
          }}>
            {/* Contact Info & Social Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Contact Cards */}
              <ScrollReveal direction="up" delay={0.3} duration={0.7}>
                <ContactCard 
                  icon={<HiUser />} 
                  label="Name" 
                  value="Phaneendhar Nittala"
                  gradient="linear-gradient(135deg, rgba(109, 124, 255, 0.1) 0%, rgba(109, 124, 255, 0.05) 100%)"
                />
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.35} duration={0.7}>
                <ContactCard 
                  icon={<HiOutlineMail />} 
                  label="Email" 
                  value="nittalaphaneendhar@gmail.com" 
                  isLink 
                  href="mailto:nittalaphaneendhar@gmail.com"
                  gradient="linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%)"
                />
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.4} duration={0.7}>
                <ContactCard 
                  icon={<HiOutlineLocationMarker />} 
                  label="Location" 
                  value="Andhra Pradesh, India"
                  gradient="linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)"
                />
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal direction="up" delay={0.45} duration={0.8}>
              <div style={{
                background: "rgba(32, 32, 32, 0.6)",
                backdropFilter: "blur(40px) saturate(150%)",
                WebkitBackdropFilter: "blur(40px) saturate(150%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                padding: "40px",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)"
              }}>
                <h3 style={{
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "700",
                  marginBottom: "24px",
                  letterSpacing: "-0.5px"
                }}>
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <InputField
                    label="Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                  
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                  
                  <InputField
                    label="Subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                  
                  <div>
                    <label style={{
                      color: "#86868b",
                      fontSize: "12px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "8px"
                    }}>
                      Message *
                    </label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      whileFocus={{ scale: 1.01 }}
                      style={{
                        width: "100%",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        borderRadius: "8px",
                        padding: "16px",
                        color: "white",
                        fontSize: "15px",
                        fontFamily: "inherit",
                        resize: "vertical",
                        outline: "none",
                        transition: "all 0.3s ease"
                      }}
                      onFocus={(e) => e.target.style.borderColor = "rgba(102, 126, 234, 0.5)"}
                      onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"}
                    />
                  </div>

                  {formStatus.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        padding: "12px 16px",
                        borderRadius: "12px",
                        background: formStatus.type === "success" 
                          ? "rgba(34, 197, 94, 0.1)" 
                          : "rgba(239, 68, 68, 0.1)",
                        border: `1px solid ${formStatus.type === "success" 
                          ? "rgba(34, 197, 94, 0.3)" 
                          : "rgba(239, 68, 68, 0.3)"}`,
                        color: formStatus.type === "success" ? "#22c55e" : "#ef4444",
                        fontSize: "14px",
                        fontWeight: "500"
                      }}
                    >
                      {formStatus.message}
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: "0 12px 40px rgba(102, 126, 234, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: "linear-gradient(135deg, #0078d4 0%, #00bcf2 100%)",
                      border: "none",
                      borderRadius: "8px",
                      padding: "16px 32px",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "600",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      transition: "all 0.3s ease",
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  >
                    <FaPaperPlane style={{ fontSize: "14px" }} />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Connect on Social - MOVED TO FOOTER AREA */}
          <ScrollReveal direction="up" delay={0.1} duration={0.8}>
            <div style={{
              maxWidth: "800px",
              margin: "0 auto 40px",
              background: "rgba(32, 32, 32, 0.6)",
              backdropFilter: "blur(40px) saturate(150%)",
              WebkitBackdropFilter: "blur(40px) saturate(150%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "40px",
              textAlign: "center",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
            }}>
              <div style={{
                fontSize: "11px",
                color: "#86868b",
                fontWeight: "600",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "24px"
              }}>
                Connect on Social
              </div>
              
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                <SocialButton icon={<FaGithub />} href="https://github.com/nphaneendhar" label="GitHub" />
                <SocialButton icon={<FaLinkedin />} href="https://www.linkedin.com/in/phaneendhar-nittala-a2a3443a1/" label="LinkedIn" />
                <SocialButton icon={<FaTwitter />} href="https://twitter.com/yourusername" label="Twitter" />
                <SocialButton icon={<FaInstagram />} href="https://instagram.com/phani.49" label="Instagram" />
                <SocialButton icon={<FaFacebook />} href="https://facebook.com/yourusername" label="Facebook" />
                <SocialButton icon={<FaYoutube />} href="https://youtube.com/@yourusername" label="YouTube" />
              </div>
            </div>
          </ScrollReveal>

          {/* Footer Section - Premium Apple Style */}
          <ScrollReveal direction="up" delay={0.5} duration={0.8}>
            <div style={{ textAlign: "center", marginTop: "100px" }}>
              {/* Main Footer Card */}
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  background: "linear-gradient(135deg, rgba(0, 120, 212, 0.15) 0%, rgba(147, 51, 234, 0.1) 100%)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  padding: "48px 40px",
                  maxWidth: "800px",
                  margin: "0 auto",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)"
                }}
              >
                {/* Subtle gradient orb inside footer */}
                <div style={{
                  position: "absolute",
                  top: "-50%",
                  right: "-20%",
                  width: "300px",
                  height: "300px",
                  background: "radial-gradient(circle, rgba(109, 124, 255, 0.15) 0%, transparent 70%)",
                  filter: "blur(60px)",
                  pointerEvents: "none"
                }} />
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* Tagline */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                      fontSize: "11px",
                      color: "#667eea",
                      fontWeight: "700",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      marginBottom: "20px"
                    }}
                  >
                    Built with Purpose
                  </motion.div>
                  
                  {/* Main Message */}
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                    style={{ 
                      color: "#e5e5e7", 
                      fontSize: "17px", 
                      lineHeight: "1.8", 
                      margin: "0 auto",
                      fontWeight: "500",
                      maxWidth: "650px",
                      letterSpacing: "0.2px"
                    }}
                  >
                    Independently architected and maintained. Dedicated to systematic evidence handling and long-term personal initiative.
                  </motion.p>
                  
                  {/* Divider */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{
                      width: "60px",
                      height: "2px",
                      background: "linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.6), transparent)",
                      margin: "32px auto"
                    }}
                  />
                  
                  {/* Secondary Message */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    style={{
                      color: "#86868b",
                      fontSize: "14px",
                      fontWeight: "400",
                      margin: "0",
                      fontStyle: "italic"
                    }}
                  >
                    Every system carries the weight of its creator's responsibility.
                  </motion.p>
                </div>
              </motion.div>
              

              
              {/* Copyright */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                style={{ marginTop: "48px" }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  marginBottom: "12px"
                }}>
                  <div style={{
                    width: "32px",
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2))"
                  }} />
                  <p style={{ 
                    fontSize: "12px", 
                    color: "#6d6d70", 
                    letterSpacing: "5px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    margin: 0
                  }}>
                    PHANIX
                  </p>
                  <div style={{
                    width: "32px",
                    height: "1px",
                    background: "linear-gradient(90deg, rgba(255, 255, 255, 0.2), transparent)"
                  }} />
                </div>
                <p style={{
                  fontSize: "11px",
                  color: "#47474fff",
                  fontWeight: "500",
                  margin: 0
                }}>
                  © {new Date().getFullYear()} All Rights Reserved
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </section>
  );
}

function ContactCard({ icon, label, value, isLink, href, gradient }) {
  return (
    <motion.div
      whileHover={{ 
        y: -8,
        scale: 1.02,
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      style={{
        background: gradient || "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "28px",
        padding: "36px 32px",
        textAlign: "left",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        cursor: isLink ? "pointer" : "default",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)"
      }}
    >
      {/* Subtle shine effect on hover */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)",
          pointerEvents: "none"
        }}
        whileHover={{
          left: "100%",
          transition: { duration: 0.6 }
        }}
      />

      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        style={{ 
          fontSize: "28px", 
          color: "white", 
          marginBottom: "24px",
          opacity: 0.9,
          display: "inline-block"
        }}
      >
        {icon}
      </motion.div>
      
      <div style={{ 
        fontSize: "11px", 
        color: "#86868b", 
        fontWeight: "600", 
        letterSpacing: "2px", 
        textTransform: "uppercase",
        marginBottom: "12px"
      }}>
        {label}
      </div>
      
      {isLink ? (
        <motion.a 
          href={href}
          whileHover={{ x: 2 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          style={{ 
            fontSize: "16px", 
            color: "white", 
            textDecoration: "none", 
            fontWeight: "600",
            wordBreak: "break-word",
            display: "inline-block",
            lineHeight: "1.5",
            transition: "color 0.2s ease"
          }}
          onMouseEnter={(e) => e.target.style.color = "#667eea"}
          onMouseLeave={(e) => e.target.style.color = "white"}
        >
          {value}
        </motion.a>
      ) : (
        <div style={{ 
          fontSize: "16px", 
          color: "white", 
          fontWeight: "600",
          lineHeight: "1.5"
        }}>
          {value}
        </div>
      )}
    </motion.div>
  );
}

// Input Field Component
function InputField({ label, name, type, value, onChange, placeholder, required }) {
  return (
    <div>
      <label style={{
        color: "#86868b",
        fontSize: "12px",
        fontWeight: "600",
        letterSpacing: "1px",
        textTransform: "uppercase",
        display: "block",
        marginBottom: "8px"
      }}>
        {label} {required && "*"}
      </label>
      <motion.input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        whileFocus={{ scale: 1.01 }}
        style={{
          width: "100%",
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          padding: "16px",
          color: "white",
          fontSize: "15px",
          fontFamily: "inherit",
          outline: "none",
          transition: "all 0.3s ease"
        }}
        onFocus={(e) => e.target.style.borderColor = "rgba(102, 126, 234, 0.5)"}
        onBlur={(e) => e.target.style.borderColor = "rgba(255, 255, 255, 0.1)"}
      />
    </div>
  );
}

// Social Button Component
function SocialButton({ icon, href, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
        scale: 1.1, 
        y: -4,
        boxShadow: "0 8px 24px rgba(102, 126, 234, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "56px",
        height: "56px",
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        color: "white",
        fontSize: "20px",
        textDecoration: "none",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden"
      }}
      aria-label={label}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(102, 126, 234, 0.2)";
        e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
      }}
    >
      {icon}
    </motion.a>
  );
}

// Footer Social Button Component
function FooterSocialButton({ icon, href, label, color }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
        scale: 1.15, 
        y: -6,
        boxShadow: `0 12px 32px ${color}40`
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "48px",
        height: "48px",
        background: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "14px",
        color: "#a1a1a6",
        fontSize: "20px",
        textDecoration: "none",
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        position: "relative",
        overflow: "hidden"
      }}
      aria-label={label}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${color}15`;
        e.currentTarget.style.borderColor = `${color}50`;
        e.currentTarget.style.color = color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
        e.currentTarget.style.color = "#a1a1a6";
      }}
    >
      {icon}
    </motion.a>
  );
}
