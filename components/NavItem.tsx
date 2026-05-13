
const NavItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className='cursor-pointer hover:text-kaweb2-500 hover:before:bg-kaweb2-500 hover:before:h-full before:rotate-25 before:transition-all  transition pl-2 before:content-[""] relative before:absolute before:-translate-y-1/2 before:top-1/2 before:left-0 before:size-1 before:rounded-full  before:bg-white'>
      {children}
    </li>
  );
};

export default NavItem;
