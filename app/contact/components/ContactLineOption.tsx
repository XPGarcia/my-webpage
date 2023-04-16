'use client';

interface Props {
  title: string;
  body: string;
  icon: string;
}

export default function ContactLineOption({ title, body, icon }: Props) {
  const copyToClipboard = (text: string) => async (event: any) => {
    await navigator.clipboard.writeText(text);
    alert('Text copied 💪');
  };

  return (
    <div className='flex mb-4 pt-2'>
      <div className='w-full' style={{ maxWidth: '40px' }}>
        <i className={`fa-solid ${icon} w-full text-center text-red-500 text-4xl`} />
      </div>
      <div
        className='flex flex-col pl-4 font-semibold cursor-pointer'
        onClick={copyToClipboard(body)}
      >
        <span className='uppercase text-gray-400'>{title}</span>
        <p>{body}</p>
      </div>
    </div>
  );
}
