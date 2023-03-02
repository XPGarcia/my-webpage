interface Props {
  lng: string;
}

// backgroundImage: `url("/${lng}/images/profile.jpg")`

export default function BGMyProfileImage({ lng }: Props) {
  return (
    <div
      className='hidden lg:block w-1/3 fixed top-10 left-10 bg-cover bg-no-repeat bg-top z-10 rounded-3xl shadow-md'
      style={{
        backgroundImage: 'url("/images/profile.jpg")',
        height: 'calc(100vh - 80px)'
      }}
    />
  );
}
