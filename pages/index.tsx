import Head from 'next/head'
import {NextPage} from 'next'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Exeperience'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div className={"bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0"}>
      <Head>
        <title>Nagamatsu Modern Website</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id={"hero"} className={"bg-[rgb(36,36,36)] snap-start"}>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className={"bg-[rgb(36,36,36)] snap-center"}>
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className={"bg-[rgb(36,36,36)] snap-center"}>
        <Experience />
      </section>

      {/* Skills */}
      <section id="skills" className={"bg-[rgb(36,36,36)] snap-center"}>
        <Skills />
      </section>
      {/* Projects */}

      {/* Contact Me */}

    </div>
  )
}
export default Home;
