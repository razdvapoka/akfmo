import Link from 'next/link'
import Image from 'next/image'
import ArrowRight from '../../assets/svg/arrow-right.svg'
import homeIntroImage from '../../assets/images/home-intro.jpg'

const Intro = () => {
  return (
    <section className="grid grid-cols-2 grid-rows-1 min-h-[26rem] mb-16">
      <div className="pt-4 pr-2 flex flex-col justify-between border-r">
        <h2 className="max-w-4xl uppercase text-[1.6rem] font-bold leading-[1.1]">
          The Cultural Forum Moscow sees itself as a co-operational partner and
          contact point for Austrian artists, cultural institutions and
          scientists for the initiation, planning and implementation of
          Austro-Russian and Austro-Belarusian cultural and scientific projects.
        </h2>
        <Link href="/">
          <a className="flex justify-between items-center">
            <span className="max-w-4xl uppercase text-[1.6rem] font-bold leading-[1.1]">
              Learn more about AKFMO
            </span>
            <ArrowRight className="w-[1.2rem] h-[1.6rem]" />
          </a>
        </Link>
      </div>
      <div className="pt-4 flex justify-center items-center">
        <div className="block max-w-[34.5rem] w-full ">
          <Image
            src={homeIntroImage}
            alt="home intro image"
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  )
}

export default Intro