import { useState } from "react"

export function MenuListItem({ to, text }) {
  const [itemFocus, setItemFocus] = useState(false);
  return (
    <li className="flex justify-between border-b border-[#EDF1D6] hover:border-[#40513B] transition-colors"
      onMouseEnter={() => setItemFocus(true)}
      onMouseLeave={() => setItemFocus(false)}
    >
      <a href={to} className="pb-4">{text}</a>

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke={itemFocus ? "#40513B" : "#EDF1D6"} strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" />
        <path d="M2 12H22" />
      </svg>

    </li>
  )
}
