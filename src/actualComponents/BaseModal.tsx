// Libs
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

// Local
import styles from "@/actualComponents/BaseModal.module.css";

interface Props {
  open: boolean;
  title: string;
  parentDivClassName?: string;
  closeModal: () => void;
  children: React.ReactElement;
}

export default function BaseModal(props: Props): JSX.Element {
  const { parentDivClassName = styles.parentDiv } = props;
  return (
    <Transition appear show={props.open} as={Fragment}>
      <Dialog onClose={props.closeModal} className={styles.dialog}>
        <div className={styles.interiorWrapper}>
          <Transition.Child
            as={Fragment}
            // TODO:
            // EASE-OUT =  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
            // EASE-IN =  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
            // DURATION-300 =  transition-duration: 300ms;
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className={styles.dialogOverlay} />
          </Transition.Child>

          <span className={styles.dialogSpan} aria-hidden="true"></span>
          <Transition.Child
            as={Fragment}
            // TODO:
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className={`${parentDivClassName} ${styles.beginDialog}`}>
              <Dialog.Title>
                <div className={styles.dialogHeader}>
                  <h1>{props.title}</h1>
                </div>
              </Dialog.Title>
              {props.children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
