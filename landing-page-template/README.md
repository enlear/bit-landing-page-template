# NextJS Project For Consuming Bit Template

This NextJS project has been set up to help use the Bit Template that was developed.

## Adding Components

This NextJS project has been setup to the `bit` landing page template.
For this, use `npm i --force` to install the dependencies. There is a conflict with the Bit template as it uses React v17 while this NextJS project uses React v18.

All components can be used by installing them as a seperate component. 
However, if you wish to customize the component and use it, we recommend you make a copy of our component library - `https://bit.cloud/enlear/bit-landing-page-template/` and customize it on your own scope for your tailored use.

When you install a component, it will be installed as a `node_module` which you can use as an ordinary component. 

## Using the Template

This template is backed with Material UI (MUI v5). Therefore, ensure that your `_app.tsx` file wraps a `ThemeProvider` offered by MUI. This MUI `ThemeProvider` is provided using the component `light-theme` offered in our template.

So, first install the `light-theme` component using the command shown below.

```
npm i @enlear/bit-landing-page-template.themes.light-theme --legacy-peer-deps
```

If you run into an error while installing the component (404 error), ensure to set `@enlear` as a scoped `npm` registry using the command below.

```
npm config set '@enlear:registry' https://node.bit.cloud
```

Hereafter, re-install the light theme.

Afterward, wrap your child components in the `_app.tsx` component using the `LightTheme` component as shown below.

```
function MyApp({ Component, pageProps }: AppProps) {
  return (
  <LightTheme>
    <Component {...pageProps} />
  </LightTheme>
  )
}
```

Afterward, all components of this template library will work as expected.

Navigate to the `pages` directory of the `https://bit.cloud/enlear/bit-landing-page-template/` scope. Here you will find the `home` and `about` pages. Install them and add it to your `nextjs` routes as done so in this project. You can install individual components by navigating to the component on `bit`.
