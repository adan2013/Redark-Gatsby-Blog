import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
    <head>

      <script key='google-gtag' async src="https://www.googletagmanager.com/gtag/js?id=G-H457CQS81G"/>
      <script key='gtag-redark' dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H457CQS81G');
        `
      }}
      />

      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <script data-ad-client="ca-pub-7672695014670144" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>

    <script
      key='theme-detector'
      dangerouslySetInnerHTML={{
        __html: `(function() {
                try {
                  var mode = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if(mode) {
                    document.body.classList.add('theme-' + (mode === 'dark' ? 'dark' : 'light'));
                  }else{
                    document.body.classList.add('theme-' + (supportDarkMode ? 'dark' : 'light'));
                  }
                } catch (e) {}
              })();`,
      }}
    />

    {props.preBodyComponents}
    <div
      key={`body`}
      id="___gatsby"
      dangerouslySetInnerHTML={{ __html: props.body }}
    />
    {props.postBodyComponents}
    </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
