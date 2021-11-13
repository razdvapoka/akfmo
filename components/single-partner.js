import Image from 'next/image'
import { RichText } from 'prismic-reactjs'

export const SinglePartner = ({ partner }) => {
  return (
    <li>
      <div className="w-1/4 lg:w-1/2 mb-6 lg:mb-4">
        <Image
          src={partner.logo.url}
          alt={partner.logo.alt}
          layout="responsive"
          objectFit="cover"
          width={partner.logo.dimensions.width}
          height={partner.logo.dimensions.height}
        />
      </div>
      <div className="w-3/5 text-l leading-l lg:w-full lg:text-m">
        <RichText render={partner.description} />
      </div>
    </li>
  )
}
