'use client'

import {
  Contact,
  Footer,
  FrequentQuestions,
  HeaderComponent,
  Hero,
  HowItWorks,
  Services,
  SuccessStories,
  Statistics
} from '@/features/landing'
import SendMoney from './SendMoney/page'
import ShippingWithdrawal from './ShippingWithdrawal/page'
import ScrollToTopButton from '@components/ScrollToTopButton'

const LandingView = () => {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <main className='font-roboto'>
        {/* <section id='hero'>
          <Hero />
        </section> */}
        <section id='send-money'>
          <SendMoney />
        </section>
        <section id='how-it-works'>
          <HowItWorks />
        </section>
        {/* <section>
          <ShippingWithdrawal />
        </section>
        <section title='statistics'>
          <Statistics />
        </section> */}
        <section id='benefits'>
          <Services />
        </section>
        <section id='destination'>
          <SuccessStories />
        </section>
        <section id='frequent-questions'>
          <FrequentQuestions />
        </section>
        {/* <div className='my-12 h-0.5 bg-tuiu-green-300' aria-hidden='true'></div> */}
        <section id='contact-us'>
          <Contact />
        </section>
        <section id='footer'>
          <Footer />
        </section>
        <ScrollToTopButton />
      </main>
    </>
  )
}

export default LandingView
