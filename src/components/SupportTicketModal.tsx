// Libs
import { useState } from "react";
import styled from "styled-components";

// Local
import Button from "@/compositions/buttonModule3";
import BaseModal from "@/actualComponents/BaseModal";

export default function SupportTicketModal(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <section>
      <h2>support ticket modal</h2>
      <OpenButton
        size="medium"
        variant="outline"
        onClick={() => setIsModalOpen(true)}
      >
        Open Example Modal
      </OpenButton>

      <BaseModal
        open={isModalOpen}
        closeModal={closeModal}
        title="Support ticket created"
      >
        <>
          <ModalContent>
            <div
              style={{
                fontSize: "1.4rem",
                marginBottom: "18px",
                fontStyle: "italic",
              }}
            >
              🦺 🚧&nbsp; work in progress &nbsp;🚧 🦺
            </div>
            We need to verify some details with you on the phone. May we call
            you now to discuss?
          </ModalContent>
          <WrapActionButtons>
            <Button size="medium" variant="ghost" onClick={closeModal}>
              Cancel
            </Button>
            <Button size="medium" variant="fill" onClick={closeModal}>
              Yes
            </Button>
          </WrapActionButtons>
        </>
      </BaseModal>
    </section>
  );
}

const OpenButton = styled(Button)`
  margin: 0 auto;
`;

const ModalContent = styled.p`
  font-weight: 500;
`;

const WrapActionButtons = styled.div`
  display: flex;
  justify-content: end;
  gap: 16px;
  margin-top: 24px;

  button {
    width: 150px;
  }
`;
