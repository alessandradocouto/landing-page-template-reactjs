# Getting Started with Create React App

## Passos de instalação do projeto

1 - nvm use vxx.xx.x 
2 - npm start
3 - copiar Roboto font do MUI para public/index.html
`
<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700&display=swap"
/>
<style>
    * {
    font-family: "Roboto", sans-serif;
    margin: 0;
    }
</style>

`

4 - instalar icons MUI
```
npm install @mui/material @emotion/react @emotion/styled

```

5 - Criar pasta COMPONENTES


6 - Criacao de classes no MUI:]
``
const ListMenu = styled(List)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}));
``


7 - Dark mode mudanças:
- header's background 
- cor botao header
- 1 section's background
- footer's background


8 - Aprendizados:
-breakpoints em Material UI
- o que é sx

` <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   `

``<CustomGridItem item xs={12} sm={8} md={6}\
    sx={{ order: {xs: 3, sm: 3, md: 4} }}/>
``

``sx={theme => ({
        [theme.breakpoints.down('md')]:{
            flex: '1',
            paddingTop: '30px',
            alignSelf: 'center',
        },
        [theme.breakpoints.up('md')]:{
            flex: '2',
            alignSelf: 'flex-end',
        },
    )} 
``

- classes com Material UI
- menu mobile com material ui (Drawer)
- component slider React JS



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
