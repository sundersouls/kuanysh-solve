import { useNavigate, useSearchParams } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AForm } from "../components/aForm";

export const AModal = ({
  mode = "create",
  row = null,
  updateRow,
  createRow,
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const open = searchParams.get("modal") === "open";

  const handleClose = () => {
    navigate("/table");
  };

  const handleSubmit = (data) => {
    if (mode === "edit" && row) {
      updateRow({ id: row.id, ...data });
    } else {
      createRow(data);
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {mode === "edit" ? "Редактировать контакт" : "Добавить контакт"}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <AForm
          defaultValues={row}
          onSubmit={handleSubmit}
          onCancel={handleClose}
          submitText={mode === "edit" ? "Сохранить" : "Создать"}
        />
      </DialogContent>
    </Dialog>
  );
};
