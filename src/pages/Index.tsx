import { Heart, Sparkles, MapPin, Home } from "lucide-react";
import FloatingHearts from "@/components/FloatingHearts";
import CountdownTimer from "@/components/CountdownTimer";
import Section from "@/components/Section";
import BulletList from "@/components/BulletList";

const Index = () => {
  const amazingReasons = [
    "🍛 Maa ke haath ka khana! Nothing beats home-cooked biryani and parathas",
    "👨‍👩‍👧 Quality time with your family who miss you SO much",
    "😴 Sleeping in your own comfy bed",
    "🎉 Being the star of your house again (as you should be!)",
    "📵 A break from Lahore's hectic routine and assignments",
    "❤️ Getting spoiled by everyone because you're their favorite",
  ];

  const thingsIllMiss = [
    "Your random voice notes at 2 AM about nothing important 😂",
    "Our chai breaks and gossip sessions ☕",
    "The way you laugh at your own jokes (iconic honestly)",
    "Your dramatic reactions to literally everything 🎭",
    "Our late-night study sessions (mostly procrastinating together)",
    "Your presence that makes everything feel better 💕",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />
      
      <main className="relative z-10 container max-w-3xl mx-auto px-4 py-8 md:py-16 space-y-8 md:space-y-12">
        {/* Hero Section */}
        <header className="text-center space-y-6 animate-fade-in-up">
          <div className="flex justify-center gap-2">
            <Sparkles className="text-lavender animate-sparkle" size={28} />
            <Heart className="text-rose fill-rose animate-pulse-soft" size={32} />
            <Sparkles className="text-lavender animate-sparkle animation-delay-200" size={28} />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-script text-gradient leading-tight">
            Hey Beautiful,
            <br />
            This is For You! 💕
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A little something to remind you how special you are, 
            even when you're miles away in Faisalabad 🏠
          </p>

          <div className="flex items-center justify-center gap-2 text-accent">
            <MapPin size={20} />
            <span className="font-medium">Lahore → Faisalabad</span>
            <Home size={20} />
          </div>
        </header>

        {/* Why These Weeks Will Be Amazing */}
        <Section title="Why These 2-3 Weeks Will Be Amazing ✨" delay={100}>
          <BulletList items={amazingReasons} />
        </Section>

        {/* Countdown Timer */}
        <Section title="Days Until We Meet Again 💫" delay={200}>
          <CountdownTimer />
          <p className="text-center text-muted-foreground mt-6 text-sm md:text-base">
            (But who's counting? Definitely not me... okay maybe a little 🥺)
          </p>
        </Section>

        {/* Friendship Appreciation */}
        <Section delay={300}>
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <Heart className="text-rose fill-rose-light animate-bounce-soft" size={48} />
            </div>
            <h2 className="text-2xl md:text-4xl font-script text-gradient">
              What You Mean To Me
            </h2>
            <p className="text-foreground/90 leading-relaxed max-w-lg mx-auto text-base md:text-lg">
              You're not just a friend, you're family. You're the person I can be 
              completely weird with, the one who understands my silence, and the 
              one who makes every ordinary moment feel extraordinary. 
              Thank you for being YOU. 💖
            </p>
          </div>
        </Section>

        {/* Quote Section */}
        <Section delay={400}>
          <blockquote className="text-center space-y-4">
            <p className="text-xl md:text-3xl font-script text-gradient italic">
              "Distance means nothing when someone means everything"
            </p>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  size={16}
                  className="text-rose fill-rose animate-pulse-soft"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
          </blockquote>
        </Section>

        {/* Things I'll Miss */}
        <Section title="Things I'll Miss About You 😭" delay={500}>
          <BulletList items={thingsIllMiss} />
        </Section>

        {/* Final Message */}
        <Section delay={600}>
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-script text-gradient">
              See You Soon, Best Friend!
            </h2>
            <p className="text-xl md:text-2xl text-foreground/90">
              Lahore is Waiting for You! 🌸
            </p>
            <div className="flex justify-center gap-2 pt-4">
              <Sparkles className="text-lavender animate-sparkle" size={24} />
              <Heart className="text-rose fill-rose animate-pulse-soft" size={32} />
              <Sparkles className="text-lavender animate-sparkle animation-delay-300" size={24} />
            </div>
            <p className="text-muted-foreground text-sm md:text-base pt-4">
              Made with all my love 💕
              <br />
              <span className="font-script text-lg">Your Best Friend Forever</span>
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
};

export default Index;
