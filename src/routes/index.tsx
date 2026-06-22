import { createFileRoute, Link } from "@tanstack/react-router"
import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute("/")({ component: IndexPage })

function IndexPage() {
  const [count, setCount] = useState(0)
  return (
    <div className="p-4">
      <div className="flex items-center gap-4 mb-4">
        <span className="font-medium">Home</span>
        <Link to="/about" className="text-blue-500 hover:text-blue-500">
          About
        </Link>
        <ModeToggle />
      </div>
      <Button type="button" onClick={() => setCount(count + 1)} className="w-30 cursor-pointer">
        Click Me: {count}
      </Button>
    </div>
  )
}
