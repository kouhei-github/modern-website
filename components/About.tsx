import {NextPage} from 'next'
import {motion} from 'framer-motion'

const About: NextPage = () => {
  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.2}}
        className={"flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto"}
    >
      <h3 className={"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl"}>About</h3>
      <motion.img className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] mx-auto"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="/my-official.jpg"
      />
      <motion.div
          initial={{x: 200, opacity: 0}}
          transition={{duration: 1.2}}
          whileInView={{x: 0, opacity: 1}}
          viewport={{ once: true }}
          className={"space-y-10 px-0 md:px10"}>
        <h4 className={"text-4xl font-semibold"}>what were i <span className={"underline decoration-[#F7AB0A]/50"}>creating</span> at job?</h4>
        <p className={"text-sm"}>株式会社DYM入社後、確率的生成モデルによるIndeedのアルゴリズム解析を行う。
          また、BtoCの企業向けにビッグデータ（売上・ロス・客層・時間帯・曜日など）を用いた、商品情報の管理と売上予測を行うツールAIPOS（アイポス）を開発中。
          同時進行で、YouTubeやTikTokの解析を行い最先端の開発を担当している。
        </p>
        <div className={"w-full text-sm"}>
          <div className={"flex flex-col"}>
            <p>----------------------------</p>
            <p>Webアプリケーションの開発（PHP/Python/TypeScript/Go）</p>
            <p>RPA（Python/Go）</p>
            <p>アルゴリズム解析（Python）</p>
            <p>----------------------------</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
