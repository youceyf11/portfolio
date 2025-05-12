import { useEffect, useRef } from 'react';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple particles animation
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx || !particlesRef.current) return;

    particlesRef.current.appendChild(canvas);
    
    const resizeCanvas = () => {
      if (particlesRef.current) {
        canvas.width = particlesRef.current.offsetWidth;
        canvas.height = particlesRef.current.offsetHeight;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles: { x: number; y: number; radius: number; speedX: number; speedY: number }[] = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25
      });
    }

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
      
      particles.forEach((particle, i) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Draw connections
        particles.forEach((particle2, j) => {
          if (i === j) return;
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (particlesRef.current && canvas.parentNode === particlesRef.current) {
        particlesRef.current.removeChild(canvas);
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10">
      <div ref={particlesRef} className="absolute inset-0 z-0 opacity-30 dark:opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-7/12 space-y-6">
            <div className="space-y-3">
              <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider">
                FULL STACK SOFTWARE ENGINEER
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <AnimatedText text="Youssef Ouriniche" />
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-lg">
                I build elegant, performant, and user-centered digital experiences with cutting-edge technologies.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-lg hover:shadow-xl transition duration-300 inline-flex items-center"
              >
                Hire Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600/10 rounded-md transition duration-300 inline-flex items-center"
              >
                See My Work
              </a>
              <a 
                href="/resume.pdf" 
                className="px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition duration-300 inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} className="mr-2" />
                Resume
              </a>
            </div>
            
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://github.com/youssefouriniche" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/youssefouriniche" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-5/12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-full blur-2xl opacity-20 dark:opacity-30 animate-pulse" style={{ animationDuration: '8s' }}></div>
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 backdrop-blur-sm">
                <div className="bg-white dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 p-6 sm:p-8 rounded-2xl">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg shadow-lg mb-6 inline-block">
                    <div className="bg-white dark:bg-gray-900 p-2 rounded">
                      <code className="text-sm font-mono">const developer = 'Youssef';</code>
                    </div>
                  </div>
                  <pre className="text-sm font-mono p-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-x-auto">
                    <code>
{`class Engineer {
  constructor() {
    this.name = 'Youssef Ouriniche';
    this.role = 'Full Stack Developer';
    this.languages = [
      'Java', 'JavaScript', 'TypeScript',
      'C', 'C++', 'C#', 'Python'
    ];
    this.frameworksLibraries = [
      'Spring Boot', 'React', 'Angular'
    ];
  }

  createSolution(problem) {
    return this.analyze(problem)
      .then(this.develop)
      .then(this.test)
      .then(this.deploy);
  }
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center">
          <a 
            href="#skills" 
            className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} className="text-blue-600 dark:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;