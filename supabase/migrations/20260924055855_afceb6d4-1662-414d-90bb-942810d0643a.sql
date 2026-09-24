CREATE TABLE public.product_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  product_category TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.product_enquiries TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.product_enquiries TO authenticated;
GRANT ALL ON public.product_enquiries TO service_role;

ALTER TABLE public.product_enquiries ENABLE ROW LEVEL SECURITY;

-- Any visitor can submit a new enquiry
CREATE POLICY "Anyone can submit an enquiry"
  ON public.product_enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Signed-in staff can view all enquiries
CREATE POLICY "Staff can view enquiries"
  ON public.product_enquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Updated_at auto-maintenance
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
  RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_product_enquiries_updated_at
  BEFORE UPDATE ON public.product_enquiries
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();