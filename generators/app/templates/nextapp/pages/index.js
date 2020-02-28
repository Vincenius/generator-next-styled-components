import Head from 'next/head'
import styled from 'styled-components'

const Headline = styled.h1`
  color: red;
`

const Home = () => (
  <div className="container">
    <Head>
      <title><%= projectName %></title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Headline>
        Welcome to your new project: <%= projectName %>
      </Headline>
    </main>
  </div>
)

export default Home
