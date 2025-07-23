export default function ThemeSwitcher({ onChange }: { onChange: (theme: string) => void }): any {
  return (
    <div className="mb-4">
      <label className="mr-2 font-medium">Choose Theme:</label>
      <select
        onChange={(e: { target: { value: string; }; }) => onChange(e.target.value)}
        className="border border-gray-400 rounded px-2 py-1"
      >
        <option value="default">Default</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  )
}