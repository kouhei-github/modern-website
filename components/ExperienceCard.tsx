import {NextPage} from 'next'
import {motion} from 'framer-motion'

const ExperienceCard: NextPage = () => {
  return (
      <article className={"flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"}>
        {/* viewportでアニメーションを最初のみ表示するか、何度も表示するかの設定を行う */}
        <motion.img
            initial={{ x: 0, opacity: 0 }}
            transition={{ duration: 2.2 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}

            src="/aws.png"
            className={"w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center mx-auto"}
            alt=""/>

        <div className={"px-0 md:px-10"}>
          <h4 className={"text-4xl font-light"}>CEO of PAPFAM</h4>
          <p className={"font-bold text-2xl mt-1"}>PAPFAM</p>
          <div className={"flex space-x-2 my-2"}>
            <img className={"h-10 w-10 rounded-full object-cover object-center"} src="/javascript.jpg" alt=""/>
            <img className={"h-10 w-10 rounded-full object-cover object-center"} src="/javascript.jpg" alt=""/>
            <img className={"h-10 w-10 rounded-full object-cover object-center"} src="/javascript.jpg" alt=""/>
          </div>
          <p className={"uppercase py-5 text-gray-300"}>started work... - Ended...</p>

          <div className={"h-[220px] overflow-y-scroll"}>
            <ul className="list-disc space-y-4 ml-5 text-lg ">
              <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
              <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
              <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
              <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
              <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
            </ul>
          </div>
        </div>
      </article>
  )
}

export default ExperienceCard
