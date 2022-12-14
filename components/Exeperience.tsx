import {NextPage} from 'next'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'

const Experience: NextPage = () => {
  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className={"h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"}>
      <h3 className={"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"}>Experience</h3>
      <div className={"absolute w-full flex space-x-3 overflow-x-scroll p-10 snap-x snap-mandatory mt-24"}>
        {/* experience code */}
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />

        {/* experience code */}

        {/* experience code */}

      </div>

    </motion.div>
  )
}

export default Experience
