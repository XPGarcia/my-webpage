interface Props {
  title: string;
  body: string;
  bodyColor?: string;
  overflow?: boolean;
}

export default function PersonalInfoGridItem({ title, body, bodyColor, overflow }: Props) {
  return (
    <div className='pb-5'>
      <span className='capitalize text-gray-200 opacity-80'>{title}:</span>
      <p
        className={`text-white font-semibold ${bodyColor} ${
          overflow && 'overflow-x-scroll sm:overflow-x-auto'
        }`}
      >
        {body}
      </p>
    </div>
  );
}
