import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPA_URL;
if (supabaseUrl === undefined) {
  throw new Error('VITE_SUPA_URL is not defined');
}

const supabaseKey = import.meta.env.VITE_SUPA_KEY
if (supabaseKey === undefined) {
  throw new Error('VITE_SUPA_KEY is not defined');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase