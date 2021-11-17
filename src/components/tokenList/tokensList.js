import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TableContainer,
} from "@mui/material";
import ItemToken from "./itemToken";
import { useSelector } from "react-redux";
import { style } from "./tokenList-style";
import TokenListSkeleton from "./tokenListSkeleton";

export default function TokensList() {
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);

  const wallet = useSelector((state) => state.wallet.value);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <style.Wrapper>
      <TableContainer
        sx={{
          width: "100%",
          maxHeight: "600px",
          minHeight: "600px",
          position: "relative",
        }}
      >
        <Table aria-label="token list" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell align="left"> Logo</TableCell>
              <TableCell align="left"> Name</TableCell>
              <TableCell align="left">Symbol</TableCell>
              <TableCell align="left">Decimal</TableCell>
              <TableCell align="left">Balance</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wallet.loading ? (
              [...new Array(6)].map((item, key) => {
                return <TokenListSkeleton key={key} />;
              })
            ) : wallet.erc20Assets.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={100}
                  sx={{ fontSize: "20px", textAlign: "center" }}
                >
                  There is no assets in this wallet. or you select wrong chain.
                  <br /> Please change chain type and try again.
                </TableCell>
              </TableRow>
            ) : (
              wallet.erc20Assets
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((token, key) => {
                  return (
                    <ItemToken
                      key={key}
                      token={token}
                    />
                  );
                })
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 24, 45]}
          component="div"
          count={wallet.erc20Assets.length || [...new Array(6)].length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </style.Wrapper>
  );
}
