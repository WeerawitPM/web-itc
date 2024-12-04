import Image from 'next/image'
import Link from 'next/link';

type Props = {
    title: string;
    description: string;
    imageUrl: string;
}

export default function HeroSection({ title, description, imageUrl }: Props) {
    return (
        <>
            <section className="relative pt-32 dark:bg-gray-950 md:h-screen flex">
                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12 my-auto">
                    <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
                        <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
                        <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80" />
                    </div>
                    <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
                    <div className="my-auto relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                        <h1 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight
   font-bold text-gray-900 dark:text-white">
                            {/* Social Media <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">Marketing </span>
                            is the Best Ever. */}
                            {title.split(' ').slice(0, -1).join(' ')}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">
                                {title.split(' ').slice(-1)}
                            </span>
                        </h1>
                        <p className="mt-8 text-gray-700 dark:text-gray-300">
                            {description}
                        </p>
                        <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
                            <div className="flex sm:flex-row flex-col gap-5 w-full">
                                <Link href="#companies" className='mx-auto md:mx-auto lg:mx-auto'>
                                    <button className="text-white justify-center items-center w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                          after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554] hover:after:opacity-100 hover:after:scale-[2.5] bg-blue-600 border-transparent hover:border-[#172554]">
                                        <span className="relative z-[5]">
                                            Get Started
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                        {/* <Image src="https://teaminsights.io/wp-content/uploads/2021/11/Team-pana-1024x1024.png" alt="Hero image" width={2350} height={2359} className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" /> */}
                        <Image src={imageUrl} alt="Hero image" width={2350} height={2359} className="" priority unoptimized />
                    </div>
                </div>
            </section>
        </>
    )
}
