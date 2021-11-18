import "./src/styles/index.scss"
import "./src/styles/layout.scss"
import "./src/styles/landing.scss"
import "./src/styles/header.scss"
import "./src/styles/sidePanel.scss"
import "./src/styles/combat.scss"
import "./src/styles/main.scss"
import "./src/styles/generics.scss"
import "./src/styles/responsive.scss"
import "./src/styles/accessibility.scss"
import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider

export const onServiceWorkerUpdateReady = () => {
  if (typeof window !== "undefined") {
    const answer = window.confirm(
      `This application has been updated. ` +
        `Reload to display the latest version?`
    )
    if (answer === true) {
      window.location.reload()
    }
  }
}

export const registerServiceWorker = () => true
