import TitleWithLabelInBG from '@/components/TitleWithLabelInBG';
import ContactLineOption from './components/ContactLineOption';
import SocialMediaIcons from './components/SocialMediaIcons';

export default function Contact() {
  return (
    <div className='flex flex-col'>
      <TitleWithLabelInBG title='get in touch' labelInBG='contact' />
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-4'>
          <div className='text-white lg:col-start-2 lg:col-span-2 px-4'>
            <p className='uppercase text-xl lg:text-2xl font-semibold pb-4'>Let's Collaborate!</p>
            <p className='mb-6'>
              Don't hesitate to reach out to me if you're looking to discuss new projects,
              innovative concepts, or any opportunities that align with your vision. I'm highly
              enthusiastic about exploring uncharted territories and to use my expertise to help you
              accomplish your objectives.
            </p>
            <p className='mb-6'>
              Whether you need assistance or simply want to chat about potential collaborations,
              feel free to shoot me a message. I'm excited to hear from you soon and see how we can
              work together towards achieving your goals!
            </p>
            <ContactLineOption
              title='mail me'
              body='xavier.garcia@prometeo.dev'
              icon='fa-envelope-circle-check'
            />
            <ContactLineOption title='call me' body='+593959795664' icon='fa-square-phone' />
            <SocialMediaIcons classes='pt-2 mb-12' />
          </div>
        </div>
      </div>
    </div>
  );
}
