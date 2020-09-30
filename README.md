# Redark Gatsby Blog

Redark is my own private blog dedicated to games and IT tematic. For first two years worked on WordPress. Blog theme and post content have been transferred by me to Gatsby technology. More information about this migration your can find in [this article](https://redark.pl/zegnaj-wordpressie).

## Live Preview

The REDARKpl blog is available on [www.redark.pl](https://redark.pl). Please enjoy :)

## Features

* custom visual elements in posts
* automatic pagination
* post slug and featured image support
* post categories and tags support (like WordPress)
* related posts under post content
* empty category/tag detection

## Commands

First you need to install globally gatsby CLI on your computer by using this command:
```
npm install -g gatsby-cli
```

To run development server on port 8000 use:
```
gatsby develop
```

To clear cache use:
```
gatsby clean
```

To build production version into "public" directory use:
```
gatsby build
```

More information you can find in [official Gatsby repository](https://github.com/gatsbyjs/gatsby)

## Deploying

To deploying this website I use custom made node script. You can checkout its [repository here](https://github.com/adan2013/Gatsby-FTP-Deployment)
