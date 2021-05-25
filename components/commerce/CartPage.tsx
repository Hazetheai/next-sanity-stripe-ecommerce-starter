import MyImage from "components/elements/Image";
import Button from "components/elements/Button";
import Link, { ElementLink } from "components/elements/Link";
import React, { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { fetchPostJSON } from "utils/api-helpers";
import { debounce } from "utils/debounce";
import CartItem from "./CartItem";

interface CartPageProps {}

const CartPage: React.FC<CartPageProps> = ({}) => {
  const {
    addItem,
    removeItem,
    cartCount,
    cartDetails,
    decrementItem,
    incrementItem,
    redirectToCheckout,
    formattedTotalPrice,
    totalPrice,
  } = useShoppingCart();

  const [loading, setLoading] = useState(false);
  const [noteToSeller, setNoteToSeller] = useState("");
  const handleCheckout = async (event) => {
    setLoading(true);

    const response = await fetchPostJSON("/api/checkout_sessions/cart", {
      cartItems: cartDetails,
      metadata: { note: noteToSeller },
    });

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    redirectToCheckout({ sessionId: response.id });
  };

  return (
    <>
      {/* component */}
      <div className="flex justify-center my-6">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="flex-1">
            {!!Object.values(cartDetails).length ? (
              <table className="w-full text-sm lg:text-base" cellSpacing={0}>
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="hidden md:table-cell" />
                    <th className="text-left">Product</th>
                    <th className="lg:text-right text-left pl-5 lg:pl-0">
                      <span className="lg:hidden" title="Quantity">
                        Qtd
                      </span>
                      <span className="hidden lg:inline">Quantity</span>
                    </th>
                    <th className="hidden text-right md:table-cell">
                      Unit price
                    </th>
                    <th className="text-right">Total price</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(cartDetails).map((item, idx, arr) => (
                    <tr>
                      <td className="hidden pb-4 md:table-cell">
                        <MyImage
                          // alt={product.title}
                          nextImageProps={{
                            src: item.image || "",
                            alt: item.name,
                            layout: "fill",
                            width: undefined,
                            height: undefined,
                            objectFit: "cover",
                          }}
                          containerClassName="h-20 w-20"
                        />
                      </td>
                      <td>
                        <a href="#0">
                          <p className="mb-2 md:ml-4">{item.name}</p>
                          <form
                            action="#0"
                            onSubmit={() => removeItem(item.sku)}
                            method="POST"
                          >
                            <button
                              type="submit"
                              className="text-gray-700 md:ml-4"
                            >
                              <small>(Remove item)</small>
                            </button>
                          </form>
                        </a>
                      </td>
                      <td className="justify-center md:justify-end md:flex mt-6">
                        <div className="w-20 h-10">
                          <div className="flex items-center mt-2">
                            <button
                              onClick={() => incrementItem(item.sku, 1)}
                              className="text-gray-500 focus:outline-none focus:text-gray-600"
                            >
                              <svg
                                className="h-5 w-5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </button>
                            <span className="text-gray-700 mx-2">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => decrementItem(item.sku, 1)}
                              className="text-gray-500 focus:outline-none focus:text-gray-600"
                            >
                              <svg
                                className="h-5 w-5"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="hidden text-right md:table-cell">
                        <span className="text-sm lg:text-base font-medium">
                          €{item.price / 100}
                        </span>
                      </td>
                      <td className="text-right">
                        <span className="text-sm lg:text-base font-medium">
                          €{(item.price / 100) * item.quantity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>
                <p>There are no items in your cart.</p>

                <Link
                  text="View Our Store"
                  btnStyle="clear"
                  hrefProp="products"
                  className="text-black"
                />
              </div>
            )}
            {/* {Object.values(cartDetails).map((item, idx, arr) => (
              <CartItem
                increment={incrementItem}
                decrement={decrementItem}
                item={item}
                isLast={false}
              />
            ))} */}
            <hr className="pb-6 mt-6" />
            <div className="my-4 mt-6 -mx-2 lg:flex">
              <div className="lg:px-2 lg:w-1/2">
                {/* <div className="p-4 bg-gray-100 -full">
                  <h1 className="ml-2 font-bold uppercase">Coupon Code</h1>
                </div>
                <div className="p-4">
                  <p className="mb-4 italic">
                    If you have a coupon code, please enter it in the box below
                  </p>
                  <div className="justify-center md:flex">
                    <form action="#0" method="POST">
                      <div className="flex items-center w-full h-13 pl-3 bg-white bg-gray-100 border -full">
                        <input
                          type="coupon"
                          name="code"
                          id="coupon"
                          placeholder="Apply coupon"
                          defaultValue="90off"
                          className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"
                        />
                        <button
                          type="submit"
                          className="text-sm flex items-center px-3 py-1 text-white bg-gray-800 -full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none"
                        >
                          <svg
                            aria-hidden="true"
                            data-prefix="fas"
                            data-icon="gift"
                            className="w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                            />
                          </svg>
                          <span className="font-medium">Apply coupon</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div> */}
                <div className="p-4 bg-gray-100 -full">
                  <h4 className="ml-2 font-bold uppercase">
                    Instruction for seller
                  </h4>
                </div>
                <div className="p-4">
                  <p className="mb-4 italic">
                    If you have some information for the seller you can leave
                    them in the box below
                  </p>
                  <textarea
                    className="w-full h-24 p-2 bg-gray-100 "
                    defaultValue={""}
                    onKeyDown={(event: React.KeyboardEvent) =>
                      debounce(
                        setNoteToSeller(
                          (event.target as HTMLTextAreaElement).value
                        ),
                        300,
                        false
                      )
                    }
                  />
                </div>
              </div>
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-4 bg-gray-100 -full">
                  <h4 className="ml-2 font-bold uppercase">Order Details</h4>
                </div>
                <div className="p-4">
                  <p className="mb-6 italic">
                    Shipping and additional costs are calculated at the checkout
                  </p>
                  {/* <div className="flex justify-between border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Subtotal
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      {totalPrice}
                    </div>
                  </div> */}
                  {/* <div className="flex justify-between pt-4 border-b">
                    <div className="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                      <form action="#0" method="POST">
                        <button type="submit" className="mr-2 mt-1 lg:mt-2">
                          <svg
                            aria-hidden="true"
                            data-prefix="far"
                            data-icon="trash-alt"
                            className="w-4 text-red-600 hover:text-red-800"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"
                            />
                          </svg>
                        </button>
                      </form>
                      Coupon "90off"
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                      -133,944.77€
                    </div>
                  </div> */}
                  {/* <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      New Subtotal
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      14,882.75€
                    </div>
                  </div> */}
                  {/* <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Tax
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      2,976.55€
                    </div>
                  </div> */}
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Subtotal
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      {formattedTotalPrice}
                    </div>
                  </div>
                  <a href="#0">
                    <button
                      onClick={handleCheckout}
                      onKeyDown={handleCheckout}
                      className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 -full shadow item-center hover:bg-gray-700 focus:ring focus:outline-none"
                    >
                      <svg
                        aria-hidden="true"
                        data-prefix="far"
                        data-icon="credit-card"
                        className="w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                        />
                      </svg>
                      <span className="ml-2 mt-5px">Proceed to checkout</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
