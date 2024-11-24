import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const serviceRoleKey = import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

// Regular client for normal operations
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

// Service role client for admin operations
export const adminSupabase = createClient(supabaseUrl, serviceRoleKey || supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});