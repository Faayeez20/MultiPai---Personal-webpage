"use client";

import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from 'next/image';
import { fadeIn, fadeInUp, scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function Home() {
  const skills = [
    { name: "Java", level: "Expert" },
    { name: "Python", level: "Advanced" },
    { name: "C/C++", level: "Expert" },
    { name: "React", level: "Expert" },
    { name: "Next.js", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
    { name: "Node.js", level: "Advanced" },
    { name: "AWS", level: "Advanced" },
    { name: "TensorFlow", level: "Expert" },
    { name: "Flutter", level: "Expert" },
    { name: "Docker", level: "Intermediate" },
    { name: "SQL", level: "Expert" }
  ];

  const experiences = [
    {
      company: "Equitec Software Technology Pvt. Ltd.",
      role: "Intern & Software Engineer",
      period: "2024 - Present",
      description: "Contributed to the development of a financial data analysis application by processing financial data and implementing predictive models.",
      achievements: [
        "Processed company financial data from CSV files into structured Excel-friendly formats for concise financial summaries.",
        "Implemented rule-based analyses and integrated machine learning models to predict financial trends based on historical data and insider transcripts.",
        "Automated financial insights and decision-making using Python, Pandas, and ML techniques.",
        "Gained hands-on experience in financial technology development, enhancing data-driven decision-making."
      ]
    },
    {
      company: "MultiPai AI",
      role: "AI Intern",
      period: "2025 - present",
      description: "Gaining hands-on experience in AI and ML by working on real-world applications and contributing to AI education.",
      achievements: [
        "Developed an accessible AI education platform to make AI learning more approachable.",
        "Collaborated with a team to build and integrate enterprise AI tools for real-world applications.",
        "Applied AI and ML techniques to solve practical problems and enhance automation."
      ]
    }
  ];

  const projects = [
    {
      title: "ChatBot For College",
      description: "Developed an intelligent chatbot to assist students with inquiries related to holiday schedules, events, and college-related information using NLP.",
      technologies: ["Python", "NLP", "Dialogflow", "Flask"],
      link: "#",
      image: "/images/project1.jpg"
    },
    {
      title: "FacBook",
      description: "Built a full-stack faculty information platform with administrator tools for efficient management and easy access to teacher profiles.",
      technologies: ["React", "Node.js", "MongoDB", "Material UI"],
      link: "#",
      image: "/images/project2.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Profile Section */}
        <Card className={cn(
          "glass border-none shadow-xl overflow-hidden",
          fadeInUp()
        )}>
          <div className="h-60 sm:h-72 relative">
            <Image 
              src="/images/hero-bg.jpg"
              alt="Hero background"
              fill
              className={cn(
                "object-cover transition-transform duration-500 hover:scale-105",
                fadeIn()
              )}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-background/90"></div>
          </div>
          <CardContent className="relative -mt-20 pt-0 px-6 sm:px-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className={cn(
                "w-32 h-32 sm:w-40 sm:h-40 relative z-10",
                scaleIn(300)
              )}>
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={160}
                  height={160}
                  className="rounded-full border-4 border-background shadow-xl transition-transform duration-300 hover:scale-105 object-cover ring-2 ring-primary/20"
                  priority
                />
              </div>
              <div className={cn("flex-1 space-y-4 pt-4", fadeInUp(600))}>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Faayeez Shaikh</h1>
                  <p className="text-xl text-muted-foreground mt-1">Student</p>
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Mumbai , India</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg">
                   I am an AI and software developer passionate about building impactful solutions that bridge technology and real-world applications. My work spans machine learning, web development, cybersecurity, and IoT, with a strong focus on AI-driven healthcare solutions.
                </p>
                <div className="flex flex-wrap gap-3">
                <a href="mailto:your-email@example.com">
                  <Button className="transition-all hover:scale-105">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                  </a>

                  <a href="https://github.com/Faayeez20" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="transition-all hover:scale-105">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  </a>

                  <a href="https://www.linkedin.com/in/shaikh-faayeez-97904a26a/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="transition-all hover:scale-105">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  </a>

                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className={cn(
          "glass card-hover",
          fadeInUp(900)
        )}>
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Skills & Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className={cn(
                  "group relative",
                  fadeInUp(1000 + index * 100)
                )}>
                  <Badge 
                    variant="secondary"
                    className="w-full py-2 px-4 text-center skill-badge-hover bg-secondary/50"
                  >
                    {skill.name}
                  </Badge>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
                    {skill.level}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card className={cn(
          "glass card-hover",
          fadeInUp(1200)
        )}>
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Professional Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={cn(
                "group",
                fadeInUp(1300 + index * 200)
              )}>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground glass px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-2 text-muted-foreground">{exp.description}</p>
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-primary">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                {index < experiences.length - 1 && <Separator className="mt-6 opacity-50" />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className={cn(
          "glass card-hover",
          fadeInUp(1500)
        )}>
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Featured Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className={cn(
                  "group overflow-hidden border-none glass",
                  fadeInUp(1600 + index * 200)
                )}>
                  <div className="h-48 relative overflow-hidden">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent"></div>
                  </div>
                  <CardContent className="relative pt-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-foreground group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                      <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform duration-300 hover:bg-primary/10">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-muted-foreground mt-2 group-hover:translate-x-2 transition-transform duration-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="glass hover:scale-105 transition-transform duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}