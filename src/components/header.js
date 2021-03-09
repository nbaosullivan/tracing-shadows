import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "./layout"

const Header = ({ siteTitle }) => (<div className={'relative h-screen w-full'}>
  {/*<header className="absolute z-30 inset-0">*/}
  {/*  <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8 pt-6">*/}
  {/*    <div className="relative h-16 flex justify-between">*/}
  {/*      <div className="relative z-10 px-2 flex lg:px-0">*/}
  {/*        <div className="flex-shrink-0 flex items-center">*/}
  {/*          <div>*/}
  {/*            <div className="sm:hidden">*/}
  {/*              <label htmlFor="tabs" className="sr-only">Select a tab</label>*/}
  {/*              <select id="tabs" name="tabs"*/}
  {/*                      className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">*/}
  {/*                <option>My Account</option>*/}
  {/*                <option>Company</option>*/}
  {/*                <option selected>Team Members</option>*/}
  {/*                <option>Billing</option>*/}
  {/*              </select>*/}
  {/*            </div>*/}
  {/*            <div className="">*/}
  {/*              <nav className="flex space-x-4 text-white" aria-label="Tabs">*/}
  {/*                <a href="#" className="">*/}
  {/*                  Tour*/}
  {/*                </a>*/}
  {/*                <a href="#" className=" ">*/}
  {/*                  Press*/}
  {/*                </a>*/}
  {/*                <a href="#" className=""*/}
  {/*                   aria-current="page">*/}
  {/*                  Merch*/}
  {/*                </a>*/}
  {/*              </nav>*/}
  {/*            </div>*/}
  {/*          </div>*/}
  {/*        </div>*/}
  {/*      </div>*/}
  {/*      <div className="relative text-white text-center z-0 flex-1 px-2 flex items-center justify-center">*/}
  {/*        <div className="w-full sm:max-w-xs">*/}
  {/*          <h1 className={'text-3xl font-bold'}>{siteTitle}</h1>*/}
  {/*        </div>*/}
  {/*      </div>*/}

  {/*      <div className="lg:relative lg:z-10 lg:ml-4 flex lg:items-center">*/}
  {/*        <button className="flex-shrink-0  text-white p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">*/}
  {/*          <span className="sr-only">View notifications</span>*/}
  {/*          <svg  className={'h-9 w-9'}fill="currentColor" id="instagram-unauth-icon" viewBox="0 0 64 64" width="110" height="110"><path d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z"></path></svg>*/}

  {/*        </button>*/}

  {/*      </div>*/}
  {/*    </div>*/}
  {/*  </div>*/}

  {/*</header>*/}

    <div className="bg-black z-20 flex items-center justify-center absolute inset-0">

                  <h1 className={'text-7xl  text-white text-center md:flex font-extrabold z-30 uppercase'}>
                    <span className={'bg-black uppercase p-6 pl-8 md:pl-6 block tracking-widest text-black'} style={{textShadow: '-1px -1px 0 #fff,1px -1px 0 #fff,-1px 1px 0 #fff,1px 1px 0 #fff'}}>Tracing</span>
                    <span className={'p-6 tracking-wide  block text-black bg-gray-100'}>Shadows</span>
                  </h1>

    </div>
{/*<StaticImage*/}
{/*  src="../images/home-bg.jpeg"*/}
{/*  className={'h-screen w-full z-10'}*/}
{/*  formats={["AUTO", "WEBP", "AVIF"]}*/}
{/*  alt="A Gatsby astronaut"*/}
{/*  objectFit={'cover'}*/}
{/*/>*/}
</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
