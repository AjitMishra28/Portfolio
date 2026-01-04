import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

interface ExperienceItem {
  id: number;
  type: "internship" | "job" | "education ";
  title: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    type: "job",
    title: "Software Developer",
    company: "BIMBOSS Consultant — Ahmedabad, Gujarat, India",
    duration: "May 2025 – Oct 2025",
    description: "Developed and integrated Autodesk Revit plugins (supporting versions 2022–2025) using Python and .NET. Built a digital twin web application using React.js, TypeScript, and Node.js, integrated with Autodesk ACC Cloud and Forge Viewer for real-time 3D model visualization I specialize in processing point cloud data to create accurate 3D models, including object annotation and semantic segmentation for Scan-to-BIM and AI-driven workflows.",
    skills: ["Python", ".NET", "React.js", "TypeScript", "Node.js", "Autodesk Forge API", "AWS"],
  },
  {
  id: 2,
  type: "internship",
  title: "Full Stack Developer (Internship) United States · Remote",
  company: "KRAFZEN (USA-based Company)",
  duration: "Oct 2025 - Present",
  description: "Worked on the RouteSpec MVP at a USA-based company, with a strong focus on overall system architecture and repository structure. Led critical backend development including routing pipelines and core geometry decision logic. Integrated frontend, backend, and automation workflows using tools like n8n/Make, and actively contributed to code reviews while enforcing clean code and engineering standards to ensure scalability, reliability, and maintainability.",
  skills: [
    "React.js",
    "Node.js",
    "Python",
    "System Architecture",
    "Backend Development",
    "Routing Pipelines",
    "Geometry Processing",
    "n8n / Make Automation",
    "Full Stack Integration",
    "Code Review & Standards"
  ],
},
  {
    id: 3,
    type: "education ",
    title: "Master of Computer Applications (MCA)",
    company: "Chhatrapati Shivaji Maharaj University — Navi Mumbai",
    duration: "Aug 2022 - May 2025",
    description: "Completed Master's degree in Computer Applications with a strong focus on Machine Learning, including an Online Payment Fraud Detection system using real-world transaction data.",
    skills: ["Python", "Machine Learning", "Data Engineering", "Software Development"],
  },
  {
    id: 4,
    type: "education ",
    title: "Bachelor of Computer Applications (BCA)",
    company: "Sailee College, YCMOU — Nashik",
    duration: "Aug 2020 - Jun 2023",
    description: "Completed Bachelor's degree in Computer Applications with strong foundation in programming and computer science fundamentals.",
    skills: ["Data Structures", "Algorithms", "Database", "OOP"],
  },

];

const getIcon = (type: ExperienceItem["type"]) => {
  switch (type) {
    case "internship":
      return <Briefcase className="h-5 w-5" />;
    case "job":
      return <Briefcase className="h-5 w-5" />;
    case "education ":
      return <GraduationCap className="h-5 w-5" />;
  }
};

const getTypeLabel = (type: ExperienceItem["type"]) => {
  switch (type) {
    case "internship":
      return "Internship";
    case "job":
      return "Employment";
    case "education ":
      return "Education";
  }
};

const Experience = () => {
  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey including internships, work experience, and education
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row gap-8 animate-fade-in ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                  {/* Content */}
                  <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            {getIcon(exp.type)}
                          </div>
                          <Badge variant="secondary">{getTypeLabel(exp.type)}</Badge>
                        </div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="flex flex-col gap-1">
                          <span className="font-medium text-foreground/80">{exp.company}</span>
                          <span className="flex items-center gap-1 text-sm">
                            <Calendar className="h-3 w-3" />
                            {exp.duration}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
