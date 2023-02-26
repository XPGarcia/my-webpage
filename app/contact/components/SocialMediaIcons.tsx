import SocialMediaButton from './SocialMediaButton';

interface Props {
  classes: string;
}

export default function SocialMediaIcons({ classes }: Props) {
  return (
    <div className={`flex ${classes}`}>
      <div className='mr-3'>
        <SocialMediaButton
          link='https://www.linkedin.com/in/xavier-garcia-bano-244b60245/'
          icon='fa-linkedin'
        />
      </div>
      <div className='mr-3'>
        <SocialMediaButton link='https://github.com/XPGarcia' icon='fa-github' />
      </div>
    </div>
  );
}
