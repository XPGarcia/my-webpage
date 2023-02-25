interface Props {
  title: string;
  body: string;
  icon: string;
}

export default function ContactLineOption({ title, body, icon }: Props) {
  return (
    <div className='flex mb-4 pt-2'>
      <i className={`fa-solid ${icon} text-red-500 text-4xl`} />
      <div className='flex flex-col pl-4 font-semibold'>
        <span className='uppercase text-gray-400'>{title}</span>
        <p>{body}</p>
      </div>
    </div>
  );
}
