import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Box, Button } from "@mui/material";
import { dataSchema } from "../dataSchema";

export const AForm = ({
  defaultValues,
  onSubmit,
  onCancel,
  submitText = "Сохранить",
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(dataSchema),
    defaultValues: defaultValues || {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
      <Controller
        name="fullName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="ФИО"
            fullWidth
            margin="normal"
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
            autoFocus
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Телефон"
            fullWidth
            margin="normal"
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        )}
      />

      <Box sx={{ mt: 3, display: "flex", gap: 2, justifyContent: "flex-end" }}>
        <Button onClick={onCancel} variant="outlined">
          Отмена
        </Button>
        <Button type="submit" variant="contained" disabled={isSubmitting}>
          {submitText}
        </Button>
      </Box>
    </Box>
  );
};
