import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: 'E commerce Platform',
        description: 'A platform that includes shopping cart, product reviews and ratings, user profile with orders, Admin product and management, PayPal / credit card integration.',
        image: '/projects/project1.jpg',
        tags: ['react', 'django-rest', 'bootstrap','postgresql','Django','javascript','redux-toolit','JWT Auth'],
        demoUrl: 'https://github.com/dev-sreya/ecommerce-full-stack-app-Django-React',
        githubUrl: 'https://github.com/dev-sreya/ecommerce-full-stack-app-Django-React'

    },
     {
        id: 2,
        title: 'InstaDraw realtime collaborative drawing tool',
        description: 'InstaDraw is an open-source, real-time drawing and whiteboarding app that lets multiple users sketch, annotate, and collaborate simultaneously on a shared canvas.',
        image: '/projects/project2.jpg',
        tags: ['react', 'tailwind', 'superbase'],
        demoUrl: 'https://github.com/dev-sreya/InstaDraw-real-time-drawing-tool',
        githubUrl: 'https://github.com/dev-sreya/InstaDraw-real-time-drawing-tool'

    },
     {
        id: 3,
        title: 'Dev Portfolio',
        description: 'A modern stunning developer porfolio with all the necessary sections with eye-catchy animations.',
        image: '/projects/project3.jpg',
        tags: ['react', 'tailwind', 'superbase'],
        demoUrl: 'https://github.com/dev-sreya/my-portfolio',
        githubUrl: 'https://github.com/dev-sreya/my-portfolio'

    },
      {
        id: 4,
        title: 'Chat Application',
        description: 'A simple and responsive real-time chat application React.js on the frontend and Node.js with WebSockets (ws) on the backend. This app supports multi-user chat, chat rooms, and real-time message updates without page reloads',
        image: '/projects/project1.jpg',
        tags: ['react', 'tailwind', 'superbase'],
        demoUrl: 'https://github.com/dev-sreya/chat-app-ws-nodejs',
        githubUrl: 'https://github.com/dev-sreya/chat-app-ws-nodejs'

    },
     {
        id: 5,
        title: 'Advanced Backend System',
        description: 'A fully functional advanced backend system with email validation and strong password validations.',
        image: '/projects/project2.jpg',
        tags: ['react', 'tailwind', 'superbase'],
        demoUrl: 'https://github.com/dev-sreya/advanced-auth',
        githubUrl: 'https://github.com/dev-sreya/advanced-auth'

    },
     {
        id: 6,
        title: 'OCR application with AI question answering feature',
        description: 'An intelligent OCR app that scans images, extracts text, and instantly answers your questions based on the content — turning visuals into knowledge',
        image: '/projects/project3.jpg',
        tags: ['react', 'tailwind', 'superbase'],
        demoUrl: 'https://github.com/dev-sreya/fastapi-ocr-q-a-app',
        githubUrl: 'https://github.com/dev-sreya/fastapi-ocr-q-a-app'

    }

]


const ProjectsSection = () => {
  return (
    <section id="projects" className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          {""}
          Featured <span className='text-primary'> Projects </span>
        </h2>

        <p className='text-center tetxt-muted-forground  mb-12 max-w-2xl mx-auto'>
          Here are some of my featured projects. Each project was carefully crafted with attention to details, performance, user experience.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project,key) => (
            <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>

              <div className='h-48 overflow-hidden'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:' />
              </div>
              
              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag) => (
                    <span className='px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground'>
                      {tag}

                    </span>
                  ))}

                </div>

              <h3 className='text-xl font-semibold mb-1'>
                {project.title}
              </h3>
              <p className='text-muted-foreground text-sm mb-4'>
                {project.description}
              </p>

              <div className=' flex justify-between items-center'>

                <div className='flex space-x-3'>
                  <a href={project.demoUrl}
                target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                    <ExternalLink size={20} />            
                  </a>
                  <a href={project.githubUrl} 
                  target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                    <Github size={20}/>
                  </a>

                </div>

                 </div>

              </div>

            </div>


          ))}

        </div>

        <div className='text-center mb-12'>
          <a className='cosmic-button w-fit flex items-center mx-auto gap-2' href='https://github.com/dev-sreya'>
            Check my Github <ArrowRight size={16} />
          </a>

        </div>

      </div>

    </section>
  )
}

export default ProjectsSection
