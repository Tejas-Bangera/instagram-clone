# Instagram Clone

![Alt text](./readme_media/image.png)

### A responsive Instagram clone with the following functionality,

- Sign In with Google Authentication
- Sign Out
- Create a post
- Like posts
- Comment on posts

### This project was developed using,

## Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tailwind CSS

Used [Tailwind](https://tailwindcss.com) to quickly style components.

## Recoil

[Recoil](https://recoiljs.org) for state management.

## Firebase

[Firebase](https://firebase.google.com) integration for user `authentication` and `storage` for `post images`, `likes` and `comments` from multiple users.

## Sign in

![Alt text](./readme_media/image-1.png)

`Sign in with Google` using firebase Google authentication provider.

## Home Page

![Alt text](./readme_media/image-2.png)

Shows latest posts with likes and comments from you and other users.

## Create a post

<video src="./readme_media/IG-create-a-post_AdobeExpress.mp4" controls title="Title"></video>

- Click on the plus icon on the navbar to create a post
- Click on the camera icon in the pop up to upload a photo.
- Enter a caption for the post and upload!

## Like, Comment and scroll through the posts!

<video src="./readme_media/IG-like-comment-scroll_AdobeExpress.mp4" controls title="Title"></video>

**Like**, **comment** and **scroll** away at all the posts that were created by people who use the app.

## Clone a clone?

Go the directory where you want to clone the project on your system and type below git command in the terminal.

```bash
git clone https://github.com/Tejas-Bangera/instagram-clone.git
```

Go to the project directory using the terminal.

```bash
cd instagram-clone
```

Since this project uses Firebase for storage and authentication let us setup your firebase account.

## Firebase Setup

### Create Firebase project

1. Visit the [Firebase](https://firebase.google.com) website.

1. Login using your google account.

1. Select the `Go to console` button on the navbar.

   ![Alt text](./readme_media/image-5.png)

1. Create a project.

   ![Alt text](./readme_media/image-6.png)

1. Give it a name.

   ![Alt text](./readme_media/image-7.png)

1. This is an optional setting for your project.

   ![Alt text](./readme_media/image-8.png)

1. All done here!

### Setup authentication for your project.

1. In the project overview page select the authentication card.

   ![Alt text](./readme_media/image-9.png)

1. Get started.

   ![Alt text](./readme_media/image-10.png)

1. Select `Google` as your Sign-in provider.

   ![Alt text](./readme_media/image-11.png)

1. Enable the provider and enter a public-facing name and your email for the project.

   ![Alt text](./readme_media/image-12.png)

1. **:pencil: Save the client ID and secret**! Once it's saved check the `Web SDK configuration` details. We'll need this later to setup environmental variables in the next js project.
   ![Alt text](./readme_media/image-13.png)

1. All done here! Go back to project overview to carry on with the setup.

### Setup storage with Firestore for the project.

1. In the project overview page, click on the `Cloud Firestore` card.

   ![Alt text](./readme_media/image-14.png)

1. Create database.

   ![Alt text](./readme_media/image-15.png)

1. Select the Start in test mode option for now. (You can change this to production mode after your project is setup, deployed on the internet and ready to use).

   ![Alt text](./readme_media/image-16.png)

1. Here select the nearest location to you.

   ![Alt text](./readme_media/image-17.png)

1. **Firestore created!** Go back to project overview page to continue with the last bit of the setup.

### Connect firebase to your project

Time to setup your web app details at firebase, this acts like a connection between your next js project and firebase for storage and authentication.

1. Click the `</>` button to add your web app.

   ![Alt text](./readme_media/image-19.png)

1. Provide a name for the app and Register!

   ![Alt text](./readme_media/image-20.png)

1. **:pencil: Copy the firebase config code**. (:warning: **Sensitive information**!!. This your firebase config details, make sure you don't share this with others.)

   ![Alt text](./readme_media/image-21.png)

1. Paste the copied firebase config code in the `/src/firebase.js` file
   <!-- ![Alt text](./readme_media/image-22.png) -->

   ```js
   // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: "AxzxSxAxHxRx6xXxnxvxwxDxKxTxqxQxFxTxjxw",
     authDomain: "instagram-clone-axax8x.xixexaxexpx.xox",
     projectId: "instagram-clone-axax8x",
     storageBucket: "instagram-clone-axax8x.xpxsxox.xox",
     messagingSenderId: "1x0x9x0x0x5x3",
     appId: "1:x0x7x8x9x2x2x:xex:xfxex0x0xax5x4xax6xaxe",
   };
   ```

1. **Finally Firebase setup complete!** Time to set **environment variables**. Remember I told you to save the Firebase `client ID` and `secret`? No worries go back [here](#setup-authentication-for-your-project) to check.

### Set environmental variables

1. Go back to your terminal, make sure you are in the project folder `/instagram-clone`.

1. Create a file with name `.env.local`

1. Add the following variables with the value of your client ID and secret here (without <>).

   ```bash
   # Your firebase web sdk client ID and secret goes here
   GOOGLE_CLIENT_ID=<Add the client ID here>
   GOOGLE_CLIENT_SECRET=<Add the client secret here>

   # Dont forget to add these variables as well
   MY_SECRET=<Add your strong secret here>
   NEXTAUTH_URL=http://localhost:3000
   ```

1. `MY_SECRET` variable is used once you deploy the app. You can use https://generate-secret.vercel.app/32 site to generate a strong secret key.

### One last step :sleepy:

If you try to run the app and `Sign In`, Google won't autherize this request. You have to make sure you add the URL of your app and the signin request in your `Google Cloud` console.

1. Go to the [Google Cloud](https://cloud.google.com/) website.

1. Sign in and go to console.

   ![Alt text](./readme_media/image-23.png)

1. You should see your Web app on the dashboard. Now click on `APIs and Services`.

   ![Alt text](./readme_media/image-24.png)

1. Under the `Credentials` tab > `OAuth 2.0 Client IDs` subheading, click on the `Web client` to edit it.

   ![Alt text](./readme_media/image-25.png)

1. Add the following URLs under

   - Authorized JavaScript origins

     ```URL
     http://localhost:3000
     ```

   - Authorized redirect URIs

     ```URL
     http://localhost:3000/api/auth/callback/google
     ```

     ![Alt text](./readme_media/image-26.png)

1. Don't forget to come back here to add your domain URL after deployment.

1. **Save! All done! I promise :joy:**

## :sparkles: Time run the app locally.

1. Make sure you are in the project folder `/instagram-clone`

1. Run the following command to install the project dependencies.
   ```bash
   npm install
   ```
1. Run the app!
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
