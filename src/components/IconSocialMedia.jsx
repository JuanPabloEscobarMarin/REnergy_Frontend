export function IconSocialMedia({ to, children }) {
  return (
    <li className="rounded-lg p-2 bg-[#FDF7F4]">
      <a href={to} target="_blank">
        {children}
      </a>

    </li>

  )
}
