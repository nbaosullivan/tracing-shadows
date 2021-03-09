// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import gsap from 'gsap'
import { Button } from "../pages"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Subscribe: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Susbcribe" />
    <div className="max-w-6xl mt-8w-full mx-auto">
      <p>
        Form here
        <form className="space-y-6 mb-8" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1">
              <input id="email" name="email" type="email" autoComplete="email" required
                     className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
          </div>
        </form>
      </p>
      <AniLink hex={'#000000'} paintDrip to="/"><Button>Back</Button></AniLink>
    </div>

  </Layout>
)

export default Subscribe

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
