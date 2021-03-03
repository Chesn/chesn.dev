import React from 'react'

// markup
export default function NotFoundPage () {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex -mt-20 opacity-0 animate__animated animate__fadeInUp">
        <div className="flex items-center pr-4 text-2xl text-gray-700">
          404
        </div>

        <div className="pl-4 border-l">
          <div className="text-gray-700">
            Page Not Found
          </div>
          <a
            className="text-sm text-blue-500"
            href="/">
            Go Home
          </a>
        </div>
      </div>
    </div>
  )
}
