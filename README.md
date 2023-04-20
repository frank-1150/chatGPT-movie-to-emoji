This is a [Next.js](https://nextjs.org/) project using the Open AI API, tailwind CSS is also used.

The home page looks like this:
![image](https://user-images.githubusercontent.com/76094159/232632138-0f9164d8-41fa-45a4-8097-b5bbf65dc035.png)

Already optimized for mobile usage.

## ChatGPT API example docs

[OpenAI API docs](https://platform.openai.com/examples/default-movie-to-emoji)

## Online demo

[Live demo](https://chat-gpt-movie-to-emoji.vercel.app/) is hosted on Vercel

## Analytics

Main branch is deployed on the vercel, with the Analytics tools running at page.tsx. However, it seems that this `<Analytics /> ` will break the app when running on local. Therefore, I create a branch "noAnalytics" deleting the analytics part.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Remember to apply your own OpenAI API key to the .env.local to the root path.
