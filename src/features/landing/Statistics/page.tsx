import React, { useState, useEffect, useRef } from 'react'
import { UsersConversationIcon, MoneyCoinCashIcon, SavingWalletIcon, CurrencyExchangeIcon } from '@/components/icons'

type Layout = 'default' | 'icon-right' | 'icon-left' | 'icon-top-right'

interface StatCardProps {
  title: string
  value: string
  icon: React.ReactNode
  order: string
  span?: string
  height: string
  layout: Layout
}

const AnimatedValue: React.FC<{ endValue: number; duration: number; className: string }> = ({
  endValue,
  duration,
  className
}) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const prevTimeRef = useRef(0)

  useEffect(() => {
    const startTime = performance.now()
    const animate = (currentTime: number) => {
      if (!prevTimeRef.current) prevTimeRef.current = currentTime
      const deltaTime = currentTime - prevTimeRef.current
      prevTimeRef.current = deltaTime

      const progress = (currentTime - startTime) / duration
      if (progress < 1) {
        countRef.current = Math.min(endValue, Math.floor(progress * endValue))
        setCount(countRef.current)
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }
    requestAnimationFrame(animate)
  }, [endValue, duration])

  return <span className={className}>{count}</span>
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, order, span = '', height, layout }) => {
  const isLargeCard = layout === 'icon-top-right' && span.includes('lg:row-span-2')
  const isIconTopRight = layout === 'icon-top-right'
  const numericValue = parseInt(value.replace(/\D/g, ''), 10)

  return (
    <div className={`bg-white rounded-[10px] md:rounded-[18px] w-full shadow-md ${span} ${height} ${order}`}>
      <div className='flex flex-col justify-between h-full p-4 md:p-6'>
        <div className='flex justify-between items-start mb-4'>
          <span className='text-[32px] md:text-5xl font-black'>
            {isNaN(numericValue) ? (
              value
            ) : (
              <>
                {value.startsWith('G$') && 'G$ '}
                <AnimatedValue endValue={numericValue} duration={2000} className='text-[32px] md:text-5xl font-black' />
                {value.includes('+') && '+'}
              </>
            )}
          </span>
          {isIconTopRight && <div className='lg:hidden'>{icon}</div>}
        </div>
        <div className={`flex flex-col h-full ${isLargeCard ? '' : 'lg:justify-center'}`}>
          {!isIconTopRight && (
            <div className={`flex ${layout === 'icon-left' ? 'justify-start' : 'justify-end'} mb-4 lg:hidden`}>
              {icon}
            </div>
          )}
          <div className={`flex justify-start mt-auto ${isLargeCard ? 'lg:h-full lg:items-center' : 'lg:mt-4'}`}>
            <p className='xl:hidden uppercase text-tuiu-green-300 text-sm md:text-4xl font-semibold text-left'>
              {title}
            </p>
            <p className='hidden xl:inline text-tuiu-green-300 text-sm md:text-4xl font-semibold text-left'>{title}</p>
          </div>
        </div>
        <div className='hidden lg:block lg:self-end lg:mt-auto'>{icon}</div>
      </div>
    </div>
  )
}

const Statistics: React.FC = () => {
  const stats: StatCardProps[] = [
    {
      title: 'Envíos de dinero realizados',
      value: '1523',
      icon: <CurrencyExchangeIcon className='sm:w-32 sm:h-32 w-10 h-10' />,
      order: 'order-1',
      height: 'h-[195px] md:h-[355px]',
      layout: 'icon-right'
    },
    {
      title: 'Países enviaron dinero a Paraguay',
      value: '53',
      icon: <SavingWalletIcon className='sm:w-32 sm:h-32 w-10 h-10' />,
      order: 'order-2',
      height: 'h-[195px] md:h-[355px]',
      layout: 'icon-left'
    },
    {
      title: 'Familias Paraguayas felices',
      value: '1000+',
      icon: <UsersConversationIcon className='sm:w-40 sm:h-40 w-20 h-20' />,
      order: 'order-last md:order-last lg:order-3',
      span: 'col-span-2 md:col-span-2 lg:col-span-1 lg:row-span-2',
      height: 'h-[195px] md:h-[355px] lg:h-[744px]',
      layout: 'icon-top-right'
    },
    {
      title: 'Millones de Guaraníes enviados',
      value: 'G$ 450M+',
      icon: <MoneyCoinCashIcon className='sm:w-40 sm:h-40 w-20 h-20' />,
      order: 'order-3 md:order-3 lg:order-4',
      span: 'col-span-2 md:col-span-2 lg:col-span-2',
      height: 'h-[195px] md:h-[355px]',
      layout: 'icon-top-right'
    }
  ]

  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-tuiu-green-100'>
      <div className='container px-4 md:px-6 mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
