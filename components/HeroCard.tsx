const HeroCard = ({
  title,
  body,
  children,
}: {
  title: string;
  body: string;
  children: React.ReactNode;
}) => {
  return (
    <div className='hero-card'>
      <div className='flex items-center justify-between mb-2'>
        <h3>{title}</h3>
        <span className='inline-flex items-center'>{children}</span>
      </div>
      <p>{body}</p>
    </div>
  );
};

export default HeroCard;
