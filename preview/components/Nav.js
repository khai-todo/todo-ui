const Nav = ({items, Link, Anchor}) => <nav><ul>{
  items.map(
    ([href, content], index) => <li key={index}>
      <Link href={href}>
        <Anchor>{content}</Anchor>
      </Link>
    </li>
  )
}</ul></nav>

export default Nav
