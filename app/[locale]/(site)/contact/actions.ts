"use server";

import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Provide a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(20, "Please provide at least 20 characters"),
});

export type ContactFormState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; issues?: string[] };

export async function submitContact(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  try {
    const parsed = contactSchema.safeParse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      message: formData.get("message"),
    });

    if (!parsed.success) {
      const issues = parsed.error.issues.map((issue) => issue.message);
      return {
        status: "error",
        message: "Please correct the highlighted fields.",
        issues,
      };
    }

    const payload = { ...parsed.data, submittedAt: new Date().toISOString() };

    console.info("Quadris contact submission", payload);

    return {
      status: "success",
      message: "Thank you. An advisor will respond within one business day.",
    };
  } catch (error) {
    console.error("Failed to submit contact form", error);
    return {
      status: "error",
      message: "We were unable to process your enquiry. Please try again or contact us by phone.",
    };
  }
}
