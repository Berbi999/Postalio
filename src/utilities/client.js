import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tzsmatbvsorrepmzfmby.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6c21hdGJ2c29ycmVwbXpmbWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMjAzNTUsImV4cCI6MjAxNDc5NjM1NX0.r4hx0wQ95SwsdUGRPxihP_Wrjj9VLVthjXFqDxiyQo8";
const client = createClient(supabaseUrl, supabaseKey);
export default client;
