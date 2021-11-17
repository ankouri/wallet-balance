import React from "react";
import { TableRow, TableCell, Skeleton } from "@mui/material";
export default function TokenListSkeleton() {
  return (
    <TableRow>
      <TableCell>
        <Skeleton variant="circular" width={40} height={40} />
      </TableCell>
      <TableCell>
        <Skeleton variant="rectangular" width={`100%`} height={40} />
      </TableCell>
      <TableCell>
        <Skeleton variant="rectangular" width={`100%`} height={40} />
      </TableCell>
      <TableCell>
        <Skeleton variant="rectangular" width={`100%`} height={40} />
      </TableCell>
      <TableCell>
        <Skeleton variant="rectangular" width={`100%`} height={40} />
      </TableCell>
      <TableCell>
        <Skeleton variant="rectangular" width={`100%`} height={40} />
      </TableCell>
    </TableRow>
  );
}
