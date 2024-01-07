"use client";
import { Stack } from "@mui/material";
import { DataGrid, GridOverlay } from "@mui/x-data-grid";
import type { DataGridProps } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

type Props = { path?: string; generateId?: boolean } & DataGridProps;

export function Table(props: Props) {
  const router = useRouter();

  const { path, generateId, rows, ...rest } = props;
  const rowsWithId = generateId
    ? rows.map(v => {
        //eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return { ...v, id: uuidv4() };
      })
    : rows;

  if (path) {
    return (
      <DataGrid
        disableRowSelectionOnClick
        disableColumnMenu
        autoHeight
        hideFooter
        onRowClick={({ row }: { row: { id: number } }) => {
          router.push(`${path}/${row.id}`);
        }}
        slots={{
          noRowsOverlay: () => (
            <GridOverlay>
              <Stack height="100%" alignItems="center" justifyContent="center">
                データなし
              </Stack>
            </GridOverlay>
          ),
          ...rest.slots,
        }}
        {...rest}
        rows={rowsWithId}
      />
    );
  } else {
    return (
      <DataGrid
        disableRowSelectionOnClick
        disableColumnMenu
        autoHeight
        hideFooter
        slots={{
          noRowsOverlay: () => (
            <GridOverlay>
              <Stack height="100%" alignItems="center" justifyContent="center">
                データなし
              </Stack>
            </GridOverlay>
          ),
          ...rest.slots,
        }}
        {...rest}
        rows={rowsWithId}
      />
    );
  }
}
