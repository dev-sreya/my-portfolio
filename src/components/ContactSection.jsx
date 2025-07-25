import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import {cn} from '/src/lib/utils'
import { useRef } from 'react'

const ContactSection = () => {

    const formRef = useRef(null);

  const handleSubmit = (e) => {
    // Wait a bit to allow the form to be submitted to Web3Forms
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.reset(); //  Clears all form fields
      }
    }, 150); // Delay slightly to ensure form submission happens
  };

 
  return (

    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                Get In <span className='text-primary'> Touch </span>
            </h2>

            <p className='test-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Have a project  in mind or want to colllaborate? Feel free to reach out. I'm always open to discussing new opportunities.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-8'>
                    <h3 className='text-2xl font-semibold mb-6'>
                        Contact Information
                    </h3>

                    <div className='space-y-6'>
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Mail className='h-6 w-6 text-primary' /> {" "}
                            </div>

                            <div>
                                <h4 className='font-medium text-left'> Email </h4>
                                <a href='mailto:sreya123z@gmail.com' className='text-muted-foreground hover:text-primary transition-colors'>  sreyaworldz@gmail.com </a>
                            </div>
                        </div>

                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Phone className='h-6 w-6 text-primary' /> {" "}
                            </div>

                            <div>
                                <h4 className='font-medium text-left'> Phone </h4>
                                <a href='tel:+919874584555' className='text-muted-foreground hover:text-primary transition-colors'>  +91-9748645488 </a>
                            </div>
                        </div>

                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <MapPin className='h-6 w-6 text-primary' /> {" "}
                            </div>

                            <div>
                                <h4 className='font-medium text-left'> Location </h4>
                                <a  className='text-muted-foreground hover:text-primary transition-colors'>  Bangalore, Karnataka, India </a>
                            </div>
                        </div>

                    </div>

                    <div className='px-8 text-left'>
                        <h4 className='font-medium mb-4'>
                            Connect with Me
                        </h4>
                        <div className='flex space-x-4'>
                            <a href='https://www.linkedin.com/in/sreya-karmakar-622752167/' target='_blank'>
                                <Linkedin />
                            </a>

                            <a href='https://www.instagram.com/sreya2sk' target='_blank'>
                                <Instagram />
                            </a>

                            <a href='https://x.com/sreya_intech' target='_blank'>
                                <Twitter />
                            </a>


                        </div>
                    </div>

                </div>


                <div className='bg-card p-8 rounded-lg shadow-xs'>
                    <h3 className='text-2xl font-semibold mb-6'>  Send a Message </h3>

                    <form ref={formRef}
                    action="https://api.web3forms.com/submit" method="POST" target='_blank'
                    onSubmit={handleSubmit}
                    className='space-y-6'>

                        <input type="hidden" name="access_key" value="97158c67-9de8-4b4e-9371-7169378b1fa6"/>

                        <div>
                            <label htmlFor='name' className='block text-sm font-medium mb-2 text-left'> {" "} Your Name </label>
                            <input type='text'
                            id='name'
                            name='name'
                            required
                            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='John Doe...' />
                        </div>

                        <div>
                            <label htmlFor='email' className='block text-sm font-medium mb-2 text-left'> {" "} Your Email </label>
                            <input type='email'
                            id='email'
                            name='email'
                            required
                            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='john123@email.com...' />
                        </div>

                        <div>
                            <label htmlFor='message' className='block text-sm font-medium mb-2 text-left'> {" "} Your Message </label>
                            <textarea type='text'
                            id='message'
                            name='message'
                            required
                            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' placeholder='Hey, I saw your profile, I would like to talk about...' />
                        </div>

                        <input type="checkbox" name="botcheck" className="hidden" />

                        <button type='submit' className={cn('cosmic-button w-full flex items-center justify-center gap-2',

                        )}>

                            Send Message

                            <Send size={16} />

                        </button>


                    </form>

                </div>
            </div>
      
        </div>

    </section>
   
  )
}

export default ContactSection
