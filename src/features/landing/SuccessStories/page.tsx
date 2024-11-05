'use client'

import React from 'react'
import Image from 'next/image'
import flagImageSpain from '../../../../public/assets/images/flags/spain.png'
import flagImageSweden from '../../../../public/assets/images/flags/sweden.png'
import flagImageFrance from '../../../../public/assets/images/flags/france.svg'
import profile1Image from '../../../../public/assets/images/profile/profile1.png'
import profile2Image from '../../../../public/assets/images/profile/profile2.png'
import profile3Image from '../../../../public/assets/images/profile/profile3.png'

const stories = [
  'David pudo pagar los estudios médicos de sus padres desde España.',
  'Elene envía dinero a su hermana todos los meses desde Suecia.',
  'Lidia paga los estudios de sus hijos desde Francia.'
]

const profileImages = [profile1Image, profile2Image, profile3Image]
const flagImages = [flagImageSpain, flagImageSweden, flagImageFrance]

const highlightPhrases = [
  'pagar los estudios médicos de sus padres',
  'envía dinero a su hermana',
  'paga los estudios de sus hijos',
  'efectúa los pagos de sus hijos'
]

const renderStoryCard = (story: string, index: number) => {
  const highlightedStory = story.replace(
    highlightPhrases[index % highlightPhrases.length],
    match => `<span class="font-bold text-tuiu-green-300">${match}</span>`
  )

  return (
    <div
      key={index}
      className='min-w-[350px] max-w-[200px] h-[250px] mx-[20px] bg-white rounded-[29px] shadow-md relative flex flex-col justify-start mt-[50px]'
    >
      <div className='absolute top-[-50px] left-[40px] z-10 w-[100px] h-[100px] rounded-full overflow-hidden'>
        <Image
          src={profileImages[index % profileImages.length]}
          alt={`Profile ${index + 1}`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='absolute top-[20px] right-[30px] w-[60.46px] h-[40.21px]'>
        <Image
          src={flagImages[index % flagImages.length]}
          alt={`Flag ${index + 1}`}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className='w-full h-[164px] font-roboto font-normal text-[30px] leading-[36px] text-[#010101] text-left mt-[60px] px-[20px]'>
        <span dangerouslySetInnerHTML={{ __html: highlightedStory }} />
      </div>
    </div>
  )
}

export default function SuccessStories() {
  return (
    <section className='bg-tuiu-green-100 max-w-[2000px] min-h-[688.58px] flex flex-col items-center py-20'>
      <h2 className='font-bold text-3xl xl:text-[51px] mb-[50px] text-[#4095DB] font-inter'>Casos de éxito</h2>

      <div className='relative overflow-hidden w-full h-[350px]'>
        <div className='flex animate-scroll'>
          {[...stories, ...stories].map((story, index) => renderStoryCard(story, index))}
        </div>
      </div>
    </section>
  )
}
