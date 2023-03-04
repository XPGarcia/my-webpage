import { useTranslation } from '@/app/i18n';
import TitleWithLabelInBG from '@/components/TitleWithLabelInBG';
import ContactLineOption from './components/ContactLineOption';
import SocialMediaIcons from './components/SocialMediaIcons';

interface Props {
  params: { lng: string };
}

export default async function Contact({ params: { lng } }: Props) {
  const { t: translation } = await useTranslation(lng, ['contact']);

  return (
    <div className='flex flex-col'>
      <TitleWithLabelInBG title={translation('get_in_touch')} labelInBG={translation('contact')} />
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-4'>
          <div className='text-white lg:col-start-2 lg:col-span-2 px-4'>
            <p className='uppercase text-xl lg:text-2xl font-semibold pb-4'>
              {translation('lets_collaborate')}
            </p>
            <p className='mb-6'>{translation('contact_p1')}</p>
            <p className='mb-6'>{translation('contact_p2')}</p>
            <ContactLineOption
              title={translation('mail_me')}
              body='xavier.garcia@prometeo.dev'
              icon='fa-envelope-circle-check'
            />
            <ContactLineOption
              title={translation('call_me')}
              body='+593959795664'
              icon='fa-square-phone'
            />
            <SocialMediaIcons classes='pt-2 mb-12' />
          </div>
        </div>
      </div>
    </div>
  );
}
