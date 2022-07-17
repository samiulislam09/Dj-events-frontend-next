import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home({ events }) {
  console.log(events)
  return (
    <div>
      <Layout>
         
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await (fetch('http://localhost:3000/api/events'))
  const parsedData = await data.json()
  return {
    props: {
      events:parsedData
    }
  }
}