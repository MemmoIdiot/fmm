const head = document.querySelector('head');


const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');

const metaCompat = document.createElement('meta');
metaCompat.setAttribute('http-equiv', 'X-UA-Compatible');
metaCompat.setAttribute('content', 'IE=edge');

const metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');

const linkIcon = document.createElement('link');
linkIcon.setAttribute('rel', 'icon');
linkIcon.setAttribute('type', 'image/x-icon');
linkIcon.setAttribute('href', 'assets/FMM_logo.webp');

const metaDescription = document.createElement('meta');
metaDescription.setAttribute('name', 'description');
metaDescription.setAttribute('content', '');

const linkBootstrap = document.createElement('link');
linkBootstrap.setAttribute('href', 'vendor/bootstrap.min.css');
linkBootstrap.setAttribute('rel', 'stylesheet');

const linkFontAwesome = document.createElement('link');
linkFontAwesome.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css');
linkFontAwesome.setAttribute('rel', 'stylesheet');

const linkCustom = document.createElement('link');
linkCustom.setAttribute('href', 'css/custom.css');
linkCustom.setAttribute('rel', 'stylesheet');

const base = document.createElement('base');
base.setAttribute(
    'href',
    ['localhost', '127.0.0.1'].includes(window.location.hostname)
        ? ''
        : '/fmm/'
);

[
    metaCharset,
    base,
    metaCompat,
    metaViewport,
    linkIcon,
    metaDescription,
    linkBootstrap,
    linkFontAwesome,
    linkCustom
].forEach(metaTag => head.appendChild(metaTag));
