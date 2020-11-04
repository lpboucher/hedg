const React = require("react")

const additionalBodyElements = [
  <div key="olivo" id="widget" />
]

exports.onRenderBody = ({
  setPostBodyComponents
}) => {
  setPostBodyComponents(additionalBodyElements)
}
