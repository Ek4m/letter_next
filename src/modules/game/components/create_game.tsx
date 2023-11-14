import React, { FC, Fragment } from "react";
import { Button, Col, Modal, Row } from "antd";
import { Formik, FormikProps } from "formik";
import { CreateGameDto } from "../types";
import { TextInput } from "@/modules/auth/components";
import { useCreateGame } from "../hooks";
import { MedievalButton } from ".";

interface GameModalProps {
  visible: boolean;
  onCancel(): void;
}

const FormikComponent: FC<FormikProps<CreateGameDto>> = ({
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <Row gutter={[24, 24]}>
      <Col lg={24} md={24} xs={24}>
        <TextInput
          placeholder="Ex: PLAY GAME"
          name="name"
          label="Name of lobby"
        />
      </Col>
      <Col lg={24} md={24} xs={24}>
        <MedievalButton
          style={{ width: "100%" }}
          onClick={() => handleSubmit()}
          loading={isSubmitting}
        >
          CREATE
        </MedievalButton>
      </Col>
    </Row>
  );
};

export const CreateGameModalForm: FC<GameModalProps> = ({
  onCancel,
  visible,
}) => {
  const { initialValues, onSubmit } = useCreateGame(onCancel);
  return (
    <Modal
      title={<h1>Create new room</h1>}
      footer={[]}
      open={visible}
      onCancel={onCancel}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        component={FormikComponent}
      />
    </Modal>
  );
};
