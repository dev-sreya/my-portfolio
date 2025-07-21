import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'
import SectionWrapper from '../hoc/SectionWrapper'
import { textVariant } from '../lib/utils'
import { experiences } from '../constants/constants'



const ExperienceCard = ({experience,isDarkMode}) => (

    
    <VerticalTimelineElement id='experience'
    contentStyle={{background:  '#1d1836', color:'#fff'}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={experience.date} 
    dateClassName="timeline-date"
    iconStyle={{ background: experience.iconBg}}
    icon= {
        <div className='flex justify-center items-center w-full h-full'>
            <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[75%] h-[80%] object-contain'
             />

        </div>
    }
    >

        <div className=''>
            <h3 className=' text-[24px] font-bold text-secondary text-left'>
                {experience.title}
            </h3>
            <p className='text-secondary text-[16px] font-semibold text-left'
            style={{margin: 0}}>
                {experience.company_name}
            </p>
        </div>

        <ul className=' mt-5 list-disc ml-5 space-y-2 text-left'>
            {experience.points.map((point,index) => (
                <li key={`experience-point-${index}`}
                className='text-muted-foreground text-[14px] pl-1 tracking-wider'>
                    {point}

                </li>
            ))}

        </ul>

        

    </VerticalTimelineElement>
   
)


const Experience = () => {
  return (
    <>

        <motion.div variants={textVariant()}>
           

            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            Work <span className='text-primary'> Experience </span> and <span className='text-primary'> Education </span>
            </h2>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>

            </div>

        </motion.div>
      
    </>
  )
}

export default SectionWrapper(Experience,'eork')
