import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

async function createTodo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
  // console.log("Hi");
  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
}

//the string  "use server" at the top of the function is essentially saying that this function is server code and it's never going to run on the client.

//The FormData property is an interface provided by the JavaScript Fetch API and is used to represent a set of key-value pairs that can be sent in an HTTP request. It allows you to construct and send data in a format that is suitable for form submissions or other types of multipart/form-data requests.

// The "serverActions" property is an experimental feature in Next.(see next.config.js file) ---- By using the "serverActions" feature, you can perform server-side logic, such as authentication checks, before rendering the page on the client side. This helps ensure that sensitive operations are handled securely on the server, providing a more robust and controlled user experience.

//data.get("title") ----- Remember that in the input of the form we set name="title"****

//?.valueOf() -------The question mark is here just because this could return to us undefined so it's just making sure it doesn't return undefined.

//So, the key here is you put this use server string at the top of the function, that's just saying this is going to be a server function that's going to be an action. Make sure it's asynchronous because you obviously need to do things on your server like await your database or await some type of fetch request and then you can optionally redirect or do whatever else you need to do.

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
      </header>

      <form className="flex gap-2 flex-col" action={createTodo}>
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}

// The 'name' inside the 'input' is really important because we're going to use that inside of our server action****
