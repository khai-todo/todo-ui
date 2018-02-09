const Nav = ({items, Link}) => <nav><ul>{
  items.map(
    ([href, content]) => <li>
      <Link href={href}>{content}</Link>
    </li>
  )
}</ul></nav>

export default Nav
