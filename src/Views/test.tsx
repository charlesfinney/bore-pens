import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Code,
  MessageSquare,
  Cpu,
  Brain,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

export default function AdvancedAITriviumLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold text-xl">Advanced AI Trivium</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-primary"
            href="#curriculum"
          >
            Curriculum
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary"
            href="#practical"
          >
            Practical Components
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary"
            href="#seminars"
          >
            Advanced Seminars
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary"
            href="#enroll"
          >
            Enroll
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Become the Leonardo da Vinci of the AI Renaissance
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Why settle for being a code monkey when you can be the puppet
                  master of silicon minds?
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  variant="outline"
                  className="bg-white text-black hover:bg-gray-200"
                >
                  Peek Behind the AI Curtain
                </Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Join the Illuminati of AI
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="curriculum" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Warning: This curriculum may cause severe paradigm shifts and
              occasional bouts of genius
            </h2>
            <Tabs defaultValue="logic" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="logic">Logic</TabsTrigger>
                <TabsTrigger value="writing">Writing</TabsTrigger>
                <TabsTrigger value="rhetoric">Rhetoric</TabsTrigger>
              </TabsList>
              <TabsContent value="logic">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Module 1: From Socratic method to Silicon Valley madness
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Classical Logic: Because even AI needs to know its
                        Aristotle from its elbow
                      </li>
                      <li>
                        Advanced Logical Frameworks: Making machines more
                        rational than your average politician
                      </li>
                      <li>
                        Computational Logic in LLMs: Teaching ChatGPT to win
                        arguments on Twitter
                      </li>
                      <li>
                        Game Theory: Making machines bluff better than a poker
                        champion
                      </li>
                      <li>
                        Optimization: Making 'good enough' the new 'perfect'
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="writing">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Module 2: Teaching robots to write sonnets and sarcasm
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Foundations of NLP: Because 'hello world' is so last
                        century
                      </li>
                      <li>
                        Advanced LLM Architectures: Building cathedrals of
                        cognition
                      </li>
                      <li>
                        Information Theory in NLP: Making Shakespeare jealous of
                        AI's vocabulary
                      </li>
                      <li>
                        Natural Language Generation: Creating AI that writes
                        better than your high school English teacher
                      </li>
                      <li>
                        Prompt Engineering: The dark arts of AI whispering
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="rhetoric">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Module 3: Making HAL 9000 sound like Churchill
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Classical Rhetoric in AI: Aristotle's guide to not
                        sounding like a robot
                      </li>
                      <li>
                        Cybernetics and Feedback Systems: Teaching machines the
                        art of the comeback
                      </li>
                      <li>
                        Markov Blankets and Free Energy Principle: Making AI as
                        efficient as a lazy cat
                      </li>
                      <li>
                        Explainable AI for LLMs and Agents: Because "computer
                        says no" is no longer good enough
                      </li>
                      <li>
                        Ethical Persuasion and Communication: Because we don't
                        want Skynet running for office
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section
          id="practical"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Practical Components (or How to Make Machines Do Your Bidding)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-6 h-6 mr-2" />
                    Advanced Programming Labs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Where code meets philosophy, and bugs become features.
                  Implement logical reasoning systems that make Spock look
                  indecisive.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cpu className="w-6 h-6 mr-2" />
                    AI Agent Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Create digital life forms smarter than your average
                  politician. Implement Nash equilibria solvers that could
                  settle trade wars.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="w-6 h-6 mr-2" />
                    Capstone Project
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Build the AI that will either save humanity or enslave it
                  (your choice). Don't forget to add an off switch, just in
                  case.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="seminars" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Emerging Technologies and Advanced Concepts Seminar Series
            </h2>
            <p className="text-center mb-8 text-xl">
              Warning: These seminars may cause spontaneous enlightenment and
              occasional existential crises
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">
                    Quantum Approaches to NLP
                  </h3>
                  <p>
                    Because regular confusion wasn't enough. Explore how to be
                    in two semantic states at once.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">
                    Neuromorphic Computing
                  </h3>
                  <p>
                    Teaching silicon to think like a jellyfish. Surprisingly
                    effective for stock market predictions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">
                    Advanced Free Energy Principle
                  </h3>
                  <p>
                    Make your AI as efficient as a lazy cat. Minimum effort,
                    maximum naps, still catches the mouse.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">
                    Symbolic AI Integration
                  </h3>
                  <p>
                    When logic meets neural networks in a bar fight.
                    Surprisingly, they both win.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="enroll"
          className="w-full py-12 md:py-24 lg:py-32 bg-black text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join the AI Revolution (Before the Machines Replace You)
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Become the puppet master in a world of digital marionettes.
                  Apply now, before AI learns to fill out application forms.
                </p>
              </div>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                Secure Your Spot in the Singularity
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Testimonials from AI Pioneers (or Time Travelers from the Future)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4 italic">
                    "I came for the algorithms, stayed for the existential
                    questions. This course doesn't just teach AI; it
                    philosophizes with a silicon hammer."
                  </p>
                  <p className="font-semibold">
                    - Dr. Sophia Chen, Chief AI Scientist at TechNova (and
                    part-time digital philosopher)
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-4 italic">
                    "Finally, a course that teaches machines ethics without
                    boring them to death. My AI assistant now quotes Kant while
                    ordering pizza."
                  </p>
                  <p className="font-semibold">
                    - Prof. James Watson, Director of AI Ethics, Global
                    University (and occasional stand-up comedian)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 Advanced AI Trivium. All rights reserved. No AIs were harmed in
          the making of this course.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service (AI-Approved)
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy (Even from Skynet)
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Cookie Policy (Digital Cookies Only)
          </Link>
        </nav>
      </footer>
    </div>
  );
}
