import React, { useState } from 'react'
import {cn} from '/src/lib/utils'



const skills = [
    //Frontend
    {name: "HTML5/CSS3", level: 90, category: "frontend"},
    {name: "JavaScript", level: 90, category: "frontend"},
    {name: "React", level: 90, category: "frontend"},
    {name: "TypeScript", level: 90, category: "frontend"},
    {name: "TailwindCSS", level: 90, category: "frontend"},
    {name: "Bootstrap", level: 90, category: "frontend"},
    {name: "Next.js", level: 90, category: "frontend"},
    {name: "Framer Motion", level: 90, category: "frontend"},
    {name: "Framer", level: 90, category: "frontend"},
    {name: "GSAP", level: 90, category: "frontend"},

    //backend

    {name: "node.js", level: 90, category: "backend"},
    {name: "express", level: 90, category: "backend"},
    {name: "python", level: 90, category: "backend"},
    {name: "Django", level: 90, category: "backend"},
    {name: "Golang", level: 90, category: "backend"},
    {name: "Gin", level: 90, category: "backend"},
    {name: "Fiber", level: 90, category: "backend"},
    {name: "MongoDB", level: 90, category: "backend"},
    {name: "PostgreSQL", level: 90, category: "backend"},
    {name: "RREST API", level: 90, category: "backend"},
    {name: "Redis", level: 90, category: "backend"},
    {name: "RabbitMQ", level: 90, category: "backend"},
    {name: "GraphQL", level: 90, category: "backend"},
    {name: "Websockets", level: 90, category: "backend"},
    {name: "gRPC", level: 90, category: "backend"},

    //AI/ML

    {name: "PyTorch", level: 90, category: "AI"},
    {name: "numpy", level: 90, category: "AI"},
    {name: "pandas", level: 90, category: "AI"},
    {name: "matplotlib", level: 90, category: "AI"},
    {name: "HuggingFace", level: 90, category: "AI"},
    {name: "Langchain", level: 90, category: "AI"},
    {name: "AI Agents", level: 90, category: "AI"},


    //Tools

    {name: "Git/Github", level: 90, category: "tools"},
    {name: "Docker", level: 90, category: "tools"},
    {name: "AWS Lambda", level: 90, category: "tools"},
    {name: "VSCode", level: 90, category: "tools"},
    {name: "PyCharm", level: 90, category: "tools"},
    {name: "Figma", level: 90, category: "tools"}

]

const categories = ["All", "frontend", "backend","AI","tools"]

const SkillsSection = () => {

  const [activeCategory, setActiveCategory] = useState("All")

  const filterSkills = skills.filter((skill) => 
    activeCategory === "All" || skill.category === activeCategory
  );

  const getCardColor = (category) => {
  switch (category) {
    case 'frontend':
      return 'bg-pink-900/10 border border-pink-500';
    case 'backend':
      return 'bg-blue-900/10 border border-blue-500';
    case 'AI':
      return 'bg-green-900/10 border border-green-500';
    case 'tools':
      return 'bg-yellow-900/10 border border-yellow-500';
    default:
      return 'bg-muted border border-muted-foreground/20';
  }
};

  return (
    <section id='skill' className='py-24 px-4 bg-secondary/30'>
        <div className='container mx-auto max-w-6xl px-4'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                My <span className='text-primary'> Skills </span>
            </h2>

            <div className='flex flex-wrap justify-center gap-4 mb-12 '>
                {categories.map((category,key) => (
                  <button key={key}
                  onClick={()=> setActiveCategory(category)}
                  className={cn(
                    'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                    activeCategory === category ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:id-secondary'
                  )}>
                    {category}
                  </button>
                ))}

            </div>

            <div className='columns-2 sm:columns-2 lg:columns-7 gap-x-8'>

                {filterSkills.map((skill,key) => (
                    <div
                        key={key} 
                        className={`bg-card p-6 rounded-lg shadow-xs card-hover mb-6  ${getCardColor(skill.category)}`}>
                        <div className='text-left mb-4'>
                            <h3 className='font-semibold text-lg'>
                                {skill.name}

                            </h3>
                        </div>

                    </div>

                ))}

            </div>

        </div>

    </section>
  )
}

export default SkillsSection
