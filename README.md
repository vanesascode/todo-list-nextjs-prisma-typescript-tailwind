It is a To-Do list app made with Next.js, Prisma....

## SETUP

React is a JavaScript library for building user interfaces, while `Next.js is a framework built on top of React` that adds server-side rendering, routing, and other features.

Next.js can be a good choice for projects that require `server-side rendering` or static site generation, while React can be used for more lightweight and flexible applications.

`Prisma is an open-source database toolkit` that simplifies database access for developers. It provides an Object-Relational Mapping (ORM) layer that allows developers to interact with databases using a type-safe and intuitive API.

### Next

## Create a new project (from command prompt):

- [x] `npx create-next-app@latest <name of project>`
      It will tell you to install the package: create-next-app@13.4.10 (or whatever version)
- [x] `cd <name of project>`
- [x] `code .`

By default the project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## To start the application:

- [x]`npm run dev` ( to start up our application in the dev environment )
- [x] Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Prisma

- [x] npm i prisma --save-dev
- [x] npx prisma init --datasource-provider sqlite
      A schema is built in a folder called 'prisma', and the URL of the database goes to the '.env' file.
- [x] Get your .env document into the .gitignore folder
- [x] Install vscode extension Prisma by Prisma.io

- [x] We create a model in the schema.prima file in the prisma folder:

```
model Todo {
  id        String @id @default(uuid())
  title     String
  complete  Boolean
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

- [x] We migrate the schema into the database, and into our dev environment:
      `npx prisma migrate dev --name init` ('init' is the name)
      Your database is now in sync with your schema.
- [x] We put the files generated into our gitignore (all the files that have dev.db):
      `dev.db*`

To be able to use our database inside of our project: we create a called `db.ts` file, and put in what the docs about prisma tells us:

```
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

```

We do it in a separate file to avoid hot reloading. The code in creates and exports an instance of the PrismaClient class, ensuring that only one instance is created and reused throughout the application's lifecycle.

## To create new routes:

In the folder 'app' you create a new folder with the name of the extension it has to have.
For example, it you want: `http://localhost:3000/about` you call the folder 'about'.
Then inside, you create a file called `page.tsx` and you start the file like this:

```
export default function Page() {
  return <h1>Hi!</h1>;
}
```

If you want to navigate to another link, you import the tool and use it like this:

```
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-2xl">Todos</h1>
        <Link href="/about">New</Link>
      </header>
    </>
  );
}

```

This kind of routing happens on the client's side so it doesn't actually do a full page refresh. It does all the client routing just like we're used to in a normal react application.

## Fetching the to-do items:

In a typical React application, you would use a library like useQuery or make a fetch request inside a useEffect hook to fetch data from a server.

However, with the introduction of server components in Next.js 3, you no longer need to do that. As long as you're using the app router, which is already configured during initialization, you can call server code directly inside your components.

This means that the server will run the code and send the data down to the client, so you don't need to worry about fetching the data yourself. This can simplify your code and improve performance, especially for larger applications.

To see how it is done, see the page.tsx files. There are plenty of notes in there.

## Experimental feature (serverActions)

I enabled experimental feature (serverActions) in next.config.js:

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  }
}

module.exports = nextConfig
```

IT is useful in scenarios where you need to perform server-side actions or handle requests on the server before rendering the page on the client side.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
