import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  const [markdown, setMarkdown] = useState("")
  const router = useRouter()

  const handlePreview = () => {
    localStorage.setItem("markdown", markdown)
    router.push("/preview")
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Markdown Portfolio Generator</h1>
      <textarea
        className="w-full h-96 border border-gray-400 p-4 rounded"
        placeholder="Paste your Markdown here..."
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <button
        onClick={handlePreview}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Preview Portfolio
      </button>
    </div>
  )
}