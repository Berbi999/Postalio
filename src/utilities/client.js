import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tbxxyivkeefkzzwvsqkx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRieHh5aXZrZWVma3p6d3ZzcWt4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMzYyMzcsImV4cCI6MjAxNDYxMjIzN30.BJT-pJjZrjKzowzsIFSOMTF2VhI7YLj7nsMRxV1W1G8";
const client = createClient(supabaseUrl, supabaseKey);
export default client;
