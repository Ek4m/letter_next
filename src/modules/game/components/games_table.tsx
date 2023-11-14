import { Space, Table } from "antd";
import React, { Fragment, useCallback, useMemo, useState } from "react";
import { ColumnsType } from "antd/es/table";
import { IoIosAdd } from "react-icons/io";

import { CreateGameModalForm } from "./create_game";
import { GameTable, OptionsBox, TableContainer } from "./styled";

import { IGame } from "../types";
import { useGetActiveGames } from "../hooks";
import { datePrettify } from "@/utils";
import Link from "next/link";
import { MedievalButton } from ".";

export const GamesTable = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const onOpenModal = useCallback(() => setModalOpen(true), []);
  const onCloseModal = useCallback(() => setModalOpen(false), []);

  const { data, isLoading } = useGetActiveGames();

  const columns = useMemo<ColumnsType<IGame>>(() => {
    return [
      { dataIndex: "name", title: "Name" },
      {
        dataIndex: "numberOfUsers",
        title: "Users",
        render(value) {
          return <h3>{value}/4</h3>;
        },
      },
      {
        dataIndex: "createdAt",
        title: "Created at",
        render(value) {
          return <span>{datePrettify(value)}</span>;
        },
      },
      {
        dataIndex: "id",
        title: "",
        render(id) {
          return (
            <Space>
              <Link href={`/game/${id}`}>
                <MedievalButton>Connect</MedievalButton>
              </Link>
            </Space>
          );
        },
      },
    ];
  }, []);
  return (
    <TableContainer>
      <OptionsBox>
        <MedievalButton icon={<IoIosAdd size={30} />} onClick={onOpenModal}>
          Create Room
        </MedievalButton>
      </OptionsBox>
      <CreateGameModalForm onCancel={onCloseModal} visible={modalOpen} />
      <GameTable
        pagination={false}
        showSorterTooltip={false}
        columns={columns}
        dataSource={data}
        loading={isLoading}
      />
    </TableContainer>
  );
};
