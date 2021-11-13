# gsb-web

Home of the 2022 Girton Spring Ball's website

## Deployment

To make everything as simple as possible, we use Netlify to distribute our static website. The output of the build script is dumped (literally) onto their dashboard.

## Development

For convenience, there is a simple build script that moves all static assets into the root folder and also links all individual sections into one `index.html`file. This way, the individual website sections can remain in their own files, uncluttered.
