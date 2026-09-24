import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name" })
    .max(100, { message: "Name must be under 100 characters" }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Please enter a valid phone number" })
    .max(20, { message: "Phone number is too long" })
    .regex(/^[0-9+\-\s()]+$/, { message: "Only digits and + - ( ) allowed" }),
  email: z
    .string()
    .trim()
    .max(255, { message: "Email is too long" })
    .email({ message: "Please enter a valid email" })
    .optional()
    .or(z.literal("")),
  product_category: z
    .string()
    .trim()
    .max(80, { message: "Category is too long" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(5, { message: "Please tell us what you're looking for" })
    .max(1000, { message: "Message must be under 1000 characters" }),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

const CATEGORIES = [
  "Floor Tiles",
  "Wall Tiles",
  "Sanitaryware",
  "Bath Fittings",
  "Marble & Granite",
  "Other",
];

const EnquirySection = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      product_category: "",
      message: "",
    },
  });

  const onSubmit = async (values: EnquiryFormValues) => {
    const { error } = await supabase.from("product_enquiries").insert({
      name: values.name,
      phone: values.phone,
      email: values.email || null,
      product_category: values.product_category || null,
      message: values.message,
    });

    if (error) {
      throw new Error(error.message || "Could not submit your enquiry");
    }

    setSubmitted(true);
    reset();
  };

  return (
    <section id="enquiry" className="mt-24 lg:mt-32 max-w-7xl mx-auto px-6 lg:px-12">
      <RevealOnScroll
        variant="depth"
        className="relative border border-foreground/10 glass-panel shadow-studio-lg p-8 lg:p-12 overflow-hidden"
      >
        <div className="absolute inset-0 arch-grid arch-grid-mask pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 left-0 h-1 w-24 bg-tannin" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
          {/* Left intro */}
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-tannin">
              Product Enquiry
            </span>
            <h3 className="font-serif text-3xl lg:text-4xl mt-3 leading-tight">
              Request a quote or
              <br />
              <span className="italic text-tannin">visit our showroom.</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mt-6 max-w-[40ch]">
              Tell us what you're looking for — floor tiles, wall tiles,
              sanitaryware or bath fittings. Our team will get back to you with
              pricing and availability.
            </p>
            <p className="text-xs text-muted-foreground mt-6">
              Or call us directly — we're happy to help.
            </p>
          </div>

          {/* Right form / confirmation */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 px-6 border border-foreground/10 bg-card/60">
                <CheckCircle2 size={48} className="text-tannin mb-4" />
                <h4 className="font-serif text-2xl">Thank you — enquiry received.</h4>
                <p className="text-sm text-muted-foreground mt-3 max-w-[40ch]">
                  Your message has been saved. Our team will reach out to you
                  shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-3d mt-8 bg-foreground text-background px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-tannin"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="enquiry-name"
                      className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground"
                    >
                      Name <span className="text-tannin">*</span>
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      autoComplete="name"
                      disabled={isSubmitting}
                      {...register("name")}
                      className="w-full bg-background/60 border border-foreground/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-tannin transition-colors disabled:opacity-50"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="enquiry-phone"
                      className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground"
                    >
                      Phone <span className="text-tannin">*</span>
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      autoComplete="tel"
                      disabled={isSubmitting}
                      {...register("phone")}
                      className="w-full bg-background/60 border border-foreground/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-tannin transition-colors disabled:opacity-50"
                      placeholder="e.g. 9951508888"
                    />
                    {errors.phone && (
                      <p className="text-xs text-destructive">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="enquiry-email"
                      className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground"
                    >
                      Email <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input
                      id="enquiry-email"
                      type="email"
                      autoComplete="email"
                      disabled={isSubmitting}
                      {...register("email")}
                      className="w-full bg-background/60 border border-foreground/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-tannin transition-colors disabled:opacity-50"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="enquiry-category"
                      className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground"
                    >
                      Category <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <select
                      id="enquiry-category"
                      disabled={isSubmitting}
                      defaultValue=""
                      {...register("product_category")}
                      className="w-full bg-background/60 border border-foreground/15 px-4 py-3 text-sm text-foreground focus:outline-none focus:border-tannin transition-colors disabled:opacity-50"
                    >
                      <option value="">Select a category</option>
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    {errors.product_category && (
                      <p className="text-xs text-destructive">
                        {errors.product_category.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="enquiry-message"
                    className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground"
                  >
                    Message <span className="text-tannin">*</span>
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={4}
                    disabled={isSubmitting}
                    {...register("message")}
                    className="w-full bg-background/60 border border-foreground/15 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-tannin transition-colors disabled:opacity-50 resize-y"
                    placeholder="Tell us the tile size, quantity, brand, or product you're interested in…"
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-3d w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-tannin disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default EnquirySection;
