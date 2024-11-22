'use client'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

interface ReusableModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  title: string;
  bodyContent: React.ReactNode;
  footerButtons?: React.ReactNode;
  onClose?:  () => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full" | undefined;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  isOpen,
  onOpenChange,
  title,
  bodyContent,
  footerButtons,
  onClose,
  size,
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={size}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{bodyContent}</ModalBody>
            <ModalFooter>
              {footerButtons}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ReusableModal;
