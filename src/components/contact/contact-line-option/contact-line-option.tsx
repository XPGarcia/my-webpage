interface Props {
  title: string;
  body: string;
  icon: string;
}

export const ContactLineOption = ({ title, body, icon }: Props) => {
  return (
    <div className='flex mb-4 pt-2'>
      <div className='w-full' style={{ maxWidth: '40px' }}>
        <i className={`fa-solid ${icon} w-full text-center text-red-500 text-4xl`} />
      </div>
      <div className='flex flex-col pl-4 font-semibold'>
        <span className='uppercase text-gray-400'>{title}</span>
        <p>{body}</p>
      </div>
    </div>
  );
};
