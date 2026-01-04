import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, Palette, Server, Wrench } from "lucide-react";

interface SkillCategory {
  id: number;
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: "Programming Languages",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "C#/.NET", level: 75 },
      { name: "Java", level: 70 },
    ],
  },
  {
    id: 2,
    name: "Frontend Development",
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 75 },
      { name: "Vue.js", level: 70 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    id: 3,
    name: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: "Django", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "Node.js", level: 80 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    id: 4,
    name: "Database & Cloud",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "SQL", level: 85 },
      { name: "AWS", level: 75 },
      { name: "DB Modeling", level: 75 },
    ],
  },
  {
    id: 5,
    name: "AI/ML & Data Science",
    icon: <Wrench className="h-6 w-6" />,
    skills: [
      { name: "TensorFlow", level: 75 },
      { name: "Scikit-Learn", level: 80 },
      { name: "Pandas/NumPy", level: 85 },
      { name: "XGBoost", level: 70 },
    ],
  },
  {
    id: 6,
    name: "Tools & Visualization",
    icon: <Palette className="h-6 w-6" />,
    skills: [
      { name: "GitHub", level: 85 },
      { name: "Jupyter Notebook", level: 85 },
      { name: "Matplotlib/Seaborn", level: 80 },
      { name: "Autodesk Forge", level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <Layout>
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.id}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                      {category.icon}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
              Other Skills & Interests
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Data Integration",
                "Cloud Transformation",
                "Problem Solving",
                "Agile Development",
                "Clean Code",
                "Reading",
                "Coding",
                "Tech Blogs",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
