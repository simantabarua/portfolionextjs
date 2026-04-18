import { z } from "zod";

export const contactFormSchema = z.object({
  user_name: z.string().min(2, "Name must be at least 2 characters."),
  user_email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
