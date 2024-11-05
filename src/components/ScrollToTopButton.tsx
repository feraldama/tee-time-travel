'use client'

import React, { useEffect, useState, useRef, useCallback } from 'react'
import { ArrowUpImage } from './icons'

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [buttonBottom, setButtonBottom] = useState(100)
  const footerRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight

    setIsVisible(scrollY > 300)

    if (footerRef.current) {
      const footerTop = footerRef.current.getBoundingClientRect().top
      const offset = footerTop - windowHeight

      setButtonBottom(offset < 0 ? -offset + 20 : 100)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div id='footer' ref={footerRef}></div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed right-4 z-50 flex items-center justify-center w-[64px] h-[71px] md:w-[96px] md:h-[107px] bg-white bg-opacity-50 border-[3px] border-tuiu-green-300 rounded-[12px] md:rounded-[20px] shadow-lg backdrop-blur-sm hover:bg-opacity-75 transition-opacity focus:outline-none focus:ring-2 focus:ring-tuiu-green-300 focus:ring-opacity-50'
          style={{
            bottom: `${buttonBottom}px`
          }}
          aria-label='Scroll to top'
        >
          <ArrowUpImage />
        </button>
      )}
    </>
  )
}

export default ScrollToTopButton
