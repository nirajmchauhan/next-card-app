export default async function EditPostPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex justify-center">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            POST_TITLE | Edit Post
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">POST_CONTENT</p>
          <form>
            <div className="relative mb-4">
              <label
                htmlFor="title"
                className="leading-7 text-sm text-gray-600"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="content"
                className="leading-7 text-sm text-gray-600"
              >
                Content
              </label>
              <textarea
                id="content"
                name="content"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export interface Post extends Record<string, string> {
  key: string;
  title: string;
  content: string;
}
