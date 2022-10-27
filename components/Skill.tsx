import {NextPage} from 'next'
import {motion} from 'framer-motion'

type Props = {
  directionLeft?: boolean
}

const Skills: NextPage<Props> = (props) => {
  return (
    <div className={"group relative flex cursor-pointer"}>
      <motion.img className={""}
        initial={{x: props.directionLeft ? -200 : 200, opacity: 0}}
        transition={{duration: 1}}
        whileInView={{opacity: 1}}
        src={"/nextjs.png"}
      />
    </div>
  )
}

export default Skills
