import * as React from "react"
import { Link, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC<PageProps> = () => (
  <Layout isHome={true}>
    <SEO title="Home" />
    {/*<Section>*/}
    {/*  <div className="flex items-center">*/}
    {/*    <div className={'w-1/2 pr-16'}>*/}
    {/*      <h2 className={'font-medium text-5xl mb-5'}>New album available on vinyl on June 15th.</h2>*/}
    {/*      <p>Featuring “Dummy,” as well as non-album tracks “Jail Time” and “Mexican Vacation.” A very limited run of 500 copies pressed on beautiful 180 gram vinyl. Get it before it’s gone!</p>*/}

    {/*      <Button>Listen Now</Button>*/}
    {/*    </div>*/}
    {/*    <div className={'w-1/2'}>*/}
    {/*      <StaticImage className={'w-full h-auto'} src={'../images/record.jpeg'} alt={'record'}/>*/}

    {/*    </div>*/}
    {/*    */}
    {/*  </div>*/}

    {/*</Section>*/}
    {/*<Section dark={true}>*/}
    {/*    <SectionHeading>Press</SectionHeading>*/}
    {/*  <div><Teaser/><Teaser/><Teaser/><Teaser/><Teaser/><Teaser/></div>*/}

    {/*</Section>*/}
    {/*<Section>*/}
    {/*  <SectionHeading>Merch</SectionHeading>*/}
    {/*  <div className={'flex'}>*/}
    {/*    <div className={'w-1/2 pr-8'}>     <StaticImage className={'w-full h-auto mb-8'} src={'../images/t-shirt.jpeg'} alt={'record'}/>     <StaticImage className={'w-full h-auto'} src={'../images/record.jpeg'} alt={'record'}/></div>*/}
    {/*    <div className={'w/1-2'}>          <StaticImage className={'w-full h-auto'} src={'../images/t-shirt.jpeg'} alt={'record'}/></div>*/}
    {/*  </div>*/}
    {/*</Section>*/}
  </Layout>
)


export const SectionHeading= ({children}) => {
    return(<h2 className={'text-4xl font-bold w-full text-center mb-20'}>{children}</h2>);
}
const Section = ({children, dark = false}) => {
    return(<div className={`py-32 ${dark ? 'bg-black text-white' : 'bg-white'}`}><div className={'max-w-6xl mx-auto'}>{children}</div></div>);
}


export const Button = ({children}) => {
    return(<button className={' font-extrabold uppercase border text-lg tracking-wide px-5 py-3'}>{children}</button>);
}

export const Teaser = () => {
    return(<></>);
}
export default IndexPage
