import {NextPage} from 'next'
import {motion} from 'framer-motion'

const Projects: NextPage = () => {
  const projects = [1,2,3,4,5]
  return (
      <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1.5}}
          className={"h-screen relative flex overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto text-gray-500 text-2xl"}>
        <h3 className={"absolute md:top-24 top-6 uppercase tracking-[20px] text-gray-500 text-2xl w-full text-center"}
        >Projects
        </h3>

        <div className={"relative top-24 w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20"}>
          {/* Projects */}
          {projects.map((project, key) => (
              // snap-centerでスクロールが途中で終わらないように設定できる
              <div key={key} className={"w-screen flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"}>
                <motion.img
                    initial={{ y: -300, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}

                    src="/netflix.png" alt="" className={"md:w-3/5 w-full"}/>
                <div className={"space-y-10 px-0 md-px-10 max-w-6xl text-white"}>
                  <h4 className={"text-xl font-semibold text-center"}>
                    <span className={"underline decoration-[#F7AB0A]/50"}>Case Study {project} of {projects.length}:</span> UPS clone
                  </h4>
                  <p className={"text-lg text-center md:text-left overflow-y-scroll md:overflow-y-hidden h-[100px] md:h-full"}>
                    At Netflix, we want to entertain the world. Whatever your taste, and no matter where you live, we give you access to best-in-class TV series, documentaries, feature films and mobile games. Our members control what they want to watch, when they want it, with no ads, in one simple subscription. We’re streaming in more than 30 languages and 190 countries, because great stories can come from anywhere and be loved everywhere. We are the world’s biggest fans of entertainment, and we’re always looking to help you find your next favorite story.
                  </p>
                </div>
              </div>
          ))}
        </div>
        {/* skew */}
        <div className={"w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"} />


      </motion.div>
  )
}

export default Projects
