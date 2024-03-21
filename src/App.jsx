import Navbar from './components/Navbar';
import {
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
  SuperQuality,
} from './sections';

function App() {
  return (
    <main className='relative'>
      <Navbar />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className='padding'>
        <Subscribe />
      </section>
      <section className='padding bg-black'>
        <Footer />
      </section>
    </main>
  )
}

export default App
