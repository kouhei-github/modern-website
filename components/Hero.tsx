import {NextPage} from 'next'
import {useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

const Hero: NextPage = () => {
  const [text, count] = useTypewriter({
    words: [
        "Hi, My Name is Kohei.",
        "I am full stack engineer.",
        "I often use",
        "PHP, Laravel",
        "Python, Django",
        "Go, Gin",
        "TypeScript, Next.js",
        "TypeScript, Nuxt.js",
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
      <div className={"h-screen flex flex-col space-y-8 items-center text-center justify-center overflow-hidden"}>
        <BackgroundCircles />
        <img className={"relative rounded-full h-32 w-32 mx-auto object-cover "} src="/download-1.jpg" alt="" />
        <div className={"z-20"}>
          <h2 className={"text-sm uppercase text-gray-500 pb-2 tracking-[15px]"}>Software Engineer</h2>
          <h1 className={"text-5xl lg:text-6xl font-semibold scroll-px-10"}>
            <span className={"mr-3"}>{text}</span>
            <Cursor cursorColor={"#F7AB0A"} />
          </h1>
          <div className={"pt-5"}>
            <Link href={"#about"}>
              <button className="heroButton">About</button>
            </Link>
            <Link href={"#experience"}>
              <button className="heroButton">Experience</button>
            </Link>
            <Link href={"#skills"}>
              <button className="heroButton">Skills</button>
            </Link>
            <Link href={"#projects"}>
              <button className="heroButton">Projects</button>
            </Link>

          </div>
        </div>
      </div>
  )
}

export default Hero
