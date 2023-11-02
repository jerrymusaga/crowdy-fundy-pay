import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import Link from "next/link";

export default function Header() {
  const [hideConnectBtn, setHideConnectBtn] = useState(false);
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMiniPay) {
      setHideConnectBtn(true);
      connect();
    }
  }, [connect]);

  return (
    <Disclosure as="nav" className="bg-prosperity border-b border-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:rounded-none focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex justify-between items-center p-5 bg-white shadow-lg fixed top-0 left-0 right-0">
                <Link
                  href="/"
                  className="flex justify-start items-center
      text-xl text-black space-x-1"
                >
                  <span>Crowdy-Fundy-Pay</span>
                </Link>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-2 ">
                {!hideConnectBtn && (
                  <ConnectButton
                    showBalance={{ smallScreen: true, largeScreen: false }}
                  />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

// export default function Header() {
//   return (
//     <header
//       className="flex justify-between items-center
//         p-5 bg-white shadow-lg fixed top-0 left-0 right-0"
//     >
//       <Link
//         href="/"
//         className="flex justify-start items-center
//       text-xl text-black space-x-1"
//       >
//         <span>Crowdy-Fundy-Pay</span>
//       </Link>

//       <div className="flex space-x-2 justify-center"></div>
//     </header>
//   );
// }

declare global {
  interface Window {
    ethereum: any;
  }
}
