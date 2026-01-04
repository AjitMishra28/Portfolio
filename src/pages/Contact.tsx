import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "ajit18519@gmail.com",
    href: "mailto:ajit18519@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+91 7045491077",
    href: "tel:+917045491077",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Mumbai, Maharashtra, India",
  },
];

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  username: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Linkedin className="h-6 w-6" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ajit-mishra28/",
    username: "/in/ajit-mishra28",
  },
  {
    icon: <Github className="h-6 w-6" />,
    label: "GitHub",
    href: "https://github.com/ajit-mishra",
    username: "@ajit-mishra",
  },
];

const Contact = () => {
  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="p-2 bg-background rounded-lg text-muted-foreground group-hover:text-primary transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{social.label}</p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="py-12">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Let's Work Together
                </h3>
                <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                  I'm currently looking for new opportunities. Whether you have a project 
                  in mind or just want to connect, I'd love to hear from you!
                </p>
                <a
                  href="mailto:ajit18519@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Send Me an Email
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
