// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.SupaBaseUrl || '';
const supabaseKey = process.env.supabaseKey || '';

export const supabase = createClient(supabaseUrl, supabaseKey);
