import { useEffect, useState } from 'react'
import parseMarkdown from '../utils/parseMarkdown'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default function Preview() {
  const [htmlContent, setHtmlContent] = useState("")
  const [theme, setTheme] = useState("default")

  useEffect(() => {
    const md = localStorage.getItem("markdown") || ""
    parseMarkdown(md).then(setHtmlContent)
  }, [])

 return (
  <div className={`p-8 max-w-4xl mx-auto ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
    <ThemeSwitcher onChange={setTheme} />
    <div
      className={`prose lg:prose-xl max-w-none ${theme === "dark" ? "prose-invert" : ""}`}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  </div>
)

}