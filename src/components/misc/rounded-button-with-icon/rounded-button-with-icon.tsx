interface Props {
  body: string;
  icon: string;
  isAnchor?: boolean;
  link?: string;
  download?: boolean;
  onButtonClicked?: () => void;
}

export const RoundedButtonWithIcon = ({
  body,
  icon,
  isAnchor,
  link,
  download,
  onButtonClicked
}: Props) => {
  const buttonStyles = { borderRadius: '56px', paddingRight: '70px' };

  const buttonClasses =
    'relative flex justify-center items-center w-fit py-4 pl-8 border border-red-500 hover:bg-red-500 transition-colors hover:ease-in';

  const content = (
    <div>
      <span className='uppercase font-semibold text-white'>{body}</span>
      <div className='absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-red-500 rounded-full flex justify-center items-center'>
        <i className={`${icon} fa-solid fa-lg text-white`} />
      </div>
    </div>
  );

  const anchorComponent = (
    <a href={link} className={buttonClasses} style={buttonStyles} download={download}>
      {content}
    </a>
  );

  const buttonComponent = (
    <button onClick={onButtonClicked} className={buttonClasses} style={buttonStyles}>
      {content}
    </button>
  );

  return isAnchor ? anchorComponent : buttonComponent;
};
