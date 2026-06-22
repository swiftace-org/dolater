import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Combine class strings & resolve Tailwind conflicts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
