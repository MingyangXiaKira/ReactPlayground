import { useState } from "react";

const HomePage = () => {
  const [type, setType] = useState(0);
  const [category1, setCategory1] = useState(true);
  const [category2, setCategory2] = useState(true);
  const typeChange = (type) => {
    setType(type);
  };
  const category1Change = () => {
    setCategory1((current) => !current);
  };
  const category2Change = () => {
    setCategory2((current) => !current);
  };
  return (
    <>
      <div className="my-5 text-xl">
        <div className="flex justify-between">
          <div className="flex gap-3">
            {type ? (
              <></>
            ) : (
              <>
                <button
                  className={`${
                    category1 ? "bg-blue-600" : "bg-blue-200"
                  } hover:scale-110 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                  onClick={category1Change}
                >
                  React 19 Examples
                </button>
                <button
                  className={`${
                    category2 ? "bg-blue-600" : "bg-blue-200"
                  } hover:scale-110 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                  onClick={category2Change}
                >
                  Other Examples
                </button>
              </>
            )}
          </div>
          <div className="flex gap-2">
            <button
              className={`${
                type ? "bg-blue-200" : "bg-blue-600"
              } hover:scale-110 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
              onClick={() => typeChange(0)}
            >
              Utilities
            </button>
            <button
              className={`${
                type ? "bg-blue-600" : "bg-blue-200"
              } hover:scale-110 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
              onClick={() => typeChange(1)}
            >
              UI
            </button>
          </div>
        </div>
        <ul>
          {/* react 19 examples */}
          {type === 0 && category1 && (
            <>
              <li className="bg-blue-50 p-4 rounded shadow my-5">
                <div>
                  <h3 className="text-2xl font-bold">use() Hook Example 1</h3>
                  <p className="my-2">
                    Use the `use()` hook to fetch a random joke from the Chuck
                    Norris API
                  </p>
                  <a className="font-bold text-blue-800" href="/use-example-1">
                    View
                  </a>
                </div>
              </li>
              <li className="bg-blue-50 p-4 rounded shadow my-5">
                <div>
                  <h3 className="text-2xl font-bold">use() Hook Example 2</h3>
                  <p className="my-2">
                    Use the `use()` hook to fetch some posts from the
                    JSONPlaceholder API
                  </p>
                  <a className="font-bold text-blue-800" href="/use-example-2">
                    View
                  </a>
                </div>
              </li>
              <li className="bg-blue-50 p-4 rounded shadow my-5">
                <div>
                  <h3 className="text-2xl font-bold">use() Hook Example 3</h3>
                  <p className="my-2">
                    Use the `use()` hook to resolve a message from a promise and
                    show it
                  </p>
                  <a className="font-bold text-blue-800" href="/use-example-3">
                    View
                  </a>
                </div>
              </li>
              <li className="bg-blue-50 p-4 rounded shadow my-5">
                <div>
                  <h3 className="text-2xl font-bold">use(context) Example</h3>
                  <p className="my-2">
                    Use the `use()` hook to apply aa theme context
                  </p>
                  <a
                    className="font-bold text-blue-800"
                    href="/use-example-context"
                  >
                    View
                  </a>
                </div>
              </li>
              <li className="bg-blue-50 p-4 rounded shadow my-5">
                <div>
                  <h3 className="text-2xl font-bold">Action Example 1</h3>
                  <p className="my-2">Use an action to submit a post form</p>
                  <a
                    className="font-bold text-blue-800"
                    href="/action-example-1"
                  >
                    View
                  </a>
                </div>
              </li>
              <li className="bg-blue-50 p-4 rounded shadow my-5">
                <div>
                  <h3 className="text-2xl font-bold">Action Example 2</h3>
                  <p className="my-2">
                    Use an action to add product to cart via form
                  </p>
                  <a
                    className="font-bold text-blue-800"
                    href="/action-example-2"
                  >
                    View
                  </a>
                </div>
              </li>
              <li className="bg-blue-50 p-4 rounded shadow my-5">
                <div>
                  <h3 className="text-2xl font-bold">useFormStatus Example</h3>
                  <p className="my-2">
                    Use the useFormStatus hook to get status of post form
                    submission
                  </p>
                  <a
                    className="font-bold text-blue-800"
                    href="/useformstatus-example"
                  >
                    View
                  </a>
                </div>
              </li>
              <li className="bg-blue-50 p-4 rounded shadow my-5">
                <div>
                  <h3 className="text-2xl font-bold">useFormState Example</h3>
                  <p className="my-2">
                    Use the useFormState Hook to show specific messages for cart
                    items
                  </p>
                  <a
                    className="font-bold text-blue-800"
                    href="/useformstate-example"
                  >
                    View
                  </a>
                </div>
              </li>
              <li className="bg-blue-50 p-4 rounded shadow my-5">
                <div>
                  <h3 className="text-2xl font-bold">useOptimisitc Example</h3>
                  <p className="my-2">
                    Use the useOptimistic hook to show a message before the
                    server responds
                  </p>
                  <a
                    className="font-bold text-blue-800"
                    href="/useoptimistic-example"
                  >
                    View
                  </a>
                </div>
              </li>
              <li className="bg-blue-50 p-4 rounded shadow my-5">
                <div>
                  <h3 className="text-2xl font-bold">useTransition Example</h3>
                  <p className="my-2">
                    Use the useTransition hook to show a message before the
                    server responds
                  </p>
                  <a
                    className="font-bold text-blue-800"
                    href="/usetransition-example"
                  >
                    View
                  </a>
                </div>
              </li>
            </>
          )}

          {/* other react examples */}
          {type === 0 && category2 && (
            <>
              <li className="bg-blue-50 p-4 rounded shadow my-5">
                <div>
                  <h3 className="text-2xl font-bold">
                    Reusable Component Example
                  </h3>
                  <p className="my-2">React reusable component</p>
                  <a
                    className="font-bold text-blue-800"
                    href="/usetransition-example"
                  >
                    View
                  </a>
                </div>
              </li>
            </>
          )}
          {/* ui examples */}
          {type === 1 && (
            <>
              <li className="bg-blue-50 p-4 rounded shadow my-5">
                <div>
                  <h3 className="text-2xl font-bold">Accordion</h3>
                  <p className="my-2"></p>
                  <a className="font-bold text-blue-800" href="/accordion">
                    View
                  </a>
                </div>
              </li>
              <li className="bg-blue-50 p-4 rounded shadow my-5">
                <div>
                  <h3 className="text-2xl font-bold">Slider</h3>
                  <p className="my-2"></p>
                  <a className="font-bold text-blue-800" href="/slider">
                    View
                  </a>
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};
export default HomePage;
