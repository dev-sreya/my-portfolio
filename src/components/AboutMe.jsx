import { Briefcase, Code, User } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionWrapper from '../hoc/SectionWrapper'

const AboutMe = () => {
  return (
   <motion.section id='about' className='py-24 px-4 relative'>
    {""}
    <div className='container mx-auto max-w-5xl '>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            About <span className='text-primary'> Me </span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6'>
                <h3 className='text-2xl font-semibold'>
                    Passionate software developer, building solutions in modern tech and AI
                </h3>

                <p className='text-muted-foreground'>
                    With over 3 years of experience in Web Development, I specialize in creating responsive, accessible, and performent web applications using modern technologies.
                </p>

                <p className='text-muted-foreground'>
                    Backend-focused Software Developer with experience building robust, scalable, and high-performance AI systems and microservices. <br />
Proficient in Python, Golang, Node.js, RESTful APIs, databases, and modern cloud-native technologies. <br />
I'm constantly learning new technogies and techniques to stay at the forefront of the ever evolving tech landscape.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                    <a href='#contact' className='cosmic-button'>
                        {""}
                        Get In Touch
                    </a>
                    <a href='https://drive.google.com/file/d/1qhO6IDNTnbQf1d2syeLZlLuZZCEWuFtV/view?usp=sharing' target="_blank" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 '>
                        Download CV
                    </a>

                </div>
            </div>
            <div className='grid grid-cols-1 gap-6'>
                <div className='gradient-border p-6 card-hover'> 
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <Code className='h-6 w-6 text-primary'/>
                        </div>

                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>
                                Custom Web Development
                            </h4>
                            <p className='text-muted-foreground'>
                                Creating MVP and web applications with modern frameworks for seemless experience.
                            </p>
                        </div>
                        
                    </div> 
                </div>
                <div className='gradient-border p-6 card-hover'> 
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <User className='h-6 w-6 text-primary'/>
                        </div>

                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>
                                Large-Scale Backend System Design & Development
                            </h4>
                            <p className='text-muted-foreground'>
                                Designing high performant distributed systems and developing using cloud native technologies like AWS
                            </p>
                        </div>
                        
                    </div> 
                </div>
                <div className='gradient-border p-6 card-hover'> 
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <Briefcase className='h-6 w-6 text-primary'/>
                        </div>

                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>
                                AI Application Development and Automation
                            </h4>
                            <p className='text-muted-foreground'>
                                From Python Data Analysis to creating Full stack AI software solutions to Streamline business processes with intelligent automation using AI-powered tools.
                            </p>
                        </div>
                        
                    </div>     
                </div>
            </div>
        </div>

    </div>

   </motion.section>
  )
}

export default SectionWrapper(AboutMe, 'about');

