import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ltfklnphuneuiqdgdkzn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0ZmtsbnBodW5ldWlxZGdka3puIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4NjI3OTgsImV4cCI6MjA4NzQzODc5OH0.TUcx2bNomjPo10gC6ZIT4S9GNDlzBMFGxHXwfyPCAkc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
