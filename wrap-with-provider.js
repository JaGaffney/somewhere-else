import React from "react"
import { Provider } from "react-redux"
import { TourProvider } from '@reactour/tour'

import createStore from "./src/state/createStore"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore()
  return         <TourProvider steps={[]} scrollSmooth><Provider store={store}>{element}</Provider></TourProvider>
}