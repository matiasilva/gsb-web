# gsb-web

Home of the 2022 Girton Spring Ball's website. It uses the Hugo static site generator written in Go.

## Deployment

To make everything as simple as possible, we use Netlify to distribute our static website. The output of the build script is dumped (literally) onto their dashboard.

## Developing

1. Clone the repository
2. [Install](https://gohugo.io/getting-started/installing/) Hugo 
3. Make necessary changes and visualize by running `hugo server`
4. Push your changes

## Legacy development

For convenience, there is a simple build script that moves all static assets into the root folder and also links all individual sections into one `index.html`file. This way, the individual website sections can remain in their own files, uncluttered.

## Contributors

Matias Silva and Edmund Prager on behalf of the 2022 GSB committee.

## License

MIT. Feel free to reuse as you wish.