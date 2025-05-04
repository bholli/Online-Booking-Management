import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24">
      <BackgroundImage className="-top-36 -bottom-14" />
      <Container className="relative text-center">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">LongCovidClinics.com - </span>A directory of long covid clinics.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Find a long covid clinic near you.
            </p>

            <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                <input
                  type="text"
                  required
                  placeholder="Enter a city, state, or zip code"
                  aria-label="Enter a city, state, or zip code"
                  className="-my-2.5 flex-auto bg-transparent pr-2.5 pl-6 text-base text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
                />
                <Button type="submit">
                  <span className="sr-only sm:not-sr-only">Search</span>
                  <ArrowRightIcon className="h-6 w-6" />
                </Button>
              </div>

          </div>

        </div>
      </Container>
    </div>
  )
}
