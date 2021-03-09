// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import gsap from "gsap"
import { Button } from "../pages"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Stream: React.FC = () => (
  <Layout>
    <SEO title="Susbcribe" />
    <div className="w-full h-screen flex items-center">
      <div className="max-w-xl w-full mx-auto">
        <p>
          Stream here, probs a link tree embed

        </p>
        <AniLink cover direction="right" bg="black" to={"/"}>
          <Button>Back</Button>
        </AniLink>
      </div>
    </div>
  </Layout>
)

export default Stream
