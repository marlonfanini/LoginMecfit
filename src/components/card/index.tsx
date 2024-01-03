function Card(props: {
  variant?: string;
  extra?: string;
  color?: string;
  children?: JSX.Element | any[];
  [x: string]: any;
}) {
  const { variant, extra, color, children, ...rest } = props;
  return (
    <div
      className={`!z-5 relative flex flex-col rounded-[20px] ${ color? `${color}` : 'bg-white'} bg-clip-border shadow-3xl ${
        props.default
          ? 'shadow-shadow-500 dark:shadow-none'
          : 'shadow-shadow-100 dark:shadow-none'
      }  dark:!bg-navy-800 dark:text-white  ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
