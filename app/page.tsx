import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>OLÁ MUNDO</h1>
      {/* <a href='/users'>Users</a> */}
      <Link href='/users'>Users</Link> {/* Client-Side Navigation */}

      <ProductCard></ProductCard>
    </main>
  )
}
