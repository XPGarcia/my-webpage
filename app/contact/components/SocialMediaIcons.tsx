import { SocialMedia } from '@/domain/entities';
import SocialMediaButton from './SocialMediaButton';

interface Props {
  socialMedia: SocialMedia;
  classes: string;
}

export default function SocialMediaIcons({ socialMedia, classes }: Props) {
  return (
    <div className={`flex ${classes}`}>
      <div className='mr-3'>
        {socialMedia.linkedin && (
          <SocialMediaButton link={socialMedia.linkedin} icon='fa-linkedin' />
        )}
      </div>
      <div className='mr-3'>
        {socialMedia.github && <SocialMediaButton link={socialMedia.github} icon='fa-github' />}
      </div>
    </div>
  );
}
