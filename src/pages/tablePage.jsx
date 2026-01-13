import { useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  CircularProgress,
  Alert,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  useData,
  useAddRow,
  useUpdateRow,
  useDeleteRow,
} from "../shared/query";
import { AModal } from "../shared/modals/aModal";

export const TablePage = () => {
  const { data = [] } = useData();
  console.log(data);
  const navigate = useNavigate();
  const add = useAddRow();
  const update = useUpdateRow();
  const del = useDeleteRow();
  const [params, setParams] = useSearchParams();
  const rowId = params.get("rowId");
  const editingData = data.find((u) => u.id === rowId);

  const handleAddClick = () => {
    navigate("/table?modal=open");
  };

  const handleRowDoubleClick = (row) => {
    navigate(`/table?modal=open&rowId=${row.id}`);
  };

  // if (loading) {

  return (
    <Container sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" component="h1">
          Страница таблицы
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddClick}
        >
          Добавить
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>ФИО</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell>
                <strong>Телефон</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Действия</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ py: 3 }}
                  >
                    Контакты отсутствуют. Добавьте первый контакт!
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              data.map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  sx={{ cursor: "pointer" }}
                  onDoubleClick={() => handleRowDoubleClick(row)}
                >
                  <TableCell>{row.fullName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => del.mutate(row.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <AModal
        mode={editingData ? "edit" : "create"}
        row={editingData}
        createRow={add.mutate}
        updateRow={update.mutate}
      />
    </Container>
  );
};
