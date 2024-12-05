import { TitleWithLabelInBG, ContactLineOption, SocialMediaIcons } from '@/src/components';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Xavier García - Contact',
  description: 'Has a Job that needs a Full-Stack developer? Feel free to contact me.'
};

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
            <SocialMediaIcons classes='pt-2 mb-12' />
          </div>
        </div>
      </div>
    </div>
  );
}
