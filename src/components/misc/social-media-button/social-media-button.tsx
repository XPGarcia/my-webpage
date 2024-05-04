import Link from 'next/link';

interface Props {
  link: string;
  icon: string;
}

export const SocialMediaButton = ({ link, icon }: Props) => {
  return (
    <Link
      href={link}
      className='flex justify-center items-center w-11 h-11 bg-customDarkGray-400 rounded-full'
      rel='noreferrer'
      target='_blank'
    >
      <i className={`fa-brands ${icon}`} />
    </Link>
  );
};
