import { z } from "zod";

export const dataSchema = z.object({
  fullName: z
    .string()
    .min(2, "ФИО должно содержать минимум 2 символа")
    .max(100, "ФИО слишком длинное"),
  email: z.string().email("Некорректный email адрес"),
  phone: z
    .string()
    .min(10, "Номер телефона должен содержать минимум 10 цифр")
    .regex(/^[\d\s\+\-\(\)]+$/, "Некорректный формат номера телефона"),
});
