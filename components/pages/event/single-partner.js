import Image from 'next/image'
import { RichText } from 'prismic-reactjs'

export const SinglePartner = ({ partner }) => {
  return (
    <li className="w-[calc(5/18*100%)] mr-10 mb-6 lg:w-full lg:mr-0 lg:mb-4">
      <div className="filter grayscale border h-[15.6rem] flex justify-center items-center lg:w-full lg:h-[14rem]">
        <div className="w-[16rem] h-17 lg:w-[14rem] lg:h-15 relative">
          <Image
            src={partner.logo.url}
            alt={partner.logo.alt}
            layout="fill"
            objectFit="contain"
            width={partner.logo.dimensions.width}
            height={partner.logo.dimensions.height}
          />
        </div>
      </div>
      <div className="text-m leading-l mt-2 uppercase font-bold lg:text-m">
        <RichText render={partner.name} />
      </div>
    </li>
  )
}
